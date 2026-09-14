export type ScreenType = 
  | 'home'
  | 'website'
  | 'connect'
  | 'profiles'
  | 'projects'
  | 'impact';

export type SectorCategory = 'health' | 'education' | 'welfare' | 'development';

export interface ProjectProposal {
  id: string;
  title: string;
  arabicTitle?: string;
  englishTitle?: string;
  sector: SectorCategory;
  sectorName: string;
  language: 'English' | 'Arabic';
  filename: string;
  size: string;
  description: string;
  customUrl?: string;
}

export interface ImpactStat {
  id: string;
  metric: string;
  rawNumber?: number;
  suffix?: string;
  title: string;
  arabicTitle?: string;
  category: 'health' | 'water_masjids' | 'education_welfare';
  categoryLabel: string;
  highlight?: boolean;
}
