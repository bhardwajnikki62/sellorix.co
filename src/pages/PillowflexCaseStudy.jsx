import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Newleaf from '../assets/new_leaf1.png'
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
  Activity,
  Maximize2,
  Lock,
  ArrowUpRight
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const NewleafCaseStudy = () => {
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
      content: '2022 - Foundational Account Restoration: Sellorix began account recovery by fixing catalog errors, improving brand consistency, and working with account health to set a strong foundation for growth. Overhauled SEO and listing rank. Implemented initial Design strategy for A+ content.'
    },
    {
      id: 'Year 2',
      title: 'Year 2',
      content: '2023 - Scaling & Optimization: Focused on high-impact SEO, PPC efficiency, and refined listing visuals. Established consistent brand messaging in the store and across all listing variations.'
    },
    {
      id: 'Year 3',
      title: 'Year 3',
      content: '2024 - Marketplace Dominance: Achieved significant growth in average order value and ROAS through full-funnel advertising management and advanced inventory forecasting.'
    },
  ];

  const challenges = [
    "Inconsistent Listing Quality: Listings suffered from incomplete or inaccurate product information, leading to weak organic search visibility.",
    "Untapped Advertising Potential: An inactive advertising strategy led to stale results, resulting in stalled sales growth.",
    "No Structured Launch Protocol: New product launch lacked a repeatability process, causing missed opportunities in early velocity.",
    "Stranded Inventory Issues: Inventory was frequently disrupted or delayed in fulfillment centers, leading to reduced stock.",
    "Uncoordinated Ad Campaigns: Advertising performance stayed flat with poor performance, reducing overall campaign effectiveness.",
    "Limited Buy Box Control: Newleaf struggled to maintain Buy Box share on key SKUs.",
    "Late Shipments and Account Health Concerns: Chronic late shipment issues caused increased account health risks.",
    "Oversock and High Storage Fees: Excessive stock led to high storage fees, pressuring profit margins.",
    "Product ISellorixe and Content Inefficiencies: Amazon rejection of iSellorixes weakened listing conversion and shopper trust."
  ];

  return (
    <div className="pt-24 min-h-screen bg-dark-bg text-white font-outfit overflow-hidden">
      {/* High-Impact Header */}
      <div className="bg-[#121212] text-white py-16 px-6 md:px-12 border-b border-white/5 relative overflow-hidden">
        {/* Abstract Background Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-primary-400 font-black uppercase tracking-widest text-xs mb-6 px-4 py-1.5 bg-primary-500/10 rounded-full border border-primary-500/20 animate-fade-in">
              <TrendingUp className="w-4 h-4" /> 50% Sales Increase
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
              New<span className="heading-gradient"> Leaf</span>
            </h1>
            <p className="text-2xl text-gray-400 leading-relaxed font-light max-w-2xl">
              Total sales volume in 2023 showed a notable rise from the previous year, reflecting <span className="text-white font-bold italic underline decoration-primary-500/30 underline-offset-8">impactful growth</span>.
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
                4.7 ★★★★★
              </div>
              <img
                src={Newleaf}
                alt="Newleaf Product"
                className="w-full h-56 object-cover rounded-2xl mb-6 shadow-lg"
              />
              <p className="text-[10px] font-black uppercase text-primary-500 mb-1 tracking-[0.2em]">Home Decor</p>
              <h4 className="text-sm font-bold leading-tight mb-4 text-white/90">Liver oil softgels</h4>
              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <p className="text-xl font-black text-white">$34.95</p>
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
              New Leaf is a premier UK-based wellness brand specializing in high-strength, GMP-certified nutritional supplements tailored for the rigorous European market. By combining Grade-A ingredient sourcing with localized German market intelligence, Sellorix has positioned New Leaf as a dominant force in clean, effective, and ethically-produced health solutions on Amazon.de.
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
                {['Account Restoration', 'SEO Audit', 'A+ Content Strategy', 'Amazon Store Revamp', 'Inventory Strategy'].map(tag => (
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
                <h3 className="text-4xl font-black text-white tracking-tighter underline decoration-primary-500/30">Newleaf</h3>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-[10px] font-black uppercase text-primary-500 tracking-[0.3em] mb-4">Services Provided</p>
                  <ul className="space-y-4 pl-2">
                    <li className="flex items-center gap-3 text-xs font-bold text-gray-200"><Layout className="w-4 h-4 text-primary-500" /> Full Service</li>
                    <li className="flex items-center gap-3 text-xs font-bold text-gray-200"><Layers className="w-4 h-4 text-primary-500" /> Listing Optimization</li>
                    <li className="flex items-center gap-3 text-xs font-bold text-gray-200"><ShieldCheck className="w-4 h-4 text-primary-500" /> Brand Protection</li>
                    <li className="flex items-center gap-3 text-xs font-bold text-gray-200"><ShoppingCart className="w-4 h-4 text-primary-500" /> Amazon PPC/SEO</li>
                  </ul>
                </div>

                <div className="pt-8 border-t border-white/5 grid grid-cols-2 gap-y-6">
                  <div>
                    <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Industry</p>
                    <p className="text-xs font-bold text-white">Health & Personal Care</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Channel</p>
                    <p className="text-xs font-bold text-white">Amazon</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Partner Since</p>
                    <p className="text-xs font-bold text-white">Feb 2022</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Yearly Sales</p>
                    <p className="text-xs font-bold text-white">$1M-$5M</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5">
                  <p className="text-[10px] font-black uppercase text-gray-500 mb-4 tracking-widest">Growth Metric</p>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/5 italic text-sm text-gray-400 leading-relaxed font-medium">
                    "Sellorix corrected catalog errors and implemented high-impact SEO, driving a 50% increase in sales volume."
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
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Remarkable jump in sales volume and profitability post-Sellorix management.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Chart 1: Revenue increase */}
            <div className="p-10 rounded-[40px] bg-dark-bg border border-white/10">
              <h3 className="text-2xl font-black text-white mb-4">Newleaf Amazon Sales</h3>
              <p className="text-gray-500 mb-12">Total sales volume in 2023 showed a 50% increase year-on-year.</p>

              <div className="h-80 flex items-end justify-around gap-6 border-b border-white/10 pb-4 relative">
                {/* Grid Lines */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex flex-col justify-between">
                  {[1, 2, 3, 4].map(i => <div key={i} className="w-full h-[1px] bg-white/5"></div>)}
                </div>

                {[
                  { label: '2021', val: '$850k', height: '40%', color: 'bg-gray-700' },
                  { label: '2022', val: '$1.4M', height: '65%', color: 'bg-primary-500/50' },
                  { label: '2023', val: '$2.1M', height: '100%', color: 'bg-primary-500' },
                  { label: '2024 (Proj)', val: '$2.3M', height: '110%', color: 'bg-primary-400' },
                ].map((item, i) => (
                  <div key={i} className="flex-1 max-w-[150px] flex flex-col justify-end items-center group relative z-10">
                    <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-dark-bg px-4 py-2 rounded-xl text-xs font-black shadow-2xl">
                      {item.val}
                    </div>
                    <div
                      className={`w-full ${item.color} rounded-t-xl bar-grow shadow-2xl group-hover:brightness-125`}
                      data-height={item.height}
                      style={{ height: '0%' }}
                    ></div>
                    <p className="mt-8 font-black text-gray-500 uppercase tracking-widest text-[10px] text-center">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ROAS & Order Value */}
            <div className="p-10 rounded-[40px] bg-dark-bg border border-white/10 flex flex-col justify-center">
              <h3 className="text-2xl font-black text-white mb-4">Strong Advertising ROAS</h3>
              <p className="text-gray-500 mb-12">Focused optimization led to exceptional return on ad spend and higher order value.</p>

              <div className="flex flex-col sm:flex-row gap-8 items-center justify-around">
                <div className="relative w-48 h-48 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-4 border-white/5"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-green-500 border-t-transparent -rotate-45"></div>
                  <div className="text-center">
                    <p className="text-4xl font-black text-white">9:1</p>
                    <p className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Return on Ad Spend</p>
                  </div>
                </div>

                <div className="relative w-48 h-48 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-4 border-white/5"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-primary-500 border-b-transparent rotate-45"></div>
                  <div className="text-center">
                    <p className="text-4xl font-black text-white">+25%</p>
                    <p className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Growth in Avg Order Value</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 bg-white/5 p-6 rounded-3xl border border-white/10 border-dashed">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Exceptional ROAS Growth</p>
                    <p className="text-xs text-gray-500">Sellorix's strategy focused on Newleaf's bestsellers to maximize return and scale order value.</p>
                  </div>
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
            Ready to <br className="hidden md:block" />
            <span className="heading-gradient underline decoration-primary-500/10 decoration-[12px] underline-offset-[20px]">Scale Profitably?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto font-medium">
            Join brands like Newleaf that have achieved sustained, data-driven growth with My Amazon Guy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/services/amazon-audit" className="bg-primary-500 hover:bg-primary-600 text-white px-16 py-7 rounded-[24px] text-2xl font-black transition-all shadow-3xl shadow-primary-500/20 hover:scale-105 active:scale-95 group">
              <a href="https://calendly.com/amitkushwaha/new-meeting	">Start Your Audit</a>
              <ArrowRight className="inline-block ml-4 w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link to="/contact" className="bg-white text-dark-bg px-16 py-7 rounded-[24px] text-2xl font-black transition-all hover:scale-105 active:scale-95">
              <a href="https://calendly.com/amitkushwaha/new-meeting	">Talk to an Expert</a>
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
};

export default NewleafCaseStudy;
