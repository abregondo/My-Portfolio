import Link from "next/link";

const socials = [
  { label: "GitHub", href: "https://github.com/abregondo" },
  { label: "Facebook", href: "https://www.facebook.com/kyl.abregondo.2025" },
];

export default function Footer() {
  return (
    <footer className="border-t border-rule bg-paper">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="field-label">End of file</p>
            <p className="mt-2 font-display text-lg text-ink">
              Jazee Kyl A. Abregondo
            </p>
            <p className="mt-1 text-sm text-ink/60">Web Developer &middot; BSIT</p>
          </div>

          <div>
            <p className="field-label">Navigate</p>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link href="/" className="hover:text-accent">Landing</Link></li>
              <li><Link href="/about" className="hover:text-accent">About</Link></li>
              <li><Link href="/projects" className="hover:text-accent">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="field-label">Elsewhere</p>
            <ul className="mt-2 space-y-1 text-sm">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent"
>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-rule pt-6 font-mono text-[0.68rem] uppercase tracking-widest2 text-ink/50 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Jazee Kyl A. Abregondo. All rights reserved.</span>
          <span>Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}