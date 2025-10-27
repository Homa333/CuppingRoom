import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogsPage() {
  const blogDir = path.join(process.cwd(), 'src/content/blogs');
  const files = fs.readdirSync(blogDir);

  const posts = files.map(filename => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), 'utf-8');
    const { data } = matter(fileContent);
    return {
      ...data,
      slug: filename.replace('.md', ''),
    };
  });

  // sort by date descending
  const sortedPosts = posts.sort(
    (a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="container py-16">
      <h1 className="text-4xl font-semibold mb-10 text-center">Our Coffee Stories</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {sortedPosts.map((post: any) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
            </div>

            <div className="p-4 bg-white">
              <h2 className="font-semibold text-lg">{post.title}</h2>
              <p className="text-sm text-neutral-500 mt-1">{post.date}</p>
              <p className="text-sm text-neutral-600 mt-2">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
