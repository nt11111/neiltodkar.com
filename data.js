// ============================================================
//  SITE DATA — the single source of truth for every page.
//  Edit values here; index / projects / about / writing / contact
//  all render from this file. Newest items first within each list.
// ============================================================

window.SITE_DATA = {
  profile: {
    name: "Neil Todkar",
    firstName: "Neil",
    headline: "Automating GTM at FluidCloud. Founder & CEO of Planos. Published AI researcher.",
    // Short line under the name in the hero
    hero: {
      line1: "I study how people",
      line2: "actually respond to AI",
      line3: "and build products around it.",
    },
    intro:
      "High-school researcher and founder in Pleasanton, California. I publish behavioral research on trust in AI systems, run go-to-market at an infrastructure startup, and lead a company turning 2D blueprints into 3D models.",
    about: [
      "I research how people actually respond to AI systems and warnings. My first paper, The Transparency Trap, is on arXiv; before that I published a whitepaper at Nexla on why privacy is the foundation of trustworthy AI.",
      "My approach is simple: build with evidence. Design decisions about AI should be grounded in how people behave, not in assumptions about how they should.",
      "DECA and Ethics Bowl taught me to think clearly under pressure and defend positions that matter. Tabla taught me that mastery is mostly repetition.",
      "I am looking to collaborate on new ventures, build products grounded in real user behavior, and keep exploring what we are getting wrong about trust in AI. Reach out.",
    ],
    location: "Pleasanton, CA",
    email: "neiltodkar@gmail.com",
    phone: "(925) 450-0525",
    phoneHref: "+19254500525",
    linkedin: "https://www.linkedin.com/in/neiltodkar",
    linkedinActivity: "https://www.linkedin.com/in/neiltodkar/recent-activity/all/",
    arxiv: "https://arxiv.org/abs/2608.07493",
    now: [
      "Founder & CEO, Planos",
      "GTM at FluidCloud",
      "AI Researcher, Nexla",
      "Class of 2028, Amador Valley",
    ],
    availability: "Open to research collaborations, speaking, and early-stage building.",
    schoolYear: "Junior",
  },

  // ---- WORK / VENTURES / RESEARCH ---------------------------------
  // `kind` is one of: "venture" | "work" | "research" | "initiative" | "creative"
  // `featured: true` puts it on the homepage.
  projects: [
    {
      id: "planos",
      title: "Planos",
      role: "Founder & CEO",
      org: "Planos",
      period: "Jul 2026 — Present",
      year: "2026",
      kind: "venture",
      tag: "Startup",
      featured: true,
      summary:
        "Planos converts 2D architectural blueprints into editable 3D models automatically. Architects and engineers lose hours redrawing plans by hand, and the U.S. loses an estimated $177B a year to rework from miscommunication and inaccurate project data. Planos reads walls, doors, and windows from a blueprint and produces precise, editable CAD geometry in minutes.",
      bullets: [
        "Started as a UC Berkeley B-BAY venture; incorporated as a company in July 2026",
        "Leading product, strategy, and fundraising with a co-founding team",
        "Live at planosai.com",
      ],
      tags: ["AI", "CAD", "Architecture", "B2B"],
      links: [{ label: "Visit planosai.com", href: "https://planosai.com" }],
      logo: "assets/planos-logo.png",
    },
    {
      id: "transparency-trap",
      title: "The Transparency Trap",
      subtitle: "How AI Disclaimers Create Overconfidence in High-Stakes Decisions",
      role: "Independent Researcher",
      org: "arXiv · cs.HC",
      period: "Nov 2025 — Jun 2026",
      year: "2026",
      kind: "research",
      tag: "Published research",
      featured: true,
      summary:
        "An experimental study of how disclaimer placement and persuasive design shape trust and perceived accuracy across finance, medicine, and AI-generated content. Across 52 participants and 378 stimulus-level responses, advisory content was trusted even when disclaimers were present. In the AI condition, some users read disclaimers as signs of honesty and self-awareness, which paradoxically increased trust. Standardized disclaimers do not prevent overreliance in consequential decisions.",
      bullets: [
        "Designed the study, ran data collection, and wrote the paper under industry mentorship",
        "Published to arXiv (Human-Computer Interaction), June 2026",
        "Documents banner blindness and a counter-intuitive honesty effect in AI disclaimers",
      ],
      tags: ["Behavioral research", "HCI", "AI trust", "52 participants · 378 responses"],
      links: [
        { label: "Read on arXiv", href: "https://arxiv.org/abs/2608.07493" },
        { label: "PDF", href: "https://arxiv.org/pdf/2608.07493" },
      ],
    },
    {
      id: "fluidcloud",
      title: "FluidCloud",
      role: "Go-to-Market Intern",
      org: "FluidCloud",
      period: "Jun 2026 — Present",
      year: "2026",
      kind: "work",
      tag: "Startup · GTM",
      featured: true,
      summary:
        "Building FluidCloud's go-to-market strategy alongside the founding team. FluidCloud is re-inventing multi-cloud infrastructure and security; my work is turning operational data and expert conversations into a data-driven growth roadmap.",
      bullets: [
        "Researching core operations, product, and market positioning to build a growth roadmap",
        "Leading outreach to industry experts to validate assumptions and surface new channels",
        "Synthesizing operational data and feedback into scalable, testable growth initiatives",
        "Mentored directly by co-founder and CEO Sharad Kumar",
      ],
      tags: ["GTM strategy", "Market research", "Cloud infrastructure"],
      links: [],
    },
    {
      id: "nexla",
      title: "Nexla",
      role: "AI Researcher",
      org: "Nexla · San Francisco Bay Area",
      period: "Jun 2025 — Present",
      year: "2025",
      kind: "work",
      tag: "Research internship",
      featured: false,
      summary:
        "Research on responsible and ethical AI at a data-integration company. Ran fairness analysis across demographic groups using disparity ratios and error rates to surface systemic bias, tested mitigation approaches that trade accuracy against equity, and published a whitepaper on privacy as the foundation of trustworthy AI.",
      bullets: [
        "Published “Beyond Compliance: Why Privacy is the Foundation of Trustworthy AI” on nexla.com",
        "Fairness analysis and bias-mitigation experiments in real business contexts",
        "Authored a paper bridging ML, behavioral psychology, and economic incentives",
      ],
      tags: ["Responsible AI", "Fairness", "Privacy", "Whitepaper"],
      links: [
        { label: "Read the whitepaper", href: "https://nexla.com/why-privacy-is-foundation-of-trustworthy-ai" },
      ],
    },
    {
      id: "ai-readiness",
      title: "AI Readiness 4 Kids",
      role: "Founder",
      org: "AI Readiness 4 Kids",
      period: "Jan 2026 — Present",
      year: "2026",
      kind: "initiative",
      tag: "Initiative",
      featured: false,
      summary:
        "A cross-disciplinary initiative teaching students to question AI, not just consume it. I design and lead workshops on algorithmic bias, decision systems, and responsible technology for groups of 50 to 100+ students, with case discussions on AI in hiring, finance, and education.",
      bullets: [
        "Workshops for 50–100+ students across technical and non-technical audiences",
        "Presented at the Youth & AI Innovation Summit (YAIS 2026) at UC Berkeley",
        "Curriculum, org structure, and a public site",
      ],
      tags: ["AI literacy", "Workshops", "K-12"],
      links: [{ label: "Visit the site", href: "https://aireadiness4kids.org" }],
    },
    {
      id: "kai-and-the-ai",
      title: "Kai and the AI",
      subtitle: "The Beginning to Kai's World of Artificial Intelligence",
      role: "Author & Illustrator",
      org: "Children's book",
      period: "2026",
      year: "2026",
      kind: "creative",
      tag: "Book",
      featured: false,
      summary:
        "A picture book that explains what it really means when a computer is learning, written and illustrated for elementary readers. Somewhere nearby, a computer is learning; this is the story of what that means, told through Kai and a small robot named Bit.",
      bullets: ["Written and illustrated end to end", "Companion to the AI Readiness 4 Kids curriculum"],
      tags: ["Children's book", "AI literacy", "Illustration"],
      links: [],
    },
    {
      id: "local-marketing",
      title: "Web Design & Marketing for Local Business",
      role: "Independent Consultant",
      org: "Pleasanton, CA",
      period: "2025",
      year: "2025",
      kind: "work",
      tag: "Consulting",
      featured: false,
      summary:
        "Partnered with small local restaurants to grow visibility and foot traffic: custom websites, social presence, and targeted, customer-focused campaigns that measurably increased engagement.",
      bullets: [],
      tags: ["Web design", "Brand", "Local business"],
      links: [],
    },
  ],

  // ---- WRITING & PUBLICATIONS ------------------------------------
  writing: [
    {
      title: "The Transparency Trap: How AI Disclaimers Create Overconfidence in High-Stakes Decisions",
      venue: "arXiv · cs.HC",
      date: "June 2026",
      kind: "Paper",
      excerpt:
        "Disclaimer placement and persuasive design shape trust across finance, medicine, and AI-generated content. 52 participants, 378 stimulus-level responses. Advisory content was trusted even with disclaimers present; in the AI domain, disclaimers sometimes read as honesty and increased trust.",
      href: "https://arxiv.org/abs/2608.07493",
      cta: "Read on arXiv",
    },
    {
      title: "Beyond Compliance: Why Privacy is the Foundation of Trustworthy AI",
      venue: "Nexla",
      date: "2025",
      kind: "Whitepaper",
      excerpt:
        "Why the tension between innovation and privacy is one of the defining regulatory, ethical, and strategic challenges of the modern era, and what black-box models, current regulation, and privacy-preserving technologies mean for enterprise AI.",
      href: "https://nexla.com/why-privacy-is-foundation-of-trustworthy-ai",
      cta: "Read at Nexla",
    },
    {
      title: "Kai and the AI",
      venue: "Children's book",
      date: "2026",
      kind: "Book",
      excerpt:
        "Written and illustrated picture book introducing young readers to what it means when a computer learns.",
      href: "",
      cta: "",
    },
  ],

  // ---- TALKS & APPEARANCES ---------------------------------------
  talks: [
    {
      title: "Agentic AI Summit 2026",
      where: "UC Berkeley",
      date: "Aug 2026",
      role: "Attendee",
      note: "Sessions from Peter Steinberger, Michele Catasta, and Alex Graveley on omniscient agents. Takeaway: the next wave is agents people can trust, through evaluation, feedback, and clear limits.",
    },
    {
      title: "UC Berkeley Business Academy for Youth (B-BAY)",
      where: "Berkeley Haas",
      date: "Summer 2026",
      role: "Participant · Planos originated here",
      note: "Selective summer program at Haas focused on entrepreneurship. Built the Planos pitch and first financials with a team.",
    },
    {
      title: "Youth & AI Innovation Summit (YAIS 2026)",
      where: "UC Berkeley",
      date: "Apr 2026",
      role: "Presenter",
      note: "Presented alongside mentors on using multiple LLMs to build products for the greater good. Core idea: AI should amplify human intention, not replace human judgment.",
    },
    {
      title: "DECA ICDC 2026",
      where: "Atlanta, GA",
      date: "Apr 2026",
      role: "Competitor · Business Law & Ethics",
      note: "Qualified for internationals after 1st at NorCal and 6th at the California state conference.",
    },
  ],

  // ---- RECOGNITION -----------------------------------------------
  awards: [
    {
      title: "DECA International Career Development Conference qualifier",
      detail:
        "Business Law & Ethics Team Decision Making. 1st at NorCal CDC, 6th at the California SCDC; also placed in Franchise Business Plan (EFB) at States. Competed at ICDC 2026 in Atlanta.",
      year: "2026",
    },
    {
      title: "Presenter, Youth & AI Innovation Summit",
      detail: "Invited to present at YAIS 2026 on the UC Berkeley campus.",
      year: "2026",
    },
    {
      title: "UC Berkeley Business Academy for Youth",
      detail: "Accepted to the B-BAY summer program at Berkeley Haas.",
      year: "2026",
    },
    {
      title: "6th place, National Economics Challenge",
      detail: "Selected among the top 10% of teams in California for the in-person National Economics Challenge in San Francisco.",
      year: "2025",
    },
    {
      title: "Top 10, Regional High School Ethics Bowl",
      detail: "Argued real-world moral dilemmas as Secretary of the Ethics Club.",
      year: "2025",
    },
    {
      title: "Visharad in Tabla",
      detail: "Completed nine years of classical training at Tarang Music Academy, culminating in the Visharad certification.",
      year: "2026",
    },
    {
      title: "1st place, Amador Minicon · 2nd place, Tri-Valley Minicon",
      detail: "DECA business case competitions.",
      year: "2025",
    },
  ],

  certifications: [
    { title: "Google AI Essentials", org: "Google" },
    { title: "Google AI Professional", org: "Google" },
    { title: "AI Skills for Students", org: "Canva" },
  ],

  leadership: [
    { title: "Co-Founder & President", org: "Spikeball Club, Amador Valley" },
    { title: "Secretary", org: "Ethics Club, Amador Valley" },
    { title: "Varsity Tennis", org: "Amador Valley" },
    { title: "Tabla Instructor & Performer", org: "Tarang Music Academy · since 2017" },
  ],

  skills: [
    "Ethical AI systems thinking",
    "Behavioral & interdisciplinary research",
    "Competitive strategy & decision-making",
    "Go-to-market",
    "Cross-functional communication",
    "Organizational leadership",
    "Machine learning",
    "Behavioral economics",
    "Web design",
  ],

  languages: ["English", "Spanish", "Marathi"],

  education: {
    school: "Amador Valley High School",
    place: "Pleasanton, CA",
    span: "2024 — 2028",
    detail: "GPA 3.83 unweighted · 4.17 weighted",
    coursework: [
      "AP Computer Science A",
      "AP World History",
      "Honors Pre-Calculus",
      "Honors Algebra II",
      "Integrated Marketing Communications",
    ],
  },
};
