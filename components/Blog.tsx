import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';
import { loadBlogs } from './utils/blogLoader';

const Blog: React.FC = () => {
  const posts = loadBlogs().slice(0, 3);

  return (
    <section id="blog" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 reveal">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-6">Thoughts & <br/>Insights.</h2>
          <p className="text-xl md:text-2xl text-[#86868b] max-w-2xl leading-relaxed">
            Exploring the intersection of engineering, design, and product development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <BlogCard key={post.id} post={post} idx={idx} reveal />
          ))}
        </div>

        <div className="mt-20 text-center reveal">
          <Link
            to="/blog"
            className="inline-flex px-8 py-3 bg-[#f5f5f7] hover:bg-gray-200 text-[#1d1d1f] rounded-full font-bold transition-all hover:scale-105 active:scale-95 text-sm"
          >
            Explore All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
