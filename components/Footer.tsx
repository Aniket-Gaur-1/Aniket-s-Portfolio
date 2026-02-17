
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f5f5f7] py-20 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="reveal">
            <h3 className="text-4xl font-bold text-[#1d1d1f] mb-6 tracking-tight leading-tight">
              Ready to bring <br /> 
              your ideas to life?
            </h3>
            <p className="text-[#86868b] text-xl max-w-sm font-medium leading-relaxed">
              I'm currently looking for new opportunities. Let's create something extraordinary together.
            </p>
          </div>
          
          <div className="flex flex-col md:items-end justify-center space-y-8 reveal">
            <div className="flex flex-col md:items-end space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#86868b]">Direct Email</span>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="text-2xl md:text-3xl font-semibold text-[#1d1d1f] hover:text-[#0071e3] transition-colors underline decoration-gray-200 underline-offset-8 hover:decoration-[#0071e3]"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
            
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#0071e3] text-white rounded-full font-bold text-lg transition-all shadow-[0_10px_30px_rgba(0,113,227,0.3)] hover:shadow-[0_15px_40px_rgba(0,113,227,0.4)] hover:-translate-y-1 active:translate-y-0 active:scale-95"
            >
              Contact Me
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <div className="flex space-x-6 text-[#1d1d1f] pt-4">
              <a 
                href={`https://${PERSONAL_INFO.linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white rounded-full card-shadow hover:text-[#0071e3] transition-all hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/Aniket-Gaur-1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white rounded-full card-shadow hover:text-[#0071e3] transition-all hover:-translate-y-1"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white rounded-full card-shadow hover:text-[#0071e3] transition-all hover:-translate-y-1"
                aria-label="Twitter / X"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-gray-300/40 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <p className="text-[#86868b] text-sm font-medium">Available for freelance & full-time roles</p>
          </div>
          
          <p className="text-[#86868b] text-sm">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Designed with ❤️
          </p>
          
          <div className="flex space-x-8 text-xs font-bold uppercase tracking-widest text-[#424245]">
            <span className="hover:text-[#1d1d1f] cursor-pointer">Privacy</span>
            <span className="hover:text-[#1d1d1f] cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
