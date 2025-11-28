import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowLeft, Github, ExternalLink, CheckCircle2, Layers, AlertCircle, Trophy } from 'lucide-react';

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = PROJECTS.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | Project Details</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <div className="bg-white dark:bg-slate-950 min-h-screen pb-20">
        {/* Header Image */}
        <div className="relative h-[50vh] w-full">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10"></div>
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full z-20 p-4 md:p-8">
            <div className="container mx-auto">
              <Link to="/projects" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
                <ArrowLeft size={20} className="mr-2" /> Back to Projects
              </Link>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{project.title}</h1>
              <p className="text-xl text-gray-200 max-w-2xl">{project.subtitle || project.category}</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-10 relative z-30">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Overview</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {project.longDescription}
                </p>

                <div className="flex flex-wrap gap-4 mt-6">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors">
                      <Github size={18} /> View Code
                    </a>
                  )}
                </div>
              </motion.div>

              {/* Key Features */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <Layers className="text-primary-600" /> Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              {/* Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gallery.map((img, idx) => (
                  <img key={idx} src={img} alt={`Screenshot ${idx}`} className="rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer" />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Tech Stack */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800"
              >
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-primary-50 dark:bg-slate-800 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium border border-primary-100 dark:border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Challenges */}
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <AlertCircle size={18} className="text-orange-500" /> Technical Challenges
                </h3>
                <div className="space-y-4">
                  {project.challenges.map((c, i) => (
                    <div key={i}>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm">{c.title}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{c.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div className="bg-gradient-to-br from-primary-600 to-secondary-600 p-6 rounded-2xl shadow-lg text-white">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                  <Trophy size={18} /> Outcomes
                </h3>
                <ul className="space-y-3">
                  {project.outcomes.map((o, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-primary-50">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-white rounded-full shrink-0"></span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}