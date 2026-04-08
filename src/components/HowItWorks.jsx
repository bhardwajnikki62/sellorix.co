import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const phases = [
  {
    number: '01',
    title: 'Onboarding & Audit',
    description: 'We set clear goals, conduct a deep competitor analysis and full account audit to understand exactly where you are and what\'s holding you back.',
    tags: ['Brand Survey', 'Competitor Analysis', 'Account Audit', 'Goal Setting']
  },
  {
    number: '02',
    title: 'Execution',
    description: 'Full implementation across all channels — catalog fixes, PPC campaign builds, SEO-driven listing rewrites and creative design assets.',
    tags: ['Catalog Fixes', 'PPC Build', 'Listing SEO', 'Design']
  },
  {
    number: '03',
    title: 'Growth & Results',
    description: 'Continuous data-driven optimization to drive traffic, improve conversion and scale revenue — with transparent reporting every step of the way.',
    tags: ['Traffic Growth', 'Conversion Lift', 'Sales Scaling', 'Reporting']
  }
]

const HowItWorks = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current.children, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      })

      // Cards animation
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          y: 60,
          opacity: 0,
          duration: 1,
          delay: index * 0.1,
          ease: 'power3.out'
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
        <div ref={headerRef} className="mb-20 flex flex-col items-center text-center mx-auto">
          <span className="text-orange-500 font-bold tracking-[0.2em] text-sm uppercase mb-6 block">
            How It Works
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight max-w-4xl mx-auto text-yellow-400">
            From Onboarding<br />
            To Revenue Growth
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl max-w-2xl font-light mx-auto">
            A proven 3-phase framework that takes your brand from audit to scale.
          </p>
        </div>

        {/* Phases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {phases.map((phase, idx) => (
            <div
              key={idx}
              ref={el => cardsRef.current[idx] = el}
              className="relative group p-10 rounded-[2rem] bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden"
            >
              {/* Background Number */}
              <div className="absolute top-8 right-8 text-[8rem] font-black text-white/5 leading-none transition-transform duration-700 group-hover:scale-110 group-hover:text-white/10 pointer-events-none">
                {phase.number}
              </div>

              <div className="relative z-10">
                <span className="text-orange-500/50 font-black text-5xl mb-8 block transition-colors duration-500 group-hover:text-orange-500">
                  {phase.number}
                </span>

                <h3 className="text-3xl font-bold mb-6 group-hover:text-white transition-colors duration-300">
                  {phase.title}
                </h3>

                <p className="text-gray-400 text-lg leading-relaxed mb-10 min-h-[100px]">
                  {phase.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {phase.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm hover:bg-white/10 hover:text-white transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
