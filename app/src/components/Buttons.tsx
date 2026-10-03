import { ArrowUpRight } from 'lucide-react';

type ContactButtonProps = {
  href?: string;
  label?: string;
};

export function ContactButton({ href = '#contact', label = 'Contact Me' }: ContactButtonProps) {
  return (
    <a
      href={href}
      className="inline-block shrink-0 rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition-transform duration-200 hover:scale-[1.03] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      {label}
    </a>
  );
}

type LiveProjectButtonProps = {
  href: string;
  label?: string;
};

export function LiveProjectButton({ href, label = 'Live Project' }: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-6 py-2 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base"
    >
      {label}
      <ArrowUpRight size={18} strokeWidth={2.25} aria-hidden="true" />
    </a>
  );
}

export function PendingPill({ label }: { label: string }) {
  return (
    <span className="inline-block shrink-0 rounded-full border-2 border-dashed border-[#D7E2EA]/50 px-6 py-2 text-xs font-medium uppercase tracking-widest text-[#D7E2EA]/70 sm:px-10 sm:py-3.5 sm:text-base">
      {label}
    </span>
  );
}
