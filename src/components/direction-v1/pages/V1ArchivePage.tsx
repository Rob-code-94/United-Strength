import { FormEvent, useState } from "react";
import { archiveCoverUrl } from "../../../assets/images/archive";
import { gymPhotos } from "../../../assets/images/gym";
import { ARCHIVE_PAGE } from "../../../data/culture-copy";
import { LookbookOffCenteredStack } from "../../direction-ef/lookbook";
import { usePageCopy } from "../V1Kit";
import {
  HubCopyText,
  V1BackButton,
  V1InteriorShell,
  V1MediaImg,
} from "./V1Interior";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAILCHIMP_ACTION = String(import.meta.env.VITE_MAILCHIMP_ARCHIVE_ACTION || "").trim();
const SATOSHI = { fontFamily: "'Satoshi', sans-serif" } as const;

/** Brand-kit cover slots for Off Centered Stack issues (001 / 002). */
const ARCHIVE_ISSUE_SLOTS = ["archiveIssue1", "archiveIssue2"] as const;
/** Alternate post cover slots (same order as posts; optional extra kit keys). */
const ARCHIVE_POST_SLOTS = ["archivePost1", "archivePost2"] as const;

type SubmitState = "idle" | "error" | "sent";

export default function V1ArchivePage({ onBack, onNav }: PageProps) {
  const c = usePageCopy().archive;
  const featured = c.posts[0];
  const featuredHref = ARCHIVE_PAGE.posts[0]?.href ?? "#";
  const [email, setEmail] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = email.trim();
    if (!EMAIL.test(trimmed)) {
      setInvalid(true);
      setSubmitState("idle");
      return;
    }
    setInvalid(false);

    if (!MAILCHIMP_ACTION) {
      setSubmitState("error");
      return;
    }

    try {
      const body = new URLSearchParams();
      body.set("EMAIL", trimmed);
      await fetch(MAILCHIMP_ACTION, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      setSubmitState("sent");
      setEmail("");
    } catch {
      setSubmitState("error");
    }
  }

  return (
    <V1InteriorShell onNav={onNav}>
      <section className="relative flex min-h-[38vh] items-end border-b border-white/10 px-5 pb-8 pt-24 md:min-h-[42vh] md:px-10 md:pb-12 md:pt-28">
        <V1BackButton onBack={onBack} />
        <div className="w-full">
          <h1
            className="font-sans text-[18vw] font-medium uppercase leading-[0.85] tracking-[-0.06em] text-[#F3EEE7] md:text-[12vw]"
            style={SATOSHI}
          >
            <HubCopyText path="archive.headline">{c.headline}</HubCopyText>
          </h1>
          <p className="mt-4 max-w-xl font-mono text-[11px] uppercase tracking-[0.22em] text-[#F3EEE7]/60">
            <HubCopyText path="archive.lede">{c.lede}</HubCopyText>
          </p>
        </div>
      </section>

      {featured ? (
        <section className="border-b border-white/10 bg-[#111111]" aria-label="Featured">
          <a
            href={featuredHref}
            target="_blank"
            rel="noreferrer"
            className="group relative block overflow-hidden"
          >
            <V1MediaImg
              slot="archiveFeatured"
              src={gymPhotos.galleryCinematic}
              alt="Archive featured"
              className="aspect-[21/9] w-full object-cover transition duration-500 group-hover:brightness-110 motion-reduce:transition-none"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111111]/85 via-[#111111]/20 to-transparent"
              aria-hidden
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 px-5 py-8 md:px-10 md:py-12">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#F3EEE7]/60">
                <HubCopyText path="archive.featuredLabel">{c.featuredLabel}</HubCopyText>
              </p>
              <h2
                className="mt-3 max-w-3xl font-sans text-[28px] font-bold uppercase tracking-[-0.04em] text-[#F3EEE7] transition-colors duration-300 group-hover:text-[#C4A35A] md:text-[40px]"
                style={SATOSHI}
              >
                <HubCopyText path="archive.posts.0.title">{featured.title}</HubCopyText>
              </h2>
              {featured.excerpt ? (
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#F3EEE7]/75">
                  <HubCopyText path="archive.posts.0.excerpt">{featured.excerpt}</HubCopyText>
                </p>
              ) : null}
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#F3EEE7]/55">
                <HubCopyText path="archive.posts.0.author">{featured.author}</HubCopyText>
                {" · "}
                <HubCopyText path="archive.posts.0.date">{featured.date}</HubCopyText>
              </p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[#C4A35A] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Read →
              </p>
            </div>
          </a>
        </section>
      ) : null}

      <section
        id="archive-archives"
        className="border-b border-white/10 bg-[#111111] py-12 md:py-16"
        aria-label="Archive issues"
      >
        <LookbookOffCenteredStack
          items={c.posts.map((post, index) => {
            const link = ARCHIVE_PAGE.posts[index];
            return {
              title: post.title,
              author: post.author,
              date: post.date,
              excerpt: post.excerpt,
              href: link?.href ?? "#",
              cover: archiveCoverUrl(link?.coverKey),
              coverAlt: link?.coverAlt ?? "",
              coverSlot: ARCHIVE_ISSUE_SLOTS[index] ?? ARCHIVE_POST_SLOTS[index],
              copyPathPrefix: `archive.posts.${index}`,
            };
          })}
          eyebrow={c.issuesEyebrow}
          indexLabel="Archive"
          tone="dark"
        />
      </section>

      <section
        id="archive-articles"
        className="border-b border-white/10 bg-[#111111] px-5 py-16 md:px-10 md:py-20"
        aria-label="Articles"
      >
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#F3EEE7]/55">
            <HubCopyText path="archive.articlesEyebrow">{c.articlesEyebrow}</HubCopyText>
          </p>
          <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {c.posts.map((post, index) => (
              <li key={post.title}>
                <a
                  href={ARCHIVE_PAGE.posts[index]?.href ?? "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-h-[44px] flex-col justify-center gap-1 py-6 text-[#F3EEE7] transition-colors hover:text-[#C4A35A]"
                >
                  <h3
                    className="font-sans text-[18px] font-bold uppercase tracking-[-0.03em] md:text-[22px]"
                    style={SATOSHI}
                  >
                    <HubCopyText path={`archive.posts.${index}.title`}>{post.title}</HubCopyText>
                  </h3>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#F3EEE7]/55">
                    <HubCopyText path={`archive.posts.${index}.author`}>{post.author}</HubCopyText>
                    {" · "}
                    <HubCopyText path={`archive.posts.${index}.date`}>{post.date}</HubCopyText>
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="border-b border-white/10 bg-[#111111] px-5 py-16 md:px-10 md:py-24"
        aria-label="Subscribe"
      >
        <div className="mx-auto max-w-md">
          <h2
            className="font-sans text-[28px] font-bold uppercase tracking-[-0.04em]"
            style={SATOSHI}
          >
            <HubCopyText path="archive.subscribeHeadline">{c.subscribeHeadline}</HubCopyText>
          </h2>
          <form className="mt-6 flex flex-col gap-3" onSubmit={onSubmit} noValidate>
            <label
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#F3EEE7]/55"
              htmlFor="archive-email"
            >
              Email
            </label>
            <input
              id="archive-email"
              name="EMAIL"
              type="email"
              value={email}
              autoComplete="email"
              onChange={(event) => {
                setEmail(event.target.value);
                setInvalid(false);
                if (submitState !== "idle") setSubmitState("idle");
              }}
              className="min-h-[44px] border border-white/20 bg-transparent px-3 text-[16px] text-[#F3EEE7] outline-none"
            />
            {invalid ? (
              <p className="text-[14px] text-[var(--v1-highlight)]" role="alert">
                Enter a valid email.
              </p>
            ) : null}
            {submitState === "error" ? (
              <p className="text-[14px] text-[var(--v1-highlight)]" role="alert">
                Subscription unavailable. Try again later.
              </p>
            ) : null}
            {submitState === "sent" ? (
              <p className="text-[14px] text-[#F3EEE7]/80" role="status">
                Thanks — you’re on the list.
              </p>
            ) : null}
            <button
              type="submit"
              className="inline-flex min-h-[44px] w-fit items-center font-mono text-[11px] uppercase tracking-[0.22em]"
            >
              <HubCopyText path="archive.subscribeCta">{c.subscribeCta}</HubCopyText>
            </button>
          </form>
        </div>
      </section>

      <section
        id="archive-authors"
        className="bg-[#111111] px-5 py-12 md:px-10 md:py-16"
        aria-label="Authors"
      >
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#F3EEE7]/55">
            <HubCopyText path="archive.authorsLabel">{c.authorsLabel}</HubCopyText>
          </p>
          <ul className="mt-4 divide-y divide-white/10 border-y border-white/10">
            {c.authors.map((author, index) => (
              <li key={author.name} className="flex min-h-[44px] items-baseline justify-between py-4">
                <span className="font-mono text-[11px] text-[#F3EEE7]/45">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className="flex-1 px-4 font-sans text-[16px] font-bold uppercase"
                  style={SATOSHI}
                >
                  <HubCopyText path={`archive.authors.${index}.name`}>{author.name}</HubCopyText>
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#F3EEE7]/55">
                  <HubCopyText path={`archive.authors.${index}.role`}>{author.role}</HubCopyText>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </V1InteriorShell>
  );
}
