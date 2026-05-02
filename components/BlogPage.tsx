import React from 'react';
import BlogCard from './BlogCard';
import { loadBlogs } from './utils/blogLoader';

const BlogPage: React.FC = () => {
  const posts = loadBlogs();

  return (
    <main className="min-h-screen bg-white pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        <section className="mb-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#1d1d1f] mb-8">
            Blog & Insights
          </h1>
          <p className="text-xl md:text-2xl text-[#86868b] max-w-3xl mx-auto leading-relaxed">
            Full-stack engineering, SaaS, product development, and system design.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-24">
          {posts.map((post, idx) => (
            <BlogCard key={post.id} post={post} idx={idx} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default BlogPage;
