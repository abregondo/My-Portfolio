const channels = [
  { label: "Email", value: "jazeekyla@gmail.com", href: "mailto:jazeekyla@gmail.com" },
  { label: "GitHub", value: "https://github.com/abregondo", href: "https://github.com/abregondo" },
  { label: "Facebook", value: "https://www.facebook.com/kyl.abregondo.2025", href: "https://www.facebook.com/kyl.abregondo.2025" },
];

export default function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <h1 className="mt-4 font-display text-4xl text-ink sm:text-6xl">
        Let&apos;s <span className="italic text-accent">talk.</span>
      </h1>
      <p className="mt-4 max-w-xl text-ink/60">
        Open to internships, freelance work, or just a chat about web
        development. Reach me directly, or send a message below.
      </p>

      <div className="mt-14 grid gap-12 md:grid-cols-2">
        <div>
          <p className="field-label">Direct channels</p>
          <ul className="mt-4 divide-y divide-rule border-t border-b border-rule">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-between py-4 group"
                >
                  <span className="font-mono text-xs uppercase tracking-widest2 text-ink/50">
                    {c.label}
                  </span>
                  <span className="text-sm text-ink group-hover:text-accent">
                    {c.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form
          className="space-y-5"
          action="mailto:your.email@example.com"
          method="POST"
          encType="text/plain"
        >
          <p className="field-label">Send a message</p>

          <div>
            <label htmlFor="name" className="field-label block">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-2 w-full border border-rule bg-transparent px-4 py-3 text-sm text-ink placeholder:text-ink/30"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="field-label block">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-2 w-full border border-rule bg-transparent px-4 py-3 text-sm text-ink placeholder:text-ink/30"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="field-label block">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="mt-2 w-full border border-rule bg-transparent px-4 py-3 text-sm text-ink placeholder:text-ink/30"
              placeholder="What's on your mind?"
            />
          </div>

          <button
            type="submit"
            className="w-full border border-ink bg-ink px-6 py-3 font-mono text-xs uppercase tracking-widest2 text-paper transition-colors hover:bg-transparent hover:text-ink"
          >
            Send message
          </button>
          <p className="text-xs text-ink/40">
            Note: this opens your email client. For a fully in-page form,
            wire this up to a service like Formspree or EmailJS later.
          </p>
        </form>
      </div>
    </div>
  );
}