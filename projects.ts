export const PROJECTS: Project[] = [
  {
    id: "panchal-samaj-application",
    title: "Panchal Samaj Application",
    subtitle: "Community Management Mobile App",
    category: "Mobile Apps",
    description: "A comprehensive mobile application for managing community events, member directories, and social networking for the Panchal Samaj community.",
    longDescription: "Panchal Samaj Application is a feature-rich mobile platform built with React Native that serves as a central hub for the Panchal Samaj community. The app facilitates seamless communication between community members, event management, matrimonial services, and business directory listings. With a focus on cultural preservation and community engagement, the application provides tools for announcements, photo galleries, and member interactions.",
    techStack: [
      "React Native",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Push Notifications"
    ],
    features: [
      "Member Directory & Profiles",
      "Event Management & RSVP",
      "Matrimonial Listings",
      "Business Directory",
      "News & Announcements",
      "Photo & Video Gallery",
      "Push Notifications",
      "Multi-language Support"
    ],
    image: "/media/panchal-samaj-1.jpg",
    gallery: [
      "/media/panchal-samaj-1.jpg",
      "/media/panchal-samaj-2.jpg",
      "/media/panchal-samaj-3.jpg",
      "/media/panchal-samaj-4.jpg"
    ],
    challenges: [
      {
        title: "Offline Functionality", description: "Implementing offline-first architecture to ensure users can access critical information without internet connectivity."
      },
      {
        title: "Scalable Database Design", description: "Designing a flexible schema to accommodate diverse community data while maintaining query performance."
      },
      {
        title: "Cross-platform Consistency", description: "Ensuring consistent UI/UX across iOS and Android platforms while following platform-specific guidelines."
      }
    ],
    outcomes: [
      "Successfully onboarded 1000+ community members",
      "Increased event participation by 65%",
      "Reduced communication overhead for community leaders by 70%"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "ems-employee-management-system",
    title: "Employee Management System",
    subtitle: "HR & Workforce Management",
    category: "Web Apps",
    description: "Enterprise-grade web application for comprehensive employee lifecycle management, attendance tracking, and performance evaluation.",
    longDescription: "Employee Management System (EMS) is a full-stack MERN application designed to streamline HR operations and workforce management. The platform offers end-to-end employee lifecycle management from onboarding to offboarding, with robust features for attendance tracking, leave management, payroll integration, and performance reviews. Built with scalability in mind, EMS supports role-based access control ensuring data security and privacy compliance.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "JWT",
      "Material-UI"
    ],
    features: [
      "Employee CRUD Operations",
      "Attendance & Time Tracking",
      "Leave Management System",
      "Performance Evaluation",
      "Payroll Integration",
      "Document Management",
      "Role-based Access Control",
      "Analytics Dashboard"
    ],
    image: "/media/ems-1.jpg",
    gallery: [
      "/media/ems-1.jpg",
      "/media/ems-2.jpg",
      "/media/ems-3.jpg",
      "/media/ems-4.jpg"
    ],
    challenges: [
      {
        title: "Complex Permission System", description: "Implementing a granular role-based access control system with multiple hierarchical levels."
      },
      {
        title: "Real-time Attendance", description: "Developing a reliable real-time attendance system with geolocation verification and anti-fraud measures."
      },
      {
        title: "Data Privacy Compliance", description: "Ensuring GDPR and local data protection compliance while maintaining system functionality."
      }
    ],
    outcomes: [
      "Reduced HR administrative tasks by 60%",
      "Improved attendance accuracy to 99.5%",
      "Decreased payroll processing time by 75%"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "bandhun-wordpress-platform",
    title: "Bandhun",
    subtitle: "Custom WordPress Solution",
    category: "CMS Websites",
    description: "Customized WordPress platform with advanced custom post types and plugins for specialized content management.",
    longDescription: "Bandhun is a sophisticated WordPress-based platform featuring custom-built post types and plugins tailored to specific business requirements. The project showcases advanced WordPress development techniques including custom taxonomies, meta boxes, and REST API extensions. The solution provides a user-friendly admin interface while maintaining flexibility for future expansions and integrations.",
    techStack: [
      "WordPress",
      "PHP",
      "MySQL",
      "JavaScript",
      "Custom Post Types",
      "ACF",
      "Custom Plugins"
    ],
    features: [
      "Custom Post Types",
      "Advanced Custom Fields",
      "Custom Plugin Development",
      "REST API Integration",
      "Custom Admin Interface",
      "SEO Optimization",
      "Performance Optimization",
      "Multi-user Management"
    ],
    image: "/media/bandhun-1.jpg",
    gallery: [
      "/media/bandhun-1.jpg",
      "/media/bandhun-2.jpg",
      "/media/bandhun-3.jpg",
      "/media/bandhun-4.jpg"
    ],
    challenges: [
      {
        title: "Plugin Architecture", description: "Designing modular and reusable plugin architecture that follows WordPress coding standards."
      },
      {
        title: "Performance Optimization", description: "Optimizing custom queries and implementing caching strategies to handle large datasets."
      },
      {
        title: "Backward Compatibility", description: "Ensuring custom functionality remains compatible with WordPress core updates."
      }
    ],
    outcomes: [
      "Reduced content management time by 50%",
      "Improved site performance with 40% faster load times",
      "Enhanced SEO rankings with custom schema implementation"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "fitflex-gym-management",
    title: "FitFlex Gym",
    subtitle: "Gym Management Platform",
    category: "Web Apps",
    description: "Complete gym management solution for membership tracking, workout plans, and trainer scheduling.",
    longDescription: "FitFlex Gym is a comprehensive fitness center management system built on the MERN stack. The platform streamlines gym operations by providing tools for membership management, class scheduling, trainer assignments, payment processing, and member progress tracking. The application features separate dashboards for administrators, trainers, and members, creating an integrated ecosystem for fitness management.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe API",
      "Socket.io",
      "Chart.js"
    ],
    features: [
      "Membership Management",
      "Class & Trainer Scheduling",
      "Workout Plan Builder",
      "Progress Tracking",
      "Payment Integration",
      "Attendance System",
      "Nutritional Guidance",
      "Mobile-responsive Design"
    ],
    image: "/media/fitflex-1.jpg",
    gallery: [
      "/media/fitflex-1.jpg",
      "/media/fitflex-2.jpg",
      "/media/fitflex-3.jpg",
      "/media/fitflex-4.jpg"
    ],
    challenges: [
      {
        title: "Real-time Scheduling", description: "Implementing conflict-free scheduling system with real-time updates for class bookings."
      },
      {
        title: "Payment Integration", description: "Integrating secure recurring payment processing with subscription management."
      },
      {
        title: "Progress Analytics", description: "Building comprehensive analytics dashboard to visualize member fitness progress."
      }
    ],
    outcomes: [
      "Increased member retention by 45%",
      "Automated 80% of administrative tasks",
      "Improved class attendance tracking accuracy to 100%"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "gtaa-global-travel-agent",
    title: "GTAA - Global Travel Agent Association",
    subtitle: "Travel Industry Portal",
    category: "CMS Websites",
    description: "WordPress-based membership portal for travel agents with integrated payment gateway and booking management.",
    longDescription: "GTAA (Global Travel Agent Association) is a professional membership platform built on WordPress, serving as a central hub for travel industry professionals. The website features a sophisticated payment gateway integration for membership fees, certification programs, and event registrations. With a focus on industry networking and resources, the platform provides tools for travel agents to connect, learn, and grow their businesses.",
    techStack: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "Payment Gateway Integration",
      "MySQL",
      "Custom Themes"
    ],
    features: [
      "Membership Management",
      "Payment Gateway Integration",
      "Event Registration System",
      "Resource Library",
      "Certification Programs",
      "Member Directory",
      "Industry News & Updates",
      "Networking Forums"
    ],
    image: "/media/gtaa-1.jpg",
    gallery: [
      "/media/gtaa-1.jpg",
      "/media/gtaa-2.jpg",
      "/media/gtaa-3.jpg",
      "/media/gtaa-4.jpg"
    ],
    challenges: [
      {
        title: "Payment Security", description: "Implementing PCI-compliant payment processing with multiple gateway options."
      },
      {
        title: "Membership Tiers", description: "Creating flexible membership tier system with automated benefits assignment."
      },
      {
        title: "International Support", description: "Handling multi-currency payments and international member registrations."
      }
    ],
    outcomes: [
      "Processed $500K+ in membership payments in first year",
      "Grew membership base by 200%",
      "Reduced payment processing errors to near zero"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "codecrewsite-portfolio",
    title: "CodeCrewSite",
    subtitle: "Agency Portfolio Website",
    category: "CMS Websites",
    description: "Modern agency portfolio built with WordPress, featuring custom post types and Elementor-based responsive design.",
    longDescription: "CodeCrewSite is a visually stunning portfolio website for a digital agency, showcasing their work, services, and team expertise. Built using WordPress with Elementor page builder, the site features custom post types for projects, team members, and testimonials. The design emphasizes visual storytelling with smooth animations, interactive elements, and a mobile-first approach to ensure exceptional user experience across all devices.",
    techStack: [
      "WordPress",
      "Elementor",
      "Custom Post Types",
      "PHP",
      "JavaScript",
      "CSS3",
      "MySQL"
    ],
    features: [
      "Custom Post Types for Portfolio",
      "Elementor Page Builder",
      "Responsive Design",
      "Interactive Animations",
      "Team Member Profiles",
      "Client Testimonials",
      "Contact Form Integration",
      "Blog Section"
    ],
    image: "/media/codecrew-1.jpg",
    gallery: [
      "/media/codecrew-1.jpg",
      "/media/codecrew-2.jpg",
      "/media/codecrew-3.jpg",
      "/media/codecrew-4.jpg"
    ],
    challenges: [
      {
        title: "Design Flexibility", description: "Balancing Elementor's visual editor with custom code for unique design requirements."
      },
      {
        title: "Performance Optimization", description: "Optimizing page load times despite heavy use of animations and media content."
      },
      {
        title: "Custom Filtering", description: "Implementing advanced portfolio filtering without sacrificing SEO performance."
      }
    ],
    outcomes: [
      "Increased client inquiries by 85%",
      "Achieved 95+ Google PageSpeed score",
      "Reduced bounce rate by 40%"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "nirnaya-pharma-system",
    title: "Nirnaya Pharma",
    subtitle: "Pharmaceutical Management System",
    category: "Web Apps",
    description: "Backend system for pharmaceutical inventory management, order processing, and regulatory compliance.",
    longDescription: "Nirnaya Pharma is a robust backend system designed specifically for pharmaceutical businesses to manage inventory, track expiry dates, process orders, and maintain regulatory compliance. Built with Node.js and Express.js, the system handles complex inventory operations including batch tracking, supplier management, and automated reordering. The platform ensures data integrity and audit trails required for pharmaceutical industry standards.",
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST API",
      "Node-cron"
    ],
    features: [
      "Inventory Management",
      "Batch & Expiry Tracking",
      "Order Processing",
      "Supplier Management",
      "Automated Reordering",
      "Regulatory Compliance",
      "Audit Trail System",
      "Reporting & Analytics"
    ],
    image: "/media/nirnaya-1.jpg",
    gallery: [
      "/media/nirnaya-1.jpg",
      "/media/nirnaya-2.jpg",
      "/media/nirnaya-3.jpg",
      "/media/nirnaya-4.jpg"
    ],
    challenges: [
      {
        title: "Regulatory Compliance", description: "Implementing strict compliance measures for pharmaceutical industry regulations and standards."
      },
      {
        title: "Data Accuracy", description: "Ensuring 100% accuracy in inventory tracking with batch numbers and expiry date management."
      },
      {
        title: "Automated Alerts", description: "Creating intelligent alert system for expiry notifications and stock replenishment."
      }
    ],
    outcomes: [
      "Reduced inventory discrepancies by 95%",
      "Prevented $50K+ in expired product losses",
      "Improved order fulfillment time by 60%"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "onelifeindian-ecommerce",
    title: "OneLifeIndian E-commerce",
    subtitle: "Online Shopping Platform",
    category: "E-commerce",
    description: "Full-featured e-commerce store built with WordPress and WooCommerce for Indian lifestyle products.",
    longDescription: "OneLifeIndian is a comprehensive e-commerce platform specializing in authentic Indian lifestyle products. Built on WordPress with WooCommerce, the store offers a seamless shopping experience with advanced product filtering, multiple payment gateways, inventory management, and shipping integration. The platform supports various Indian payment methods and provides region-specific pricing and tax calculations.",
    techStack: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "Payment Gateway Integration",
      "MySQL",
      "REST API"
    ],
    features: [
      "Product Catalog Management",
      "Multiple Payment Gateways",
      "Shopping Cart & Checkout",
      "Order Management",
      "Inventory Tracking",
      "Shipping Integration",
      "Customer Reviews",
      "Wishlist & Favorites",
      "Coupon & Discount System"
    ],
    image: "/media/onelife-1.jpg",
    gallery: [
      "/media/onelife-1.jpg",
      "/media/onelife-2.jpg",
      "/media/onelife-3.jpg",
      "/media/onelife-4.jpg"
    ],
    challenges: [
      {
        title: "Payment Integration", description: "Integrating multiple Indian payment gateways including UPI, wallets, and cash on delivery."
      },
      {
        title: "Shipping Logistics", description: "Implementing dynamic shipping calculations for different regions with multiple courier partners."
      },
      {
        title: "Inventory Sync", description: "Maintaining real-time inventory synchronization across multiple sales channels."
      }
    ],
    outcomes: [
      "Processed 5000+ orders in first 6 months",
      "Achieved 4.8/5 customer satisfaction rating",
      "Reduced cart abandonment rate by 35%"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "pixostory-photography",
    title: "PixoStory",
    subtitle: "Photography Portfolio & Booking",
    category: "CMS Websites",
    description: "Elegant WordPress website for photographers featuring portfolio galleries and online booking system.",
    longDescription: "PixoStory is a visually captivating portfolio website designed for professional photographers and videographers. The WordPress-based platform showcases stunning visual content with optimized image galleries, video integration, and a seamless booking system for photography sessions. The site features category-based portfolio organization, client testimonials, pricing packages, and an integrated scheduling system that allows clients to book sessions directly online.",
    techStack: [
      "WordPress",
      "PHP",
      "Gallery Plugins",
      "Booking System",
      "MySQL",
      "JavaScript",
      "CSS3"
    ],
    features: [
      "Portfolio Gallery Management",
      "Video Integration",
      "Online Booking System",
      "Package & Pricing Display",
      "Client Testimonials",
      "Blog for Photography Tips",
      "Contact Form with File Upload",
      "Mobile-responsive Design"
    ],
    image: "/media/pixostory-1.jpg",
    gallery: [
      "/media/pixostory-1.jpg",
      "/media/pixostory-2.jpg",
      "/media/pixostory-3.jpg",
      "/media/pixostory-4.jpg"
    ],
    challenges: [
      {
        title: "Image Optimization", description: "Implementing advanced image compression and lazy loading for fast page loads without quality loss."
      },
      {
        title: "Booking Integration", description: "Creating seamless booking flow with calendar availability and automated email confirmations."
      },
      {
        title: "Portfolio Management", description: "Developing intuitive admin interface for photographers to easily update their portfolio."
      }
    ],
    outcomes: [
      "Increased booking inquiries by 150%",
      "Reduced page load time to under 2 seconds",
      "Improved client engagement with 70% increase in site duration"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "highgrade-corporate-website",
    title: "Highgrade",
    subtitle: "Corporate Business Website",
    category: "CMS Websites",
    description: "Professional corporate website built with WordPress featuring company information, services, and client portal.",
    longDescription: "Highgrade is a sophisticated corporate website designed to establish strong online presence for a professional services company. Built on WordPress, the site features comprehensive company information, service offerings, case studies, and a secure client portal. The website emphasizes credibility through professional design, client testimonials, industry certifications, and thought leadership content that positions the company as an industry expert.",
    techStack: [
      "WordPress",
      "PHP",
      "MySQL",
      "Custom Themes",
      "JavaScript",
      "CSS3",
      "Security Plugins"
    ],
    features: [
      "Company Profile Pages",
      "Services Showcase",
      "Case Studies Portfolio",
      "Client Portal Login",
      "Team Member Profiles",
      "News & Blog Section",
      "Contact & Quote Forms",
      "Document Download Center"
    ],
    image: "/media/highgrade-1.jpg",
    gallery: [
      "/media/highgrade-1.jpg",
      "/media/highgrade-2.jpg",
      "/media/highgrade-3.jpg",
      "/media/highgrade-4.jpg"
    ],
    challenges: [
      {
        title: "Client Portal Security", description: "Implementing secure client portal with role-based access and document management."
      },
      {
        title: "Content Organization", description: "Structuring complex service offerings in an intuitive and accessible manner."
      },
      {
        title: "Professional Design", description: "Creating corporate design that balances professionalism with modern aesthetics."
      }
    ],
    outcomes: [
      "Increased lead generation by 120%",
      "Improved client satisfaction with portal access",
      "Enhanced brand credibility and market positioning"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "savory-bites-restaurant",
    title: "Savory Bites Restaurant",
    subtitle: "Restaurant UI Template",
    category: "Templates",
    description: "Modern and responsive React.js template for restaurants with menu display and online ordering interface.",
    longDescription: "Savory Bites is a contemporary restaurant template built with React.js, featuring a stunning visual design that showcases culinary excellence. The template includes interactive menu displays with filtering capabilities, online ordering interface, table reservation system, and gallery sections for food photography. Built with modern web technologies, it offers smooth animations, intuitive navigation, and mobile-first responsive design perfect for any dining establishment.",
    techStack: [
      "React.js",
      "JavaScript",
      "CSS3",
      "Responsive Design",
      "Animations",
      "React Router"
    ],
    features: [
      "Interactive Menu Display",
      "Online Ordering Interface",
      "Table Reservation Form",
      "Food Gallery",
      "About & Story Section",
      "Chef Profiles",
      "Location & Hours",
      "Smooth Animations",
      "Fully Responsive"
    ],
    image: "/media/savory-bites-1.jpg",
    gallery: [
      "/media/savory-bites-1.jpg",
      "/media/savory-bites-2.jpg",
      "/media/savory-bites-3.jpg",
      "/media/savory-bites-4.jpg"
    ],
    challenges: [
      {
        title: "Performance Optimization", description: "Optimizing high-quality food images for fast loading without compromising visual appeal."
      },
      {
        title: "Mobile Experience", description: "Creating touch-friendly menu navigation and ordering flow for mobile users."
      },
      {
        title: "Animation Balance", description: "Implementing elegant animations that enhance UX without being overwhelming."
      }
    ],
    outcomes: [
      "Created reusable template for 20+ restaurant clients",
      "Achieved 98+ Google Lighthouse performance score",
      "Reduced development time for restaurant sites by 70%"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "lumina-lens-photography",
    title: "Lumina Lens Photography Portfolio",
    subtitle: "Photography Portfolio Template",
    category: "Templates",
    description: "Elegant React.js portfolio template for photographers with masonry gallery and lightbox features.",
    longDescription: "Lumina Lens is a breathtaking portfolio template crafted specifically for professional photographers. Built with React.js, it features a stunning masonry gallery layout, integrated lightbox for full-screen image viewing, and smooth page transitions. The template emphasizes visual storytelling with minimal distractions, allowing the photography to take center stage. It includes sections for different photography categories, about the photographer, client testimonials, and contact information.",
    techStack: [
      "React.js",
      "JavaScript",
      "CSS3",
      "Masonry Layout",
      "Lightbox Integration",
      "Lazy Loading"
    ],
    features: [
      "Masonry Gallery Layout",
      "Lightbox with Navigation",
      "Category Filtering",
      "Lazy Loading Images",
      "About Section",
      "Client Testimonials",
      "Contact Form",
      "Social Media Integration",
      "Mobile Optimized"
    ],
    image: "/media/lumina-lens-1.jpg",
    gallery: [
      "/media/lumina-lens-1.jpg",
      "/media/lumina-lens-2.jpg",
      "/media/lumina-lens-3.jpg",
      "/media/lumina-lens-4.jpg"
    ],
    challenges: [
      {
        title: "Image Optimization", description: "Implementing progressive image loading and optimization for large photography files."
      },
      {
        title: "Gallery Performance", description: "Maintaining smooth performance with hundreds of high-resolution images."
      },
      {
        title: "Visual Hierarchy", description: "Designing interface that complements photography without competing for attention."
      }
    ],
    outcomes: [
      "Used by 50+ professional photographers",
      "95+ scores across all Lighthouse metrics",
      "Featured in web design showcase galleries"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "serenity-cove-resort",
    title: "Serenity Cove Resort",
    subtitle: "Luxury Resort Template",
    category: "Templates",
    description: "Premium React.js template for luxury resorts and hotels with booking integration and room showcases.",
    longDescription: "Serenity Cove is a luxurious resort template designed to showcase high-end hospitality properties. Built with React.js, the template features immersive full-screen imagery, elegant animations, and sophisticated design elements that convey luxury and relaxation. It includes comprehensive sections for room and suite displays, amenities, dining options, spa services, and activities. The template comes with a booking inquiry form and integration-ready structure for reservation systems.",
    techStack: [
      "React.js",
      "JavaScript",
      "CSS3",
      "Animations",
      "Responsive Design",
      "Form Validation"
    ],
    features: [
      "Full-screen Hero Sections",
      "Room & Suite Showcases",
      "Amenities Display",
      "Dining & Spa Services",
      "Activities & Experiences",
      "Booking Inquiry Form",
      "Photo Galleries",
      "Virtual Tour Integration",
      "Multi-language Ready"
    ],
    image: "/media/serenity-cove-1.jpg",
    gallery: [
      "/media/serenity-cove-1.jpg",
      "/media/serenity-cove-2.jpg",
      "/media/serenity-cove-3.jpg",
      "/media/serenity-cove-4.jpg"
    ],
    challenges: [
      {
        title: "Luxury Aesthetics", description: "Creating sophisticated design that reflects premium hospitality standards."
      },
      {
        title: "Image Loading", description: "Managing large, high-quality resort images for optimal performance."
      },
      {
        title: "User Journey", description: "Designing intuitive flow from browsing to booking inquiry."
      }
    ],
    outcomes: [
      "Deployed for 15+ luxury properties",
      "Increased booking inquiries by average of 90%",
      "Won 'Best Hospitality Template' in design competition"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "vitalis-healthcare",
    title: "Vitalis Premium Healthcare",
    subtitle: "Healthcare Provider Template",
    category: "Templates",
    description: "Professional React.js template for healthcare providers with appointment booking and service information.",
    longDescription: "Vitalis Premium Healthcare is a comprehensive template designed for medical practices, clinics, and healthcare providers. Built with React.js, it combines professional credibility with modern design aesthetics. The template features detailed sections for medical services, doctor profiles, patient testimonials, health resources, and an appointment booking system. Accessibility and user trust are prioritized through clean design, clear information hierarchy, and reassuring visual elements.",
    techStack: [
      "React.js",
      "JavaScript",
      "CSS3",
      "Responsive Design",
      "Accessibility Features",
      "Form Handling"
    ],
    features: [
      "Services & Treatments Info",
      "Doctor & Staff Profiles",
      "Appointment Booking Form",
      "Patient Testimonials",
      "Health Blog Section",
      "Insurance Information",
      "Contact & Location",
      "FAQ Section",
      "HIPAA-compliant Design"
    ],
    image: "/media/vitalis-1.jpg",
    gallery: [
      "/media/vitalis-1.jpg",
      "/media/vitalis-2.jpg",
      "/media/vitalis-3.jpg",
      "/media/vitalis-4.jpg"
    ],
    challenges: [
      {
        title: "Trust Building", description: "Designing interface that builds patient trust through credible, professional presentation."
      },
      {
        title: "Accessibility", description: "Ensuring WCAG 2.1 AA compliance for diverse patient populations."
      },
      {
        title: "Information Clarity", description: "Presenting complex medical information in accessible, understandable format."
      }
    ],
    outcomes: [
      "Adopted by 30+ medical practices",
      "100% WCAG 2.1 AA accessibility compliance",
      "Increased appointment bookings by average of 75%"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "gate-cse-master",
    title: "GATE CSE Master",
    subtitle: "Educational Platform Template",
    category: "Templates",
    description: "Modern React.js template for online education platforms with course listings and student resources.",
    longDescription: "GATE CSE Master is an educational platform template specifically designed for test preparation and online learning. Built with React.js, it features comprehensive course listings, study materials organization, practice test interfaces, and progress tracking dashboards. The template is optimized for educational content delivery with focus on readability, organized navigation, and student engagement features. It includes sections for course details, instructor profiles, study plans, and student testimonials.",
    techStack: [
      "React.js",
      "JavaScript",
      "CSS3",
      "Responsive Design",
      "Data Visualization",
      "Progress Tracking"
    ],
    features: [
      "Course Catalog Display",
      "Study Material Organization",
      "Practice Test Interface",
      "Progress Dashboard",
      "Instructor Profiles",
      "Student Testimonials",
      "Study Plans & Schedules",
      "Resource Downloads",
      "Mobile Learning Optimized"
    ],
    image: "/media/gate-cse-1.jpg",
    gallery: [
      "/media/gate-cse-1.jpg",
      "/media/gate-cse-2.jpg",
      "/media/gate-cse-3.jpg",
      "/media/gate-cse-4.jpg"
    ],
    challenges: [
      {
        title: "Content Organization", description: "Structuring large amounts of educational content in intuitive, accessible manner."
      },
      {
        title: "Engagement Features", description: "Implementing interactive elements that maintain student motivation and engagement."
      },
      {
        title: "Mobile Learning", description: "Optimizing complex educational content for mobile learning experiences."
      }
    ],
    outcomes: [
      "Used by 10+ educational institutions",
      "Student engagement increased by 85%",
      "Mobile learning sessions increased by 120%"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "fullstack-ecommerce",
    title: "E-commerce Website",
    subtitle: "Full-Stack Shopping Platform",
    category: "Web Apps",
    description: "Complete e-commerce solution with product management, shopping cart, payment integration, and order tracking.",
    longDescription: "This comprehensive e-commerce platform is built from scratch using the MERN stack, providing a complete online shopping experience. The application features advanced product filtering and search, intelligent shopping cart with saved items, secure payment processing, order management, and customer account features. The admin panel includes inventory management, order processing, analytics dashboard, and customer management tools. Built with scalability and security as core priorities.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "Stripe/PayPal",
      "JWT",
      "Cloudinary"
    ],
    features: [
      "Product Catalog with Search & Filters",
      "Shopping Cart & Wishlist",
      "Secure Payment Processing",
      "Order Management & Tracking",
      "Customer Accounts & Reviews",
      "Admin Dashboard",
      "Inventory Management",
      "Analytics & Reporting",
      "Email Notifications"
    ],
    image: "/media/ecommerce-1.jpg",
    gallery: [
      "/media/ecommerce-1.jpg",
      "/media/ecommerce-2.jpg",
      "/media/ecommerce-3.jpg",
      "/media/ecommerce-4.jpg"
    ],
    challenges: [
      {
        title: "Payment Security", description: "Implementing PCI-compliant payment processing with fraud detection measures."
      },
      {
        title: "Inventory Management", description: "Building real-time inventory tracking with automatic stock updates and low-stock alerts."
      },
      {
        title: "Performance at Scale", description: "Optimizing database queries and implementing caching for handling thousands of products."
      }
    ],
    outcomes: [
      "Handles 10,000+ products efficiently",
      "Processed $100K+ in transactions",
      "Achieved 99.9% uptime in production"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "real-estate-platform",
    title: "Real Estate Website",
    subtitle: "Property Listing Platform",
    category: "Web Apps",
    description: "Full-featured real estate platform with property listings, advanced search, virtual tours, and contact management.",
    longDescription: "A sophisticated real estate platform built with the MERN stack that revolutionizes property search and management. The application enables users to browse properties with advanced filtering by location, price, amenities, and property type. Features include high-quality image galleries, virtual tour integration, saved searches, and favorites. Property agents have access to comprehensive listing management tools, lead tracking, and analytics. The platform includes mortgage calculators, neighborhood information, and integrated contact forms for seamless buyer-seller communication.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mapbox API",
      "Cloudinary",
      "JWT",
      "React Router"
    ],
    features: [
      "Advanced Property Search & Filters",
      "Interactive Map Integration",
      "Image Galleries & Virtual Tours",
      "Saved Searches & Favorites",
      "Agent Profiles & Listings",
      "Lead Management System",
      "Mortgage Calculator",
      "Property Comparison Tool",
      "Email & SMS Notifications"
    ],
    image: "/media/real-estate-1.jpg",
    gallery: [
      "/media/real-estate-1.jpg",
      "/media/real-estate-2.jpg",
      "/media/real-estate-3.jpg",
      "/media/real-estate-4.jpg"
    ],
    challenges: [
      {
        title: "Map Integration", description: "Implementing interactive maps with property markers, clustering, and custom styling."
      },
      {
        title: "Virtual Tour Support", description: "Integrating 3D virtual tour capabilities for immersive property viewing experiences."
      },
      {
        title: "Lead Tracking", description: "Building robust lead management system for agents to track inquiries and follow-ups."
      },
      {
        title: "Search Performance", description: "Building fast, complex search with multiple filters and geo-location capabilities."
      }
    ],
    outcomes: [
      "Listed 5,000+ properties successfully",
      "Generated 2,000+ qualified leads for agents",
      "Reduced property search time by 65%"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "job-portal-platform",
    title: "Job Portal",
    subtitle: "Career & Recruitment Platform",
    category: "Web Apps",
    description: "Comprehensive job portal connecting employers and job seekers with application tracking and matching algorithms.",
    longDescription: "A full-stack job portal application built on the MERN stack that bridges the gap between employers and job seekers. The platform offers intelligent job matching based on skills, experience, and preferences. Job seekers can create detailed profiles, upload resumes, apply for positions, and track application status. Employers have access to advanced candidate search, applicant tracking system (ATS), job posting management, and analytics dashboard. The platform includes features like skill assessments, interview scheduling, and automated email communications.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "JWT",
      "PDF Generation",
      "Email Service"
    ],
    features: [
      "Job Search with Smart Filters",
      "Resume Builder & Management",
      "Application Tracking System",
      "Employer Dashboard",
      "Candidate Matching Algorithm",
      "Skill Assessments",
      "Interview Scheduling",
      "Email Notifications",
      "Analytics & Reporting"
    ],
    image: "/media/job-portal-1.jpg",
    gallery: [
      "/media/job-portal-1.jpg",
      "/media/job-portal-2.jpg",
      "/media/job-portal-3.jpg",
      "/media/job-portal-4.jpg"
    ],
    challenges: [
      {
        title: "Matching Algorithm", description: "Developing intelligent job-candidate matching based on multiple criteria and preferences."
      },
      {
        title: "Resume Parsing", description: "Implementing automated resume parsing to extract and structure candidate information."
      },
      {
        title: "Scalability", description: "Building infrastructure to handle thousands of concurrent users and job applications."
      }
    ],
    outcomes: [
      "Facilitated 1,000+ successful job placements",
      "Reduced hiring time by 40% for employers",
      "Achieved 85% candidate-job match accuracy"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "social-media-app",
    title: "Social Media Application",
    subtitle: "Mobile Social Network",
    category: "Mobile Apps",
    description: "Feature-rich social media mobile app with posts, stories, messaging, and real-time interactions.",
    longDescription: "A comprehensive social media application built with React Native that delivers an engaging mobile-first social networking experience. Users can create profiles, share posts with images and videos, interact through likes and comments, share stories that expire after 24 hours, and connect with friends. The app features real-time notifications, direct messaging, user discovery through hashtags and location, and content moderation tools. Built with performance and scalability in mind, the application handles high user engagement with smooth animations and responsive UI.",
    techStack: [
      "React Native",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Firebase",
      "JWT",
      "Cloud Storage"
    ],
    features: [
      "User Profiles & Authentication",
      "Post Creation (Image/Video/Text)",
      "Stories Feature",
      "Like, Comment & Share",
      "Real-time Notifications",
      "Direct Messaging",
      "Hashtag & Location Tags",
      "User Discovery & Search",
      "Content Moderation"
    ],
    image: "/media/social-media-1.jpg",
    gallery: [
      "/media/social-media-1.jpg",
      "/media/social-media-2.jpg",
      "/media/social-media-3.jpg",
      "/media/social-media-4.jpg"
    ],
    challenges: [
      {
        title: "Real-time Updates", description: "Implementing efficient real-time synchronization for feeds, notifications, and messaging."
      },
      {
        title: "Media Handling", description: "Optimizing image and video upload, storage, and streaming for mobile networks."
      },
      {
        title: "Performance", description: "Maintaining smooth scrolling and interactions with infinite feed and high media content."
      }
    ],
    outcomes: [
      "Acquired 5,000+ active users within 3 months",
      "Achieved 4.5+ app store rating",
      "Average user session time of 25+ minutes"
    ],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "chat-application",
    title: "Chat Application",
    subtitle: "Real-time Messaging Platform",
    category: "Web Apps",
    description: "Real-time chat application with private messaging, group chats, file sharing, and video calling capabilities.",
    longDescription: "A sophisticated real-time messaging platform built with the MERN stack and Socket.io, delivering instant communication capabilities. The application supports one-on-one conversations, group chats with admin controls, file and media sharing, typing indicators, read receipts, and message reactions. Users can create custom channels, search message history, and receive push notifications. The platform includes video and voice calling features, screen sharing capabilities, and end-to-end encryption for secure communications. The responsive design ensures seamless experience across desktop and mobile devices.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "WebRTC",
      "JWT",
      "Cloudinary"
    ],
    features: [
      "Real-time Messaging",
      "Private & Group Chats",
      "File & Media Sharing",
      "Video & Voice Calls",
      "Typing Indicators & Read Receipts",
      "Message Search & History",
      "Push Notifications",
      "Screen Sharing",
      "End-to-end Encryption"
    ],
    image: "/media/chat-app-1.jpg",
    gallery: [
      "/media/chat-app-1.jpg",
      "/media/chat-app-2.jpg",
      "/media/chat-app-3.jpg",
      "/media/chat-app-4.jpg"
    ],
    challenges: [
      {
        title: "Real-time Scalability", description: "Building WebSocket infrastructure to handle thousands of concurrent connections efficiently."
      },
      {
        title: "Message Delivery", description: "Ensuring reliable message delivery with offline support and message queuing."
      },
      {
        title: "Video Quality", description: "Implementing adaptive video streaming for varying network conditions using WebRTC."
      }
    ],
    outcomes: [
      "Handles 10,000+ concurrent users",
      "99.99% message delivery rate",
      "Average latency under 100ms for messages"
    ],
    demoUrl: "#",
    githubUrl: "#"
  }
];