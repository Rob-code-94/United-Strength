/**
 * Public inboxes — keep segmented (info / membership / training).
 * Membership applications, Experience United, and Run Club signup → membership@.
 */

export const INFO_INBOX = "info@unitedstrengthgym.com";
export const MEMBERSHIP_INBOX = "membership@unitedstrengthgym.com";
export const TRAINING_INBOX = "training@unitedstrengthgym.com";

export function mailto(
  inbox: string,
  subject?: string,
): string {
  const base = `mailto:${inbox}`;
  if (!subject) return base;
  return `${base}?subject=${encodeURIComponent(subject)}`;
}

export const MEMBERSHIP_APPLY_MAILTO = mailto(
  MEMBERSHIP_INBOX,
  "Membership Application",
);

export const EXPERIENCE_UNITED_MAILTO = mailto(
  MEMBERSHIP_INBOX,
  "Experience United",
);

export const RUN_CLUB_MAILTO = mailto(
  MEMBERSHIP_INBOX,
  "Move the City Run Club",
);

export const TRAINING_INQUIRE_MAILTO = mailto(TRAINING_INBOX);
export const INFO_MAILTO = mailto(INFO_INBOX);
