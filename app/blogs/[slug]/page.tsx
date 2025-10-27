import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';

// Generate paths for all markdown files
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'src/content/blogs'));
  return files.map(filename => ({
    slug: filename.replace('.md', ''),
  }));
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), 'src/content/blogs', `${params.slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return (
    <main className="container py-16 max-w-3xl mx-auto">
      <h1 className="text-4xl font-semibold">{data.title}</h1>
      <p className="text-sm text-neutral-500 mt-2">
        {data.date} • {data.author}
      </p>

      {data.image && (
        <div className="my-8 w-full aspect-[16/9] relative rounded-3xl overflow-hidden shadow-2xl">
          <Image src={data.image} alt={data.title} fill className="object-cover" />
        </div>
      )}

      <article className="prose prose-neutral max-w-none">
        <MDXRemote source={content} />
      </article>
    </main>
  );
}
