import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import maybelline from '../assets/maybelline.png'
import {
  TrendingUp,
  CheckCircle2,
  ShoppingCart,
  Zap,
  Globe,
  Target,
  BarChart3,
  Award,
  ArrowRight,
  Package,
  Calendar,
  Layers,
  ArrowRightCircle,
  TrendingDown,
  Layout,
  MousePointer2,
  PieChart,
  ShieldCheck,
  Search
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const TentAndTableCaseStudy = () => {
  const [activeTab, setActiveTab] = useState('Year 1');

  useEffect(() => {
    // Hero Animations
    gsap.fromTo('.stat-card',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)", stagger: 0.2 }
    );

    // Fade-in Sections
    gsap.utils.toArray('.reveal-section').forEach(section => {
      gsap.fromTo(section,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    // Bar Animations
    gsap.utils.toArray('.bar-grow').forEach(bar => {
      gsap.fromTo(bar,
        { height: "0%" },
        {
          height: bar.getAttribute('data-height'),
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: bar.parentElement,
            start: "top 95%"
          }
        }
      );
    });
  }, []);

  const tabs = [
    {
      id: 'Year 1',
      title: 'Year 1',
      content: '2022 Technical Correction and Creative Standardization: In Year 1, we overhauled the catalog structure and unified brand visuals. This eliminated customer confusion and set the stage for scalability. We also audited all product listings to identify and resolve "retail hazards."'
    },
    {
      id: 'Year 2',
      title: 'Year 2',
      content: '2023 Full-Funnel Scaling: Building on the Year 1 foundation, we expanded into full-funnel advertising (AMC + Amazon Ads). We successfully launched 8 new high-ticket commercial inflatables and established inventory forecasting models to prepare for summer peaks.'
    },
  ];

  const challenges = [
    "Fragmented Catalog Architecture: Incorrect brand naming and loose parentage fractured the storefront.",
    "Unoptimized Product Content: Listings lacked basic search optimization terms and high-converting copy.",
    "Stagnant Inventory Compliance: Inventory bottlenecks caused by FBA limits and seasonal spikes.",
    "Reactive Sales Strategy: Lacked forecasting needed to manage high-ticket inflatable seasonality.",
    "Retail Hazard Risks: Frequent listing suppressions due to incorrect category attributes.",
    "Loose Parentage: Confusing variations leading to lower conversion rates in core categories."
  ];

  return (
    <div className="pt-24 min-h-screen bg-dark-bg text-white font-outfit overflow-hidden">
      {/* High-Impact Header */}
      <div className="bg-[#0b1b1c] text-white py-16 px-6 md:px-12 border-b border-white/5 relative overflow-hidden">
        {/* Abstract Background Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-primary-400 font-black uppercase tracking-widest text-xs mb-6 px-4 py-1.5 bg-primary-500/10 rounded-full border border-primary-500/20">
              <TrendingUp className="w-4 h-4" /> 132% Higher Revenue
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
              May<span className="heading-gradient">belline</span>
            </h1>
            <p className="text-2xl text-gray-400 leading-relaxed font-light max-w-2xl">
              Year-over-year growth achieved in June 2022 compared to June 2021 under <span className="text-white font-bold italic underline decoration-primary-500/30 underline-offset-8">Sellorix </span>.
            </p>

            <div className="flex flex-wrap items-center gap-8 mt-12 justify-center md:justify-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-500">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-gray-400">The Challenges</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-500">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-gray-400">Our Approach</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-500">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-gray-400">Impact</span>
              </div>
            </div>
          </div>

          {/* Floating Product Card */}
          <div className="relative group perspective-1000 hidden lg:block">
            <div className="w-72 bg-dark-surface p-5 rounded-[32px] shadow-2xl border border-white/10 transform transition-all duration-700 hover:rotate-y-12">
              <div className="absolute top-3 right-3 bg-white/10 px-3 py-1 rounded-full text-[10px] font-black text-white/80">
                4.9 ★★★★★
              </div>
              <img
                src={maybelline}
                alt="Tent Product"
                className="w-full h-56 object-cover rounded-2xl mb-6 shadow-lg"
              />
              <p className="text-[10px] font-black uppercase text-primary-500 mb-1 tracking-[0.2em]">High Ticket</p>
              <h4 className="text-sm font-bold leading-tight mb-4 text-white/90">Premium Eye Mascara and Lipsticks</h4>
              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <p className="text-xl font-black text-white">$149.00</p>
                <button className="bg-primary-500 text-white p-2 rounded-xl hover:bg-primary-600 transition-colors">
                  <ShoppingCart className="w-4 h-4" />
                </button>
              </div>
            </div>
            {/* Glow */}
            <div className="absolute -inset-10 bg-primary-500/10 rounded-full blur-[100px] -z-10"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col lg:flex-row gap-20">
        {/* Main Content (Left) */}
        <div className="flex-[2]">
          <section className="reveal-section mb-20">
            <h2 className="text-3xl font-bold text-white mb-8">Introduction</h2>
            <p className="text-lg leading-relaxed text-gray-400 max-w-3xl mb-6">
              Maybelline Australia operates as a high-volume market leader, requiring sophisticated multi-channel synchronization across the AU marketplace. Sellorix manages the intersection of viral trend-cycles and inventory-led advertising to maintain a dominant 'Share of Voice' while protecting net margins.
            </p>

          </section>

          {/* The Challenges */}
          <section className="reveal-section mb-24">
            <div className="flex items-center gap-6 mb-12">
              <h2 className="text-4xl font-black text-white uppercase tracking-tighter">The <br /> Challenges</h2>
              <div className="flex-1 h-[1px] bg-white/10"></div>
            </div>
            <div className="space-y-8">
              {challenges.map((challenge, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-500 font-black text-lg group-hover:bg-primary-500 group-hover:text-white transition-all duration-500">
                    {i + 1}
                  </div>
                  <div className="pt-1">
                    <p className="text-lg text-gray-400 font-medium leading-relaxed group-hover:text-gray-200 transition-colors">
                      <span className="font-black text-white block mb-0.5 uppercase tracking-wider text-[11px] text-primary-500">{challenge.split(':')[0]}</span>
                      {challenge.split(':')[1]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Our Approach */}
          <section className="reveal-section mb-24">
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
            <h2 className="text-4xl font-black text-white mb-10 inline-block border-b-4 border-primary-500 pb-2">Our Approach</h2>
            <div className="flex gap-4 mb-10 overflow-x-auto whitespace-nowrap scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-10 py-4 rounded-2xl text-xs font-black transition-all ${activeTab === tab.id ? 'bg-primary-500 text-white' : 'bg-white/5 text-gray-500 hover:bg-white/10'}`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            <div className="p-10 bg-dark-surface rounded-[40px] border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <PieChart className="w-40 h-40" />
              </div>
              <p className="text-2xl leading-relaxed text-gray-300 font-medium relative z-10 italic">
                "{tabs.find(t => t.id === activeTab).content}"
              </p>
              <div className="mt-12 flex flex-wrap gap-4 relative z-10">
                {['Inventory Forecasting', 'Catalog Hygiene', 'Full-Funnel Ads', 'Listing Transformation'].map(tag => (
                  <span key={tag} className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-[10px] uppercase font-black tracking-widest text-gray-500">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Info Sidebar */}
        <div className="flex-1">
          <div className="sticky top-32 space-y-8">
            <div className="p-10 rounded-[40px] bg-dark-surface border border-white/10 shadow-3xl">
              <div className="mb-12 text-center pb-8 border-b border-white/5">
                <h3 className="text-4xl font-black text-white tracking-tighter">Maybelline<span className="text-primary-500"></span>.com</h3>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-[10px] font-black uppercase text-primary-500 tracking-[0.3em] mb-4">Services Provided</p>
                  <ul className="space-y-4 pl-2">
                    <li className="flex items-center gap-3 text-xs font-bold text-gray-200"><Layout className="w-4 h-4 text-primary-500" /> Full Service</li>
                    <li className="flex items-center gap-3 text-xs font-bold text-gray-200"><Layers className="w-4 h-4 text-primary-500" /> Catalog Management</li>
                    <li className="flex items-center gap-3 text-xs font-bold text-gray-200"><Search className="w-4 h-4 text-primary-500" /> Listing Optimization</li>
                    <li className="flex items-center gap-3 text-xs font-bold text-gray-200"><ShoppingCart className="w-4 h-4 text-primary-500" /> Amazon PPC</li>
                  </ul>
                </div>

                <div className="pt-8 border-t border-white/5 grid grid-cols-2 gap-y-6">
                  <div>
                    <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Industry</p>
                    <p className="text-xs font-bold text-white">Beauty</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Channel</p>
                    <p className="text-xs font-bold text-white">Amazon & Walmart</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Partner Since</p>
                    <p className="text-xs font-bold text-white">Oct 2021</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Management</p>
                    <p className="text-xs font-bold text-white">Executive Strategy</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5">
                  <p className="text-[10px] font-black uppercase text-gray-500 mb-4 tracking-widest">Client Testimonial</p>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/5 italic text-sm text-gray-400 leading-relaxed font-medium">
                    "Sellorix corrected our technical errors and unified our visual identity, setting the stage for massive growth."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Data Graphics */}

      {/* Final Action CTA */}
      <section className="py-10 text-center bg-dark-bg relative overflow-hidden px-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none">
            Scale your <br className="hidden md:block" />
            <span className="heading-gradient underline decoration-primary-500/10 decoration-[12px] underline-offset-[20px]">Amazon Strategy</span>
          </h2>
          <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto font-medium">
            Join the elite circle of brands that have achieved sustained, profit-first growth on the world's largest marketplace.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-16 py-7 rounded-[24px] text-2xl font-black transition-all shadow-3xl shadow-primary-500/20 hover:scale-105 active:scale-95 group">
              <a href='https://www.linkedin.com/in/amitkushwaha12'>Start Your Audit</a>
              <ArrowRight className="inline-block ml-4 w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="bg-white text-dark-bg px-16 py-7 rounded-[24px] text-2xl font-black transition-all hover:scale-105 active:scale-95">
              <a href='https://calendly.com/amitkushwaha/new-meeting'>Talk to an Expert</a>
            </button>
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      {/* <section className="py-20 border-t border-white/5 bg-dark-surface/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[10px] font-black uppercase text-gray-600 tracking-[0.5em] mb-4">Official Project Case Study</p>
          <h6 className="text-lg font-black text-gray-500">© 2024 Sellorix Strategy Partners</h6>
        </div>
      </section> */}
    </div>
  );
};

export default TentAndTableCaseStudy;
