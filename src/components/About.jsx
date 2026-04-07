import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import aboutUsImg from '../assets/about_us.png'

const About = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-img', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })

      gsap.from('.about-text', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        x: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-24 px-6 md:px-12 relative w-full overflow-hidden bg-gradient-to-br from-white/5 to-transparent border-t border-b border-light-bg/5 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 about-img relative">
          <div className="absolute inset-0 bg-primary-600/20 blur-[60px] rounded-full point-events-none" />
          <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src={aboutUsImg}
              alt=""
              className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl flex flex-col items-center justify-center shadow-xl">
            <span className="text-5xl font-bold text-primary-400">4+</span>
            <span className="text-gray-300 font-medium">Years Experience</span>
          </div>
        </div>

        <div className="w-full md:w-1/2 pt-12 md:pt-0">
          <h2 className="about-text text-sm uppercase tracking-widest text-primary-400 font-semibold mb-3">About Us</h2>
          <h3 className="about-text text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-600">My Story</span>
          </h3>
          <p className="about-text text-gray-400 text-lg mb-6 leading-relaxed">
            From zero to $1.5M in three years selling home and kitchen products on Amazon as a amazon seller, I learned every lesson the hard way.
          </p>
          <p className="about-text text-gray-400 text-lg mb-8 leading-relaxed">
            But success meant nothing if I couldn't share it, so I walked away from my own brand to do what mattered, helping sellers like you escape the PPC nightmare and finally make their brands profitable. My journey became your solution.
          </p>
          {/* <button className="about-text group inline-flex items-center gap-3 px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors">
            <span className="font-semibold">Discover Our Team</span>
            <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </div>
          </button> */}
        </div>
      </div>
    </section>
  )
}

export default About
