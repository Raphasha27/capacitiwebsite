'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Tag, 
  Clock,
  Eye,
  MessageCircle,
  BookOpen
} from 'lucide-react'
import { formatDate } from '@/lib/utils'

const BlogSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'career', label: 'Career Tips' },
    { id: 'technology', label: 'Technology' },
    { id: 'success-stories', label: 'Success Stories' },
    { id: 'industry-insights', label: 'Industry Insights' },
  ]

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Explore the cutting-edge technologies and frameworks that are shaping the future of web development, from AI integration to progressive web apps.',
      content: 'In-depth analysis of emerging web development trends...',
      category: 'technology',
      author: {
        name: 'Sarah Johnson',
        role: 'Lead Instructor',
        avatar: '/api/placeholder/40/40'
      },
      publishedAt: '2024-01-15',
      readTime: 8,
      views: 1250,
      comments: 23,
      image: '/api/placeholder/600/300',
      tags: ['Web Development', 'Future Tech', 'Trends'],
      featured: true
    },
    {
      id: 2,
      title: 'From Zero to Developer: Complete Career Change Guide',
      excerpt: 'A comprehensive roadmap for transitioning into tech from any background, with practical steps and real success stories.',
      content: 'Complete guide for career changers...',
      category: 'career',
      author: {
        name: 'Michael Chen',
        role: 'Career Advisor',
        avatar: '/api/placeholder/40/40'
      },
      publishedAt: '2024-01-10',
      readTime: 12,
      views: 2100,
      comments: 45,
      image: '/api/placeholder/600/300',
      tags: ['Career Change', 'Beginner Guide', 'Success'],
      featured: true
    },
    {
      id: 3,
      title: 'Data Science Success: From Bootcamp to Big Tech',
      excerpt: 'Follow Aisha\'s journey from CAPACITI graduate to data scientist at Meta, including the challenges and breakthroughs along the way.',
      content: 'Success story of Aisha Patel...',
      category: 'success-stories',
      author: {
        name: 'Aisha Patel',
        role: 'Alumni',
        avatar: '/api/placeholder/40/40'
      },
      publishedAt: '2024-01-08',
      readTime: 6,
      views: 890,
      comments: 18,
      image: '/api/placeholder/600/300',
      tags: ['Data Science', 'Success Story', 'Meta'],
      featured: false
    },
    {
      id: 4,
      title: 'Cloud Computing Skills: What Employers Really Want',
      excerpt: 'An analysis of current market demands for cloud professionals, based on job postings and employer feedback.',
      content: 'Market analysis of cloud computing skills...',
      category: 'industry-insights',
      author: {
        name: 'James Wilson',
        role: 'Industry Analyst',
        avatar: '/api/placeholder/40/40'
      },
      publishedAt: '2024-01-05',
      readTime: 10,
      views: 1580,
      comments: 31,
      image: '/api/placeholder/600/300',
      tags: ['Cloud Computing', 'Job Market', 'Skills'],
      featured: false
    },
    {
      id: 5,
      title: 'Mobile App Development: Native vs Cross-Platform',
      excerpt: 'A detailed comparison of development approaches to help you choose the right path for your mobile development career.',
      content: 'Comparison of mobile development approaches...',
      category: 'technology',
      author: {
        name: 'David Mthembu',
        role: 'Mobile Development Instructor',
        avatar: '/api/placeholder/40/40'
      },
      publishedAt: '2024-01-03',
      readTime: 7,
      views: 980,
      comments: 15,
      image: '/api/placeholder/600/300',
      tags: ['Mobile Development', 'React Native', 'Flutter'],
      featured: false
    },
    {
      id: 6,
      title: 'Building Your Tech Portfolio: A Beginner\'s Guide',
      excerpt: 'Essential tips for creating a portfolio that stands out to employers, with examples from successful CAPACITI graduates.',
      content: 'Portfolio building guide...',
      category: 'career',
      author: {
        name: 'Lisa Nkomo',
        role: 'Career Coach',
        avatar: '/api/placeholder/40/40'
      },
      publishedAt: '2024-01-01',
      readTime: 9,
      views: 1420,
      comments: 27,
      image: '/api/placeholder/600/300',
      tags: ['Portfolio', 'Career Tips', 'Job Search'],
      featured: false
    }
  ]

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory)

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container-max section-padding" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Latest from Our Blog</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, tips, and stories from the world of tech education and career development.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-capaciti-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Featured Posts */}
        {activeCategory === 'all' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <BookOpen className="w-6 h-6 text-capaciti-primary mr-2" />
              Featured Articles
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
                >
                  {/* Post Image */}
                  <div className="h-48 bg-gradient-to-br from-capaciti-primary to-capaciti-secondary flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 text-center text-white">
                      <BookOpen className="w-12 h-12 mx-auto mb-2" />
                      <span className="text-sm font-medium">Featured Article</span>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Post Meta */}
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>

                    {/* Post Title & Excerpt */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-capaciti-light text-capaciti-primary text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Author & Stats */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-capaciti-primary to-capaciti-secondary rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 text-sm">{post.author.name}</div>
                          <div className="text-xs text-gray-500">{post.author.role}</div>
                        </div>
                      </div>
                      <button className="flex items-center text-capaciti-primary hover:text-blue-700 font-medium">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular Posts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {activeCategory !== 'all' && (
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              {categories.find(cat => cat.id === activeCategory)?.label} Articles
            </h3>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
              >
                {/* Post Image */}
                <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <Tag className="w-8 h-8 text-gray-400" />
                </div>

                <div className="p-6">
                  {/* Category Badge */}
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                    post.category === 'career' ? 'bg-blue-100 text-blue-800' :
                    post.category === 'technology' ? 'bg-green-100 text-green-800' :
                    post.category === 'success-stories' ? 'bg-purple-100 text-purple-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {categories.find(cat => cat.id === post.category)?.label}
                  </span>

                  {/* Post Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Post Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Post Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    <span>{post.readTime} min read</span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-capaciti-primary to-capaciti-secondary rounded-full flex items-center justify-center">
                        <User className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 text-xs">{post.author.name}</div>
                        <div className="text-xs text-gray-500">{formatDate(post.publishedAt)}</div>
                      </div>
                    </div>
                    <button className="text-capaciti-primary hover:text-blue-700 text-sm font-medium">
                      Read →
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-capaciti-light to-white rounded-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated with Tech Insights
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest articles, 
              career tips, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-capaciti-primary focus:border-transparent outline-none"
              />
              <button className="bg-capaciti-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Join 2,000+ subscribers. No spam, unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogSection