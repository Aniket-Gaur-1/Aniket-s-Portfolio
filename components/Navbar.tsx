
import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [wiggle, setWiggle] = useState(false);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Skills', href: '#skills' },
    { name: 'Blog', href: '#blog' },
    { name: 'Education', href: '#education' },
  ];

  const handleMouseEnter = (index: number) => {
    const element = navRefs.current[index];
    if (element) {
      const { offsetLeft, offsetWidth } = element;
      setPillStyle({
        left: offsetLeft,
        width: offsetWidth,
        opacity: 1,
      });
    }
  };

  const handleMouseLeave = () => {
    setPillStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  const handleHireMeEnter = () => {
    setWiggle(true);
    setTimeout(() => setWiggle(false), 500);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'apple-glass border-b border-gray-200/50 py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tight text-[#1d1d1f] group">
          {PERSONAL_INFO.name}
          <span className="inline-block transition-transform group-hover:rotate-12 ml-1">🚀</span>
        </a>
        
        <div 
          className="hidden md:flex relative items-center p-1 rounded-full bg-gray-100/40 backdrop-blur-md border border-gray-200/20"
          onMouseLeave={handleMouseLeave}
        >
          {navItems.map((item, idx) => (
            <a 
              key={item.name} 
              href={item.href} 
              ref={(el) => { navRefs.current[idx] = el; }}
              onMouseEnter={() => handleMouseEnter(idx)}
              className="relative z-10 px-5 py-2 text-sm font-semibold text-[#1d1d1f]/70 hover:text-[#1d1d1f] transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
          
          {/* Dynamic background pill */}
          <div 
            className="absolute top-1 bottom-1 bg-white rounded-full shadow-md transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-none"
            style={{
              left: `${pillStyle.left}px`,
              width: `${pillStyle.width}px`,
              opacity: pillStyle.opacity,
              transform: `scale(${pillStyle.opacity === 0 ? 0.8 : 1})`,
            }}
          />
        </div>

        <a 
          href={`mailto:${PERSONAL_INFO.email}`}
          onMouseEnter={handleHireMeEnter}
          className={`bg-[#0071e3] text-white px-7 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_4px_12px_rgba(0,113,227,0.2)] hover:shadow-[0_8px_24px_rgba(0,113,227,0.4)] active:scale-90 ${
            wiggle ? 'animate-[wiggle_0.4s_ease-in-out]' : ''
          }`}
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
