import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import emailjs from '@emailjs/browser'
import { Mail, MapPin, Phone, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

// ⚠️ IMPORTANT: Replace these with your real EmailJS credentials.
// Get them from https://www.emailjs.com → Sign up → Dashboard
const EMAILJS_SERVICE_ID = 'service_9xjdno5'    // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_qayq7gx'  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'FvphoculhKg6RNUdR'     // e.g. 'AbCdEfGhIjKlMnOp'

const Contact = () => {
  const containerRef = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-item', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )

      if (result.status === 200) {
        setStatus('success')
        formRef.current.reset()
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setErrorMsg('Something went wrong. Please try again.')
      }
    } catch (err) {
      setStatus('error')
      setErrorMsg(err?.text || 'Failed to send message. Please try again later.')
    }
  }

  return (
    <section id="contact" ref={containerRef} className="py-24 px-6 md:px-12 relative w-full">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">

        <div className="w-full lg:w-5/12">
          <h2 className="contact-item text-sm uppercase tracking-widest text-primary-400 font-semibold mb-3">Get in Touch</h2>
          <h3 className="contact-item text-5xl md:text-6xl font-bold mb-6">Let's scale <br />your <span className="heading-gradient text-transparent bg-clip-text">vision.</span></h3>
          <p className="contact-item text-gray-400 text-lg mb-10 leading-relaxed">
            Ready to transform your business? Drop us a message, and our strategic team will get back to you within 24 hours.
          </p>

          <div className="flex flex-col gap-6">
            <div className="contact-item flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email Us</p>
                <p className="font-semibold">info.sellorix@gmail.com</p>
              </div>
            </div>
            <div className="contact-item flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500">What's App</p>
                <p className="font-semibold">+977 981-9297180</p>
                <p className="font-semibold">+919113681461</p>
              </div>
            </div>
            <div className="contact-item flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Visit Us</p>
                <p className="font-semibold">Wyoming,USA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-7/12 contact-item">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/10 blur-[80px] rounded-full pointer-events-none" />

            {/* Success Message */}
            {status === 'success' && (
              <div className="relative z-10 flex items-center gap-3 mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <CheckCircle className="w-5 h-5 shrink-0" />
                <p className="text-sm font-medium">Message sent successfully! We'll get back to you within 24 hours.</p>
              </div>
            )}

            {/* Error Message */}
            {status === 'error' && (
              <div className="relative z-10 flex items-center gap-3 mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <p className="text-sm font-medium">{errorMsg}</p>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-300">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    className="bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-300">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    required
                    className="bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-300">Email Address</label>
                <input
                  type="email"
                  name="from_email"
                  required
                  className="bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-300">Message</label>
                <textarea
                  rows="4"
                  name="message"
                  required
                  className="bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-primary-600 hover:bg-primary-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-colors mt-2 flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact
