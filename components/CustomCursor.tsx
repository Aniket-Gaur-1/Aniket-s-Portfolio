
import React, { useState, useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [clickScale, setClickScale] = useState(1);
  
  // Trail state: stores a history of cursor positions
  const [trail, setTrail] = useState<{x: number, y: number}[]>([]);
  const maxTrailSegments = 8;

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setPosition(newPos);
      setIsHidden(false);
      
      // Update trail history
      setTrail(prev => {
        const newTrail = [newPos, ...prev];
        return newTrail.slice(0, maxTrailSegments);
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('cursor-pointer') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setClickScale(0.8);
    const handleMouseUp = () => setClickScale(1);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', () => setIsHidden(true));
    document.addEventListener('mouseenter', () => setIsHidden(false));

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Trail particles - follow the path with decreasing size and opacity */}
      {!isHidden && trail.map((t, index) => (
        <div 
          key={index}
          className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] bg-[#0071e3] transition-transform duration-75 ease-out"
          style={{ 
            width: `${6 - (index * 0.5)}px`,
            height: `${6 - (index * 0.5)}px`,
            opacity: (maxTrailSegments - index) / (maxTrailSegments * 2),
            transform: `translate(${t.x - (3 - (index * 0.25))}px, ${t.y - (3 - (index * 0.25))}px) scale(${isHovering ? 0 : 1})`,
          }}
        />
      ))}

      {/* Main Cursor Ring */}
      <div 
        className={`fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] border border-white ${
          isHidden ? 'opacity-0 scale-0' : 'opacity-100'
        }`}
        style={{ 
          transform: `translate(${position.x - 20}px, ${position.y - 20}px) scale(${isHovering ? 1.8 : 1 * clickScale})`,
          backgroundColor: isHovering ? 'rgba(255,255,255,0.1)' : 'transparent'
        }}
      >
        {isHovering && (
          <div className="absolute inset-0 flex items-center justify-center animate-pulse">
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
        )}
      </div>

      {/* Dot Cursor */}
      <div 
        className={`fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference transition-transform duration-100 ${
          isHidden || isHovering ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
        }`}
        style={{ 
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
