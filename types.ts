import { LucideIcon } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription: string;
  category: 'Web Apps' | 'Mobile Apps' | 'WordPress' | 'E-commerce';
  techStack: string[];
  features: string[];
  image: string;
  gallery: string[];
  demoUrl?: string;
  githubUrl?: string;
  challenges: { title: string; description: string }[];
  outcomes: string[];
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
  category: 'Frontend' | 'Backend' | 'WordPress' | 'Database' | 'DevOps' | 'Mobile' | 'Additional' | 'Tools';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  icon: LucideIcon;
  features?: string[];
  benefits?: { title: string; description: string }[];
  technologies?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  content?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  type: 'work' | 'education';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface FunFact {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface Hobby {
  name: string;
  description: string;
  icon: LucideIcon;
}