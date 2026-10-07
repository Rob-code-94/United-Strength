import { useEffect, useRef, useState } from "react";
import {
  mergeFaq,
  mergeLibrary,
  mergePages,
  type BrandKitFields,
  type MediaLibraryItem,
} from "@/hub/brand-kit";

export interface KitEditorState {
  draft: BrandKitFields;
  draftUpdatedAt: string;
  library: MediaLibraryItem[];
}

/** Debounce rapid color/font clicks before hitting the network. */
const AUTOSAVE_MS = 1000;
const MAX_CONFLICT_RETRIES = 3;

export function useKitDraft(initial: KitEditorState, onChange: (next: KitEditorState) => void) {
  const [draft, setDraft] = useState(() => ({
    ...initial.draft,
    faq: mergeFaq(initial.draft.faq),
    pages: mergePages(initial.draft.pages),
  }));
  const [library, setLibrary] = useState(() => mergeLibrary(initial.library));
  const [expected, setExpected] = useState(initial.draftUpdatedAt);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const skipAutosave = useRef(true);
  const draftRef = useRef(draft);
  const expectedRef = useRef(expected);
  const libraryRef = useRef(library);
  const autosaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const savingRef = useRef(false);
  const dirtyRef = useRef(false);
  /** Bumps on every local edit so a slow response cannot clobber newer UI state. */
  const editRev = useRef(0);
  const sentRev = useRef(0);

  const syncExpected = (nextExpected: string) => {
    expectedRef.current = nextExpected;
    setExpected(nextExpected);
  };

  const applyResponse = (payload: Partial<KitEditorState> & { error?: string }, opts?: { forceDraft?: boolean }) => {
    if (payload.draftUpdatedAt) {
      syncExpected(payload.draftUpdatedAt);
    }
    if (payload.draft && payload.draftUpdatedAt) {
      const nextLibrary = mergeLibrary(payload.library ?? libraryRef.current);
      if (opts?.forceDraft || sentRev.current === editRev.current) {
        const next = {
          ...payload.draft,
          faq: mergeFaq(payload.draft.faq),
          pages: mergePages(payload.draft.pages),
        };
        skipAutosave.current = true;
        draftRef.current = next;
        setDraft(next);
        libraryRef.current = nextLibrary;
        setLibrary(nextLibrary);
        onChange({ draft: next, draftUpdatedAt: payload.draftUpdatedAt, library: nextLibrary });
        return;
      }
      libraryRef.current = nextLibrary;
      setLibrary(nextLibrary);
      onChange({
        draft: draftRef.current,
        draftUpdatedAt: payload.draftUpdatedAt,
        library: nextLibrary,
      });
      return;
    }
    if (payload.library) {
      const nextLibrary = mergeLibrary(payload.library);
      libraryRef.current = nextLibrary;
      setLibrary(nextLibrary);
      onChange({ draft: draftRef.current, draftUpdatedAt: expectedRef.current, library: nextLibrary });
    }
  };

  const persist = async (opts?: { manual?: boolean }): Promise<boolean> => {
    if (savingRef.current) {
      dirtyRef.current = true;
      return false;
    }
    savingRef.current = true;
    dirtyRef.current = false;
    setPending(true);
    if (opts?.manual) {
      setError(null);
      setMessage(null);
    } else {
      setError(null);
    }

    let ok = false;
    try {
      for (let attempt = 0; attempt <= MAX_CONFLICT_RETRIES; attempt++) {
        sentRev.current = editRev.current;
        const response = await fetch("/api/brand-kit", {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            kit: draftRef.current,
            expectedUpdatedAt: expectedRef.current,
          }),
        });
        const payload = (await response.json()) as KitEditorState & { error?: string };

        if (response.status === 409) {
          if (typeof payload.draftUpdatedAt === "string" && payload.draftUpdatedAt) {
            syncExpected(payload.draftUpdatedAt);
          }
          // Keep local draft — this is usually our own overlapping autosave, not another editor.
          if (attempt < MAX_CONFLICT_RETRIES) continue;
          applyResponse(payload, { forceDraft: true });
          setError(payload.error ?? "This kit was updated elsewhere. Reload and try again.");
          break;
        }

        if (!response.ok) {
          setError(payload.error ?? "Brand kit could not be saved.");
          break;
        }

        applyResponse(payload);
        setMessage(opts?.manual ? "Draft saved. Publish when you want the live site to change." : "Saved draft");
        ok = true;
        break;
      }
    } catch {
      setError("Brand kit could not be saved. Try again.");
    } finally {
      savingRef.current = false;
      setPending(false);
      if (dirtyRef.current) {
        dirtyRef.current = false;
        void persist(opts);
      }
    }
    return ok;
  };

  const save = async () => {
    if (autosaveTimer.current) {
      clearTimeout(autosaveTimer.current);
      autosaveTimer.current = null;
    }
    await persist({ manual: true });
  };

  useEffect(() => {
    draftRef.current = draft;
  }, [draft]);

  useEffect(() => {
    expectedRef.current = expected;
  }, [expected]);

  useEffect(() => {
    libraryRef.current = library;
  }, [library]);

  useEffect(() => {
    if (skipAutosave.current) {
      skipAutosave.current = false;
      return;
    }
    editRev.current += 1;
    if (autosaveTimer.current) clearTimeout(autosaveTimer.current);
    autosaveTimer.current = setTimeout(() => {
      void persist();
    }, AUTOSAVE_MS);
    return () => {
      if (autosaveTimer.current) clearTimeout(autosaveTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draft]);

  const act = async (action: "publish" | "revert") => {
    if (autosaveTimer.current) {
      clearTimeout(autosaveTimer.current);
      autosaveTimer.current = null;
    }
    // Flush pending draft before publish/revert so server has latest colors/fonts.
    if (action === "publish") {
      await persist({ manual: true });
    }
    setPending(true);
    setError(null);
    setMessage(null);
    try {
      const response = await fetch("/api/brand-kit", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ action }),
      });
      const payload = (await response.json()) as KitEditorState & { error?: string };
      if (!response.ok) {
        setError(payload.error ?? "That action failed.");
        return;
      }
      editRev.current += 1;
      sentRev.current = editRev.current;
      applyResponse(payload, { forceDraft: true });
      setMessage(action === "publish" ? "Published. The live V1 site uses this kit." : "Draft reverted to the published kit.");
    } catch {
      setError("That action failed. Try again.");
    } finally {
      setPending(false);
    }
  };

  const logout = async () => {
    await fetch("/api/hub-session", { method: "DELETE" });
    window.location.assign("/hub");
  };

  const setDraftTracked: typeof setDraft = (value) => {
    setDraft(value);
  };

  return {
    draft,
    setDraft: setDraftTracked,
    library,
    expected,
    message,
    setMessage,
    error,
    setError,
    pending,
    applyResponse: (payload: Partial<KitEditorState> & { error?: string }) => {
      editRev.current += 1;
      sentRev.current = editRev.current;
      applyResponse(payload, { forceDraft: true });
    },
    save,
    act,
    logout,
  };
}
