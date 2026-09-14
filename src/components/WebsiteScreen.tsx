import React from 'react';
import { 
  Globe, 
  ExternalLink, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  Compass
} from 'lucide-react';
import { HeaderNav } from './HeaderNav';

interface WebsiteScreenProps {
  onBack: () => void;
}

export const WebsiteScreen: React.FC<WebsiteScreenProps> = ({ onBack }) => {
  const services = [
    'Key Milestone: 30,000+ Free Cataract Eye Surgeries Performed',
    'Clean Drinking Water Wells, Boreholes & Filtration Plants',
    'Masjid & Islamic Community Center Infrastructure Development',
    'Comprehensive Orphan Care, Sponsorship & Monthly Welfare',
    'Educational Scholarships, School Stationery & University Grants',
    'Ramadan Iftar Feeding, Qurban Sacrifices & Emergency Relief'
  ];

  return (
    <div className="w-full flex flex-col min-h-screen pb-8">
      <HeaderNav title="Official Website" onBack={onBack} />

      <main className="px-4 pt-2 flex flex-col gap-4">
        {/* 3D Card Previewing Official Portal */}
        <div className="w-full rounded-3xl glass-panel p-5 border border-emerald-500/25 shadow-xl relative overflow-hidden">
          {/* Subtle Corner Light Refraction */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-900/60 border border-emerald-400/30 flex items-center justify-center text-amber-400 shadow-sm">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white leading-tight">
                  AMYS Web Portal
                </h2>
                <span className="text-xs text-emerald-300 font-medium">
                  Official Online Gateway
                </span>
              </div>
            </div>
            
            {/* Live Status Badge */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-[11px] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live
            </span>
          </div>

          {/* Website Preview Card / Visual */}
          <div className="w-full rounded-2xl bg-gradient-to-b from-[#022c22] to-[#040d12] border border-emerald-500/20 p-4 mb-4 relative overflow-hidden group">
            <div className="flex items-center justify-between border-b border-emerald-800/40 pb-2 mb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
              </div>
              
              {/* URL badge */}
              <div className="px-3 py-1 rounded-lg bg-emerald-950/70 border border-emerald-600/30 text-emerald-300 text-xs font-mono font-medium flex items-center gap-1.5">
                <span className="text-amber-400 font-bold">https://</span>
                <span className="text-white font-semibold">www.amyslanka.com</span>
              </div>
            </div>

            <div className="flex items-center gap-3 py-2">
              <div className="w-16 h-12 rounded-lg bg-white p-1 border border-emerald-400/40 shadow-sm flex items-center justify-center shrink-0 overflow-hidden">
                <img
                  src="/images/color-01.png"
                  onError={(e) => {
                    e.currentTarget.src = '/color-01.png';
                  }}
                  alt="AMYS Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-1.5 flex-1 min-w-0">
                <div className="h-3.5 bg-emerald-800/40 rounded-md w-3/4 flex items-center px-1.5">
                  <span className="text-[10px] text-emerald-200 font-semibold truncate">
                    AMYS Humanitarian Network
                  </span>
                </div>
                <div className="h-3 bg-emerald-900/50 rounded-md w-full flex items-center px-1.5">
                  <span className="text-[9px] text-emerald-300/80 truncate">
                    Serving Humanity Since 1997 • Colombo 10
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-800/30 text-emerald-200 border border-emerald-700/30">
                Humanitarian Projects
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Online Giving
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-800/30 text-emerald-200 border border-emerald-700/30">
                Annual Reports
              </span>
            </div>
          </div>

          {/* Large Primary 3D Button */}
          <a
            id="btn-launch-website"
            href="http://www.amyslanka.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 active:scale-[0.98] text-slate-950 font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-amber-500/25 border border-amber-300 transition-all cursor-pointer"
          >
            <span>Launch Official Website</span>
            <ExternalLink className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

        {/* Overview List of Services, Registration & Headquarters */}
        <div className="rounded-3xl glass-panel p-5 border border-emerald-500/20 flex flex-col gap-4">
          <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
            <Compass className="w-4 h-4" />
            <span>Organizational Credentials</span>
          </h3>

          {/* Registration Info */}
          <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/20">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-emerald-300 font-semibold uppercase tracking-wide">
                Government Registered NGO
              </p>
              <p className="text-sm font-bold text-white mt-0.5">
                Registration No: L-38904
              </p>
              <p className="text-[11px] text-emerald-200/70 mt-0.5">
                Registered under the National NGO Secretariat of the Ministry of Defense & Urban Development, Sri Lanka
              </p>
            </div>
          </div>

          {/* Headquarters Location */}
          <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/20">
            <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-amber-300 font-semibold uppercase tracking-wide">
                National Headquarters
              </p>
              <p className="text-sm font-bold text-white mt-0.5">
                #149, Maligakanda Road, Maradana
              </p>
              <p className="text-xs text-emerald-200/80">
                Colombo 10, Sri Lanka
              </p>
            </div>
          </div>

          {/* Core Services Overview */}
          <div className="pt-2 border-t border-emerald-800/30">
            <p className="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-2.5">
              Strategic Focus Areas
            </p>
            <div className="grid grid-cols-1 gap-2">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-2 text-xs text-emerald-100/90 py-0.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
