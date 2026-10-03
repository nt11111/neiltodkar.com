import { ArrowUpRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { experience, research } from '../data';

export default function ResearchSection() {
  return (
    <section id="research" className="bg-[#0C0C0C] px-5 pb-28 pt-10 sm:px-8 md:px-10 md:pb-36">
      <FadeIn y={40}>
        <h2
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Research
        </h2>
      </FadeIn>

      <ul className="mx-auto mt-14 max-w-5xl sm:mt-20">
        {research.map((item, i) => (
          <FadeIn
            as="li"
            key={item.title}
            delay={i * 0.1}
            className="grid gap-3 border-t border-[#D7E2EA]/15 py-8 sm:py-10 md:grid-cols-[1fr_auto] md:gap-10"
          >
            <div className="flex flex-col gap-2">
              <p className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/55 sm:text-sm">
                {item.venue} · {item.date}
              </p>
              <h3 className="font-medium leading-snug text-[#D7E2EA]" style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.9rem)' }}>
                {item.title}
              </h3>
              <p
                className="max-w-3xl font-light leading-relaxed text-[#D7E2EA]/65"
                style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1.1rem)' }}
              >
                {item.summary}
              </p>
            </div>
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:self-center"
              >
                {item.cta}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            ) : null}
          </FadeIn>
        ))}
      </ul>

      <FadeIn className="mx-auto mt-20 max-w-5xl sm:mt-28">
        <h3 className="mb-6 text-sm font-medium uppercase tracking-widest text-[#D7E2EA]/55">Experience</h3>
        <ul className="border-t border-[#D7E2EA]/15">
          {experience.map((job) => (
            <li
              key={job.role + job.org}
              className="flex flex-col gap-1 border-b border-[#D7E2EA]/15 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <span className="font-medium uppercase text-[#D7E2EA]" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.25rem)' }}>
                {job.role} <span className="font-light normal-case text-[#D7E2EA]/60">· {job.org}</span>
              </span>
              <span className="shrink-0 text-xs font-light uppercase tracking-widest text-[#D7E2EA]/55 sm:text-sm">
                {job.period}
              </span>
            </li>
          ))}
        </ul>
      </FadeIn>
    </section>
  );
}
