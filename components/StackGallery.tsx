
import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';

const StackGallery: React.FC = () => {
  const [isStackHovered, setIsStackHovered] = useState(false);
  const [hoveredCardIdx, setHoveredCardIdx] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center mb-16 reveal">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-4">Visual Journal.</h2>
        <p className="text-xl text-[#86868b]">A collection of perspectives and pixels.</p>
      </div>

      <div 
        className="relative h-[650px] flex items-center justify-center cursor-none"
        onMouseEnter={() => setIsStackHovered(true)}
        onMouseLeave={() => {
          setIsStackHovered(false);
          setHoveredCardIdx(null);
        }}
      >
        <div className="relative w-72 h-96 md:w-80 md:h-[480px]">
          {GALLERY_IMAGES.map((img, idx) => {
            // Initial stack position
            const rotation = (idx - 2) * 4;
            const xOffset = (idx - 2) * 8;
            const yOffset = idx * 2;

            // Hover (fan-out) positions
            const fanOffsets = [-320, -160, 0, 160, 320];
            const fanRotations = [-15, -7, 0, 7, 15];
            const fanY = [20, -10, -40, -10, 20];

            const isThisCardHovered = hoveredCardIdx === idx;

            return (
              <div 
                key={idx}
                onMouseEnter={() => setHoveredCardIdx(idx)}
                onMouseLeave={() => setHoveredCardIdx(null)}
                className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] border-8 border-white group"
                style={{
                  transformOrigin: 'bottom center',
                  // Boost z-index if this specific card is hovered to ensure it overlaps its neighbors during zoom
                  zIndex: isThisCardHovered ? 50 : GALLERY_IMAGES.length - idx,
                  transform: isStackHovered 
                    ? `translateX(${fanOffsets[idx]}px) translateY(${fanY[idx]}px) rotate(${fanRotations[idx]}deg) scale(${isThisCardHovered ? 1.15 : 1.05})` 
                    : `translateX(${xOffset}px) translateY(${yOffset}px) rotate(${rotation}deg)`,
                  transitionDelay: isStackHovered ? (isThisCardHovered ? '0ms' : `${idx * 50}ms`) : `${(GALLERY_IMAGES.length - idx) * 30}ms`
                }}
              >
                <img 
                  src={img} 
                  alt={`Gallery item ${idx}`} 
                  className={`w-full h-full object-cover transition-transform duration-700 ${isThisCardHovered ? 'scale-110' : 'scale-100'}`}
                />
                <div className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${isStackHovered ? 'opacity-0' : 'opacity-100'}`} />
                <div className={`absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent transition-all duration-300 ${isThisCardHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <p className="text-white font-bold text-lg tracking-tight">Shot {idx + 1}</p>
                  <p className="text-white/60 text-sm">Portfolio Piece</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className={`mt-16 text-center transition-all duration-700 ${isStackHovered ? 'opacity-0' : 'opacity-100'}`}>
        <div className="inline-flex items-center px-6 py-2 rounded-full bg-gray-100 text-[#86868b] text-xs font-bold uppercase tracking-[0.2em]">
          <span className="relative flex h-2 w-2 mr-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0071e3] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0071e3]"></span>
          </span>
          Hover Stack to Fan Out
        </div>
      </div>
    </section>
  );
};

export default StackGallery;
