import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Facebook, 
  Mail, 
  Youtube, 
  Building, 
  Copy, 
  Check, 
  ExternalLink,
  ShieldAlert,
  Heart
} from 'lucide-react';
import { HeaderNav } from './HeaderNav';

interface ConnectScreenProps {
  onBack: () => void;
}

export const ConnectScreen: React.FC<ConnectScreenProps> = ({ onBack }) => {
  const [copied, setCopied] = useState(false);

  const copyAccountNumber = () => {
    navigator.clipboard.writeText('1320010509');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full flex flex-col min-h-screen pb-8">
      <HeaderNav title="Connect with Us" onBack={onBack} />

      <main className="px-4 pt-2 flex flex-col gap-4">
        {/* Intro Tag */}
        <div className="text-center px-2">
          <p className="text-xs text-emerald-200/80">
            Reach out to our leadership, media team, or donate directly to transform lives.
          </p>
        </div>

        {/* 2-Column Vibrant App-Tile Grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* 1. WhatsApp Tile */}
          <a
            id="tile-whatsapp"
            href="https://wa.me/94777886996"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-3xl glass-panel border border-emerald-400/30 hover:border-emerald-400 active:scale-95 transition-all flex flex-col items-center text-center group cursor-pointer shadow-lg relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform mb-2 shadow-inner">
              <MessageCircle className="w-6 h-6 stroke-[2.2]" />
            </div>
            <span className="font-bold text-white text-sm group-hover:text-emerald-300">
              WhatsApp
            </span>
            <span className="text-[11px] text-emerald-300/80 font-mono mt-0.5">
              +94 77 788 6996
            </span>
            <div className="mt-2 text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-700/40">
              Chat Now
            </div>
          </a>

          {/* 2. Facebook Tile */}
          <a
            id="tile-facebook"
            href="https://www.facebook.com/profile.php?id=100064792822430#"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-3xl glass-panel border border-blue-400/30 hover:border-blue-400 active:scale-95 transition-all flex flex-col items-center text-center group cursor-pointer shadow-lg relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform mb-2 shadow-inner">
              <Facebook className="w-6 h-6 stroke-[2.2]" />
            </div>
            <span className="font-bold text-white text-sm group-hover:text-blue-300">
              Facebook
            </span>
            <span className="text-[11px] text-blue-200/80 mt-0.5">
              Official Profile
            </span>
            <div className="mt-2 text-[10px] font-semibold text-blue-300 bg-blue-950/60 px-2 py-0.5 rounded-full border border-blue-700/40">
              Follow Page
            </div>
          </a>

          {/* 3. Gmail Tile */}
          <a
            id="tile-gmail"
            href="mailto:amyslanka@gmail.com"
            className="p-4 rounded-3xl glass-panel border border-amber-400/30 hover:border-amber-400 active:scale-95 transition-all flex flex-col items-center text-center group cursor-pointer shadow-lg relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform mb-2 shadow-inner">
              <Mail className="w-6 h-6 stroke-[2.2]" />
            </div>
            <span className="font-bold text-white text-sm group-hover:text-amber-300">
              Official Email
            </span>
            <span className="text-[11px] text-amber-200/80 truncate w-full mt-0.5">
              amyslanka@gmail.com
            </span>
            <div className="mt-2 text-[10px] font-semibold text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-700/40">
              Send Email
            </div>
          </a>

          {/* 4. YouTube Tile */}
          <a
            id="tile-youtube"
            href="https://www.youtube.com/channel/UCWqOREdg9G_8UYpaIzUd0hQ"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-3xl glass-panel border border-red-400/30 hover:border-red-400 active:scale-95 transition-all flex flex-col items-center text-center group cursor-pointer shadow-lg relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-red-500/20 border border-red-400/40 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform mb-2 shadow-inner">
              <Youtube className="w-6 h-6 stroke-[2.2]" />
            </div>
            <span className="font-bold text-white text-sm group-hover:text-red-300">
              YouTube Channel
            </span>
            <span className="text-[11px] text-red-200/80 mt-0.5">
              Official AMYS Channel
            </span>
            <div className="mt-2 text-[10px] font-semibold text-red-300 bg-red-950/60 px-2 py-0.5 rounded-full border border-red-700/40">
              Watch Videos
            </div>
          </a>
        </div>

        {/* 5. Full-width Call Us Banner */}
        <div className="w-full rounded-3xl glass-panel p-4 border border-emerald-400/30 shadow-xl flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500/30 to-teal-800/40 border border-emerald-400/40 flex items-center justify-center text-amber-400">
                <Phone className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">
                  Direct Telephone Lines
                </h3>
                <p className="text-[11px] text-emerald-200/80">
                  Leadership, Mobile & HQ Coordination
                </p>
              </div>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-600/40 text-emerald-300 font-mono">
              Direct Contact
            </span>
          </div>

          <div className="flex flex-col gap-2 pt-1">
            {/* Director Direct Mobile */}
            <a
              id="call-director-mobile"
              href="tel:0094777797311"
              className="py-3 px-3.5 rounded-2xl bg-emerald-950/70 hover:bg-emerald-900/90 active:scale-[0.98] border border-amber-400/50 flex items-center justify-between text-white transition-all shadow-md group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform shrink-0">
                  <Phone className="w-4 h-4 stroke-[2.2]" />
                </div>
                <div className="text-left min-w-0">
                  <span className="text-sm font-bold text-amber-300 font-mono tracking-wide block">
                    0094 77 779 7311
                  </span>
                  <span className="text-[11px] text-emerald-100 font-medium truncate block">
                    Ash-Sheikh MSM Thassim <span className="text-amber-400 font-semibold">(Director)</span>
                  </span>
                </div>
              </div>
              <span className="text-[10px] px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold shrink-0">
                Direct Mobile
              </span>
            </a>

            {/* General Mobile & Landline Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <a
                id="call-mobile"
                href="tel:+94777886996"
                className="py-2.5 px-3.5 rounded-2xl bg-emerald-900/40 hover:bg-emerald-800/60 active:scale-95 border border-emerald-500/25 flex items-center justify-between text-xs text-white transition-all font-semibold"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>+94 77 788 6996</span>
                </div>
                <span className="text-[10px] text-emerald-300">Hotline</span>
              </a>

              <a
                id="call-landline"
                href="tel:+94112678333"
                className="py-2.5 px-3.5 rounded-2xl bg-emerald-900/40 hover:bg-emerald-800/60 active:scale-95 border border-emerald-500/25 flex items-center justify-between text-xs text-white transition-all font-semibold"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>+94 11 267 8333</span>
                </div>
                <span className="text-[10px] text-emerald-300">HQ Office</span>
              </a>
            </div>
          </div>
        </div>

        {/* 6. Bank Donation Details Card */}
        <div className="w-full rounded-3xl glass-gold-hero p-5 border border-amber-500/30 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wide">
                  Bank Donation Account
                </h3>
                <p className="text-[11px] text-emerald-200/80">
                  Direct Sadaqah, Zakat & Relief Support
                </p>
              </div>
            </div>
            <Heart className="w-5 h-5 text-amber-400 fill-amber-400/30" />
          </div>

          {/* Account Details Box */}
          <div className="rounded-2xl bg-emerald-950/80 border border-amber-500/25 p-3.5 space-y-2.5">
            <div>
              <p className="text-[10px] text-emerald-300/70 uppercase tracking-wider font-semibold">
                Account Name
              </p>
              <p className="text-xs font-bold text-white leading-tight">
                Association of Muslim Youth of Sailan
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1 border-t border-emerald-800/40">
              <div>
                <p className="text-[10px] text-emerald-300/70 uppercase tracking-wider font-semibold">
                  Bank
                </p>
                <p className="text-xs font-bold text-emerald-100">
                  Commercial Bank of Ceylon
                </p>
              </div>
              <div>
                <p className="text-[10px] text-emerald-300/70 uppercase tracking-wider font-semibold">
                  Branch
                </p>
                <p className="text-xs font-bold text-emerald-100">
                  Maradana Branch
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-emerald-800/40 flex items-center justify-between">
              <div>
                <p className="text-[10px] text-amber-400 uppercase tracking-wider font-bold">
                  Account Number
                </p>
                <p className="text-base font-extrabold text-amber-300 font-mono tracking-wider">
                  1320010509
                </p>
              </div>

              {/* Copy Button */}
              <button
                id="btn-copy-account"
                onClick={copyAccountNumber}
                className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 stroke-[2]" />
                    <span>Copy A/C</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {copied && (
            <div className="mt-2 text-center text-xs font-semibold text-amber-300 animate-fade-in">
              ✓ Account number 1320010509 copied to clipboard!
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
