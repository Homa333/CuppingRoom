"use client";
import { ArrowRight } from "@/components/icons";
import { useTheme } from "@/components/ThemeProvider";

const posts = [
  { id: 1, title: "How we cup: from sample to score", excerpt: "A quick look at our cupping protocol and what the scores mean.", tag: "Barista" },
  { id: 2, title: "Inside the honey process", excerpt: "Walking through our favorite method for bright, sweet cups.", tag: "Plantation" },
  { id: 3, title: "Altitude and acidity", excerpt: "Why higher-grown coffees taste the way they do.", tag: "Origins" }
];

export default function BlogsPage() {
  const { theme } = useTheme();
  return (
    <main className="py-16 lg:py-24">
      <div className="container">
        <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.id} className="card">
              <div className="aspect-[4/3] rounded-2xl bg-[url('https://images.unsplash.com/photo-1459257868276-5e65389e2722?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center"/>
              <span className={`mt-4 pill ${theme.pillBg} ${theme.pillText}`}>{p.tag}</span>
              <h3 className="mt-2 font-semibold">{p.title}</h3>
              <p className="text-sm text-neutral-600 mt-1">{p.excerpt}</p>
              <a href="#" className={`mt-3 link ${theme.brand}`}>Read post <ArrowRight className="h-4 w-4"/></a>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
