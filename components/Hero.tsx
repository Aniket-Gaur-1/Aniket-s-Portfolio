
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const [islandText, setIslandText] = useState("Exploring the digital frontier...");
  const [avatarEmoji, setAvatarEmoji] = useState("👨‍💻");

  const thoughts = [
    "Currently thinking about clean code... 🫧",
    "Needs more coffee ☕️",
    "Did I leave the server running? 🖥️",
    "Solving bugs since 2020 🐛",
    "WebRTC is magic ✨",
    "Pixel perfect is a lifestyle 📐"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIslandText(thoughts[Math.floor(Math.random() * thoughts.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleAvatarClick = () => {
    // Cast window to any to access the dynamically loaded confetti property
    const win = window as any;
    if (win.confetti) {
        win.confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#0071e3', '#1d1d1f', '#ffffff']
        });
    }
    setAvatarEmoji(["🚀", "🔥", "🦄", "⚡️", "💻"][Math.floor(Math.random() * 5)]);
    setTimeout(() => setAvatarEmoji("👨‍💻"), 1000);
  };

  return (
    <section className="pt-32 pb-20 px-6 min-h-[90vh] flex flex-col justify-center items-center text-center relative overflow-hidden">
      
      {/* Dynamic Island style thought bubble with reveal stagger */}
      <div 
        className="reveal mb-12 inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium animate-bounce shadow-xl transition-all hover:scale-105 cursor-pointer"
        style={{ transitionDelay: '100ms' }}
      >
        <span className="mr-2 text-blue-400">●</span>
        {islandText}
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Interactive Avatar with reveal stagger */}
        <div 
          onClick={handleAvatarClick}
          className="reveal w-24 h-24 mb-8 mx-auto bg-gray-100 rounded-full flex items-center justify-center text-5xl cursor-pointer hover:rotate-12 transition-all hover:scale-110 float-animation shadow-lg border-4 border-white"
          style={{ transitionDelay: '200ms' }}
        >
          {avatarEmoji}
        </div>

        <h1 
          className="reveal text-5xl md:text-8xl font-bold tracking-tight mb-6 text-sf-gradient leading-tight"
          style={{ transitionDelay: '300ms' }}
        >
          Mastering the Art <br /> of <span className="underline decoration-[#0071e3] decoration-8 underline-offset-8">Code.</span>
        </h1>
        
        <p 
          className="reveal text-xl md:text-2xl text-[#86868b] max-w-2xl mx-auto mb-12 font-normal leading-relaxed"
          style={{ transitionDelay: '400ms' }}
        >
          I'm {PERSONAL_INFO.name}, a developer focused on building <span className="text-[#1d1d1f] font-medium">real-time</span> collaborative systems and high-performance pixels.
        </p>

        <div 
          className="reveal flex flex-wrap justify-center gap-6"
          style={{ transitionDelay: '500ms' }}
        >
          <a 
            href="#projects" 
            className="group relative px-10 py-4 bg-[#0071e3] text-white rounded-full font-bold hover:bg-[#0077ed] transition-all shadow-[0_10px_20px_rgba(0,113,227,0.3)] hover:-translate-y-1 active:translate-y-0 overflow-hidden"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
          <a 
            href="#gallery" 
            className="px-10 py-4 bg-gray-100 text-[#1d1d1f] rounded-full font-bold hover:bg-gray-200 transition-all hover:scale-105 active:scale-95"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gray-100/50 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;
