'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Users, 
  TrendingUp, 
  MapPin, 
  Award, 
  Building, 
  GraduationCap,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

const ImpactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const metrics = [
    {
      icon: Users,
      value: '500+',
      label: 'Graduates',
      description: 'Tech professionals trained and certified',
      color: 'text-capaciti-primary'
    },
    {
      icon: TrendingUp,
      value: '85%',
      label: 'Job Placement Rate',
      description: 'Within 6 months of graduation',
      color: 'text-capaciti-accent'
    },
    {
      icon: Building,
      value: '50+',
      label: 'Partner Companies',
      description: 'Leading tech companies hiring our graduates',
      color: 'text-capaciti-secondary'
    },
    {
      icon: MapPin,
      value: '15+',
      label: 'Countries',
      description: 'Global reach of our alumni network',
      color: 'text-capaciti-primary'
    },
    {
      icon: Award,
      value: 'R 450K',
      label: 'Average Starting Salary',
      description: 'Median salary of our graduates',
      color: 'text-capaciti-accent'
    },
    {
      icon: GraduationCap,
      value: '95%',
      label: 'Course Completion',
      description: 'Students who complete their programs',
      color: 'text-capaciti-secondary'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Mbeki',
      role: 'Software Developer',
      company: 'Google',
      image: '/api/placeholder/100/100',
      quote: 'CAPACITI transformed my career completely. From a marketing background to landing a role at Google - the journey was challenging but incredibly rewarding. The mentorship and hands-on projects prepared me for real-world challenges.',
      rating: 5,
      program: 'Full-Stack Web Development'
    },
    {
      name: 'James Okafor',
      role: 'Data Scientist',
      company: 'Microsoft',
      image: '/api/placeholder/100/100',
      quote: 'The Data Science program at CAPACITI exceeded my expectations. The curriculum was cutting-edge, and the instructors brought real industry experience. I secured my dream job before graduation!',
      rating: 5,
      program: 'Data Science & Analytics'
    },
    {
      name: 'Aminah Hassan',
      role: 'Mobile App Developer',
      company: 'Spotify',
      image: '/api/placeholder/100/100',
      quote: 'As a self-taught developer, CAPACITI helped me structure my knowledge and fill crucial gaps. The portfolio projects I built during the course directly led to multiple job offers.',
      rating: 5,
      program: 'Mobile App Development'
    },
    {
      name: 'David van der Merwe',
      role: 'DevOps Engineer',
      company: 'Amazon',
      image: '/api/placeholder/100/100',
      quote: 'The Cloud Computing course was exactly what I needed to advance my career. The hands-on labs and real-world scenarios prepared me perfectly for my current role at Amazon.',
      rating: 5,
      program: 'Cloud Computing & DevOps'
    }
  ]

  const caseStudies = [
    {
      title: 'From Retail to Tech',
      student: 'Thandi Ndaba',
      before: 'Retail Store Manager',
      after: 'Full-Stack Developer at Shopify',
      timeframe: '12 weeks',
      salaryIncrease: '300%',
      story: 'Thandi made a complete career pivot during the pandemic, going from managing a retail store to becoming a full-stack developer at Shopify in just 12 weeks.'
    },
    {
      title: 'Rural to Global',
      student: 'Sipho Dlamini',
      before: 'Unemployed Graduate',
      after: 'Data Analyst at Netflix',
      timeframe: '16 weeks',
      salaryIncrease: 'First job',
      story: 'Coming from a rural area with limited opportunities, Sipho used our online program to land his first tech job at Netflix, now working remotely from his hometown.'
    },
    {
      title: 'Career Acceleration',
      student: 'Maria Santos',
      before: 'Junior Developer',
      after: 'Senior Cloud Architect at Meta',
      timeframe: '10 weeks',
      salaryIncrease: '150%',
      story: 'Maria leveraged our Cloud Computing program to rapidly advance from a junior developer to a senior cloud architect role, leading technical teams at Meta.'
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const CountUpAnimation = ({ value, duration = 2000 }: { value: string; duration?: number }) => {
    const [count, setCount] = useState(0)
    
    useState(() => {
      if (inView) {
        const numberValue = parseInt(value.replace(/[^\d]/g, '')) || 0
        const increment = numberValue / (duration / 50)
        let current = 0
        
        const timer = setInterval(() => {
          current += increment
          if (current >= numberValue) {
            setCount(numberValue)
            clearInterval(timer)
          } else {
            setCount(Math.floor(current))
          }
        }, 50)
        
        return () => clearInterval(timer)
      }
    })
    
    return <span>{value.replace(/\d+/, count.toString())}</span>
  }

  return (
    <section id="impact" className="py-20 bg-gradient-to-b from-capaciti-light to-white">
      <div className="container-max section-padding" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming lives and careers across Africa through world-class tech education 
            and industry partnerships.
          </p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center card-hover"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4`}>
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                <CountUpAnimation value={metric.value} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{metric.label}</h3>
              <p className="text-gray-600 text-sm">{metric.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Success Stories</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
              >
                <div className="bg-gradient-to-br from-capaciti-primary to-capaciti-secondary p-6 text-white">
                  <h4 className="text-xl font-bold mb-2">{study.title}</h4>
                  <p className="opacity-90">{study.student}</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Before</span>
                      <span className="font-medium text-gray-900">{study.before}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">After</span>
                      <span className="font-medium text-capaciti-primary">{study.after}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Duration</span>
                      <span className="font-medium text-gray-900">{study.timeframe}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Salary Impact</span>
                      <span className="font-bold text-capaciti-accent">+{study.salaryIncrease}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{study.story}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">What Our Graduates Say</h3>
          
          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-capaciti-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                <Quote className="w-12 h-12 text-capaciti-primary opacity-50" />
              </div>
              
              <blockquote className="text-lg lg:text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
                {testimonials[currentTestimonial].quote}
              </blockquote>
              
              <div className="flex items-center justify-center space-x-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-capaciti-primary to-capaciti-secondary rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-capaciti-primary font-medium">
                    {testimonials[currentTestimonial].role}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonials[currentTestimonial].company} • {testimonials[currentTestimonial].program}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-capaciti-primary to-capaciti-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Start Your Success Story?</h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of graduates who have transformed their careers through CAPACITI. 
              Your journey to a thriving tech career starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-capaciti-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Apply Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-capaciti-primary transition-colors">
                View All Programs
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ImpactSection