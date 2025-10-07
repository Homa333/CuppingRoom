"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { navLinks } from "@/src/content";

export default function Navbar() {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b">
      <div className="container">
        <div className="flex h-20 items-center justify-between md:h-24">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-no-bg.png"
              alt="Cupping Room logo"
              width={100}
              height={100}
              priority
              className="h-12 w-auto md:h-16"
            />
            <span className="font-semibold tracking-tight">Cupping Room</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navLinks.map((n) => (
              <Link key={n.href} href={n.href} className="hover:underline">
                {n.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex items-center rounded-xl border px-3 py-2"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div id="mobile-menu" className="md:hidden pb-3">
            <div className="flex flex-col gap-2 pt-2">
              {navLinks.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="py-2"
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
