"use client";
import { motion } from "framer-motion";
import ThemeSelect from "@/components/ThemeSelect";
import { ArrowRight, Star } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/components/ThemeProvider";
import { featureCards, homeHero } from "@/src/content";

export default function HomePage() {
  const { theme } = useTheme();
  return (
    <main>
      <section id="home" className="relative overflow-hidden">
        <div className={`absolute inset-0 -z-10 bg-gradient-to-b ${theme.gradFrom} via-white to-white`}/>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-center py-16 lg:py-24">
            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}}>
              <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight">{homeHero.heading}</h1>
              <p className="mt-4 text-neutral-600 max-w-xl">{homeHero.sub}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/origins" className="btn btn-outline">Explore Origins</Link>
                <Link href="/blogs" className={`btn ${theme.brandBg} ${theme.brandBgHover} btn-primary`}>
                  Read Our Blogs <ArrowRight className="h-5 w-5"/>
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-6 text-sm text-neutral-600">
                <div className="flex items-center gap-2"><Star className="h-5 w-5 text-amber-500"/> Estate grown</div>
                <div>Direct trade</div>
                <div>Roasted weekly</div>
              </div>
              <div className="mt-10">
                <ThemeSelect />
              </div>
            </motion.div>
            <motion.div   initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative">
                <div className="relative aspect-[4/5] w-full rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src={homeHero.heroImage}         // put your file at public/hero.jpg
                  alt="Cupping Room hero"
                  fill                      // makes it cover the wrapper
                  className="object-cover"  // keeps the cover behavior
                  priority                  // loads fast on the homepage
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 lg:py-24">
        <div className="container">
          <h2 className="text-3xl font-semibold tracking-tight">Our Features</h2>
          <p className="mt-3 text-neutral-600 max-w-2xl">We focus on two things: excellent barista craft and sustainable coffee cultivation.</p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {featureCards.map((card) => (
              <div key={card.title} className="card">
                <h3 className="font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{card.desc}</p>
                <Link href={card.href}className={`mt-4 link ${theme.brand}`}>Learn more</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
