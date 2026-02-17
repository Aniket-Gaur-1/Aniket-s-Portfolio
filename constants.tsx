
import { Project, SkillCategory, Certification, Education, BlogPost } from './types';

export const PERSONAL_INFO = {
  name: "Aniket",
  location: "Greater Noida, Uttar Pradesh",
  email: "aniketgaur1149@gmail.com",
  linkedin: "linkedin.com/in/aniket-gaur-",
  phone: "+91 9990691705",
  summary: "Master's student and Software Developer specializing in building high-performance real-time systems and collaborative platforms."
};

export const ABOUT_DATA = {
  title: "Engineering with Intent.",
  bio: [
    "I'm a software engineer and Master's student driven by the pursuit of digital perfection. My work sits at the intersection of high-performance engineering and intuitive human-centric design.",
    "Currently, I'm deep-diving into real-time collaborative systems, exploring how we can make the web feel as responsive as local software. I believe that speed is a feature, and simplicity is the ultimate sophistication.",
    "When I'm not architecting systems or squashing bugs, I'm usually exploring new design patterns, sipping a double-shot espresso, or analyzing the latest trends in distributed state management."
  ],
  stats: [
    { label: "Code Quality", value: "99.9%" },
    { label: "Caffeine Level", value: "High" },
    { label: "Design Obsession", value: "Total" },
    { label: "Bug Survival Rate", value: "0%" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "collaboard",
    title: "Collaboard",
    subtitle: "Real-Time Collaborative Platform",
    period: "May 2025 – Jun 2025",
    technologies: ["React", "Node.js", "Socket.io", "WebRTC"],
    imageUrl: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&q=80&w=1200",
    liveUrl: "https://collaboard-roan.vercel.app/",
    codeUrl: "https://github.com/Aniket-Gaur-1",
    description: [
      "Developed a real-time collaborative whiteboard featuring live drawing, chat, and video calling for multi-user environments.",
      "Engineered a low-latency event-driven architecture that enabled real-time synchronization for 10+ concurrent users.",
      "Architected scalable WebSocket communication patterns, increasing system reliability and responsiveness."
    ]
  },
  {
  id: "arena-rush",
  title: "Arena Rush",
  subtitle: "Canvas-Based Survival Arena Game",
  period: "2025",
  technologies: ["HTML", "CSS", "JavaScript", "Canvas API", "Web Audio API"],
  imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1200",
  liveUrl: "https://arena-rush-pearl.vercel.app/",
  codeUrl: "https://github.com/Aniket-Gaur-1",
  description: [
    "Built a fast-paced survival arena game using vanilla JavaScript and the Canvas API with real-time rendering and smooth animation loops.",
    "Designed scalable enemy systems including multiple enemy types, mini-boss mechanics, attack phases, and dynamic difficulty scaling.",
    "Implemented persistent meta progression using localStorage with unlockable perks, upgrade systems, and coin-based economy.",
    "Engineered optimized rendering and entity caps to maintain performance stability across desktop and mobile devices."
  ]
},
  {
    id: "sorting-visualizer",
    title: "Sorting Visualizer",
    subtitle: "Algorithm Learning Platform",
    period: "Dec 2024 – Jan 2025",
    technologies: ["JavaScript", "HTML", "CSS"],
    imageUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=1200",
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/Aniket-Gaur-1",
    description: [
      "Developed an interactive visualization tool for 5+ sorting algorithms to facilitate real-time performance comparisons.",
      "Optimized rendering logic to eliminate UI lag and ensure frame consistency during large dataset animations.",
      "Constructed reusable UI components with a clean separation of logic and presentation layers."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["JavaScript", "C++", "Python", "HTML", "CSS"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "FastAPI"]
  },
  {
    title: "Systems & Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "REST APIs", "WebSockets", "Render", "Vercel"]
  },
  {
    title: "Engineering Concepts",
    skills: ["DSA", "OOP", "SDLC", "Agile", "CI/CD", "Distributed Systems", "Real-time Systems"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Career Essentials in Software Development",
    issuer: "Microsoft & LinkedIn",
    date: "January 2026",
    focus: "Programming, Software Engineering Foundations, Scalable System Design"
  },
  {
    title: "Oracle Fusion AI Agent Studio Certified Foundations Associate",
    issuer: "Oracle",
    date: "November 2025"
  },
  {
    title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
    issuer: "Oracle",
    date: "October 2025"
  }
];

export const EDUCATION: Education[] = [
  {
    school: "Abdul Kalam Technical University",
    degree: "Master's of Computer Applications",
    location: "Lucknow",
    period: "August 2023 - August 2025",
    coursework: ["Data Structures", "Software Engineering", "Database Management Systems"]
  },
  {
    school: "Chaudhary Charan Singh University",
    degree: "Bachelor's of Computer Applications",
    location: "Meerut",
    period: "August 2020 - August 2023"
  }
];

export const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=600"
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Real-Time Collaboration",
    excerpt: "Exploring how WebRTC and WebSockets are changing the way we work together online in 2025.",
    date: "June 12, 2025",
    readTime: "5 min read",
    category: "Engineering",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "2",
    title: "Optimizing React for High-Performance Systems",
    excerpt: "Common pitfalls and performance patterns for building complex dashboards and visualization tools.",
    date: "May 28, 2025",
    readTime: "8 min read",
    category: "Development",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "3",
    title: "Demystifying Distributed State",
    excerpt: "How to manage consistency across multiple users in a distributed whiteboard application.",
    date: "April 15, 2025",
    readTime: "6 min read",
    category: "Architecture",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800"
  }
];
