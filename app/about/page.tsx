'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@/components/ThemeProvider';
import { about, aboutImages, team } from '@/src/content';

export default function AboutPage() {
  const { theme } = useTheme();

  return (
    <main className="py-16 lg:py-24">
      <div className="container">
        {/* Hero */}
        <header className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
              About Cupping Room
            </h1>
            <p className="mt-3 text-neutral-700">
              Our story begins at the source. We build farm direct relationships, choose processing
              methods that fit each lot, and roast with intention to bring clean, memorable cups to
              Pokhara.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/origins" className="btn btn-outline">
                Explore Origins
              </Link>
              <Link
                href="/training"
                className={`btn ${theme.brandBg} ${theme.brandBgHover} text-white`}
              >
                View Training
              </Link>
            </div>
          </div>
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={aboutImages.hero}
              alt="Cupping Room estate and cupping table"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>
        </header>

        {/* Farm Direct */}
        <section id="farm-direct" className="mt-16 grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-semibold">{about.farmDirect.header}</h2>
            {about.farmDirect.body.map((p, i) => (
              <p key={i} className="mt-3 text-neutral-700">
                {p}
              </p>
            ))}
          </div>
          <figure className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow">
            <Image
              src={aboutImages.farm}
              alt="Coffee farm and partner producers"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </figure>
        </section>

        {/* Processing */}
        <section id="processing" className="mt-16">
          <h2 className="text-2xl font-semibold">{about.processing.header}</h2>
          <p className="mt-3 text-neutral-700">{about.processing.intro}</p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {about.processing.methods.map(m => (
              <article key={m.name} className="card">
                <h3 className="font-semibold">{m.name}</h3>
                <p className="mt-2 text-sm text-neutral-700">{m.desc}</p>
              </article>
            ))}
          </div>

          <figure className="mt-8 relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow">
            <Image
              src={aboutImages.processing}
              alt="Processing methods at the wet and dry mill"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </figure>
        </section>

        {/* Roasting */}
        <section id="roasting" className="mt-16 grid lg:grid-cols-2 gap-8 items-start">
          <figure className="order-last lg:order-first relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow">
            <Image
              src={aboutImages.roasting}
              alt="Small batch roasting"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </figure>
          <div>
            <h2 className="text-2xl font-semibold">{about.roasting.header}</h2>
            {about.roasting.body.map((p, i) => (
              <p key={i} className="mt-3 text-neutral-700">
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* Team (renders only if you add members) */}
        {team.length > 0 && (
          <section id="team" className="mt-16">
            <h2 className="text-2xl font-semibold">Meet the Team</h2>
            <p className="mt-2 text-neutral-700">
              Trainers and roasters who bring farm to cup to life.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map(t => (
                <article key={t.name} className="card text-center">
                  <div className="mx-auto relative h-32 w-32 rounded-full overflow-hidden shadow">
                    <Image src={t.image} alt={t.name} fill className="object-cover" sizes="160px" />
                  </div>
                  <h3 className="mt-4 font-semibold">{t.name}</h3>
                  <p className="text-sm text-neutral-600">{t.role}</p>
                  <p className="mt-2 text-sm text-neutral-700">{t.bio}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* CTA strip */}
        <section className="mt-16 card">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="font-semibold">Ready to visit or learn</h3>
              <p className="text-sm text-neutral-700">
                Explore our origins or join a hands on training session in Pokhara.
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="/origins" className="btn btn-outline">
                Origins
              </Link>
              <Link
                href="/training"
                className={`btn ${theme.brandBg} ${theme.brandBgHover} text-white`}
              >
                Training
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
