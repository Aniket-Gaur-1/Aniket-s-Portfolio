import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from './utils/blogLoader';

interface BlogCardProps {
  post: BlogPost;
  idx?: number;
  reveal?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, idx = 0, reveal = false }) => {
  return (
    <article
      className={`${reveal ? 'reveal ' : ''}group flex flex-col`}
      style={{ transitionDelay: `${idx * 80}ms` }}
    >
      <Link to={`/blog/${post.id}`} className="block">
        <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 bg-[#f5f5f7] border border-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="px-4 py-1.5 bg-white/80 backdrop-blur-md rounded-full text-[10px] font-bold text-[#1d1d1f] shadow-sm uppercase tracking-wider">
              {post.category}
            </span>
          </div>
        </div>
      </Link>

      <div className="px-2 flex flex-col flex-grow">
        <div className="flex items-center space-x-3 text-xs font-bold text-[#86868b] uppercase tracking-widest mb-3">
          <span>{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
          <span>{post.readTime}</span>
        </div>

        <h2 className="text-2xl font-bold text-[#1d1d1f] mb-3 leading-tight group-hover:text-[#0071e3] transition-colors duration-300">
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </h2>

        <p className="text-[#424245] text-base leading-relaxed mb-6 line-clamp-3 flex-grow">
          {post.excerpt}
        </p>

        <Link
          to={`/blog/${post.id}`}
          className="inline-flex items-center text-[#0071e3] font-bold text-sm group-hover:translate-x-1 transition-transform"
        >
          Read Full Article
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
