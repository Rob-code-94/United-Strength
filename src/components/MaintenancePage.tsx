/**
 * Full-viewport maintenance gate for Oct 1 migration morning.
 * Enable with `VITE_MAINTENANCE_MODE=true` (rebuild/redeploy).
 */
export default function MaintenancePage() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-[#111111] px-6 text-center text-[#F3EEE7]">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F3EEE7]/50">
        United Strength Club
      </p>
      <h1
        className="mt-4 max-w-[16ch] font-sans text-[28px] font-bold uppercase leading-[1.1] tracking-[-0.04em] md:text-[36px]"
        style={{ fontFamily: "'Satoshi', sans-serif" }}
      >
        We&apos;ll be back this evening
      </h1>
      <p className="mt-5 max-w-[36ch] text-[14px] leading-relaxed text-[#F3EEE7]/70">
        Our membership platform is migrating. The site is temporarily offline for
        maintenance. Thank you for your patience — Columbus, Ohio.
      </p>
      <p className="mt-10 font-mono text-[9px] uppercase tracking-[0.18em] text-[#F3EEE7]/40">
        Questions · info@unitedstrengthgym.com
      </p>
    </div>
  );
}

export const isMaintenanceMode =
  String(import.meta.env.VITE_MAINTENANCE_MODE || "").toLowerCase() === "true";
