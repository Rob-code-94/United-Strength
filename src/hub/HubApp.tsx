import { useEffect, useState } from "react";
import type { BrandKitFields } from "@/hub/brand-kit";
import HubEditor from "@/hub/HubEditor";
import HubLogin from "@/hub/HubLogin";

interface EditorPayload {
  draft: BrandKitFields;
  draftUpdatedAt: string;
}

export default function HubApp() {
  const [ready, setReady] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [editor, setEditor] = useState<EditorPayload | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const path = window.location.pathname.replace(/\/$/, "") || "/";
    if (path === "/backend") {
      window.history.replaceState(null, "", "/hub");
    }
  }, []);

  const load = async () => {
    setError(null);
    const session = await fetch("/api/hub-session");
    if (!session.ok) {
      setAuthed(false);
      setEditor(null);
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
    setEditor(payload);
    setAuthed(true);
    setReady(true);
  };

  useEffect(() => {
    void load();
  }, []);

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
      {ready && !error && authed && editor ? (
        <HubEditor initial={editor} onChange={setEditor} />
      ) : null}
    </div>
  );
}
