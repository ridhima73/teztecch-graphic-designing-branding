export type PageId = 
  | 'home'
  | 'about'
  | 'services'
  | 'logo-branding'
  | 'social-media'
  | 'marketing-ads'
  | 'packaging'
  | 'corporate-branding'
  | 'ui-graphics'
  | 'portfolio'
  | 'contact';

export interface ServiceItem {
  id: PageId;
  title: string;
  shortDesc: string;
  tagline: string;
  iconName: string;
  color: string;
  deliverables: string[];
  features: string[];
  stats: { label: string; value: string }[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: 'logo-branding' | 'social-media' | 'marketing-ads' | 'packaging' | 'corporate-branding' | 'ui-graphics';
  categoryLabel: string;
  description: string;
  challenge: string;
  solution: string;
  tags: string[];
  imageUrl: string;
  colorAccent: string;
  metrics?: string;
  year: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  comment: string;
  rating: number;
  avatar: string;
  service: string;
}

export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  experience: string;
  avatar: string;
}
