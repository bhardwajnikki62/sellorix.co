import React, { useEffect } from 'react';
import About from '../components/About';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-dark-bg">
      <About />

      {/* Additional Page Content */}
      <section className="py-20 px-6 md:px-12 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-primary-400">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To rescue brands from the PPC nightmare using battle-tested strategies. We transform Amazon accounts into high-growth assets by applying the exact roadmap that scaled my own brand to $1.5M.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-primary-400">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To be the global benchmark for Amazon profitability and sustainable brand growth. We envision a marketplace where every seller we partner with owns the algorithm instead of being managed by it.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-primary-400">Our Values</h3>
              <p className="text-gray-400 leading-relaxed">
                Profit First & Absolute Transparency. We treat your capital like our own, delivering measurable results through honest, data-driven strategies that prioritize your bottom line over vanity metrics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
