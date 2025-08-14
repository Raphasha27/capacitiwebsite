'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
  Brain, 
  Shield,
  Clock,
  Users,
  Award,
  X,
  Calendar,
  MapPin,
  DollarSign
} from 'lucide-react'

const ProgrammesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProgramme, setSelectedProgramme] = useState(null)

  const filters = [
    { id: 'all', label: 'All Programs' },
    { id: 'bootcamp', label: 'Bootcamps' },
    { id: 'course', label: 'Courses' },
    { id: 'workshop', label: 'Workshops' },
    { id: 'mentorship', label: 'Mentorship' },
  ]

  const programmes = [
    {
      id: 1,
      title: 'Full-Stack Web Development',
      category: 'bootcamp',
      duration: '12 weeks',
      format: 'Full-time',
      price: 'R 25,000',
      level: 'Beginner to Intermediate',
      description: 'Comprehensive training in modern web development technologies including React, Node.js, and databases.',
      icon: Code,
      image: '/api/placeholder/400/250',
      stats: {
        graduates: 200,
        placementRate: 90,
        avgSalary: 'R 35,000/month'
      },
      curriculum: [
        'HTML, CSS, JavaScript Fundamentals',
        'React.js & Modern Frontend',
        'Node.js & Express Backend',
        'Database Design & Management',
        'API Development & Integration',
        'Version Control with Git',
        'Deployment & DevOps Basics',
        'Capstone Project'
      ],
      nextCohort: '2024-03-15',
      location: 'Cape Town & Online',
      requirements: ['Basic computer literacy', 'Commitment to full-time study'],
      outcomes: ['Build full-stack applications', 'Work in development teams', 'Deploy production-ready apps']
    },
    {
      id: 2,
      title: 'Data Science & Analytics',
      category: 'bootcamp',
      duration: '16 weeks',
      format: 'Part-time',
      price: 'R 30,000',
      level: 'Intermediate',
      description: 'Master data analysis, machine learning, and visualization tools to become a data professional.',
      icon: Database,
      image: '/api/placeholder/400/250',
      stats: {
        graduates: 150,
        placementRate: 85,
        avgSalary: 'R 40,000/month'
      },
      curriculum: [
        'Python Programming',
        'Data Analysis with Pandas',
        'Statistical Analysis',
        'Machine Learning Fundamentals',
        'Data Visualization',
        'SQL & Database Querying',
        'Big Data Technologies',
        'Industry Capstone Project'
      ],
      nextCohort: '2024-04-01',
      location: 'Johannesburg & Online',
      requirements: ['Basic mathematics knowledge', 'Programming experience helpful'],
      outcomes: ['Analyze complex datasets', 'Build ML models', 'Create compelling visualizations']
    },
    {
      id: 3,
      title: 'Mobile App Development',
      category: 'course',
      duration: '8 weeks',
      format: 'Online',
      price: 'R 15,000',
      level: 'Beginner',
      description: 'Learn to build native mobile applications for iOS and Android platforms.',
      icon: Smartphone,
      image: '/api/placeholder/400/250',
      stats: {
        graduates: 120,
        placementRate: 80,
        avgSalary: 'R 30,000/month'
      },
      curriculum: [
        'Mobile Development Fundamentals',
        'React Native Development',
        'iOS Development with Swift',
        'Android Development with Kotlin',
        'Mobile UI/UX Design',
        'App Store Deployment',
        'Mobile App Testing',
        'Portfolio App Project'
      ],
      nextCohort: '2024-03-22',
      location: 'Online',
      requirements: ['Basic programming knowledge', 'Own laptop/computer'],
      outcomes: ['Build cross-platform apps', 'Publish to app stores', 'Mobile development career']
    },
    {
      id: 4,
      title: 'Cloud Computing & DevOps',
      category: 'course',
      duration: '10 weeks',
      format: 'Hybrid',
      price: 'R 20,000',
      level: 'Intermediate to Advanced',
      description: 'Master cloud platforms, containerization, and DevOps practices for modern software delivery.',
      icon: Globe,
      image: '/api/placeholder/400/250',
      stats: {
        graduates: 100,
        placementRate: 95,
        avgSalary: 'R 45,000/month'
      },
      curriculum: [
        'Cloud Platforms (AWS, Azure, GCP)',
        'Containerization with Docker',
        'Kubernetes Orchestration',
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Monitoring & Logging',
        'Security Best Practices',
        'Capstone DevOps Project'
      ],
      nextCohort: '2024-04-08',
      location: 'Durban & Online',
      requirements: ['System administration experience', 'Linux command line knowledge'],
      outcomes: ['Deploy scalable applications', 'Manage cloud infrastructure', 'DevOps engineer role']
    },
    {
      id: 5,
      title: 'AI & Machine Learning Workshop',
      category: 'workshop',
      duration: '3 days',
      format: 'In-person',
      price: 'R 5,000',
      level: 'All levels',
      description: 'Intensive workshop covering AI fundamentals and practical machine learning applications.',
      icon: Brain,
      image: '/api/placeholder/400/250',
      stats: {
        graduates: 80,
        placementRate: 70,
        avgSalary: 'Skills enhancement'
      },
      curriculum: [
        'AI & ML Introduction',
        'Python for AI',
        'Neural Networks Basics',
        'Computer Vision',
        'Natural Language Processing',
        'Hands-on Projects',
        'Industry Applications',
        'Future of AI'
      ],
      nextCohort: '2024-03-25',
      location: 'Cape Town',
      requirements: ['Interest in AI/ML', 'Basic programming helpful'],
      outcomes: ['Understand AI concepts', 'Build simple ML models', 'Career pathway clarity']
    },
    {
      id: 6,
      title: 'Tech Mentorship Program',
      category: 'mentorship',
      duration: '6 months',
      format: 'One-on-one',
      price: 'R 12,000',
      level: 'All levels',
      description: 'Personalized mentorship with industry professionals to accelerate your tech career.',
      icon: Users,
      image: '/api/placeholder/400/250',
      stats: {
        graduates: 60,
        placementRate: 100,
        avgSalary: 'Career growth'
      },
      curriculum: [
        'Career Assessment',
        'Skill Gap Analysis',
        'Learning Path Design',
        'Weekly 1:1 Sessions',
        'Project Reviews',
        'Interview Preparation',
        'Networking Opportunities',
        'Career Transition Support'
      ],
      nextCohort: 'Rolling admissions',
      location: 'Online & In-person',
      requirements: ['Clear career goals', 'Commitment to growth'],
      outcomes: ['Accelerated career growth', 'Industry connections', 'Increased confidence']
    }
  ]

  const filteredProgrammes = activeFilter === 'all' 
    ? programmes 
    : programmes.filter(prog => prog.category === activeFilter)

  const openModal = (programme) => {
    setSelectedProgramme(programme)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedProgramme(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <section id="programmes" className="py-20 bg-white">
      <div className="container-max section-padding" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Programmes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of tech programs designed to launch 
            or advance your career in the digital economy.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-capaciti-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Programme Cards */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProgrammes.map((programme, index) => (
              <motion.div
                key={programme.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover cursor-pointer"
                onClick={() => openModal(programme)}
              >
                {/* Programme Image */}
                <div className="h-48 bg-gradient-to-br from-capaciti-primary to-capaciti-secondary flex items-center justify-center">
                  <programme.icon className="w-16 h-16 text-white" />
                </div>

                {/* Programme Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      programme.category === 'bootcamp' ? 'bg-red-100 text-red-800' :
                      programme.category === 'course' ? 'bg-blue-100 text-blue-800' :
                      programme.category === 'workshop' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {programme.category.charAt(0).toUpperCase() + programme.category.slice(1)}
                    </span>
                    <span className="text-capaciti-primary font-bold">{programme.price}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{programme.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{programme.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      {programme.duration} • {programme.format}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Award className="w-4 h-4 mr-2" />
                      {programme.level}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {programme.stats.graduates}+ graduates
                    </div>
                    <div className="text-sm font-medium text-capaciti-primary">
                      {programme.stats.placementRate}% placement rate
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-capaciti-primary to-capaciti-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Not sure which program is right for you?</h3>
            <p className="text-lg mb-6 opacity-90">
              Book a free consultation with our education advisors to find your perfect learning path.
            </p>
            <button className="bg-white text-capaciti-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>

      {/* Programme Modal */}
      <AnimatePresence>
        {selectedProgramme && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-48 bg-gradient-to-br from-capaciti-primary to-capaciti-secondary flex items-center justify-center">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <selectedProgramme.icon className="w-20 h-20 text-white" />
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedProgramme.category === 'bootcamp' ? 'bg-red-100 text-red-800' :
                    selectedProgramme.category === 'course' ? 'bg-blue-100 text-blue-800' :
                    selectedProgramme.category === 'workshop' ? 'bg-green-100 text-green-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {selectedProgramme.category.charAt(0).toUpperCase() + selectedProgramme.category.slice(1)}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                    {selectedProgramme.level}
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProgramme.title}</h2>
                <p className="text-lg text-gray-600 mb-8">{selectedProgramme.description}</p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Program Details */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* Curriculum */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">What You'll Learn</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {selectedProgramme.curriculum.map((item, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-capaciti-primary rounded-full"></div>
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Learning Outcomes */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Career Outcomes</h3>
                      <div className="space-y-2">
                        {selectedProgramme.outcomes.map((outcome, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <Award className="w-5 h-5 text-capaciti-accent" />
                            <span className="text-gray-700">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Requirements */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Prerequisites</h3>
                      <div className="space-y-2">
                        {selectedProgramme.requirements.map((req, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-capaciti-secondary rounded-full"></div>
                            <span className="text-gray-700">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    {/* Key Info */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="font-bold text-gray-900 mb-4">Program Details</h3>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-gray-500" />
                          <div>
                            <div className="font-medium">{selectedProgramme.duration}</div>
                            <div className="text-sm text-gray-500">{selectedProgramme.format}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-5 h-5 text-gray-500" />
                          <div>
                            <div className="font-medium">Next Cohort</div>
                            <div className="text-sm text-gray-500">{selectedProgramme.nextCohort}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MapPin className="w-5 h-5 text-gray-500" />
                          <div>
                            <div className="font-medium">Location</div>
                            <div className="text-sm text-gray-500">{selectedProgramme.location}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <DollarSign className="w-5 h-5 text-gray-500" />
                          <div>
                            <div className="font-medium">Investment</div>
                            <div className="text-sm text-gray-500">{selectedProgramme.price}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="bg-gradient-to-br from-capaciti-primary to-capaciti-secondary rounded-xl p-6 text-white">
                      <h3 className="font-bold mb-4">Program Success</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Graduates</span>
                          <span className="font-bold">{selectedProgramme.stats.graduates}+</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Placement Rate</span>
                          <span className="font-bold">{selectedProgramme.stats.placementRate}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Avg. Salary</span>
                          <span className="font-bold">{selectedProgramme.stats.avgSalary}</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="space-y-3">
                      <button className="w-full bg-capaciti-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Apply Now
                      </button>
                      <button className="w-full border border-capaciti-primary text-capaciti-primary py-3 rounded-lg font-semibold hover:bg-capaciti-primary hover:text-white transition-colors">
                        Download Brochure
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ProgrammesSection