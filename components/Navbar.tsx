"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useMemo } from "react";
import { useTheme } from "./ThemeProvider";
import { navLinks } from "@/src/content"; // your centralized links

function cx(...xs: (string | false | undefined)[]) {
  return xs.filter(Boolean).join(" ");
}

// If a link is a Home section (e.g. "#about"), we want "/#about" when off-Home.
function resolveHref(href: string, onHome: boolean) {
  if (href.startsWith("#")) return onHome ? href : `/${href}`;
  return href; // normal page path
}

export default function Navbar() {
  const { theme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  // Scroll-spy for Home sections (About, Processing, Roasting, Contact)
  const HOME_SECTION_IDS = useMemo(
    () => navLinks.filter(l => l.href.startsWith("#")).map(l => l.href.slice(1)),
    []
  );
  const [activeId, setActiveId] = useState<string | null>(null);
  const onHome = pathname === "/";

  useEffect(() => {
    if (!onHome) return;
    const handler = () => {
      const mid = window.innerHeight / 2;
      let closest: { id: string; dist: number } | null = null;
      HOME_SECTION_IDS.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top - mid);
        if (!closest || dist < closest.dist) closest = { id, dist };
      });
      if (closest) setActiveId(closest.id);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [onHome, HOME_SECTION_IDS]);

  const handleClick = (href: string) => (e: React.MouseEvent) => {
    if (!href.startsWith("#")) return; // normal link
    e.preventDefault();
    const id = href.slice(1);
    if (onHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      router.push(`/#${id}`);
    }
    setOpen(false);
  };

  const isActive = (href: string) => {
    if (href.startsWith("#")) return onHome && activeId === href.slice(1);
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-semibold tracking-tight">Cupping Room</span>
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={resolveHref(l.href, onHome)}
                onClick={l.href.startsWith("#") ? handleClick(l.href) : undefined}
                className={cx(
                  "px-1 py-2",
                  isActive(l.href) && `${theme.brand} font-medium underline underline-offset-8`
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex items-center rounded-xl border px-3 py-2"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(v => !v)}
          >
            <span className="sr-only">Toggle menu</span>☰
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div id="mobile-menu" className="md:hidden pb-3">
            <div className="flex flex-col gap-1 pt-2">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  href={resolveHref(l.href, onHome)}
                  onClick={l.href.startsWith("#") ? handleClick(l.href) : () => setOpen(false)}
                  className={cx("py-2", isActive(l.href) && `${theme.brand} font-medium underline`)}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
