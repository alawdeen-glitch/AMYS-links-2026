import React from 'react';
import { 
  Globe, 
  Share2, 
  FileText, 
  FolderKanban, 
  BarChart3, 
  HeartHandshake, 
  ChevronRight,
  ExternalLink,
  MapPin
} from 'lucide-react';
import { ScreenType } from '../types';

interface HomeScreenProps {
  onNavigate: (screen: ScreenType) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  return (
    <div className="w-full flex flex-col min-h-screen justify-between pb-6 pt-4 px-4">
      {/* Top Header / Hero Section */}
      <div className="flex flex-col items-center text-center mt-2">
        {/* 3D raised translucent rounded frame holding official unchanged logo */}
        <div className="relative group">
          {/* Ambient Glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/30 via-emerald-400/35 to-amber-500/30 rounded-[28px] blur-lg opacity-80 group-hover:opacity-100 transition-all duration-500" />
          
          <div className="relative w-52 sm:w-60 aspect-[3508/2480] rounded-2xl p-2.5 bg-white border-2 border-amber-400/50 shadow-2xl flex items-center justify-center transform transition-transform duration-300 hover:scale-[1.02] active:scale-95 overflow-hidden">
            <img
              src="/color-01.png"
              alt="Association of Muslim Youth of Sailan (AMYS)"
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Arabic Title in gold Amiri calligraphy */}
        <div className="mt-4">
          <h2 className="font-amiri text-2xl sm:text-3xl font-bold text-amber-400 tracking-wide glow-gold-text leading-tight">
            جمعية شباب مسلمي سيلان
          </h2>
        </div>

        {/* English Title (bold sans-serif) */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-widest mt-1 uppercase font-sans drop-shadow-sm">
          AMYS
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-emerald-200/90 font-medium tracking-wide mt-0.5">
          Association of Muslim Youth of Sailan
        </p>

        {/* Motto Tag with hand-heart icon */}
        <div className="mt-3 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-emerald-950/80 via-emerald-900/60 to-emerald-950/80 border border-amber-500/30 text-amber-300 text-xs font-semibold shadow-inner">
          <HeartHandshake className="w-3.5 h-3.5 text-amber-400" />
          <span>Helping the needy is Humane</span>
        </div>
      </div>

      {/* Main 5-Button Action Stack */}
      <div className="flex flex-col gap-3 my-6 w-full">
        {/* Button 1: Our Official Website */}
        <button
          id="btn-official-website"
          onClick={() => onNavigate('website')}
          className="group w-full p-4 rounded-2xl glass-card-interactive flex items-center justify-between border border-emerald-500/25 active:scale-[0.98] transition-all text-left relative overflow-hidden"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600/30 to-teal-900/50 border border-emerald-400/30 flex items-center justify-center text-amber-400 shadow-sm group-hover:scale-105 transition-transform">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm sm:text-base text-white group-hover:text-amber-300 transition-colors">
                  Our Official Website
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-800/40 text-emerald-300 font-mono border border-emerald-600/30">
                  amyslanka.com
                </span>
              </div>
              <p className="text-xs text-emerald-200/70 mt-0.5">
                Explore organizational portal, vision & services
              </p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-emerald-400/70 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
        </button>

        {/* Button 2: Connect with Us */}
        <button
          id="btn-connect-with-us"
          onClick={() => onNavigate('connect')}
          className="group w-full p-4 rounded-2xl glass-card-interactive flex items-center justify-between border border-emerald-500/25 active:scale-[0.98] transition-all text-left relative overflow-hidden"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600/30 to-teal-900/50 border border-emerald-400/30 flex items-center justify-center text-amber-400 shadow-sm group-hover:scale-105 transition-transform">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm sm:text-base text-white group-hover:text-amber-300 transition-colors">
                  Connect with Us
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-medium border border-amber-500/30">
                  Direct Line
                </span>
              </div>
              <p className="text-xs text-emerald-200/70 mt-0.5">
                WhatsApp, hotline, socials & bank donation info
              </p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-emerald-400/70 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
        </button>

        {/* Button 3: View Our Profile */}
        <button
          id="btn-view-our-profile"
          onClick={() => onNavigate('profiles')}
          className="group w-full p-4 rounded-2xl glass-card-interactive flex items-center justify-between border border-emerald-500/25 active:scale-[0.98] transition-all text-left relative overflow-hidden"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600/30 to-teal-900/50 border border-emerald-400/30 flex items-center justify-center text-amber-400 shadow-sm group-hover:scale-105 transition-transform">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm sm:text-base text-white group-hover:text-amber-300 transition-colors">
                  View Our Profile
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-800/40 text-emerald-300 font-semibold border border-emerald-600/30">
                  AMYS Profile
                </span>
              </div>
              <p className="text-xs text-emerald-200/70 mt-0.5">
                English & Arabic comprehensive organizational reports
              </p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-emerald-400/70 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
        </button>

        {/* Button 4: Explore Our Projects */}
        <button
          id="btn-explore-our-projects"
          onClick={() => onNavigate('projects')}
          className="group w-full p-4 rounded-2xl glass-card-interactive flex items-center justify-between border border-emerald-500/25 active:scale-[0.98] transition-all text-left relative overflow-hidden"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600/30 to-teal-900/50 border border-emerald-400/30 flex items-center justify-center text-amber-400 shadow-sm group-hover:scale-105 transition-transform">
              <FolderKanban className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm sm:text-base text-white group-hover:text-amber-300 transition-colors">
                  Explore Our Projects
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-800/40 text-emerald-300 font-semibold border border-emerald-600/30">
                  4 Sectors
                </span>
              </div>
              <p className="text-xs text-emerald-200/70 mt-0.5">
                Health, education, welfare & development proposals
              </p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-emerald-400/70 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
        </button>

        {/* Button 5: Our Impact in Numbers */}
        <button
          id="btn-our-impact-numbers"
          onClick={() => onNavigate('impact')}
          className="group w-full p-4 rounded-2xl glass-gold-hero flex items-center justify-between active:scale-[0.98] transition-all text-left relative overflow-hidden"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500/30 to-amber-700/50 border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-sm group-hover:scale-105 transition-transform">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm sm:text-base text-amber-300 group-hover:text-white transition-colors">
                  Our Impact in Numbers
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 font-extrabold border border-amber-400/40">
                  30,000+ Surgeries
                </span>
              </div>
              <p className="text-xs text-amber-200/80 mt-0.5">
                Key Milestone: 30,000+ Free Cataract Surgeries & metrics
              </p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-amber-400 group-hover:translate-x-0.5 transition-all" />
        </button>
      </div>

      {/* Footer */}
      <footer className="w-full text-center px-2 pt-2 border-t border-emerald-800/30">
        <div className="flex items-center justify-center gap-1.5 text-xs text-emerald-300/80">
          <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <p className="leading-tight text-[11px] sm:text-xs">
            #149, Maligakanda Road, Maradana, Colombo 10, Sri Lanka
          </p>
        </div>
        <p className="text-[10px] sm:text-[11px] font-medium text-amber-400/90 tracking-wider mt-1.5">
          Serving Humanity Since 1997 • NGO Reg: L-38904
        </p>
      </footer>
    </div>
  );
};
