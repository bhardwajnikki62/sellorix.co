import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote, Play, Building2, Users, TrendingUp } from 'lucide-react';

// Import testimonial images
import markImg from '../assets/Mark C.jpeg';
import jamesrImg from '../assets/JameSR.jpeg';
import noahImg from '../assets/Noah Davis.jpeg';
import oliviaImg from '../assets/Olivia Roy.jpeg';
import danielImg from '../assets/Daniel Harris.webp';
import jamesThomasImg from '../assets/James Thomas.avif';
import sophiaWilsonImg from '../assets/Sophia Wilson.jpeg';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: 'Mark C.',
    role: 'CEO',
    company: 'Vicwe',
    image: markImg,
    quote: 'US Private Label Seller',
    desc: 'Amit transformed our Amazon PPC campaigns in 2 weeks. Ad spend down 30%, sales up 50% in weeks. Data-driven pr0, highly recommend!',
    companyLogo: 'Vicwe'
  },
  {
    id: 2,
    name: 'James R',
    role: 'Founder',
    company: 'Vetpro Complete',
    image: jamesrImg,
    quote: ' UK Brand Owner',
    desc: 'Full account management magic! Amit handled everything from audits to scaling. Our revenue doubled without the headaches. Trustworthy partner.',
    companyLogo: 'Chinook Seedery'
  },
  {
    id: 3,
    name: 'Noah Davis',
    role: 'Managing Director',
    company: 'SEAMOON',
    image: noahImg,
    quote: 'US E-com Startup',
    desc: "Inventory planning saved us from stockouts and overstock disasters Amit's forecasts are spot-on, keeping cash flow smooth.",
    companyLogo: 'Sellorix'
  },
  {
    id: 4,
    name: 'Olivia Roy',
    role: 'Founder',
    company: 'CONTEMPA',
    image: oliviaImg,
    quote: 'UK Based Seller',
    desc: "Amit fixed our high-spend PPC mess sales rose 60% with lower costs. Honest, results-focused pro we trust.",
    companyLogo: 'Sellorix'
  },
  {
    id: 5,
    name: 'Sara Harris',
    role: 'CEO',
    company: 'OCHEAL',
    image: sophiaWilsonImg,
    quote: 'Australia Supplement Brand Owner',
    desc: "Listing optimization + A+ content boosted conversions 40%. Our pages now convert like crazy, professional, fast results every time.",
    companyLogo: 'Sellorix'
  },
  {
    id: 6,
    name: 'James Thomas',
    role: 'CEO',
    company: 'KARAMD',
    image: jamesThomasImg,
    quote: 'Canada Private seller',
    desc: "CRO expertise turned our low-traffic listings into winners. Click-throughs and buys skyrocketed. Honest advice, no fluff.",
    companyLogo: 'Sellorix'
  }
];

const stats = [
  { label: 'Brands currently managed', value: '40+', icon: <Building2 className="w-6 h-6" /> },
  { label: 'Revenue generated on Amazon', value: '$10M+', icon: <TrendingUp className="w-6 h-6" /> },
  { label: 'Total Ads Spend', value: '3M+', icon: <Users className="w-6 h-6" /> }
];
const Testimonials = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Delay slightly so layout is settled before GSAP reads positions
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Trust bar animation
        // immediateRender: false — elements stay VISIBLE until the trigger fires
        gsap.from('.trust-item', {
          scrollTrigger: {
            trigger: '.trust-bar',
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          immediateRender: false,
        });

        // All 3 cards — critical fix: immediateRender:false prevents cards from
        // starting at opacity:0 and getting stuck (especially the 3rd card)
        gsap.from('.testimonial-card', {
          scrollTrigger: {
            trigger: '.testimonial-grid',
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
          y: 40,
          opacity: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          immediateRender: false,
        });

        // Stats animation
        gsap.from('.stat-item', {
          scrollTrigger: {
            trigger: '.stats-banner',
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
          scale: 0.9,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.7)',
          immediateRender: false,
        });

        ScrollTrigger.refresh();
      }, sectionRef);

      return () => ctx.revert();
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Trust Bar */}
      {/* <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="trust-bar flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80 border-b border-white/5 pb-12">
          <div className="trust-item flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-6 h-6 text-[#00b67a] fill-[#00b67a]" />
              <span className="text-2xl font-bold">Trustpilot</span>
            </div>
            <div className="flex gap-1 mb-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 text-[#00b67a] fill-[#00b67a]" />
              ))}
            </div>
            <span className="text-sm text-gray-400">4.5 Stars | 443 Reviews</span>
          </div>

          <div className="trust-item flex flex-col items-center">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex font-bold text-2xl">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </div>
            </div>
            <div className="flex gap-1 mb-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 text-[#FBBC05] fill-[#FBBC05]" />
              ))}
            </div>
            <span className="text-sm text-gray-400">4.6 Stars | 133 Reviews</span>
          </div>
        </div>
      </div> */}

      {/* Testimonial Grid */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="testimonial-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card flex flex-col h-full bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all group">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-primary-500/90 flex items-center justify-center backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-transform">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary-500 fill-primary-500/20 mb-4" />
                  <h4 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors">"{t.quote}"</h4>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {t.desc}
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-white/5">
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-sm text-primary-500">{t.role} from <span className="underline decoration-primary-500/30">{t.company}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Results Banner */}
      <div className="stats-banner relative py-20 px-6">
        <div className="absolute inset-0 bg-[#000] origin-bottom scale-y-100" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />

        {/* Curved Divider effect */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-dark-bg" />

        <div className="max-w-7xl mx-auto relative z-10 text-center text-white">
          <div className="mb-12">
            <h3 className="text-4xl md:text-5xl font-black mb-4 text-yellow-400">It's All About Results</h3>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              Our success is directly tied to the growth and expansion of our amazing clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-item p-6 md:px-12">
                <div className="text-5xl md:text-6xl font-black mb-4 tracking-tighter tabular-nums drop-shadow-lg">
                  {stat.value}
                </div>
                <div className="text-sm font-bold uppercase tracking-widest text-white/90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pointed down arrow effect */}
        <div className="" />
      </div>
    </section>
  );
};

export default Testimonials;
