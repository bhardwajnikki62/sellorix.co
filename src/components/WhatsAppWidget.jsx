import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const WhatsAppWidget = () => {
  const widgetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      // GSAP pop-in animation
      gsap.fromTo(widgetRef.current,
        { scale: 0, opacity: 0, y: 50 },
        { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" }
      );
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      ref={widgetRef}
      className={`fixed bottom-6 right-6 z-50 select-none ${!isVisible ? 'invisible' : 'visible'}`}
    >
      <a 
        href="https://wa.me/1234567890" // Replace with real WhatsApp number
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl shadow-[#25D366]/30 hover:scale-110 active:scale-95 transition-transform duration-300 relative group cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
         {/* Subtle pulse ring behind the button */}
        <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-30 group-hover:opacity-0 transition-opacity duration-300" />
        
        {/* WhatsApp Icon SVG */}
        <svg 
          viewBox="0 0 24 24" 
          width="36" 
          height="36" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>

        {/* Hover Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[#0E121E] border border-white/10 text-white text-sm font-bold px-4 py-2 rounded-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
           Chat with us
           {/* Tooltip arrow */}
           <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 border-y-[6px] border-y-transparent border-l-[6px] border-l-[#0E121E]" />
        </div>
      </a>
    </div>
  );
};

export default WhatsAppWidget;
