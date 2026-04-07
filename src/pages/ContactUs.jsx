import React, { useEffect } from 'react';
import Contact from '../components/Contact';
import AnimatedMap from '../components/AnimatedMap';

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-dark-bg">
      <Contact />



      {/* FAQ or Additional Contact Info */}
      <section className="py-20 px-6 md:px-12 bg-gray-900/30">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-yellow-400">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-white">How do you lower ACOS and improve ROAS for my Amazon campaigns?</h3>
              <p className="text-gray-400">We use a data-driven approach that includes smart bid adjustments, negative keyword pruning, campaign segmentation, and continuous performance tracking. By identifying what's draining your budget and doubling down on what converts, We've consistently helped brands reduce wasted spend and achieve a significantly higher return on every dollar invested.</p>
            </div>
            <div className="p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-white">Can you manage my entire Amazon account, not just ads?</h3>
              <p className="text-gray-400">Absolutely. We offer full A to Z Amazon account management, which includes product hunting & listing creation and optimization, inventory monitoring, SEO, competitor analysis, review management, A+ content, Brand Store and Brand Story creation and of course PPC campaigns. Think of me as your dedicated Amazon growth partner, not just an ads manager.</p>
            </div>
            <div className="p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-white">How do you help with new product launches on Amazon?</h3>
              <p className="text-gray-400">A successful product launch requires the right foundation. I handle keyword research, listing optimization, launch PPC strategy, and competitor positioning before your product even goes live. Our goal is to generate early sales velocity and reviews that push your product up the rankings from day one.</p>
            </div>
            <div className="p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-white">What results have you achieved for other brands?</h3>
              <p className="text-gray-400">we've worked with 30+ brands across various categories, helping them convert over $1 million in ad spend into $5 million+ in total sales revenue. Every brand I've worked with has seen measurable improvements in 20 % ACOS on average and organic ranking.</p>
            </div>
            <div className="p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-white">What is your pricing?</h3>
              <p className="text-gray-400">We’ve seen too many agencies/VA/Experts charge high fees while the account bleeds. That’s not me. Our structure is built around performance, if you don’t grow, neither do we. And before you commit, we prove it with a diagnostic so you can see the levers we’d pull and the kind of lift to expect.</p>
            </div>
            <div className="p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-white">Do you require long-term contracts?</h3>
              <p className="text-gray-400">No. We’ve seen too many agencies hide behind 12-month contracts while the account bleeds, that’s not me. Clients stay for years because we hit their goals, not because we locked them in.</p>
            </div>
            <div className="p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3 text-white">What size brands do you typically work with?</h3>
              <p className="text-gray-400">We partner with growth-focused and new brands spending from the mid five figures up to $1M+ a month on ads. That includes fast-scaling 8-figure sellers and established global names expanding into new markets. </p>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Map Section */}
      <AnimatedMap />
    </div>
  );
};

export default ContactUs;
