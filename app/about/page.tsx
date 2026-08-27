const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git & GitHub",
  "Responsive Design",
];

const timeline = [
  {
    year: "2005",
    label: "Born",
    detail: "Born on May 4, 2005.",
  },
  {
    year: "Present",
    label: "BSIT Student",
    detail: "Currently taking up a Bachelor of Science in Information Technology.",
  },
  {
    year: "Ongoing",
    label: "Building",
    detail: "Practicing by building small projects with JavaScript, React and Next.js",
  },
];

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <h1 className="mt-4 font-display text-4xl text-ink sm:text-6xl">
        The person behind
        <br />
        <span className="italic text-accent">the code.</span>
      </h1>

      <div className="mt-12 grid gap-12 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-lg leading-relaxed text-ink/80">
           I'm Jazee Kyl A. Abregondo, a 21-year-old BSIT student who 
           enjoys technology and learning new things. I like creating simple
            and useful digital experiences, and I'm always looking for ways to improve my skills.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
          Outside of school, you'll usually find me playing basketball, riding my motorcycle, 
          or listening to music. These are the things that keep me motivated and balanced.
          </p>

          <div className="mt-12">
            <p className="field-label">Timeline</p>
            <div className="mt-4 space-y-6 border-l border-rule pl-6">
              {timeline.map((t) => (
                <div key={t.label} className="relative">
                  <span className="absolute -left-[27px] top-1.5 h-2 w-2 bg-accent" />
                  <p className="font-mono text-xs uppercase tracking-widest2 text-ink/50">
                    {t.year}
                  </p>
                  <p className="mt-1 font-display text-xl text-ink">{t.label}</p>
                  <p className="mt-1 text-sm text-ink/60">{t.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="border border-rule p-6">
            <p className="field-label">Quick facts</p>
            <dl className="mt-4 space-y-3 font-mono text-sm">
              <div className="flex justify-between border-b border-rule pb-2">
                <dt className="text-ink/50">Course</dt>
                <dd className="text-ink">BSIT</dd>
              </div>
              <div className="flex justify-between border-b border-rule pb-2">
                <dt className="text-ink/50">Age</dt>
                <dd className="text-ink">21</dd>
              </div>
              <div className="flex justify-between border-b border-rule pb-2">
                <dt className="text-ink/50">Born</dt>
                <dd className="text-ink">May 4, 2005</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink/50">Based in</dt>
                <dd className="text-ink">Philippines</dd>
              </div>
            </dl>
          </div>

          <div className="mt-8">
            <p className="field-label">Toolkit</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="border border-rule px-3 py-1.5 font-mono text-xs text-ink/70"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
