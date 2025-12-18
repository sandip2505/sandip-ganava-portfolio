import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BLOGS, SOCIAL_LINKS } from '../constants';
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Twitter, Facebook, Link as LinkIcon, Check, ArrowRight } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';

declare global {
  interface Window {
    Prism: any;
  }
}

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 bg-primary-600 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default function BlogPost() {
  const { blogId } = useParams<{ blogId: string }>();
  const post = BLOGS.find(b => b.id === blogId);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogId]);

  // Syntax highlighting trigger
  useEffect(() => {
    if (window.Prism) {
      window.Prism.highlightAll();
    }
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = BLOGS.filter(b => b.id !== post.id && b.category === post.category).slice(0, 3);
  // If not enough related posts, just take recent ones
  const extraPosts = BLOGS.filter(b => b.id !== post.id && b.category !== post.category).slice(0, 3 - relatedPosts.length);
  const displayRelated = [...relatedPosts, ...extraPosts];

  const shareUrl = window.location.href;
  const shareTitle = post.title;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:text-[#0077b5] dark:hover:text-[#0077b5]'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:text-[#1DA1F2] dark:hover:text-[#1DA1F2]'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'hover:text-[#4267B2] dark:hover:text-[#4267B2]'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{post.title} | Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      
      <ScrollProgress />

      <article className="bg-white dark:bg-slate-950 min-h-screen pb-20 pt-8">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-primary-600 mb-8 transition-colors font-medium">
            <ArrowLeft size={20} className="mr-2" /> Back to Blog
          </Link>

          <header className="mb-10 text-center max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
              <span className="flex items-center gap-1.5"><Calendar size={16} /> {post.date}</span>
              <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
              <span className="flex items-center gap-1.5"><Clock size={16} /> {post.readTime}</span>
              <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700"></span>
              <span className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 rounded-full font-bold text-xs uppercase tracking-wide">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
              {post.title}
            </h1>
          </header>

          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden mb-16 shadow-2xl">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col lg:flex-row gap-16">
            {/* Main Content */}
            <div className="lg:w-[70%]">
               <div 
                 className="prose prose-lg dark:prose-invert max-w-none 
                 prose-headings:text-gray-900 dark:prose-headings:text-white prose-headings:font-bold
                 prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed
                 prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-a:no-underline hover:prose-a:underline
                 prose-strong:text-gray-900 dark:prose-strong:text-white
                 prose-code:text-primary-600 dark:prose-code:text-primary-400 prose-code:bg-primary-50 dark:prose-code:bg-primary-900/20 prose-code:px-1 prose-code:rounded prose-code:font-medium prose-code:before:content-none prose-code:after:content-none
                 prose-pre:bg-gray-900 dark:prose-pre:bg-slate-900 prose-pre:rounded-xl prose-pre:border prose-pre:border-gray-800"
                 dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.excerpt}</p>` }}
               ></div>

               {/* Author Bio Section */}
               <div className="mt-16 p-8 bg-gray-50 dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-lg shrink-0">
                    <img 
                      src="https://image2url.com/images/1766049935607-5f73a5bf-5161-4c58-bba3-5995eb4d71a6.jpg" 
                      alt="Sandip Ganava" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Written by Sandip Ganava</h3>
                    <p className="text-sm text-primary-600 font-medium mb-3">Full-Stack Developer & Tech Enthusiast</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                      Passionate about building scalable web applications and sharing knowledge with the developer community. 
                      Specializing in the MERN stack and modern frontend architecture.
                    </p>
                    <div className="flex justify-center md:justify-start gap-4">
                      {Object.entries(SOCIAL_LINKS).slice(0, 3).map(([key, url]) => (
                        <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary-600 transition-colors capitalize text-sm font-semibold">
                          {key}
                        </a>
                      ))}
                    </div>
                  </div>
               </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-[30%]">
              <div className="sticky top-28 space-y-8">
                {/* Share Card */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Share2 size={18} /> Share this post
                  </h3>
                  <div className="flex flex-col gap-3">
                    {socialLinks.map((platform) => (
                      <a
                        key={platform.name}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 transition-all hover:shadow-md hover:scale-[1.02] ${platform.color}`}
                      >
                        <platform.icon size={20} />
                        <span className="font-medium">{platform.name}</span>
                      </a>
                    ))}
                    <button
                      onClick={handleCopyLink}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 transition-all hover:shadow-md hover:scale-[1.02] hover:text-green-600 group"
                    >
                      {copied ? <Check size={20} /> : <LinkIcon size={20} />}
                      <span className="font-medium">{copied ? 'Copied!' : 'Copy Link'}</span>
                    </button>
                  </div>
                </div>

                {/* Categories / Tags (Placeholder) */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-4">Related Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Web Development', 'Performance', 'JavaScript', 'Backend', 'Tutorial'].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Posts Section */}
          <div className="mt-24 pt-12 border-t border-gray-200 dark:border-gray-800">
             <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">You might also like</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {displayRelated.map((related) => (
                 <Link to={`/blog/${related.id}`} key={related.id} className="group">
                   <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all h-full flex flex-col border border-gray-100 dark:border-gray-800">
                     <div className="h-48 overflow-hidden">
                       <img src={related.image} alt={related.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                     </div>
                     <div className="p-6 flex-1 flex flex-col">
                       <div className="flex items-center gap-2 text-xs text-primary-600 font-medium mb-3">
                         <Calendar size={12} /> {related.date}
                       </div>
                       <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                         {related.title}
                       </h3>
                       <div className="mt-auto pt-4 flex items-center text-sm font-medium text-gray-500 group-hover:text-primary-600 transition-colors">
                         Read Article <ArrowRight size={16} className="ml-1" />
                       </div>
                     </div>
                   </div>
                 </Link>
               ))}
             </div>
          </div>

        </div>
      </article>
    </>
  );
}