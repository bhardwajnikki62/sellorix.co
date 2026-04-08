import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Check, CheckCircle2, Settings, TrendingUp, Monitor, Layout,
  ClipboardList, MousePointer2, Headset, PieChart, ShieldCheck, ChevronDown
} from 'lucide-react';

import mainAuditImg from '../assets/main_account_audit.png';

gsap.registerPlugin(ScrollTrigger);

const heroChecklist = [
  'Advertising segmentation structure and bidding',
  'Amazon SEO keyword analysis and ranking tracking',
  'Product listings on variations and guidelines',
  'Account health',
  'Inventory planning',
  'Logistics – FBA metrics',
  'MAP out business changes',
  'Customer service'
];

const profitBullets = [
  'Drive higher revenue across the vast majority of products',
  'Earn more from inside your account',
  'Optimize your ACoS to spend more wisely'
];

const mistakeBullets = [
  'Avoid policy violations that can end your selling privileges',
  'Correct performance metrics to avoid account closure',
  'Monitor account health alerts effectively'
];

const performanceGrid = [
  { icon: Monitor, title: 'Account health check', desc: 'Secure the foundation of your operations. Identify suspended ASINs quickly and implement solutions swiftly.' },
  { icon: Layout, title: 'Detailed listing optimization', desc: 'Holistic coverage of everything from titles and descriptions to bullet points, imagery, and backend keywords.' },
  { icon: ClipboardList, title: 'Inventory management', desc: 'Resolve inventory holds securely and efficiently to circumvent disrupted continuity. Never miss a single sale due to errors.' },
  { icon: MousePointer2, title: 'Advertising performance', desc: 'Remove critical listing blocks, correct ad structures, and refine bidding segments for a flawless system of ROI.' },
  { icon: Headset, title: 'Customer experience', desc: 'Resolve complaints directly and address returns or negative feedback quickly to restore overall metrics.' },
  { icon: PieChart, title: 'Analysis of profitability', desc: 'Uncover real numbers and clearly measure catalog-wide costs against conversion metrics.' },
  { icon: ShieldCheck, title: 'Full compliance review', desc: 'Ensure adherence with guidelines across category compliance policies and keep your account thoroughly secure for scale.' }
];

const faqs = [
  { q: "Why is your Profit-First audit better than a basic PPC review?", a: "Most reviewer only look at ACOS.We analyze your TACOS, storage fees, and return rates to find where you're leaking cash. I show you the true net profit of every SKU, not just top-line sales." },
  { q: "What specific hidden opportunities do you look for in my account?", a: "We identify under-the-radar keywords with low competition and high conversion that your current campaigns are ignoring. We also look for bleeder keywords that are draining your budget without ever producing a sale." },
  { q: "How long does the audit take and what do I need to provide?", a: "The initial audit takes 24 to 48 hours. All We need is View-Only permissions to your Seller Central, We never ask for master login details, ensuring your account security remains 100% intact." },
  { q: "Will this audit help me plan my inventory for peak seasons?", a: "Yes, We analyze your sales velocity and inventory age to prevent Out-of-Stock disasters or Overstock storage fees. Our audit includes a forecast to keep your supply chain lean and profitable." },
  { q: "What is the #1 goal of your audit for a brand like mine?", a: "The goal is to provide a clear, actionable roadmap to lower your ad spend while increasing organic sales. You get a list of immediate quick wins  and a long-term strategy to dominate your category." }
];

const AmazonAccountAudit = () => {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      // Hero Elements
      gsap.fromTo('.anim-up',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      );

      gsap.fromTo('.anim-fade-in',
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
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

      // Staggered grid cards
      gsap.fromTo('.grid-stagger-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: '.grid-stagger-container', start: 'top 80%' }
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
    <div className="min-h-screen bg-black text-white selection:bg-yellow-500/30 overflow-x-hidden pt-32 pb-20">

      {/* ─── HERO ─── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center mb-32 relative">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="flex flex-col gap-6 z-10">
          <h1 className="anim-up text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-white mb-2">
            Amazon Account <br className="hidden md:block" />
            <span className="text-yellow-500">Audit</span>
          </h1>
          <p className="anim-up text-gray-400 text-lg leading-relaxed max-w-lg mb-2">
            <strong className="text-white block mb-1">Get a free Amazon audit within 24 to 48 hours</strong>
            Every Amazon expert reviews your account to give you a very detailed and actionable plan of your overall performance matrix.
          </p>

          <ul className="anim-up grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-6">
            {heroChecklist.map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="text-green-400 mt-1 flex-shrink-0">
                  <Check className="w-5 h-5 font-bold" />
                </div>
                <span className="text-gray-300 font-semibold text-sm">{text}</span>
              </li>
            ))}
          </ul>

          <div className="anim-up flex flex-col items-start gap-4">
            {/* <label className="text-sm font-bold text-gray-400">How many ASINs do you have?</label> */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">

              <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-black px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-yellow-500/20 whitespace-nowrap">
                <a href='https://www.linkedin.com/in/amitkushwaha12/'>Get an Account Audit</a>
              </button>
            </div>
          </div>
        </div>

        {/* Hero Visual Mockup */}
        <div className="anim-fade-in relative z-10 flex justify-center lg:justify-end mt-10 lg:mt-0">
          <div className="w-full max-w-[600px] relative">
            {/* Desktop Screen Mockup */}
            <div className="bg-gray-800 rounded-2xl border-4 border-gray-700 p-1 flex flex-col shadow-2xl relative z-10">
              <div className="bg-gray-900 rounded-xl overflow-hidden h-64 sm:h-80 flex flex-col relative">
                {/* Top Bar */}
                <div className="h-8 bg-black border-b border-gray-800 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-500" /><div className="w-2.5 h-2.5 rounded-full bg-yellow-500" /><div className="w-2.5 h-2.5 rounded-full bg-green-500" /></div>
                  <div className="mx-auto w-1/3 h-4 bg-gray-800 rounded-full" />
                </div>
                {/* Dashboard content */}
                <div className="flex-1 bg-[#1A202E] overflow-hidden">
                  <img
                    src={mainAuditImg}
                    alt="Amazon Account Audit Dashboard"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </div>
            </div>
            {/* Stand base */}
            <div className="mx-auto w-32 h-6 bg-gradient-to-b from-gray-700 to-gray-800" />
            <div className="mx-auto w-48 h-2 bg-gray-600 rounded-full -mt-1 shadow-lg shadow-black" />

            {/* Floating Badges */}
            <div className="absolute -bottom-4 right-20 z-20 w-16 h-16 bg-blue-500 rounded-full border-4 border-black flex items-center justify-center shadow-xl animate-bounce" style={{ animationDelay: '0s' }}>
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <div className="absolute top-1/2 right-12 translate-x-1/2 z-20 w-16 h-16 bg-orange-500 rounded-full border-4 border-black flex items-center justify-center shadow-xl animate-bounce" style={{ animationDelay: '0.2s' }}>
              <Settings className="w-8 h-8 text-white" />
            </div>
            <div className="absolute bottom-10 -right-6 z-20 w-20 h-20 bg-green-500 rounded-full border-4 border-black flex items-center justify-center shadow-xl animate-bounce" style={{ animationDelay: '0.4s' }}>
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── TWO-COLUMN BENEFITS ─── */}
      <section className="bg-white/[0.015] border-y border-white/5 py-24 mb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16">
          <div className="scroll-fade-up">
            <h2 className="text-3xl font-bold text-white mb-6">Maximize <span className="text-yellow-500">profits</span></h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-sm">
              Our in-depth insight into your account hits the goal of driving constant improvement from top to bottom metrics across your business.
            </p>
            <ul className="flex flex-col gap-4">
              {profitBullets.map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="text-green-400 mt-1 flex-shrink-0">
                    <Check className="w-5 h-5 font-bold" />
                  </div>
                  <span className="text-gray-200 font-semibold">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="scroll-fade-up">
            <h2 className="text-3xl font-bold text-white mb-6">Avoid costly <span className="text-orange-500">mistakes</span></h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-sm">
              Make sure that the issues never slow down your success. Improve cross-domain issues across the entire catalog and seamlessly stay compliant.
            </p>
            <ul className="flex flex-col gap-4">
              {mistakeBullets.map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="text-green-400 mt-1 flex-shrink-0">
                    <Check className="w-5 h-5 font-bold" />
                  </div>
                  <span className="text-gray-200 font-semibold">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── 7-ITEM ENHANCE GRID ─── */}

      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Enhance Overall <span className="text-yellow-500">Performance</span></h2>
          <p className="text-gray-400 text-lg">
            Our review evaluates practically every pillar of health running in your account right now across an extensive audit advantageously crafted for scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 grid-stagger-container">
          {/* Using a custom grid layout to fit 7 items nicely (spanning differently if needed, or just 4 cols) */}
          {performanceGrid.map((p, i) => (
            <div key={i} className={`grid-stagger-card bg-[#0E121E] border border-white/5 rounded-3xl p-8 hover:border-yellow-500/30 hover:bg-white/[0.03] transition-all group ${i === 6 ? 'md:col-span-2 lg:col-span-2' : ''}`}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-transparent flex items-center justify-center mb-6 relative">
                <p.icon className="w-7 h-7 text-yellow-500 relative z-10" />
                {/* Subtle yellow dot */}
                <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 pr-4">{p.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 max-w-4xl mx-auto px-6 scroll-fade-up border-t border-white/5 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked <span className="text-yellow-500">Questions</span></h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'bg-white/[0.05] border-yellow-500/30' : 'bg-white/[0.02] hover:bg-white/[0.04]'}`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-white outline-none"
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              >
                <span className="text-lg pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 flex-shrink-0 text-yellow-500 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-4">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BOTTOM CTA BANNER ─── */}
      <section className="py-24 border-t border-white/5 bg-gradient-to-b from-transparent to-yellow-500/5 scroll-fade-up">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Your first step to improving on <span className="text-yellow-500">Amazon</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto font-semibold">
            Clear errors, fix policies, stay compliant, and level up across the entire account matrix.
          </p>

          <div className="flex flex-col items-center gap-4">
            {/* <label className="text-sm font-bold text-gray-500">How many ASINs do you have?</label> */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">

              <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-black px-10 py-3.5 rounded-full transition-all shadow-xl shadow-yellow-500/20 whitespace-nowrap active:scale-95 text-lg">
                <a href="https://www.linkedin.com/in/amitkushwaha12/"> Get an Account Audit</a>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AmazonAccountAudit;
