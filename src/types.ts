export interface Project {
  id: string;
  name: string;
  description: string;
  technology: string;
  githubUrl: string;
  tags: string[];
  interactiveDemoId?: 'qr-scanner' | 'grade-calculator' | 'voting-checker';
}

export interface SkillCategory {
  title: string;
  categoryIcon: string;
  description: string;
  skills: {
    name: string;
    levelDescription: string;
  }[];
}

export interface TimelineItem {
  phase: string;
  label: string;
  description: string;
  highlight?: boolean;
}
