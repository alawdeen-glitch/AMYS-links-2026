import React, { useState } from 'react';
import { 
  HeartPulse, 
  GraduationCap, 
  Users2, 
  Building2, 
  Download, 
  FileText, 
  Search, 
  ChevronDown,
  ChevronUp,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { HeaderNav } from './HeaderNav';
import { PROPOSALS_DATA } from '../data/proposalsData';
import { SectorCategory, ProjectProposal } from '../types';

interface ProjectsScreenProps {
  onBack: () => void;
}

export const ProjectsScreen: React.FC<ProjectsScreenProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<SectorCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const sectors = [
    { id: 'all', label: 'All', icon: Sparkles, count: PROPOSALS_DATA.length },
    { id: 'health', label: 'Health', icon: HeartPulse, count: 5 },
    { id: 'education', label: 'Education', icon: GraduationCap, count: 5 },
    { id: 'welfare', label: 'Welfare', icon: Users2, count: 2 },
    { id: 'development', label: 'Development', icon: Building2, count: 3 },
  ];

  const filteredProposals = PROPOSALS_DATA.filter((item) => {
    const matchesTab = activeTab === 'all' || item.sector === activeTab;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.arabicTitle && item.arabicTitle.includes(searchQuery)) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <div className="w-full flex flex-col min-h-screen pb-10">
      <HeaderNav title="Our Projects & Proposals" onBack={onBack} />

      <main className="px-4 pt-2 flex flex-col gap-3.5">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400/80 pointer-events-none" />
          <input
            id="input-search-proposals"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search proposals by keyword or title..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl glass-panel border border-emerald-500/25 text-xs text-white placeholder-emerald-300/50 focus:outline-none focus:border-amber-400/60 shadow-inner"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-emerald-300 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Segmented Sector Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          {sectors.map((sec) => {
            const Icon = sec.icon;
            const isActive = activeTab === sec.id;
            return (
              <button
                key={sec.id}
                id={`tab-sector-${sec.id}`}
                onClick={() => setActiveTab(sec.id as SectorCategory | 'all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-all active:scale-95 ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20 border border-amber-300'
                    : 'bg-emerald-950/60 text-emerald-200/90 border border-emerald-700/30 hover:bg-emerald-900/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-amber-400'}`} />
                <span>{sec.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-slate-950/20 text-slate-950' : 'bg-emerald-800/40 text-emerald-300'
                }`}>
                  {sec.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Proposals List */}
        <div className="flex flex-col gap-2.5 mt-1">
          {filteredProposals.length === 0 ? (
            <div className="p-8 rounded-3xl glass-panel text-center text-emerald-300/80 text-xs">
              No matching proposals found for &ldquo;{searchQuery}&rdquo;.
            </div>
          ) : (
            filteredProposals.map((proposal) => {
              const isExpanded = expandedId === proposal.id;
              const isArabic = proposal.language === 'Arabic';

              return (
                <div
                  key={proposal.id}
                  className="rounded-2xl glass-panel border border-emerald-500/20 shadow-md overflow-hidden transition-all"
                >
                  {/* Card Header Header */}
                  <div
                    onClick={() => toggleExpand(proposal.id)}
                    className="p-3.5 flex items-start justify-between gap-3 cursor-pointer hover:bg-emerald-900/20 active:bg-emerald-900/30 transition-colors"
                  >
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-9 h-9 rounded-xl bg-emerald-900/50 border border-emerald-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5 shadow-sm">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className={`text-[10px] px-2 py-0.5 rounded font-semibold ${
                            isArabic 
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 font-amiri' 
                              : 'bg-emerald-800/40 text-emerald-300 border border-emerald-600/30'
                          }`}>
                            {proposal.language}
                          </span>
                          <span className="text-[10px] text-emerald-300/70 font-mono">
                            {proposal.size}
                          </span>
                          <span className="text-[10px] text-emerald-400/80 bg-emerald-950/60 px-1.5 py-0.5 rounded">
                            {proposal.sectorName}
                          </span>
                        </div>

                        <h3 className={`text-xs sm:text-sm font-bold text-white mt-1 leading-snug ${isArabic ? 'font-amiri text-sm sm:text-base text-amber-200' : ''}`}>
                          {proposal.title}
                        </h3>

                        {proposal.arabicTitle && !isArabic && (
                          <p className="font-amiri text-xs text-amber-300/80 mt-0.5">
                            {proposal.arabicTitle}
                          </p>
                        )}
                      </div>
                    </div>

                    <button 
                      className="p-1 text-emerald-400 hover:text-white"
                      aria-label="Toggle Details"
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Expanded Details & Download Action */}
                  <div className={`px-3.5 pb-3.5 pt-1 ${isExpanded ? 'block' : 'block sm:block'}`}>
                    <p className={`text-xs text-emerald-200/80 mb-3 ${isArabic ? 'font-amiri text-right' : ''}`}>
                      {proposal.description}
                    </p>

                    <div className="flex items-center gap-2">
                      <a
                        id={`btn-download-${proposal.id}`}
                        href={`/docs/${proposal.filename}`}
                        download={proposal.filename}
                        className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 active:scale-95 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 transition-all cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>Download PDF ({proposal.size})</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </main>
    </div>
  );
};
