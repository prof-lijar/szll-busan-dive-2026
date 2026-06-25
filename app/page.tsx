type TeamLink = {
  label: string;
  href: string;
};

type Member = {
  name: string;
  role: string;
  affiliation: string;
  base: string;
  summary: string;
  strengths: string[];
  contribution: string;
  links?: TeamLink[];
};

const members: Member[] = [
  {
    name: "LI JAR",
    role: "Team Lead • Planning • Development",
    affiliation: "Nexter Co., Ltd.",
    base: "Anyang",
    summary:
      "Shapes project strategy, translates problems into clear scopes, and keeps every feature tied to a measurable demo outcome.",
    strengths: ["Product framing", "Delivery management", "Cross-team architecture"],
    contribution: "Program communication, roadmap control, risk handling, and final presentation coherence.",
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
      "Adds local Busan perspective, interaction design judgment, and production fluency across game engines and media workflows.",
    strengths: ["Design systems", "C# / Unreal / Godot", "3D rigging", "BGM production"],
    contribution: "Owns front-end behavior, interaction quality, and launch-ready visuals.",
  },
  {
    name: "Lieng Hongky",
    role: "Development • AI",
    affiliation: "Independent Developer",
    base: "Busan",
    summary:
      "Builds computer vision and image-processing experiments into practical features that can be demonstrated under real constraints.",
    strengths: ["Computer vision", "Image restoration", "Swift", "React", "NestJS", "Unity"],
    contribution: "Responsible for AI prototyping, media/data processing, and rapid integration.",
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
      "Delivers robust web architecture and data-flow reliability, with practical experience in full-stack delivery and deployment.",
    strengths: ["Next.js", "TypeScript", "Spring Boot", "MySQL", "MongoDB", "CI/CD"],
    contribution: "Builds platform layer, data pipelines, and performance-safe implementation patterns.",
    links: [{ label: "Portfolio", href: "https://www.devzinko.site/" }],
  },
];

const diveSignals = [
  ["Date", "Jul 25-26, 2026"],
  ["Venue", "BEXCO Exhibition Center 2, Hall 4F / Busan"],
  ["Participants", "Around 300 participants"],
  ["Team size", "2 to 4 members per team"],
  ["Awards", "Total 10,000,000 KRW"],
];

const programSteps = [
  "Applications and document review",
  "Online orientation then pre-development period",
  "Submission of development proposals and tracks selection",
  "Two-day final contest with onsite mentoring",
  "Final presentation and awards",
];

const collaboration = [
  {
    title: "Clear command line",
    detail:
      "One lead sets priorities, each member has ownership, and the team checks checkpoints every day so nothing drifts before judge review.",
  },
  {
    title: "Busan-native execution",
    detail:
      "We are aligned for local pace, communication style, and on-site coordination for practical delivery and venue readiness.",
  },
  {
    title: "Demo-first rhythm",
    detail:
      "The product path is built around a visible demo, with a stable minimum viable output before polishing and storytelling.",
  },
  {
    title: "Cross-skill resilience",
    detail:
      "Planning, AI, frontend, backend, and platform delivery are covered by different specialists to reduce single-point risk.",
  },
];

const readiness = [
  ["Data to solution", "Real dataset understanding, cleaning, analysis logic, and solution framing from public data contexts."],
  ["Web engineering", "Next.js and TypeScript production setup with robust UI, API, and deployment practices."],
  ["AI prototypes", "Computer vision workflows for image enhancement and practical intelligence features."],
  ["Experience design", "Interaction direction and media execution so judges can understand the value in one flow."],
];

const timeline = [
  { day: "DAY 1", label: "Start sequence" },
  { day: "DAY 2", label: "Demo and final presentations" },
  { day: "Main Goal", label: "Prototype + clear story + repeatable demo" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#04060f] text-slate-100">
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#04060f] py-8 sm:py-12">
        <div className="absolute inset-0 -z-10 tech-grid opacity-40" />
        <div className="noise-bg absolute inset-0 -z-10" />
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 pb-10 pt-6 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:pb-16 lg:pt-8">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex border border-cyan-300/40 bg-cyan-300/10 px-3 py-2 font-mono text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
              DIVE 2026 Team Intro
            </p>
            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-7xl">SZLL</h1>
            <p className="mt-4 max-w-xl text-lg text-cyan-100/80 sm:text-xl">
              Built for real-world data hackathon execution. We are designed to move from{" "}
              <span className="font-black text-cyan-300">problem framing to deployable demo</span> with predictable team flow.
            </p>
            <nav className="mt-7 flex flex-wrap gap-4 text-xs font-black uppercase tracking-[0.18em]">
              <a href="#members" className="border border-white/20 bg-white/5 px-3 py-2 transition hover:border-cyan-300 hover:text-cyan-200">
                Members
              </a>
              <a href="#program-fit" className="border border-white/20 bg-white/5 px-3 py-2 transition hover:border-cyan-300 hover:text-cyan-200">
                Program Fit
              </a>
              <a href="#contact" className="border border-white/20 bg-white/5 px-3 py-2 transition hover:border-cyan-300 hover:text-cyan-200">
                Contact
              </a>
            </nav>
          </div>
          <div className="grid w-full max-w-xl gap-3 sm:grid-cols-2 lg:w-auto">
            {diveSignals.map(([key, value]) => (
              <article key={key} className="frost-panel p-4">
                <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-cyan-300">{key}</p>
                <p className="mt-1 text-sm leading-6 text-white/85">{value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-12 lg:py-16">
        <div className="frost-panel p-8">
          <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-cyan-300">About DIVE 2026</p>
          <h2 className="mt-4 text-balance text-4xl font-black leading-tight sm:text-5xl">Data, AI, and product thinking under real constraints.</h2>
          <p className="mt-6 text-lg text-slate-200/80">
            DIVE is a data-driven hackathon for practical teams to solve real problems with real data, guided by public and private sector
            experts in Busan.
          </p>
          <a
            className="mt-8 inline-flex border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-cyan-200 transition hover:bg-cyan-300/20"
            href="https://www.dxchallenge.co.kr/dive-2026"
            target="_blank"
            rel="noreferrer"
          >
            Open Official Program Page
          </a>
        </div>
        <div className="frost-panel p-8">
          <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-cyan-300">Flow Snapshot</p>
          <ol className="mt-6 space-y-4 text-base leading-7 text-slate-200/88">
            {programSteps.map((step) => (
              <li key={step} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="members" className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-16">
        <p className="font-mono text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Members</p>
        <h2 className="mt-3 max-w-3xl text-balance text-5xl font-black leading-tight sm:text-6xl">Clear responsibilities, fast execution.</h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {members.map((member, index) => (
            <article
              key={member.name}
              className="grid gap-6 frost-panel p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/55 sm:grid-cols-[112px_1fr]"
              style={{ animation: `riseIn 620ms cubic-bezier(.16,1,.3,1) ${index * 90}ms both` }}
            >
              <div className="flex h-28 w-28 items-center justify-center border border-cyan-200/40 bg-cyan-300/15 font-mono text-2xl font-black uppercase tracking-[0.22em] text-cyan-100">
                {member.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-black leading-none text-white">{member.name}</h3>
                    <p className="mt-2 font-mono text-xs font-black uppercase tracking-[0.14em] text-cyan-300">{member.role}</p>
                  </div>
                </div>
                <p className="mt-4 font-mono text-xs uppercase leading-5 text-slate-300/55">
                  {member.affiliation} / {member.base}
                </p>
                <p className="mt-5 text-base leading-7 text-slate-300/85">{member.summary}</p>
                <div className="mt-5 border-l-4 border-cyan-300/60 pl-4">
                  <p className="font-mono text-xs font-black uppercase tracking-[0.16em] text-cyan-200">Expected contribution</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300/80">{member.contribution}</p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
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

      <section id="program-fit" className="border-y border-white/10 bg-[#061122] px-5 py-12 sm:px-8 lg:px-0 lg:py-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="font-mono text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Execution model</p>
            <h2 className="mt-3 max-w-2xl text-balance text-5xl font-black leading-tight sm:text-6xl">How SZLL builds toward winning.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300/72">
              Roles are assigned to checkpoints, not just titles. We keep the team moving with daily validation and explicit owner boundaries.
            </p>
            <div className="mt-8 grid gap-2 sm:grid-cols-2">
              {timeline.map((item) => (
                <div key={item.day} className="frost-panel p-4">
                  <p className="font-mono text-xs font-black uppercase text-cyan-200">{item.day}</p>
                  <p className="mt-2 text-slate-100">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-2 overflow-hidden border border-white/15 md:grid-cols-2">
            {collaboration.map((item) => (
              <div key={item.title} className="p-6 frost-panel">
                <h3 className="font-mono text-xl font-black uppercase text-cyan-200">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300/78">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="font-mono text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Readiness map</p>
            <h2 className="mt-3 max-w-3xl text-balance text-5xl font-black leading-tight sm:text-6xl">What the team can execute.</h2>
          </div>
          <div className="divide-y-2 divide-white/10 border-y-2 border-white/15">
            {readiness.map(([title, body]) => (
              <div key={title} className="grid gap-4 py-6 sm:grid-cols-[180px_1fr]">
                <h3 className="font-mono text-xl font-black uppercase text-cyan-200">{title}</h3>
                <p className="text-lg leading-8 text-slate-300/80">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-[#061122] px-5 py-12 sm:px-8 lg:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <h2 className="max-w-4xl text-balance text-5xl font-black leading-tight sm:text-6xl">
            Built to collaborate, execute, and present at DIVE 2026.
          </h2>
          <div className="border border-cyan-300/40 bg-[#050814] p-5">
            <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-cyan-300">Primary contact</p>
            <a className="mt-3 block text-2xl font-black text-cyan-100 hover:text-white" href="mailto:davidbeljar@gmail.com">
              davidbeljar@gmail.com
            </a>
            <p className="mt-4 text-sm leading-6 text-slate-200/70">Team name: SZLL / DIVE 2026 Hackathon / Busan</p>
          </div>
        </div>
      </section>
    </main>
  );
}
