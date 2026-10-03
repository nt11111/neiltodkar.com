import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from '../components/FadeIn';
import { LiveProjectButton, PendingPill } from '../components/Buttons';
import { projects, type Project } from '../data';

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });

  return (
    <section
      id="work"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-20 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      <div ref={containerRef} className="mx-auto mt-12 max-w-6xl sm:mt-16 md:mt-20">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - 1 - i) * 0.03;
          return (
            <ProjectCard
              key={project.name}
              project={project}
              index={i}
              progress={scrollYProgress}
              range={[i / projects.length, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}

type CardProps = {
  project: Project;
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
};

function ProjectCard({ project, index, progress, range, targetScale }: CardProps) {
  const scale = useTransform(progress, range, [1, targetScale]);
  const number = String(index + 1).padStart(2, '0');

  return (
    <div className="sticky top-24 flex h-[85vh] items-start justify-center md:top-32">
      <motion.article
        className="relative w-full origin-top rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
        style={{ scale, top: `${index * 28}px` }}
      >
        <div className="flex flex-col gap-3 px-2 pt-2 sm:gap-4 sm:px-4 md:flex-row md:items-end md:justify-between md:gap-8">
          <div className="flex min-w-0 flex-1 items-end gap-4 sm:gap-6">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              aria-hidden="true"
            >
              {number}
            </span>
            <div className="flex flex-col gap-1 pb-1 sm:pb-2 md:pb-3">
              <p className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">
                {project.category}
                <span className="hidden sm:inline"> · {project.period}</span>
              </p>
              <h3
                className="font-medium uppercase leading-tight text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1.25rem, 3vw, 2.6rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <div className="flex md:pb-3">
            {project.link ? (
              <LiveProjectButton href={project.link.href} label={project.link.label} />
            ) : project.pending ? (
              <PendingPill label={project.pending} />
            ) : null}
          </div>
        </div>

        <div className="mt-3 flex flex-col gap-1 px-2 sm:px-4 md:mt-4">
          <p
            className="line-clamp-3 max-w-3xl font-light leading-relaxed text-[#D7E2EA]/80 md:line-clamp-none"
            style={{ fontSize: 'clamp(0.8rem, 1.2vw, 1.05rem)' }}
          >
            {project.summary}
          </p>
          <p className="hidden text-xs uppercase tracking-widest text-[#D7E2EA]/45 sm:block">{project.stack}</p>
        </div>

        <div className="mt-4 flex gap-3 sm:mt-6 sm:gap-4">
          <div className="flex w-[40%] flex-col gap-3 sm:gap-4">
            {/* vh caps keep each pinned card inside a laptop-height viewport */}
            <CardImage focus={project.imageFocus} src={project.images[0]} alt={project.alts[0]} height="clamp(100px, min(16vw, 18vh), 230px)" />
            <CardImage focus={project.imageFocus} src={project.images[1]} alt={project.alts[1]} height="clamp(120px, min(22vw, 24vh), 340px)" />
          </div>
          <div className="w-[60%]">
            <CardImage focus={project.imageFocus} src={project.images[2]} alt={project.alts[2]} height="100%" />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

function CardImage({
  src,
  alt,
  height,
  focus = 'top',
}: {
  src: string;
  alt: string;
  height: string;
  focus?: 'top' | 'center';
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
      style={{ height, objectPosition: focus }}
    />
  );
}
