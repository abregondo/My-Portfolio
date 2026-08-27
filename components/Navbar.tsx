"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Landing" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center border border-ink font-mono text-xs tracking-widest2 text-ink transition-colors group-hover:bg-ink group-hover:text-paper">
            JKA
          </span>
          
        </Link>

        <nav className="hidden gap-8 font-mono text-xs uppercase tracking-widest2 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1 transition-colors hover:text-accent ${
                  active ? "text-accent" : "text-ink/70"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-[1px] left-0 h-[2px] w-full bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-[1.5px] w-6 bg-ink transition-transform ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`h-[1.5px] w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-[1.5px] w-6 bg-ink transition-transform ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-rule bg-paper font-mono text-sm uppercase tracking-widest2 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`border-b border-rule px-6 py-4 ${
                pathname === link.href ? "text-accent" : "text-ink/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}