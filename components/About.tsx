
import React from 'react';
import { ABOUT_DATA } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="reveal">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#0071e3] mb-4 block">About Me</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] mb-8 leading-[1.1]">
              {ABOUT_DATA.title}
            </h2>
            
            <div className="space-y-6">
              {ABOUT_DATA.bio.map((paragraph, idx) => (
                <p key={idx} className="text-xl text-[#424245] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              {ABOUT_DATA.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-3xl font-bold text-[#1d1d1f] tracking-tight">{stat.value}</span>
                  <span className="text-sm font-semibold text-[#86868b] uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal relative group" style={{ transitionDelay: '200ms' }}>
            {/* Apple-style Bento Box / Visual Representation */}
            <div className="relative aspect-square rounded-[3rem] bg-[#f5f5f7] p-12 overflow-hidden shadow-sm border border-gray-100 flex flex-col justify-center transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-2">
              <div className="space-y-4 relative z-10">
                <div className="w-16 h-2 bg-[#0071e3] rounded-full mb-8"></div>
                <h3 className="text-3xl font-bold text-[#1d1d1f]">My Philosophy</h3>
                <p className="text-lg text-[#86868b] max-w-xs">
                  "Build it right, build it fast, and make it beautiful. If it doesn't spark joy, it doesn't belong on the screen."
                </p>
              </div>
              
              {/* Abstract decorative elements */}
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl opacity-50 transition-all duration-700 group-hover:scale-110"></div>
              <div className="absolute top-10 right-10 flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
              </div>

              {/* Grid pattern overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              
              {/* Code snippet decoration */}
              <div className="absolute bottom-12 right-12 opacity-5 scale-150 rotate-12 group-hover:opacity-10 transition-opacity">
                <pre className="text-xs font-mono text-black">
                  {`function createExperience() {\n  return joy + speed;\n}`}
                </pre>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
