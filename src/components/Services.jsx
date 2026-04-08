import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Briefcase, LineChart, Cpu, Globe, Rocket, BarChart3, Search, ShieldCheck, ClipboardList } from 'lucide-react'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const servicesList = [
  {
    icon: <Rocket className="w-8 h-8 text-primary-400" />,
    title: 'Full Service Management',
    desc: 'Complete, end-to-end management of your Amazon business, handling everything from inventory to customer support.',
    link: '/services/full-service-management'
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-primary-400" />,
    title: 'Advertising (PPC)',
    desc: 'Data-driven advertising strategies that maximize ROI and drive significant growth in visibility and sales.',
    link: '/services/ppc-management'
  },
  {
    icon: <Search className="w-8 h-8 text-primary-400" />,
    title: 'Amazon SEO',
    desc: "Optimizing your listings for Amazon's A9 algorithm to ensure your products dominate search results.",
    link: '/services/amazon-seo'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary-400" />,
    title: 'Account Audit',
    desc: 'Comprehensive account audits to uncover hidden potential and resolve critical performance issues.',
    link: '/services/amazon-audit'
  },
  {
    icon: <ClipboardList className="w-8 h-8 text-primary-400" />,
    title: 'SOPs',
    desc: 'Developing robust Standard Operating Procedures to streamline operations and enable scalable growth.',
    link: '/services/sops'
  }
]

const Services = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      })

      gsap.from('.service-header', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="services" ref={containerRef} className="py-24 px-6 md:px-12 relative z-10 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto service-header">
          <h2 className="text-sm uppercase tracking-widest text-primary-400 font-semibold mb-3">Our Offerings</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">The strategies Amazon sellers don't discover  <span className="heading-gradient text-transparent bg-clip-text">until they've already wasted $50K.</span></h3>
          <p className="text-gray-400 text-lg">We don't just <span className="text-primary-400 color-yellow">"manage accounts."</span> We fix the expensive mistakes that keep your products invisible, your ad spend wasted, and your competitors winning.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {servicesList.map((service, idx) => (
            <Link to={service.link} key={idx} className="service-card group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 blur-[50px] rounded-full group-hover:bg-primary-500/20 transition-all" />
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold mb-3">{service.title}</h4>
              <p className="text-gray-400 leading-relaxed text-lg">{service.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
