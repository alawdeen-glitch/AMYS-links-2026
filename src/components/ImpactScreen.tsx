import React, { useState } from 'react';
import { 
  BarChart3, 
  Sparkles, 
  HeartHandshake, 
  Activity, 
  Droplet, 
  Building2, 
  GraduationCap, 
  Eye, 
  Glasses, 
  Users, 
  BookOpen, 
  Tv, 
  Heart, 
  Package, 
  Scissors, 
  Shirt, 
  Coins, 
  Search,
  Check
} from 'lucide-react';
import { HeaderNav } from './HeaderNav';
import { HERO_STAT, IMPACT_STATS } from '../data/impactData';

interface ImpactScreenProps {
  onBack: () => void;
}

type FilterCategory = 'all' | 'health' | 'water_masjids' | 'education_welfare';

export const ImpactScreen: React.FC<ImpactScreenProps> = ({ onBack }) => {
  const [filter, setFilter] = useState<FilterCategory>('all');
  const [search, setSearch] = useState('');

  const filterPills: { id: FilterCategory; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'health', label: 'Health' },
    { id: 'water_masjids', label: 'Water & Masjids' },
    { id: 'education_welfare', label: 'Education & Welfare' },
  ];

  const filteredStats = IMPACT_STATS.filter((item) => {
    const matchesCategory = filter === 'all' || item.category === filter;
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || item.metric.includes(search);
    return matchesCategory && matchesSearch;
  });

  const getStatIcon = (id: string, category: string) => {
    switch (id) {
      case 'h-1': return <Eye className="w-4 h-4 text-emerald-400" />;
      case 'h-2': return <Activity className="w-4 h-4 text-emerald-400" />;
      case 'h-3': return <Glasses className="w-4 h-4 text-emerald-400" />;
      case 'h-4': return <HeartHandshake className="w-4 h-4 text-emerald-400" />;
      case 'h-5': return <Activity className="w-4 h-4 text-emerald-400" />;
      case 'w-1': return <Building2 className="w-4 h-4 text-amber-400" />;
      case 'w-2':
      case 'w-3':
      case 'w-4':
      case 'w-5': return <Droplet className="w-4 h-4 text-cyan-400" />;
      case 'w-6': return <Building2 className="w-4 h-4 text-amber-400" />;
      case 'e-1': return <Package className="w-4 h-4 text-amber-300" />;
      case 'e-2':
      case 'e-4': return <BookOpen className="w-4 h-4 text-amber-300" />;
      case 'e-3': return <GraduationCap className="w-4 h-4 text-amber-300" />;
      case 'e-5': return <Tv className="w-4 h-4 text-emerald-300" />;
      case 'e-6': return <Users className="w-4 h-4 text-emerald-300" />;
      case 'e-7': return <Heart className="w-4 h-4 text-rose-400" />;
      case 'e-8': return <Package className="w-4 h-4 text-amber-400" />;
      case 'e-9': return <Scissors className="w-4 h-4 text-amber-300" />;
      case 'e-10': return <Package className="w-4 h-4 text-amber-400" />;
      case 'e-11': return <Shirt className="w-4 h-4 text-cyan-300" />;
      case 'e-12': return <Coins className="w-4 h-4 text-amber-400" />;
      default: return <Sparkles className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <div className="w-full flex flex-col min-h-screen pb-10">
      <HeaderNav title="Impact in Numbers" onBack={onBack} />

      <main className="px-4 pt-2 flex flex-col gap-4">
        {/* Hero Highlight Counter (Glowing Gold 3D Card) */}
        <div className="w-full rounded-3xl glass-gold-hero p-5 border-2 border-amber-400/40 shadow-2xl relative overflow-hidden text-center">
          {/* Ambient Glow */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold mb-2">
            <Eye className="w-3.5 h-3.5 text-amber-300" />
            <span>Key Milestone</span>
          </div>

          <div className="text-4xl sm:text-5xl font-black text-amber-400 tracking-tight glow-gold-text my-1 font-sans">
            {HERO_STAT.metric}
          </div>

          <h2 className="text-sm sm:text-base font-bold text-white leading-tight">
            {HERO_STAT.title}
          </h2>

          <p className="text-xs text-amber-200/90 font-medium mt-1">
            {HERO_STAT.subtitle}
          </p>

          <p className="font-amiri text-xs text-amber-300/80 mt-1">
            {HERO_STAT.arabicSubtitle}
          </p>
        </div>

        {/* Search Bar for Statistics */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400/80 pointer-events-none" />
          <input
            id="input-search-stats"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search metrics (e.g. Surgeries, Wells, Masjids)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl glass-panel border border-emerald-500/25 text-xs text-white placeholder-emerald-300/50 focus:outline-none focus:border-amber-400/60 shadow-inner"
          />
          {search && (
            <button 
              onClick={() => setSearch('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-emerald-300 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          {filterPills.map((pill) => {
            const isActive = filter === pill.id;
            return (
              <button
                key={pill.id}
                id={`pill-filter-${pill.id}`}
                onClick={() => setFilter(pill.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all active:scale-95 ${
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

        {/* Metric Count indicator */}
        <div className="flex items-center justify-between text-xs text-emerald-300/70 px-1">
          <span>Showing {filteredStats.length} verified metrics</span>
          <span className="text-[10px] text-amber-400/90 font-mono">1997 - 2025</span>
        </div>

        {/* 2-Column Bento Stat Cards */}
        <div className="grid grid-cols-2 gap-2.5">
          {filteredStats.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl glass-card-interactive p-3.5 border border-emerald-500/20 shadow-md flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-1.5 rounded-lg bg-emerald-900/60 border border-emerald-500/30 group-hover:scale-105 transition-transform">
                  {getStatIcon(item.id, item.category)}
                </div>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-950/70 text-emerald-300/80 font-medium">
                  {item.categoryLabel}
                </span>
              </div>

              <div>
                <div className="text-lg sm:text-xl font-extrabold text-amber-400 tracking-tight group-hover:text-amber-300 transition-colors font-sans">
                  {item.metric}
                </div>
                <p className="text-[11px] sm:text-xs text-emerald-100/90 font-medium leading-tight mt-1 line-clamp-2">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Audit Note */}
        <div className="rounded-2xl bg-emerald-950/40 p-3 border border-emerald-800/30 text-center text-[10px] sm:text-[11px] text-emerald-300/80">
          All figures are verified from AMYS field registries and audited organizational records.
        </div>
      </main>
    </div>
  );
};
