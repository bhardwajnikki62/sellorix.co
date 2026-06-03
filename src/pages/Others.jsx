import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Account from '../assets/account.jpeg'
import Compliance from '../assets/compliance.jpeg'
import FBA from '../assets/fba.jpeg'
import Storage from '../assets/storage.jpeg'
import Returns from '../assets/return.jpeg'
import Tax from '../assets/taxes and vat.jpeg'
import Shipping from '../assets/shipping.jpeg'
import Sustainability from '../assets/suatainability.jpeg'
import Property from '../assets/property.jpeg'
import Training from '../assets/training.jpeg'
import {
  ArrowRight, UserStar, ShoppingBag, Globe, ShieldCheck, DollarSign,
  Layers, CheckCircle2, ChevronDown, Sparkles, Award, HelpCircle, BoxIcon, TruckIcon, SunIcon, WineIcon, NotebookIcon
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const extraServices = [
  {
    icon: UserStar,
    title: 'Amazon Accounting Services',
    desc: 'We help Amazon sellers manage and optimize the financial side of their business through accurate accounting reconciliation, profitability tracking, and operational financial reporting. Our Amazon-focused accounting services are designed to help brands maintain financial clarity, improve cash flow visibility, and understand real profitability beyond revenue numbers.',
    bullets: [
      'Amazon Payment Reconciliation',
      'Profit & Loss (P&L) Reporting',
      'Product-Level Profitability Analysis',
      'Amazon Fee Analysis & Verification'
    ],
    img: Account,
    objectFit: 'contain',
    color: 'from-orange-500/20 to-red-500/20',
    iconColor: 'text-orange-400',
    borderColor: 'group-hover:border-orange-500/50'
  },
  {
    icon: ShoppingBag,
    title: 'Amazon Compliance Services',
    desc: 'We help Amazon sellers maintain account, listing, and product compliance by supporting operational policies, documentation readiness, and marketplace standards across multiple Amazon marketplaces. Our compliance services are designed to help brands reduce listing suppressions, account risks, policy violations, and operational disruptions that can affect sales performance and account health.',
    bullets: [
      'Account Health Monitoring & Support ',
      'Listing Policy Compliance Review ',
      'Product Documentation Verification Support',
      'Restricted Product Compliance Guidance'
    ],
    img: Compliance,
    color: 'from-pink-500/20 to-rose-500/20',
    iconColor: 'text-pink-400',
    borderColor: 'group-hover:border-pink-500/50'
  },
  {
    icon: Globe,
    title: 'Amazon FBA Preparation Services',
    desc: 'We help Amazon sellers prepare products according to Amazon FBA requirements to ensure smooth inventory processing, faster receiving, reduced operational issues, and compliant fulfillment workflows.Our FBA preparation services are designed to support brands with inventory handling, labeling, packaging, shipment preparation, and operational coordination for Amazon fulfillment centers.',
    bullets: [
      'FNSKU Labeling & Barcode Preparation',
      'Product Packaging & Poly Bagging',
      'Bundling & Kitting Services',
      'Amazon Shipment Preparation'
    ],
    img: FBA,
    color: 'from-blue-500/20 to-indigo-500/20',
    iconColor: 'text-blue-400',
    borderColor: 'group-hover:border-blue-500/50'
  },
  {
    icon: BoxIcon,
    title: 'Amazon Storage & Warehousing Services',
    desc: 'We help Amazon sellers manage inventory storage, warehousing operations, and stock flow coordination to support stable fulfillment performance, replenishment efficiency, and long-term inventory scalability. Our storage and warehousing services are designed to help brands reduce stockout risks, improve inventory organization, and maintain operational readiness for Amazon FBA and AWD workflows.',
    bullets: [
      'Inventory Storage & Warehousing ',
      'FBA Overflow Storage Management ',
      'Amazon AWD Inventory Coordination ',
      'Inventory Organization & SKU Management '
    ],
    img: Storage,
    color: 'from-emerald-500/20 to-teal-500/20',
    iconColor: 'text-emerald-400',
    borderColor: 'group-hover:border-emerald-500/50'
  },
  {
    icon: DollarSign,
    title: 'International Returns Services',
    desc: 'We help Amazon sellers manage international product returns, reverse logistics, and cross-border inventory handling to reduce operational losses, improve customer experience, and maintain smoother global marketplace operations.Our international returns services are designed to support brands selling across multiple Amazon marketplaces by handling return coordination, inspection workflows, inventory recovery, and operational return management.',
    bullets: [
      'International Return Processing Support ',
      'Cross-Border Return Coordination ',
      'Returned Inventory Inspection & Evaluation ',
      'Return Label & Shipment Coordination'
    ],
    img: Returns,
    color: 'from-yellow-500/20 to-amber-500/20',
    iconColor: 'text-yellow-400',
    borderColor: 'group-hover:border-yellow-500/50'
  },
  {
    icon: Layers,
    title: 'Amazon Tax Services',
    desc: 'We help Amazon sellers manage tax-related documentation, marketplace tax workflows, VAT coordination, and financial compliance support across multiple Amazon marketplaces. Our tax services are designed to help brands maintain organized financial records, support marketplace compliance requirements, and simplify tax-related operational processes for global Amazon selling.',
    bullets: [
      'VAT Registration Support Coordination ',
      'Sales Tax Documentation Support ',
      'Amazon Marketplace Tax Reporting ',
      'VAT Filing Preparation Assistance '
    ],
    img: Tax,
    color: 'from-purple-500/20 to-violet-500/20',
    iconColor: 'text-purple-400',
    borderColor: 'group-hover:border-purple-500/50'
  },
  {
    icon: TruckIcon,
    title: 'International Shipping',
    desc: 'We help Amazon sellers manage international shipping operations, cross-border logistics, and global inventory movement to support smooth marketplace expansion and reliable fulfillment performance across multiple countries.Our international shipping services are designed to help brands improve shipment coordination, reduce logistics delays, and maintain efficient product movement between suppliers, warehouses, fulfillment centers, and Amazon marketplaces worldwide.',
    bullets: [
      'VAT Registration Support Coordination ',
      'Sales Tax Documentation Support ',
      'Amazon Marketplace Tax Reporting ',
      'VAT Filing Preparation Assistance '
    ],
    img: Shipping,
    color: 'from-purple-500/20 to-violet-500/20',
    iconColor: 'text-purple-400',
    borderColor: 'group-hover:border-purple-500/50'
  },
  {
    icon: SunIcon,
    title: 'Amazon Sustainability Services',
    desc: 'We help Amazon sellers improve operational sustainability, packaging efficiency, inventory management practices, and environmentally responsible workflows aligned with modern eCommerce and marketplace expectations.Our sustainability services are designed to support brands looking to optimize packaging, reduce operational waste, improve supply chain efficiency, and build more responsible long-term Amazon business operations.',
    bullets: [
      'Sustainable Packaging Optimization  ',
      'Eco-Friendly Product Packaging Support  ',
      'Packaging Waste Reduction Strategies  ',
      'Inventory Waste & Overstock Reduction '
    ],
    img: Sustainability,
    color: 'from-purple-500/20 to-violet-500/20',
    iconColor: 'text-purple-400',
    borderColor: 'group-hover:border-purple-500/50'
  },
  {
    icon: WineIcon,
    title: 'Intellectual Property & Brand Protection Services',
    desc: 'We help Amazon sellers protect their brands, listings, product assets, and marketplace presence through operational brand protection support, intellectual property monitoring, and compliance-focused risk management services.Our IP and brand protection services are designed to help brands reduce listing hijacking, counterfeit risks, unauthorized seller activity, trademark-related conflicts, and marketplace abuse affecting brand growth and customer trust.',
    bullets: [
      'Amazon Brand Registry Support',
      'Trademark Monitoring & Protection Support',
      'Packaging Waste Reduction Strategies',
      'Counterfeit Risk Monitoring & Reporting '
    ],
    img: Property,
    color: 'from-purple-500/20 to-violet-500/20',
    iconColor: 'text-purple-400',
    borderColor: 'group-hover:border-purple-500/50'
  },
  {
    icon: NotebookIcon,
    title: 'Amazon Training Services',
    desc: 'We help Amazon sellers, teams, and growing brands improve operational knowledge, marketplace understanding, and internal team performance through structured Amazon-focused training and educational support services.Our training services are designed to help businesses improve decision-making, operational workflows, advertising understanding, inventory management, and marketplace growth strategies across Amazon ecosystems.',
    bullets: [
      'Amazon PPC Training',
      'Seller Central Operations Training',
      'Amazon Listing Optimization Training',
      'Inventory & AWD Management Training '
    ],
    img: Training,
    color: 'from-purple-500/20 to-violet-500/20',
    iconColor: 'text-purple-400',
    borderColor: 'group-hover:border-purple-500/50'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Audit & Diagnose',
    desc: 'We analyze your current creative assets, international feasibility, or catalog structure to find immediate areas of waste or opportunity.'
  },
  {
    step: '02',
    title: 'Iterative Drafting',
    desc: 'Our design and localization teams build high-fidelity wireframes, premium photography concepts, or translation maps for your review.'
  },
  {
    step: '03',
    title: 'Compliance & Launch',
    desc: 'We deploy localized listings, custom storefront layouts, or variation updates securely via Amazon Seller Central flat files.'
  },
  {
    step: '04',
    title: 'Ongoing Defense',
    desc: 'We monitor listing health, track buy-box hijacking, and continuously search for reimbursement opportunities month after month.'
  }
];

const faqs = [
  {
    q: 'How does the FBA Reimbursement process work?',
    a: 'Amazon allows sellers to review discrepancies in inventory records up to 18 months in the past. We use customized, thorough audit workflows to cross-reference your shipments, returns, and inventory logs. Once a discrepancy is validated, we submit manual cases safely and in full compliance with Amazon Policies. The recovered funds are paid directly into your Seller Central account.'
  },
  {
    q: 'Do you use automated translation services for international listings?',
    a: 'No. Automated translation software (like Google Translate or DeepL) misses critical search colloquialisms and local formatting. We utilize native speakers with extensive e-commerce experience to translate and localize your content. They perform localized keyword research to make sure your listings rank for how customers in Germany, France, or Japan actually search.'
  },
  {
    q: 'How long does a Custom Storefront and A+ Content redesign take?',
    a: 'Typically, a full graphic creative redesign (including storefront wireframing, brand story design, and custom A+ layouts) takes between 2 to 4 weeks depending on the number of products. We collaborate with you at every draft to ensure the visuals align perfectly with your brand identity.'
  },
  {
    q: 'Are your catalog updates flat-file compliant?',
    a: 'Absolutely. We specialize in using Amazon flat files (bulk upload spreadsheets) to correct listing titles, bullets, search terms, and parent-child variation families. This is the safest way to modify backend parameters without risking listing locks or breaking organic rank indexation.'
  }
];

const Others = () => {
  const [openFaq, setOpenFaq] = useState(0);

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

      // Pipeline staggering
      gsap.fromTo('.process-step',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: '.process-container', start: 'top 80%' }
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
    <div className="min-h-screen bg-black text-white selection:bg-indigo-500/30 overflow-x-hidden pt-32 pb-20">

      {/* ─── HERO ─── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32 relative text-center">
        {/* Glow meshes */}
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[-150px] right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="flex flex-col items-center gap-6 z-10 max-w-4xl mx-auto">
          <div className="anim-up inline-flex">
            <span className="bg-primary-500/10 border border-primary-500/20 text-primary-400 text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-primary-400" /> Specialty Scale Solutions
            </span>
          </div>
          <h1 className="anim-up text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            Specialized Services For <br />
            <span className="heading-gradient text-transparent bg-clip-text">
              High-Growth Brands
            </span>
          </h1>
          <p className="anim-up text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mt-2">
            Dominate every facet of the Amazon ecosystem. Beyond standard marketing, we build, protect, expand, and reclaim lost profits for 7-figure operations.
          </p>
          <div className="anim-up mt-6">
            <a
              href="https://www.linkedin.com/in/amitkushwaha12/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-500 hover:bg-primary-600 text-white font-bold px-10 py-4 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary-500/20 text-lg inline-flex items-center gap-2"
            >
              Discuss Your Project <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── SERVICES GRID ─── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8">
          {extraServices.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div
                key={idx}
                className="scroll-fade-up group bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.03] p-8 md:p-10 rounded-[2.5rem] transition-all duration-500 flex flex-col justify-between shadow-2xl relative overflow-hidden"
              >
                {/* Micro mesh glows in card */}
                <div className={`absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br ${service.color} blur-[60px] rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-700`} />

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-white/20 transition-all duration-500`}>
                    <IconComponent className={`w-7 h-7 ${service.iconColor}`} />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-base leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  <ul className="flex flex-col gap-3.5 mb-8">
                    {service.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 ${service.iconColor} flex-shrink-0 mt-0.5`} />
                        <span className="text-gray-300 text-sm md:text-base leading-relaxed font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative overflow-hidden mt-8 border-t border-white/5 bg-[#0a0a0c] -mx-8 -mb-8 md:-mx-10 md:-mb-10 rounded-b-[2.5rem]">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-auto block group-hover:scale-[1.03] transition-transform duration-[1.2s]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── PROCESS LIFECYCLE ─── */}
      {/* <section className="bg-white/[0.015] border-y border-white/5 py-24 mb-32 relative">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20 scroll-fade-up">
            <span className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-3 block">Execution Plan</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Seamless <span className="text-primary-300">Integration</span></h2>
            <p className="text-gray-400 text-lg">We deliver custom-tailored creative and operational outputs through a proven four-stage lifecycle.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 process-container">
            {processSteps.map((step, i) => (
              <div key={i} className="process-step bg-[#0E121E]/60 border border-white/5 hover:border-white/10 p-8 rounded-3xl flex flex-col h-full hover:bg-[#0E121E] transition-colors duration-300 relative group shadow-lg">
                <div className="text-5xl font-black text-white/5 group-hover:text-primary-400/10 transition-colors duration-300 mb-5 leading-none">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ─── BOTTOM CTA ─── */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 mb-32 scroll-fade-up">
        <div className="bg-gradient-to-r from-primary-500 to-indigo-600 rounded-3xl p-1 overflow-hidden shadow-2xl">
          <div className="bg-[#050505] rounded-[1.3rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="z-10 max-w-xl text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Ready to Scale <br />
                <span className="heading-gradient text-transparent bg-clip-text">Beyond PPC?</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg mb-0 leading-relaxed">
                Connect with Amit Kushwaha for custom-designed assets, brand protection support, and global localization campaigns.
              </p>
            </div>

            <div className="z-10 flex-shrink-0">
              <a
                href="https://www.linkedin.com/in/amitkushwaha12/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-500 hover:bg-primary-400 text-white font-black px-8 py-4.5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary-500/20 text-sm uppercase tracking-widest inline-block"
              >
                Let's Partner
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      {/* <section className="py-24 max-w-4xl mx-auto px-6 scroll-fade-up border-t border-white/5">
        <div className="flex flex-col items-center gap-4 mb-16 text-center">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
            <HelpCircle className="w-6 h-6 text-primary-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked <span className="text-primary-300">Questions</span></h2>
          <p className="text-gray-400 max-w-md font-medium">Everything you need to know about our specialty and brand-protection services.</p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'bg-white/[0.04] border-primary-500/30' : 'bg-white/[0.015] hover:bg-white/[0.03]'}`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-white outline-none cursor-pointer"
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              >
                <span className="text-lg pr-4 font-semibold">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 flex-shrink-0 text-primary-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-4 font-medium">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

    </div>
  );
};

export default Others;
