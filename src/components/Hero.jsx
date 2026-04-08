import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ArrowRight, Sparkles, TrendingUp, Users, Star } from 'lucide-react'

const Hero = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create main entrance timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // LEFT side — slides in from the left
      tl.from('.hero-left', {
        x: -120,
        opacity: 0,
        duration: 1,
      })
        // Stagger children of the left side for a cascading look
        .from('.hero-left-child', {
          x: -60,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
        }, '-=0.6')

      // RIGHT side — slides in from the right simultaneously
      tl.from('.hero-right', {
        x: 120,
        opacity: 0,
        duration: 1,
      }, '<0.2') // starts slightly after left begins

      // Float the stat cards
      tl.from('.stat-card', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      }, '-=0.4')

      // Infinite floating animation on the visual blob card
      gsap.to('.hero-blob', {
        y: -18,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to('.hero-badge', {
        y: 12,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.5,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-12"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center pt-24">

        {/* ─── LEFT SIDE ─── */}
        <div className="hero-left flex flex-col items-start gap-6">

          <div className="hero-left-child inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-sm font-medium backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            Trusted by 40+ Brands
          </div>

          <h1 className="hero-left-child text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
            Stop Guessing. {' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Start Scaling
            </span>{' '}
            Your Brand.
          </h1>

          <p className="hero-left-child text-gray-400 text-lg leading-relaxed max-w-lg">
            Your In-House Amazon PPC Partner by replacing traditional agencies with deep-dive growth strategy.
          </p>

          <div className="hero-left-child flex flex-col sm:flex-row gap-4">
            <Link to="/services/amazon-audit" className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-7 py-3.5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-500/30">
              Start Your Free Brand Audit <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/case-studies" className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-7 py-3.5 rounded-full transition-all hover:scale-105">
              View Case Studies
            </Link>
          </div>

          {/* Social proof row */}
          <div className="hero-left-child flex items-center gap-4 pt-2">
            <div className="flex -space-x-3">

              {['A', 'B', 'C', 'D'].map((l) => (
                <div key={l} className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 border-2 border-gray-950 flex items-center justify-center text-white text-xs font-bold">{l}</div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-yellow-400" />)}
              </div>
              <span className="text-gray-400 text-sm"> 4.8/5 from 40+clients</span>
            </div>
          </div>
        </div>

        {/* ─── RIGHT SIDE ─── */}
        <div className="hero-right relative flex items-center justify-center">
          {/* Main visual card */}
          <div className="hero-blob relative w-full max-w-md rounded-3xl bg-gradient-to-br from-gray-900 to-gray-950 border border-white/10 p-8 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 pointer-events-none rounded-3xl" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">Revenue Growth</p>
                <p className="text-gray-400 text-sm">Year over Year</p>
              </div>
            </div>

            {/* Fake chart bars */}
            <div className="flex items-end gap-2 h-28 mb-6">
              {[40, 55, 45, 70, 65, 80, 95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-indigo-600 to-purple-500 opacity-90"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-3xl font-bold text-white">+143%</p>
                <p className="text-gray-400 text-sm">Average client growth</p>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-green-500/15 border border-green-500/30 text-green-400 text-sm font-medium">
                ↑ 23% this YOY
              </div>
            </div>
          </div>

          {/* Floating stat cards */}
          <div className="stat-card hero-badge absolute -bottom-4 -left-6 bg-gray-900 border border-white/10 rounded-2xl px-5 py-4 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-white font-bold text-lg">40+</p>
                <p className="text-gray-400 text-xs">Global Clients</p>
              </div>
            </div>
          </div>

          <div className="stat-card absolute -top-4 -right-4 bg-gray-900 border border-white/10 rounded-2xl px-5 py-4 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 flex items-center justify-center">
                <Star className="w-5 h-5 text-indigo-400 fill-indigo-400" />
              </div>
              <div>
                <p className="text-white font-bold text-lg">4.8/5</p>
                <p className="text-gray-400 text-xs">Client Rating</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
