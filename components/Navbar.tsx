"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "@/components/brand/Logo";

const links = [
  { href: "/galerija", label: "Galerija" },
  { href: "/cenovnik", label: "Cenovnik" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname === href + "/";

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-parchment/85 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          aria-label="Mon Repos - početna"
          className="text-espresso"
        >
          <Logo className="h-14 w-auto" />
        </Link>

        {/* desktop */}
        <div className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors hover:text-accent ${
                isActive(l.href) ? "text-accent" : "text-espresso"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/kontakt" className="btn btn-primary text-[12px]">
            Rezerviši
          </Link>
        </div>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Zatvori meni" : "Otvori meni"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center text-xl text-espresso lg:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* mobile panel */}
      {open && (
        <div className="border-t border-line bg-cream lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`border-b border-line py-3.5 text-sm font-semibold uppercase tracking-[0.14em] ${
                  isActive(l.href) ? "text-accent" : "text-espresso"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-4 mb-2 justify-center"
            >
              Rezerviši boravak
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
