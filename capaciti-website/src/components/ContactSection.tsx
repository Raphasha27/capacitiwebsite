'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageSquare,
  User,
  Building,
  Globe,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  })

  const [formStatus, setFormStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Campus',
      details: ['Greenacres, Qgeberha, 6001', 'Eastern Cape, South Africa'],
      color: 'text-capaciti-primary'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+27 (0) 21 003 7509', 'Mon-Fri: 8:00 AM - 6:00 PM'],
      color: 'text-capaciti-secondary'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@capaciti.org.za', 'We reply within 24 hours'],
      color: 'text-capaciti-accent'
    },
    {
      icon: Globe,
      title: 'Online Support',
      details: ['www.capaciti.org.za', 'Live chat available'],
      color: 'text-capaciti-primary'
    }
  ]

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'programs', label: 'Program Information' },
    { value: 'admissions', label: 'Admissions' },
    { value: 'partnerships', label: 'Corporate Partnerships' },
    { value: 'careers', label: 'Career Services' },
    { value: 'technical', label: 'Technical Support' }
  ]

  const officeLocations = [
    {
      city: 'Cape Town',
      address: 'Innovation District, Cape Town CBD',
      phone: '+27 21 123 4567',
      email: 'capetown@capaciti.org.za'
    },
    {
      city: 'Johannesburg',
      address: 'Sandton City, Johannesburg',
      phone: '+27 11 123 4567',
      email: 'johannesburg@capaciti.org.za'
    },
    {
      city: 'Durban',
      address: 'Gateway Business District, Durban',
      phone: '+27 31 123 4567',
      email: 'durban@capaciti.org.za'
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ type: '', message: '' })

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setFormStatus({
        type: 'success',
        message: 'Thank you for your message! We\'ll get back to you within 24 hours.'
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      })
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Something went wrong. Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-capaciti-light">
      <div className="container-max section-padding" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your tech journey? Have questions about our programs? 
            We're here to help you take the next step.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className={`p-3 rounded-lg bg-gray-100`}>
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Office Locations */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Locations</h3>
              <div className="space-y-4">
                {officeLocations.map((location, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                    className="bg-white rounded-lg p-4 shadow-md"
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">{location.city}</h4>
                    <p className="text-sm text-gray-600 mb-1">{location.address}</p>
                    <p className="text-sm text-gray-600">{location.phone}</p>
                    <p className="text-sm text-capaciti-primary">{location.email}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-capaciti-primary to-capaciti-secondary rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-white/20 hover:bg-white/30 transition-colors py-3 px-4 rounded-lg text-left flex items-center space-x-3">
                  <MessageSquare className="w-5 h-5" />
                  <span>Schedule a Call</span>
                </button>
                <button className="w-full bg-white/20 hover:bg-white/30 transition-colors py-3 px-4 rounded-lg text-left flex items-center space-x-3">
                  <User className="w-5 h-5" />
                  <span>Book Campus Tour</span>
                </button>
                <button className="w-full bg-white/20 hover:bg-white/30 transition-colors py-3 px-4 rounded-lg text-left flex items-center space-x-3">
                  <Building className="w-5 h-5" />
                  <span>Corporate Partnerships</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form Status */}
                {formStatus.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg flex items-center space-x-3 ${
                      formStatus.type === 'success' 
                        ? 'bg-green-50 border border-green-200 text-green-800' 
                        : 'bg-red-50 border border-red-200 text-red-800'
                    }`}
                  >
                    {formStatus.type === 'success' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <AlertCircle className="w-5 h-5" />
                    )}
                    <span>{formStatus.message}</span>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-capaciti-primary focus:border-transparent outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-capaciti-primary focus:border-transparent outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-capaciti-primary focus:border-transparent outline-none transition-colors"
                      placeholder="+27 12 345 6789"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-capaciti-primary focus:border-transparent outline-none transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-capaciti-primary focus:border-transparent outline-none transition-colors"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-capaciti-primary focus:border-transparent outline-none transition-colors"
                    placeholder="Brief subject of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-capaciti-primary focus:border-transparent outline-none transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center space-x-3 py-4 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-capaciti-primary hover:bg-blue-700 transform hover:scale-105'
                  } text-white shadow-lg`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map Integration Placeholder */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-3" />
                  <h4 className="text-lg font-semibold mb-2">Our Location</h4>
                  <p className="text-sm">Interactive map would be integrated here</p>
                  <p className="text-xs mt-1">Google Maps API integration</p>
                </div>
                
                {/* Map overlay with location info */}
                <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-capaciti-primary rounded-full"></div>
                    <div>
                      <h5 className="font-semibold text-gray-900 text-sm">CAPACITI Campus</h5>
                      <p className="text-xs text-gray-600">Greenacres, Qgeberha</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Office Hours & Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Clock className="w-8 h-8 text-capaciti-primary mx-auto mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Office Hours</h3>
            <p className="text-sm text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p className="text-sm text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
            <p className="text-sm text-gray-600">Sunday: Closed</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <MessageSquare className="w-8 h-8 text-capaciti-secondary mx-auto mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Response Time</h3>
            <p className="text-sm text-gray-600">Email: Within 24 hours</p>
            <p className="text-sm text-gray-600">Phone: Immediate</p>
            <p className="text-sm text-gray-600">Live Chat: Real-time</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <User className="w-8 h-8 text-capaciti-accent mx-auto mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Support Team</h3>
            <p className="text-sm text-gray-600">Admissions Counselors</p>
            <p className="text-sm text-gray-600">Technical Support</p>
            <p className="text-sm text-gray-600">Career Advisors</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection