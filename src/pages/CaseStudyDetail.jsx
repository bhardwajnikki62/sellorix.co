import React, { useEffect, useState } from 'react';
import {
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Info,
  BarChart3,
  PieChart,
  Target,
  Zap,
  Globe,
  ShoppingCart,
  Users,
  Award
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import windmilBaby from '../assets/windmil_baby.png';

gsap.registerPlugin(ScrollTrigger);

const CaseStudyDetail = () => {
  const [activeTab, setActiveTab] = useState('Phase 1');

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

    // Chart Animations
    gsap.utils.toArray('.bar-grow').forEach(bar => {
      gsap.fromTo(bar,
        { height: "0%" },
        {
          height: bar.getAttribute('data-height'),
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 90%"
          }
        }
      );
    });
  }, []);

  const tabs = [
    {
      id: 'Phase 1',
      title: 'Phase 1',
      content: 'Late 2021: Foundational SEO & Baseline Establishment. Our first work in late 2021 rested on establishing a baseline and building immediate catalog visibility. We began the building out new product listings, optimizing brand store content for products, and conducting rigorous market analysis to prepare for the five-year plan.'
    },
    {
      id: 'Phase 2',
      title: 'Phase 2',
      content: 'Early 2022: Growth Acceleration. We expanded into new markets and scaled PPC operations. Significant investment was made in A+ content and Brand Story integration to increase conversion rates by 40% across the core product line.'
    },
    {
      id: 'Year 1',
      title: 'Year 1',
      content: '2022 Performance: Sustained Scale. By the end of Year 1, we achieved a total revenue growth of 146% compared to the 2020 average. This was driven by a complete overhaul of the advertising strategy and inventory management protocols.'
    },
    {
      id: 'Year 2',
      title: 'Year 2',
      content: '2023 Strategy: Market Dominance. Focusing on cross-channel integration and Walmart expansion. We successfully launched 12 new SKUs while maintaining a healthy 24%+ profit margin.'
    },
  ];

  const challenges = [
    "Inconsistent Pricing/Audit: Losing revenue from unauthorized sellers and listing errors.",
    "Retail Hybrid/1P-AMP issues: Complexity in managing first-party accounts alongside third-party sellers.",
    "Bypassed Brand Alignment: Confusion between physical store branding and digital presence.",
    "Limited Profitability: High ACOS and low organic visibility killing margins.",
    "High Return Rates: Inaccurate listings causing customer dissatisfaction and penalties.",
    "Missing Multi-Store Presence: Reliance solely on one channel without diversification.",
    "Weak Amazon Storefront: Poorly designed store pages leading to high drop-offs.",
    "Inefficient Advertising Spend: Wasted budget on broad terms with zero conversion intent.",
    "Lack of Proactive Management: Reactive troubleshooting rather than strategic growth mapping.",
    "Listing Errors/Retail Hazard: Frequent delistings due to compliance oversights.",
    "Underutilized Data Insights: Missing out on key customer behavior trends."
  ];

  return (
    <div className="pt-24 min-h-screen bg-dark-bg text-white font-outfit overflow-hidden">
      {/* Premium Dark Header Bar */}
      <div className="bg-[#0b1b1c] text-white py-12 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <p className="text-primary-400 font-bold uppercase tracking-widest text-sm mb-4">Original Sellorix Case Study</p>
            <h1 className="text-5xl md:text-7xl font-bold flex items-center justify-center md:justify-start gap-4 mb-6 leading-tight">
              <span className="text-[#a8cf45]"><TrendingUp className="w-12 h-12 md:w-16 md:h-16" /></span>
              142% QUARTERLY REVENUE LIFT
            </h1>
            <p className="text-2xl text-gray-400 leading-relaxed font-light max-w-2xl">
              Sustained revenue increase since partnering with <span className="text-white font-bold italic">Sellorix</span>.
            </p>
            <div className="flex flex-wrap items-center gap-6 mt-8 justify-center md:justify-start text-sm">
              <span className="flex items-center gap-2 text-white/80 font-bold"><CheckCircle2 className="text-[#a8cf45] w-5 h-5" /> The Challenges</span>
              <span className="flex items-center gap-2 text-white/80 font-bold"><CheckCircle2 className="text-[#a8cf45] w-5 h-5" /> Our Approach</span>
              <span className="flex items-center gap-2 text-white/80 font-bold"><CheckCircle2 className="text-[#a8cf45] w-5 h-5" /> Impact</span>
            </div>
          </div>

          {/* Floating Product Card */}
          <div className="relative group perspective-1000 hidden lg:block">
            <div className="w-64 bg-dark-surface p-4 rounded-2xl shadow-2xl border border-white/10 transform group-hover:rotate-y-12 transition-transform duration-500">
              <div className="absolute top-2 right-2 flex gap-1 items-center bg-white/5 px-2 py-1 rounded text-[10px] font-bold text-gray-500">
                <span className="text-primary-500 font-bold">4.8</span> ★
              </div>
              <img
                src={windmilBaby}
                alt="Product"
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <p className="text-[10px] font-black uppercase text-gray-500 mb-1 tracking-widest">Windmill Baby</p>
              <h4 className="text-xs font-bold leading-tight mb-2 text-white/90">Natural Floor Cleaners</h4>
              <div className="flex items-center justify-between">
                <p className="text-lg font-black text-white">$45.00</p>
                <div className="w-6 h-6 rounded-full bg-[#f95b07] text-white flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <ShoppingCart className="w-3 h-3" />
                </div>
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-500/10 w-96 h-96 rounded-full blur-[80px]"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col lg:flex-row gap-16">
        {/* Main Content (Left) */}
        <div className="flex-[2]">
          <section className="reveal-section mb-20 text-lg leading-relaxed text-gray-400">
            <h2 className="text-3xl font-bold text-white mb-6">Introduction</h2>
            <p>
              Windmill Baby is India’s first USDA-certified brand specializing in non-toxic, plant-based cleaning essentials for infants. The brand focuses on "Clean, Conscious Care," providing allergen-free laundry and home solutions that are safe for both sensitive skin and the environment.
            </p>
          </section>

          {/* The Challenges */}
          <section className="reveal-section mb-20">
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
            <h2 className="text-4xl font-black text-white mb-10 border-b-4 border-primary-500 inline-block pb-2">The Challenges</h2>
            <div className="space-y-6">
              {challenges.map((challenge, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="w-10 h-10 shrink-0 rounded-full border-2 border-[#a8cf45] flex items-center justify-center text-[#a8cf45] font-black group-hover:bg-[#a8cf45] group-hover:text-white transition-all">
                    {i + 1}
                  </div>
                  <p className="pt-2 text-gray-400 font-medium leading-relaxed">
                    <span className="font-black text-white">{challenge.split(':')[0]}:</span> {challenge.split(':')[1]}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Our Approach */}
          <section className="reveal-section mb-20">
            <h2 className="text-4xl font-black text-white mb-10 border-b-4 border-primary-500 inline-block pb-2">Our Approach</h2>
            <div className="flex border-b border-white/5 mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-4 text-sm font-black transition-all ${activeTab === tab.id ? 'border-b-4 border-primary-500 text-primary-400' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            <div className="p-8 bg-dark-surface rounded-3xl border border-white/5 min-h-[150px]">
              <p className="text-lg leading-relaxed text-gray-300">{tabs.find(t => t.id === activeTab).content}</p>
            </div>
          </section>
        </div>

        {/* Sidebar (Right) */}
        <div className="flex-1">
          <div className="sticky top-32 p-8 rounded-3xl bg-dark-surface border border-white/5 flex flex-col gap-8 shadow-2xl">
            <div className="text-center pb-8 border-b border-white/5">
              <h3 className="text-5xl font-black text-[#00aaff] tracking-tighter">Windmill Baby</h3>
            </div>

            <div className="space-y-6 text-sm">
              <div>
                <p className="flex items-center gap-2 font-black text-white mb-3"><Zap className="w-4 h-4 text-primary-500" /> Services provided</p>
                <div className="grid grid-cols-1 gap-y-2 text-gray-400 pl-6">
                  <span className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#a8cf45]" /> Full Service Mgmt</span>
                  <span className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#a8cf45]" /> Advertising Ops</span>
                  <span className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#a8cf45]" /> Growth Strategy</span>
                  <span className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#a8cf45]" /> Brand Protection</span>
                  <span className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#a8cf45]" /> Creative Design</span>
                </div>
              </div>

              <div className="border-t border-white/5 pt-6">
                <p className="flex items-center gap-2 font-black text-white mb-2"><Globe className="w-4 h-4 text-primary-400" /> Website</p>
                <a href="#" target="_blank" className="text-gray-500 pl-6 hover:text-primary-400 transition-colors">windmill baby.com</a>
              </div>

              <div>
                <p className="flex items-center gap-2 font-black text-white mb-2"><ShoppingCart className="w-4 h-4 text-primary-400" /> Channels</p>
                <p className="text-gray-500 pl-6">Amazon </p>
              </div>

              <div>
                <p className="flex items-center gap-2 font-black text-white mb-2"><Target className="w-4 h-4 text-primary-400" /> Industry</p>
                <p className="text-gray-500 pl-6">Health & Personal care</p>
              </div>

              <div>
                <p className="flex items-center gap-2 font-black text-white mb-2"><BarChart3 className="w-4 h-4 text-primary-400" /> Gross Sales</p>
                <p className="text-gray-500 pl-6">$1M - $5M</p>
              </div>

              <div className="p-5 bg-primary-900/20 rounded-2xl border border-primary-500/20">
                <p className="font-black text-primary-400 flex items-center gap-2"><Award className="w-4 h-4" /> Partner since 2021</p>
                <p className="text-[10px] text-primary-600 uppercase tracking-widest mt-1 font-bold">Continuous Growth Phase</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <section className="bg-dark-surface/50 py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-20 text-center md:text-left">
            Impact <span className="heading-gradient">High-Level Data</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Chart 1: Sales Growth */}
            <div className="reveal-section">
              <h3 className="text-2xl font-black text-white mb-4">Over $12.5 million increase in annual sales</h3>
              <p className="text-gray-400 mb-12">Total gross revenue grew from $500k to $0.9M in four years under Sellorix management.</p>

              <div className="h-80 flex items-end justify-between gap-4 border-l-2 border-b-2 border-white/10 pb-2 pl-4">
                {[
                  { year: '2019', val: '$0.51M', height: '10%', color: 'bg-primary-300' },
                  { year: '2020', val: '$4.31M', height: '35%', color: 'bg-primary-400' },
                  { year: '2021', val: '$8.01M', height: '65%', color: 'bg-primary-500' },
                  { year: '2022', val: '$12.5M', height: '100%', color: 'bg-primary-600' },
                ].map((item, i) => (
                  <div key={i} className="flex-1 h-full flex flex-col justify-end items-center group relative">
                    <div
                      className={`w-full ${item.color} rounded-t-lg relative bar-grow transition-all duration-300 group-hover:brightness-125`}
                      data-height={item.height}
                      style={{ height: '0%' }}
                    >
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all bg-white text-dark-bg px-3 py-1.5 rounded-lg text-xs font-black shadow-2xl z-20 pointer-events-none">
                        {item.val}
                      </div>
                    </div>
                    <p className="mt-8 font-black text-gray-500 text-xs tracking-widest absolute -bottom-10">{item.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Chart 2: Ad Spending */}
            <div className="reveal-section">
              <h3 className="text-2xl font-black text-white mb-4">Grow Ad Sales from $1M to $5M in four years</h3>
              <p className="text-gray-400 mb-12">Yearly ad spend compared to ad revenue demonstrates massive ROI efficiency improvements.</p>

              <div className="h-80 flex items-end justify-between gap-8 border-l-2 border-b-2 border-white/10 pb-2 pl-4">
                {[
                  { year: '2019', revenue: '$190k', revenueH: '5%', spend: '$50k', spendH: '2%' },
                  { year: '2020', revenue: '$1.8M', revenueH: '25%', spend: '$400k', spendH: '6%' },
                  { year: '2021', revenue: '$4.7M', revenueH: '60%', spend: '$1.1M', spendH: '15%' },
                  { year: '2022', revenue: '$7.9M', revenueH: '100%', spend: '$1.8M', spendH: '25%' },
                ].map((item, i) => (
                  <div key={i} className="flex-1 h-full flex flex-col justify-end items-center group relative">
                    <div className="flex items-end gap-1 w-full h-full">
                      <div
                        className="flex-1 bg-green-500 rounded-t-sm bar-grow transition-all duration-300 group-hover:brightness-125"
                        data-height={item.revenueH}
                        style={{ height: '0%' }}
                      ></div>
                      <div
                        className="flex-1 bg-yellow-400 rounded-t-sm bar-grow transition-all duration-300 group-hover:brightness-125"
                        data-height={item.spendH}
                        style={{ height: '0%' }}
                      ></div>
                    </div>
                    <p className="mt-8 font-black text-gray-500 text-xs tracking-widest absolute -bottom-10">{item.year}</p>
                  </div>
                ))}
              </div>
              <div className="mt-20 flex gap-6 text-[10px] font-black uppercase tracking-widest">
                <div className="flex items-center gap-2"><span className="w-3 h-3 bg-green-500 rounded-sm"></span> Ad Revenue</div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 bg-yellow-400 rounded-sm"></span> Ad Spend</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-dark-bg px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none">
            Ready to scale your <br className="hidden md:block" />
            <span className="heading-gradient underline decoration-primary-500/20 decoration-8 underline-offset-[20px]">Amazon Profit?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-14 max-w-2xl mx-auto font-medium leading-relaxed">
            Join the 40+ brands that have scaled their e-commerce presence with Sellorix precision.
          </p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-16 py-7 rounded-2xl text-2xl font-black transition-all shadow-2xl shadow-primary-500/30 hover:scale-105 active:scale-95 group">
            <a href="https://www.linkedin.com/in/amitkushwaha12">Get Your Growth Plan Today</a>
            <ArrowRight className="inline-block ml-3 w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>

      {/* Mini Form Section */}
      {/* <section className="py-24 border-t border-white/5 px-6 bg-dark-surface/30">
        <div className="max-w-2xl mx-auto text-center">
          <h5 className="font-bold text-white mb-8 tracking-wide uppercase text-sm">Join Our Success Network</h5>
          <div className="flex flex-col sm:flex-row gap-3">
            <input type="text" placeholder="First Name" className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all text-white" />
            <input type="email" placeholder="Email Address" className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all text-white" />
            <button className="bg-white text-dark-bg px-10 py-4 rounded-xl font-black hover:bg-primary-400 transition-colors uppercase text-sm">Subscribe</button>
          </div>
          <p className="text-[10px] text-gray-600 mt-6 uppercase tracking-widest font-bold">No spam. Only high-value Amazon insights.</p>
        </div>
      </section> */}
    </div>
  );
};

export default CaseStudyDetail;
