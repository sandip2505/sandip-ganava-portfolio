import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { ArrowRight, Search, Layout, Code, Rocket, MessagesSquare, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  { 
    id: "01", 
    title: "Discovery", 
    desc: "I dive deep into your requirements, understanding your business goals, target audience, and technical needs.",
    icon: Search,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    border: "group-hover:border-blue-500"
  },
  { 
    id: "02", 
    title: "Planning", 
    desc: "Architecting the solution, selecting the right tech stack, and designing the user experience flow.",
    icon: Layout,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
    border: "group-hover:border-purple-500"
  },
  { 
    id: "03", 
    title: "Development", 
    desc: "Writing clean, scalable code with regular updates. I follow agile methodology for iterative progress.",
    icon: Code,
    color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400",
    border: "group-hover:border-pink-500"
  },
  { 
    id: "04", 
    title: "Testing", 
    desc: "Rigorous testing across devices and browsers to ensure a bug-free, high-performance experience.",
    icon: MessagesSquare,
    color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
    border: "group-hover:border-orange-500"
  },
  { 
    id: "05", 
    title: "Deployment", 
    desc: "Seamless launch to production servers with proper CI/CD pipelines and security configurations.",
    icon: Rocket,
    color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    border: "group-hover:border-green-500"
  },
  { 
    id: "06", 
    title: "Support", 
    desc: "Ongoing maintenance, updates, and optimization to keep your application running smoothly.",
    icon: Headphones,
    color: "bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400",
    border: "group-hover:border-teal-500"
  }
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Development Services | Web & Mobile App Development</title>
        <meta name="description" content="Professional web and mobile development services including MERN Stack, React Native, WordPress, and API integration." />
      </Helmet>

      <section className="pt-16 pb-24 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Services I Offer</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              End-to-end development solutions designed to help your business grow, scalable from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link to={`/services/${service.id}`} className="block h-full">
                  <div className="h-full bg-gray-50 dark:bg-slate-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-primary-500 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 group flex flex-col">
                    <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-primary-600 shadow-sm mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <service.icon size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 transition-colors">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-1">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary-600 font-medium mt-auto">
                      Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div className="w-12 h-1 bg-gray-200 dark:bg-gray-700 rounded-full group-hover:w-full group-hover:bg-primary-500 transition-all duration-300 mt-6"></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Redesigned Process Section: Vertical Timeline */}
          <div className="relative max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-primary-600 font-bold tracking-wider uppercase text-sm bg-primary-50 dark:bg-primary-900/20 px-4 py-1.5 rounded-full">My Workflow</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4">How I Work</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
                A transparent, agile process ensures your project is delivered on time, within budget, and to the highest standard.
              </p>
            </div>

            <div className="relative">
               {/* Vertical Line */}
               <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-secondary-400 to-primary-200 dark:from-primary-900 dark:via-secondary-800 dark:to-primary-900 md:-translate-x-1/2 h-full"></div>

               <div className="space-y-12 md:space-y-20">
                 {steps.map((s, index) => (
                   <motion.div
                     key={s.id}
                     initial={{ opacity: 0, y: 50 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-100px" }}
                     transition={{ duration: 0.5, delay: index * 0.1 }}
                     className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                   >
                     {/* Spacer for Desktop Alignment */}
                     <div className="hidden md:block md:w-1/2"></div>
                     
                     {/* Center Node */}
                     <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                        <div className={`w-16 h-16 rounded-full border-4 border-white dark:border-slate-950 shadow-lg flex items-center justify-center ${s.color} relative group-hover:scale-110 transition-transform duration-300`}>
                           <s.icon size={24} />
                           {/* Pulse effect */}
                           <div className={`absolute inset-0 rounded-full ${s.color} opacity-20 animate-ping`}></div>
                        </div>
                     </div>

                     {/* Content Card */}
                     <div className={`pl-20 md:pl-0 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                        <div className={`group relative bg-white dark:bg-slate-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-transparent ${s.border.replace('group-hover:', 'hover:')}`}>
                           {/* Decorative Number */}
                           <span className="absolute top-4 right-6 text-6xl font-black text-gray-50 dark:text-slate-800/50 opacity-50 z-0 select-none group-hover:opacity-100 group-hover:text-gray-100 dark:group-hover:text-slate-800 transition-all duration-300">
                             {s.id}
                           </span>

                           <div className="relative z-10">
                             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{s.title}</h3>
                             <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{s.desc}</p>
                           </div>
                           
                           {/* Arrow indicator for desktop flow */}
                           <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white dark:bg-slate-900 border-t border-l border-gray-100 dark:border-gray-800 transform rotate-45 ${index % 2 === 0 ? '-right-2 border-r-0 border-b-0' : '-left-2 border-r border-b border-t-0 border-l-0'}`}></div>
                        </div>
                     </div>

                   </motion.div>
                 ))}
               </div>
            </div>

            <div className="mt-24 text-center">
              <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-bold shadow-xl shadow-primary-500/20 hover:shadow-primary-500/40 hover:scale-105 transition-all">
                Let's Start Your Project <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}