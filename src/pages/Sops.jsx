import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Users, ClipboardCheck, ShieldAlert, BookOpen, Clock,
  Lock, Tag, FileCheck, CheckCircle2, XCircle, ArrowRight
} from 'lucide-react';
import sopImg from '../assets/sop.png';

gsap.registerPlugin(ScrollTrigger);

const productCards = [
  {
    title: 'Amazon Brand Management SOPs',
    desc: 'Manage your Amazon business in house faster, with fewer mistakes, and higher margins.',
    img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: '7-Figure Scaling Academy',
    desc: 'Launch, expand, and build your own 7 or 8 figure brand consistently & rapidly on Amazon.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Brand Strategist Playbook',
    desc: 'Grow on Amazon based on our proven systems generating reliable business frameworks.',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Amazon seller mastercourses',
    desc: 'Learn how to sell on Amazon, manage a Seller Central account, or master the inventory flow.',
    img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop'
  }
];

const confidenceGrid = [
  { icon: Users, title: 'Empower your team', desc: 'SOPs empower employees to work independently while fostering teamwork and knowledge sharing.' },
  { icon: ClipboardCheck, title: 'Order and accuracy', desc: 'Clear and detailed ad guidelines reduce mistakes, improve efficiency, and prevent operational missteps.' },
  { icon: ShieldAlert, title: 'Professional service', desc: 'Standardized procedures reflect professionalism which guarantees consistent, high-quality service to clients.' },
  { icon: BookOpen, title: 'Accelerate training', desc: 'SOPs make onboarding new employees easier and more efficient.' },
  { icon: Clock, title: 'Time and efficiency', desc: 'SOPs eliminate the need to re-evaluate processes, help businesses save time.' },
  { icon: Lock, title: 'Information security', desc: 'Clearly defined processes safe-guard confidential data and safeguard business.' },
  { icon: Tag, title: 'Brand strength', desc: 'SOPs help maintain brand consistency and reliability across all listings and media.' },
  { icon: FileCheck, title: 'Legal compliance', desc: 'SOPs help operations to hit local regulations and antitrust limits.' }
];

const blueprintGood = [
  'Expertise and experience: Developed by experts with years of experience and constantly improved the process.',
  'Time saving: Easily integrate successful strategies without the trial and attempt... not to mention money wasted.',
  'Proven success: Used to grow agencies to millions, illustrating a proven connector and the launch rate promise.',
  'Consistency and quality: Ensure consistency in our operations, maintain high standards, and reliably identify actions.'
];

const blueprintBad = [
  'Time Consuming: Due to a lengthly process you might pass a mis-step from setup to launch activities.',
  'Inconsistent metrics: Un-countable operational missteps related to data inputs leading to deranged timelines.',
  'Lack of expertise: Potentially missing critical elements of Amazon compliance.'
];

const Sops = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      // Hero Elements
      gsap.fromTo('.anim-up',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
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
        { opacity: 0, scale: 0.95, y: 20 },
        {
          opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.05, ease: 'power2.out',
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
    <div className="min-h-screen bg-black text-white selection:bg-yellow-500/30 overflow-x-hidden pt-32 pb-20 mt-10">

      {/* ─── HERO INTRO ─── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="text-center max-w-4xl mx-auto mb-16 relative z-10">
          <h1 className="anim-up text-5xl md:text-7xl font-bold leading-tight text-white mb-6">
            Sellorix <span className="text-yellow-500">SOPs</span>
          </h1>
          <p className="anim-up text-gray-400 text-lg md:text-xl leading-relaxed">
            Whether you're an Amazon brand running headless in a low-margin category, our guides and SOPs can provide the knowledge and procedures to make smarter decisions and avoid mistakes.
          </p>
        </div>

        {/* SOP Full Width Image Section */}
        <div className="anim-up relative group">
          <div className="absolute inset-0 bg-yellow-500/5 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative bg-white/[0.03] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 hover:border-yellow-500/30">
            <img
              src={sopImg}
              alt="Amazon Brand Management SOPs"
              className="w-full h-auto object-cover transition-transform duration-1000 hover:scale-[1.02]"
            />
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ─── CONFIDENCE GRID ─── */}

      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32 bg-white/[0.01] border-y border-white/5 py-24">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Manage Your Business with <span className="text-yellow-500">Confidence</span></h2>
          <p className="text-gray-400 text-lg">
            Comprehensive, master frameworks empower you with knowledge. Give your team the exact blueprints they need to execute flawlessly and hit their goals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 grid-stagger-container">
          {confidenceGrid.map((c, i) => (
            <div key={i} className="grid-stagger-card bg-[#0E121E] border border-white/10 rounded-2xl p-6 hover:border-yellow-500/50 hover:bg-white/[0.02] transition-colors flex flex-col items-start shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-transparent flex items-center justify-center mb-5 border border-yellow-500/20 shadow-inner">
                <c.icon className="w-6 h-6 text-yellow-500" />
              </div>
              <h4 className="text-lg font-bold text-white mb-3 leading-snug">{c.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── YOUR BUSINESS BLUEPRINT (SPLIT) ─── */}

      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32 scroll-fade-up">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-center">Your Business <span className="text-yellow-500">Blueprint</span></h2>
        <p className="text-gray-400 text-lg text-center max-w-3xl mx-auto mb-16">
          SOPs provide fundamental training material across the intricacies of standard procedures so your business can systematically map out an accurate track record, proven to be effective.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch pt-8">
          {/* Good Side */}
          <div className="bg-gradient-to-b from-[#0E121E] to-black border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl flex flex-col gap-6">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-[80px]" />

            <div className="bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-lg text-green-400 font-bold uppercase tracking-widest text-xs w-fit mb-4">
              Sellorix SOPs
            </div>

            <ul className="flex flex-col gap-6 relative z-10 h-full">
              {blueprintGood.map((t, i) => {
                const [bold, rest] = t.split(': ');
                return (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-green-400" />
                    </div>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      <strong className="text-white font-bold">{bold}:</strong> {rest}
                    </p>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Bad Side */}
          <div className="bg-gradient-to-b from-[#120E0E] to-black border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl flex flex-col gap-6">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-[80px]" />

            <div className="bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-lg text-red-400 font-bold uppercase tracking-widest text-xs w-fit mb-4">
              Missing SOPs leave you at a loss
            </div>

            <ul className="flex flex-col gap-6 relative z-10 h-full">
              {blueprintBad.map((t, i) => {
                const [bold, rest] = t.split(': ');
                return (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <XCircle className="w-6 h-6 text-red-400" />
                    </div>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                      <strong className="text-white/80 font-bold">{bold}:</strong> {rest}
                    </p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── ENHANCE YOUR BUSINESS WITH SOPS (FINAL CTA) ─── */}
      <section className="bg-white/[0.015] border-t border-white/5 py-32 scroll-fade-up">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Enhance Your Business With <span className="text-yellow-500">SOPs</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto font-medium">
            Enhance your internal workforce setup potential with the right frameworks and protocols up front to systematically gain an edge over missing gaps in your systems.
          </p>

          <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-black px-12 py-4 rounded-full transition-transform hover:scale-105 shadow-2xl shadow-yellow-500/20 active:scale-95 text-xl tracking-tight">
            <a href="https://www.linkedin.com/in/amitkushwaha12/">Contact us for more details</a>
          </button>
        </div>
      </section>

    </div>
  );
};

export default Sops;
