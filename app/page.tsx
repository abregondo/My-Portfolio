import Link from "next/link";

const fields = [
  { label: "Name", value: "Jazee Kyl A. Abregondo" },
  { label: "Role", value: "Web Developer" },
  { label: "Course", value: "BSIT" },
  { label: "Age", value: "21" },
  { label: "Born", value: "May 4, 2005" },
  { label: "Status", value: "Open to opportunities" },
];

const interests = ["Basketball", "Listening to music", "Riding motorcycles"];

const featured = [
  {
    tag: "P-01",
    title: "Bible Generator",
    blurb: "A simple tool for generating and exploring Bible verses.",
  },
  {
    tag: "P-02",
    title: "Motorcycle Inventory System",
    blurb: "A system for managing motorcycle parts, inventory, sales, and suppliers.  ",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">

          <h1 className="mt-4 font-display text-5xl leading-[1.05] text-ink sm:text-7xl">
            Jazee Kyl A.
            <br />
            <span className="italic text-accent">Abregondo</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-ink/70">
            A frontend developer studying BSIT, building clean, functional
            interfaces one project at a time.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="border border-ink bg-ink px-6 py-3 font-mono text-xs uppercase tracking-widest2 text-paper transition-colors hover:bg-transparent hover:text-ink"
            >
              View projects
            </Link>
            <Link
              href="/contact"
              className="border border-ink px-6 py-3 font-mono text-xs uppercase tracking-widest2 text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Get in touch
            </Link>
          </div>
        </div>

        {/* Dossier metadata strip — signature element */}
        <div className="border-t border-rule bg-paper-dim">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-4 px-6 py-6 sm:grid-cols-3 md:grid-cols-6">
            {fields.map((f) => (
              <div key={f.label}>
                <p className="field-label">{f.label}</p>
                <p className="field-value mt-1">{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERESTS */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <p className="field-label">Section 02 &mdash; Off the clock</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {interests.map((item) => (
              <span
                key={item}
                className="border border-rule px-4 py-2 font-mono text-xs uppercase tracking-widest2 text-ink/70"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-14">
          <div className="flex items-baseline justify-between">
            <p className="field-label">Section 03 &mdash; Selected work</p>
            <Link
              href="/projects"
              className="font-mono text-xs uppercase tracking-widest2 text-accent hover:underline"
            >
              View all &rarr;
            </Link>
          </div>

          <div className="mt-6 divide-y divide-rule border-t border-b border-rule">
            {featured.map((p) => (
              <div key={p.tag} className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:gap-8">
                <span className="font-mono text-xs text-ink/40">{p.tag}</span>
                <h3 className="font-display text-2xl text-ink">{p.title}</h3>
                <p className="text-sm text-ink/60 sm:ml-auto sm:text-right">{p.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}