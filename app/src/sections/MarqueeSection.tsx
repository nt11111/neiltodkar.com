import { useEffect, useRef, useState } from 'react';
import { marquee } from '../data';

type Tile = { src: string; alt: string };

// Two rows of work screenshots that slide in opposite directions as the page
// scrolls. Each row is tripled so it never runs out of tiles.
export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const rowOne = [...marquee.rowOne, ...marquee.rowOne, ...marquee.rowOne];
  const rowTwo = [...marquee.rowTwo, ...marquee.rowTwo, ...marquee.rowTwo];

  return (
    <section
      ref={sectionRef}
      aria-label="Screenshots of my work"
      className="bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
      style={{ overflowX: 'clip' }}
    >
      <div className="flex flex-col gap-3">
        <Row tiles={rowOne} transform={`translateX(${offset - 200}px)`} />
        <Row tiles={rowTwo} transform={`translateX(${-(offset - 200)}px)`} />
      </div>
    </section>
  );
}

function Row({ tiles, transform }: { tiles: Tile[]; transform: string }) {
  return (
    <div className="flex w-max gap-3" style={{ transform, willChange: 'transform' }}>
      {tiles.map((tile, i) => (
        <img
          key={i}
          src={tile.src}
          alt={i < tiles.length / 3 ? tile.alt : ''}
          aria-hidden={i >= tiles.length / 3}
          loading="lazy"
          decoding="async"
          width={420}
          height={270}
          className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
        />
      ))}
    </div>
  );
}
