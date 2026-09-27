import { FormEvent, useState } from "react";
import { ARCHIVE_PAGE } from "../../../data/culture-copy";
import { V1_ARCHIVE_ISSUES } from "../../../data/v1-interior-copy";
import {
  V1BackButton,
  V1Display,
  V1HoldControl,
  V1InteriorShell,
  V1Kicker,
  V1MediaImg,
  V1Section,
} from "./V1Interior";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function V1ArchivePage({ onBack, onNav }: PageProps) {
  const c = ARCHIVE_PAGE;
  const featured = c.posts[0];
  const [email, setEmail] = useState("");
  const [invalid, setInvalid] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!EMAIL.test(email.trim())) {
      setInvalid(true);
      return;
    }
    setInvalid(false);
  }

  return (
    <V1InteriorShell onNav={onNav}>
      <section className="relative border-b border-white/10 px-5 pb-16 pt-24 md:px-10 md:pb-24 md:pt-28">
        <V1BackButton onBack={onBack} />
        <div className="mx-auto max-w-6xl">
          <V1Display>{c.headline}</V1Display>
          <p className="mt-4 max-w-md text-[16px] text-[#F3EEE7]/80">{c.lede}</p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#181818] px-5 py-6 md:px-10">
        <div className="mx-auto flex max-w-6xl gap-6">
          {c.jumpLabels.map((jump) => (
            <a
              key={jump.id}
              href={`#archive-${jump.id}`}
              className="inline-flex min-h-[44px] items-center font-mono text-[11px] uppercase tracking-[0.22em]"
            >
              {jump.label}
            </a>
          ))}
        </div>
      </section>

      {featured ? (
        <V1Section label="Featured">
          <V1Kicker>Featured</V1Kicker>
          <a href={featured.href} className="mt-6 grid gap-6 md:grid-cols-12">
            <V1MediaImg slot="archiveFeatured" src={featured.cover} alt={featured.coverAlt} className="aspect-[4/3] w-full object-cover md:col-span-7" />
            <div className="md:col-span-5">
              <h2 className="font-sans text-[28px] font-bold uppercase tracking-[-0.04em]" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                {featured.title}
              </h2>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#F3EEE7]/55">
                {featured.author} · {featured.date}
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-[#F3EEE7]/85">{featured.excerpt}</p>
            </div>
          </a>
        </V1Section>
      ) : null}

      <V1Section id="archive-archives" label="Archive issues">
        <V1Kicker>Archives</V1Kicker>
        <ul className="mt-8 grid gap-6 md:grid-cols-2">
          {V1_ARCHIVE_ISSUES.map((issue) => (
            <li key={issue.n} className="border border-white/15 p-5">
              <p className="font-sans text-[28px] font-bold uppercase tracking-[-0.04em]" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                Archive // {issue.n}
              </p>
              {issue.pdf ? (
                <a href={issue.pdf} className="mt-4 inline-flex min-h-[44px] items-center font-mono text-[11px] uppercase tracking-[0.2em]">
                  Read issue
                </a>
              ) : (
                <div className="mt-2">
                  <V1HoldControl label="Read issue" />
                </div>
              )}
            </li>
          ))}
        </ul>
      </V1Section>

      <V1Section id="archive-articles" label="Articles">
        <V1Kicker>Articles</V1Kicker>
        <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
          {c.posts.map((post, index) => (
            <li key={post.title}>
              <a href={post.href} className="grid min-h-[44px] gap-4 py-5 md:grid-cols-12 md:items-center">
                <V1MediaImg
                  slot={index === 0 ? "archivePost1" : "archivePost2"}
                  src={post.cover}
                  alt=""
                  className="aspect-[3/2] w-full object-cover md:col-span-3"
                />
                <div className="md:col-span-9">
                  <h3 className="font-sans text-[20px] font-bold uppercase tracking-[-0.03em]" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                    {post.title}
                  </h3>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[#F3EEE7]/55">
                    {post.author} · {post.date}
                  </p>
                  <p className="mt-2 text-[15px] text-[#F3EEE7]/80">{post.excerpt}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </V1Section>

      <V1Section id="archive-authors" label="Authors">
        <V1Kicker>// Authors</V1Kicker>
        <ul className="mt-4 divide-y divide-white/10 border-y border-white/10">
          {c.authors.map((author, index) => (
            <li key={author.name} className="flex min-h-[44px] items-baseline justify-between py-4">
              <span className="font-mono text-[11px] text-[#F3EEE7]/45">{String(index + 1).padStart(2, "0")}</span>
              <span className="flex-1 px-4 font-sans text-[16px] font-bold uppercase" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                {author.name}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#F3EEE7]/55">{author.role}</span>
            </li>
          ))}
        </ul>
      </V1Section>

      <V1Section label="Subscribe">
        <h2 className="font-sans text-[28px] font-bold uppercase tracking-[-0.04em]" style={{ fontFamily: "'Satoshi', sans-serif" }}>
          Get the next Archive.
        </h2>
        <form className="mt-6 flex max-w-md flex-col gap-3" onSubmit={onSubmit} noValidate>
          <label className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#F3EEE7]/55" htmlFor="archive-email">
            Email
          </label>
          <input
            id="archive-email"
            type="email"
            value={email}
            autoComplete="email"
            onChange={(event) => {
              setEmail(event.target.value);
              setInvalid(false);
            }}
            className="min-h-[44px] border border-white/20 bg-transparent px-3 text-[16px] text-[#F3EEE7] outline-none"
          />
          {invalid ? (
            <p className="text-[14px] text-[var(--v1-highlight)]" role="alert">
              Enter a valid email.
            </p>
          ) : null}
          <button type="submit" className="inline-flex min-h-[44px] w-fit items-center font-mono text-[11px] uppercase tracking-[0.22em]">
            Subscribe →
          </button>
        </form>
      </V1Section>
    </V1InteriorShell>
  );
}
