
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-[#fbfbfd]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-24 reveal">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-[#1d1d1f] mb-8 text-sf-gradient">
            Engineering <br />Excellence.
          </h2>
          <p className="text-xl md:text-2xl text-[#86868b] max-w-2xl leading-relaxed font-medium">
            A selection of projects that demonstrate my focus on performance, scalability, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-24">
          {PROJECTS.map((project) => (
            <div key={project.id} className="reveal group flex flex-col h-full">
              {/* Image Container with strict Aspect Ratio */}
              <div className="relative aspect-[16/10] w-full rounded-[2.5rem] overflow-hidden mb-10 bg-[#f5f5f7] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-[0_30px_60px_rgba(0,0,0,0.06)] group-hover:shadow-[0_50px_100px_rgba(0,0,0,0.12)] group-hover:-translate-y-2 border border-white/50">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                
                {/* Subtle Inner Glow */}
                <div className="absolute inset-0 rounded-[2.5rem] shadow-[inset_0_0_80px_rgba(0,0,0,0.05)] pointer-events-none" />
                
                {/* Darker Overlay on Hover */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating Tech Tags with Glassmorphism */}
                <div className="absolute bottom-8 left-8 flex flex-wrap gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-4 py-1.5 bg-white/70 backdrop-blur-xl rounded-full text-[11px] font-bold text-[#1d1d1f] shadow-sm uppercase tracking-wider border border-white/40">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex-1 flex flex-col px-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#1d1d1f] tracking-tight group-hover:text-[#0071e3] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-lg md:text-xl text-[#0071e3] font-semibold mt-1">
                      {project.subtitle}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#86868b] bg-gray-100/80 px-4 py-2 rounded-full uppercase tracking-widest">
                    {project.period}
                  </span>
                </div>
                
                <div className="space-y-4 mb-10">
                  {project.description.map((desc, i) => (
                    <p key={i} className="text-[#424245] text-lg leading-relaxed flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] mt-2.5 mr-4 flex-shrink-0 opacity-60" />
                      {desc}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mt-auto">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-4 bg-[#1d1d1f] text-white rounded-full font-bold transition-all hover:bg-black hover:scale-105 active:scale-95 shadow-xl shadow-black/10 text-sm"
                    >
                      <span className="mr-3">Live Experience</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {project.codeUrl && (
                    <a 
                      href={project.codeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-4 bg-white text-[#1d1d1f] border border-gray-200 rounded-full font-bold transition-all hover:border-[#0071e3] hover:text-[#0071e3] hover:scale-105 active:scale-95 text-sm shadow-sm"
                    >
                      <span className="mr-3">Source Repository</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
