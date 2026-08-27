const projects = [
  {
    tag: "P-01",
    title:"Bible Generator",
    description:
      "This project is an AI-powered Bible Generator that helps users quickly find and generate Bible verses, reflections, and inspirational messages based on their needs",
    stack: ["React & Vite", "Javascript", "CSS"],
    link: "https://github.com/abregondo/Bible-Generator.git",
  },
 {
  tag: "P-02",
  title: "Motorcycle Inventory System",
  description:
    "A motorcycle parts inventory system designed to help manage products, stock levels, sales, suppliers, and inventory records efficiently. I developed the system's interface and core functionality using JavaScript, HTML, and CSS, focusing on making inventory management simple and organized.",
  stack: ["JavaScript", "HTML", "CSS"],
  link: "https://github.com/abregondo/jk-motorparts-inventory-system.git",
},
{
  tag: "P-03",
  title: "Weather-Update",
  description:
    "A weather update web application that provides users with weather information through a simple and visually engaging interface. I developed the application using HTML, CSS, and JavaScript, including the weather functionality, responsive design, and dynamic weather-condition visuals.",
  stack: ["HTML", "CSS", "JavaScript"],
  link: "https://github.com/abregondo/JAZEEKYL-WEATHER-UPDATE.git",
},
];

export default function Projects() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <h1 className="mt-4 font-display text-4xl text-ink sm:text-6xl">
        Selected <span className="italic text-accent">work.</span>
      </h1>
      <p className="mt-4 max-w-xl text-ink/60">
        A running record of things I&apos;ve built. 
      </p>

      <div className="mt-14 divide-y divide-rule border-t border-b border-rule">
        {projects.map((p) => (
          <div
            key={p.tag}
            className="grid gap-4 py-10 sm:grid-cols-[80px_1fr_auto] sm:items-start sm:gap-8"
          >
            <span className="font-mono text-xs text-ink/40">{p.tag}</span>

            <div>
              <h2 className="font-display text-2xl text-ink sm:text-3xl">
                {p.title}
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/70">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="border border-rule px-3 py-1 font-mono text-[0.68rem] uppercase tracking-widest2 text-ink/60"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap font-mono text-xs uppercase tracking-widest2 text-accent hover:underline"
            >
              View &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}