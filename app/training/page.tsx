'use client';
import { useTheme } from '@/components/ThemeProvider';
import Image from 'next/image';
import Contact from '@/components/Contact';

export default function TrainingPage() {
  const { theme } = useTheme();
  return (
    <main className="py-16 lg:py-24">
      <div className="container">
        <h1 className="text-3xl font-semibold tracking-tight">Barista Training</h1>
        <p className="mt-2 text-neutral-700">22 days. 2 hours per session. Flexible schedules.</p>

        {/* CTAs */}
        {/* <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/#contact" className="btn btn-outline">Contact us</Link>
        </div> */}
        <section className="mt-8">
          <div className="relative w-full aspect-[5/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/grp-img.jpeg" // place file at public/training-hero.jpg
              alt="Barista training at Cupping Room"
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 1024px, (min-width: 768px) 768px, 100vw"
              priority={false}
            />
          </div>
        </section>
        {/* Format */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Format</h2>
          <p className="mt-2 text-neutral-700">
            Our training covers <strong>20% theory</strong> and <strong>80% practical</strong>.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="font-semibold">Theory includes</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700 space-y-1">
                <li>History of coffee</li>
                <li>Coffee farming and coffee bean varieties</li>
                <li>Processing</li>
                <li>Roasting</li>
                <li>Caffeine</li>
                <li>Espresso extraction factors</li>
                <li>Hospitality skills</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-semibold">Practical includes</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700 space-y-1">
                <li>Manual brew coffee</li>
                <li>Espresso extraction</li>
                <li>Milk steaming</li>
                <li>Latte art</li>
                <li>Various styles of coffee and non coffee iced or hot beverages</li>
                <li>Equipment handling</li>
                <li>Customer service</li>
                <li>Menu development</li>
              </ul>
              <p className="mt-3 text-sm text-neutral-700">
                You will learn both theory and hands on practice.
              </p>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Schedule</h2>
          <p className="mt-2 text-neutral-700">
            The course runs for <strong>22 days</strong> with <strong>2 hours per session</strong>.
            We offer flexible schedules (Morning, Day, and Evening).
          </p>
        </section>

        {/* Certification and Promise */}
        <section className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="font-semibold">Certification</h3>
            <p className="mt-2 text-sm text-neutral-700">
              You will receive a <strong>recognized barista certification</strong> that boosts your
              resume for coffee shop jobs.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold">Our Promise</h3>
            <p className="mt-2 text-sm text-neutral-700">
              We promise you quality training and unlimited latte art practice.
            </p>
          </div>
        </section>
        <section className="mt-8">
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/grp-cert-img.jpg" // place file at public/training-hero.jpg
              alt="Barista training at Cupping Room"
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 1024px, (min-width: 768px) 768px, 100vw"
              priority={false}
            />
          </div>
        </section>
        <section className="py-12 lg:py-20 scroll-mt-24">
          <Contact />
        </section>
      </div>
    </main>
  );
}
