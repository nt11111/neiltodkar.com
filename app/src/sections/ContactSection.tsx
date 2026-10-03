import { ArrowUpRight, Github, Linkedin, Mail, Phone } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { ContactButton } from '../components/Buttons';
import { profile } from '../data';

const links = [
  { label: profile.email, href: `mailto:${profile.email}`, Icon: Mail, external: false },
  { label: 'LinkedIn', href: profile.links.linkedin, Icon: Linkedin, external: true },
  { label: 'GitHub', href: profile.links.github, Icon: Github, external: true },
  { label: profile.phone, href: profile.phoneHref, Icon: Phone, external: false },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-10 pt-24 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 text-center sm:gap-14">
        <FadeIn y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Let&apos;s talk
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p
            className="max-w-[560px] font-medium leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          >
            Open to research collaborations, internships, speaking and early-stage building. The fastest way to reach me is
            email.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <ContactButton href={`mailto:${profile.email}`} label="Email me" />
        </FadeIn>
        <FadeIn delay={0.3} as="ul" className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {links.map(({ label, href, Icon, external }) => (
            <li key={href}>
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 sm:text-base"
              >
                <Icon size={18} aria-hidden="true" />
                <span className={label.includes('@') ? 'normal-case' : undefined}>{label}</span>
                {external ? <ArrowUpRight size={14} aria-hidden="true" /> : null}
              </a>
            </li>
          ))}
        </FadeIn>
      </div>

      <footer className="mx-auto mt-24 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-[#D7E2EA]/15 pt-6 text-xs font-light uppercase tracking-widest text-[#D7E2EA]/50 sm:mt-32 sm:flex-row">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>{profile.location}</span>
      </footer>
    </section>
  );
}
