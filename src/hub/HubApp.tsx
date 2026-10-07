import { useEffect, useState } from "react";
import type { BrandKitFields, MediaLibraryItem } from "@/hub/brand-kit";
import HubBrandKit from "@/hub/HubBrandKit";
import HubEditor from "@/hub/HubEditor";
import HubHome, { type HubMode } from "@/hub/HubHome";
import HubLogin from "@/hub/HubLogin";

interface EditorPayload {
  draft: BrandKitFields;
  draftUpdatedAt: string;
  library: MediaLibraryItem[];
}

export default function HubApp() {
  const [ready, setReady] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [editor, setEditor] = useState<EditorPayload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<HubMode>("home");

  useEffect(() => {
    const path = window.location.pathname.replace(/\/$/, "") || "/";
    if (path === "/backend") {
      window.history.replaceState(null, "", "/hub");
    }
  }, []);

  const load = async () => {
    setError(null);
    const session = await fetch("/api/hub-session");
    let sessionOk = session.ok;
    if (sessionOk) {
      try {
        const body = (await session.json()) as { ok?: boolean };
        sessionOk = body.ok === true;
      } catch {
        sessionOk = false;
      }
    }
    if (!sessionOk) {
      setAuthed(false);
      setEditor(null);
      setMode("home");
      setReady(true);
      return;
    }
    const kit = await fetch("/api/brand-kit");
    if (!kit.ok) {
      setError("Brand kit is unavailable. Try again.");
      setReady(true);
      return;
    }
    const payload = (await kit.json()) as EditorPayload;
    setEditor({
      ...payload,
      library: payload.library ?? [],
    });
    setAuthed(true);
    setMode("home");
    setReady(true);
  };

  useEffect(() => {
    void load();
  }, []);

  const logout = async () => {
    await fetch("/api/hub-session", { method: "DELETE" });
    window.location.assign("/hub");
  };

  return (
    <div className="hub-shell bg-background text-foreground">
      {!ready ? (
        <p className="px-4 py-16 text-sm text-muted-foreground" role="status">
          Loading hub...
        </p>
      ) : null}
      {ready && error ? (
        <div className="px-4 py-16">
          <p className="text-sm text-red-700" role="alert">
            {error}
          </p>
          <button type="button" className="mt-4 min-h-[44px] underline" onClick={() => void load()}>
            Retry
          </button>
        </div>
      ) : null}
      {ready && !error && !authed ? <HubLogin onSuccess={() => void load()} /> : null}
      {ready && !error && authed && editor && mode === "home" ? (
        <HubHome onSelect={setMode} onLogout={() => void logout()} />
      ) : null}
      {ready && !error && authed && editor && mode === "brand" ? (
        <HubBrandKit
          initial={editor}
          onChange={setEditor}
          onGoHome={() => setMode("home")}
          onGoWebsite={() => setMode("website")}
        />
      ) : null}
      {ready && !error && authed && editor && mode === "website" ? (
        <HubEditor
          initial={editor}
          onChange={setEditor}
          onGoHome={() => setMode("home")}
          onGoBrandKit={() => setMode("brand")}
        />
      ) : null}
    </div>
  );
}
