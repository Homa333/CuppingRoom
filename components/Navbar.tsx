'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, useMemo } from 'react';
import { useTheme } from './ThemeProvider';
import { navLinks, siteInfo } from '@/src/content';
import Image from 'next/image';

function cx(...xs: (string | false | undefined)[]) {
  return xs.filter(Boolean).join(' ');
}

function resolveHref(href: string, onHome: boolean) {
  if (href.startsWith('#')) return onHome ? href : `/${href}`;
  return href;
}

export default function Navbar() {
  const { theme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  type SectionId = 'about' | 'processing' | 'roasting' | 'origins' | 'training' | 'contact';

  const HOME_SECTION_IDS = useMemo<SectionId[]>(
    () => navLinks.filter(l => l.href.startsWith('#')).map(l => l.href.slice(1) as SectionId),
    []
  );

  const [activeId, setActiveId] = useState<SectionId | null>(null);
  const onHome = pathname === '/';

  // ✅ Scroll-spy + URL hash update
  useEffect(() => {
    if (!onHome) return;

    const handler = () => {
      const viewportMid = window.innerHeight / 2;
      let active: SectionId | null = null;
      let smallestDiff = Number.POSITIVE_INFINITY;

      for (const id of HOME_SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const sectionMid = rect.top + rect.height / 2;
        const diff = Math.abs(sectionMid - viewportMid);

        if (sectionMid <= viewportMid && diff < smallestDiff) {
          smallestDiff = diff;
          active = id;
        }
      }

      if (active) {
        setActiveId(active);

        // ✅ Update URL hash when section changes
        const currentHash = window.location.hash.replace('#', '');
        if (currentHash !== active) {
          window.history.replaceState(null, '', `#${active}`);
        }
      }
    };

    handler();
    window.addEventListener('scroll', handler, { passive: true });
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('scroll', handler);
      window.removeEventListener('resize', handler);
    };
  }, [onHome, HOME_SECTION_IDS]);

  // ✅ Clicking menu updates URL and scrolls
  const handleClick = (href: string) => (e: React.MouseEvent) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();

    const id = href.slice(1);
    const el = document.getElementById(id);

    if (onHome && el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // ✅ Set hash after scroll
      window.history.replaceState(null, '', href);
    } else {
      router.push(`/${href}`);
    }
    setOpen(false);
  };

  const isActive = (href: string) => {
    if (href.startsWith('#')) return onHome && activeId === href.slice(1);
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b">
      <div className="container">
        <div className="flex items-center justify-between py-2">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-12 md:h-14 md:w-14">
              <Image
                src={siteInfo.logoNoBg}
                alt="Cupping Room Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-semibold tracking-tight text-lg md:text-xl">{siteInfo.name}</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map(l => (
              <Link
                key={l.label}
                href={resolveHref(l.href, onHome)}
                onClick={l.href.startsWith('#') ? handleClick(l.href) : undefined}
                className={cx(
                  'px-1 py-2 transition-colors',
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
              {navLinks.map(l => (
                <Link
                  key={l.label}
                  href={resolveHref(l.href, onHome)}
                  onClick={l.href.startsWith('#') ? handleClick(l.href) : () => setOpen(false)}
                  className={cx('py-2', isActive(l.href) && `${theme.brand} font-medium underline`)}
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
