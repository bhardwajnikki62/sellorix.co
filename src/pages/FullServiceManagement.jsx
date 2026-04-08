import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import newP1 from '../assets/new_P1.png';
import newP2 from '../assets/new_p2.png';
import mainlogo from '../assets/main_logo1.png';
import sophia from '../assets/Sophia Wilson.jpeg';
import {
  ChevronLeft, ChevronRight, MapPin, Clock, Globe, ArrowRight,
  MousePointer2, Settings, Image as ImageIcon, Search, Megaphone,
  BarChart3, Sliders, CheckCircle2, TrendingUp, ShieldCheck,
  Zap, Package, Star, Users, Award, ChevronDown, Target, Brain, Trophy
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/* ─── DATA ─── */
const servicesData = [
  {
    id: 'ppc',
    title: 'PPC Management',
    subtitle: 'Maximize ROI with Data-Driven Advertising',
    icon: Megaphone,
    color: 'orange',
    colorClass: 'text-orange-500',
    bgClass: 'bg-orange-500/10',
    borderClass: 'border-orange-500/30',
    description:
      'At Sellorix, we dont just manage ads, we engineer campaigns to lower your ACOS and maximize your Total Account(TACOS).We combine deep data analysis with a sellers intuition to make sure every dollar spent is a dollar earned.',
    bullets: [
      'Sponsored Products, Brands & Display Ads',
      'Keyword harvesting & negative targeting',
      'ACoS / TACoS optimization',
      'Weekly performance reporting',
      'Competitor conquesting campaigns',
    ],
    stat: { value: '4.2×', label: 'Avg. ROAS Improvement' },
    visual: <PPCVisual />,
  },
  {
    id: 'seo',
    title: 'Amazon SEO',
    subtitle: 'Dominate Search Rankings in 90 Days',
    icon: Search,
    color: 'blue',
    colorClass: 'text-blue-400',
    bgClass: 'bg-blue-500/10',
    borderClass: 'border-blue-500/30',
    description:
      "Our proven 4-phase SEO plan elevates your organic rankings by perfecting every element Amazon's A9 algorithm measures — keywords, relevance, conversion rate, and velocity.",
    bullets: [
      '4-phase keyword research & mapping',
      'Title, bullets & backend search terms',
      'Conversion rate optimization',
      'Rank-tracking dashboard',
      'Competitor gap analysis',
    ],
    stat: { value: '90', label: 'Days to First Results' },
    visual: <SEOVisual />,
  },
  {
    id: 'design',
    title: 'Creative Design',
    subtitle: 'Visuals That Convert Browsers to Buyers',
    icon: ImageIcon,
    color: 'pink',
    colorClass: 'text-pink-400',
    bgClass: 'bg-pink-500/10',
    borderClass: 'border-pink-500/30',
    description:
      'First impressions on Amazon are visual. Our designers craft CTR-optimized main images, compelling A+ Content, high-converting Brand Stores, and scroll-stopping infographic listings.',
    bullets: [
      'CTR-optimized main product images',
      'Premium A+ Content modules',
      'Brand Story, Store design & build',
      'Infographic & lifestyle imagery',
      'Video & Comparison Chart',
    ],
    stat: { value: '+40%', label: 'Avg. CTR Uplift' },
    visual: <DesignVisual />,
  },
  {
    id: 'merchandising',
    title: 'Catalogue',
    subtitle: 'Your Catalog, Perfectly Optimized',
    icon: MousePointer2,
    color: 'purple',
    colorClass: 'text-purple-400',
    bgClass: 'bg-purple-500/10',
    borderClass: 'border-purple-500/30',
    description:
      'We optimize every facet of your product catalog — attributes, variations, parent-child relationships, browse node mapping — so customers love what they see and Amazon ranks you higher.',
    bullets: [
      'Listing creation & bulk flat-file uploads',
      'Variation & parent-child structuring',
      'Category & browse node optimization',
      'Enhanced brand content management',
      'Seasonal promotional updates',
    ],
    stat: { value: '30+', label: 'Active Brands Managed' },
    visual: <MerchandisingVisual />,
  },
  {
    id: 'catalog',
    title: 'Catalog Troubleshooting',
    subtitle: 'Fix Issues Before They Cost You Sales',
    icon: Settings,
    color: 'yellow',
    colorClass: 'text-yellow-400',
    bgClass: 'bg-yellow-500/10',
    borderClass: 'border-yellow-500/30',
    description:
      "Suppressed listings, stranded inventory, ASIN merges gone wrong — we've seen it all. Our catalog experts diagnose and resolve even the most complex Amazon listing issues swiftly.",
    bullets: [
      'Suppressed & stranded listing recovery',
      'ASIN merge & split management',
      'Brand Registry issue resolution',
      'Error log diagnosis & fixes',
      'Policy compliance review',
    ],
    stat: { value: '98%', label: 'Issue Resolution Rate' },
    visual: <CatalogVisual />,
  },
  {
    id: 'ctr',
    title: 'Main Image CTR Hack',
    subtitle: 'Turn Traffic Into Clicks, Instantly',
    icon: Zap,
    color: 'green',
    colorClass: 'text-green-400',
    bgClass: 'bg-green-500/10',
    borderClass: 'border-green-500/30',
    description:
      'Your main image is your first and sometimes only chance to earn a click. We A/B test scroll-stopping image variations, proven to increase click-through rates and drive more organic + paid traffic.',
    bullets: [
      'Competitor thumbnail analysis',
      'A/B split testing framework',
      'Lifestyle vs. white-background tests',
      'Packaging & angle optimization',
      'Monthly iteration cycles',
    ],
    stat: { value: '+55%', label: 'Click-Through Rate Uplift' },
    visual: <CTRVisual />,
  },
  {
    id: 'reporting',
    title: 'Reporting & Monitoring',
    subtitle: 'Stay Ahead — Always Know Your Numbers',
    icon: BarChart3,
    color: 'teal',
    colorClass: 'text-teal-400',
    bgClass: 'bg-teal-500/10',
    borderClass: 'border-teal-500/30',
    description:
      'Data without clarity is noise. We deliver clean, actionable weekly dashboards tracking your sales, ad spend, organic rank, and account health — giving you full transparency and peace of mind.',
    bullets: [
      'Weekly performance dashboards',
      'Account health & policy monitoring',
      'Competitor & BSR tracking',
      'Ad spend efficiency reports',
      'Monthly strategy review calls',
    ],
    stat: { value: 'Live', label: 'Real-Time Dashboard Access' },
    visual: <ReportingVisual />,
  },
  {
    id: 'platform',
    title: 'Platform Management',
    subtitle: 'Stress-Free Amazon — We Handle Everything',
    icon: Sliders,
    color: 'orange',
    colorClass: 'text-orange-400',
    bgClass: 'bg-orange-500/10',
    borderClass: 'border-orange-500/30',
    description:
      'From Seller Central operations to FBA shipment plans and case management, our team runs your Amazon back-office so you can focus on growing your business, not fighting the platform.',
    bullets: [
      'Seller Central daily operations',
      'FBA shipment plan management',
      'Customer feedback & review strategy',
      'Case & reinstatement management',
      'Inventory forecasting & replenishment',
    ],
    stat: { value: 'A–Z', label: 'Full Account Management' },
    visual: <PlatformVisual />,
  },
];

/* ─── INLINE VISUALS ─── */
function PPCVisual() {
  return (
    <div className="w-full h-full bg-[#0d1117] rounded-2xl border border-white/10 p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Ad Performance</span>
        <span className="text-xs text-green-400 font-bold flex items-center gap-1"><TrendingUp className="w-3 h-3" /> +128%</span>
      </div>
      {[
        { label: 'Sponsored Products', value: 78, color: 'bg-orange-500' },
        { label: 'Sponsored Brands', value: 55, color: 'bg-yellow-500' },
        { label: 'Sponsored Display', value: 42, color: 'bg-blue-500' },
      ].map(b => (
        <div key={b.label} className="flex flex-col gap-1">
          <div className="flex justify-between text-xs text-gray-400">
            <span>{b.label}</span><span className="text-white font-bold">{b.value}%</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <div className={`h-full ${b.color} rounded-full`} style={{ width: `${b.value}%` }} />
          </div>
        </div>
      ))}
      <div className="mt-auto grid grid-cols-3 gap-3 pt-4 border-t border-white/5">
        {[['ROAS', '4.2×'], ['ACoS', '18%'], ['CTR', '0.9% ']].map(([k, v]) => (
          <div key={k} className="flex flex-col items-center bg-white/5 rounded-xl p-3">
            <span className="text-lg font-black text-orange-400">{v}</span>
            <span className="text-[10px] text-gray-500 uppercase">{k}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SEOVisual() {
  const kws = ['Large Diaper Bag Backpack', 'Titanium Cutting Board', 'Stainless Steel Kitchen Organizer', 'Ergonomic Baby Carrier'];
  return (
    <div className="w-full h-full bg-[#0d1117] rounded-2xl border border-white/10 p-6 flex flex-col gap-3">
      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Keyword Rankings</span>
      {kws.map((kw, i) => (
        <div key={kw} className="flex items-center gap-3 bg-white/[0.03] border border-white/5 rounded-xl px-4 py-3">
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-black text-sm flex-shrink-0">
            #{i + 1}
          </div>
          <span className="text-sm text-gray-300 flex-1 truncate">{kw}</span>
          <span className="text-green-400 text-xs font-bold flex items-center gap-1"><TrendingUp className="w-3 h-3" />+{(i + 1) * 8}</span>
        </div>
      ))}
    </div>
  );
}

function DesignVisual() {
  const portfolio = [
    { label: 'Main Image', img: p1, border: 'border-orange-500/30', badge: 'bg-orange-500/20 text-orange-400' },
    { label: 'A+ Content', img: p2, border: 'border-pink-500/30', badge: 'bg-pink-500/20 text-pink-400' },
    { label: 'Brand Store', img: p3, border: 'border-purple-500/30', badge: 'bg-purple-500/20 text-purple-400' },
    { label: 'Infographic', img: p4, border: 'border-blue-500/30', badge: 'bg-blue-500/20 text-blue-400' },
  ];
  return (
    <div className="w-full h-full bg-[#0d1117] rounded-2xl border border-white/10 p-6 flex flex-col gap-4">
      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Design Portfolio</span>
      <div className="grid grid-cols-2 gap-3 flex-1">
        {portfolio.map(({ label, img, border, badge }) => (
          <div
            key={label}
            className={`rounded-xl overflow-hidden border ${border} flex flex-col group relative h-36`}
          >
            <div className="overflow-hidden" style={{ height: 'calc(100% - 28px)' }}>
              <img
                src={img}
                alt={label}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className={`h-7 flex items-center justify-center text-center text-xs font-semibold ${badge} backdrop-blur-sm shrink-0`}>
              {label}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between bg-white/[0.03] rounded-xl px-4 py-3 border border-white/5">
        <span className="text-xs text-gray-400">Avg. CTR Improvement</span>
        <span className="text-orange-400 font-black text-lg">+40%</span>
      </div>
    </div>
  );
}

function MerchandisingVisual() {
  return (
    <div className="w-full h-full bg-[#0d1117] rounded-2xl border border-white/10 p-6 flex flex-col gap-3">
      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Catalog Health</span>
      {[
        { label: 'Listings Optimized', val: '1,284', icon: CheckCircle2, c: 'text-green-400' },
        { label: 'Variations Structured', val: '342', icon: Package, c: 'text-blue-400' },
        { label: 'Categories Fixed', val: '98', icon: Settings, c: 'text-yellow-400' },
        { label: 'New ASINs Created', val: '217', icon: Star, c: 'text-orange-400' },
      ].map(r => (
        <div key={r.label} className="flex items-center gap-3 bg-white/[0.03] border border-white/5 rounded-xl px-4 py-3">
          <r.icon className={`w-5 h-5 ${r.c} flex-shrink-0`} />
          <span className="text-sm text-gray-400 flex-1">{r.label}</span>
          <span className="text-white font-bold text-sm">{r.val}</span>
        </div>
      ))}
    </div>
  );
}

function CatalogVisual() {
  return (
    <div className="w-full h-full bg-[#0d1117] rounded-2xl border border-white/10 p-6 flex flex-col gap-3">
      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Issue Tracker</span>
      {[
        { issue: 'Suppressed Listings', status: 'Resolved', c: 'text-green-400 bg-green-500/10' },
        { issue: 'Stranded Inventory', status: 'Resolved', c: 'text-green-400 bg-green-500/10' },
        { issue: 'ASIN Merge Conflict', status: 'In Progress', c: 'text-yellow-400 bg-yellow-500/10' },
        { issue: 'Brand Registry Error', status: 'Resolved', c: 'text-green-400 bg-green-500/10' },
        { issue: 'Policy Violation Flag', status: 'Resolved', c: 'text-green-400 bg-green-500/10' },
      ].map(r => (
        <div key={r.issue} className="flex items-center gap-3 bg-white/[0.03] border border-white/5 rounded-xl px-4 py-2.5">
          <ShieldCheck className="w-4 h-4 text-yellow-500 flex-shrink-0" />
          <span className="text-sm text-gray-300 flex-1">{r.issue}</span>
          <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${r.c}`}>{r.status}</span>
        </div>
      ))}
    </div>
  );
}

function CTRVisual() {
  return (
    <div className="w-full h-full bg-[#0d1117] rounded-2xl border border-white/10 p-6 flex flex-col gap-4">
      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">A/B Test Results</span>
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: 'Variant A (Control)', ctr: '0.28%', bg: 'from-white/5', wins: false, img: newP1 },
          { label: 'Variant B (Optimized)', ctr: '0.61%', bg: 'from-orange-500/10', wins: true, img: newP2 },
        ].map(v => (
          <div key={v.label} className={`rounded-2xl bg-gradient-to-br ${v.bg} to-transparent border ${v.wins ? 'border-orange-500/40' : 'border-white/10'} p-4 flex flex-col gap-3`}>
            <div className="w-full aspect-square bg-white/5 rounded-xl overflow-hidden flex items-center justify-center">
              <img src={v.img} alt={v.label} className="w-full h-full object-cover" />
            </div>
            <span className="text-xs text-gray-400 text-center">{v.label}</span>
            <div className="text-center">
              <span className={`text-xl font-black ${v.wins ? 'text-orange-400' : 'text-gray-500'}`}>{v.ctr}</span>
              <p className="text-[10px] text-gray-500">CTR</p>
            </div>
            {v.wins && <div className="bg-orange-500/20 text-orange-400 text-xs font-bold text-center py-1 rounded-lg">WINNER +118%</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

function ReportingVisual() {
  const bars = [40, 65, 50, 80, 60, 90, 75];
  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return (
    <div className="w-full h-full bg-[#0d1117] rounded-2xl border border-white/10 p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Weekly Sales</span>
        <span className="text-xs text-green-400 font-bold flex items-center gap-1"><TrendingUp className="w-3 h-3" /> +42% vs last week</span>
      </div>
      <div className="flex items-end gap-2 h-32">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div className="w-full rounded-t-lg bg-orange-500/20 hover:bg-orange-500/40 transition-colors relative" style={{ height: `${h}%` }}>
              <div className="absolute bottom-0 left-0 right-0 rounded-t-lg bg-orange-500" style={{ height: '4px' }} />
            </div>
            <span className="text-[10px] text-gray-500">{labels[i]}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5">
        {[['Revenue', '$50K'], ['Orders', '1367'], ['Units', '2,109']].map(([k, v]) => (
          <div key={k} className="text-center">
            <div className="text-base font-black text-white">{v}</div>
            <div className="text-[10px] text-gray-500 uppercase">{k}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlatformVisual() {
  return (
    <div className="w-full h-full bg-[#0d1117] rounded-2xl border border-white/10 p-6 flex flex-col gap-3">
      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Account Operations</span>
      {[
        { task: 'FBA Shipment Plan Created', time: '2m ago', done: true },
        { task: 'Customer Case #4821 Closed', time: '15m ago', done: true },
        { task: 'Inventory Reorder Triggered', time: '1h ago', done: true },
        { task: 'Monthly Review Call Scheduled', time: '2h ago', done: true },
        { task: 'Listing Quality Audit Running', time: 'Now', done: false },
      ].map(t => (
        <div key={t.task} className="flex items-center gap-3 bg-white/[0.03] border border-white/5 rounded-xl px-4 py-2.5">
          <div className={`w-2 h-2 rounded-full flex-shrink-0 ${t.done ? 'bg-green-400' : 'bg-orange-400 animate-pulse'}`} />
          <span className="text-sm text-gray-300 flex-1">{t.task}</span>
          <span className="text-[11px] text-gray-500">{t.time}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── MAIN COMPONENT ─── */
const FullServiceManagement = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Allow DOM to settle before registering animations
    const timer = setTimeout(() => {
      // Hero entrance
      gsap.fromTo(
        '.hero-text-item',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out' }
      );
      gsap.fromTo(
        '.hero-widget',
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0, duration: 1.1, ease: 'power3.out', delay: 0.3 }
      );

      // Service sections — use fromTo so `to` state is always opacity:1
      gsap.utils.toArray('.service-section').forEach((el) => {
        const left = el.querySelector('.service-content');
        const right = el.querySelector('.service-visual');
        if (left) gsap.fromTo(left,
          { opacity: 0, x: -40 },
          {
            opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 82%', once: true, toggleActions: 'play none none none' },
          }
        );
        if (right) gsap.fromTo(right,
          { opacity: 0, x: 40 },
          {
            opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 82%', once: true, toggleActions: 'play none none none' },
          }
        );
      });

      // Stats row
      gsap.fromTo('.stat-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: '.stats-section', start: 'top 80%', once: true },
        }
      );

      // Roadmap grid items
      gsap.fromTo('.roadmap-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: '.roadmap-grid', start: 'top 80%', once: true },
        }
      );

      // Recalculate all trigger positions after React has fully rendered
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500/30 overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section ref={heroRef} className="relative pt-36 pb-24 px-6 md:px-12 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Ambient glow */}
        <div className="absolute top-24 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col gap-8 max-w-xl">
          <div className="hero-text-item inline-flex">
            <span className="bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
              Full Service Amazon Management
            </span>
          </div>
          <h1 className="hero-text-item text-4xl md:text-6xl font-bold leading-[1.1]">
            Turn your Amazon store into a<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
              Profit Machine.
            </span><br />

          </h1>
          <p className="hero-text-item text-lg text-gray-400 leading-relaxed">
            When these work in sync, your entire catalog gains market share together.
          </p>
          <div className="hero-text-item flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/20">
              <a href="https://calendly.com/amitkushwaha/new-meeting">Get a Free Audit</a>
            </button>
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold px-10 py-4 rounded-full transition-all hover:scale-105">
              <a href="https://www.linkedin.com/in/amitkushwaha12">
                Direct Connect With Founder ↓</a>
            </button>
          </div>
        </div>

        <div className="hero-widget flex justify-center lg:justify-end">
          <div className="w-full max-w-[520px] bg-[#0E121E] rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[480px]">
            {/* Calendar */}
            <div className="flex-1 bg-[#1A202E] p-6 md:p-8 flex flex-col">
              <div className="flex flex-col items-center mb-6">
                <div className="w-12 h-12 bg-black rounded-full flex flex-col items-center justify-center p-2 mb-3 border border-white/10">
                  <img src={mainlogo} alt="logo" />

                </div>
                <h3 className="text-base font-semibold text-center leading-snug">Meet with Sellorix Founder</h3>
              </div>
              <div className="flex items-center justify-center gap-4 mb-5">
                <ChevronLeft className="w-4 h-4 opacity-40" />
                <span className="font-bold">March 2026</span>
                <ChevronRight className="w-4 h-4 opacity-40" />
              </div>
              <div className="grid grid-cols-7 text-[10px] font-bold opacity-50 mb-3 text-center">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => <div key={i}>{d}</div>)}
              </div>
              <div className="grid grid-cols-7 gap-y-2 text-center text-sm">
                {[...Array(7)].map((_, i) => <div key={i} className="text-white/10 italic">{i + 1}</div>)}
                {[...Array(15)].map((_, i) => <div key={i + 7} className="text-white/40 hover:text-white cursor-pointer transition-colors">{i + 8}</div>)}
                <div className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-full font-bold mx-auto shadow-lg shadow-orange-500/30 text-sm">23</div>
                {[...Array(8)].map((_, i) => <div key={i + 24} className="text-white/40 hover:text-white cursor-pointer transition-colors">{i + 24}</div>)}
              </div>
            </div>
            {/* Time slots */}
            <div className="w-full md:w-60 bg-[#0E121E] p-6 flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-gray-400 text-sm"><MapPin className="w-4 h-4 text-orange-500" /><span>Google Meet</span></div>
                <div className="flex items-center gap-2 text-gray-400 text-sm"><Clock className="w-4 h-4 text-orange-500" /><span>30 mins</span></div>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-bold text-sm mb-3">Available times</p>
                <div className="flex flex-col gap-2">
                  {['7:45 pm', '8:15 pm', '8:45 pm', '9:15 pm'].map(t => (
                    <button key={t} className="w-full py-2.5 rounded-xl border border-white/10 text-gray-400 hover:border-orange-500/50 hover:text-orange-400 transition-all text-sm">
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* ─── STATS ROW ─── */}
      < section className="stats-section border-y border-white/5 bg-white/[0.015] py-14" >
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { val: '40+', label: 'Brands' },
            { val: '4+', label: 'Years Of Expertise' },
            { val: '3+', label: 'In House Experts' },
            { val: '100%', label: 'Amazon Focused' },
          ].map(s => (
            <div key={s.label} className="stat-card flex flex-col items-center text-center gap-1">
              <span className="text-4xl font-black text-orange-400">{s.val}</span>
              <span className="text-sm text-gray-400 uppercase tracking-widest">{s.label}</span>
            </div>
          ))}
        </div>
      </section >


      {/* ─── ROADMAP ICON GRID ─── */}

      < section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" >
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
            The Profit-First Roadmap to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
              $1M+
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our systematic approach eliminates guesswork and shifts your Amazon store into overdrive.
          </p>
        </div>

        <div className="roadmap-grid grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Target,
              title: 'PPC Surgery',
              desc: 'Cutting wasted spend and scaling winning keywords with surgical precision.',
              color: 'text-orange-500',
              bg: 'bg-orange-500/10',
              border: 'border-orange-500/20'
            },
            {
              icon: Brain,
              title: 'Listing Psychology',
              desc: 'Writing copy and designing images that trigger curiosity and force customers to click "Buy."',
              color: 'text-blue-400',
              bg: 'bg-blue-500/10',
              border: 'border-blue-500/20'
            },
            {
              icon: TrendingUp,
              title: 'Ranking Domination',
              desc: 'Moving your products to Page 1 using data-backed strategies, not luck.',
              color: 'text-green-400',
              bg: 'bg-green-500/10',
              border: 'border-green-500/20'
            },
            {
              icon: ShieldCheck,
              title: 'Account Health',
              desc: 'Keeping your store safe from suspensions and avoiding costly inventory stock-outs.',
              color: 'text-yellow-400',
              bg: 'bg-yellow-500/10',
              border: 'border-yellow-500/20'
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="roadmap-card group relative p-8 rounded-3xl bg-[#0d1117] border border-white/10 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6 border ${item.border}`}>
                <item.icon className={`w-7 h-7 ${item.color}`} />
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section >

      {/* ─── ALTERNATING SERVICE SECTIONS ─── */}
      < div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-0" >
        {
          servicesData.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <section
                key={service.id}
                className="service-section py-20 border-t border-white/5 grid lg:grid-cols-2 gap-16 items-center"
              >
                {/* Content Side */}
                <div className={`service-content flex flex-col gap-7 ${!isEven ? 'lg:order-2' : ''}`}>
                  {/* Icon + badge */}
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl ${service.bgClass} border ${service.borderClass} flex items-center justify-center flex-shrink-0`}>
                      <service.icon className={`w-7 h-7 ${service.colorClass}`} />
                    </div>
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-widest ${service.colorClass} mb-1`}>
                        Service {String(index + 1).padStart(2, '0')}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>

                  <p className={`text-sm font-semibold uppercase tracking-widest ${service.colorClass}`}>
                    {service.subtitle}
                  </p>

                  <p className="text-gray-400 text-lg leading-relaxed">{service.description}</p>

                  {/* Bullets */}
                  <ul className="flex flex-col gap-3">
                    {service.bullets.map(b => (
                      <li key={b} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 ${service.colorClass} flex-shrink-0 mt-0.5`} />
                        <span className="text-gray-300 text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stat + CTA */}
                  <div className="flex items-center gap-6 pt-2">
                    <div className={`flex flex-col border-l-4 ${service.borderClass} pl-4`}>
                      <span className={`text-3xl font-black ${service.colorClass}`}>{service.stat.value}</span>
                      <span className="text-xs text-gray-500 uppercase tracking-widest">{service.stat.label}</span>
                    </div>
                    {/* <button className="ml-auto flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors border border-white/10 hover:border-white/30 px-6 py-3 rounded-full">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button> */}
                  </div>
                </div>

                {/* Visual Side */}
                <div className={`service-visual h-[380px] ${!isEven ? 'lg:order-1' : ''}`}>
                  {service.visual}
                </div>
              </section>
            );
          })
        }
      </div >

      {/* ─── TRUST SECTION ─── */}
      < section className="trust-section py-20 border-t border-white/5 bg-white/[0.015]" >
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          <div className="trust-item flex items-center gap-8 border-r border-white/10 pr-12 last:border-0">
            {/* <div className="flex flex-col items-center flex-shrink-0">
              <div className="flex gap-1 mb-1 items-end">
                <div className="w-4 h-1.5 bg-red-400" /><div className="w-4 h-2.5 bg-yellow-400" /><div className="w-4 h-1.5 bg-orange-400" />
              </div>
              <span className="text-5xl font-black text-white leading-none">334<span className="text-lg align-top ml-1 opacity-50">TH</span></span>
              <span className="text-xs font-bold tracking-[0.3em] uppercase mt-2 opacity-50">IN USA</span>
            </div> */}
            <div className="flex flex-col gap-2">
              <h4 className="text-xl font-bold text-white">Your Profit is My Priority</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Most agencies just talk about clicks. Sellorix actually talks about profit. In just 90  Days, my ACOS dropped by 15% while our organic ranking hit the top of Page 1. Truly a seller's agency.
              </p>
            </div>
          </div>
          <div className="trust-item flex items-center gap-8">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-orange-500/30 flex-shrink-0 bg-white/5">
              <img src={sophia} alt="Testimonial" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-gray-300 text-sm italic leading-relaxed">
                "The team grew our Amazon revenue by 3× in just 8 months. Best investment we've made."
              </p>
              <p className="text-xs font-bold text-gray-500">— Sarah K., Brand Owner</p>
              {/* <button className="flex items-center gap-2 text-orange-400 text-xs font-bold hover:text-orange-300 transition-colors uppercase tracking-wider mt-1">
                Read Success Stories <ArrowRight className="w-3 h-3" />
              </button> */}
            </div>
          </div>
        </div>
      </section >

      {/* ─── BOTTOM FEATURES GRID ─── */}
      < section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Built On <span className="text-orange-500"> Real-World Results</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: ShieldCheck, title: 'Account Health', desc: 'Proactive monitoring of account metrics, performance notifications, and policy compliance.' },
            { icon: Package, title: 'Inventory Plan', desc: 'Strategic stock planning and replenishment cycles to minimize out-of-stock scenarios.' },
            { icon: Users, title: 'Dedicated Team', desc: 'A named account manager, SEO specialist, and PPC expert assigned exclusively to your brand.' },
            { icon: Award, title: 'Proven Results', desc: 'Ongoing analysis of market trends and competitor activity to unlock new growth opportunities.' },
          ].map(f => (
            <div key={f.title} className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl hover:border-orange-500/40 hover:bg-white/[0.06] transition-all duration-300 group flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                <f.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section >

      {/* ─── CTA BANNER ─── */}
      < section className="py-24 px-6 md:px-12" >
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 rounded-3xl p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(249,91,7,0.08),_transparent_70%)]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready To Grow Your<br />
              <span className="text-orange-500">Amazon business?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Schedule a free strategy direct call with our founder.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-14 py-5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-orange-500/30 text-lg">
              <a href="https://calendly.com/amitkushwaha/new-meeting">Book Your Free Audit</a>
            </button>
          </div>
        </div>
      </section >

    </div >
  );
};

export default FullServiceManagement;
