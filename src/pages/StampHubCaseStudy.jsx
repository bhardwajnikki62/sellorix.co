import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import himalayanChef from '../assets/Himalayan_Chef.png'
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
  TrendingDown,
  LineChart as LineChartIcon,
  Package,
  Calendar,
  Layers,
  Search,
  PenTool,
  Boxes,
  ShieldCheck,
  ArrowRightCircle
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const StampHubCaseStudy = () => {
  const [activeTab, setActiveTab] = useState('Catalog');

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

    // Line Chart Animation
    const paths = document.querySelectorAll('.chart-path');
    paths.forEach(path => {
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".chart-container",
          start: "top 80%"
        }
      });
    });

    // Chart Points Animation
    gsap.fromTo('.chart-point',
      { scale: 0, opacity: 0 },
      {
        scale: 1, opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: ".chart-container",
          start: "top 80%"
        }
      }
    );
  }, []);

  const tabs = [
    {
      id: 'Catalog',
      title: 'Catalog Management',
      content: 'We performed a complete inventory overhaul for Stamp Hub. We audited their catalogs across 3+ categories, identified "retail hazards," and reorganized the parent/child listing structures to improve browse nodes and SEO visibility.'
    },
    {
      id: 'Marketing',
      title: 'Marketing & Design',
      content: 'Revamped the entire creative suite. This included new infographics, A+ content (EBC), and a high-impact Brand Story. We focused on consistent brand alignment between their physical store and digital presence to reduce drop-offs.'
    },
    {
      id: 'Advertising',
      title: 'Advertising Strategy',
      content: 'A full advertising audit led to a completely new PPC architecture. We implemented competitor-based targeting, defensive brand strategies, and precision budget allocation that scaled monthly revenue from $14k to $77k within the first year.'
    },
    {
      id: 'Account',
      title: 'Account Health',
      content: 'Our proactive management protocols fixed listing errors and prevented delistings. By utilizing data insights and proactive troubleshooting, we ensured a "Healthy" account status, even with high sales volumes.'
    },
  ];

  const challenges = [
    "Improving Catalog Management: Over-branched catalog with listings scattered in uncorrelated categories.",
    "Conversion Rate Issues: Limited content appeal; ads under-performing due to generic messaging.",
    "Outdated Creative Assets: Missing Amazon-optimized infographics and creative videos.",
    "Advertisement Oversight: Campaigns lacked oversight and had thin account-wide targeting.",
    "Retail Hazards: Listings prone to errors and delisting due to poor parent-child structure.",
    "Bypassed Brand Alignment: Confusion between physical store branding and digital presence.",
    "Limited organic visibility: Heavy reliance on thin advertising without SEO backing."
  ];

  // Data for the line chart (Sales vs Spend)
  const salesData = [30, 25, 45, 60, 55, 80, 120, 100, 140, 160];
  const spendData = [10, 12, 15, 20, 18, 25, 35, 30, 40, 50];

  const generatePath = (data, scaleY) => {
    const points = data.map((val, i) => `${(i * 100) / 9},${100 - (val / scaleY) * 100}`);
    return `M ${points.join(' L ')}`;
  };

  return (
    <div className="pt-24 min-h-screen bg-dark-bg text-white font-outfit overflow-hidden">
      {/* Brand Header */}
      <div className="bg-[#121212]/50 text-white py-12 px-6 md:px-12 border-b border-white/5 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-[#f95b07]/10 text-primary-400 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-primary-500/20">
              <Zap className="w-4 h-4" /> Higher Monthly Revenue
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              <span className="text-white">Himalayan Chef</span> <br />
              <span className="heading-gradient">164% Growth</span>
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
              {[
                { label: 'Market Share', val: '50%', sub: 'Up from 23%', icon: Target },
                { label: 'Monthly Rev', val: '$25K', sub: 'vs $14K baseline', icon: BarChart3 },
                { label: 'New Products', val: '3+', sub: 'Launched & Ranked', icon: Package },
                { label: 'Partner Since', val: '2024', sub: '2.5 Years Growth', icon: Calendar },
              ].map((m, i) => (
                <div key={i} className="stat-card p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary-500/30 transition-all group">
                  <m.icon className="w-5 h-5 text-primary-500 mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-2xl font-black text-white leading-tight">{m.val}</p>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-1">{m.label}</p>
                  <p className="text-[10px] text-primary-500/60 font-bold mt-0.5">{m.sub}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 relative hidden lg:block">
            <div className="relative z-10 bg-dark-bg p-8 rounded-[40px] border border-white/10 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/20 rounded-full blur-[60px]"></div>
              <img
                src={himalayanChef}
                alt="Stamp Hub Case Study"
                className="w-full h-64 object-cover rounded-3xl mb-8 hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xl font-bold tracking-tight">Main Dashboard</h4>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-[10px] font-black">ACTIVE</span>
              </div>
              <div className="space-y-3">
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-primary-500/50 w-[85%] rounded-full"></div>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500/50 w-[92%] rounded-full"></div>
                </div>
              </div>
            </div>
            {/* Glow */}
            <div className="absolute -inset-10 bg-primary-500/10 rounded-full blur-[100px] -z-10"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col lg:flex-row gap-16">
        {/* Main Sections */}
        <div className="flex-[2]">
          <section className="reveal-section mb-20">
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
            <h2 className="text-3xl font-bold text-white mb-6">Brief summary</h2>
            <p className="text-lg leading-relaxed text-gray-400 max-w-4xl">
              Himalayan Chef is a premier global food brand specializing in 100% natural, ethically sourced organic staples, including their world-renowned hand-chipped Pink Salt.
            </p>
          </section>

          {/* The Challenges */}
          <section className="reveal-section mb-24">
            <div className="flex items-center gap-6 mb-12">
              <h2 className="text-5xl font-black text-white leading-none">The <br /> Challenges</h2>
              <div className="flex-1 h-[2px] bg-gradient-to-r from-primary-500/50 to-transparent"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {challenges.map((challenge, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="w-8 h-8 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-500 font-black text-xs group-hover:bg-primary-500 group-hover:text-white transition-all duration-500">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="text-sm text-gray-400 font-medium leading-relaxed group-hover:text-gray-200 transition-colors">
                    <span className="font-black text-white block mb-1 uppercase tracking-wider text-[10px]">{challenge.split(':')[0]}</span>
                    {challenge.split(':')[1]}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* The Approach */}
          <section className="reveal-section mb-24 p-1 rounded-[40px] bg-gradient-to-b from-white/5 to-transparent border border-white/10">
            <div className="p-8 md:p-12">
              <h2 className="text-4xl font-black text-white mb-4">The Approach</h2>
              <p className="text-gray-500 mb-12 max-w-xl">Multiple tools and strategy interactions allowed us to achieve our long-term goals for Himalyan Chef.</p>

              <div className="flex flex-wrap gap-2 mb-10">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-8 py-3 rounded-full text-xs font-black transition-all border ${activeTab === tab.id ? 'bg-primary-500 border-primary-500 text-white shadow-lg shadow-primary-500/20' : 'bg-transparent border-white/10 text-gray-400 hover:border-white/30'}`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="animate-fade-in">
                  <p className="text-xl leading-relaxed text-gray-300 font-medium italic">
                    "{tabs.find(t => t.id === activeTab).content}"
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-dark-surface border border-white/10 flex items-center justify-center text-primary-500">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-white">Full Service Mgmt</p>
                      <p className="text-xs text-gray-500">Strategy & Execution Layer</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hidden md:block">
                  <div className="space-y-4">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex gap-4 items-center">
                        <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                        <div className="h-2 flex-1 bg-white/10 rounded-full overflow-hidden">
                          <div className={`h-full bg-primary-500/50 w-[${30 + i * 20}%] animate-pulse`}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar Info */}
        <div className="flex-1">
          <div className="sticky top-32 space-y-8">
            <div className="p-8 rounded-[32px] bg-dark-surface/80 border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                <LineChartIcon className="w-32 h-32" />
              </div>
              <h3 className="text-2xl font-black text-white mb-8 border-b border-white/5 pb-4">Brand Information</h3>

              <div className="space-y-8">
                <div>
                  <p className="text-[10px] font-black uppercase text-gray-500 tracking-[0.2em] mb-4">Catalog Management</p>
                  <ul className="space-y-3 pl-2">
                    <li className="flex items-center gap-3 text-xs font-bold text-gray-300"><Layers className="w-4 h-4 text-primary-500" /> Catalog Audit</li>
                    <li className="flex items-center gap-3 text-xs font-bold text-gray-300"><Boxes className="w-4 h-4 text-primary-500" /> Listing Transformation</li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-8">
                  <div>
                    <p className="text-[10px] font-black uppercase text-gray-500 mb-1">Industry</p>
                    <p className="text-xs font-bold text-white">Grocery & Gourmet Food</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-gray-500 mb-1">State</p>
                    <p className="text-xs font-bold text-white">California, USA</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5">
                  <p className="text-[10px] font-black uppercase text-gray-500 mb-4 tracking-widest">Active Services</p>
                  <div className="flex flex-wrap gap-2">
                    {['PPC', 'SEO', 'Listing Opt', 'Creative', 'Audit'].map(s => (
                      <span key={s} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[9px] font-black text-gray-400 uppercase">{s}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary-500 to-orange-600 p-6 rounded-2xl relative overflow-hidden group/cta">
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover/cta:opacity-100 transition-opacity"></div>
                  <p className="text-[10px] font-black text-white/80 uppercase mb-1">Sellorix Strategic Partner</p>
                  <p className="text-lg font-black text-white mb-3">Himalayan Chef</p>
                  <button className="w-full py-3 bg-white text-dark-bg rounded-xl text-xs font-black uppercase tracking-tighter hover:bg-gray-100 transition-colors">Partner Dashboard</button>
                </div>
              </div>
            </div>

            {/* Trust Signal */}
            <div className="p-6 rounded-2xl bg-[#a8cf45]/5 border border-green-500/20 text-center">
              <p className="text-xs font-bold text-[#a8cf45] mb-1 italic">"We've achieved sustained scale with Sellorix"</p>
              <p className="text-[10px] text-gray-500 font-black uppercase">Himalayan Chef Founding Team</p>
            </div>
          </div>
        </div>
      </div>

      {/* The Impact Line Chart */}
      <section className="reveal-section py-32 bg-dark-surface/30 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-500/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20 text-center md:text-left">
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6">The Impact</h2>
              <p className="text-gray-400 text-lg max-w-xl">
                Significant data interactions allowed us to achieve our goals with Himalayn Chef.
                Growth reached <span className="text-white font-bold">146% within the first year</span> of management.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                <p className="text-3xl font-black text-green-400 tracking-tight">$77,000</p>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-1">Current Revenue</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                <p className="text-3xl font-black text-primary-500 tracking-tight">$14,000</p>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-1">Baseline</p>
              </div>
            </div>
          </div>

          <div className="chart-container bg-dark-bg p-8 md:p-12 rounded-[40px] border border-white/10 shadow-3xl">
            <div className="flex items-center justify-between mb-8">
              <h4 className="text-sm font-black text-white uppercase tracking-widest">Monthly Sales & Ad Spend Comparison</h4>
              <div className="flex gap-6 text-[10px] font-black uppercase">
                <div className="flex items-center gap-2"><span className="w-3 h-3 bg-primary-500 rounded-full"></span> Monthly Sales</div>
                <div className="flex items-center gap-2"><span className="w-3 h-3 bg-yellow-400 rounded-full"></span> Ad Spend</div>
              </div>
            </div>

            {/* Custom SVG Line Chart */}
            <div className="relative h-96 w-full">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Grid Lines */}
                {[0, 25, 50, 75, 100].map(val => (
                  <line key={val} x1="0" y1={val} x2="100" y2={val} stroke="white" strokeOpacity="0.05" strokeWidth="0.5" />
                ))}

                {/* Sales Path */}
                <path
                  className="chart-path"
                  d={generatePath(salesData, 180)}
                  fill="none"
                  stroke="#f95b07"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Spend Path */}
                <path
                  className="chart-path"
                  d={generatePath(spendData, 180)}
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="4 2"
                />

                {/* Data Points */}
                {salesData.map((val, i) => (
                  <circle
                    key={`s-${i}`}
                    cx={(i * 100) / 9}
                    cy={100 - (val / 180) * 100}
                    r="1.5"
                    fill="white"
                    stroke="#f95b07"
                    strokeWidth="1"
                    className="chart-point"
                  />
                ))}
              </svg>

              {/* Labels */}
              <div className="absolute inset-x-0 -bottom-10 flex justify-between text-[10px] font-black text-gray-500">
                {['JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB', 'MAR'].map(m => <span key={m}>{m}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center bg-dark-bg px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none">
            Get Immediate Help <br className="hidden md:block" />
            <span className="heading-gradient underline decoration-primary-500/20 decoration-8 underline-offset-[20px]">From Amazon Experts</span>
          </h2>
          <p className="text-xl text-gray-400 mb-14 max-w-2xl mx-auto font-medium leading-relaxed">
            Not sure how to grow your account? Figure out about Amazon? Our Experts are ready to help you with the
            right strategy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-12 py-6 rounded-2xl text-xl font-black transition-all shadow-2xl shadow-primary-500/30 hover:scale-105 active:scale-95 group">
              <a href="https://www.linkedin.com/in/amitkushwaha12">Start Your Free Audit</a>
              <ArrowRightCircle className="inline-block ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-12 py-6 rounded-2xl text-xl font-black transition-all hover:scale-105 active:scale-95">
              <a href="https://calendly.com/amitkushwaha/new-meeting">Book a Strategy Call</a>
            </button>
          </div>
        </div>
      </section>

      {/* Success Network */}
      {/* <section className="py-24 border-t border-white/5 px-6 bg-dark-surface/50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex flex-wrap justify-center -space-x-4 mb-8">
            {[1, 2, 3, 4, 5].map(i => (
              <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-16 h-16 rounded-full border-4 border-dark-bg shadow-xl" alt="client" />
            ))}
            <div className="w-16 h-16 rounded-full bg-primary-500 border-4 border-dark-bg flex items-center justify-center text-xs font-black text-white">+200</div>
          </div>
          <h5 className="text-2xl font-black text-white mb-8">Join our success network of 200+ multi-million dollar brands</h5>
          <div className="flex flex-col sm:flex-row gap-3 p-4 bg-white/5 rounded-[32px] border border-white/10">
            <input type="email" placeholder="Your Email Address" className="flex-1 px-8 py-5 rounded-2xl bg-transparent focus:outline-none text-white font-medium" />
            <button className="bg-white text-dark-bg px-12 py-5 rounded-2xl font-black hover:bg-primary-400 transition-colors uppercase text-sm tracking-widest">Get Started</button>
          </div>
          <p className="text-[10px] text-gray-500 mt-6 uppercase tracking-widest font-bold">Privacy policy applies. No spam, just pure Amazon alpha.</p>
        </div>
      </section> */}
    </div>
  );
};

export default StampHubCaseStudy;
