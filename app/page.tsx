type TeamLink = {
  label: string;
  href: string;
};

type TeamMember = {
  name: string;
  role: string;
  affiliation: string;
  base: string;
  summary: string;
  strengths: string[];
  contribution: string;
  links?: TeamLink[];
};

const members: TeamMember[] = [
  {
    name: "LI JAR",
    role: "Software Engineering • AI Researcher",
    affiliation: "Nexter Co., Ltd. • KAIST OverEdge 2026 Participant",
    base: "Anyang",
    summary:
      "Builds practical software systems around AI research, agent orchestration, data processing, and workflow automation.",
    strengths: ["AI agent orchestration", "Software engineering", "Data processing", "Workflow automation"],
    contribution: "AI agent engineering, system architecture, data workflows, and delivery coordination.",
    links: [
      { label: "Portfolio", href: "https://lijar.skilaxy.com" },
      { label: "GitHub", href: "https://github.com/prof-lijar" },
    ],
  },
  {
    name: "Lee Seungyeon",
    role: "Planning • Development • Design",
    affiliation: "Sortech Co., Ltd.",
    base: "Busan",
    summary:
      "Turns local context into practical UX decisions and keeps visual quality aligned with technical limits and hackathon rhythm.",
    strengths: ["Interaction design", "C# / Unreal", "3D rigging", "BGM production"],
    contribution: "Front-end behavior, visual direction, and user-flow execution.",
    links: [{ label: "GitHub", href: "https://github.com/SeungYeon04" }],
  },
  {
    name: "Lieng Hongky",
    role: "Development • AI",
    affiliation: "Independent Developer",
    base: "Busan",
    summary:
      "Builds AI-assisted features into deployable components quickly, with emphasis on practical data/image processing workflows.",
    strengths: ["Computer vision", "Image restoration", "Swift", "React", "NestJS", "Unity"],
    contribution: "AI prototyping, media processing, and rapid feature integration.",
    links: [
      { label: "GitHub", href: "https://github.com/lienghongky/" },
      { label: "Portfolio", href: "https://hongky.netlify.app/" },
    ],
  },
  {
    name: "Zin Ko Naing",
    role: "Development • Platform",
    affiliation: "Namu-iAPT Enterprise",
    base: "Jeonju",
    summary:
      "Strengthens backend reliability and data pipelines, and keeps engineering decisions practical for contest pacing.",
    strengths: ["Next.js", "TypeScript", "Spring Boot", "MySQL", "MongoDB", "CI/CD"],
    contribution: "Platform layer, service integration, and performance-safe implementation.",
    links: [{ label: "Portfolio", href: "https://www.devzinko.site/" }],
  },
];

const quickFacts = [
  ["Team size", "4 members"],
  ["Base", "Korea (Busan-linked execution)"],
  ["Format", "2-4 member competition teams"],
  ["Timeline", "Jul 25-26, 2026"],
];

const busanSignals = ["BEXCO-ready", "Coastal current", "Local context", "Fast demo energy"];

const operatingPrinciples = [
  {
    title: "Clear ownership",
    detail: "Each responsibility has one owner with explicit boundaries and shared review checkpoints.",
  },
  {
    title: "Demo-first development",
    detail: "Build a working core first, then improve presentation depth and visuals.",
  },
  {
    title: "On-site responsiveness",
    detail: "We adapt quickly to mentor feedback and venue conditions during the two-day sprint.",
  },
  {
    title: "Skill redundancy",
    detail: "Critical capabilities are covered by overlapping expertise to avoid one-point dependency.",
  },
];

const capabilityBars = [
  ["Planning", "Problem framing, requirement shaping, and sprint planning for short-cycle execution."],
  ["Data", "Data interpretation, baseline analytics thinking, and pragmatic modeling direction."],
  ["Engineering", "Frontend, backend, and deployment-ready architecture for reliable delivery."],
  ["Experience", "Interface behavior, interaction quality, and demo communication design."],
];

export default function Home() {
  return (
    <main className="site-canvas relative min-h-screen overflow-x-hidden text-slate-100">
      <div className="page-backdrop" aria-hidden="true">
        <div className="page-art page-art-primary" />
        <div className="page-art page-art-secondary" />
        <div className="page-aurora" />
        <div className="page-grid" />
      </div>

      <section className="relative isolate z-10 border-b border-white/10 py-8 sm:py-12">
        <div className="absolute inset-0 -z-10 tech-grid opacity-40" />
        <div className="noise-bg absolute inset-0 -z-10" />
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <svg className="data-flow-layer absolute -top-6 left-1/2 h-[42vh] w-[120%] -translate-x-1/2" viewBox="0 0 1200 420" preserveAspectRatio="none">
            <defs>
              <linearGradient id="flowGlowA" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="rgba(93, 226, 255, 0.0)" />
                <stop offset="45%" stopColor="rgba(93, 226, 255, 0.9)" />
                <stop offset="100%" stopColor="rgba(93, 226, 255, 0)" />
              </linearGradient>
              <linearGradient id="flowGlowB" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="rgba(171, 212, 255, 0.0)" />
                <stop offset="50%" stopColor="rgba(171, 212, 255, 0.85)" />
                <stop offset="100%" stopColor="rgba(171, 212, 255, 0)" />
              </linearGradient>
              <linearGradient id="flowGlowC" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="rgba(165, 255, 250, 0.0)" />
                <stop offset="50%" stopColor="rgba(165, 255, 250, 0.9)" />
                <stop offset="100%" stopColor="rgba(165, 255, 250, 0)" />
              </linearGradient>
            </defs>
            <path
              id="flowA"
              d="M-80 120 C 90 75, 220 195, 360 130 C 500 70, 640 230, 790 170 C 940 110, 1060 245, 1280 175"
              className="data-current data-current-a"
              pathLength="100"
            />
            <path
              id="flowB"
              d="M-80 265 C 85 300, 205 170, 350 230 C 500 300, 620 175, 780 230 C 925 285, 1050 120, 1280 190"
              className="data-current data-current-b"
              pathLength="100"
            />
            <path
              id="flowC"
              d="M-80 330 C 100 370, 215 290, 335 345 C 470 395, 600 275, 760 335 C 910 395, 1040 295, 1280 330"
              className="data-current data-current-c"
              pathLength="100"
            />
            <circle r="4" className="data-packet data-packet-a">
              <animateMotion dur="5.2s" repeatCount="indefinite" rotate="auto">
                <mpath href="#flowA" />
              </animateMotion>
            </circle>
            <circle r="3" className="data-packet data-packet-b">
              <animateMotion dur="6.4s" begin="-2s" repeatCount="indefinite" rotate="auto">
                <mpath href="#flowB" />
              </animateMotion>
            </circle>
            <circle r="5" className="data-packet data-packet-c">
              <animateMotion dur="5.8s" begin="-3.2s" repeatCount="indefinite" rotate="auto">
                <mpath href="#flowC" />
              </animateMotion>
            </circle>
            <circle r="2.5" className="data-packet data-packet-a">
              <animateMotion dur="4.8s" begin="-1.4s" repeatCount="indefinite" rotate="auto">
                <mpath href="#flowA" />
              </animateMotion>
            </circle>
            <circle r="3.5" className="data-packet data-packet-c">
              <animateMotion dur="7s" begin="-4.4s" repeatCount="indefinite" rotate="auto">
                <mpath href="#flowB" />
              </animateMotion>
            </circle>
            <path
              d="M80 392 L150 358 L218 392 L305 332 L390 392 L482 350 L560 392 L650 320 L725 392 L815 350 L910 392 L1040 334 L1130 392"
              className="busan-skyline"
            />
          </svg>
        </div>
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 pb-8 pt-6 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:pb-12 lg:pt-8">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex border border-cyan-300/40 bg-cyan-300/10 px-3 py-2 font-mono text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
              SZLL Team Introduction
            </p>
            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-7xl">SZLL</h1>
            <p className="mt-4 max-w-xl text-lg text-cyan-100/85 sm:text-xl">
              A focused four-person team prepared for the DIVE 2026 challenge with clear ownership, Busan-aware execution, and demo-ready delivery.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {busanSignals.map((signal) => (
                <span key={signal} className="border border-cyan-300/25 bg-cyan-300/10 px-3 py-1.5 font-mono text-[11px] font-black uppercase tracking-[0.14em] text-cyan-100">
                  {signal}
                </span>
              ))}
            </div>
          </div>
          <div className="grid w-full max-w-xl gap-3 sm:grid-cols-2 lg:w-auto">
            {quickFacts.map(([title, value]) => (
              <article key={title} className="frost-panel p-4">
                <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-cyan-300">{title}</p>
                <p className="mt-1 text-sm leading-6 text-white/85">{value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="frost-panel p-6 sm:p-10">
          <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-cyan-300">About us</p>
          <h2 className="mt-4 text-balance text-4xl font-black leading-tight sm:text-5xl">Team introduction with Busan execution energy</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200/85">
            We are a practical execution team for the Busan hackathon format. We combine planning, AI exploration, platform engineering, and
            media-ready presentation to move from idea to usable prototype in a two-day sprint at the pace of a city built around ports,
            data movement, and fast connections.
          </p>
        </div>
      </section>

      <section id="members" className="relative z-10 mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="font-mono text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Team roster</p>
            <h2 className="mt-3 max-w-3xl text-balance text-5xl font-black leading-tight sm:text-6xl">Four members, one delivery system.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-300/78">
            The team is presented by operating responsibility instead of profile images. Each member owns a focused role that connects planning,
            AI, platform engineering, and demo-ready presentation.
          </p>
        </div>
        <div className="mt-8 grid gap-4">
          {members.map((member, index) => (
            <article
              key={member.name}
              className="team-row frost-panel grid gap-5 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/55 lg:grid-cols-[1.05fr_1.3fr_0.75fr] lg:items-start"
              style={{ animation: `riseIn 620ms cubic-bezier(.16,1,.3,1) ${index * 90}ms both` }}
            >
              <div>
                <h3 className="text-3xl font-black leading-none text-white">{member.name}</h3>
                <p className="mt-3 font-mono text-xs font-black uppercase leading-5 tracking-[0.14em] text-cyan-300">{member.role}</p>
                <p className="mt-4 font-mono text-xs uppercase leading-5 text-slate-300/55">
                  {member.affiliation} / {member.base}
                </p>
              </div>
              <div>
                <p className="text-base leading-7 text-slate-300/85">{member.summary}</p>
                <div className="mt-5 border-l-4 border-cyan-300/60 pl-4">
                  <p className="font-mono text-xs font-black uppercase tracking-[0.16em] text-cyan-200">Main responsibility</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300/80">{member.contribution}</p>
                </div>
              </div>
              <div className="lg:border-l lg:border-cyan-200/15 lg:pl-5">
                <p className="font-mono text-xs font-black uppercase tracking-[0.16em] text-cyan-200">Skill signal</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {member.strengths.map((skill) => (
                    <span key={skill} className="border border-cyan-300/25 bg-cyan-300/10 px-2.5 py-1 font-mono text-[11px] font-black uppercase text-cyan-200">
                      {skill}
                    </span>
                  ))}
                </div>
                {member.links ? (
                  <div className="mt-5 flex flex-wrap gap-4 font-mono text-xs font-black uppercase tracking-[0.12em] text-cyan-200">
                    {member.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="hover:text-white">
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="font-mono text-sm font-black uppercase tracking-[0.2em] text-cyan-300">How we work</p>
            <h2 className="mt-3 text-balance text-5xl font-black leading-tight sm:text-6xl">Operating model</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300/72">
              We do not present this as generic roles. We present it as a coordinated production system prepared for DIVE 2026 constraints.
            </p>
          </div>
          <div className="grid gap-2">
            {operatingPrinciples.map((item) => (
              <div key={item.title} className="frost-panel p-5">
                <h3 className="font-mono text-xl font-black uppercase text-cyan-200">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300/78">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <p className="font-mono text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Capability map</p>
        <h2 className="mt-3 text-5xl font-black leading-tight sm:text-6xl">What we can deliver in two days.</h2>
        <div className="mt-8 divide-y-2 divide-white/10 border-y-2 border-white/15">
          {capabilityBars.map(([title, body]) => (
            <div key={title} className="grid gap-4 py-6 sm:grid-cols-[170px_1fr]">
              <h3 className="font-mono text-xl font-black uppercase text-cyan-200">{title}</h3>
              <p className="text-lg leading-8 text-slate-300/80">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="footer-panorama relative z-10 border-t border-white/10 px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <h2 className="max-w-4xl text-balance text-5xl font-black leading-tight sm:text-6xl">Focused team. Real execution. DIVE 2026 ready.</h2>
          <div className="border border-cyan-300/40 bg-[#050814] p-5">
            <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-cyan-300">Primary contact</p>
            <a className="mt-3 block text-2xl font-black text-cyan-100 hover:text-white" href="mailto:davidbeljar@gmail.com">
              davidbeljar@gmail.com
            </a>
            <p className="mt-4 text-sm leading-6 text-slate-200/70">Team name: SZLL / Busan DIVE 2026 Hackathon</p>
          </div>
        </div>
      </section>
    </main>
  );
}
