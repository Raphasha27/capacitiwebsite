'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  Send,
  ExternalLink,
  ArrowUp
} from 'lucide-react'
import { scrollToSection } from '@/lib/utils'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState('')

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    setNewsletterStatus('loading')
    
    // Simulate subscription
    setTimeout(() => {
      setNewsletterStatus('success')
      setEmail('')
      setTimeout(() => setNewsletterStatus(''), 3000)
    }, 1000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programmes' },
    { name: 'Impact', href: '#impact' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ]

  const programs = [
    { name: 'Full-Stack Development', href: '#programmes' },
    { name: 'Data Science', href: '#programmes' },
    { name: 'Mobile Development', href: '#programmes' },
    { name: 'Cloud Computing', href: '#programmes' },
    { name: 'AI & Machine Learning', href: '#programmes' },
  ]

  const resources = [
    { name: 'Career Services', href: '#' },
    { name: 'Student Portal', href: '#', external: true },
    { name: 'Course Materials', href: '#', external: true },
    { name: 'Alumni Network', href: '#' },
    { name: 'Industry Reports', href: '#blog' },
  ]

  const legal = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Refund Policy', href: '#' },
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/capaciti', name: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/capaciti', name: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/capaciti', name: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/capaciti', name: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/capaciti', name: 'YouTube' },
  ]

  const handleLinkClick = (href) => {
    if (href.startsWith('#')) {
      const sectionId = href.substring(1)
      scrollToSection(sectionId)
    }
  }

  return (
    <footer className="bg-capaciti-dark text-white">
      {/* Main Footer Content */}
      <div className="container-max section-padding py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Company Info & Newsletter */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo & Description */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 capaciti-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">CAPACITI</div>
                  <div className="text-sm text-gray-300">Tech Career Accelerator</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Empowering the next generation of African tech professionals through 
                world-class education, industry partnerships, and career support.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-capaciti-primary" />
                <span>Greenacres, Qgeberha, 6001, South Africa</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-capaciti-primary" />
                <span>+27 (0) 21 003 7509</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-capaciti-primary" />
                <span>hello@capaciti.org.za</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
              <p className="text-gray-300 text-sm mb-4">
                Get the latest news, program updates, and career insights delivered to your inbox.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-capaciti-primary focus:border-transparent outline-none"
                  />
                  <button
                    type="submit"
                    disabled={newsletterStatus === 'loading'}
                    className="px-6 py-3 bg-capaciti-primary hover:bg-blue-700 disabled:bg-gray-600 rounded-lg transition-colors flex items-center justify-center"
                  >
                    {newsletterStatus === 'loading' ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {newsletterStatus === 'success' && (
                  <p className="text-green-400 text-sm">Thank you for subscribing!</p>
                )}
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-300 hover:text-capaciti-primary transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-6">Programs</h3>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(program.href)}
                    className="text-gray-300 hover:text-capaciti-primary transition-colors text-left"
                  >
                    {program.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  {resource.external ? (
                    <a
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-capaciti-primary transition-colors flex items-center space-x-1"
                    >
                      <span>{resource.name}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <button
                      onClick={() => handleLinkClick(resource.href)}
                      className="text-gray-300 hover:text-capaciti-primary transition-colors text-left"
                    >
                      {resource.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-6">Legal</h3>
            <ul className="space-y-3 mb-6">
              {legal.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-capaciti-primary transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div>
              <h4 className="text-white font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-800 hover:bg-capaciti-primary rounded-full flex items-center justify-center transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container-max section-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-4 text-gray-300 text-sm">
              <span>© 2024 CAPACITI. All rights reserved.</span>
              <span>•</span>
              <span>A division of UWU Africa</span>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-300 hover:text-capaciti-primary transition-colors"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* UWU Africa Attribution */}
      <div className="bg-gray-900 py-4">
        <div className="container-max section-padding">
          <div className="flex items-center justify-center space-x-8 text-gray-400 text-sm">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <span>CAPACITI is a division of</span>
                <div className="flex items-center space-x-2">
                  <div className="text-white font-bold">UWU AFRICA</div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span>Greenacres, Qgeberha, 6001.</span>
              <span>•</span>
              <span>+27 (0) 21 003 7509</span>
              <span>•</span>
              <span>www.capaciti.org.za</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer