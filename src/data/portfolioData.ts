import { Project, SkillCategory, TimelineItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Dharanraj A',
  headline: 'Aspiring Entrepreneur | B.Tech Computer Science Student | Exploring AI & Technology',
  heroSubtitle: 'Aspiring Entrepreneur & B.Tech Computer Science Student',
  heroDescription:
    'I’m a first-year Computer Science student exploring technology, Generative AI, web development, and entrepreneurship while building projects and learning every day.',
  about: [
    'I am a first-year B.Tech Computer Science student who is passionate about technology, entrepreneurship, and continuous learning. I am currently building my fundamentals in computer science, basic web development, and Generative AI.',
    'I believe that learning by building is one of the best ways to improve. Through small projects, I am developing my problem-solving skills and gaining practical experience with technology.',
    'My long-term goal is to combine technology and entrepreneurship to build useful solutions that can solve real-world problems.',
  ],
  entrepreneurshipStatement:
    'I aspire to become an entrepreneur by combining my knowledge of computer science with real-world problem solving. My current focus is to learn, build small projects, understand technology deeply, and gradually develop ideas that can create meaningful value.',
  contactStatement:
    'I’m always interested in learning, building new projects, exploring technology, and connecting with like-minded people.',
  socials: {
    github: 'https://github.com/dharan-031',
    linkedin: 'https://www.linkedin.com/in/dharanraj031/',
  },
  year: 'First Year',
  major: 'B.Tech Computer Science',
};

export const PROJECTS: Project[] = [
  {
    id: 'qr-scanner',
    name: 'QR Scanner',
    description: 'A simple QR scanner project designed to scan and process QR codes.',
    technology: 'Web Development',
    githubUrl: 'https://github.com/dharan-031',
    tags: ['HTML', 'CSS', 'JavaScript', 'QR Processing'],
    interactiveDemoId: 'qr-scanner',
  },
  {
    id: 'grade-calculator',
    name: 'Student Grade Calculator',
    description: 'A simple application that calculates student grades based on entered marks.',
    technology: 'Web Development',
    githubUrl: 'https://github.com/dharan-031',
    tags: ['JavaScript', 'Calculations', 'UI Logic'],
    interactiveDemoId: 'grade-calculator',
  },
  {
    id: 'voting-checker',
    name: 'Voting Eligibility Checker',
    description: 'A beginner-friendly project that checks whether a person meets the required age to vote.',
    technology: 'Programming / Web Development',
    githubUrl: 'https://github.com/dharan-031',
    tags: ['Conditional Logic', 'Validation', 'Web Basics'],
    interactiveDemoId: 'voting-checker',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Web Development',
    categoryIcon: 'Globe',
    description: 'Constructing modern, responsive web pages with clean markup and scripts.',
    skills: [
      { name: 'HTML', levelDescription: 'Semantic structure & elements' },
      { name: 'CSS', levelDescription: 'Styling, flexbox & layouts' },
      { name: 'Basic JavaScript', levelDescription: 'DOM manipulation & logic' },
      { name: 'Responsive Web Design', levelDescription: 'Mobile-friendly interfaces' },
    ],
  },
  {
    title: 'Generative AI',
    categoryIcon: 'Cpu',
    description: 'Investigating cutting-edge AI technologies and integrating smart tools.',
    skills: [
      { name: 'Basic Generative AI concepts', levelDescription: 'Understanding foundation models' },
      { name: 'Prompting', levelDescription: 'Crafting effective structured prompts' },
      { name: 'Exploring AI tools and workflows', levelDescription: 'Testing developer toolchains & automation' },
    ],
  },
  {
    title: 'Computer Science',
    categoryIcon: 'Code2',
    description: 'Building strong foundations in computational thinking and development.',
    skills: [
      { name: 'Programming fundamentals', levelDescription: 'Variables, loops & core control flow' },
      { name: 'Problem solving', levelDescription: 'Algorithmic thinking & debugging' },
      { name: 'Basic project development', levelDescription: 'Planning & shipping small tools' },
    ],
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    phase: 'Currently',
    label: 'First-Year B.Tech Computer Science Student',
    description: 'Enrolled in B.Tech CSE, establishing a strong grounding in mathematics, logic, and computing.',
    highlight: true,
  },
  {
    phase: 'Building',
    label: 'Programming & Web Development Fundamentals',
    description: 'Writing code every week, learning JavaScript, semantic HTML, modern styling, and clean syntax.',
    highlight: false,
  },
  {
    phase: 'Exploring',
    label: 'Generative AI & Modern Technology',
    description: 'Experimenting with modern AI capabilities, developer productivity workflows, and practical applications.',
    highlight: false,
  },
  {
    phase: 'Future Goal',
    label: 'Technology + Entrepreneurship',
    description: 'Bridging computer science and real-world problem solving to launch impactful technological ventures.',
    highlight: false,
  },
];
