"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import { ArrowRight, Star } from "@/components/icons";
import {
  homeHero,
  about,
  originLots,
  training,
  siteInfo,
} from "@/src/content";

export default function HomePage() {
  const { theme } = useTheme();

  const originTeasers = originLots.slice(0, 3);

  return (
    <main>
      {/* HERO — Our Story */}
      <section
        id="about"
        className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 scroll-mt-24"
      >
        <div className={`absolute inset-0 -z-10 bg-gradient-to-b ${theme.gradFrom} via-white to-white`} />
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight">
                {homeHero.heading}
              </h1>
              <p className="mt-4 text-neutral-700 max-w-xl">{homeHero.sub}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#processing" className="btn btn-outline">Our Processing</a>
                <Link
                  href="/blogs"
                  className={`btn ${theme.brandBg} ${theme.brandBgHover} text-white`}
                >
                  Read Our Blogs <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-6 text-sm text-neutral-600">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-amber-500" /> Estate grown
                </div>
                <div>Direct trade</div>
                <div>Roasted weekly</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] w-full rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src={homeHero.heroImage || "/hero.jpg"}
                  alt="Cupping Room hero"
                  fill
                  className="object-cover"
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FARM-DIRECT STORY (part of About) */}
      <section id="story" className="py-16 lg:py-24 scroll-mt-24">
        <div className="container grid lg:grid-cols-12 gap-8 items-start">
          {/* Image LEFT (bigger): 7/12 on large screens */}
          <figure className="lg:col-span-7 col-span-12">
            <div className="relative w-full aspect-[3/2] md:aspect-[5/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/about/grp-farm-img.jpeg"
                alt="Coffee farm and partner producers"
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 60vw, (min-width: 1024px) 55vw, 100vw"
                priority={false}
              />
            </div>
          </figure>

          {/* Text RIGHT: 5/12 on large screens */}
          <div className="lg:col-span-5 col-span-12">
            <h2 className="text-2xl font-semibold">{about.farmDirect.header}</h2>
            {about.farmDirect.body.map((p, i) => (
              <p key={i} className="mt-3 text-neutral-700">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING — SHORT DESCRIPTION + BUTTON */}
      <section id="training" className="py-16 lg:py-24 scroll-mt-24">
        <div className="container grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold">Barista Training</h2>
            <p className="mt-3 text-neutral-700">
              {training.summary}
            </p>
            <ul className="mt-4 list-disc pl-5 text-sm text-neutral-700 space-y-1">
              <li>20% theory: history, farming & varieties, processing, roasting, caffeine, espresso variables, hospitality.</li>
              <li>80% practical: manual brew, espresso, milk steaming, latte art, hot/iced beverages, equipment handling, customer service, menu development.</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/training"
                className={`btn ${theme.brandBg} ${theme.brandBgHover} text-white`}
              >
                View Training Details
              </Link>
              <a href={`tel:${siteInfo.phone}`} className="btn btn-outline">
                Call {siteInfo.phone}
              </a>
            </div>
          </div>
          <div className="relative w-full aspect-[5/3] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/training-det.jpeg"
              alt="Barista training at Cupping Room"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section id="origins" className="py-16 lg:py-24 scroll-mt-24">
        <div className="container grid lg:grid-cols-12 gap-8 items-start">
          {/* Image LEFT (bigger): 7/12 on large screens */}
          <figure className="lg:col-span-7 col-span-12">
            <div className="relative w-full aspect-[3/2] md:aspect-[5/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/about/coffee-estate.jpeg"
                alt="Coffee farm and partner producers"
                fill
                className="object-cover"
                sizes="(min-width: 1280px) 60vw, (min-width: 1024px) 55vw, 100vw"
                priority={false}
              />
            </div>
          </figure>

          {/* Text RIGHT: 5/12 on large screens */}
          <div className="lg:col-span-5 col-span-12">
            <h2 className="text-2xl font-semibold">{about.origins.header}</h2>
            {about.origins.body.map((p, i) => (
              <p key={i} className="mt-3 text-neutral-700">{p}</p>
            ))}

            {/* CTA button below text */}
            <div className="mt-6">
              <Link
                href="/origins" // change to your full story route or anchor
                className={`btn ${theme.brandBg} ${theme.brandBgHover} text-white`}
              >
                Read the full origins story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 lg:py-24 scroll-mt-24">
        <div className="container grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="mt-3 text-neutral-700">
              Questions about our barista training, beans, or plantation tours? Send us a note.
            </p>
            <form className="mt-6 grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="Full name" className="rounded-xl border p-3" />
                <input placeholder="Email" type="email" className="rounded-xl border p-3" />
              </div>
              <input placeholder="Subject" className="rounded-xl border p-3" />
              <textarea placeholder="Message" rows={5} className="rounded-xl border p-3" />
              <button
                type="button"
                className={`btn ${theme.brandBg} ${theme.brandBgHover} text-white`}
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="card">
            <h3 className="font-semibold">Visit us</h3>
            <p className="mt-2 text-sm text-neutral-700">
              {siteInfo.name || "Cupping Room"}, {siteInfo.addressShort}
            </p>
            <p className="text-sm text-neutral-700">Phone: {siteInfo.phone}</p>
            <div className="mt-3 flex gap-3 text-sm">
              <a href={`tel:${siteInfo.phone}`} className="underline">
                Call
              </a>
              <a href={`https://wa.me/${siteInfo.whatsapp}`} className="underline">
                WhatsApp
              </a>
            </div>
            <div className="mt-4 relative h-64 w-full rounded-2xl overflow-hidden">
                <iframe
                title="Our location"
                src={`https://www.google.com/maps/place/Cupping+Room/@28.220886,83.9844251,17z&z=14&output=embed`}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
