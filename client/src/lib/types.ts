export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface PortfolioItem {
  image: string;
  category: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  position: string;
  company: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface BlogPost {
  image: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
}
