import { motion, type HTMLMotionProps } from 'framer-motion';
import type { ComponentType, ElementType, ReactNode } from 'react';

type FadeInProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  style?: React.CSSProperties;
};

// Cache motion components per element type so they aren't recreated each render.
// Every tag used here takes the same props as a div, so type them that way.
type MotionTag = ComponentType<HTMLMotionProps<'div'>>;
const motionCache = new Map<ElementType, MotionTag>();
function motionFor(tag: ElementType): MotionTag {
  let component = motionCache.get(tag);
  if (!component) {
    component = motion.create(tag) as unknown as MotionTag;
    motionCache.set(tag, component);
  }
  return component;
}

export default function FadeIn({
  children,
  as = 'div',
  className,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  style,
}: FadeInProps) {
  const MotionTag = motionFor(as);
  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionTag>
  );
}
