'use client';
import { useTheme } from '@/components/ThemeProvider';
import { siteInfo, hours } from '@/src/content';

export default function ContactPage() {
  const { theme } = useTheme();
  return (
    <main className="py-16 lg:py-24">
      <div className="container grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
          <p className="mt-3 text-neutral-600">
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
        <div className="rounded-3xl bg-neutral-100 p-6">
          <h3 className="font-semibold">Visit us</h3>
          <p className="mt-2 text-sm text-neutral-600">{siteInfo.addressShort}</p>
          <p className="text-sm text-neutral-600">{hours}</p>
          <div className="mt-4 h-64 w-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1465479423260-c4afc24172c6?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />
        </div>
      </div>
    </main>
  );
}
