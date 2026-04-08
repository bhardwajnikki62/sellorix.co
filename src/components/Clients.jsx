import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

// Import all logos
import logo1 from '../assets/logo-1.webp'
import logo2 from '../assets/logo-2.webp'
import logo3 from '../assets/logo-3.webp'
import logo4 from '../assets/logo-4.webp'
import logo5 from '../assets/logo-5.webp'
import logo6 from '../assets/logo-6.webp'

import logo8 from '../assets/logo-8.webp'
import logo9 from '../assets/logo-9.webp'
import logo10 from '../assets/logo-10.webp'
import logo11 from '../assets/logo-11.webp'
import logo12 from '../assets/logo-12.webp'

const logos = [
  logo1, logo2, logo3, logo4, logo5, logo6,
  logo8, logo9, logo10, logo11, logo12
]

const Clients = () => {
  const containerRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // Duplicate logos for seamless loop
    const totalLogos = logos.length
    const trackWidth = track.scrollWidth / 2

    const animation = gsap.to(track, {
      x: `-${trackWidth}px`,
      duration: 30,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % trackWidth)
      }
    })

    return () => animation.kill()
  }, [])

  return (
    <section id="clients" ref={containerRef} className="py-20 bg-dark-bg overflow-hidden relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-2xl uppercase tracking-[0.3em] text-gray-500 font-medium mb-4 text-yellow-400 ">
          Trusted by major brands and Amazon FBA sellers
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradients to fade edges */}
        <div className="absolute left-0 top-0 h-full w-20 md:w-40 bg-gradient-to-r from-dark-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 bg-gradient-to-l from-dark-bg to-transparent z-10 pointer-events-none" />

        <div
          ref={trackRef}
          className="flex items-center gap-12 md:gap-24 w-max px-12"
        >
          {/* Double the logos for seamless scroll */}
          {[...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-32 md:w-44 h-16 flex items-center justify-center">
              <img
                src={logo}
                alt={`Client Logo ${idx + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
