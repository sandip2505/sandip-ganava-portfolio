import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { TIMELINE, FUN_FACTS, HOBBIES } from '../constants';
import { Download, Briefcase, GraduationCap, Code2, Target, Heart, CheckCircle2, Zap, Smile, Award } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function About() {
  const workHistory = TIMELINE.filter(t => t.type === 'work');
  const educationHistory = TIMELINE.filter(t => t.type === 'education');

  return (
    <>
      <Helmet>
        <title>About Sandip Ganava | Full-Stack Developer Journey</title>
        <meta name="description" content="Get to know Sandip Ganava - his journey, education, work philosophy, and what drives him as a Full-Stack Developer." />
      </Helmet>

      <div className="bg-white dark:bg-slate-950 overflow-hidden">
        
        {/* 1. Introduction Section & 2. Professional Photo Section */}
        <section className="pt-10 pb-20 relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
              <motion.div 
                className="flex-1 space-y-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-block px-4 py-2 bg-primary-50 dark:bg-primary-900/30 text-primary-600 rounded-full font-medium text-sm mb-2">
                  About Me
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                  Architecting the Web,<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">One Line at a Time.</span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm Sandip Ganava, a Full-Stack Developer based in Ahmedabad, India. With over 3 years of hands-on experience, I bridge the gap between complex backend logic and beautiful frontend interfaces.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  My journey started with a curiosity for how things work on the internet, which quickly turned into a passion for building robust applications using the MERN stack, React Native, and WordPress.
                </p>
                <div className="pt-4">
                  <a href="#" className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold shadow-lg shadow-primary-500/30 transition-all hover:-translate-y-1">
                    <Download size={20} /> Download CV
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex-1 relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] mx-auto">
                   <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-3xl rotate-6 opacity-20 blur-2xl"></div>
                   <div className="absolute inset-0 bg-gray-200 dark:bg-slate-800 rounded-3xl -rotate-6 transform scale-95 border border-gray-100 dark:border-gray-700"></div>
                   <img 
                     src="https://media.licdn.com/dms/image/v2/D4D35AQG4Nmn9zZH3XQ/profile-framedphoto-shrink_200_200/B4DZl8BkpjJgAY-/0/1758722411541?e=1764943200&v=beta&t=agoLAWHDG5QbfpyzZ5-4sAV_X-Hm90UvyXecM-t6xmE" 
                     alt="Sandip Ganava" 
                     className="relative w-full h-full object-cover rounded-3xl shadow-2xl z-10 border-4 border-white dark:border-slate-800"
                   />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. Journey Timeline Section */}
        <section className="py-20 bg-gray-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Professional Journey</h2>
              <p className="text-gray-600 dark:text-gray-400">My path in the tech industry.</p>
            </motion.div>
            <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 dark:before:via-gray-700 before:to-transparent">
              {workHistory.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-primary-600">
                    <Briefcase size={18} />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <h3 className="font-bold text-gray-900 dark:text-white">{item.title}</h3>
                      <time className="text-xs font-medium text-primary-600 bg-primary-50 dark:bg-primary-900/30 px-2 py-1 rounded">{item.year}</time>
                    </div>
                    <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{item.company}</div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Education Section */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="text-center mb-16">
               <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
               <p className="text-gray-600 dark:text-gray-400">My academic foundation.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
               {educationHistory.map((edu, idx) => (
                 <motion.div 
                   key={idx}
                   whileHover={{ y: -5 }}
                   className="bg-gray-50 dark:bg-slate-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-start gap-4"
                 >
                   <div className="p-3 bg-white dark:bg-slate-800 rounded-lg text-primary-600 shadow-sm">
                     <GraduationCap size={24} />
                   </div>
                   <div>
                     <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">{edu.year}</span>
                     <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1 mb-2">{edu.title}</h3>
                     <p className="text-gray-700 dark:text-gray-300 font-medium">{edu.company}</p>
                     <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">{edu.description}</p>
                   </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </section>

        {/* 5. Work Philosophy/Values & 6. Work Approach */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950">
          <div className="container mx-auto px-4">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
               {/* Philosophy */}
               <div>
                 <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Work Philosophy</h2>
                 <div className="space-y-6">
                   {[
                     { title: "Clean Code", desc: "Writing code that is readable, maintainable, and scalable for future growth.", icon: Code2 },
                     { title: "User-Centric Design", desc: "Prioritizing the end-user experience in every architectural decision.", icon: Heart },
                     { title: "Continuous Learning", desc: "Staying ahead of the curve by mastering new technologies and patterns.", icon: Zap }
                   ].map((item, i) => (
                     <motion.div 
                       key={i}
                       initial={{ opacity: 0, x: -20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       transition={{ delay: i * 0.1 }}
                       className="flex items-start gap-4 p-4 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-colors"
                     >
                       <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 rounded-lg">
                         <item.icon size={20} />
                       </div>
                       <div>
                         <h4 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h4>
                         <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                       </div>
                     </motion.div>
                   ))}
                 </div>
               </div>

               {/* Approach */}
               <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">My Approach</h2>
                  <div className="relative border-l-2 border-dashed border-gray-300 dark:border-gray-700 ml-3 space-y-8 pl-8">
                    {[
                      { title: "Discovery & Strategy", desc: "Understanding the core problem before writing a single line of code." },
                      { title: "Agile Development", desc: "Iterative sprints with regular feedback loops to ensure alignment." },
                      { title: "Quality Assurance", desc: " rigorous testing and optimization for performance and security." },
                      { title: "Deployment & Scale", desc: "Smooth launch with monitoring and scalability in mind." }
                    ].map((step, i) => (
                      <div key={i} className="relative">
                        <div className="absolute -left-[41px] top-1 w-6 h-6 bg-white dark:bg-slate-900 border-2 border-primary-500 rounded-full flex items-center justify-center text-xs font-bold text-primary-600">
                          {i + 1}
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-white">{step.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{step.desc}</p>
                      </div>
                    ))}
                  </div>
               </div>
             </div>
          </div>
        </section>

        {/* 7. Personal Touch/Hobbies & 10. Fun Facts */}
        <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-600/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Hobbies */}
              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Smile className="text-primary-400" /> Beyond the Code
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {HOBBIES.map((hobby, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10"
                    >
                      <hobby.icon className="text-primary-400 mb-3" size={24} />
                      <h4 className="font-bold mb-2">{hobby.name}</h4>
                      <p className="text-sm text-gray-300">{hobby.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Fun Facts */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Fun Facts</h2>
                <div className="grid grid-cols-2 gap-4">
                  {FUN_FACTS.map((fact, i) => (
                    <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/5 text-center">
                      <fact.icon className="mx-auto text-primary-400 mb-3" size={24} />
                      <div className="text-2xl font-bold mb-1">{fact.value}</div>
                      <div className="text-xs uppercase tracking-wider text-gray-400">{fact.label}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 8. Achievement Highlights */}
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="container mx-auto px-4 text-center">
             <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Proud Moments</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { title: "Best Developer Award", org: "Tech Solutions Inc.", year: "2023", icon: Award },
                 { title: "Hackathon Winner", org: "Gujarat Tech Summit", year: "2022", icon: Target },
                 { title: "Open Source Contributor", org: "React Community", year: "Ongoing", icon: Code2 }
               ].map((ach, i) => (
                 <motion.div 
                   key={i}
                   whileHover={{ y: -10 }}
                   className="p-8 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-gray-800"
                 >
                   <div className="w-16 h-16 mx-auto bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-yellow-500 shadow-sm mb-4">
                     <ach.icon size={32} />
                   </div>
                   <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{ach.title}</h3>
                   <p className="text-gray-600 dark:text-gray-400">{ach.org}</p>
                   <span className="text-sm font-medium text-primary-600 mt-2 block">{ach.year}</span>
                 </motion.div>
               ))}
             </div>
          </div>
        </section>

        {/* 9. Why Work With Me Section */}
        <section className="py-20 bg-gray-50 dark:bg-slate-900">
           <div className="container mx-auto px-4 max-w-4xl">
             <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700">
               <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Why Work With Me?</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {[
                   "Proven track record of delivering projects on time",
                   "Deep understanding of modern tech stacks",
                   "Excellent communication and transparency",
                   "Focus on SEO, Performance, and Security",
                   "Creative problem solving aptitude",
                   "Post-launch support and maintenance"
                 ].map((reason, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <CheckCircle2 className="text-green-500 shrink-0" size={20} />
                     <span className="text-gray-700 dark:text-gray-300 font-medium">{reason}</span>
                   </div>
                 ))}
               </div>
             </div>
           </div>
        </section>

        {/* 11. Download CV Section */}
        <section className="py-20 text-center bg-white dark:bg-slate-950">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Interested in my full profile?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Download my resume to view detailed experience and qualifications.</p>
            <button className="px-10 py-4 bg-primary-600 text-white rounded-xl font-bold shadow-lg shadow-primary-500/30 hover:bg-primary-700 transition-all hover:scale-105 flex items-center justify-center gap-2 mx-auto">
              <Download size={24} /> Download CV
            </button>
          </div>
        </section>

      </div>
    </>
  );
}