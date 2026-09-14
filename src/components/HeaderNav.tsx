import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';

interface HeaderNavProps {
  title: string;
  onBack: () => void;
  onHome?: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  title,
  onBack,
  onHome,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full px-2 sm:px-3 pt-2.5 pb-2">
      <div className="flex items-center justify-between h-14 px-3 rounded-2xl glass-panel border border-emerald-500/20 shadow-lg shadow-black/40 backdrop-blur-xl gap-2">
        {/* Prominent Back Button */}
        <button
          id="nav-back-button"
          onClick={onBack}
          aria-label="Back"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950/70 hover:bg-emerald-900/80 active:scale-95 border border-emerald-400/25 text-emerald-200 hover:text-amber-400 transition-all font-medium text-xs tracking-wide shadow-sm shrink-0"
        >
          <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
          <span>Back</span>
        </button>

        {/* Centered Page Title */}
        <div className="flex-1 text-center px-1 min-w-0">
          <h1 className="text-xs sm:text-sm md:text-base font-bold text-white tracking-wide truncate">
            {title}
          </h1>
        </div>

        {/* Right side Home Shortcut */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            id="nav-home-icon-button"
            onClick={onHome || onBack}
            aria-label="Home"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/80 active:scale-95 border border-emerald-500/20 text-emerald-300 hover:text-amber-400 transition-all shadow-sm"
            title="Home"
          >
            <Home className="w-4 h-4" />
            <span className="text-xs font-medium hidden sm:inline">Home</span>
          </button>
        </div>
      </div>
    </header>
  );
};
