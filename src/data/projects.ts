export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 'suraj-construction',
    title: 'Suraj Construction Company Website',
    description: 'Responsive company website showcasing infrastructure projects, services, clients, capabilities, careers and enquiries. Built with reusable components, optimized images and smooth navigation for a fast, consistent desktop and mobile experience.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://www.surajconstructioncompany.in',
    image: '/suraj.png',
  },
  {
    id: 'oratio',
    title: 'Oratio - AI-Powered Speech Analysis Platform',
    description: 'AI-driven platform for multi-modal analysis of speech, facial expressions and language, giving meaningful public-speaking feedback. Integrates multiple ML models across audio and video, with parallel processing, secure authentication and interactive performance dashboards.',
    tags: ['Python', 'FastAPI', 'React', 'Machine Learning'],
    githubUrl: 'https://github.com/PrateekNarain/oratio',
    liveUrl: '',
    image: '/oratio.png',
  },
  {
    id: 'vehigo',
    title: 'VehiGo - Car Rental Platform',
    description: 'Fully responsive car rental platform allowing users to seamlessly browse, select, and rent vehicles across devices. Features interactive car listings, detailed specifications, pricing calculators, and a streamlined booking interface.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    githubUrl: 'https://github.com/PrateekNarain/Vehigo',
    liveUrl: '',
    image: '/vehigo.png',
  }
];
