import React from 'react'
import { Link } from 'react-router-dom'
import mainlogo from '../assets/main_logo1.png'
import { Linkedin, Facebook, Instagram, Youtube, Mail } from 'lucide-react'

// Custom TikTok Icon
const TikTokIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.03-2.85-.31-4.13-1.03-2.28-1.29-3.66-3.84-3.46-6.47.11-2.07 1.25-4.04 3.06-5.06 1.07-.61 2.32-.9 3.56-.81v4.32c-.51-.08-1.04-.08-1.54.04-.63.15-1.2.53-1.57 1.05-.59.83-.69 1.95-.23 2.87.35.73 1.05 1.3 1.84 1.42 1.48.24 2.9-.68 3.2-2.14.1-.47.11-1.12.11-1.6V0h3.11z" />
  </svg>
)

const Footer = () => {
  return (
    <footer className="w-full bg-dark-bg border-t border-white/5 pt-20 pb-12 px-6 md:px-12 relative z-10 overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
      {/* Decorative Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
        {/* Column 1: Logo and Branding */}
        <div className="flex flex-col">
          <Link to="/" className="text-3xl font-bold tracking-tighter flex items-center gap-2 mb-6 group">

            <span className="text-white hover:text-primary-400 transition-colors duration-300"><img src={mainlogo} alt="mainlogo" className='w-20 h-20' /></span>
          </Link>
          <p className="text-gray-400 max-w-xs leading-relaxed">
            Scaling brands with precision through data-driven strategy and e-commerce mastery. We transform complexity into growth.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-bold text-yellow-400 mb-6 tracking-tight">Quick Links</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/" className="hover:text-primary-400 transition-colors duration-300">Home</Link></li>
            <li><Link to="/services" className="hover:text-primary-400 transition-colors duration-300">Services</Link></li>
            <li><Link to="/case-studies" className="hover:text-primary-400 transition-colors duration-300">Case Studies</Link></li>
            <li><Link to="/about" className="hover:text-primary-400 transition-colors duration-300">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary-400 transition-colors duration-300">Contact </Link></li>
          </ul>
        </div>

        {/* Column 3: Growth Services */}
        <div>
          <h4 className="text-lg font-bold text-yellow-400 mb-6 tracking-tight">Growth Services</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/services/full-service-management" className="hover:text-primary-400 transition-colors duration-300">Amazon Global Expansion</Link></li>
            <li><Link to="/services/full-service-management" className="hover:text-primary-400 transition-colors duration-300">Brand Registry & Protection</Link></li>
            <li><Link to="/services/full-service-management" className="hover:text-primary-400 transition-colors duration-300">Conversion Rate Optimization (CRO)</Link></li>
            <li><Link to="/services/ppc-management" className="hover:text-primary-400 transition-colors duration-300">Performance Accelerators</Link></li>
            <li><Link to="/services/ppc-management" className="hover:text-primary-400 transition-colors duration-300">Product Hunting & Launch Strategy</Link></li>
          </ul>

        </div>

        {/* Column 4: Advertising Solutions */}
        <div>
          <h4 className="text-lg font-bold text-yellow-400 mb-6 tracking-tight ">Advertising Solutions</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/services/ppc-management" className="hover:text-primary-400 transition-colors duration-300">Full-Funnel Account Management</Link></li>
            <li><Link to="/services/ppc-management" className="hover:text-primary-400 transition-colors duration-300">Creative & A+ Content Strategy</Link></li>
            <li><Link to="/services/amazon-seo" className="hover:text-primary-400 transition-colors duration-300">Advanced Amazon SEO & PPC</Link></li>
            <li><Link to="/services/amazon-audit" className="hover:text-primary-400 transition-colors duration-300">Catalog & Inventory Audit</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">

        {/* Social Icons (Left) */}
        <div className="flex flex-col gap-6">
          <div className="flex gap-3">
            {[
              { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/sellorix" },
              { icon: <Facebook className="w-5 h-5" />, href: "https://www.facebook.com/Sellorix" },
              { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/sellorix" },
              { icon: <Mail className="w-5 h-5" />, href: "mailto:info.sellorix@gmail.com" },

            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-10 h-10 rounded-lg bg-[#b8ccd4] text-gray-800 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-sm"
                aria-label="Social Link"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Sellorix. All rights reserved.</p>
        </div>

        {/* Subscription Focus (Middle) */}
        {/* <div className="flex-1 max-w-md w-full">
          <h5 className="text-white font-bold mb-4">Get the Latest in Your Inbox</h5>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 px-5 py-3 rounded-xl bg-white border-none text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder:text-gray-400"
            />
            <button className="px-8 py-3 rounded-xl bg-[#b8ccd4] text-gray-900 font-bold hover:bg-white transition-colors duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div> */}

        {/* Results Focus (Right) */}
        {/* <div className="flex flex-col items-start lg:items-end gap-4 w-full lg:w-auto">
          <h5 className="text-white font-bold">Ready to Grow with Us?</h5>
          <Link
            to="/contact"
            className="w-full lg:w-auto px-10 py-3 rounded-xl bg-[#b8ccd4] text-gray-900 font-bold hover:bg-white transition-colors duration-300 text-center"
          >
            Get Your Growth Plan Today
          </Link>
        </div> */}

      </div>
    </footer>
  )
}

export default Footer
