import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Code2, Layers, Users, Star, Quote, Plus, Minus, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS, SERVICES, TESTIMONIALS, FAQS, CLIENTS, BLOGS, SKILLS } from '../constants';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Sandip Ganava | Full-Stack Developer | MERN & WordPress Expert</title>
        <meta name="description" content="Portfolio of Sandip Ganava, a Full-Stack Developer with expertise in MERN Stack, React Native, and WordPress development." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
        <div className="absolute inset-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></div>
        
        {/* Animated Blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            <motion.div 
              className="flex-1 text-center md:text-left"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-block px-4 py-2 mb-4 rounded-full bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
                <span className="text-primary-600 dark:text-primary-400 font-medium">👋 Hello, I'm Sandip Ganava</span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
                Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Digital</span> Experiences
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                Full-Stack Developer specializing in MERN Stack, React Native, and WordPress. I turn complex problems into elegant, scalable solutions.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/projects" className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold shadow-lg shadow-primary-500/30 transition-all hover:scale-105 flex items-center justify-center gap-2">
                  View Projects <ArrowRight size={20} />
                </Link>
                <a href="#" className="px-8 py-4 bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2">
                  Download CV <Download size={20} />
                </a>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex-1 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                <img 
                  src="https://media.licdn.com/dms/image/v2/D4D35AQG4Nmn9zZH3XQ/profile-framedphoto-shrink_200_200/B4DZl8BkpjJgAY-/0/1758722411541?e=1764943200&v=beta&t=agoLAWHDG5QbfpyzZ5-4sAV_X-Hm90UvyXecM-t6xmE" 
                  alt="Sandip Ganava" 
                  className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl z-10"
                />
                
                {/* Floating Tech Badges */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl z-20 flex items-center gap-2"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="font-bold text-sm">Open for Work</span>
                </motion.div>

                <motion.div 
                  className="absolute bottom-10 -left-10 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-xl z-20"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  <Code2 className="text-blue-500" size={32} />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-slate-950 border-y border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Years Experience', value: '3+', icon: Code2 },
              { label: 'Projects Completed', value: '15+', icon: Layers },
              { label: 'Happy Clients', value: '100%', icon: Users },
              { label: 'Technologies', value: '10+', icon: Star },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-4"
              >
                <div className="bg-primary-50 dark:bg-slate-900 p-3 rounded-full mb-3 text-primary-600">
                  <stat.icon size={24} />
                </div>
                <span className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients / Brands Section */}
      <section className="py-10 bg-gray-50 dark:bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-4 mb-6">
          <p className="text-center text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Trusted By</p>
        </div>
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
            {[...CLIENTS, ...CLIENTS].map((client, index) => (
              <span key={index} className="text-2xl font-bold text-gray-300 dark:text-gray-700 hover:text-gray-500 dark:hover:text-gray-500 transition-colors cursor-default">
                {client.name}
              </span>
            ))}
          </div>
        </div>
        <style>{`
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-xl">A selection of my recent work in web and mobile development.</p>
            </div>
            <Link to="/projects" className="hidden md:flex items-center gap-2 text-primary-600 font-medium hover:gap-3 transition-all">
              View All <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                  <span className="absolute bottom-4 left-4 z-20 bg-primary-600 text-white text-xs px-3 py-1 rounded-full">{project.category}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs font-medium text-gray-500 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link to={`/projects/${project.id}`} className="block text-center w-full py-2 border border-primary-600 text-primary-600 dark:text-primary-400 rounded-lg font-medium hover:bg-primary-600 hover:text-white transition-colors">
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/projects" className="inline-flex items-center gap-2 text-primary-600 font-medium">
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">What I Do</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">High-quality development services tailored to your business needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.slice(0, 4).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-950 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 bg-primary-50 dark:bg-slate-900 rounded-xl flex items-center justify-center text-primary-600 shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description.substring(0, 80)}...
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-slate-950 border-y border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Client Testimonials</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Don't just take my word for it. Here's what my clients have to say.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 dark:bg-slate-900 p-8 rounded-2xl relative"
              >
                <Quote className="absolute top-8 right-8 text-primary-200 dark:text-primary-900/30" size={40} />
                <div className="flex gap-1 text-yellow-500 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic mb-6 relative z-10">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Latest Insights</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-xl">Tips, tutorials, and updates from the world of web development.</p>
            </div>
            <Link to="/blog" className="hidden md:flex items-center gap-2 text-primary-600 font-medium hover:gap-3 transition-all">
              Read Blog <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOGS.slice(0, 3).map((blog) => (
              <Link to={`/blog/${blog.id}`} key={blog.id} className="group">
                <div className="bg-white dark:bg-slate-950 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-xs text-primary-600 font-medium mb-3">
                      <Calendar size={12} />
                      {blog.date}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
           <div className="mt-8 text-center md:hidden">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary-600 font-medium">
              Read All Posts <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-400">Everything you need to know about working with me.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden bg-gray-50 dark:bg-slate-900 transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-semibold text-gray-900 dark:text-white text-lg">{faq.question}</span>
                  {activeAccordion === index ? (
                    <Minus className="text-primary-600 flex-shrink-0" size={20} />
                  ) : (
                    <Plus className="text-gray-500 flex-shrink-0" size={20} />
                  )}
                </button>
                <AnimatePresence>
                  {activeAccordion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-200 dark:border-gray-800 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-700 to-secondary-700 text-white overflow-hidden relative">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
         {/* Decorative Circles */}
         <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
         
         <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to bring your ideas to life?</h2>
            <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
              I'm currently available for freelance projects and full-time opportunities. Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="px-8 py-4 bg-white text-primary-700 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all w-full sm:w-auto">
                Let's Talk
              </Link>
              <Link to="/projects" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all w-full sm:w-auto">
                View Portfolio
              </Link>
            </div>
         </div>
      </section>
    </>
  );
}