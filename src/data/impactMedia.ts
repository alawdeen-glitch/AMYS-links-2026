export interface ImpactMediaInfo {
  imageUrl: string;
  prefix: string;
  suffix: string;
  alt: string;
  sectorTag: string;
}

export const IMPACT_MEDIA: Record<string, ImpactMediaInfo> = {
  // --- HEALTH SECTOR (Pages 17, 18, 19 in AMYS Profile) ---
  'h-1': {
    imageUrl: '/images/13.jpg',
    prefix: 'Performed',
    suffix: 'Cataract Surgeries',
    alt: 'High-precision ophthalmic cataract surgical operating microscope in active hospital theater',
    sectorTag: 'Ophthalmic Surgery'
  },
  'h-2': {
    imageUrl: '/images/14.jpg',
    prefix: 'Diagnosed',
    suffix: 'Eye Patients',
    alt: 'Optical slit lamp biomicroscope and vision diagnostic examination in eye clinic',
    sectorTag: 'Clinical Diagnosis'
  },
  'h-3': {
    imageUrl: '/images/16.jpg',
    prefix: 'Distributed',
    suffix: 'Eyeglasses',
    alt: 'Prescription reading glasses and optical corrective frames display at distribution desk',
    sectorTag: 'Vision Care'
  },
  'h-4': {
    imageUrl: '/images/17.jpg',
    prefix: 'Organized',
    suffix: 'Medical Camps',
    alt: 'Community health medical outreach camp clinic screening station and diagnostic equipment',
    sectorTag: 'Medical Outreaches'
  },
  'h-5': {
    imageUrl: '/images/h-5-circumcisions.jpg',
    prefix: 'Performed',
    suffix: 'Circumcisions',
    alt: 'Sterile surgical stainless steel instruments and medical trays for minor procedures',
    sectorTag: 'Surgical Outreach'
  },

  // --- WATER & MASJIDS (Pages 12, 13, 14 in AMYS Profile) ---
  'w-1': {
    imageUrl: '/images/01.jpg',
    prefix: 'Constructed',
    suffix: 'Masjids',
    alt: 'Newly built village community mosque with dome, minarets, and arched entrance under blue sky',
    sectorTag: 'Islamic Infrastructure'
  },
  'w-2': {
    imageUrl: '/images/04.jpg',
    prefix: 'Installed',
    suffix: 'Family Wells',
    alt: 'Clean concrete circular water well with steel pulley and fresh bucket in lush tropical rural yard',
    sectorTag: 'Potable Water'
  },
  'w-3': {
    imageUrl: '/images/05.jpg',
    prefix: 'Implemented',
    suffix: 'Deep Wells',
    alt: 'Heavy-duty deep aquifer tube-well mechanism, stainless steel pumping pipes, and water control valves',
    sectorTag: 'Groundwater Systems'
  },
  'w-4': {
    imageUrl: '/images/07.jpg',
    prefix: 'Drilled',
    suffix: 'Village Wells',
    alt: 'Rural village community borehole hand pump and clean freshwater concrete platform basin',
    sectorTag: 'Village Water Networks'
  },
  'w-5': {
    imageUrl: '/images/08.jpg',
    prefix: 'Provided',
    suffix: 'Water Connections',
    alt: 'Crystal clear fresh drinking water flowing from community multi-tap domestic water supply station',
    sectorTag: 'Clean Water Supplies'
  },
  'w-6': {
    imageUrl: '/images/02.jpg',
    prefix: 'Established',
    suffix: 'Islamic Centers',
    alt: 'Grand multi-story Islamic center building with traditional geometric arches and courtyard',
    sectorTag: 'Community Centers'
  },

  // --- EDUCATION & WELFARE (Pages 15, 20, 21, 22, 23, 24, 25 in AMYS Profile) ---
  'e-1': {
    imageUrl: '/images/21.JPG',
    prefix: 'Distributed',
    suffix: 'School Kits',
    alt: 'Vibrant student backpacks, notebooks, colored pencils, and complete educational stationery sets',
    sectorTag: 'Student Supplies'
  },
  'e-2': {
    imageUrl: '/images/26.jpg',
    prefix: 'Conducted',
    suffix: 'Lectures',
    alt: 'Academic educational auditorium lecture hall with stage podium and student seating',
    sectorTag: 'Educational Seminars'
  },
  'e-3': {
    imageUrl: '/images/25.jpg',
    prefix: 'Awarded',
    suffix: 'Scholarships',
    alt: 'University graduation cap, honor diploma scroll, and academic reference textbooks',
    sectorTag: 'Higher Education'
  },
  'e-4': {
    imageUrl: '/images/23.jpg',
    prefix: 'Equipped',
    suffix: 'Libraries',
    alt: 'Majestic wooden library shelves lined with thousands of academic and Islamic classical reference books',
    sectorTag: 'Academic Libraries'
  },
  'e-5': {
    imageUrl: '/images/30.jpg',
    prefix: 'Produced',
    suffix: 'Radio & TV Shows',
    alt: 'Professional acoustic broadcast recording studio with microphones, headphones, and sound mixing console',
    sectorTag: 'Media Production'
  },
  'e-6': {
    imageUrl: '/images/29.jpg',
    prefix: 'Welcomed',
    suffix: 'Reverts',
    alt: 'Holy Quran with gold calligraphy on carved wooden rehal stand in serene prayer sanctuary',
    sectorTag: 'Islamic Outreach'
  },
  'e-7': {
    imageUrl: '/images/09.jpg',
    prefix: 'Cared For',
    suffix: 'Orphans',
    alt: 'Care packages, educational textbooks, and gift bundles prepared for sponsored orphan children',
    sectorTag: 'Child Welfare'
  },
  'e-8': {
    imageUrl: '/images/36.jpg',
    prefix: 'Distributed',
    suffix: 'Qurban Meat',
    alt: 'Humanitarian Qurban food relief cartons and emergency supply packages neatly organized for distribution',
    sectorTag: 'Qurban Relief'
  },
  'e-9': {
    imageUrl: '/images/10.jpg',
    prefix: 'Distributed',
    suffix: 'Sewing Machines',
    alt: 'Heavy-duty electric tailoring sewing machine and spools of colorful thread on wooden workbench',
    sectorTag: 'Self-Reliance'
  },
  'e-10': {
    imageUrl: '/images/34.jpg',
    prefix: 'Distributed',
    suffix: 'Ramadan Dates',
    alt: 'Rustic wooden crates and bowls filled with high-grade golden brown Medjool dates for Ramadan food relief',
    sectorTag: 'Ramadan Relief'
  },
  'e-11': {
    imageUrl: '/images/35.jpg',
    prefix: 'Provided',
    suffix: 'Eid Clothing Sets',
    alt: 'Neatly folded stacks of vibrant festive Eid celebration apparel and premium textiles',
    sectorTag: 'Apparel Aid'
  },
  'e-12': {
    imageUrl: '/images/37.jpg',
    prefix: 'Disbursed',
    suffix: 'Zakat Grants',
    alt: 'Official audited ledger, financial aid documentation, and transparent charitable records on office desk',
    sectorTag: 'Zakat Disbursement'
  },
  'e-13': {
    imageUrl: '/images/32.jpg',
    prefix: 'Served',
    suffix: 'Iftar Devotees',
    alt: 'Traditional Ramadan Iftar banquet table arrangement with glowing brass lanterns, dates, and refreshments',
    sectorTag: 'Devotee Welfare'
  }
};
