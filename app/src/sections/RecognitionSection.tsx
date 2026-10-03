import FadeIn from '../components/FadeIn';
import { credentials, recognition } from '../data';

export default function RecognitionSection() {
  return (
    <section className="rounded-t-[40px] bg-white px-5 pb-28 pt-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:rounded-t-[60px] md:px-10 md:pb-36 md:pt-32">
      <FadeIn y={40}>
        <h2
          className="mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Recognition
        </h2>
      </FadeIn>

      <ul className="mx-auto max-w-5xl">
        {recognition.map((item, i) => (
          <FadeIn
            as="li"
            key={item.title}
            delay={(i % 3) * 0.08}
            className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 py-6 sm:gap-x-10 sm:py-8"
            style={{ borderTop: i === 0 ? undefined : '1px solid rgba(12, 12, 12, 0.15)' }}
          >
            <span className="row-span-2 font-black leading-none" style={{ fontSize: 'clamp(1.5rem, 4vw, 3.5rem)' }}>
              {item.year}
            </span>
            <h3 className="font-medium uppercase" style={{ fontSize: 'clamp(1rem, 2vw, 1.7rem)' }}>
              {item.title}
            </h3>
            <p className="max-w-2xl font-light leading-relaxed" style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.15rem)', opacity: 0.6 }}>
              {item.detail}
            </p>
          </FadeIn>
        ))}
      </ul>

      <FadeIn className="mx-auto mt-14 flex max-w-5xl flex-wrap gap-2 sm:mt-20 sm:gap-3">
        {credentials.map((c) => (
          <span
            key={c}
            className="rounded-full border border-[#0C0C0C]/20 px-4 py-2 text-xs font-medium uppercase tracking-wider sm:text-sm"
          >
            {c}
          </span>
        ))}
      </FadeIn>
    </section>
  );
}
