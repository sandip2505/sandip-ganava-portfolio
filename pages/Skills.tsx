import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { SKILLS, CERTIFICATIONS, CURRENT_LEARNING } from '../constants';
import { Code2, Server, Database, Smartphone, Globe, Cloud, Layout, Terminal, Cpu, PenTool, Award, TrendingUp } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

interface SkillSectionProps {
  title: string;
  skills: typeof SKILLS;
  icon: React.ElementType;
}

const SkillSection: React.FC<SkillSectionProps> = ({ title, skills, icon: Icon }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600">
        <Icon size={24} />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill) => (
        <motion.div 
          key={skill.name}
          variants={itemAnim}
          className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all"
        >
          <div className="flex justify-between items-center mb-3">
            <span className="font-semibold text-gray-800 dark:text-gray-200">{skill.name}</span>
            <span className="text-xs font-bold text-primary-600 bg-primary-50 dark:bg-primary-900/20 px-2 py-1 rounded">{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="bg-primary-600 h-2 rounded-full"
            />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default function Skills() {
  const getSkills = (cat: string) => SKILLS.filter(s => s.category === cat);

  return (
    <>
      <Helmet>
        <title>Technical Skills | Sandip Ganava Portfolio</title>
        <meta name="description" content="Comprehensive overview of technical expertise including Frontend, Backend, DevOps, and Soft Skills." />
      </Helmet>

      <div className="bg-gray-50 dark:bg-slate-950 min-h-screen">
        
        {/* 1. Skills Overview Section */}
        <section className="pt-16 pb-12 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Technical Arsenal</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I believe in choosing the right tool for the job. Here is a breakdown of the technologies and methodologies I have mastered over the years.
            </p>
          </div>
        </section>

        {/* Main Skills Grid */}
        <section className="py-12 container mx-auto px-4">
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            
            {/* 2. Frontend */}
            <SkillSection title="Frontend Development" skills={getSkills('Frontend')} icon={Layout} />
            
            {/* 3. Backend */}
            <SkillSection title="Backend & APIs" skills={getSkills('Backend')} icon={Server} />
            
            {/* 4. WordPress */}
            <SkillSection title="WordPress Ecosystem" skills={getSkills('WordPress')} icon={Globe} />
            
            {/* 5. Database */}
            <SkillSection title="Database Management" skills={getSkills('Database')} icon={Database} />
            
            {/* 6. Mobile Development */}
            <SkillSection title="Mobile Development" skills={getSkills('Mobile')} icon={Smartphone} />
            
            {/* 7. DevOps & Deployment */}
            <SkillSection title="DevOps & Cloud" skills={getSkills('DevOps')} icon={Cloud} />
            
            {/* 8. Additional/Other Skills */}
            <SkillSection title="Additional Skills" skills={getSkills('Additional')} icon={Cpu} />

          </motion.div>
        </section>

        {/* 10. Tools & Software Section */}
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center flex items-center justify-center gap-2">
              <PenTool /> Tools of the Trade
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
               {getSkills('Tools').map((tool, i) => (
                 <div key={i} className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-slate-800 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1 cursor-default border border-gray-100 dark:border-gray-700">
                   <div className="text-gray-900 dark:text-white font-bold">{tool.name}</div>
                   <div className="text-xs text-primary-600 mt-1">Expert</div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* 9. Soft Skills Section */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Soft Skills</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {["Problem Solving", "Communication", "Team Leadership", "Agile Methodology", "Time Management", "Critical Thinking", "Mentoring", "Adaptability"].map((s, i) => (
              <span key={i} className="px-6 py-3 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-full shadow-sm border border-gray-200 dark:border-gray-700 font-medium hover:border-primary-500 hover:text-primary-500 transition-colors cursor-default">
                {s}
              </span>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 container mx-auto px-4 pb-20">
            
            {/* 11. Certifications Section */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
               <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                 <Award className="text-yellow-500" /> Certifications
               </h2>
               <div className="space-y-6">
                 {CERTIFICATIONS.map((cert, i) => (
                   <div key={i} className="flex gap-4 items-start">
                     <div className="mt-1 w-2 h-2 rounded-full bg-primary-500 shrink-0"></div>
                     <div>
                       <h4 className="font-bold text-gray-900 dark:text-white">{cert.name}</h4>
                       <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer} • {cert.date}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>

            {/* 14. Current Learning Section */}
            <div className="bg-gradient-to-br from-primary-900 to-secondary-900 p-8 rounded-2xl text-white">
               <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                 <TrendingUp /> Currently Learning
               </h2>
               <p className="text-primary-100 mb-6">Tech never stops evolving, and neither do I. Here is what I am currently exploring.</p>
               <div className="space-y-4">
                 {CURRENT_LEARNING.map((item, i) => (
                   <div key={i} className="bg-white/10 p-4 rounded-xl flex items-center justify-between">
                     <span className="font-medium">{item}</span>
                     <div className="flex gap-1">
                       <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                       <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse delay-75"></span>
                       <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse delay-150"></span>
                     </div>
                   </div>
                 ))}
               </div>
            </div>

        </div>

        {/* 12. Learning Journey (Visual representation) & 13. Skills Comparison */}
        <section className="py-16 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">Proficiency Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
               <div className="p-6">
                  <div className="h-32 flex items-end justify-center gap-4 mb-4">
                    <div className="w-12 bg-primary-200 dark:bg-primary-900/50 h-[80%] rounded-t-lg relative group">
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">80%</span>
                    </div>
                    <div className="w-12 bg-primary-400 dark:bg-primary-700 h-[95%] rounded-t-lg relative group">
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">95%</span>
                    </div>
                    <div className="w-12 bg-primary-600 dark:bg-primary-500 h-[90%] rounded-t-lg relative group">
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">90%</span>
                    </div>
                  </div>
                  <h3 className="font-bold">Stack Balance</h3>
                  <p className="text-sm text-gray-500">Design / Frontend / Backend</p>
               </div>
               
               <div className="p-6">
                 <div className="relative w-32 h-32 mx-auto rounded-full border-8 border-primary-100 dark:border-slate-800 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary-600">3+</span>
                 </div>
                 <h3 className="font-bold">Years Experience</h3>
                 <p className="text-sm text-gray-500">Consistent Growth</p>
               </div>

               <div className="p-6">
                 <div className="flex justify-center gap-2 mb-4">
                   <Terminal size={32} className="text-gray-400" />
                   <Code2 size={32} className="text-primary-600" />
                   <Globe size={32} className="text-gray-400" />
                 </div>
                 <h3 className="font-bold">Versatility</h3>
                 <p className="text-sm text-gray-500">Mobile, Web & CMS</p>
               </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}