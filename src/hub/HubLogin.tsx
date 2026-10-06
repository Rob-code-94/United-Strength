import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { gymPhotos } from "@/assets/images/gym";

interface HubLoginProps {
  onSuccess: () => void;
}

/**
 * Donor: @shadcn-space/login-02 (Pro).
 * Social sign-in and account creation are omitted.
 * Reset emails the owner once Resend is connected.
 */
export default function HubLogin({ onSuccess }: HubLoginProps) {
  const resetToken = new URLSearchParams(window.location.search).get("reset") ?? "";
  const [mode, setMode] = useState<"sign-in" | "reset" | "sent">(resetToken ? "reset" : "sign-in");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [signingIn, setSigningIn] = useState(false);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setPending(true);
    setSigningIn(true);
    setError(null);
    try {
      const response = await fetch("/api/hub-session", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ password, remember }),
      });
      const payload = (await response.json()) as { error?: string };
      if (!response.ok) {
        setError(payload.error ?? "That password is not correct.");
        return;
      }
      onSuccess();
    } catch {
      setError("Sign in failed. Try again.");
    } finally {
      setPending(false);
      setSigningIn(false);
    }
  };

  const requestReset = async () => {
    setPending(true);
    setError(null);
    try {
      const response = await fetch("/api/hub-reset", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ action: "request" }),
      });
      const payload = (await response.json()) as { error?: string };
      if (!response.ok) {
        setError(payload.error ?? "The reset email could not be sent.");
        return;
      }
      setMode("sent");
    } catch {
      setError("The reset email could not be sent.");
    } finally {
      setPending(false);
    }
  };

  const completeReset = async (event: FormEvent) => {
    event.preventDefault();
    if (password !== confirm) {
      setError("Those passwords do not match.");
      return;
    }
    setPending(true);
    setError(null);
    try {
      const response = await fetch("/api/hub-reset", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ action: "complete", token: resetToken, password }),
      });
      const payload = (await response.json()) as { error?: string };
      if (!response.ok) {
        setError(payload.error ?? "This reset link is invalid or expired.");
        return;
      }
      window.history.replaceState(null, "", "/hub");
      onSuccess();
    } catch {
      setError("The new password could not be saved.");
    } finally {
      setPending(false);
    }
  };

  return (
    <section className="bg-background min-h-screen flex items-center justify-center relative px-4 py-8">
      <Card className="rounded-2xl shadow-md max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden gap-6 p-0">
        <div className="p-6 sm:p-10 flex flex-col justify-center">
          <p className="mb-6 font-sans text-xs font-bold uppercase tracking-[0.18em]">United Strength</p>
          <h1 className="text-xl font-bold">{mode === "sign-in" ? "Brand hub" : "Reset password"}</h1>
          <p className="text-muted-foreground text-sm font-medium">
            {mode === "sent"
              ? "Check the club email for a reset link. It expires in 30 minutes."
              : mode === "reset"
                ? "Choose a new hub password."
                : "Edit the live site foundation."}
          </p>
          {mode === "sent" ? (
            <Button
              type="button"
              variant="outline"
              className="mt-6 w-full min-h-[44px]"
              onClick={() => {
                setMode("sign-in");
                setError(null);
              }}
            >
              Back to sign in
            </Button>
          ) : null}
          {mode === "reset" ? (
            <form className="mt-6" onSubmit={completeReset}>
              <div className="mb-6">
                <Label htmlFor="new-password" className="block mb-1">
                  New password
                </Label>
                <Input
                  id="new-password"
                  name="new-password"
                  type="password"
                  required
                  minLength={10}
                  autoComplete="new-password"
                  placeholder="At least 10 characters"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="dark:bg-background h-11 text-base shadow-xs"
                />
              </div>
              <div className="mb-6">
                <Label htmlFor="confirm-password" className="block mb-1">
                  Confirm password
                </Label>
                <Input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  required
                  minLength={10}
                  autoComplete="new-password"
                  placeholder="Repeat the new password"
                  value={confirm}
                  onChange={(event) => setConfirm(event.target.value)}
                  className="dark:bg-background h-11 text-base shadow-xs"
                />
              </div>
              {error ? (
                <p className="mb-4 text-sm text-red-700" role="alert">
                  {error}
                </p>
              ) : null}
              <Button type="submit" disabled={pending} className="w-full min-h-[44px] cursor-pointer rounded-lg hover:bg-primary/80">
                {pending ? "Saving..." : "Save password"}
              </Button>
            </form>
          ) : null}
          {mode === "sign-in" ? (
          <form className="mt-6" onSubmit={onSubmit}>
            <div className="mb-6">
              <Label htmlFor="password" className="block mb-1">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="dark:bg-background h-11 shadow-xs"
              />
            </div>
            <div className="flex items-center gap-2 my-7 min-h-[44px]">
              <input
                id="remember"
                type="checkbox"
                checked={remember}
                onChange={(event) => setRemember(event.target.checked)}
                className="size-4"
              />
              <Label htmlFor="remember" className="text-sm text-primary font-normal cursor-pointer">
                Remember this device
              </Label>
            </div>
            {error ? (
              <p className="mb-4 text-sm text-red-700" role="alert">
                {error}
              </p>
            ) : null}
            <Button type="submit" disabled={pending} className="w-full min-h-[44px] cursor-pointer rounded-lg hover:bg-primary/80">
              {signingIn ? "Signing in..." : "Sign in"}
            </Button>
            <Button
              type="button"
              variant="ghost"
              disabled={pending}
              className="mt-2 w-full min-h-[44px]"
              onClick={() => void requestReset()}
            >
              Reset password
            </Button>
          </form>
          ) : null}
        </div>
        <div className="hidden md:block relative min-h-[420px] bg-[#111111]">
          <img
            src={gymPhotos.experienceBroll}
            alt="Stronger United mural at United Strength"
            className="w-full h-full object-cover object-[center_40%]"
          />
          <p className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-transparent px-8 pb-8 pt-16 font-sans text-xs font-bold uppercase tracking-[0.22em] text-[#F3EEE7]">
            United Strength
          </p>
        </div>
      </Card>
    </section>
  );
}
