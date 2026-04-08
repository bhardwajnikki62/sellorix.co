import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import worldMap from '../assets/world-map.svg';

const AnimatedMap = () => {
  const containerRef = useRef(null);

  // Approximate locations on the SVG for dots to pulse.
  // We'll use a container that perfectly matches the aspect ratio of the SVG
  // so the percentages are accurate regardless of size.
  // The wikipedia blank world map bounds are roughly 2754 x 1398, ratio ~ 1.97
  const points = [
    { top: '30%', left: '20%' }, // North America
    { top: '45%', left: '75%' }, // India
    { top: '35%', left: '80%' }, // Nepal

  ];

  useEffect(() => {
    // Basic scale/opacity pulse for the glowing rings
    gsap.to('.map-pulse', {
      scale: 2.5,
      opacity: 0,
      duration: 2,
      repeat: -1,
      stagger: {
        each: 0.3,
        from: "random"
      },
      ease: "power1.out"
    });

    // Slight brightness flicker for the core dots
    gsap.to('.map-core', {
      opacity: 0.6,
      duration: 1,
      repeat: -1,
      yoyo: true,
      stagger: {
        each: 0.1,
        from: "random"
      },
      ease: "power1.inOut"
    });
  }, []);

  return (
    <section className="py-24 bg-dark-bg overflow-hidden relative">
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Global Reach (Nepal , India , USA)</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Connecting with brands on a global scale through strategic management and operations.</p>
        </div>

        {/* Map Container */}
        <div className="w-full flex justify-center">
          {/* We force the wrapper to match the aspect ratio of the world map SVG (2754/1398 ~ 1.97) */}
          <div className="relative w-full max-w-[1000px] aspect-[1.97]">

            {/* The dotted map background using mask */}
            <div
              className="absolute inset-0 w-full h-full opacity-60"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 1.5px, transparent 1.5px)',
                backgroundSize: '16px 16px',
                maskImage: `url(${worldMap})`,
                WebkitMaskImage: `url(${worldMap})`,
                maskSize: '100% 100%',
                WebkitMaskSize: '100% 100%',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
              }}
            ></div>

            {/* Glowing dots wrapper */}
            <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none">
              {points.map((pt, i) => (
                <div
                  key={i}
                  className="absolute flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                  style={{ top: pt.top, left: pt.left, width: '20px', height: '20px' }}
                >
                  <div className="map-pulse absolute w-4 h-4 bg-primary-500 rounded-full opacity-60"></div>
                  <div className="map-core absolute w-1.5 h-1.5 bg-primary-400 shadow-[0_0_10px_2px_rgba(59,130,246,0.8)] rounded-full"></div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedMap;
