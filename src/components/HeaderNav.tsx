import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';
import { ScreenType } from '../types';

interface HeaderNavProps {
  title: string;
  onBack: () => void;
  onHome?: () => void;
  showHomeShortcut?: boolean;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  title,
  onBack,
  onHome,
  showHomeShortcut = false,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full px-3 pt-3 pb-2.5">
      <div className="flex items-center justify-between h-14 px-3.5 rounded-2xl glass-panel border border-emerald-500/20 shadow-lg shadow-black/40 backdrop-blur-xl">
        {/* Prominent Back Button */}
        <button
          id="nav-back-button"
          onClick={onBack}
          aria-label="Back to Home Screen"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/80 active:scale-95 border border-emerald-400/25 text-emerald-200 hover:text-amber-400 transition-all font-medium text-xs tracking-wide shadow-sm"
        >
          <ArrowLeft className="w-4 h-4 stroke-[2.5]" />
          <span>Back</span>
        </button>

        {/* Centered Page Title */}
        <div className="flex-1 text-center px-2">
          <h1 className="text-sm sm:text-base font-bold text-white tracking-wide truncate">
            {title}
          </h1>
        </div>

        {/* Right side icon or home return */}
        <div className="w-[68px] flex justify-end">
          <button
            id="nav-home-icon-button"
            onClick={onHome || onBack}
            aria-label="Go to Home"
            className="p-2 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/60 active:scale-95 border border-emerald-500/20 text-emerald-300 hover:text-amber-400 transition-all shadow-sm"
            title="Return to Main Menu"
          >
            <Home className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
