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

const AUTOSAVE_MS = 800;

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
  const autosaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const applyResponse = (payload: Partial<KitEditorState> & { error?: string }) => {
    if (payload.draft && payload.draftUpdatedAt) {
      const next = {
        ...payload.draft,
        faq: mergeFaq(payload.draft.faq),
        pages: mergePages(payload.draft.pages),
      };
      const nextLibrary = mergeLibrary(payload.library ?? library);
      skipAutosave.current = true;
      setDraft(next);
      setLibrary(nextLibrary);
      setExpected(payload.draftUpdatedAt);
      onChange({ draft: next, draftUpdatedAt: payload.draftUpdatedAt, library: nextLibrary });
      return;
    }
    if (payload.library) {
      const nextLibrary = mergeLibrary(payload.library);
      setLibrary(nextLibrary);
      onChange({ draft, draftUpdatedAt: expected, library: nextLibrary });
    }
  };

  const save = async () => {
    setPending(true);
    setError(null);
    setMessage(null);
    try {
      const response = await fetch("/api/brand-kit", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ kit: draft, expectedUpdatedAt: expected }),
      });
      const payload = (await response.json()) as KitEditorState & { error?: string };
      if (response.status === 409) {
        applyResponse(payload);
        setError(payload.error ?? "This kit was updated elsewhere. Reload and try again.");
        return;
      }
      if (!response.ok) {
        setError(payload.error ?? "Brand kit could not be saved.");
        return;
      }
      applyResponse(payload);
      setMessage("Draft saved. Publish when you want the live site to change.");
    } catch {
      setError("Brand kit could not be saved. Try again.");
    } finally {
      setPending(false);
    }
  };

  useEffect(() => {
    draftRef.current = draft;
  }, [draft]);

  useEffect(() => {
    expectedRef.current = expected;
  }, [expected]);

  useEffect(() => {
    if (skipAutosave.current) {
      skipAutosave.current = false;
      return;
    }
    if (autosaveTimer.current) clearTimeout(autosaveTimer.current);
    autosaveTimer.current = setTimeout(() => {
      void (async () => {
        setPending(true);
        setError(null);
        try {
          const response = await fetch("/api/brand-kit", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ kit: draftRef.current, expectedUpdatedAt: expectedRef.current }),
          });
          const payload = (await response.json()) as KitEditorState & { error?: string };
          if (response.status === 409) {
            applyResponse(payload);
            setError(payload.error ?? "This kit was updated elsewhere. Reload and try again.");
            return;
          }
          if (!response.ok) {
            setError(payload.error ?? "Brand kit could not be saved.");
            return;
          }
          applyResponse(payload);
          setMessage("Saved draft");
        } catch {
          setError("Brand kit could not be saved. Try again.");
        } finally {
          setPending(false);
        }
      })();
    }, AUTOSAVE_MS);
    return () => {
      if (autosaveTimer.current) clearTimeout(autosaveTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draft]);

  const act = async (action: "publish" | "revert") => {
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
      applyResponse(payload);
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

  return {
    draft,
    setDraft,
    library,
    expected,
    message,
    setMessage,
    error,
    setError,
    pending,
    applyResponse,
    save,
    act,
    logout,
  };
}
