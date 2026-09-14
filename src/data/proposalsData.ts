import { ProjectProposal } from '../types';
import { PDF_LINKS } from './pdfLinks';

export const PROPOSALS_DATA: ProjectProposal[] = [
  // Health Sector
  {
    id: 'health-1',
    title: 'Free Eye Camp Proposal - English',
    sector: 'health',
    sectorName: 'Health Sector',
    language: 'English',
    filename: 'Free Eye Camp Proposal - English.pdf',
    size: '1.8 MB',
    description: 'Island-wide mobile eye screening & cataract surgical mission plan.',
    customUrl: PDF_LINKS.proposals['health-1'] || ''
  },
  {
    id: 'health-2',
    title: 'مشروع مخيمات العيون الجراحية المجانية',
    englishTitle: 'Free Eye Camp Proposal',
    arabicTitle: 'مشروع مخيمات العيون الجراحية المجانية',
    sector: 'health',
    sectorName: 'القطاع الصحي',
    language: 'Arabic',
    filename: 'Free Eye Camp Proposal - Arabic.pdf',
    size: '1.9 MB',
    description: 'خطة متكاملة لإجراء عمليات المياه البيضاء (الكاتاراكت) والفحوصات وتوزيع النظارات الطبية مجاناً.',
    customUrl: PDF_LINKS.proposals['health-2'] || ''
  },
  {
    id: 'health-3',
    title: 'Free Eye Camp Book - English',
    sector: 'health',
    sectorName: 'Health Sector',
    language: 'English',
    filename: 'Free Eye Camp Book - English.pdf',
    size: '3.4 MB',
    description: 'Comprehensive historical documentation of 30,000+ cataract surgeries.',
    customUrl: PDF_LINKS.proposals['health-3'] || ''
  },
  {
    id: 'health-4',
    title: 'توثيق شامل لمخيمات طب العيون في سيلان',
    englishTitle: 'Free Eye Camp Book',
    arabicTitle: 'توثيق شامل لمخيمات طب العيون في سيلان',
    sector: 'health',
    sectorName: 'القطاع الصحي',
    language: 'Arabic',
    filename: 'Free Eye Camp Book - Arabic.pdf',
    size: '3.6 MB',
    description: 'سجل مصور وتقارير توثيقية لأكثر من 30,000 عملية مياه بيضاء منجزة منذ عام 1997م.',
    customUrl: PDF_LINKS.proposals['health-4'] || ''
  },
  {
    id: 'health-5',
    title: 'Ambulance Project Proposal',
    sector: 'health',
    sectorName: 'Health Sector',
    language: 'English',
    filename: 'Ambulance Project Proposal.pdf',
    size: '2.1 MB',
    description: 'Emergency medical transport fleet for vulnerable rural communities.',
    customUrl: PDF_LINKS.proposals['health-5'] || ''
  },

  // Education Sector
  {
    id: 'edu-1',
    title: 'مشروع الحقيبة المدرسية والقرطاسية',
    englishTitle: 'School Stationery Proposal',
    arabicTitle: 'مشروع الحقيبة المدرسية والقرطاسية',
    sector: 'education',
    sectorName: 'قطاع التعليم',
    language: 'Arabic',
    filename: 'School Stationery Proposal - Arabic.pdf',
    size: '1.6 MB',
    description: 'توزيع الحقائب واللوازم المدرسية المتكاملة للطلاب الأيتام والفقراء في سريلانكا.',
    customUrl: PDF_LINKS.proposals['edu-1'] || ''
  },
  {
    id: 'edu-2',
    title: 'School Stationery Proposal - English',
    sector: 'education',
    sectorName: 'Education Sector',
    language: 'English',
    filename: 'School Stationery Proposal - English.pdf',
    size: '1.5 MB',
    description: 'Annual educational kit initiative for underprivileged primary students.',
    customUrl: PDF_LINKS.proposals['edu-2'] || ''
  },
  {
    id: 'edu-3',
    title: 'برنامج الأسرة السعيدة والتوجيه الأسري',
    englishTitle: 'Happy Family Proposal',
    arabicTitle: 'برنامج الأسرة السعيدة والتوجيه الأسري',
    sector: 'education',
    sectorName: 'قطاع التعليم',
    language: 'Arabic',
    filename: 'Happy Family Proposal - Arabic.pdf',
    size: '2.0 MB',
    description: 'برامج تثقيفية ودورات إرشادية وتأهيلية لبناء أسر متماسكة ومستقرة اجتماعياً وتربوياً.',
    customUrl: PDF_LINKS.proposals['edu-3'] || ''
  },
  {
    id: 'edu-4',
    title: 'Happy Family Proposal - English',
    sector: 'education',
    sectorName: 'Education Sector',
    language: 'English',
    filename: 'Happy Family Proposal - English.pdf',
    size: '1.9 MB',
    description: 'Community counseling, parenting workshops, and social stability programs.',
    customUrl: PDF_LINKS.proposals['edu-4'] || ''
  },
  {
    id: 'edu-5',
    title: 'Thoppur Education Project Proposal',
    sector: 'education',
    sectorName: 'Education Sector',
    language: 'English',
    filename: 'Thoppur Education Project Proposal.pdf',
    size: '2.8 MB',
    description: 'Educational complex infrastructure, computer lab, and academic uplift.',
    customUrl: PDF_LINKS.proposals['edu-5'] || ''
  },

  // Social Welfare Sector
  {
    id: 'welfare-1',
    title: 'Aytham - Orphans Care & Sponsorship Proposal',
    sector: 'welfare',
    sectorName: 'Social Welfare Sector',
    language: 'English',
    filename: 'Aytham - Orphans Care & Sponsorship Proposal.pdf',
    size: '2.4 MB',
    description: 'Holistic monthly stipend, healthcare, and educational mentorship.',
    customUrl: PDF_LINKS.proposals['welfare-1'] || ''
  },
  {
    id: 'welfare-2',
    title: 'Sewing Machine Self-Sufficiency Proposal',
    sector: 'welfare',
    sectorName: 'Social Welfare Sector',
    language: 'English',
    filename: 'Sewing Machine Self-Sufficiency Proposal.pdf',
    size: '1.7 MB',
    description: 'Micro-livelihood training & heavy-duty machines for widow heads of household.',
    customUrl: PDF_LINKS.proposals['welfare-2'] || ''
  },

  // Social Development Sector
  {
    id: 'dev-1',
    title: 'مشروع توفير مياه الشرب النقية والآبار',
    englishTitle: 'Clean Drinking Water Project',
    arabicTitle: 'مشروع توفير مياه الشرب النقية والآبار',
    sector: 'development',
    sectorName: 'قطاع المياه والمساجد',
    language: 'Arabic',
    filename: 'Clean Drinking Water Project - Arabic.pdf',
    size: '2.3 MB',
    description: 'حفر الآبار السطحية والأنبوبية العميقة وتمديد شبكات المياه الصالحة للشرب للمناطق الجافة.',
    customUrl: PDF_LINKS.proposals['dev-1'] || ''
  },
  {
    id: 'dev-2',
    title: 'Clean Drinking Water Project - English',
    sector: 'development',
    sectorName: 'Social Development',
    language: 'English',
    filename: 'Clean Drinking Water Project - English.pdf',
    size: '2.2 MB',
    description: 'Installation of family wells, deep boreholes, and purification systems.',
    customUrl: PDF_LINKS.proposals['dev-2'] || ''
  },
  {
    id: 'dev-3',
    title: 'Masjid Construction & Maintenance Project',
    sector: 'development',
    sectorName: 'Social Development',
    language: 'English',
    filename: 'Masjid Construction & Maintenance Project.pdf',
    size: '3.1 MB',
    description: 'Building community Masjids, wudhu facilities, and maintenance support.',
    customUrl: PDF_LINKS.proposals['dev-3'] || ''
  }
];
