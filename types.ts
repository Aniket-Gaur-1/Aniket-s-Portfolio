
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  technologies: string[];
  period: string;
  imageUrl: string;
  liveUrl?: string;
  codeUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  focus?: string;
}

export interface Education {
  school: string;
  degree: string;
  location: string;
  period: string;
  coursework?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
}
