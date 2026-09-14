import React, { useState } from 'react';
import { 
  Search,
  Sparkles
} from 'lucide-react';
import { HeaderNav } from './HeaderNav';
import { HERO_STAT, IMPACT_STATS } from '../data/impactData';
import { IMPACT_MEDIA } from '../data/impactMedia';

interface ImpactScreenProps {
  onBack: () => void;
}

type FilterCategory = 'all' | 'health' | 'water_masjids' | 'education_welfare';

export const ImpactScreen: React.FC<ImpactScreenProps> = ({ onBack }) => {
  const [filter, setFilter] = useState<FilterCategory>('all');
  const [search, setSearch] = useState('');

  const filterPills: { id: FilterCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'health', label: 'Healthcare' },
    { id: 'water_masjids', label: 'Water & Masjids' },
    { id: 'education_welfare', label: 'Education & Welfare' },
  ];

  const filteredStats = IMPACT_STATS.filter((item) => {
    const matchesCategory = filter === 'all' || item.category === filter;
    const matchesSearch = 
      item.title.toLowerCase().includes(search.toLowerCase()) || 
      (item.arabicTitle && item.arabicTitle.includes(search)) ||
      item.metric.includes(search);
    return matchesCategory && matchesSearch;
  });

  // Calculate tailored text scale so numbers and metrics ALWAYS fit comfortably within card boundaries
  const getMetricFontSize = (metricStr: string) => {
    const len = metricStr.length;
    if (len >= 10) return 'text-xl sm:text-2xl md:text-3xl';
    if (len >= 6) return 'text-2xl sm:text-3xl md:text-4xl';
    return 'text-2xl sm:text-4xl md:text-5xl';
  };

  return (
    <div className="w-full flex flex-col min-h-screen pb-10">
      <HeaderNav title="Our Impact in Numbers" onBack={onBack} />

      <main className="px-3 sm:px-4 pt-2 flex flex-col gap-4">
        {/* Hero Highlight Counter (Ophthalmic Cataract Milestone - Box Adjusted) */}
        <div className="w-full rounded-3xl glass-panel border-2 border-amber-400/45 shadow-2xl overflow-hidden relative group">
          {/* Visual Showcase Stage with Ultra Realistic Photography */}
          <div className="relative w-full h-64 sm:h-76 md:h-84 bg-slate-950 overflow-hidden">
            <img
              src={IMPACT_MEDIA['h-1']?.imageUrl || '/images/hero-cataract.jpg'}
              alt={IMPACT_MEDIA['h-1']?.alt || 'High-precision ophthalmic cataract surgical operating microscope'}
              loading="eager"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.92] contrast-[1.05]"
            />

            {/* Top Gradient Header Overlay */}
            <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-slate-950/85 via-slate-950/40 to-transparent p-3 flex items-center justify-between pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/90 text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Key Milestone</span>
              </span>
              <span className="text-[11px] font-mono font-bold text-amber-300 bg-slate-950/85 px-2.5 py-0.5 rounded-full border border-amber-400/50 backdrop-blur-md">
                1997 – 2025
              </span>
            </div>

            {/* Emerald Green Bottom Banner - Dynamically Fitted to Box */}
            <div className="absolute bottom-0 inset-x-0 w-full bg-gradient-to-r from-emerald-950/95 via-emerald-900/95 to-emerald-950/95 border-t border-emerald-400/40 py-2.5 sm:py-3.5 px-3 sm:px-4 flex items-center justify-center flex-wrap gap-x-2.5 gap-y-1 text-center backdrop-blur-md shadow-2xl overflow-hidden">
              <span className="text-xs sm:text-base md:text-lg font-bold tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] shrink-0 text-center">
                Performed
              </span>
              
              {/* BIG 3D GOLD EMBOSSED NUMBER */}
              <span className="text-2xl sm:text-4xl md:text-5xl font-black font-sans tracking-tight text-amber-400 glow-gold-text drop-shadow-[0_4px_10px_rgba(0,0,0,0.95)] shrink-0">
                {HERO_STAT.metric}
              </span>

              <span className="text-xs sm:text-base md:text-lg font-bold tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] shrink-0 text-center">
                Cataract Surgeries
              </span>
            </div>
          </div>

          {/* Hero Meta Information - Aligned in Middle Style */}
          <div className="p-4 sm:p-5 bg-gradient-to-b from-emerald-950/90 to-slate-950/95 flex flex-col items-center justify-center text-center gap-1.5">
            <h2 className="text-base sm:text-lg font-bold text-white leading-tight text-center">
              {HERO_STAT.title}
            </h2>
            <p className="text-xs sm:text-sm text-emerald-200/90 font-medium text-center max-w-lg mx-auto">
              {HERO_STAT.subtitle}
            </p>
            {HERO_STAT.arabicSubtitle && (
              <p className="text-xs sm:text-sm text-amber-300/90 pt-1.5 border-t border-emerald-800/40 text-center w-full max-w-md mx-auto" dir="rtl">
                {HERO_STAT.arabicSubtitle}
              </p>
            )}
          </div>
        </div>

        {/* Search Bar for Statistics */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400/80 pointer-events-none" />
          <input
            id="input-search-stats"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search metrics or project names..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl glass-panel border border-emerald-500/25 text-xs text-white placeholder-emerald-300/50 focus:outline-none focus:border-amber-400/60 shadow-inner text-center sm:text-left"
          />
          {search && (
            <button 
              onClick={() => setSearch('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-emerald-300 hover:text-white cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          {filterPills.map((pill) => {
            const isActive = filter === pill.id;
            return (
              <button
                key={pill.id}
                id={`pill-filter-${pill.id}`}
                onClick={() => setFilter(pill.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all active:scale-95 cursor-pointer text-center ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/25 border border-amber-300'
                    : 'bg-emerald-950/60 text-emerald-200/90 border border-emerald-700/30 hover:bg-emerald-900/60'
                }`}
              >
                {pill.label}
              </button>
            );
          })}
        </div>

        {/* Metric Count indicator - Centered */}
        <div className="flex items-center justify-center gap-2 text-xs text-emerald-300/70 py-0.5 text-center">
          <span>Showing {filteredStats.length} verified projects</span>
          <span className="text-emerald-500">•</span>
          <span className="text-[10px] text-amber-400/90 font-mono">1997 – 2025</span>
        </div>

        {/* 1-Column Stat Cards with Ultra Realistic Photography Images */}
        <div className="flex flex-col gap-4">
          {filteredStats.map((item) => {
            const media = IMPACT_MEDIA[item.id] || {
              imageUrl: '/images/hero-cataract.jpg',
              prefix: 'Achieved',
              suffix: item.title,
              alt: item.title,
              sectorTag: item.categoryLabel
            };

            return (
              <div
                key={item.id}
                id={`stat-card-${item.id}`}
                className="w-full rounded-3xl glass-panel border border-emerald-500/30 shadow-2xl overflow-hidden group transition-all duration-300 hover:border-amber-400/60 hover:shadow-emerald-950/70 flex flex-col"
              >
                {/* Ultra Realistic Photography Visual Showcase Stage */}
                <div className="relative w-full h-56 sm:h-64 md:h-72 bg-slate-950 overflow-hidden">
                  <img
                    src={media.imageUrl}
                    alt={media.alt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('unsplash.com/photo-1542816417')) {
                        target.src = 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=1200&q=80';
                      }
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.93] contrast-[1.05]"
                  />

                  {/* Top Subtle Vignette Gradient for Contrast */}
                  <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/90 px-3 py-1 rounded-full border border-emerald-500/40 backdrop-blur-md shadow-md">
                      {item.categoryLabel}
                    </span>
                    <span className="text-[10px] sm:text-xs text-amber-300 font-mono font-semibold bg-slate-950/90 px-2.5 py-1 rounded-full border border-amber-400/40 backdrop-blur-md shadow-md">
                      {media.sectorTag}
                    </span>
                  </div>

                  {/* Emerald Green Bottom Banner (Properly contained inside the card box, no overflow) */}
                  <div className="absolute bottom-0 inset-x-0 w-full bg-gradient-to-r from-emerald-950/95 via-emerald-900/92 to-emerald-950/95 border-t border-emerald-400/35 px-3 py-2 sm:px-4 sm:py-2.5 flex items-center justify-center flex-wrap gap-x-2 gap-y-0.5 text-center backdrop-blur-md shadow-2xl overflow-hidden">
                    {/* Prefix Action Verb */}
                    <span className="text-xs sm:text-sm font-semibold tracking-wide text-emerald-100/95 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] shrink-0 text-center">
                      {media.prefix}
                    </span>
                    
                    {/* BIG 3D GOLD EMBOSSED NUMBER - Proportional & Contained */}
                    <span className={`${getMetricFontSize(item.metric)} font-black font-sans tracking-tight text-amber-400 glow-gold-text drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)] shrink-0 transition-transform group-hover:scale-105 text-center`}>
                      {item.metric}
                    </span>

                    {/* Suffix Noun */}
                    <span className="text-xs sm:text-sm font-semibold tracking-wide text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] shrink-0 text-center">
                      {media.suffix}
                    </span>
                  </div>
                </div>

                {/* Card Bottom Meta - Middle-Aligned Style */}
                <div className="p-4 sm:p-5 bg-gradient-to-b from-slate-950/90 to-emerald-950/70 border-t border-emerald-800/30 flex flex-col items-center justify-center text-center">
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug text-center max-w-lg mx-auto">
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative Note - Centered */}
        <div className="rounded-2xl bg-emerald-950/60 p-3.5 border border-emerald-800/40 text-center text-xs text-emerald-200/90 shadow-sm flex items-center justify-center text-center max-w-xl mx-auto w-full">
          <p className="text-center">All figures represent audited projects executed by AMYS across Sri Lanka from 1997 to 2025.</p>
        </div>
      </main>
    </div>
  );
};
