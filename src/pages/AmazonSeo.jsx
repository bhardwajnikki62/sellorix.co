import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight, Search, TrendingUp, CheckCircle2, Check,
  MousePointer2, Target, ClipboardList, Eye, PlayCircle, Star,
  ChevronDown, Image as ImageIcon, MessageSquareQuote
} from 'lucide-react';

import seoImg from '../assets/new_seo2.jpeg';
import seoOptImg from '../assets/seo_opt.png';

gsap.registerPlugin(ScrollTrigger);

const phasesSecondary = [
  {
    phase: 'SEO Phase 2',
    title: 'Incremental indexing',
    desc: 'Our data-driven strategies index your listings for thousands of profitable keywords.',
    bullets: [
      'We identify and target backend keywords to expand your index effectively.',
      'Our team crafts perfect, keyword-rich generic bullet points and descriptions to capture broader intent search terms.',
    ],
    status: 'In progress (20% Paused)'
  },
  {
    phase: 'SEO Phase 3',
    title: 'Strike zone keywords',
    desc: 'Target the high-volume, low-competition keywords hovering just below page 1 to win rank effortlessly.',
    bullets: [
      'Analyze search algorithms to push keywords to page one ranking.',
      'A holistic cycle of continuous bidding optimizations and keyword testing.',
      'Extensively monitor and adapt strategies based on competitors\' movements.',
    ],
    status: 'Completed (100% Passed)'
  },
  {
    phase: 'SEO Phase 4',
    title: 'Search query report',
    desc: 'This is the Holy Grail. We dive deep into brand analytics to access raw Amazon data detailing the funnel conversion metrics of specific search terms.',
    bullets: [
      'Pinpoint where customers drop off in the funnel.',
      'Track impressions, clicks, adds to cart, and purchases down to the exact keyword.',
    ],
    status: 'Monitored 24/7 (Active)'
  }
];

const winOnAmazon = [
  { icon: MousePointer2, title: 'Click on the search results', desc: 'We systematically increase your CTR by A/B testing main images, perfecting titles, and securing the Prime badge.' },
  { icon: Target, title: 'Optimized the conversion rate', desc: 'From premium A+ content to lifestyle imagery, we optimize every pixel to ensure browsers convert into buyers.' },
  { icon: ClipboardList, title: 'Earn related review scores', desc: 'Positive reviews fuel the algorithm. Our strategies help you acquire related, high-quality reviews ethically.' },
  { icon: Eye, title: 'Winning placement strategy', desc: 'We secure top-of-search placements for "Halo Effect" keywords that cascade organic ranking across your catalog.' }
];

const videoTutorials = [
  { title: "Amazon SEO Phase 1: Search terms", thumb: "from-blue-500/20 to-blue-900/40", len: "12:45" },
  { title: "SEO Incremental indexing", thumb: "from-green-500/20 to-green-900/40", len: "08:30" },
  { title: "Amazon SEO Phase 3: Strike Zone", thumb: "from-orange-500/20 to-orange-900/40", len: "15:20" },
  { title: "Amazon SEO Phase 4: Query Report", thumb: "from-purple-500/20 to-purple-900/40", len: "11:10" }
];

const faqs = [
  { q: "Why did my organic rankings drop even though sales are steady?", a: "Amazon's A10 algorithm now prioritizes Market Share and Relative Conversion Rate over raw volume. I analyze your niche performance to reclaim lost visibility from aggressive competitors." },
  { q: "Can you fix a Shadow-banned or suppressed listing without losing reviews?", a: "Yes, we identify the specific keyword trigger or backend error causing the suppression. We use flat-file updates to restore your ranking while protecting your existing sales history." },
  { q: "Do you guarantee page 1 rankings?", a: "We guarantee the execution of a proven, data-driven optimization strategy. While no agency can ethically guarantee exact placements due to algorithm volatility and competitor actions, our track record shows consistent, massive ranking improvements for our clients." },
  { q: "How do you optimize my brand for Amazon’s Rufus AI search?", a: "We focus on Semantic Search and natural language patterns rather than just keyword stuffing. This ensures your product is the top recommendation when AI answers conversational customer queries." },
  { q: "Why is my conversion rate low despite ranking on Page 1?", a: "Ranking gets you the click, but Retail Readiness gets you the sale We audit your A+ Content and Bullet Points to ensure they trigger the specific buying habits of shoppers." },
  { q: "Should we target high-volume keywords or niche long-tail terms first?", a: "We use a Bottom-Up strategy, dominating niche terms first to build organic authority. This creates a halo effect that makes ranking for massive, high-competition keywords much cheaper and faster." }
];

const AmazonSeo = () => {
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
            Amazon <span className="text-yellow-500">SEO</span>
          </h1>
          <p className="anim-up text-gray-400 text-lg leading-relaxed max-w-lg">
            Amazon SEO is the ultimate growth lever. We optimize your listings to secure top placements for high-converting keywords, driving consistent, compounding organic revenue.
          </p>

          <ul className="anim-up flex flex-col gap-4 my-2">
            {[
              "Boost visibility across platforms",
              "Drive 2.3x more leads on average",
              "Target 1.5 million+ monthly search volume"
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 font-bold" />
                </div>
                <span className="text-gray-300 font-semibold">{text}</span>
              </li>
            ))}
          </ul>

          <p className="anim-up text-xs font-bold text-gray-500 uppercase tracking-widest mt-2">
            * Consistent algorithm monitoring & management strategy
          </p>

          <div className="anim-up mt-4 flex items-center gap-4">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-black px-10 py-4 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-yellow-500/20 text-lg">
              <a href="https://calendly.com/amitkushwaha/new-meeting">Get a free Audit</a>
            </button>
            <span className="text-sm font-bold text-orange-400 flex items-center gap-2 cursor-pointer hover:text-orange-300 transition-colors">
              <PlayCircle className="w-5 h-5" /> <a href="https://www.linkedin.com/in/amitkushwaha12/">Start the 90-day SEO growth map</a>
            </span>
          </div>
        </div>

        {/* Hero Visual Mockup */}
        <div className="anim-fade-in relative z-10 flex justify-center lg:justify-end">
          <div className="w-full max-w-[550px] bg-[#1A202E] rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <img
              src={seoImg}
              alt="Amazon SEO Optimization"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ─── PHASE 1 ─── */}
      <section className="bg-white/[0.015] border-y border-white/5 py-24 mb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div className="scroll-fade-up">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 block">SEO Phase 1</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Search term <span className="text-yellow-500">optimization</span></h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Get highest priority and highly relevant search ranking quickly. We establish your baseline indexing across Tier 1, 2, and 3 keywords, meticulously optimizing titles and backend search terms.
            </p>
            <ul className="flex flex-col gap-4 mb-8">
              {['Keep these keywords there', 'Stainless Steel Titanium Cutting Board', 'Diaper bag with changing station', 'E27 LED white warm bulb'].map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 font-bold" />
                  </div>
                  <span className="text-gray-300 font-semibold">{t}</span>
                </li>
              ))}
            </ul>
            <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-black px-8 py-3.5 rounded-full transition-all text-sm shadow-lg shadow-yellow-500/20">
              Core Search Term Confirmation
            </button>
          </div>

          <div className="scroll-fade-up relative">
            <div className="bg-[#0E121E] border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col gap-6">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Keyword Indexing Tracker</span>
                <span className="bg-green-500/10 text-green-400 text-[10px] font-black uppercase px-3 py-1 rounded-full">Active Monitoring</span>
              </div>
              <div className="space-y-4">
                {[
                  { kw: 'mens black running shoes', vol: '124K', rank: 3, up: true },
                  { kw: 'athletic sneakers', vol: '89K', rank: 7, up: true },
                  { kw: 'breathable runners', vol: '42K', rank: 11, up: false }
                ].map((k, i) => (
                  <div key={i} className="flex items-center justify-between bg-white/[0.02] border border-white/5 p-4 rounded-xl">
                    <div className="flex flex-col gap-1">
                      <span className="text-white font-bold">{k.kw}</span>
                      <span className="text-xs text-gray-500">Vol: {k.vol}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-400 font-bold"># {k.rank}</span>
                      {k.up ? <TrendingUp className="w-4 h-4 text-green-400" /> : <TrendingUp className="w-4 h-4 text-orange-400 rotate-180" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PHASES 2, 3, 4 GRID ─── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32 scroll-fade-up">
        <div className="grid md:grid-cols-3 gap-8">
          {phasesSecondary.map((p, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.04] transition-all flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-[40px] group-hover:bg-yellow-500/10 transition-colors" />

              <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">{p.phase}</span>
              <h3 className="text-xl font-bold text-white mb-4 leading-snug lg:h-12 flex items-center">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1 min-h-[60px]">{p.desc}</p>

              <ul className="flex flex-col gap-3 mb-8">
                {p.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-400 leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-bold text-gray-400 uppercase">Status Tracking</span>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider ${p.status.includes('Completed') ? 'text-green-400 bg-green-500/10' :
                  p.status.includes('Act') ? 'text-blue-400 bg-blue-500/10' :
                    'text-orange-400 bg-orange-500/10'
                  }`}>
                  {p.status}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <span className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">* Campaigns dynamically shifted due to changing market factors</span>
        </div>
      </section>

      {/* ─── WIN ON AMAZON (4 GRID) ─── */}

      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32 scroll-fade-up text-center">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Win on Amazon, Dominate <span className="text-yellow-500">Amazon SEO</span></h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
          Amazon SEO is an interconnected web of conversion and rank velocity metrics. We optimize the full funnel to guarantee your organic search rankings.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {winOnAmazon.map((w, i) => (
            <div key={i} className="bg-[#0E121E] border border-white/5 rounded-2xl p-6 group hover:border-yellow-500/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-yellow-500 text-gray-400 group-hover:text-black transition-colors duration-300">
                <w.icon className="w-6 h-6 border-white/10" />
              </div>
              <h4 className="text-lg font-bold text-white mb-3">{w.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── YELLOW BANNER CTA ─── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32 scroll-fade-up">
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-3xl p-8 md:p-12 grid lg:grid-cols-12 gap-8 items-center relative overflow-hidden shadow-2xl shadow-yellow-500/20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="lg:col-span-7 z-10 flex flex-col items-start gap-4">
            <h2 className="text-3xl font-black text-black leading-tight">Is your listing not shown in search results?</h2>
            <p className="text-black/80 font-semibold mb-2">We analyze indexing errors, algorithm shifts, and ranking suppressions to get you back on page one.</p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="bg-black text-white hover:bg-gray-900 font-bold px-8 py-3.5 rounded-full text-sm flex items-center gap-2 transition-transform hover:scale-105 shadow-xl">
                <Target className="w-4 h-4" /> <a href='https://calendly.com/amitkushwaha/new-meeting'>Book a free strategy session</a>
              </button>
              <span className="text-black font-black text-xs uppercase tracking-widest flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Get back on page 1
              </span>
            </div>
          </div>
          {/* Visual graphic on right */}
          <div className="lg:col-span-5 z-10 hidden lg:flex items-center justify-end">
            <img
              src={seoOptImg}
              alt="SEO Optimization"
              className="w-full h-auto max-h-[250px] object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ─── VIDEO TUTORIALS ─── */}
      {/* <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32 scroll-fade-up">
        <h2 className="text-3xl font-bold text-white mb-2">Amazon SEO <span className="text-yellow-500">tutorials</span></h2>
        <p className="text-gray-400 mb-10 text-lg">Detailed walkthroughs revealing exact tactics we use for an organic rank lift.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoTutorials.map((v, i) => (
            <div key={i} className="flex flex-col group cursor-pointer">
              <div className={`aspect-video rounded-xl bg-gradient-to-br ${v.thumb} flex items-center justify-center relative overflow-hidden mb-4 border border-white/10 group-hover:border-white/30 transition-all`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <PlayCircle className="w-12 h-12 text-white/50 group-hover:text-red-500 group-hover:scale-110 transition-all z-10" />
                <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-bold px-2 py-0.5 rounded z-10">{v.len}</span>
              </div>
              <h4 className="text-sm font-bold text-white leading-tight group-hover:text-yellow-400 transition-colors">{v.title}</h4>
            </div>
          ))}
        </div>
      </section> */}

      {/* ─── TESTIMONIALS ─── */}
      {/* <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32 scroll-fade-up">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { author: "DeContact - Owner of Power Pressure", text: "Incredible. The team worked miracles on a dead listing. Organic rank jumped from page 6 to top of page 1 for our main keyword in 45 days. Absolute lifeblood for our Amazon business." },
            { author: "Davies Cooling - Amazon Manager @ Temposhire", text: "We were skeptical about external SEO promises, but their indexing phase completely unlocked our backend hidden search terms. It feels like we doubled our catalog overnight just by fixing our titles and backend." }
          ].map((t, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 relative hover:bg-white/[0.04] transition-colors">
              <MessageSquareQuote className="absolute top-6 right-6 w-10 h-10 text-white/5" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-yellow-500 text-yellow-500" />)}
              </div>
              <h4 className="font-bold text-white mb-3 text-sm">{t.author}</h4>
              <p className="text-gray-400 text-sm leading-relaxed italic">"{t.text}"</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* ─── LARGE HERO CTA (SUNFLOWER EQUIVALENT) ─── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32 scroll-fade-up">
        <div className="rounded-3xl overflow-hidden grid lg:grid-cols-5 bg-[#0E121E] border border-white/5 shadow-2xl relative">
          <div className="lg:col-span-2 bg-yellow-500 p-10 md:p-14 flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-black text-black leading-tight mb-6">
              We do the heavy lifting so you can <span className="text-white drop-shadow-md">take it light and easy</span>
            </h2>
            <p className="text-black/80 font-bold mb-8">
              With our data generation, rest assured every base is covered.
            </p>
            <button className="bg-white text-black font-black uppercase text-xs tracking-widest px-8 py-4 rounded-full w-fit hover:bg-gray-100 transition-colors shadow-lg shadow-black/10">
              <a href='https://www.linkedin.com/in/amitkushwaha12/'>Request a free quote</a>
            </button>
            <p className="text-[10px] uppercase font-bold text-black/50 mt-8 tracking-widest flex items-center gap-1">
              <Target className="w-3 h-3" /> Get it right, early
            </p>
          </div>

          <div className="lg:col-span-3 min-h-[400px] relative bg-gradient-to-br from-gray-800 to-black overflow-hidden flex items-center justify-center p-12">
            {/* Decorative background image placeholder effect */}
            <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1595844730298-b960fad973d4?q=80&w=2600&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="relative z-10 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm border border-white/20">
                <ImageIcon className="w-8 h-8 text-white/50" />
              </div>
              <h3 className="text-3xl md:text-5xl font-serif text-white leading-tight italic max-w-lg mb-4">
                "We do what we do best, they take care of Amazon."
              </h3>
              <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">— Happy Brand Owner</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 max-w-4xl mx-auto px-6 scroll-fade-up border-t border-white/5">
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

    </div>
  );
};

export default AmazonSeo;
