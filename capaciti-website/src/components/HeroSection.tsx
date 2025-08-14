'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, ArrowRight, Users, Award, Target } from 'lucide-react'
import { scrollToSection } from '@/lib/utils'

const HeroSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const handleWorkWithUsClick = () => {
    scrollToSection('contact')
  }

  const handleLearnMoreClick = () => {
    scrollToSection('about')
  }

  const stats = [
    { icon: Users, value: '500+', label: 'Graduates' },
    { icon: Award, value: '85%', label: 'Placement Rate' },
    { icon: Target, value: '50+', label: 'Partner Companies' },
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-capaciti-light to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-capaciti-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-capaciti-secondary rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-capaciti-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-lg border"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-gray-700">
                Now accepting applications for 2024
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-text text-gray-900 leading-tight"
            >
              Accelerate Your{' '}
              <span className="bg-gradient-to-r from-capaciti-primary to-capaciti-secondary bg-clip-text text-transparent">
                Tech Career
              </span>{' '}
              with CAPACITI
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl lg:text-2xl text-gray-600 leading-relaxed"
            >
              Empowering the next generation of tech professionals through 
              comprehensive training, mentorship, and industry partnerships.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={handleWorkWithUsClick}
                className="inline-flex items-center justify-center px-8 py-4 bg-capaciti-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Work With Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>

              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-capaciti-primary font-semibold rounded-lg border-2 border-capaciti-primary hover:bg-capaciti-primary hover:text-white transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Our Story
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-capaciti-primary" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative aspect-video bg-gradient-to-br from-capaciti-primary to-capaciti-secondary rounded-2xl shadow-2xl overflow-hidden">
              {/* Placeholder for mission-aligned video/image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <Play className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                  <p className="text-lg opacity-90">
                    Transforming lives through technology education
                  </p>
                </div>
              </div>
              
              {/* Play button overlay */}
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="absolute inset-0 flex items-center justify-center group hover:bg-black/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-capaciti-primary ml-1" />
                </div>
              </button>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -left-4 w-24 h-24 bg-capaciti-accent rounded-2xl flex items-center justify-center shadow-lg"
            >
              <Award className="w-12 h-12 text-white" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-capaciti-secondary rounded-2xl flex items-center justify-center shadow-lg"
            >
              <Target className="w-12 h-12 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Placeholder for actual video embed */}
            <div className="w-full h-full bg-gray-900 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Video content would be embedded here</p>
                <p className="text-sm opacity-75">Vimeo or YouTube integration</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection