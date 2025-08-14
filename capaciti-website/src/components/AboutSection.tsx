'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Target, Heart, Award, Calendar, MapPin, Linkedin, Twitter } from 'lucide-react'

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeTab, setActiveTab] = useState('mission')

  const tabs = [
    { id: 'mission', label: 'Mission & Vision' },
    { id: 'team', label: 'Our Team' },
    { id: 'timeline', label: 'Our Journey' },
    { id: 'partners', label: 'Partners' },
  ]

  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Founder & CEO',
      image: '/api/placeholder/300/300',
      bio: 'Leading digital transformation in education with 15+ years of experience.',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Michael Chen',
      role: 'Head of Technology',
      image: '/api/placeholder/300/300',
      bio: 'Former Google engineer passionate about democratizing tech education.',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Aisha Patel',
      role: 'Head of Partnerships',
      image: '/api/placeholder/300/300',
      bio: 'Building bridges between industry and education for sustainable impact.',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'James Wilson',
      role: 'Lead Instructor',
      image: '/api/placeholder/300/300',
      bio: 'Full-stack developer and mentor with a passion for teaching.',
      linkedin: '#',
      twitter: '#',
    },
  ]

  const timeline = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'CAPACITI was founded with a vision to bridge the digital skills gap in Africa.',
      icon: Target,
    },
    {
      year: '2021',
      title: 'First Cohort',
      description: 'Launched our first bootcamp with 50 students and achieved 90% placement rate.',
      icon: Users,
    },
    {
      year: '2022',
      title: 'Partnership Growth',
      description: 'Formed strategic partnerships with 25+ leading tech companies.',
      icon: Heart,
    },
    {
      year: '2023',
      title: 'Scale & Impact',
      description: 'Expanded to serve 500+ students with specialized programs.',
      icon: Award,
    },
    {
      year: '2024',
      title: 'Future Ready',
      description: 'Launching AI and Web3 specializations to meet emerging industry needs.',
      icon: Calendar,
    },
  ]

  const partners = [
    { name: 'Google', logo: '/api/placeholder/150/80' },
    { name: 'Microsoft', logo: '/api/placeholder/150/80' },
    { name: 'Amazon', logo: '/api/placeholder/150/80' },
    { name: 'Meta', logo: '/api/placeholder/150/80' },
    { name: 'Netflix', logo: '/api/placeholder/150/80' },
    { name: 'Spotify', logo: '/api/placeholder/150/80' },
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'mission':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Target className="w-6 h-6 text-capaciti-primary mr-2" />
                    Our Mission
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To empower the next generation of African tech professionals through 
                    comprehensive, industry-aligned training programs that bridge the skills 
                    gap and create sustainable career opportunities in the digital economy.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Heart className="w-6 h-6 text-capaciti-secondary mr-2" />
                    Our Vision
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    A future where every motivated individual has access to world-class 
                    technology education and the opportunity to thrive in the global 
                    digital workforce, regardless of their background or circumstances.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-capaciti-primary to-capaciti-secondary p-8 rounded-2xl text-white">
                  <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold">500+</div>
                      <div className="text-sm opacity-90">Graduates</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">85%</div>
                      <div className="text-sm opacity-90">Job Placement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">50+</div>
                      <div className="text-sm opacity-90">Partners</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">15+</div>
                      <div className="text-sm opacity-90">Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )

      case 'team':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
              >
                <div className="aspect-square bg-gradient-to-br from-capaciti-primary to-capaciti-secondary flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-capaciti-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a href={member.linkedin} className="text-gray-400 hover:text-capaciti-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={member.twitter} className="text-gray-400 hover:text-capaciti-primary transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )

      case 'timeline':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-capaciti-primary to-capaciti-secondary"></div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative flex items-start space-x-6"
                >
                  <div className="relative">
                    <div className="w-16 h-16 bg-white border-4 border-capaciti-primary rounded-full flex items-center justify-center shadow-lg">
                      <item.icon className="w-8 h-8 text-capaciti-primary" />
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl font-bold text-capaciti-primary mr-4">{item.year}</span>
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )

      case 'partners':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Trusted by Industry Leaders
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We partner with leading technology companies to ensure our curriculum 
                stays relevant and our graduates are industry-ready.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-xs text-gray-500">{partner.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-capaciti-light to-white rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Want to Partner with Us?
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Join our network of industry partners and help shape the future of tech education.
              </p>
              <button className="bg-capaciti-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Become a Partner
              </button>
            </div>
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-capaciti-light">
      <div className="container-max section-padding" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About CAPACITI</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our mission, meet our team, and learn about our journey to 
            transform tech education across Africa.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center mb-12 bg-white rounded-2xl shadow-lg p-2"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-capaciti-primary text-white shadow-lg'
                  : 'text-gray-600 hover:text-capaciti-primary hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {renderTabContent()}
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection