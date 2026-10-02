export interface Project {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  technologies: string[];
  keyEngineeringConcepts: string[];
  architectureDetails: string[];
  githubUrl: string;
  liveUrl?: string;
  endpoints?: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    path: string;
    description: string;
    samplePayload?: string;
    sampleResponse: string;
  }[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface AchievementItem {
  title: string;
  eventOrIssuer: string;
  highlight: string;
  details: string;
}

export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
  location: string;
  notes?: string[];
}

export interface BackendPillar {
  title: string;
  tag: string;
  description: string;
  metrics: string[];
}
