import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { marked } from 'marked';
import { loadBlogById } from './utils/blogLoader';

const BlogDetail: React.FC = () => {
  const { id } = useParams();
  const post = id ? loadBlogById(id) : undefined;

  if (!post) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
        <Link to="/blog" className="text-blue-600 font-semibold">
          Back to Blog
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white pt-32 px-6 pb-24">
      <article className="max-w-4xl mx-auto">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full rounded-3xl mb-10 object-cover max-h-[500px]"
        />

        <div className="mb-6 text-sm uppercase tracking-widest text-gray-500">
          {post.category} / {post.date} / {post.readTime}
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-[#1d1d1f] mb-8 leading-tight">
          {post.title}
        </h1>

        <div
          className="prose prose-lg max-w-none text-[#424245] leading-relaxed"
          dangerouslySetInnerHTML={{ __html: marked.parse(post.content) }}
        />

        <div className="mt-16">
          <Link
            to="/blog"
            className="inline-block px-6 py-3 rounded-full bg-[#f5f5f7] hover:bg-gray-200 font-semibold"
          >
            Back to All Articles
          </Link>
        </div>
      </article>
    </main>
  );
};

export default BlogDetail;
