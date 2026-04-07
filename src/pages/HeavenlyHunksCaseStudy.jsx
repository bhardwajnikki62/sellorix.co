import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import linscool from '../assets/Linscool.png'
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
  Search,
  ShoppingCart as CartIcon,
  Activity,
  Maximize2,
  Lock
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const HeavenlyHunksCaseStudy = () => {
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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const tabs = [
    {
      id: 'Year 1',
      title: 'Year 1',
      content: '2020 Brand Setup and Security: In 2022, we stabilized the account by fixing catalog issues and preventing injuries from bad sellers. We unified the brand identity, ensuring a coherent brand transition to "Linscool" across all touchpoints.'
    },
    {
      id: 'Year 2',
      title: 'Year 2',
      content: 'Catalog Standardization: Merged duplicate listings to create absolute SKUs to eliminate customer confusion and consolidate ranking signals. Updated brand name across the listing to support cohesive branding global flavor snack on Amazon and increase brand authority. Created new merchant fulfilled listings to maintain availability during periods of stock fluctuation.'
    },
    {
      id: 'Year 3',
      title: 'Year 3',
      content: 'Brand Defense and Compliance: Removed unauthorized resellers from listings to reclaim control of the Buy Box and protect price integrity. Implemented brand-safety update design standard bits with the new brand identity.'
    },
  ];

  const challenges = [
    "Fragmented Brand Identity: Inconsistent naming and look across marketing platforms confused buyers on Amazon.",
    "Persistent-Hijacker Activity: Unauthorized sellers seized listings, stealing the Buy Box and degrading brand integrity.",
    "Seasonal Inventory Variation: Logistics hurdles disrupted healthy snacks availability on Amazon year-round.",
    "Stagnant Creative Conversion: Generic product images failed to capture user interest in show-and-tell product features.",
    "Restrictive Storage Limits: Resorted storage capacity hindered increased membership middle-sales-boost service.",
    "Inefficient Ad Spend: Heavy, defensive spending limited new customer acquisition and stalled market-share expansion."
  ];

  return (
    <div className="pt-24 min-h-screen bg-dark-bg text-white font-outfit overflow-hidden">
      {/* High-Impact Header */}
      <div className="bg-[#1c150b] text-white py-16 px-6 md:px-12 border-b border-white/5 relative overflow-hidden">
        {/* Abstract Background Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-primary-400 font-black uppercase tracking-widest text-xs mb-6 px-4 py-1.5 bg-primary-500/10 rounded-full border border-primary-500/20 animate-fade-in">
              <TrendingUp className="w-4 h-4" /> 3.8x LTV CUSTOMER ACQUISITION EFFICIENCY
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
              Lins<span className="heading-gradient"> cool</span>
            </h1>
            <p className="text-2xl text-gray-400 leading-relaxed font-light max-w-2xl">
              Notable growth compared to the same month in 2022 after <span className="text-white font-bold italic underline decoration-primary-500/30 underline-offset-8">Sellorix management</span>.
            </p>

            <div className="flex flex-wrap items-center gap-8 mt-12 justify-center md:justify-start">
              <button onClick={() => scrollToSection('challenges')} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="stat-card w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-500">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-gray-400">The Challenges</span>
              </button>
              <button onClick={() => scrollToSection('approach')} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="stat-card w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-500">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-gray-400">Our Approach</span>
              </button>
              <button onClick={() => scrollToSection('impact')} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="stat-card w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-500">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-gray-400">Impact</span>
              </button>
            </div>
          </div>

          {/* Floating Product Card */}
          <div className="relative group perspective-1000 hidden lg:block stat-card">
            <div className="w-72 bg-dark-surface p-5 rounded-[32px] shadow-2xl border border-white/10 transform transition-all duration-700 hover:rotate-y-12">
              <div className="absolute top-3 right-3 bg-white/10 px-3 py-1 rounded-full text-[10px] font-black text-white/80">
                4.8 ★★★★★
              </div>
              <img
                src={linscool}
                alt="Heavenly Hunks Product"
                className="w-full h-56 object-cover rounded-2xl mb-6 shadow-lg"
              />
              <p className="text-[10px] font-black uppercase text-primary-500 mb-1 tracking-[0.2em]">Linscool</p>
              <h4 className="text-sm font-bold leading-tight mb-4 text-white/90">Pilates Ring Set for Women</h4>
              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <p className="text-xl font-black text-white">$24.99</p>
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
          <section className="reveal-section mb-20" id="introduction">
            <h2 className="text-3xl font-bold text-white mb-8">Introduction</h2>
            <p className="text-lg leading-relaxed text-gray-400 max-w-3xl mb-6">
              Lionscool is a premium fitness disruptor utilizing industrial-grade fiberglass technology to dominate the home-studio market in North America and Europe.
            </p>

          </section>

          {/* The Challenges */}
          <section className="reveal-section mb-24" id="challenges">
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
          <section className="reveal-section mb-24" id="approach">
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
            <div className="p-10 bg-dark-surface rounded-[40px] border border-white/10 relative overflow-hidden min-h-[250px]">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <PieChart className="w-40 h-40" />
              </div>
              <p className="text-2xl leading-relaxed text-gray-300 font-medium relative z-10 italic">
                "{tabs.find(t => t.id === activeTab).content}"
              </p>
              <div className="mt-12 flex flex-wrap gap-4 relative z-10">
                {['Brand Setup', 'Catalog Hygiene', 'Hijacker Removal', 'Creative Refinement', 'Buy Box Recovery'].map(tag => (
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
                <h3 className="text-4xl font-black text-white tracking-tighter">Lins<span className="text-primary-500"> cool</span></h3>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-[10px] font-black uppercase text-primary-500 tracking-[0.3em] mb-4">Services Provided</p>
                  <ul className="space-y-4 pl-2">
                    <li className="flex items-center gap-3 text-xs font-bold text-gray-200"><Layout className="w-4 h-4 text-primary-500" /> Full Service</li>
                    <li className="flex items-center gap-3 text-xs font-bold text-gray-200"><Layers className="w-4 h-4 text-primary-500" /> Catalog Management</li>
                    <li className="flex items-center gap-3 text-xs font-bold text-gray-200"><ShieldCheck className="w-4 h-4 text-primary-500" /> Listing Brand Protection</li>
                    <li className="flex items-center gap-3 text-xs font-bold text-gray-200"><ShoppingCart className="w-4 h-4 text-primary-500" /> Amazon PPC & SEO</li>
                  </ul>
                </div>

                <div className="pt-8 border-t border-white/5 grid grid-cols-2 gap-y-6">
                  <div>
                    <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Industry</p>
                    <p className="text-xs font-bold text-white">sports & Outdoors</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Channel</p>
                    <p className="text-xs font-bold text-white">Amazon</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Partner Since</p>
                    <p className="text-xs font-bold text-white">Jun 2022</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-gray-500 mb-1">SKU Managed</p>
                    <p className="text-xs font-bold text-white">2+</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5">
                  <p className="text-[10px] font-black uppercase text-gray-500 mb-4 tracking-widest">Growth Period</p>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/5 italic text-sm text-gray-400 leading-relaxed font-medium">
                    "Sellorix stabilized our account, reclaimed our Buy Box, and unified our brand identity for massive scaling."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Data Graphics */}
      <section className="reveal-section py-32 bg-dark-surface/50 border-y border-white/5" id="impact">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">The Impact</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Sustained performance metrics demonstrating the efficacy of the Sellorix partnership.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Chart 1: Revenue increase */}
            <div className="p-10 rounded-[40px] bg-dark-bg border border-white/10">
              <h3 className="text-2xl font-black text-white mb-4">60% Increase in Monthly Sales</h3>
              <p className="text-gray-500 mb-12">Year-over-year revenue comparison scaling from $150k to $400k.</p>

              <div className="h-80 flex items-end justify-around gap-12 border-b border-white/10 pb-4 relative">
                {/* Grid Lines */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex flex-col justify-between">
                  {[1, 2, 3, 4].map(i => <div key={i} className="w-full h-[1px] bg-white/5"></div>)}
                </div>

                {[
                  { label: '2021 (Before)', val: '$400,000', height: '62%', color: 'bg-gray-700' },
                  { label: '2022 (Partnered)', val: '$650,000', height: '100%', color: 'bg-primary-500' },
                ].map((item, i) => (
                  <div key={i} className="flex-1 max-w-[200px] flex flex-col justify-end items-center group relative z-10">
                    <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-dark-bg px-4 py-2 rounded-xl text-xs font-black shadow-2xl">
                      {item.val}
                    </div>
                    <div
                      className={`w-full ${item.color} rounded-t-2xl bar-grow shadow-2xl group-hover:brightness-125`}
                      data-height={item.height}
                      style={{ height: '0%' }}
                    ></div>
                    <p className="mt-8 font-black text-gray-500 uppercase tracking-widest text-[10px] text-center">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Advertising Efficiency */}
            <div className="p-10 rounded-[40px] bg-dark-bg border border-white/10 flex flex-col justify-center">
              <h3 className="text-2xl font-black text-white mb-4">Advertising Performance</h3>
              <p className="text-gray-500 mb-12">High ad performance with optimized spend and steady metrics.</p>

              <div className="flex flex-col sm:flex-row gap-8 items-center justify-around">
                <div className="relative w-48 h-48 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-4 border-white/5"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-red-500 border-t-transparent -rotate-45"></div>
                  <div className="text-center">
                    <p className="text-4xl font-black text-white">-20%</p>
                    <p className="text-[10px] font-black uppercase text-gray-500 tracking-widest">ACOS Reduction</p>
                  </div>
                </div>

                <div className="relative w-48 h-48 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-4 border-white/5"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-green-500 border-b-transparent rotate-45"></div>
                  <div className="text-center">
                    <p className="text-4xl font-black text-white">+23%</p>
                    <p className="text-[10px] font-black uppercase text-gray-500 tracking-widest">ROAS Increase</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                  <Activity className="w-5 h-5 text-primary-500 mx-auto mb-2" />
                  <p className="text-xs font-bold text-white">Enhanced Visibility</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                  <Target className="w-5 h-5 text-primary-500 mx-auto mb-2" />
                  <p className="text-xs font-bold text-white">Targeted Reach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Action CTA */}
      <section className="py-40 text-center bg-dark-bg relative overflow-hidden px-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none">
            Scale your <br className="hidden md:block" />
            <span className="heading-gradient underline decoration-primary-500/10 decoration-[12px] underline-offset-[20px]">Amazon Growth</span>
          </h2>
          <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto font-medium">
            Ready to reclaim your brand's potential and achieve data-driven results on Amazon?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/services/amazon-audit" className="bg-primary-500 hover:bg-primary-600 text-white px-16 py-7 rounded-[24px] text-2xl font-black transition-all shadow-3xl shadow-primary-500/20 hover:scale-105 active:scale-95 group">
              <a href="https://www.linkedin.com/in/amitkushwaha12">Start Your Audit</a>
              <ArrowRight className="inline-block ml-4 w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link to="/contact" className="bg-white text-dark-bg px-16 py-7 rounded-[24px] text-2xl font-black transition-all hover:scale-105 active:scale-95">
              <a href="https://calendly.com/amitkushwaha/new-meeting">Talk to an Expert</a>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Branding */}

    </div>
  );
};

export default HeavenlyHunksCaseStudy;
