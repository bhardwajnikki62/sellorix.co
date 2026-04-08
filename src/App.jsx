import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import FullServiceManagement from './pages/FullServiceManagement';
import PpcManagement from './pages/PpcManagement';
import AmazonSeo from './pages/AmazonSeo';
import AmazonAccountAudit from './pages/AmazonAccountAudit';
import Sops from './pages/Sops';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import StampHubCaseStudy from './pages/StampHubCaseStudy';
import TentAndTableCaseStudy from './pages/TentAndTableCaseStudy';
import HeavenlyHunksCaseStudy from './pages/HeavenlyHunksCaseStudy';
import PillowflexCaseStudy from './pages/PillowflexCaseStudy';
import ChinookSeederyCaseStudy from './pages/ChinookSeederyCaseStudy';
import WhatsAppWidget from './components/WhatsAppWidget';

gsap.registerPlugin(ScrollTrigger)

function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Clients />
    </main>
  );
}

function App() {
  return (
    <div className="relative min-h-screen w-full bg-dark-bg text-white font-outfit overflow-x-hidden selection:bg-primary-500/30">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services/full-service-management" element={<FullServiceManagement />} />
        <Route path="/services/ppc-management" element={<PpcManagement />} />
        <Route path="/services/amazon-seo" element={<AmazonSeo />} />
        <Route path="/services/amazon-audit" element={<AmazonAccountAudit />} />
        <Route path="/services/sops" element={<Sops />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-study/chirp" element={<CaseStudyDetail />} />
        <Route path="/case-study/stamp-hub" element={<StampHubCaseStudy />} />
        <Route path="/case-study/tent-and-table" element={<TentAndTableCaseStudy />} />
        <Route path="/case-study/heavenly-hunks" element={<HeavenlyHunksCaseStudy />} />
        <Route path="/case-study/pillowflex" element={<PillowflexCaseStudy />} />
        <Route path="/case-study/chinook-seedery" element={<ChinookSeederyCaseStudy />} />
      </Routes>
      <Footer />
      <WhatsAppWidget />
    </div>
  )
}

export default App
