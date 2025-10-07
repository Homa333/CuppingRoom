"use client";
import { ArrowRight } from "@/components/icons";
import { useTheme } from "@/components/ThemeProvider";

const lots = [
  {name:"Kathmandu Reserve", notes:"Dark chocolate, cherry", meta:"Washed, 1650m"},
  {name:"Gurkha Microlot 7", notes:"Citrus, honey, florals", meta:"Honey, 1800m"},
  {name:"Terai Estate Lot B", notes:"Nutty, caramel, balanced", meta:"Natural, 1500m"}
];

export default function OriginsPage() {
  const { theme } = useTheme();
  return (
    <main className="py-16 lg:py-24">
      <div className="container">
        <h1 className="text-3xl font-semibold tracking-tight">Origins</h1>
        <p className="mt-3 text-neutral-600 max-w-2xl">Trace each lot to varietal, altitude, and processing.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {lots.map((o) => (
            <div key={o.name} className="card">
              <div className="aspect-[4/3] rounded-2xl bg-[url('https://images.unsplash.com/photo-1461988091159-192b6df7054f?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center"/>
              <h3 className="mt-4 font-semibold">{o.name}</h3>
              <p className="text-sm text-neutral-600">{o.meta}</p>
              <p className="mt-2 text-sm">{o.notes}</p>
              <a className={`mt-4 link ${theme.brand}`} href="/blogs">Read origin stories <ArrowRight className="h-4 w-4"/></a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
