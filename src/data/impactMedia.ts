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
    imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80',
    prefix: 'Performed',
    suffix: 'Cataract Surgeries',
    alt: 'High-precision ophthalmic cataract surgical operating microscope in active hospital theater',
    sectorTag: 'Ophthalmic Surgery'
  },
  'h-2': {
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    prefix: 'Diagnosed',
    suffix: 'Eye Patients',
    alt: 'Optical slit lamp biomicroscope and vision diagnostic examination in eye clinic',
    sectorTag: 'Clinical Diagnosis'
  },
  'h-3': {
    imageUrl: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1200&q=80',
    prefix: 'Distributed',
    suffix: 'Eyeglasses',
    alt: 'Prescription reading glasses and optical corrective frames display at distribution desk',
    sectorTag: 'Vision Care'
  },
  'h-4': {
    imageUrl: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80',
    prefix: 'Organized',
    suffix: 'Medical Camps',
    alt: 'Community health medical outreach camp clinic screening station and diagnostic equipment',
    sectorTag: 'Medical Outreaches'
  },
  'h-5': {
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
    prefix: 'Performed',
    suffix: 'Circumcisions',
    alt: 'Sterile surgical stainless steel instruments and medical trays for minor procedures',
    sectorTag: 'Surgical Outreach'
  },

  // --- WATER & MASJIDS (Pages 12, 13, 14 in AMYS Profile) ---
  'w-1': {
    imageUrl: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=1200&q=80',
    prefix: 'Constructed',
    suffix: 'Masjids',
    alt: 'Newly built village community mosque with dome, minarets, and arched entrance under blue sky',
    sectorTag: 'Islamic Infrastructure'
  },
  'w-2': {
    imageUrl: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=1200&q=80',
    prefix: 'Installed',
    suffix: 'Family Wells',
    alt: 'Clean concrete circular water well with steel pulley and fresh bucket in lush tropical rural yard',
    sectorTag: 'Potable Water'
  },
  'w-3': {
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    prefix: 'Implemented',
    suffix: 'Deep Wells',
    alt: 'Heavy-duty deep aquifer tube-well mechanism, stainless steel pumping pipes, and water control valves',
    sectorTag: 'Groundwater Systems'
  },
  'w-4': {
    imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    prefix: 'Drilled',
    suffix: 'Village Wells',
    alt: 'Rural village community borehole hand pump and clean freshwater concrete platform basin',
    sectorTag: 'Village Water Networks'
  },
  'w-5': {
    imageUrl: 'https://images.unsplash.com/photo-1574482620826-40685ca5ebd2?auto=format&fit=crop&w=1200&q=80',
    prefix: 'Provided',
    suffix: 'Water Connections',
    alt: 'Crystal clear fresh drinking water flowing from community multi-tap domestic water supply station',
    sectorTag: 'Clean Water Supplies'
  },
  'w-6': {
    imageUrl: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80',
    prefix: 'Established',
    suffix: 'Islamic Centers',
    alt: 'Grand multi-story Islamic center building with traditional geometric arches and courtyard',
    sectorTag: 'Community Centers'
  },

  // --- EDUCATION & WELFARE (Pages 15, 20, 21, 22, 23, 24, 25 in AMYS Profile) ---
  'e-1': {
    imageUrl: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1200&q=80',
    prefix: 'Distributed',
    suffix: 'School Kits',
    alt: 'Vibrant student backpacks, notebooks, colored pencils, and complete educational stationery sets',
    sectorTag: 'Student Supplies'
  },
  'e-2': {
    imageUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
    prefix: 'Conducted',
    suffix: 'Lectures',
    alt: 'Academic educational auditorium lecture hall with stage podium and student seating',
    sectorTag: 'Educational Seminars'
  },
  'e-3': {
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    prefix: 'Awarded',
    suffix: 'Scholarships',
    alt: 'University graduation cap, honor diploma scroll, and academic reference textbooks',
    sectorTag: 'Higher Education'
  },
  'e-4': {
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    prefix: 'Equipped',
    suffix: 'Libraries',
    alt: 'Majestic wooden library shelves lined with thousands of academic and Islamic classical reference books',
    sectorTag: 'Academic Libraries'
  },
  'e-5': {
    imageUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80',
    prefix: 'Produced',
    suffix: 'Radio & TV Shows',
    alt: 'Professional acoustic broadcast recording studio with microphones, headphones, and sound mixing console',
    sectorTag: 'Media Production'
  },
  'e-6': {
    imageUrl: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1200&q=80',
    prefix: 'Welcomed',
    suffix: 'Reverts',
    alt: 'Holy Quran with gold calligraphy on carved wooden rehal stand in serene prayer sanctuary',
    sectorTag: 'Islamic Outreach'
  },
  'e-7': {
    imageUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80',
    prefix: 'Cared For',
    suffix: 'Orphans',
    alt: 'Care packages, educational textbooks, and gift bundles prepared for sponsored orphan children',
    sectorTag: 'Child Welfare'
  },
  'e-8': {
    imageUrl: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80',
    prefix: 'Distributed',
    suffix: 'Qurban Meat',
    alt: 'Humanitarian Qurban food relief cartons and emergency supply packages neatly organized for distribution',
    sectorTag: 'Qurban Relief'
  },
  'e-9': {
    imageUrl: 'https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?auto=format&fit=crop&w=1200&q=80',
    prefix: 'Distributed',
    suffix: 'Sewing Machines',
    alt: 'Heavy-duty electric tailoring sewing machine and spools of colorful thread on wooden workbench',
    sectorTag: 'Self-Reliance'
  },
  'e-10': {
    imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80',
    prefix: 'Distributed',
    suffix: 'Ramadan Dates',
    alt: 'Rustic wooden crates and bowls filled with high-grade golden brown Medjool dates for Ramadan food relief',
    sectorTag: 'Ramadan Relief'
  },
  'e-11': {
    imageUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80',
    prefix: 'Provided',
    suffix: 'Eid Clothing Sets',
    alt: 'Neatly folded stacks of vibrant festive Eid celebration apparel and premium textiles',
    sectorTag: 'Apparel Aid'
  },
  'e-12': {
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    prefix: 'Disbursed',
    suffix: 'Zakat Grants',
    alt: 'Official audited ledger, financial aid documentation, and transparent charitable records on office desk',
    sectorTag: 'Zakat Disbursement'
  },
  'e-13': {
    imageUrl: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80',
    prefix: 'Served',
    suffix: 'Iftar Devotees',
    alt: 'Traditional Ramadan Iftar banquet table arrangement with glowing brass lanterns, dates, and refreshments',
    sectorTag: 'Devotee Welfare'
  }
};
