import React from 'react';

interface PixarArtProps {
  id: string;
  className?: string;
}

export const PixarImpactArt: React.FC<PixarArtProps> = ({ id, className = "w-full h-full" }) => {
  switch (id) {
    // ----------------------------------------------------
    // HEALTH SECTOR (h-1 to h-5)
    // ----------------------------------------------------

    // h-1: Cataract Surgical Laser & Slit-Lamp System
    case 'h-1':
      return (
        <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="h1-glow" cx="60" cy="50" r="45" gradientUnits="userSpaceOnUse">
              <stop stopColor="#34d399" stopOpacity="0.4" />
              <stop offset="1" stopColor="#064e3b" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="h1-body" x1="40" y1="25" x2="80" y2="85" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f8fafc" />
              <stop offset="0.5" stopColor="#cbd5e1" />
              <stop offset="1" stopColor="#64748b" />
            </linearGradient>
            <linearGradient id="h1-gold" x1="45" y1="20" x2="75" y2="50" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fde047" />
              <stop offset="1" stopColor="#d97706" />
            </linearGradient>
            <linearGradient id="h1-lens" x1="50" y1="35" x2="70" y2="55" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38bdf8" />
              <stop offset="0.6" stopColor="#0284c7" />
              <stop offset="1" stopColor="#0369a1" />
            </linearGradient>
            <filter id="h1-shadow" x="10" y="70" width="100" height="30" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.4" />
            </filter>
          </defs>
          <ellipse cx="60" cy="98" rx="38" ry="10" fill="#022c22" opacity="0.6" />
          <circle cx="60" cy="55" r="45" fill="url(#h1-glow)" />
          {/* Base Stand */}
          <rect x="35" y="86" width="50" height="10" rx="5" fill="#334155" />
          <rect x="37" y="87" width="46" height="3" rx="1.5" fill="#94a3b8" opacity="0.6" />
          {/* Vertical Pillar */}
          <rect x="54" y="58" width="12" height="32" rx="4" fill="url(#h1-body)" />
          <rect x="56" y="60" width="3" height="28" rx="1.5" fill="#ffffff" opacity="0.8" />
          {/* Articulated Arm */}
          <path d="M54 62 C40 58 42 42 55 38" stroke="url(#h1-gold)" strokeWidth="6" strokeLinecap="round" />
          {/* Eye Microscope Head */}
          <rect x="52" y="32" width="28" height="22" rx="7" fill="url(#h1-body)" />
          <rect x="55" y="34" width="22" height="4" rx="2" fill="#ffffff" opacity="0.7" />
          {/* Dual Eyepieces */}
          <rect x="74" y="22" width="8" height="16" rx="3" transform="rotate(25 74 22)" fill="url(#h1-gold)" />
          <rect x="80" y="27" width="8" height="16" rx="3" transform="rotate(25 80 27)" fill="url(#h1-gold)" />
          <ellipse cx="88" cy="27" rx="3.5" ry="5.5" fill="#0f172a" />
          {/* Ophthalmic Optical Lens */}
          <circle cx="48" cy="43" r="14" fill="url(#h1-lens)" stroke="url(#h1-gold)" strokeWidth="3" />
          <ellipse cx="44" cy="39" rx="5" ry="3" transform="rotate(-30 44 39)" fill="#ffffff" opacity="0.85" />
          {/* Laser Beam Pulse */}
          <path d="M48 43 L22 55" stroke="#facc15" strokeWidth="2.5" strokeDasharray="3 2" opacity="0.9" />
          <circle cx="22" cy="55" r="4" fill="#facc15" />
          <circle cx="22" cy="55" r="7" fill="#fef08a" opacity="0.4" />
        </svg>
      );

    // h-2: Vision Diagnostics Phoropter
    case 'h-2':
      return (
        <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="h2-glow" cx="60" cy="55" r="45" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38bdf8" stopOpacity="0.35" />
              <stop offset="1" stopColor="#0369a1" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="h2-wheel" x1="25" y1="30" x2="95" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#475569" />
              <stop offset="0.5" stopColor="#1e293b" />
              <stop offset="1" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="h2-lens" x1="30" y1="40" x2="55" y2="65" gradientUnits="userSpaceOnUse">
              <stop stopColor="#67e8f9" />
              <stop offset="1" stopColor="#0284c7" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="98" rx="36" ry="8" fill="#022c22" opacity="0.5" />
          <circle cx="60" cy="55" r="45" fill="url(#h2-glow)" />
          {/* Hanging Mount */}
          <rect x="56" y="12" width="8" height="24" rx="3" fill="#cbd5e1" />
          <rect x="42" y="24" width="36" height="8" rx="4" fill="#f59e0b" />
          {/* Main Phoropter Body with dual lens disks */}
          <rect x="24" y="32" width="72" height="46" rx="20" fill="url(#h2-wheel)" stroke="#94a3b8" strokeWidth="2" />
          {/* Left Dial & Lens */}
          <circle cx="44" cy="54" r="16" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2.5" />
          <circle cx="44" cy="54" r="11" fill="url(#h2-lens)" opacity="0.85" />
          <ellipse cx="41" cy="50" rx="4" ry="2.5" fill="#ffffff" opacity="0.9" />
          {/* Right Dial & Lens */}
          <circle cx="76" cy="54" r="16" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2.5" />
          <circle cx="76" cy="54" r="11" fill="url(#h2-lens)" opacity="0.85" />
          <ellipse cx="73" cy="50" rx="4" ry="2.5" fill="#ffffff" opacity="0.9" />
          {/* Top Knobs & Calibration Gear */}
          <circle cx="34" cy="34" r="5" fill="#f59e0b" />
          <circle cx="86" cy="34" r="5" fill="#f59e0b" />
          <rect x="55" y="46" width="10" height="16" rx="3" fill="#64748b" />
          {/* Measurement ticks */}
          <line x1="44" y1="34" x2="44" y2="37" stroke="#38bdf8" strokeWidth="2" />
          <line x1="76" y1="34" x2="76" y2="37" stroke="#38bdf8" strokeWidth="2" />
        </svg>
      );

    // h-3: Prescription Eyeglasses
    case 'h-3':
      return (
        <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="h3-glow" cx="60" cy="55" r="45" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fbbf24" stopOpacity="0.35" />
              <stop offset="1" stopColor="#b45309" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="h3-gold" x1="20" y1="35" x2="100" y2="70" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fef08a" />
              <stop offset="0.4" stopColor="#eab308" />
              <stop offset="1" stopColor="#ca8a04" />
            </linearGradient>
            <linearGradient id="h3-glass" x1="30" y1="40" x2="50" y2="70" gradientUnits="userSpaceOnUse">
              <stop stopColor="#a5f3fc" stopOpacity="0.7" />
              <stop offset="1" stopColor="#38bdf8" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="92" rx="38" ry="7" fill="#022c22" opacity="0.5" />
          <circle cx="60" cy="55" r="45" fill="url(#h3-glow)" />
          {/* Eyeglass Temples in background */}
          <path d="M22 55 C22 35 34 30 50 30" stroke="#ca8a04" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
          <path d="M98 55 C98 35 86 30 70 30" stroke="#ca8a04" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
          {/* Left Lens */}
          <rect x="22" y="42" width="32" height="28" rx="14" fill="url(#h3-glass)" stroke="url(#h3-gold)" strokeWidth="4" />
          <ellipse cx="30" cy="49" rx="6" ry="3" transform="rotate(-25 30 49)" fill="#ffffff" opacity="0.8" />
          {/* Right Lens */}
          <rect x="66" y="42" width="32" height="28" rx="14" fill="url(#h3-glass)" stroke="url(#h3-gold)" strokeWidth="4" />
          <ellipse cx="74" cy="49" rx="6" ry="3" transform="rotate(-25 74 49)" fill="#ffffff" opacity="0.8" />
          {/* Bridge */}
          <path d="M54 50 C57 46 63 46 66 50" stroke="url(#h3-gold)" strokeWidth="4" strokeLinecap="round" />
          {/* Browline Bar */}
          <path d="M26 43 C38 41 82 41 94 43" stroke="url(#h3-gold)" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
          {/* Sparkle */}
          <path d="M84 34 L86 40 L92 42 L86 44 L84 50 L82 44 L76 42 L82 40 Z" fill="#ffffff" opacity="0.9" />
        </svg>
      );

    // h-4: Mobile Medical Camp First-Aid Kit & Stethoscope
    case 'h-4':
      return (
        <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="h4-glow" cx="60" cy="55" r="45" gradientUnits="userSpaceOnUse">
              <stop stopColor="#34d399" stopOpacity="0.4" />
              <stop offset="1" stopColor="#064e3b" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="h4-kit" x1="30" y1="35" x2="85" y2="85" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10b981" />
              <stop offset="0.7" stopColor="#059669" />
              <stop offset="1" stopColor="#047857" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="94" rx="36" ry="7" fill="#022c22" opacity="0.5" />
          <circle cx="60" cy="55" r="45" fill="url(#h4-glow)" />
          {/* Medical Box Handle */}
          <path d="M48 38 C48 30 72 30 72 38" stroke="#f59e0b" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          {/* Medical Kit Body */}
          <rect x="30" y="38" width="60" height="46" rx="12" fill="url(#h4-kit)" stroke="#34d399" strokeWidth="2" />
          <rect x="33" y="41" width="54" height="4" rx="2" fill="#ffffff" opacity="0.4" />
          {/* Gold Latches */}
          <rect x="42" y="48" width="6" height="8" rx="2" fill="#fbbf24" />
          <rect x="72" y="48" width="6" height="8" rx="2" fill="#fbbf24" />
          {/* Medical Cross Badge */}
          <circle cx="60" cy="62" r="14" fill="#ffffff" />
          <path d="M57 54 H63 V70 H57 Z" fill="#ef4444" />
          <path d="M52 59 H68 V65 H52 Z" fill="#ef4444" />
          {/* Coiled Stethoscope in front */}
          <path d="M26 80 C26 70 38 68 40 76 C42 84 56 86 64 80" stroke="#94a3b8" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <circle cx="25" cy="80" r="5" fill="#f59e0b" />
        </svg>
      );

    // h-5: Sterile Surgical Tray & Care Equipment
    case 'h-5':
      return (
        <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="h5-glow" cx="60" cy="55" r="45" gradientUnits="userSpaceOnUse">
              <stop stopColor="#67e8f9" stopOpacity="0.35" />
              <stop offset="1" stopColor="#0891b2" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="h5-tray" x1="25" y1="50" x2="95" y2="85" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f1f5f9" />
              <stop offset="0.6" stopColor="#cbd5e1" />
              <stop offset="1" stopColor="#94a3b8" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="94" rx="38" ry="7" fill="#022c22" opacity="0.5" />
          <circle cx="60" cy="55" r="45" fill="url(#h5-glow)" />
          {/* Curved Stainless Medical Tray */}
          <ellipse cx="60" cy="74" rx="42" ry="16" fill="url(#h5-tray)" stroke="#ffffff" strokeWidth="2" />
          <ellipse cx="60" cy="73" rx="36" ry="12" fill="#94a3b8" opacity="0.4" />
          {/* Amber Medicine Bottle with Dropper */}
          <rect x="36" y="44" width="14" height="22" rx="3" fill="#d97706" />
          <rect x="38" y="40" width="10" height="4" rx="1.5" fill="#fde68a" />
          <rect x="40" y="34" width="6" height="6" rx="2" fill="#1e293b" />
          <rect x="38" y="48" width="10" height="8" rx="1.5" fill="#ffffff" opacity="0.8" />
          {/* Sterile Surgical Scissor Clamp */}
          <path d="M58 48 L76 68" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
          <path d="M74 48 L56 68" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
          <circle cx="56" cy="70" r="4" stroke="#f59e0b" strokeWidth="2" fill="none" />
          <circle cx="76" cy="70" r="4" stroke="#f59e0b" strokeWidth="2" fill="none" />
          <circle cx="65" cy="58" r="2" fill="#f8fafc" />
          {/* Capsule Pill */}
          <rect x="68" y="38" width="18" height="8" rx="4" transform="rotate(-30 68 38)" fill="#ef4444" />
          <rect x="76" y="33" width="9" height="8" rx="4" transform="rotate(-30 76 33)" fill="#f8fafc" />
        </svg>
      );

    // ----------------------------------------------------
    // WATER & MASJIDS SECTOR (w-1 to w-6)
    // ----------------------------------------------------

    // w-1: Grand Architectural Masjid
    case 'w-1':
      return (
        <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="w1-glow" cx="60" cy="50" r="45" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fbbf24" stopOpacity="0.4" />
              <stop offset="1" stopColor="#78350f" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="w1-dome" x1="45" y1="25" x2="75" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fef08a" />
              <stop offset="0.5" stopColor="#eab308" />
              <stop offset="1" stopColor="#b45309" />
            </linearGradient>
            <linearGradient id="w1-walls" x1="30" y1="55" x2="90" y2="90" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f8fafc" />
              <stop offset="0.7" stopColor="#e2e8f0" />
              <stop offset="1" stopColor="#cbd5e1" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="98" rx="42" ry="8" fill="#022c22" opacity="0.6" />
          <circle cx="60" cy="50" r="45" fill="url(#w1-glow)" />
          {/* Main Masjid Hall */}
          <rect x="34" y="56" width="52" height="36" rx="6" fill="url(#w1-walls)" stroke="#10b981" strokeWidth="1.5" />
          {/* Grand Golden Central Dome */}
          <path d="M40 56 C40 34 60 22 60 22 C60 22 80 34 80 56 Z" fill="url(#w1-dome)" stroke="#fde047" strokeWidth="1.5" />
          {/* Crescent Finial */}
          <line x1="60" y1="22" x2="60" y2="14" stroke="#facc15" strokeWidth="2" />
          <circle cx="60" cy="14" r="2.5" fill="#facc15" />
          <path d="M59 11 C61 11 63 13 63 15 C62 14 60 14 59 13 Z" fill="#fef08a" />
          {/* Left Minaret */}
          <rect x="22" y="38" width="10" height="54" rx="3" fill="url(#w1-walls)" />
          <path d="M21 38 C21 30 27 26 27 26 C27 26 33 30 33 38 Z" fill="url(#w1-dome)" />
          <rect x="20" y="44" width="14" height="4" rx="1.5" fill="#f59e0b" />
          {/* Right Minaret */}
          <rect x="88" y="38" width="10" height="54" rx="3" fill="url(#w1-walls)" />
          <path d="M87 38 C87 30 93 26 93 26 C93 26 99 30 99 38 Z" fill="url(#w1-dome)" />
          <rect x="86" y="44" width="14" height="4" rx="1.5" fill="#f59e0b" />
          {/* Arched Entrance Portal */}
          <path d="M50 92 V72 C50 66 60 62 60 62 C60 62 70 66 70 72 V92 Z" fill="#064e3b" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="60" cy="74" r="2" fill="#fde047" />
          {/* Flanking Arched Windows */}
          <path d="M38 78 V70 C38 67 44 67 44 70 V78 Z" fill="#047857" />
          <path d="M76 78 V70 C76 67 82 67 82 70 V78 Z" fill="#047857" />
        </svg>
      );

    // w-2: Traditional Family Water Well with Wooden Bucket
    case 'w-2':
      return (
        <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="w2-glow" cx="60" cy="55" r="45" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="1" stopColor="#0369a1" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="w2-roof" x1="30" y1="20" x2="90" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#b45309" />
              <stop offset="0.6" stopColor="#92400e" />
              <stop offset="1" stopColor="#78350f" />
            </linearGradient>
            <linearGradient id="w2-stone" x1="35" y1="65" x2="85" y2="95" gradientUnits="userSpaceOnUse">
              <stop stopColor="#94a3b8" />
              <stop offset="0.5" stopColor="#64748b" />
              <stop offset="1" stopColor="#475569" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="98" rx="38" ry="8" fill="#022c22" opacity="0.6" />
          <circle cx="60" cy="55" r="45" fill="url(#w2-glow)" />
          {/* Wooden Roof Posts */}
          <rect x="36" y="36" width="6" height="34" rx="2" fill="#78350f" />
          <rect x="78" y="36" width="6" height="34" rx="2" fill="#78350f" />
          {/* Spool / Axle & Crank Handle */}
          <rect x="40" y="44" width="40" height="5" rx="2.5" fill="#f59e0b" />
          <rect x="52" y="43" width="16" height="7" rx="3.5" fill="#ca8a04" />
          <line x1="60" y1="50" x2="60" y2="68" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="3 2" />
          <path d="M80 46 H88 V54" stroke="#d97706" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          {/* Pitched Roof Canopy */}
          <path d="M28 36 L60 18 L92 36 Z" fill="url(#w2-roof)" stroke="#d97706" strokeWidth="2" />
          <path d="M32 36 L60 21 L88 36" stroke="#fde68a" strokeWidth="2" opacity="0.6" />
          {/* Well Stone Circular Base */}
          <ellipse cx="60" cy="68" rx="28" ry="10" fill="#1e293b" />
          <ellipse cx="60" cy="68" rx="24" ry="7" fill="#0284c7" />
          <rect x="32" y="68" width="56" height="26" rx="6" fill="url(#w2-stone)" />
          <ellipse cx="60" cy="94" rx="28" ry="6" fill="#334155" opacity="0.6" />
          {/* Brick lines */}
          <line x1="38" y1="76" x2="82" y2="76" stroke="#cbd5e1" strokeWidth="1.5" opacity="0.5" />
          <line x1="38" y1="84" x2="82" y2="84" stroke="#cbd5e1" strokeWidth="1.5" opacity="0.5" />
          {/* Hanging Wooden Water Bucket */}
          <path d="M54 68 L56 80 H66 L68 68 Z" fill="#b45309" stroke="#f59e0b" strokeWidth="1.5" />
          <ellipse cx="61" cy="68" rx="7" ry="2.5" fill="#38bdf8" />
          {/* Water Splash droplets */}
          <circle cx="68" cy="62" r="2.5" fill="#38bdf8" />
          <circle cx="53" cy="64" r="1.5" fill="#38bdf8" />
        </svg>
      );

    // w-3: Deep Borewell Pump
    case 'w-3':
      return (
        <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="w3-glow" cx="60" cy="55" r="45" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06b6d4" stopOpacity="0.4" />
              <stop offset="1" stopColor="#0891b2" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="w3-metal" x1="35" y1="20" x2="75" y2="90" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38bdf8" />
              <stop offset="0.6" stopColor="#0284c7" />
              <stop offset="1" stopColor="#0369a1" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="98" rx="36" ry="7" fill="#022c22" opacity="0.6" />
          <circle cx="60" cy="55" r="45" fill="url(#w3-glow)" />
          {/* Concrete Base */}
          <rect x="36" y="86" width="48" height="10" rx="4" fill="#64748b" />
          {/* Heavy Deep Tube Pipe */}
          <rect x="52" y="32" width="16" height="56" rx="4" fill="url(#w3-metal)" stroke="#93c5fd" strokeWidth="1.5" />
          {/* Pump Motor Cylinder */}
          <rect x="46" y="44" width="28" height="24" rx="6" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="2" />
          {/* Pressure Gauge Dial */}
          <circle cx="60" cy="56" r="8" fill="#ffffff" stroke="#f59e0b" strokeWidth="2" />
          <line x1="60" y1="56" x2="64" y2="52" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
          {/* Outflow Spout Pipe */}
          <path d="M68 62 H86 V74" stroke="url(#w3-metal)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {/* High pressure water burst */}
          <path d="M86 74 C86 86 94 92 98 94" stroke="#67e8f9" strokeWidth="5" strokeLinecap="round" fill="none" />
          <circle cx="94" cy="84" r="3" fill="#a5f3fc" />
          <circle cx="82" cy="88" r="2" fill="#38bdf8" />
          {/* Top Brass Valve Wheel */}
          <rect x="56" y="24" width="8" height="8" rx="2" fill="#f59e0b" />
          <ellipse cx="60" cy="24" rx="14" ry="4" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
        </svg>
      );

    // w-4: Village Elevated Water Reservoir Tank
    case 'w-4':
      return (
        <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="w4-glow" cx="60" cy="50" r="45" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="1" stopColor="#0284c7" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="w4-tank" x1="30" y1="20" x2="90" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0284c7" />
              <stop offset="0.5" stopColor="#0369a1" />
              <stop offset="1" stopColor="#075985" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="98" rx="38" ry="7" fill="#022c22" opacity="0.6" />
          <circle cx="60" cy="50" r="45" fill="url(#w4-glow)" />
          {/* Tower Staging Legs */}
          <line x1="36" y1="56" x2="30" y2="94" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
          <line x1="84" y1="56" x2="90" y2="94" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
          <line x1="60" y1="56" x2="60" y2="94" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />
          {/* Cross Braces */}
          <line x1="34" y1="70" x2="86" y2="82" stroke="#64748b" strokeWidth="2" opacity="0.7" />
          <line x1="86" y1="70" x2="34" y2="82" stroke="#64748b" strokeWidth="2" opacity="0.7" />
          {/* Elevated Storage Tank */}
          <ellipse cx="60" cy="26" rx="28" ry="8" fill="#38bdf8" />
          <rect x="32" y="26" width="56" height="30" rx="4" fill="url(#w4-tank)" stroke="#67e8f9" strokeWidth="2" />
          <ellipse cx="60" cy="56" rx="28" ry="8" fill="#0369a1" />
          {/* Clean Water Wave Graphic on Tank */}
          <path d="M38 40 Q48 35 60 40 T82 40" stroke="#a5f3fc" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M38 46 Q48 41 60 46 T82 46" stroke="#38bdf8" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
          {/* Outflow Community Tap */}
          <path d="M60 84 H74 V90" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="74" cy="94" r="2.5" fill="#38bdf8" />
        </svg>
      );

    // w-5: Clean Drinking Water Connection Pipe & Glass
    case 'w-5':
      return (
        <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="w5-glow" cx="60" cy="55" r="45" gradientUnits="userSpaceOnUse">
              <stop stopColor="#67e8f9" stopOpacity="0.4" />
              <stop offset="1" stopColor="#0891b2" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="w5-glass" x1="50" y1="55" x2="80" y2="90" gradientUnits="userSpaceOnUse">
              <stop stopColor="#bae6fd" stopOpacity="0.8" />
              <stop offset="1" stopColor="#38bdf8" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="96" rx="36" ry="7" fill="#022c22" opacity="0.5" />
          <circle cx="60" cy="55" r="45" fill="url(#w5-glow)" />
          {/* Main Water Pipeline from wall */}
          <path d="M18 42 H46 V62" stroke="#94a3b8" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {/* Brass Turn Valve */}
          <circle cx="34" cy="42" r="7" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
          <line x1="28" y1="42" x2="40" y2="42" stroke="#fde047" strokeWidth="3" />
          {/* Chrome Tap Spout */}
          <path d="M42 62 H56 V72" stroke="#cbd5e1" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {/* Crystal Water Stream */}
          <path d="M56 72 L56 86" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
          <circle cx="56" cy="80" r="4" fill="#a5f3fc" opacity="0.7" />
          {/* Clear Glass Tumbler Filling */}
          <path d="M46 70 L50 92 H68 L72 70 Z" fill="url(#w5-glass)" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round" />
          <ellipse cx="59" cy="78" rx="8" ry="2.5" fill="#38bdf8" />
          {/* Glass specular glare */}
          <line x1="52" y1="74" x2="54" y2="88" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
          {/* Sparkles */}
          <path d="M80 64 L82 68 L86 70 L82 72 L80 76 L78 72 L74 70 L78 68 Z" fill="#fef08a" />
        </svg>
      );

    // w-6: Islamic Heritage & Community Center Pavilion
    case 'w-6':
      return (
        <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="w6-glow" cx="60" cy="55" r="45" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fbbf24" stopOpacity="0.4" />
              <stop offset="1" stopColor="#78350f" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="w6-roof" x1="30" y1="25" x2="90" y2="45" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10b981" />
              <stop offset="0.6" stopColor="#059669" />
              <stop offset="1" stopColor="#047857" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="98" rx="42" ry="8" fill="#022c22" opacity="0.6" />
          <circle cx="60" cy="55" r="45" fill="url(#w6-glow)" />
          {/* Center Building Pavilion */}
          <rect x="28" y="44" width="64" height="48" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
          {/* Stepped Islamic Tiered Roof */}
          <path d="M22 44 L60 22 L98 44 Z" fill="url(#w6-roof)" stroke="#f59e0b" strokeWidth="2" />
          <path d="M30 38 L60 22 L90 38" stroke="#fde047" strokeWidth="2" opacity="0.6" />
          <circle cx="60" cy="20" r="3" fill="#f59e0b" />
          {/* Colonnade Pillars */}
          <rect x="34" y="52" width="6" height="38" rx="2" fill="#e2e8f0" />
          <rect x="48" y="52" width="6" height="38" rx="2" fill="#e2e8f0" />
          <rect x="66" y="52" width="6" height="38" rx="2" fill="#e2e8f0" />
          <rect x="80" y="52" width="6" height="38" rx="2" fill="#e2e8f0" />
          {/* Arches connecting pillars */}
          <path d="M34 56 C34 50 48 50 48 56" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
          <path d="M48 56 C48 50 66 50 66 56" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
          <path d="M66 56 C66 50 80 50 80 56" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
          {/* Central Courtyard Entrance */}
          <path d="M54 90 V68 C54 62 66 62 66 68 V90 Z" fill="#047857" />
          <rect x="24" y="90" width="72" height="6" rx="2" fill="#334155" />
        </svg>
      );

    // ----------------------------------------------------
    // EDUCATION & WELFARE SECTOR (e-1 to e-13)
    // ----------------------------------------------------

    // e-1: School Backpack & Stationery Kit
    case 'e-1':
      return (
        <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="e1-glow" cx="60" cy="55" r="45" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f97316" stopOpacity="0.4" />
              <stop offset="1" stopColor="#c2410c" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="e1-bag" x1="30" y1="30" x2="85" y2="85" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f97316" />
              <stop offset="0.6" stopColor="#ea580c" />
              <stop offset="1" stopColor="#c2410c" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="96" rx="36" ry="7" fill="#022c22" opacity="0.5" />
          <circle cx="60" cy="55" r="45" fill="url(#e1-glow)" />
          {/* Top Loop Handle */}
          <path d="M50 36 C50 26 70 26 70 36" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" fill="none" />
          {/* School Bag Main Body */}
          <rect x="32" y="34" width="56" height="56" rx="18" fill="url(#e1-bag)" stroke="#fdba74" strokeWidth="2" />
          {/* Teal Accent Pocket */}
          <rect x="38" y="58" width="44" height="26" rx="10" fill="#0d9488" stroke="#5eead4" strokeWidth="2" />
          <circle cx="60" cy="66" r="3.5" fill="#fde047" />
          {/* Protruding Wooden Ruler */}
          <rect x="70" y="20" width="8" height="28" rx="2" transform="rotate(15 70 20)" fill="#facc15" stroke="#ca8a04" strokeWidth="1.5" />
          {/* Protruding Pencil */}
          <path d="M42 22 L46 36 H38 Z" fill="#f87171" />
          <polygon points="42,16 46,22 38,22" fill="#fef08a" />
          <polygon points="42,16 43,18 41,18" fill="#1e293b" />
          {/* Spiral Notebook tucked in side */}
          <rect x="25" y="44" width="12" height="34" rx="2" fill="#38bdf8" />
          <circle cx="28" cy="50" r="1.5" fill="#ffffff" />
          <circle cx="28" cy="58" r="1.5" fill="#ffffff" />
          <circle cx="28" cy="66" r="1.5" fill="#ffffff" />
        </svg>
      );

    // e-2: Educational Lectures & Lesson Podium
    case 'e-2':
      return (
        <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="e2-glow" cx="60" cy="55" r="45" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fbbf24" stopOpacity="0.4" />
              <stop offset="1" stopColor="#78350f" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="e2-wood" x1="40" y1="35" x2="80" y2="85" gradientUnits="userSpaceOnUse">
              <stop stopColor="#b45309" />
              <stop offset="0.6" stopColor="#78350f" />
              <stop offset="1" stopColor="#451a03" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="98" rx="38" ry="7" fill="#022c22" opacity="0.6" />
          <circle cx="60" cy="55" r="45" fill="url(#e2-glow)" />
          {/* Wooden Podium Base */}
          <rect x="36" y="86" width="48" height="10" rx="4" fill="#451a03" />
          {/* Slanted Pillar */}
          <path d="M44 48 L48 86 H72 L76 48 Z" fill="url(#e2-wood)" stroke="#d97706" strokeWidth="2" />
          {/* Sloped Top Desk */}
          <polygon points="32,48 88,48 82,36 38,36" fill="#ca8a04" stroke="#fde047" strokeWidth="1.5" />
          {/* Open Lecture Notes / Book */}
          <polygon points="46,44 60,40 60,34 46,38" fill="#f8fafc" />
          <polygon points="60,40 74,44 74,38 60,34" fill="#f8fafc" />
          {/* Gooseneck Microphone */}
          <path d="M42 36 C42 24 54 22 56 26" stroke="#94a3b8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <rect x="54" y="24" width="7" height="4" rx="2" fill="#1e293b" />
          {/* AMYS Emblem star on podium front */}
          <polygon points="60,56 62,62 68,62 63,66 65,72 60,68 55,72 57,66 52,62 58,62" fill="#fde047" />
        </svg>
      );

    // e-3: Full University Scholarship Mortarboard & Scroll
    case 'e-3':
      return (
        <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="e3-glow" cx="60" cy="50" r="45" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fbbf24" stopOpacity="0.4" />
              <stop offset="1" stopColor="#b45309" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="e3-cap" x1="20" y1="35" x2="100" y2="55" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1e293b" />
              <stop offset="0.5" stopColor="#0f172a" />
              <stop offset="1" stopColor="#020617" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="96" rx="38" ry="7" fill="#022c22" opacity="0.5" />
          <circle cx="60" cy="50" r="45" fill="url(#e3-glow)" />
          {/* Mortarboard Skullcap */}
          <path d="M42 45 C42 58 78 58 78 45 Z" fill="#0f172a" />
          {/* Diamond Cap Top */}
          <polygon points="60,24 102,40 60,56 18,40" fill="url(#e3-cap)" stroke="#38bdf8" strokeWidth="2" />
          {/* Golden Center Button */}
          <circle cx="60" cy="40" r="3.5" fill="#f59e0b" />
          {/* Golden Silk Tassel */}
          <path d="M60 40 C75 42 85 52 86 64" stroke="#fbbf24" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <rect x="83" y="64" width="6" height="12" rx="2" fill="#f59e0b" />
          {/* Parchment Diploma Scroll with Red Ribbon */}
          <rect x="34" y="74" width="52" height="14" rx="4" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5" />
          <rect x="56" y="72" width="8" height="18" rx="2" fill="#ef4444" />
          {/* Golden Seal of Excellence */}
          <circle cx="60" cy="81" r="5" fill="#facc15" />
        </svg>
      );

    // e-4: Equipped Islamic Library Bookshelf
    case 'e-4':
      return (
        <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="e4-glow" cx="60" cy="55" r="45" gradientUnits="userSpaceOnUse">
              <stop stopColor="#34d399" stopOpacity="0.4" />
              <stop offset="1" stopColor="#064e3b" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="e4-shelf" x1="30" y1="30" x2="90" y2="85" gradientUnits="userSpaceOnUse">
              <stop stopColor="#92400e" />
              <stop offset="0.7" stopColor="#78350f" />
              <stop offset="1" stopColor="#451a03" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="98" rx="38" ry="7" fill="#022c22" opacity="0.6" />
          <circle cx="60" cy="55" r="45" fill="url(#e4-glow)" />
          {/* Bookshelf Frame */}
          <rect x="28" y="24" width="64" height="68" rx="6" fill="url(#e4-shelf)" stroke="#ca8a04" strokeWidth="2" />
          {/* Middle Shelf Divider */}
          <rect x="30" y="56" width="60" height="5" fill="#ca8a04" />
          {/* Top Row Colorful Books */}
          <rect x="36" y="32" width="8" height="24" rx="2" fill="#ef4444" />
          <rect x="45" y="28" width="10" height="28" rx="2" fill="#3b82f6" />
          <rect x="56" y="34" width="8" height="22" rx="2" fill="#10b981" />
          <rect x="65" y="30" width="10" height="26" rx="2" fill="#f59e0b" />
          <rect x="76" y="36" width="8" height="20" rx="2" fill="#a855f7" />
          {/* Bottom Row Quran on Rehal Bookstand */}
          <rect x="36" y="66" width="8" height="20" rx="2" fill="#047857" />
          <rect x="45" y="64" width="8" height="22" rx="2" fill="#0284c7" />
          {/* Wooden Rehal with Holy Book */}
          <path d="M58 84 L72 68 L86 84" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M60 68 Q72 72 84 68" stroke="#fef08a" strokeWidth="5" strokeLinecap="round" fill="none" />
        </svg>
      );

    // e-5: Broadcasting Studio Microphone & Media Monitor
    case 'e-5':
      return (
        <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="e5-glow" cx="60" cy="50" r="45" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f43f5e" stopOpacity="0.35" />
              <stop offset="1" stopColor="#be123c" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="e5-mic" x1="45" y1="20" x2="75" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f8fafc" />
              <stop offset="0.5" stopColor="#cbd5e1" />
              <stop offset="1" stopColor="#64748b" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="98" rx="36" ry="7" fill="#022c22" opacity="0.6" />
          <circle cx="60" cy="50" r="45" fill="url(#e5-glow)" />
          {/* Heavy Desk Stand Base */}
          <ellipse cx="60" cy="88" rx="24" ry="7" fill="#334155" stroke="#94a3b8" strokeWidth="2" />
          <rect x="57" y="58" width="6" height="30" rx="3" fill="#cbd5e1" />
          {/* U-Shape Suspension Mount */}
          <path d="M44 42 C44 62 76 62 76 42" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          {/* Studio Capsule Microphone */}
          <rect x="48" y="24" width="24" height="32" rx="12" fill="url(#e5-mic)" stroke="#475569" strokeWidth="2" />
          {/* Mesh Grille Lines */}
          <line x1="52" y1="32" x2="68" y2="32" stroke="#475569" strokeWidth="1.5" />
          <line x1="52" y1="38" x2="68" y2="38" stroke="#475569" strokeWidth="1.5" />
          <line x1="52" y1="44" x2="68" y2="44" stroke="#475569" strokeWidth="1.5" />
          {/* ON AIR Glowing Red Indicator */}
          <rect x="46" y="14" width="28" height="7" rx="3" fill="#ef4444" stroke="#fecaca" strokeWidth="1" />
          <circle cx="52" cy="17.5" r="1.5" fill="#ffffff" />
          {/* Radio Waves */}
          <path d="M78 30 C84 34 84 46 78 50" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M84 24 C92 30 92 50 84 56" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
        </svg>
      );

    // e-6: Outreach & Welcoming Archway Portal
    case 'e-6':
      return (
        <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="e6-glow" cx="60" cy="55" r="45" gradientUnits="userSpaceOnUse">
              <stop stopColor="#10b981" stopOpacity="0.4" />
              <stop offset="1" stopColor="#047857" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="e6-gate" x1="30" y1="20" x2="90" y2="90" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fde047" />
              <stop offset="0.5" stopColor="#d97706" />
              <stop offset="1" stopColor="#b45309" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="98" rx="38" ry="7" fill="#022c22" opacity="0.6" />
          <circle cx="60" cy="55" r="45" fill="url(#e6-glow)" />
          {/* Archway Portal */}
          <path d="M32 94 V48 C32 28 60 22 60 22 C60 22 88 28 88 48 V94" stroke="url(#e6-gate)" strokeWidth="8" strokeLinecap="round" fill="none" />
          {/* Inner Decorative Arch */}
          <path d="M42 94 V54 C42 40 60 36 60 36 C60 36 78 40 78 54 V94" fill="#064e3b" stroke="#fde68a" strokeWidth="2" />
          {/* Hanging Welcome Lantern from Arch apex */}
          <line x1="60" y1="36" x2="60" y2="48" stroke="#f59e0b" strokeWidth="2" />
          <path d="M56 48 L60 44 L64 48 L62 56 L58 56 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
          <circle cx="60" cy="51" r="2" fill="#ffffff" />
          {/* Open Welcome Parchment Scroll */}
          <rect x="46" y="68" width="28" height="18" rx="3" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5" />
          <line x1="50" y1="73" x2="70" y2="73" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="50" y1="78" x2="66" y2="78" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    // e-7: Orphan Care & Shelter Emblem
    case 'e-7':
      return (
        <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="e7-glow" cx="60" cy="55" r="45" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fb7185" stopOpacity="0.4" />
              <stop offset="1" stopColor="#be123c" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="e7-heart" x1="40" y1="35" x2="80" y2="85" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f43f5e" />
              <stop offset="0.6" stopColor="#e11d48" />
              <stop offset="1" stopColor="#be123c" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="98" rx="38" ry="7" fill="#022c22" opacity="0.6" />
          <circle cx="60" cy="55" r="45" fill="url(#e7-glow)" />
          {/* Protective Sheltering Roof Canopy */}
          <path d="M26 44 L60 20 L94 44" stroke="#f59e0b" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M34 44 L60 25 L86 44" stroke="#fef08a" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Glowing 3D Heart */}
          <path d="M60 88 C40 74 34 60 34 48 C34 38 42 32 50 32 C56 32 60 36 60 36 C60 36 64 32 70 32 C78 32 86 38 86 48 C86 60 80 74 60 88 Z" fill="url(#e7-heart)" stroke="#fda4af" strokeWidth="2" />
          {/* Specular Glare on Heart */}
          <ellipse cx="44" cy="42" rx="6" ry="3" transform="rotate(-30 44 42)" fill="#ffffff" opacity="0.75" />
          {/* Two Glowing Stars */}
          <polygon points="46,58 48,62 52,62 49,65 50,69 46,67 42,69 43,65 40,62 44,62" fill="#fde047" />
          <polygon points="72,52 74,56 78,56 75,59 76,63 72,61 68,63 69,59 66,56 70,56" fill="#fde047" />
        </svg>
      );

    // e-8: Qurban Meat Relief Cargo Hamper
    case 'e-8':
      return (
        <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="e8-glow" cx="60" cy="55" r="45" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f59e0b" stopOpacity="0.4" />
              <stop offset="1" stopColor="#b45309" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="e8-crate" x1="30" y1="35" x2="90" y2="85" gradientUnits="userSpaceOnUse">
              <stop stopColor="#d97706" />
              <stop offset="0.6" stopColor="#b45309" />
              <stop offset="1" stopColor="#78350f" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="98" rx="38" ry="7" fill="#022c22" opacity="0.6" />
          <circle cx="60" cy="55" r="45" fill="url(#e8-glow)" />
          {/* Sturdy Wooden Relief Supply Crate */}
          <rect x="28" y="42" width="64" height="48" rx="8" fill="url(#e8-crate)" stroke="#fde68a" strokeWidth="2" />
          {/* Crate Plank lines */}
          <line x1="28" y1="58" x2="92" y2="58" stroke="#451a03" strokeWidth="2" />
          <line x1="28" y1="74" x2="92" y2="74" stroke="#451a03" strokeWidth="2" />
          {/* Diagonal Reinforcement Straps */}
          <line x1="32" y1="46" x2="88" y2="86" stroke="#fbbf24" strokeWidth="2.5" opacity="0.5" />
          {/* Golden Silk Bow & Ribbon */}
          <rect x="56" y="42" width="8" height="48" fill="#10b981" />
          <rect x="28" y="62" width="64" height="8" fill="#10b981" />
          <circle cx="60" cy="42" r="6" fill="#facc15" />
          <path d="M55 40 C45 32 45 44 55 42 Z" fill="#facc15" />
          <path d="M65 40 C75 32 75 44 65 42 Z" fill="#facc15" />
          {/* Qurban Emblem Stamp */}
          <circle cx="76" cy="74" r="7" fill="#fef08a" />
          <circle cx="76" cy="74" r="5" stroke="#b45309" strokeWidth="1.5" fill="none" />
        </svg>
      );

    // e-9: Livelihood Vintage Sewing Machine
    case 'e-9':
      return (
        <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="e9-glow" cx="60" cy="55" r="45" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2dd4bf" stopOpacity="0.4" />
              <stop offset="1" stopColor="#0f766e" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="e9-teal" x1="30" y1="35" x2="90" y2="85" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0d9488" />
              <stop offset="0.6" stopColor="#0f766e" />
              <stop offset="1" stopColor="#115e59" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="98" rx="38" ry="7" fill="#022c22" opacity="0.6" />
          <circle cx="60" cy="55" r="45" fill="url(#e9-glow)" />
          {/* Wooden Base Table */}
          <rect x="24" y="80" width="72" height="12" rx="4" fill="#78350f" stroke="#ca8a04" strokeWidth="1.5" />
          {/* Sewing Machine Arm & Pillar */}
          <rect x="70" y="44" width="14" height="38" rx="4" fill="url(#e9-teal)" />
          <path d="M38 44 H80 V54 H50 V76 H38 Z" fill="url(#e9-teal)" stroke="#5eead4" strokeWidth="1.5" />
          {/* Handwheel with gold trim */}
          <ellipse cx="86" cy="54" rx="5" ry="14" fill="#f59e0b" stroke="#78350f" strokeWidth="1.5" />
          {/* Golden Thread Spool on top */}
          <rect x="74" y="32" width="6" height="12" rx="2" fill="#fbbf24" />
          <ellipse cx="77" cy="32" rx="4" ry="1.5" fill="#fde047" />
          {/* Needle Bar & Foot */}
          <line x1="44" y1="68" x2="44" y2="80" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
          <rect x="40" y="78" width="8" height="3" rx="1.5" fill="#f59e0b" />
          {/* Fabric Ribbon */}
          <path d="M30 82 Q44 78 58 82" stroke="#f43f5e" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      );

    // e-10: Premium Dates Harvest Woven Basket
    case 'e-10':
      return (
        <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="e10-glow" cx="60" cy="55" r="45" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fbbf24" stopOpacity="0.4" />
              <stop offset="1" stopColor="#78350f" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="e10-basket" x1="30" y1="50" x2="90" y2="85" gradientUnits="userSpaceOnUse">
              <stop stopColor="#d97706" />
              <stop offset="0.6" stopColor="#b45309" />
              <stop offset="1" stopColor="#78350f" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="98" rx="38" ry="7" fill="#022c22" opacity="0.6" />
          <circle cx="60" cy="55" r="45" fill="url(#e10-glow)" />
          {/* Palm Fronds in background */}
          <path d="M60 40 Q40 22 28 32" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M60 40 Q80 22 92 32" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          {/* Woven Wicker Basket */}
          <ellipse cx="60" cy="56" rx="36" ry="10" fill="#92400e" />
          <path d="M26 56 L34 90 H86 L94 56 Z" fill="url(#e10-basket)" stroke="#fde68a" strokeWidth="2" strokeLinejoin="round" />
          {/* Woven Wicker Grid lines */}
          <line x1="30" y1="66" x2="90" y2="66" stroke="#f59e0b" strokeWidth="1.5" opacity="0.6" />
          <line x1="32" y1="78" x2="88" y2="78" stroke="#f59e0b" strokeWidth="1.5" opacity="0.6" />
          {/* Luscious Glossy Dates piling up */}
          <ellipse cx="50" cy="50" rx="9" ry="6" fill="#78350f" stroke="#ca8a04" strokeWidth="1.5" transform="rotate(-15 50 50)" />
          <ellipse cx="68" cy="52" rx="9" ry="6" fill="#78350f" stroke="#ca8a04" strokeWidth="1.5" transform="rotate(20 68 52)" />
          <ellipse cx="60" cy="42" rx="9" ry="6" fill="#451a03" stroke="#ca8a04" strokeWidth="1.5" />
          <ellipse cx="42" cy="54" rx="8" ry="5" fill="#451a03" stroke="#ca8a04" strokeWidth="1.5" transform="rotate(10 42 54)" />
          <ellipse cx="78" cy="54" rx="8" ry="5" fill="#451a03" stroke="#ca8a04" strokeWidth="1.5" transform="rotate(-20 78 54)" />
          {/* Specular gloss highlights on dates */}
          <ellipse cx="58" cy="40" rx="3" ry="1.5" fill="#fde68a" opacity="0.8" />
          <ellipse cx="48" cy="48" rx="3" ry="1.5" fill="#fde68a" opacity="0.8" />
          <ellipse cx="66" cy="50" rx="3" ry="1.5" fill="#fde68a" opacity="0.8" />
        </svg>
      );

    // e-11: Festive Eid Clothing Gift Package
    case 'e-11':
      return (
        <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="e11-glow" cx="60" cy="55" r="45" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="1" stopColor="#0284c7" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="e11-box" x1="30" y1="35" x2="90" y2="85" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0284c7" />
              <stop offset="0.6" stopColor="#0369a1" />
              <stop offset="1" stopColor="#075985" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="98" rx="38" ry="7" fill="#022c22" opacity="0.6" />
          <circle cx="60" cy="55" r="45" fill="url(#e11-glow)" />
          {/* Festive Gift Box Base */}
          <rect x="30" y="44" width="60" height="46" rx="10" fill="url(#e11-box)" stroke="#7dd3fc" strokeWidth="2" />
          {/* Gold Satin Ribbon Cross */}
          <rect x="55" y="44" width="10" height="46" fill="#f59e0b" />
          <rect x="30" y="62" width="60" height="10" fill="#f59e0b" />
          {/* Box Lid Bevel */}
          <rect x="26" y="38" width="68" height="12" rx="4" fill="#0369a1" stroke="#38bdf8" strokeWidth="1.5" />
          <rect x="54" y="38" width="12" height="12" fill="#fbbf24" />
          {/* Elaborate 3D Gold Ribbon Bow */}
          <path d="M52 38 C40 26 40 40 54 38 Z" fill="#fde047" stroke="#b45309" strokeWidth="1" />
          <path d="M68 38 C80 26 80 40 66 38 Z" fill="#fde047" stroke="#b45309" strokeWidth="1" />
          <circle cx="60" cy="38" r="5" fill="#f59e0b" />
          {/* Silk Garment Tag */}
          <rect x="68" y="70" width="14" height="18" rx="2" transform="rotate(15 68 70)" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
        </svg>
      );

    // e-12: Direct Zakat Charity Coffer & Treasure of Blessings
    case 'e-12':
      return (
        <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="e12-glow" cx="60" cy="55" r="45" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fbbf24" stopOpacity="0.45" />
              <stop offset="1" stopColor="#78350f" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="e12-gold" x1="40" y1="30" x2="80" y2="70" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fef08a" />
              <stop offset="0.5" stopColor="#facc15" />
              <stop offset="1" stopColor="#ca8a04" />
            </linearGradient>
            <linearGradient id="e12-chest" x1="30" y1="45" x2="90" y2="85" gradientUnits="userSpaceOnUse">
              <stop stopColor="#92400e" />
              <stop offset="0.7" stopColor="#78350f" />
              <stop offset="1" stopColor="#451a03" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="98" rx="38" ry="7" fill="#022c22" opacity="0.6" />
          <circle cx="60" cy="55" r="45" fill="url(#e12-glow)" />
          {/* Treasure Coffer Chest */}
          <rect x="28" y="52" width="64" height="38" rx="8" fill="url(#e12-chest)" stroke="#fde047" strokeWidth="2" />
          {/* Curved Open Lid */}
          <path d="M26 52 C26 36 94 36 94 52 Z" fill="#b45309" stroke="#fde047" strokeWidth="2" />
          {/* Overflowing Golden Dinar Coins */}
          <ellipse cx="60" cy="48" rx="10" ry="5" fill="url(#e12-gold)" stroke="#ca8a04" strokeWidth="1" />
          <ellipse cx="48" cy="52" rx="9" ry="4" fill="url(#e12-gold)" stroke="#ca8a04" strokeWidth="1" transform="rotate(-15 48 52)" />
          <ellipse cx="72" cy="52" rx="9" ry="4" fill="url(#e12-gold)" stroke="#ca8a04" strokeWidth="1" transform="rotate(15 72 52)" />
          <ellipse cx="42" cy="48" rx="8" ry="4" fill="url(#e12-gold)" stroke="#ca8a04" strokeWidth="1" />
          <ellipse cx="76" cy="48" rx="8" ry="4" fill="url(#e12-gold)" stroke="#ca8a04" strokeWidth="1" />
          {/* Big Golden Keyhole Plate */}
          <rect x="54" y="60" width="12" height="16" rx="4" fill="#fbbf24" stroke="#ca8a04" strokeWidth="1.5" />
          <circle cx="60" cy="65" r="2.5" fill="#1e293b" />
          <polygon points="58.5,65 61.5,65 62,72 58,72" fill="#1e293b" />
          {/* Sparkles around treasure */}
          <path d="M34 38 L36 42 L40 44 L36 46 L34 50 L32 46 L28 44 L32 42 Z" fill="#fef08a" />
          <path d="M84 34 L86 38 L90 40 L86 42 L84 46 L82 42 L78 40 L82 38 Z" fill="#fef08a" />
        </svg>
      );

    // e-13: Ramadan Traditional Fanous Lantern
    case 'e-13':
    default:
      return (
        <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="e13-glow" cx="60" cy="55" r="45" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fbbf24" stopOpacity="0.5" />
              <stop offset="1" stopColor="#78350f" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="e13-brass" x1="40" y1="20" x2="80" y2="85" gradientUnits="userSpaceOnUse">
              <stop stopColor="#fde047" />
              <stop offset="0.5" stopColor="#eab308" />
              <stop offset="1" stopColor="#b45309" />
            </linearGradient>
            <linearGradient id="e13-flame" x1="60" y1="46" x2="60" y2="68" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" />
              <stop offset="0.4" stopColor="#fef08a" />
              <stop offset="0.8" stopColor="#f97316" />
              <stop offset="1" stopColor="#ef4444" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="98" rx="38" ry="7" fill="#022c22" opacity="0.6" />
          <circle cx="60" cy="55" r="45" fill="url(#e13-glow)" />
          {/* Top Hanging Ring */}
          <circle cx="60" cy="18" r="7" stroke="url(#e13-brass)" strokeWidth="3.5" fill="none" />
          {/* Lantern Dome Canopy */}
          <path d="M42 36 C42 26 60 22 60 22 C60 22 78 26 78 36 Z" fill="url(#e13-brass)" stroke="#fde047" strokeWidth="1.5" />
          <circle cx="60" cy="22" r="2.5" fill="#facc15" />
          {/* Central Glass Chamber */}
          <path d="M44 36 L36 58 L46 76 H74 L84 58 L76 36 Z" fill="#064e3b" stroke="url(#e13-brass)" strokeWidth="2.5" />
          {/* Glowing Warm Interior Candle Flame */}
          <ellipse cx="60" cy="60" rx="16" ry="14" fill="#fbbf24" opacity="0.6" />
          <path d="M60 48 C55 56 55 64 60 68 C65 64 65 56 60 48 Z" fill="url(#e13-flame)" />
          {/* Stained Glass Geometric Ribs */}
          <line x1="60" y1="36" x2="60" y2="76" stroke="#facc15" strokeWidth="2" />
          <line x1="44" y1="36" x2="74" y2="76" stroke="#facc15" strokeWidth="1.5" opacity="0.7" />
          <line x1="76" y1="36" x2="46" y2="76" stroke="#facc15" strokeWidth="1.5" opacity="0.7" />
          {/* Heavy Brass Base Foot */}
          <path d="M46 76 L40 92 H80 L74 76 Z" fill="url(#e13-brass)" stroke="#78350f" strokeWidth="2" />
          {/* Crescent & Star sparkle */}
          <path d="M26 36 C28 36 30 38 30 40 C29 39 27 39 26 38 Z" fill="#fef08a" />
          <path d="M92 42 C94 42 96 44 96 46 C95 45 93 45 92 44 Z" fill="#fef08a" />
        </svg>
      );
  }
};
