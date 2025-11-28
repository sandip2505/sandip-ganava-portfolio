import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { ArrowLeft, CheckCircle2, ArrowRight, Zap, Layers, Cpu, Code2 } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = SERVICES.find(s => s.id === serviceId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{service.title} | Services</title>
        <meta name="description" content={service.description} />
      </Helmet>

      <div className="bg-white dark:bg-slate-950 min-h-screen pb-20">
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-20 bg-gray-50 dark:bg-slate-900 overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary-100 dark:bg-secondary-900/20 rounded-full blur-3xl opacity-50"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <Link to="/services" className="inline-flex items-center text-gray-500 hover:text-primary-600 mb-8 transition-colors font-medium">
              <ArrowLeft size={20} className="mr-2" /> Back to Services
            </Link>
            
            <div className="max-w-4xl">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-primary-600 shadow-lg mb-8"
              >
                <service.icon size={32} />
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              >
                {service.title}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl"
              >
                {service.longDescription || service.description}
              </motion.p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content (Left Column) */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Features Grid */}
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600">
                    <Layers size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">What I Deliver</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.features?.map((feature, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
                    >
                      <div className="mt-1 bg-green-100 dark:bg-green-900/30 p-1.5 rounded-full text-green-600 dark:text-green-400 shrink-0">
                        <CheckCircle2 size={16} />
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Benefits Section */}
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600">
                    <Zap size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Key Benefits</h2>
                </div>

                <div className="space-y-6">
                  {service.benefits?.map((benefit, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-6 p-6 bg-gray-50 dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-gray-800"
                    >
                      <div className="hidden sm:flex w-10 h-10 bg-white dark:bg-slate-800 rounded-full items-center justify-center text-primary-600 font-bold shadow-sm shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

            </div>

            {/* Sidebar (Right Column) */}
            <div className="space-y-8">
              
              {/* Tech Stack Card */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Cpu size={20} className="text-primary-600" />
                  <h3 className="font-bold text-gray-900 dark:text-white">Technologies</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.technologies?.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1.5 bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-100 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-primary-600 to-secondary-600 p-8 rounded-2xl text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Ready to start?</h3>
                <p className="text-primary-100 mb-8 leading-relaxed">
                  Let's discuss how we can implement this solution for your business.
                </p>
                <Link 
                  to="/contact" 
                  className="block w-full py-4 bg-white text-primary-600 text-center rounded-xl font-bold hover:shadow-lg transition-all hover:scale-[1.02]"
                >
                  Get a Free Quote
                </Link>
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-primary-200">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Currently accepting new projects
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}