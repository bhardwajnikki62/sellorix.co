import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ppc1 from '../assets/ppc_service_1st.webp';
import ppcAds from '../assets/ppc_service_2nd.webp';
import brandsAds from '../assets/Brands_ads.png';
import displayAds from '../assets/display_ads.jpeg';
import {
  ArrowRight, Target, DollarSign, Search, Database, FlaskConical, BarChart3,
  Rocket, TrendingUp, CheckCircle2, Image as ImageIcon, Video, ShoppingBag, Eye,
  Star, PlayCircle, ChevronDown, ChevronRight, Award, MousePointer2, Zap, ShieldCheck, Download
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const toolkitFeatures = [
  { icon: Target, title: 'Targeting research', desc: 'Uncover profitable keywords and competitor ASINs to expand your market reach.', color: 'text-yellow-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
  { icon: DollarSign, title: 'Daily bid & budget', desc: 'Continuous monitoring and optimization of your bids and budget to reduce ACoS.', color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20' },
  { icon: Search, title: 'Search terms', desc: 'We analyze search terms to identify new opportunities and negative keywords.', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
  { icon: Database, title: 'Harvesting', desc: 'Automatic extraction of converting search terms into exact match campaigns.', color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' },
  { icon: FlaskConical, title: 'A/B testing', desc: 'We rigorously test ad copy, formats, and placements to find the winning formula.', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
  { icon: BarChart3, title: 'Reporting', desc: 'Transparent, data-rich reports that give you actionable insights into your performance.', color: 'text-teal-400', bg: 'bg-teal-500/10', border: 'border-teal-500/20' },
];

const strategySteps = [
  {
    icon: Rocket, title: 'Launch',
    desc: 'Aggressive discovery campaigns to establish baseline metrics and index your products.',
    color: 'text-orange-400', bg: 'from-orange-500/20'
  },
  {
    icon: TrendingUp, title: 'Growth',
    desc: 'Scaling winning keywords and optimizing bids while maintaining a target ACoS.',
    color: 'text-yellow-400', bg: 'from-yellow-500/20'
  },
  {
    icon: DollarSign, title: 'Profitability',
    desc: 'Shifting budget towards high-converting exact match keywords to maximize net margin.',
    color: 'text-green-400', bg: 'from-green-500/20'
  }
];

const pillars = [
  { title: 'Pillar 1: Data-Driven Optimization', desc: 'We rely on hard data, not guesswork, to make bid and targeting adjustments.' },
  { title: 'Pillar 2: Creative Excellence', desc: 'We utilize high-converting copy and custom imagery to make your ads stand out.' },
  { title: 'Pillar 3: Strategic Expansion', desc: 'We continually test new ad types (Sponsored Brands, Display, Video) to capture more market share.' }
];

const faqs = [
  { q: "Why choose you over a large, well-known agency?", a: "You get direct access to a specialist with 4+ years of hands-on experience, not a junior account manager. This means faster communication and a strategy tailored specifically to your brand’s unique goals." },
  { q: "How do you ensure my profit margins don't disappear into ad spend?", a: "We prioritize your profit over vanity metrics like ROAS or ACOS. Our goal is to grow your organic ranking so your business becomes more profitable and less dependent on paid ads." },
  { q: "Why should I trust you with my brand's presence in the USA/UK/EU/Canada/Australia/Mexico/India markets?", a: "We have managed brands across these specific global marketplaces and understand the local search nuances. We ensure your listings and ads feel native to attract the right customers in those regions." },
  { q: "Why is your reporting better than what I’m currently getting?", a: "I provide transparent, granular data using tools like Helium 10/Jungle Scout and Customized Excel sheet so you see exactly where every dollar goes. You’ll always know which keywords are driving profit and which ones we are cutting to save costs." },
  { q: "How do you handle my listing before spending my ad budget?", a: "We audit your images, A+ Content, and backend SEO before scaling your PPC campaigns. This ensures your traffic actually converts into sales rather than wasting your budget on low-converting listings." }
];


const PpcManagement = () => {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      // Hero Elements
      gsap.fromTo('.anim-up',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      );

      gsap.fromTo('.anim-slide-left',
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out', delay: 0.4 }
      );

      // Scroll triggered elements
      gsap.utils.toArray('.scroll-fade-up').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
          }
        );
      });

      // Pipeline staggering
      gsap.fromTo('.pipeline-step',
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.6, stagger: 0.2, ease: 'power2.out',
          scrollTrigger: { trigger: '.pipeline-container', start: 'top 80%' }
        }
      );

      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500/30 overflow-x-hidden pt-32 pb-20">

      {/* ─── HERO ─── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center mb-32 relative">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="flex flex-col gap-6 z-10">
          <div className="anim-up inline-flex">
            <span className="bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
              PPC Advertising Services
            </span>
          </div>
          <h1 className="anim-up text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            Amazon <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
              Advertising
            </span><br />
            Management
          </h1>
          <p className="anim-up text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg">
            Elevate your brand with data-driven advertising strategies. We craft bespoke Amazon PPC campaigns designed to maximize your ROI.
          </p>
          <div className="anim-up mt-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/20 text-lg">
              <a href="https://www.linkedin.com/in/amitkushwaha12/">Get started</a>
            </button>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="anim-slide-left relative flex justify-center lg:justify-end z-10">
          <div className="w-full max-w-[450px] bg-[#0E121E] rounded-3xl border border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Sponsored</span>
              <span className="bg-yellow-500 text-black text-[10px] font-black uppercase px-2 py-0.5 rounded-sm">Ad</span>
            </div>
            <div className="w-full h-52 rounded-2xl relative overflow-hidden group">
              <img src={ppc1} alt="Sponsored Product" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Premium Matcha Green Tea Powder</h3>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                <div className="flex text-yellow-500"><Star className="w-4 h-4 fill-yellow-500" /><Star className="w-4 h-4 fill-yellow-500" /><Star className="w-4 h-4 fill-yellow-500" /><Star className="w-4 h-4 fill-yellow-500" /><Star className="w-4 h-4 fill-yellow-500" /></div>
                449 ratings
              </div>
              <div className="text-2xl font-black text-white">$39.99</div>
            </div>
          </div>
          {/* Floating badge */}
          <div className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 bg-[#1A202E] border border-orange-500/30 p-5 rounded-2xl shadow-xl flex flex-col items-center gap-1 z-20">
            <TrendingUp className="w-8 h-8 text-green-400 mb-1" />
            <span className="text-2xl font-black text-white">6.46x</span>
            <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Avg. ROAS</span>
          </div>
        </div>
      </section>

      {/* ─── TOOLKIT ─── */}
      <section className="bg-purple-600/15 border-y border-white/5 py-24 mb-32">

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 scroll-fade-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our Unparalleled <span className="text-orange-500">Advertising Toolkit</span>
            </h2>
            <p className="text-gray-400 text-lg">
              We don't settle for 'good enough'. Our advanced PPC approach includes everything you need to dominate the search results and maximize profitability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolkitFeatures.map((f, i) => (
              <div key={i} className="scroll-fade-up bg-[#0E121E] border border-white/5 hover:border-white/20 p-8 rounded-3xl transition-all hover:bg-white/[0.03] group">
                <div className={`w-14 h-14 rounded-2xl ${f.bg} border ${f.border} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <f.icon className={`w-7 h-7 ${f.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LOGOS ─── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32 text-center scroll-fade-up">
        <h4 className="text-sm font-bold tracking-widest uppercase text-gray-500 mb-10">Serving global brands around the world</h4>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Placeholders for logos */}
          {['Two brothers', 'Magics', 'Yha', 'vicwe', "OCHEAL", 'SEAMOON'].map(brand => (
            <div key={brand} className="text-2xl md:text-3xl text-yellow-400 hover:text-orange-400 transition-colors cursor-default">{brand}</div>
          ))}
        </div>
      </section>

      {/* ─── YELLOW CTA ─── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32 scroll-fade-up">
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-1 md:p-1.5 overflow-hidden">
          <div className="bg-[#0E121E] rounded-[1.3rem] md:rounded-[1.2rem] p-8 md:p-16 grid lg:grid-cols-2 gap-12 items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="z-10 relative">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Win With <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">PPC Advertising</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-md">
                Turn clicks into customers. We blend advanced machine learning with human expertise to supercharge your campaigns.
              </p>
              <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-black px-8 py-4 rounded-full transition-all hover:scale-105 active:scale-95 text-sm uppercase tracking-widest">
                <a href='https://www.linkedin.com/in/amitkushwaha12/'>Start Winning Today</a>
              </button>
            </div>

            <div className="z-10 relative bg-[#1A202E] border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h4 className="text-white font-bold text-lg">Sales vs ACoS</h4>
                  <span className="text-xs text-green-400 font-bold">+142% Year over Year</span>
                </div>
                <BarChart3 className="text-yellow-500 w-6 h-6" />
              </div>
              <div className="relative w-full h-40 rounded-xl overflow-hidden">
                <img src={ppcAds} alt="Sales vs ACoS chart" className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A202E]/60 to-transparent" />
              </div>
              <div className="mt-4 flex gap-4 text-xs font-bold text-gray-500 justify-center uppercase tracking-wider">
                <div className="flex items-center gap-1"><div className="w-2 h-2 bg-yellow-500 rounded-full" /> Sales</div>
                <div className="flex items-center gap-1"><div className="w-2 h-2 bg-orange-500 rounded-full" /> ACoS Limit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── E-BOOK GUIDE ─── */}
      {/* <section className="max-w-5xl mx-auto px-6 md:px-12 mb-32 scroll-fade-up">
        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 hover:border-white/20 transition-colors">
          <div className="w-48 h-64 bg-gradient-to-br from-[#1A202E] to-[#0E121E] border border-white/10 shadow-2xl rounded-lg flex flex-col flex-shrink-0 relative overflow-hidden group">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-500" />
            <div className="p-4 flex-1 flex flex-col">
              <span className="text-[8px] font-bold text-orange-400 uppercase tracking-widest mb-2">Exclusive Guide</span>
              <h4 className="text-white font-black text-xl leading-tight mb-2">The Ultimate Amazon PPC Playbook</h4>
              <p className="text-[10px] text-gray-500 mt-auto">2026 Edition</p>
            </div>
            <div className="h-20 bg-white/5 flex items-center justify-center border-t border-white/5">
              <ImageIcon className="text-gray-600 w-8 h-8 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Grow sales with our <span className="text-orange-500">Amazon PPC Guide</span></h3>
            <p className="text-gray-400 mb-6 max-w-md">Unlock the secrets of 6-figure sellers. Download our comprehensive guide to mastering Amazon advertising completely free.</p>
            <button className="flex items-center justify-center md:justify-start gap-2 text-sm font-bold uppercase tracking-widest text-orange-400 hover:text-orange-300 transition-colors">
              <Download className="w-4 h-4" /> Download our guide
            </button>
          </div>
        </div>
      </section> */}

      {/* ─── STRATEGY LIFECYCLE ─── */}
      <section className="bg-[#0E121E] border-y border-white/5 py-24 mb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16 scroll-fade-up">
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2 block">Our Process</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Amazon PPC <span className="text-orange-500">Strategy</span></h2>
            <p className="text-gray-400 text-lg">We follow a proven lifecycle for every campaign to ensure maximum profitability and ongoing scale.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-0 relative pipeline-container">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-[4.5rem] left-10 right-10 h-0.5 bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 opacity-20" />

            {strategySteps.map((step, i) => (
              <div key={i} className="pipeline-step flex-1 flex flex-col items-center text-center px-4 relative">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-b ${step.bg} to-transparent border border-white/10 flex items-center justify-center mb-6 z-10 mx-auto backdrop-blur-xl shadow-xl shadow-black`}>
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <span className="text-gray-600 font-black text-2xl">0{i + 1}</span>
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PILLARS ─── */}

      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32 scroll-fade-up">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">3 pillars of our <span className="text-orange-500">PPC strategy</span></h2>
          <p className="text-gray-400 text-lg">We take a holistic approach to Amazon advertising, focusing on three core pillars to drive sustainable growth.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl flex flex-col h-full hover:bg-white/[0.04] transition-colors group">
              <div className="text-4xl font-black text-white/5 mb-4 group-hover:text-orange-500/10 transition-colors">0{i + 1}</div>
              <h3 className="text-xl font-bold text-white mb-4">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-8">{p.desc}</p>

            </div>
          ))}
        </div>
      </section>

      {/* ─── TIERED AD TYPES ─── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-32 mb-32">

        {/* SPONSORED PRODUCTS */}
        <section className="scroll-fade-up">
          <div className="mb-12 border-b border-white/10 pb-12">
            <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6 inline-block">Core Strategy</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Sponsored <span className="text-blue-400">Products</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl">Drive immediate visibility and sales. We optimize your Sponsored Product campaigns for maximum efficiency using granular structures to control spend and target specific search intents.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {[
              { title: 'Keyword Targeting', icon: Target, desc: 'We target both broad and long-tail keywords to cast a wide net and capture low-hanging fruit.' },
              { title: 'Product Targeting', icon: ShoppingBag, desc: 'We defensively target your own ASINs and offensively target competitors to steal market share.' },
              { title: 'Auto Campaigns', icon: Zap, desc: 'We run auto campaigns with varying bids across different targeting groups to harvest new keywords.' },
              { title: 'Category Targeting', icon: Database, desc: 'We target specific categories with refined price and rating parameters to increase conversions.' },
              { title: 'Dayparting', icon: TrendingUp, desc: 'We adjust bids based on the time of day and day of the week when your customers are most active.' },
              { title: 'Placement Multipliers', icon: MousePointer2, desc: 'We utilize placement modifiers to ensure your ads appear where they perform best.' },
            ].map(t => (
              <div key={t.title} className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-colors">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0 text-blue-400">
                  <t.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{t.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SPONSORED BRANDS */}
        <section className="scroll-fade-up grid lg:grid-cols-2 gap-16 items-center bg-[#0E121E] p-8 md:p-12 rounded-3xl border border-white/5">
          <div className="flex flex-col gap-6">
            <span className="bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full w-fit">Brand Building</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Sponsored <span className="text-yellow-500">Brands</span></h2>
            <p className="text-gray-400 text-lg">Elevate brand awareness and drive multi-item purchases. We craft compelling Sponsored Brand campaigns that showcase your product portfolio and tell your brand story.</p>
            <ul className="flex flex-col gap-4 mt-4">
              {['Custom headlines and logos that highlight your unique value prop.', 'High-converting video ads for massive scroll-stopping engagement.', 'Store spotlight campaigns that drive traffic to your custom storefront.'].map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-2xl border border-white/10 shadow-xl overflow-hidden group bg-[#1A202E]">
            <img
              src={brandsAds}
              alt="Sponsored Brands Ad"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </section>

        {/* TESTIMONIALS (Optional inner block) */}
        {/* <section className="scroll-fade-up grid md:grid-cols-2 gap-8">
          {[
            { name: "John D.", brand: "Fitness Gear Pro", quote: "Our ACoS dropped by 18% in the first two months, while our overall sales increased. The dashboard transparency is incredible." },
            { name: "Sarah M.", brand: "Organic Home", quote: "They completely revamped our Sponsored Brands strategy. The new video ads are converting at 3x the rate of our old statics." }
          ].map((t, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl flex flex-col gap-4 relative">
              <div className="text-6xl font-serif text-orange-500/20 absolute top-4 left-6">"</div>
              <div className="flex gap-1 mb-2 z-10">
                <Star className="w-4 h-4 fill-orange-400 text-orange-400" /><Star className="w-4 h-4 fill-orange-400 text-orange-400" /><Star className="w-4 h-4 fill-orange-400 text-orange-400" /><Star className="w-4 h-4 fill-orange-400 text-orange-400" /><Star className="w-4 h-4 fill-orange-400 text-orange-400" />
              </div>
              <p className="text-gray-300 italic text-lg z-10 relative">"{t.quote}"</p>
              <div className="mt-auto pt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10" />
                <div>
                  <h5 className="text-white font-bold text-sm">{t.name}</h5>
                  <span className="text-xs text-orange-400">{t.brand}</span>
                </div>
              </div>
            </div>
          ))}
        </section> */}

        {/* SPONSORED DISPLAY */}
        <section className="scroll-fade-up grid lg:grid-cols-2 gap-16 items-center bg-[#0E121E] p-8 md:p-12 rounded-3xl border border-white/5">
          <div className="lg:order-2 flex flex-col gap-6">
            <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full w-fit">Retargeting</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white">Sponsored <span className="text-purple-400">Display</span></h2>
            <p className="text-gray-400 text-lg">Retarget shoppers who viewed your products but didn't buy. We utilize Sponsored Display to re-engage high-intent shoppers on and off Amazon.</p>
            <ul className="flex flex-col gap-4 mt-4">
              {['Product remarketing to close hesitant buyers.', 'Audience targeting to reach specific demographics and interests.', 'Cross-selling and upselling on your own and competitor ASINs.'].map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:order-1 relative rounded-2xl border border-white/10 shadow-xl overflow-hidden group bg-[#1A202E]">
            <img
              src={displayAds}
              alt="Sponsored Display Ad"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </section>

      </div>

      {/* ─── BOTTOM CTA ─── */}
      <section className="bg-gradient-to-t from-orange-500/10 to-transparent py-24 border-t border-orange-500/20 scroll-fade-up">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Stop Wasting </span> Your Ad Spend!
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Stop leaving money on the table. Let our expert team optimize your Amazon advertising and drive unprecedented growth.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-12 py-5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-orange-500/30 text-lg">
            Book Your Free Strategy Call
          </button>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 max-w-4xl mx-auto px-6 scroll-fade-up border-t border-white/5">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked <span className="text-orange-500">Questions</span></h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'bg-white/[0.05] border-orange-500/30' : 'bg-white/[0.02] hover:bg-white/[0.04]'}`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-white outline-none"
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              >
                <span className="text-lg pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 flex-shrink-0 text-orange-500 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-4">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default PpcManagement;
