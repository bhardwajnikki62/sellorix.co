import React, { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import mainLogo from '../assets/main_logo1.png'

const Header = ({ logoUrl = mainLogo }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-5 backdrop-blur-xl bg-gray-950/80 border-b border-gray-800 shadow-sm transition-all">

      {/* Logo Section */}
      <Link to="/" className="flex items-center gap-2 cursor-pointer group">
        {!imageError ? (
          <img
            src={logoUrl}
            alt="Brand Logo"
            className="h-8 w-auto md:h-20 object-contain group-hover:opacity-80 transition-opacity duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-xl font-bold">
              S
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white">Sellorix</span>
          </div>
        )}
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-300">
        <Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link>


        {/* Services Dropdown */}
        <div className="relative group">
          <button className="hover:text-indigo-400 transition-colors flex items-center gap-1 py-2 cursor-pointer">
            Services
            <ChevronDown className="w-4 h-4 transition-transform group-hover:-rotate-180" />
          </button>

          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <div className="bg-gray-900/95 backdrop-blur-md border border-gray-800 rounded-xl shadow-xl overflow-hidden transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <div className="py-2 flex flex-col items-center">
                <Link to="/services/full-service-management" className="w-full px-4 py-2.5 text-center text-gray-300 hover:bg-gray-800 hover:text-indigo-400 transition-colors">Full Service Management</Link>
                <Link to="/services/ppc-management" className="w-full px-4 py-2.5 text-center text-gray-300 hover:bg-gray-800 hover:text-indigo-400 transition-colors">PPC Management</Link>
                <Link to="/services/amazon-seo" className="w-full px-4 py-2.5 text-center text-gray-300 hover:bg-gray-800 hover:text-indigo-400 transition-colors">Amazon SEO</Link>
                <Link to="/services/amazon-audit" className="w-full px-4 py-2.5 text-center text-gray-300 hover:bg-gray-800 hover:text-indigo-400 transition-colors">Account Audit</Link>
                <Link to="/services/sops" className="w-full px-4 py-2.5 text-center text-gray-300 hover:bg-gray-800 hover:text-indigo-400 transition-colors">SOPs</Link>
              </div>
            </div>
          </div>
        </div>
        <Link to="/case-studies" className="hover:text-indigo-400 transition-colors">Case Studies</Link>
        <Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link>

        <Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link>
      </nav>

      {/* CTA Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-lg shadow-indigo-500/30">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-gray-300 hover:text-white focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-950/95 backdrop-blur-3xl border-b border-gray-800 flex flex-col items-center py-8 gap-6 md:hidden shadow-2xl overflow-y-auto max-h-[calc(100vh-80px)]">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-indigo-400 font-medium text-lg">Home</Link>

          <div className="flex flex-col items-center w-full">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="text-gray-300 hover:text-indigo-400 font-medium text-lg flex items-center gap-1"
            >
              Services
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isServicesOpen ? '-rotate-180' : ''}`} />
            </button>

            <div className={`flex flex-col items-center overflow-hidden transition-all duration-300 w-full ${isServicesOpen ? 'max-h-60 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
              <Link to="/services/full-service-management" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-2 text-center text-gray-400 hover:text-indigo-400">Full Service Management</Link>
              <Link to="/services/ppc-management" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-2 text-center text-gray-400 hover:text-indigo-400">PPC Management</Link>
              <Link to="/services/amazon-seo" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-2 text-center text-gray-400 hover:text-indigo-400">Amazon SEO</Link>
              <Link to="/services/amazon-audit" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-2 text-center text-gray-400 hover:text-indigo-400">Account Audit</Link>
              <Link to="/services/sops" onClick={() => setIsMobileMenuOpen(false)} className="w-full py-2 text-center text-gray-400 hover:text-indigo-400">SOPs</Link>
            </div>
          </div>

          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-indigo-400 font-medium text-lg">About Us</Link>
          <Link to="/case-studies" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-indigo-400 font-medium text-lg">Case Studies</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-indigo-400 font-medium text-lg">Contact</Link>
          <div className="w-full px-6 flex flex-col gap-4 mt-2">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-medium w-full text-center hover:bg-indigo-500 transition-colors">
              Let's Connect
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
