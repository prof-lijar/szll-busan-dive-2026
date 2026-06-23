const members = [
  {
    name: "LI JAR",
    nativeName: "",
    role: "Team lead / Planning / Development",
    affiliation: "Nexter Co., Ltd.",
    origin: "Myanmar",
    base: "Anyang",
    summary:
      "Coordinates the team, frames the problem, keeps scope realistic, and connects technical decisions to the final presentation.",
    strengths: ["Product framing", "Delivery management", "Full-stack coordination"],
    contribution: "Lead team alignment, program communication, architecture direction, and demo readiness.",
  },
  {
    name: "Lee Seungyeon",
    nativeName: "이승연",
    role: "Planning / Development / Design",
    affiliation: "Sortech Co., Ltd.",
    origin: "Korea",
    base: "Busan",
    summary:
      "Adds local Busan context, design judgement, and interactive production skills across game engines, media, and release workflows.",
    strengths: ["Design thinking", "C# / Unreal / Godot", "3D rigging", "BGM production"],
    contribution: "Shape the user experience, visual direction, prototype interaction, and local relevance.",
  },
  {
    name: "Lieng Hongky",
    nativeName: "",
    role: "Development / Design",
    affiliation: "Independent Developer",
    origin: "Cambodia",
    base: "Busan",
    summary:
      "Computer science and AI graduate from Pusan National University with depth in computer vision, image restoration, and multi-platform software.",
    strengths: ["Computer vision", "Image enhancement", "Swift", "ReactJS", "NestJS", "Unity3D"],
    contribution: "Own AI vision experiments, image/data processing, and rapid frontend or app implementation.",
    links: [
      { label: "GitHub", href: "https://github.com/lienghongky/" },
      { label: "Portfolio", href: "https://hongky.netlify.app/" },
    ],
  },
  {
    name: "Zin Ko Naing",
    nativeName: "진코나잉",
    role: "Development / Design",
    affiliation: "Namu-iAPT Enterprise",
    origin: "Myanmar",
    base: "Jeonju",
    summary:
      "Full-stack developer studying software engineering in Jeonju, with production experience in Next.js, Spring Boot, databases, and SaaS UI performance.",
    strengths: ["Next.js", "TypeScript", "Spring Boot", "MySQL", "MongoDB", "CI/CD"],
    contribution: "Build reliable web flows, connect backend services, optimize UI performance, and support deployment.",
    links: [{ label: "Portfolio", href: "https://www.devzinko.site/" }],
  },
];

const nameLetters = [
  {
    letter: "S",
    member: members[1],
    label: "Seungyeon",
    punch: "Busan signal",
    note: "Design, planning, and playable interaction energy.",
    color: "bg-coral text-white",
    tilt: "-rotate-2",
  },
  {
    letter: "Z",
    member: members[3],
    label: "Zin",
    punch: "System maker",
    note: "Next.js, Spring, data flows, and clean delivery.",
    color: "bg-sea text-white",
    tilt: "rotate-1",
  },
  {
    letter: "L",
    member: members[2],
    label: "Lieng",
    punch: "Vision brain",
    note: "Computer vision, image enhancement, and multi-platform builds.",
    color: "bg-yellow text-graphite",
    tilt: "-rotate-1",
  },
  {
    letter: "L",
    member: members[0],
    label: "Li Jar",
    punch: "Team compass",
    note: "Keeps scope, story, and build direction aligned.",
    color: "bg-mint text-graphite",
    tilt: "rotate-2",
  },
];

const collaboration = [
  {
    label: "Team lead",
    value: "One person keeps communication, schedule changes, and presentation decisions clear.",
  },
  {
    label: "Local anchor",
    value: "Busan-based members help the team stay practical about venue flow, local context, and onsite coordination.",
  },
  {
    label: "Balanced build",
    value: "Planning, AI, frontend, backend, design, game/media, and deployment skills are covered without relying on one person.",
  },
  {
    label: "Demo discipline",
    value: "The team works toward a clear prototype, a visible user story, and a demo that is easy to follow.",
  },
];

const readiness = [
  ["AI & Data", "Computer vision, image restoration, Python scripting, and data-backed product thinking."],
  ["Web Product", "Next.js, React, TypeScript, Spring Boot, NestJS, Node.js, MySQL, MongoDB, and Firebase."],
  ["Creative Prototype", "Design, 3D rigging, Unity3D, Unreal, Godot, BGM production, and app/game release experience."],
  ["Program Fit", "A multinational team already based across Korea with direct Busan participation and clear role coverage."],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-graphite">
      <section className="relative border-b-2 border-graphite bg-paper">
        <div className="absolute inset-0 bg-grid opacity-45" />

        <header className="relative z-10 flex items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#" className="font-mono text-sm font-bold uppercase tracking-[0.22em]">
            SZLL
          </a>
          <nav className="hidden items-center gap-6 font-mono text-xs font-bold uppercase tracking-[0.16em] text-graphite/70 sm:flex">
            <a className="hover:text-coral" href="#members">
              Members
            </a>
            <a className="hover:text-coral" href="#collaboration">
              Team building
            </a>
            <a className="hover:text-coral" href="#contact">
              Contact
            </a>
          </nav>
        </header>

        <div className="relative z-10 flex min-h-[86svh] items-center justify-center px-5 pb-14 pt-10 text-center sm:px-8 lg:px-12">
          <div className="flex flex-col items-center">
            <p className="mb-5 w-fit rotate-[-1.5deg] border-2 border-graphite bg-coral px-3 py-2 font-mono text-xs font-black uppercase tracking-[0.18em] text-white shadow-hard">
              Busan DIVE 2026 team
            </p>
            <div className="max-w-5xl" aria-label="SZLL team name: Seungyeon, Zin, Lieng, Li Jar">
              <div className="flex flex-wrap items-end justify-center gap-2 sm:gap-3 lg:gap-4">
                {nameLetters.map((item, index) => (
                  <div key={`${item.letter}-${item.label}`} className="group relative">
                    <button
                      type="button"
                      className={`relative z-10 flex h-24 w-20 items-center justify-center border-2 border-graphite ${item.color} ${item.tilt} font-mono text-7xl font-black leading-none shadow-hard transition duration-200 hover:-translate-y-2 hover:rotate-0 focus-visible:-translate-y-2 focus-visible:rotate-0 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-sea sm:h-32 sm:w-28 sm:text-8xl lg:h-44 lg:w-36 lg:text-[11rem]`}
                      aria-describedby={`letter-card-${index}`}
                    >
                      {item.letter}
                    </button>
                    <div
                      id={`letter-card-${index}`}
                      className="pointer-events-none absolute bottom-full left-0 z-20 mb-4 w-[min(18rem,82vw)] translate-y-2 border-2 border-graphite bg-white p-4 text-left opacity-0 shadow-hard transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 sm:left-1/2 sm:-translate-x-1/2"
                    >
                      <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-coral">{item.punch}</p>
                      <p className="mt-2 text-2xl font-black leading-none">{item.label}</p>
                      <p className="mt-1 font-mono text-[11px] font-bold uppercase leading-5 text-graphite/50">
                        {item.member.role} / {item.member.base}
                      </p>
                      <p className="mt-3 text-sm font-semibold leading-6 text-graphite/74">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="mt-9 grid w-full max-w-3xl grid-cols-2 gap-2 font-mono text-xs font-black uppercase tracking-[0.12em] sm:grid-cols-4 sm:gap-3 sm:text-sm"
              aria-label="SZLL slogan: Start, Zoom in, Link up, Launch"
            >
              {[
                ["S", "Start"],
                ["Z", "Zoom in"],
                ["L", "Link up"],
                ["L", "Launch"],
              ].map(([initial, word]) => (
                <div key={word} className="flex items-center justify-center gap-2 border-2 border-graphite bg-white px-3 py-3 shadow-hard-sm">
                  <span className="text-coral">{initial}</span>
                  <span>{word}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="members" className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mb-10 grid gap-5 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div>
            <p className="font-mono text-sm font-black uppercase tracking-[0.2em] text-coral">Members first</p>
            <h2 className="mt-3 max-w-3xl text-balance text-5xl font-black leading-none sm:text-7xl">
              Who does what, and why it helps the program.
            </h2>
          </div>
          <p className="max-w-2xl text-xl leading-8 text-graphite/72">
            Each member has a clear lane, relevant background, and a practical contribution for the two-day hackathon.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {members.map((member, index) => (
            <article
              key={member.name}
              className="group grid gap-6 border-2 border-graphite bg-white p-5 shadow-hard transition duration-200 hover:-translate-y-1 hover:bg-cream sm:grid-cols-[112px_1fr]"
              style={{ animation: `riseIn 620ms cubic-bezier(.16,1,.3,1) ${index * 80}ms both` }}
            >
              <div className="flex h-28 w-28 items-center justify-center border-2 border-graphite bg-sea font-mono text-3xl font-black text-white shadow-hard-sm">
                {member.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-3xl font-black leading-none">
                      {member.name}
                      {member.nativeName ? <span className="ml-2 text-xl text-graphite/55">{member.nativeName}</span> : null}
                    </h3>
                    <p className="mt-2 font-mono text-xs font-bold uppercase tracking-[0.14em] text-coral">{member.role}</p>
                  </div>
                </div>
                <p className="mt-4 font-mono text-xs uppercase leading-5 text-graphite/55">
                  {member.affiliation} / {member.origin} / {member.base}
                </p>
                <p className="mt-5 text-base leading-7 text-graphite/78">{member.summary}</p>
                <div className="mt-5 border-l-4 border-coral pl-4">
                  <p className="font-mono text-xs font-black uppercase tracking-[0.16em]">Expected contribution</p>
                  <p className="mt-2 text-sm leading-6 text-graphite/72">{member.contribution}</p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {member.strengths.map((skill) => (
                    <span key={skill} className="border border-graphite/30 bg-paper px-2.5 py-1 font-mono text-[11px] font-bold uppercase">
                      {skill}
                    </span>
                  ))}
                </div>
                {member.links ? (
                  <div className="mt-5 flex gap-4 font-mono text-xs font-black uppercase tracking-[0.12em] text-sea">
                    {member.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="hover:text-coral">
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

      <section id="collaboration" className="border-y-2 border-graphite bg-graphite px-5 py-16 text-paper sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="font-mono text-sm font-black uppercase tracking-[0.2em] text-mint">Team building</p>
            <h2 className="mt-3 max-w-2xl text-balance text-5xl font-black leading-none sm:text-7xl">
              How SZLL works together.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-paper/68">
              SZLL is not presented as four isolated resumes. The operating model is simple: one lead, clear member lanes,
              overlapping implementation skills, and a final demo path from the first day.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden border-2 border-paper bg-paper md:grid-cols-2">
            {collaboration.map((item) => (
              <div key={item.label} className="bg-graphite p-6">
                <h3 className="font-mono text-xl font-black uppercase text-yellow">{item.label}</h3>
                <p className="mt-4 leading-7 text-paper/72">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="font-mono text-sm font-black uppercase tracking-[0.2em] text-coral">Readiness</p>
            <h2 className="mt-3 max-w-3xl text-balance text-5xl font-black leading-none sm:text-7xl">
              Relevant skills without role confusion.
            </h2>
          </div>
          <div className="divide-y-2 divide-graphite border-y-2 border-graphite">
            {readiness.map(([title, body]) => (
              <div key={title} className="grid gap-4 py-6 sm:grid-cols-[170px_1fr]">
                <h3 className="font-mono text-xl font-black uppercase text-sea">{title}</h3>
                <p className="text-lg leading-8 text-graphite/76">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t-2 border-graphite bg-coral px-5 py-12 text-white sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <h2 className="max-w-4xl text-balance text-5xl font-black leading-none sm:text-7xl">
            Built to collaborate, build, and present at DIVE 2026.
          </h2>
          <div className="border-2 border-white bg-graphite p-5 shadow-hard-white">
            <p className="font-mono text-xs font-black uppercase tracking-[0.18em] text-mint">Primary contact</p>
            <a className="mt-3 block text-2xl font-black hover:text-yellow" href="mailto:davidbeljar@gmail.com">
              davidbeljar@gmail.com
            </a>
            <p className="mt-4 text-sm leading-6 text-white/70">Team name: SZLL / DIVE 2026 Hackathon / Busan</p>
          </div>
        </div>
      </section>
    </main>
  );
}
