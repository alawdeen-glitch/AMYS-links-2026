import { ImpactStat } from '../types';

export const HERO_STAT = {
  metric: "30,000+",
  rawNumber: 30000,
  title: "Free Cataract Eye Surgeries Performed",
  arabicTitle: "إجراء أكثر من ٣٠,٠٠٠ عملية مياه بيضاء مجانية",
  subtitle: "AMYS Key Milestone • Restoring Vision Across the Island",
  arabicSubtitle: "أكثر من ٣٠,٠٠٠ عملية جراحية مجانية لإزالة المياه البيضاء وزراعة العدسات لغير القادرين"
};

export const IMPACT_STATS: ImpactStat[] = [
  // Health Sector
  {
    id: 'h-1',
    metric: '30,000+',
    rawNumber: 30000,
    title: 'Free Cataract Eye Surgeries Performed',
    arabicTitle: 'إجراء أكثر من ٣٠,٠٠٠ عملية جراحية مجانية للمياه البيضاء وزراعة العدسات',
    category: 'health',
    categoryLabel: 'Health'
  },
  {
    id: 'h-2',
    metric: '105,340',
    rawNumber: 105340,
    title: 'Eye Patients Diagnosed',
    arabicTitle: 'فحص وتشخيص 105340 مريض عيون',
    category: 'health',
    categoryLabel: 'Health'
  },
  {
    id: 'h-3',
    metric: '22,700',
    rawNumber: 22700,
    title: 'Medical Eyeglasses Distributed',
    arabicTitle: 'توزيع ٢٢,٧٠٠ نظارة طبية وقراءة',
    category: 'health',
    categoryLabel: 'Health'
  },
  {
    id: 'h-4',
    metric: '120',
    rawNumber: 120,
    suffix: ' Camps',
    title: 'Medical Camps Organized (275 Doctors)',
    arabicTitle: 'تنظيم 120 مخيماً طبياً بمشاركة ٢٧٥ طبيباً واستشارياً',
    category: 'health',
    categoryLabel: 'Health'
  },
  {
    id: 'h-5',
    metric: '2,500',
    rawNumber: 2500,
    title: 'Circumcisions Performed',
    arabicTitle: 'إجراء ٢,٥٠٠ عملية ختان للأطفال',
    category: 'health',
    categoryLabel: 'Health'
  },

  // Water & Masjids
  {
    id: 'w-1',
    metric: '197',
    rawNumber: 197,
    title: 'Masjids Constructed',
    arabicTitle: 'بناء وتشييد 197 مسجداً وجامعاً',
    category: 'water_masjids',
    categoryLabel: 'Water & Masjids'
  },
  {
    id: 'w-2',
    metric: '11,227',
    rawNumber: 11227,
    title: 'Family Wells Installed',
    arabicTitle: 'إنشاء ١١,٢٢٧ بئراً عائلية صالحة للشرب',
    category: 'water_masjids',
    categoryLabel: 'Water & Masjids'
  },
  {
    id: 'w-3',
    metric: '615',
    rawNumber: 615,
    title: 'Deep Wells Implemented',
    arabicTitle: 'تنفيذ ٦١٥ بئراً عميقة ومضخات ارتوازية',
    category: 'water_masjids',
    categoryLabel: 'Water & Masjids'
  },
  {
    id: 'w-4',
    metric: '911',
    rawNumber: 911,
    title: 'Village Wells Drilled',
    arabicTitle: 'حفر ٩١١ بئراً عامة للمجتمعات القروية',
    category: 'water_masjids',
    categoryLabel: 'Water & Masjids'
  },
  {
    id: 'w-5',
    metric: '897',
    rawNumber: 897,
    title: 'Clean Drinking Water Connections',
    arabicTitle: 'توفير ٨٩٧ تمديد وشبكة مياه نقية',
    category: 'water_masjids',
    categoryLabel: 'Water & Masjids'
  },
  {
    id: 'w-6',
    metric: '8',
    rawNumber: 8,
    title: 'Islamic Centers Established',
    arabicTitle: 'تأسيس ٨ مراكز إسلامية ومجمعات متكاملة',
    category: 'water_masjids',
    categoryLabel: 'Water & Masjids'
  },

  // Education & Welfare
  {
    id: 'e-1',
    metric: '17,750',
    rawNumber: 17750,
    title: 'School Bags & Stationery Distributed',
    arabicTitle: 'توزيع 17,750 حقيبة مدرسية وقرطاسية متكاملة',
    category: 'education_welfare',
    categoryLabel: 'Education & Welfare'
  },
  {
    id: 'e-2',
    metric: '9,570',
    rawNumber: 9570,
    title: 'Educational Lectures & Lessons',
    arabicTitle: 'تنظيم ٩,٥٧٠ محاضرة ودرساً تعليمياً وتوعوياً',
    category: 'education_welfare',
    categoryLabel: 'Education & Welfare'
  },
  {
    id: 'e-3',
    metric: '65',
    rawNumber: 65,
    title: 'Full University Scholarships Awarded',
    arabicTitle: 'منح ٦٥ منحة جامعية وأكاديمية كاملة',
    category: 'education_welfare',
    categoryLabel: 'Education & Welfare'
  },
  {
    id: 'e-4',
    metric: '18',
    rawNumber: 18,
    title: 'Equipped Islamic Libraries',
    arabicTitle: 'تجهيز ١٨ مكتبة إسلامية وعلمية بالمراجع والكتب',
    category: 'education_welfare',
    categoryLabel: 'Education & Welfare'
  },
  {
    id: 'e-5',
    metric: '330',
    rawNumber: 330,
    title: 'Radio & TV Broadcast Episodes',
    arabicTitle: 'إنتاج وبث ٣٣٠ حلقة إذاعية وتلفزيونية توعوية',
    category: 'education_welfare',
    categoryLabel: 'Education & Welfare'
  },
  {
    id: 'e-6',
    metric: '540',
    rawNumber: 540,
    title: 'Outreach Reverts Welcomed',
    arabicTitle: 'استقبال ورعاية ٥٤٠ مهتدياً جديداً',
    category: 'education_welfare',
    categoryLabel: 'Education & Welfare'
  },
  {
    id: 'e-7',
    metric: '2,792',
    rawNumber: 2792,
    title: 'Orphans Sponsored & Cared For',
    arabicTitle: 'كفالة ورعاية 2,792 يتيماً رعاية شاملة',
    category: 'education_welfare',
    categoryLabel: 'Education & Welfare'
  },
  {
    id: 'e-8',
    metric: '215,572',
    rawNumber: 215572,
    title: 'Families Provided Qurban Meat',
    arabicTitle: 'توزيع لحوم الأضاحي على 215,572 أسرة مستفيدة',
    category: 'education_welfare',
    categoryLabel: 'Education & Welfare'
  },
  {
    id: 'e-9',
    metric: '532',
    rawNumber: 532,
    title: 'Livelihood Sewing Machines Distributed',
    arabicTitle: 'توزيع ٥٣٢ ماكينة خياطة لدعم الأسر المتعففة والاكتفاء الذاتي',
    category: 'education_welfare',
    categoryLabel: 'Education & Welfare'
  },
  {
    id: 'e-10',
    metric: '121,000 kg',
    rawNumber: 121000,
    title: 'Premium Dates Distributed',
    arabicTitle: 'توزيع 121,000 كجم من التمور الرمضانية الفاخرة',
    category: 'education_welfare',
    categoryLabel: 'Education & Welfare'
  },
  {
    id: 'e-11',
    metric: '19,115',
    rawNumber: 19115,
    title: 'Eid Clothing Sets Distributed',
    arabicTitle: 'توزيع ١٩,١١٥ كسوة عيد للأيتام والأسر المتعففة',
    category: 'education_welfare',
    categoryLabel: 'Education & Welfare'
  },
  {
    id: 'e-12',
    metric: '2,900',
    rawNumber: 2900,
    title: 'Direct Zakat Beneficiaries',
    arabicTitle: 'صرف مساعدات ومنح الزكاة لـ ٢,٩٠٠ مستفيد',
    category: 'education_welfare',
    categoryLabel: 'Education & Welfare'
  },
  {
    id: 'e-13',
    metric: '5,000,000+',
    rawNumber: 5000000,
    title: 'Ramadan Devotees & Beneficiaries Served',
    arabicTitle: 'خدمة وإفطار أكثر من ٥,٠٠٠,٠٠٠ صائم ومستفيد في شهر رمضان',
    category: 'education_welfare',
    categoryLabel: 'Education & Welfare'
  }
];
