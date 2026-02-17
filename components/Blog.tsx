
import React from 'react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
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
          {BLOG_POSTS.map((post, idx) => (
            <article 
              key={post.id} 
              className="reveal flex flex-col group cursor-pointer"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6 bg-[#f5f5f7] border border-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
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

              <div className="px-2">
                <div className="flex items-center space-x-3 text-xs font-bold text-[#86868b] uppercase tracking-widest mb-3">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#1d1d1f] mb-3 leading-tight group-hover:text-[#0071e3] transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-[#424245] text-base leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="mt-6 flex items-center text-[#0071e3] font-bold text-sm group-hover:translate-x-1 transition-transform">
                  Read Article
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-20 text-center reveal">
          <button className="px-8 py-3 bg-[#f5f5f7] hover:bg-gray-200 text-[#1d1d1f] rounded-full font-bold transition-all hover:scale-105 active:scale-95 text-sm">
            Explore All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
