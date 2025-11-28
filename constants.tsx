import { Project, Skill, Service, BlogPost, TimelineItem, Testimonial, Certification, FunFact, Hobby } from './types';
import { 
  Code2, Smartphone, Globe, Server, ShoppingCart, 
  Zap, Coffee, Music, Camera, Book, Award, Cpu, 
  Terminal, Database, Layout, GitBranch, Layers, ShieldCheck, Gamepad
} from 'lucide-react';

export const SOCIAL_LINKS = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  email: "sandip.ganava@email.com",
  phone: "+91 98765 43210"
};

export const PROJECTS: Project[] = [
  {
    id: "ai-content-studio",
    title: "AI Content Studio",
    subtitle: "Generative AI Marketing Tool",
    category: "Web Apps",
    description: "A SaaS platform leveraging OpenAI to help marketers generate high-converting copy, blog posts, and social media captions.",
    longDescription: "AI Content Studio is a modern SaaS application built with Next.js 14. It integrates OpenAI's GPT-4 API to provide users with specialized templates for various content needs. The platform features subscription management via Stripe, user authentication, and a responsive, dark-mode enabled UI designed for productivity.",
    techStack: ["Next.js", "TypeScript", "OpenAI API", "Stripe", "Tailwind CSS"],
    features: [
      "50+ AI Writing Templates",
      "Multi-language Support",
      "Rich Text Editor & Export",
      "Subscription & Credit System",
      "Project Organization"
    ],
    image: "https://picsum.photos/800/600?random=5",
    gallery: ["https://picsum.photos/800/600?random=51", "https://picsum.photos/800/600?random=52"],
    challenges: [
      { title: "Prompt Engineering", description: "Fine-tuning system prompts to ensure consistent, high-quality output across different templates." },
      { title: "Rate Limiting", description: "Handling API rate limits gracefully and implementing a robust queue system for heavy loads." }
    ],
    outcomes: [
      "Acquired 500+ users in the first month",
      "$2k MRR within 3 months",
      "Reduced content creation time by 80% for users"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "panchal-samaja-app",
    title: "Panchal Samaja App",
    subtitle: "Community Connect Platform",
    category: "Mobile Apps",
    description: "Community app with member directory, village listings, and committee management.",
    longDescription: "A comprehensive mobile application designed to bridge the gap between community members. The app facilitates seamless communication, event management, and digital directory services for the Panchal society.",
    techStack: ["React Native", "Node.js", "MongoDB", "Firebase"],
    features: [
      "Real-time news and updates",
      "Digital Member Directory with search",
      "Matrimonial section",
      "Village and Business listings",
      "Push Notifications for events"
    ],
    image: "https://picsum.photos/800/600?random=1",
    gallery: ["https://picsum.photos/800/600?random=11", "https://picsum.photos/800/600?random=12", "https://picsum.photos/800/600?random=13"],
    challenges: [
      { title: "Offline Availability", description: "Ensuring directory data was accessible without active internet." },
      { title: "Large Data Handling", description: "Optimizing list rendering for over 10,000 member records." }
    ],
    outcomes: [
      "5,000+ Active Downloads",
      "4.8/5 Average User Rating",
      "Reduced administrative communication time by 60%"
    ]
  },
  {
    id: "urban-estate",
    title: "Urban Estate",
    subtitle: "Modern Real Estate Marketplace",
    category: "Web Apps",
    description: "Property listing platform featuring advanced search, interactive maps, and virtual tour integration.",
    longDescription: "Urban Estate simplifies property hunting with a fast, intuitive interface connecting buyers, sellers, and agents. The backend handles complex search queries with geospatial data (MongoDB), while the frontend provides a seamless map-based exploration experience.",
    techStack: ["React", "Node.js", "Google Maps API", "AWS S3", "Socket.io"],
    features: [
      "Interactive Map Search",
      "Virtual Tour Viewer (360°)",
      "Real-time Chat with Agents",
      "Property Valuation Tool",
      "Advanced Filtering (Price, Amenities, Location)"
    ],
    image: "https://picsum.photos/800/600?random=7",
    gallery: ["https://picsum.photos/800/600?random=71", "https://picsum.photos/800/600?random=72"],
    challenges: [
      { title: "Geospatial Search", description: "Optimizing MongoDB queries for location-based searching within specific radii." },
      { title: "Image Optimization", description: "Handling uploads of high-resolution property images and optimizing them for fast loading." }
    ],
    outcomes: [
      "Used by 3 major real estate agencies",
      "Reduced property listing time by 40%",
      "Increased lead generation by 150%"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "ems-web-app",
    title: "EMS - Employee Management",
    category: "Web Apps",
    description: "Comprehensive web application for employee CRUD operations and attendance tracking.",
    longDescription: "A robust internal tool for HR and management to streamline employee data, attendance, leave requests, and performance evaluation. Built with a focus on security and role-based access control.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Role-based Access Control (Admin, HR, Employee)",
      "Visual Analytics Dashboard",
      "Attendance & Leave Management System",
      "Document Repository",
      "Automated Salary Slip Generation"
    ],
    image: "https://picsum.photos/800/600?random=2",
    gallery: ["https://picsum.photos/800/600?random=21", "https://picsum.photos/800/600?random=22"],
    challenges: [
      { title: "Security", description: "Implementing JWT and secure HTTP-only cookies for session management." },
      { title: "Complex Queries", description: "Aggregating attendance data for analytical reports." }
    ],
    outcomes: [
      "Deployed for a mid-sized firm with 200+ employees",
      "Eliminated paper-based leave tracking"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "flavordash-delivery",
    title: "FlavorDash",
    subtitle: "Hyperlocal Food Delivery App",
    category: "Mobile Apps",
    description: "A feature-rich food delivery application connecting users with local restaurants, featuring real-time tracking.",
    longDescription: "FlavorDash is a cross-platform mobile application built with React Native that streamlines the food ordering process. It features a dual-interface for Users and Delivery Partners. The app includes real-time GPS tracking using Google Maps API, secure payment gateways, and a sophisticated order matching algorithm.",
    techStack: ["React Native", "Redux", "Node.js", "Socket.io", "Google Maps API"],
    features: [
      "Live Order Tracking",
      "Multi-restaurant Cart",
      "Delivery Partner App Interface",
      "Push Notifications",
      "Secure Wallet System"
    ],
    image: "https://picsum.photos/800/600?random=8",
    gallery: ["https://picsum.photos/800/600?random=81", "https://picsum.photos/800/600?random=82"],
    challenges: [
      { title: "Real-time Location", description: "Optimizing battery usage while maintaining accurate GPS tracking for delivery drivers." },
      { title: "Order State Management", description: "Handling complex order states (Accepted, Preparing, Picked Up, Delivered) across multiple users." }
    ],
    outcomes: [
      "Onboarded 50+ local restaurants",
      "Average delivery time reduced by 15%",
      "Processed 10k+ orders in beta phase"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "eduprime-lms",
    title: "EduPrime LMS",
    subtitle: "Modern Learning Management System",
    category: "Web Apps",
    description: "A scalable education platform for online courses, quizzes, and student progress tracking.",
    longDescription: "EduPrime is a comprehensive Learning Management System designed for educational institutions. It allows instructors to create rich content courses with video streaming, interactive quizzes, and downloadable resources. Students get a personalized dashboard to track their learning journey and earn certificates.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "AWS S3"],
    features: [
      "Course Builder & Video Streaming",
      "Automated Quiz Grading",
      "Student Analytics Dashboard",
      "Certificate Generation",
      "Discussion Forums"
    ],
    image: "https://picsum.photos/800/600?random=9",
    gallery: ["https://picsum.photos/800/600?random=91", "https://picsum.photos/800/600?random=92"],
    challenges: [
      { title: "Video Content Delivery", description: "Implementing adaptive bitrate streaming for smooth video playback across different bandwidths." },
      { title: "Database Schema", description: "Designing a flexible schema to handle various course structures and user roles." }
    ],
    outcomes: [
      "Adopted by 2 coaching institutes",
      "Supports 1000+ concurrent students",
      "Zero downtime during exam peaks"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "fittrack-mobile",
    title: "FitTrack Pro",
    subtitle: "Personal Fitness Companion",
    category: "Mobile Apps",
    description: "A cross-platform mobile app for tracking workouts, nutrition, and personal records with progress visualization.",
    longDescription: "FitTrack Pro is designed for fitness enthusiasts who want detailed analytics of their training. Built with React Native, it offers offline-first functionality and syncs with cloud storage when online. It features interactive charts, a custom exercise database, and social sharing capabilities.",
    techStack: ["React Native", "Redux Toolkit", "Firebase", "Victory Native"],
    features: [
      "Custom Workout Routine Builder",
      "Nutrition & Calorie Logger",
      "Progress Photos & Body Measurements",
      "Apple Health & Google Fit Integration",
      "Offline Mode"
    ],
    image: "https://picsum.photos/800/600?random=6",
    gallery: ["https://picsum.photos/800/600?random=61"],
    challenges: [
      { title: "Data Synchronization", description: "Implementing conflict resolution strategies for offline data syncing." },
      { title: "Performance", description: "Rendering complex interactive charts smoothly on older devices." }
    ],
    outcomes: [
      "Featured in App Store Health category",
      "10k+ Monthly Active Users",
      "4.9 Star Rating"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "ecommerce-wordpress",
    title: "Luxury Fashion Store",
    category: "E-commerce",
    description: "Custom e-commerce solution with advanced product catalog and payment integration.",
    longDescription: "A high-performance WordPress/WooCommerce implementation for a fashion brand. Heavily customized to support variable products, wishlists, and a streamlined checkout flow.",
    techStack: ["WordPress", "WooCommerce", "PHP", "Stripe"],
    features: [
      "Custom Theme Development",
      "AJAX Product Filters",
      "Multi-currency support",
      "Integrated Shipping Calculator",
      "SEO Optimized Schema Markup"
    ],
    image: "https://picsum.photos/800/600?random=3",
    gallery: ["https://picsum.photos/800/600?random=31"],
    challenges: [
      { title: "Performance", description: "Achieving <2s load time despite high-resolution imagery." }
    ],
    outcomes: [
      "30% Increase in conversion rate",
      "95+ Google PageSpeed Score"
    ]
  },
  {
    id: "finsight-dashboard",
    title: "FinSight Analytics",
    subtitle: "Financial Data Visualization",
    category: "Web Apps",
    description: "Interactive dashboard for tracking personal finances, investments, and market trends.",
    longDescription: "FinSight is a data-heavy single-page application that aggregates financial data from various sources into a unified view. It uses D3.js for complex visualizations, enabling users to analyze spending habits, track investment portfolios, and forecast savings goals.",
    techStack: ["React", "D3.js", "Firebase", "Material UI", "Plaid API"],
    features: [
      "Bank Account Synchronization",
      "Interactive Expense Charts",
      "Investment Portfolio Tracking",
      "Budgeting Goals & Alerts",
      "Dark/Light Theme Support"
    ],
    image: "https://picsum.photos/800/600?random=10",
    gallery: ["https://picsum.photos/800/600?random=101"],
    challenges: [
      { title: "Data Visualization", description: "Rendering large datasets efficiently without blocking the main thread." },
      { title: "API Security", description: "Securely handling sensitive financial tokens and user data encryption." }
    ],
    outcomes: [
      "Featured in 'Top Finance Tools' blog",
      "Users reported 20% better savings habits",
      "Seamless integration with 15+ banks"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "global-travel-agent",
    title: "Global Travel Agent",
    category: "WordPress",
    description: "SaaS travel platform enabling user registration and package booking.",
    longDescription: "A multi-vendor travel marketplace allowing agents to register, list packages, and accept bookings. Includes a complex commission calculation system.",
    techStack: ["WordPress", "Custom Plugins", "PHP", "MySQL"],
    features: [
      "Vendor Dashboard",
      "Complex Booking Engine",
      "Dynamic Pricing Rules",
      "Sponsored Business Listings",
      "Automated Invoicing"
    ],
    image: "https://picsum.photos/800/600?random=4",
    gallery: ["https://picsum.photos/800/600?random=41"],
    challenges: [
      { title: "Plugin Conflict", description: "Resolving conflicts between multiple heavy-duty booking plugins." }
    ],
    outcomes: [
      "Platform hosts 50+ travel agents",
      "Automated 90% of booking workflow"
    ]
  }
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: "React.js", level: 95, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "JavaScript (ES6+)", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 98, category: "Frontend" },
  { name: "HTML5/CSS3", level: 98, category: "Frontend" },
  { name: "Redux / Context", level: 90, category: "Frontend" },
  
  // Backend
  { name: "Node.js", level: 90, category: "Backend" },
  { name: "Express.js", level: 90, category: "Backend" },
  { name: "REST APIs", level: 92, category: "Backend" },
  { name: "JWT/OAuth", level: 85, category: "Backend" },
  
  // Mobile
  { name: "React Native", level: 90, category: "Mobile" },
  { name: "Expo", level: 88, category: "Mobile" },
  
  // WordPress
  { name: "Custom Themes", level: 95, category: "WordPress" },
  { name: "Plugin Dev", level: 90, category: "WordPress" },
  { name: "WooCommerce", level: 88, category: "WordPress" },
  { name: "PHP", level: 85, category: "WordPress" },
  
  // Database
  { name: "MongoDB", level: 90, category: "Database" },
  { name: "MySQL", level: 85, category: "Database" },
  { name: "Firebase", level: 80, category: "Database" },
  
  // DevOps
  { name: "Git/GitHub", level: 95, category: "DevOps" },
  { name: "CI/CD", level: 80, category: "DevOps" },
  { name: "Vercel/Netlify", level: 90, category: "DevOps" },
  { name: "cPanel", level: 88, category: "DevOps" },
  
  // Tools
  { name: "VS Code", level: 100, category: "Tools" },
  { name: "Postman", level: 95, category: "Tools" },
  { name: "Figma", level: 80, category: "Tools" },
  { name: "Docker", level: 70, category: "Tools" },

  // Additional
  { name: "Strapi CMS", level: 75, category: "Additional" },
  { name: "Stripe/Razorpay", level: 90, category: "Additional" },
  { name: "SEO Basics", level: 85, category: "Additional" }
];

export const SERVICES: Service[] = [
  {
    id: "mern",
    title: "MERN Stack Development",
    description: "Full-stack web applications with MongoDB, Express.js, React, and Node.js. Scalable, secure, and high-performance solutions.",
    longDescription: "Unlock the full potential of your business with custom MERN stack solutions. I build single-page applications (SPAs) that are fast, responsive, and easy to maintain. From database design with MongoDB to dynamic front-end interfaces with React, every layer is optimized for performance.",
    icon: Code2,
    features: [
      "Single Page Application (SPA) Development",
      "Server-side Rendering with Next.js",
      "RESTful & GraphQL API Architecture",
      "Real-time Data Updates",
      "Secure Authentication & Authorization"
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "Docker"],
    benefits: [
      { title: "Scalability", description: "Architecture designed to handle growth in users and data." },
      { title: "Performance", description: "Lightning-fast load times and smooth interactions." },
      { title: "Security", description: "Industry-standard security practices to protect your data." }
    ]
  },
  {
    id: "mobile",
    title: "React Native Apps",
    description: "Cross-platform mobile applications for iOS and Android with native performance and seamless user experience.",
    longDescription: "Reach customers on both iOS and Android platforms with a single codebase. I specialize in building high-quality, cross-platform mobile apps using React Native that offer a native look and feel. Whether you need a simple utility app or a complex social platform, I deliver smooth, crash-free experiences.",
    icon: Smartphone,
    features: [
      "Cross-Platform Development (iOS & Android)",
      "Native Module Integration",
      "Offline-First Architecture",
      "Push Notifications Setup",
      "App Store & Play Store Deployment"
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Firebase", "Redux Toolkit"],
    benefits: [
      { title: "Cost Effective", description: "Save up to 40% development costs with a single codebase." },
      { title: "Faster Time to Market", description: "Launch on both platforms simultaneously." },
      { title: "Native Performance", description: "Smooth 60fps animations and native gesture handling." }
    ]
  },
  {
    id: "wordpress",
    title: "WordPress Development",
    description: "Custom themes, plugins, and WooCommerce solutions tailored to your business needs.",
    longDescription: "Go beyond standard templates with a custom WordPress website tailored to your brand. I provide comprehensive WordPress services ranging from custom theme development to plugin creation and performance tuning. I ensure your site is secure, SEO-friendly, and easy for you to manage.",
    icon: Globe,
    features: [
      "Custom Theme Development",
      "Plugin Development & Customization",
      "WooCommerce Store Setup",
      "Speed Optimization",
      "Site Migration & Security Hardening"
    ],
    technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "WooCommerce", "ACF"],
    benefits: [
      { title: "Easy Management", description: "User-friendly dashboard for non-technical team members." },
      { title: "SEO Friendly", description: "Built with clean code structure that search engines love." },
      { title: "Extensible", description: "Easily add new features as your business grows." }
    ]
  },
  {
    id: "api",
    title: "API Development",
    description: "RESTful API development, third-party service integration, and robust backend architecture.",
    longDescription: "The backbone of any modern application is a robust API. I design and build secure, documented, and scalable APIs that allow your different software systems to communicate effectively. Whether you need to expose data to mobile apps or integrate with third-party services like Stripe or Twilio.",
    icon: Server,
    features: [
      "RESTful API Design",
      "GraphQL Implementation",
      "Third-party Integrations (Payment, SMS, Maps)",
      "Microservices Architecture",
      "Swagger/OpenAPI Documentation"
    ],
    technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "AWS Lambda", "Swagger"],
    benefits: [
      { title: "Interoperability", description: "Seamlessly connect web, mobile, and third-party systems." },
      { title: "Security", description: "OAuth2 implementation and rate limiting to protect resources." },
      { title: "Efficiency", description: "Optimized data payloads to reduce bandwidth and latency." }
    ]
  },
  {
    id: "ecommerce",
    title: "E-commerce Solutions",
    description: "Complete online store setup with payment gateways, inventory management, and SEO optimization.",
    longDescription: "Transform your retail business with a powerful online store. I build custom e-commerce solutions that drive sales and simplify management. From product catalogs to secure checkout flows and inventory management, I handle the technical complexities so you can focus on selling.",
    icon: ShoppingCart,
    features: [
      "Custom Storefront Design",
      "Payment Gateway Integration (Stripe, PayPal, Razorpay)",
      "Inventory & Order Management",
      "Cart & Checkout Optimization",
      "Customer Account Portals"
    ],
    technologies: ["WooCommerce", "Shopify", "Next.js Commerce", "Stripe API", "PostgreSQL"],
    benefits: [
      { title: "Conversion Focused", description: "UX designed specifically to maximize sales and reduce cart abandonment." },
      { title: "Secure Payments", description: "PCI-compliant payment processing for customer peace of mind." },
      { title: "Analytics Ready", description: "Integrated with Google Analytics to track sales performance." }
    ]
  },
  {
    id: "performance",
    title: "Performance Optimization",
    description: "Website speed optimization, database tuning, caching strategies, and Core Web Vitals improvement.",
    longDescription: "A slow website costs you customers. I analyze and optimize every aspect of your web application to ensure lightning-fast load times. From optimizing images and code splitting to implementing advanced caching strategies and database indexing.",
    icon: Zap,
    features: [
      "Core Web Vitals Audit",
      "Code Splitting & Lazy Loading",
      "Server-side Caching (Redis)",
      "Database Indexing & Query Optimization",
      "CDN Configuration"
    ],
    technologies: ["Lighthouse", "Redis", "Cloudflare", "Webpack", "React Profiler"],
    benefits: [
      { title: "Better SEO", description: "Google ranks faster sites higher in search results." },
      { title: "Higher Retention", description: "Users stay longer and bounce less on fast-loading sites." },
      { title: "Reduced Costs", description: "Optimized code consumes fewer server resources." }
    ]
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2023 - Present",
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    description: "Leading a team of 5 developers, architecting scalable MERN solutions and overseeing mobile app deployment.",
    type: 'work'
  },
  {
    year: "2021 - 2023",
    title: "Full Stack Developer",
    company: "Creative Web Agency",
    description: "Developed 20+ WordPress custom themes and successfully launched 3 major React Native applications.",
    type: 'work'
  },
  {
    year: "2020 - 2021",
    title: "Junior Web Developer",
    company: "StartUp Hub",
    description: "Collaborated on frontend development using React.js and maintained legacy PHP systems.",
    type: 'work'
  },
  {
    year: "2016 - 2020",
    title: "B.Tech in Computer Engineering",
    company: "Gujarat Technological University",
    description: "Graduated with Distinction. Focused on Software Engineering and Data Structures.",
    type: 'education'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Coursera / Meta",
    date: "2023"
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2022"
  },
  {
    name: "MongoDB Node.js Developer Path",
    issuer: "MongoDB University",
    date: "2021"
  }
];

export const FUN_FACTS: FunFact[] = [
  { label: "Coffee Consumed", value: "2,500+ Cups", icon: Coffee },
  { label: "Lines of Code", value: "500k+", icon: Code2 },
  { label: "Hours Debugging", value: "Too Many", icon: Terminal },
  { label: "Night Owl", value: "Confirmed", icon: Zap }
];

export const HOBBIES: Hobby[] = [
  { name: "Photography", description: "Capturing landscapes and urban life.", icon: Camera },
  { name: "Tech Blogging", description: "Sharing knowledge on Dev.to and Medium.", icon: Book },
  { name: "Gaming", description: "Strategic RPGs and FPS games.", icon: Gamepad },
  { name: "Music", description: "Listening to Lo-Fi while coding.", icon: Music }
];

export const BLOGS: BlogPost[] = [
  {
    id: "1",
    title: "10 React Performance Optimization Techniques",
    excerpt: "Discover how to speed up your React applications using memoization, lazy loading, and code splitting.",
    date: "May 15, 2024",
    category: "React",
    readTime: "5 min read",
    image: "https://picsum.photos/800/400?random=101",
    content: `
      <h2>Introduction</h2>
      <p>React is fast by default, but as applications grow, performance bottlenecks can appear. In this article, we'll explore 10 actionable techniques to optimize your React applications for speed and efficiency.</p>
      
      <h3>1. Memoization with React.memo and useMemo</h3>
      <p>Prevents unnecessary re-renders of components by caching the result of a calculation or a component rendering.</p>
      <pre><code class="language-jsx">
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* Complex rendering logic */}</div>;
});
      </code></pre>

      <h3>2. Code Splitting with React.lazy</h3>
      <p>Load components only when they are needed using dynamic imports.</p>
      <pre><code class="language-jsx">
const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OtherComponent />
    </Suspense>
  );
}
      </code></pre>

      <h3>3. Virtualize Long Lists</h3>
      <p>If you need to render a list with thousands of items, use libraries like <code>react-window</code> or <code>react-virtualized</code> to only render the items currently visible in the viewport.</p>

      <h3>4. Optimize Images</h3>
      <p>Use modern formats like WebP and lazy loading attributes on your image tags. Next.js provides a built-in Image component that handles this automatically.</p>

      <h3>Conclusion</h3>
      <p>By implementing these strategies, you can significantly reduce the initial load time and improve the runtime performance of your React applications.</p>
    `
  },
  {
    id: "2",
    title: "Building Scalable REST APIs with Node.js",
    excerpt: "A comprehensive guide to structuring your Express.js applications for scale and maintainability.",
    date: "April 22, 2024",
    category: "Backend",
    readTime: "8 min read",
    image: "https://picsum.photos/800/400?random=102",
    content: `
      <h2>Why Structure Matters?</h2>
      <p>When building a backend service, the file structure determines how easy it is to maintain, test, and scale the application. A "spaghetti code" structure can lead to technical debt very quickly.</p>

      <h3>The Layered Architecture</h3>
      <p>Separating concerns is key. A common pattern involves distinguishing between Routes, Controllers, Services, and Data Access Layers.</p>
      <ul>
        <li><strong>Routes:</strong> Define the endpoints and map them to controllers.</li>
        <li><strong>Controllers:</strong> Handle the HTTP request/response lifecycle.</li>
        <li><strong>Services:</strong> Contain the business logic.</li>
        <li><strong>Models:</strong> Interact with the database.</li>
      </ul>

      <h3>Example Controller</h3>
      <pre><code class="language-javascript">
// userController.js
const userService = require('../services/userService');

exports.getUser = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
};
      </code></pre>

      <h3>Error Handling</h3>
      <p>Implement a global error handler middleware to maintain consistency in your API responses.</p>
    `
  },
  {
    id: "3",
    title: "WordPress Custom Plugin Development",
    excerpt: "Learn the best practices for creating secure and efficient WordPress plugins from scratch.",
    date: "March 10, 2024",
    category: "WordPress",
    readTime: "6 min read",
    image: "https://picsum.photos/800/400?random=103",
    content: `
      <h2>Getting Started with Plugin Development</h2>
      <p>WordPress powers over 40% of the web. Creating custom plugins allows you to extend its functionality to meet specific business needs.</p>

      <h3>Standard File Structure</h3>
      <p>Always create a folder for your plugin. The main PHP file should contain the plugin header comment.</p>
      <pre><code class="language-php">
<?php
/*
Plugin Name: My Custom Plugin
Description: Adds amazing functionality.
Version: 1.0
Author: Sandip Ganava
*/

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
      </code></pre>

      <h3>Security Best Practices</h3>
      <p>Sanitize input and escape output. Never trust user data.</p>
      <pre><code class="language-php">
$title = sanitize_text_field( $_POST['title'] );
echo esc_html( $title );
      </code></pre>

      <h3>Using Hooks (Actions and Filters)</h3>
      <p>Hooks allow you to insert your code into specific points of the WordPress execution lifecycle.</p>
    `
  },
  {
    id: "4",
    title: "Mastering TypeScript Generics",
    excerpt: "Unlock the full power of TypeScript by understanding how to write reusable and type-safe code with Generics.",
    date: "Feb 15, 2024",
    category: "Frontend",
    readTime: "7 min read",
    image: "https://picsum.photos/800/400?random=104",
    content: `
      <h2>What are Generics?</h2>
      <p>Generics allow you to define a component or function that can work with a variety of types rather than a single one. This allows users to consume these components and use their own types.</p>

      <h3>Basic Syntax</h3>
      <p>Here is a simple identity function using generics:</p>
      <pre><code class="language-typescript">
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("myString");
      </code></pre>

      <h3>Generic Interfaces</h3>
      <p>You can also define interfaces that accept type parameters.</p>
      <pre><code class="language-typescript">
interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
      </code></pre>

      <h3>Constraints</h3>
      <p>Sometimes you want to limit the kinds of types that are accepted. You can use the <code>extends</code> keyword.</p>
    `
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    role: "CEO",
    company: "TechVentures",
    content: "Sandip transformed our outdated legacy system into a modern, high-speed web app. His attention to detail is unmatched.",
    avatar: "https://picsum.photos/100/100?random=50"
  },
  {
    id: "2",
    name: "Sarah Williams",
    role: "Product Manager",
    company: "Global Travel",
    content: "The mobile app Sandip built for us has flawless performance on both iOS and Android. Truly a React Native expert.",
    avatar: "https://picsum.photos/100/100?random=51"
  },
  {
    id: "3",
    name: "Michael Chen",
    role: "CTO",
    company: "InnovateX",
    content: "Working with Sandip was a breeze. He understands business requirements and translates them into technical solutions effortlessly.",
    avatar: "https://picsum.photos/100/100?random=52"
  }
];

export const FAQS = [
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on complexity. A simple website typically takes 2-4 weeks, while complex web applications or mobile apps may take 2-3 months. I provide a detailed timeline during the discovery phase."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes, I offer 30 days of free support after deployment to ensure everything runs smoothly. I also offer ongoing maintenance packages for long-term updates and security."
  },
  {
    question: "How do you handle project communication?",
    answer: "I believe in transparent communication. We can communicate via Slack, Email, or WhatsApp. I provide weekly progress updates and host bi-weekly video calls for demos and feedback."
  },
  {
    question: "Do you work with existing codebases?",
    answer: "Absolutely. I can audit your current codebase, perform refactoring, fix bugs, and add new features while ensuring backward compatibility and performance improvements."
  }
];

export const CLIENTS = [
  { name: "TechVentures", logo: "TV" },
  { name: "Global Travel", logo: "GT" },
  { name: "InnovateX", logo: "IX" },
  { name: "Alpha Corp", logo: "AC" },
  { name: "Beta Systems", logo: "BS" },
  { name: "Omega Labs", logo: "OL" }
];

export const CURRENT_LEARNING = [
  "AI Agents & LLM Integration",
  "Rust for WebAssembly",
  "Advanced GraphQL Patterns"
];