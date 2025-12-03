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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {/* Learning Timeline */}
              <div className="md:col-span-1 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4">Learning Journey</h3>
              <p className="text-sm text-gray-500 mb-6">Milestones & what I focused on during each phase.</p>

              <div className="relative pl-6">
                <div className="absolute left-3 top-2 bottom-2 w-[2px] bg-gray-200 dark:bg-slate-700"></div>

                {[
                { year: '2024', title: 'Advanced React Patterns', desc: 'Hooks, Suspense, performance tuning and state machines', icon: Code2 },
                { year: '2022', title: 'Cloud & Deployment', desc: 'Containerization, CI/CD, infra as code', icon: Server },
                { year: '2020', title: 'Full-Stack Focus', desc: 'APIs, Database modeling, Authentication', icon: Database },
                { year: '2018', title: 'Mobile & Responsive', desc: 'Progressive Web Apps and React Native basics', icon: Smartphone }
                ].map((stop, i) => {
                const Icon = stop.icon as React.ElementType;
                return (
                  <div key={i} className="relative mb-6">
                  <div className="absolute -left-1.5 top-0 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 w-6 h-6 rounded-full flex items-center justify-center">
                    <Icon size={14} className="text-primary-600" />
                  </div>
                  <div className="pl-6">
                    <div className="flex items-baseline justify-between">
                    <h4 className="font-semibold">{stop.title}</h4>
                    <span className="text-xs text-gray-400">{stop.year}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{stop.desc}</p>
                  </div>
                  </div>
                );
                })}
              </div>
              </div>

              {/* Visual Focus (circles for current learning) */}
              <div className="md:col-span-1 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 flex flex-col items-center">
              <h3 className="text-xl font-bold mb-4">Current Focus</h3>
              <p className="text-sm text-gray-500 mb-6 text-center">Where I invest most of my learning time right now.</p>

              <div className="grid grid-cols-3 gap-4 w-full">
                {[
                { label: 'TypeScript', pct: 85, color: '#0ea5a4' },
                { label: 'Cloud', pct: 70, color: '#6366f1' },
                { label: 'Design', pct: 60, color: '#f59e0b' }
                ].map((s, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                  aria-hidden
                  className="w-24 h-24 rounded-full flex items-center justify-center shadow-sm"
                  style={{
                    background: `conic-gradient(${s.color} ${s.pct}%, rgba(0,0,0,0.06) ${s.pct}% 100%)`
                  }}
                  >
                  <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
                    <span className="text-sm font-bold" style={{ color: s.color }}>{s.pct}%</span>
                  </div>
                  </div>
                  <div className="mt-3 text-sm font-medium text-gray-700 dark:text-gray-200">{s.label}</div>
                </div>
                ))}
              </div>

              <p className="text-xs text-gray-400 mt-4 text-center">Percent indicates current depth of hands-on practice.</p>
              </div>

              {/* Skills Comparison Bars */}
              <div className="md:col-span-1 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4">Skills Comparison</h3>
              <p className="text-sm text-gray-500 mb-6">Relative proficiency across different stacks.</p>

              {[
                { name: 'Backend', pct: 90, color: 'bg-gradient-to-r from-emerald-400 to-emerald-600' },
                { name: 'WordPress', pct: 95, color: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },
                { name: 'Frontend', pct: 70, color: 'bg-gradient-to-r from-primary-500 to-primary-700' },
                { name: 'DevOps', pct: 72, color: 'bg-gradient-to-r from-sky-400 to-sky-600' },
                { name: 'Database', pct: 80, color: 'bg-gradient-to-r from-violet-400 to-violet-600' },
              ].map((s, i) => (
                <div key={i} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{s.name}</span>
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">{s.pct}%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div
                  className={`${s.color} h-3 rounded-full shadow-sm`}
                  style={{ width: `${s.pct}%` }}
                  />
                </div>
                </div>
              ))}

              <div className="mt-6 text-xs text-gray-400">
                <strong>Note:</strong> Bars are relative and meant to show strengths across domains rather than absolute metrics.
              </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}