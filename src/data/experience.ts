export interface Experience {
  id: string;
  role: string;
  organization: string;
  duration: string;
  description: string;
  type?: 'work' | 'education';
  tags?: { name: string; icon: string }[];
}

export const experiences: Experience[] = [
  {
    id: 'suraj',
    role: 'Web Developer',
    organization: 'Suraj Construction Company',
    duration: 'Aug 2026',
    description: 'Developed the company website from scratch, translating business requirements into a responsive, user-friendly web experience. Collaborated with the SEO team to optimize website structure, improve search engine visibility, and strengthen the company’s online presence.',
    type: 'work',
    tags: [
      { name: 'Website Development', icon: 'Globe' },
      { name: 'SEO Optimization', icon: 'TrendingUp' },
      { name: 'Business Requirements & UI', icon: 'Layers' }
    ]
  },
  {
    id: 'gssoc',
    role: 'Technical Consultant & Mentor',
    organization: 'GirlScript Summer of Code 2025',
    duration: '2025',
    description: 'Mentored 50+ developers in full-stack development while collaborating on a team project to build a car rental website. Guided contributors on implementation best practices, code reviews, debugging, and scalable application architecture.',
    type: 'education',
    tags: [
      { name: '50+ Developers Mentored', icon: 'Users' },
      { name: 'Full-Stack Development', icon: 'Layers' },
      { name: 'Code Reviews & Collaboration', icon: 'Code' }
    ]
  },
  {
    id: 'eureka',
    role: 'Social Media Team Lead',
    organization: 'The Eureka Club',
    duration: '2024 - 2025',
    description: 'Led a 15-member team to execute engagement strategies, increasing event participation.',
    type: 'work',
    tags: [
      { name: 'Team Leadership', icon: 'Users' },
      { name: 'Social Campaigns', icon: 'Share2' },
      { name: 'Event Marketing', icon: 'Calendar' }
    ]
  }
];

export const education = [
  {
    degree: 'B.Tech CSE',
    institution: 'Vellore Institute of Technology',
    duration: '2022 - 2026',
    score: 'CGPA 8.88/10'
  },
  {
    degree: 'Class XII (CBSE)',
    institution: 'School',
    duration: '2022',
    score: '90%'
  },
  {
    degree: 'Class X (CBSE)',
    institution: 'School',
    duration: '2020',
    score: '88%'
  }
];
