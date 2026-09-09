import React from 'react';

interface ImpactVectorIllustrationProps {
  id: string;
  className?: string;
  isHero?: boolean;
}

export const ImpactVectorIllustration: React.FC<ImpactVectorIllustrationProps> = ({
  id,
  className = 'w-full h-full',
  isHero = false,
}) => {
  // Common Islamic Star Pattern SVG def
  const renderDefs = (gradientId: string, color1: string, color2: string, color3: string) => (
    <defs>
      <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={color1} />
        <stop offset="60%" stopColor={color2} />
        <stop offset="100%" stopColor={color3} />
      </linearGradient>

      <linearGradient id="gold-foil" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fef08a" />
        <stop offset="35%" stopColor="#f59e0b" />
        <stop offset="70%" stopColor="#d97706" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>

      <linearGradient id="gold-metal" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fef9c3" />
        <stop offset="50%" stopColor="#eab308" />
        <stop offset="100%" stopColor="#a16207" />
      </linearGradient>

      <linearGradient id="emerald-glow" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#059669" />
        <stop offset="50%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>

      <linearGradient id="cyan-glow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="50%" stopColor="#0284c7" />
        <stop offset="100%" stopColor="#0369a1" />
      </linearGradient>

      <linearGradient id="silver-metal" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="50%" stopColor="#cbd5e1" />
        <stop offset="100%" stopColor="#64748b" />
      </linearGradient>

      {/* Islamic 8-Point Star Pattern Tile */}
      <pattern id="islamic-grid" width="60" height="60" patternUnits="userSpaceOnUse">
        <path
          d="M30 0 L40 10 L50 0 L50 20 L60 30 L50 40 L60 50 L40 50 L30 60 L20 50 L0 50 L10 40 L0 30 L10 20 L0 0 L20 10 Z"
          fill="none"
          stroke="#10b981"
          strokeWidth="0.8"
          strokeOpacity="0.08"
        />
        <circle cx="30" cy="30" r="12" fill="none" stroke="#f59e0b" strokeWidth="0.6" strokeOpacity="0.06" />
      </pattern>

      <radialGradient id="stage-spotlight" cx="50%" cy="40%" r="50%">
        <stop offset="0%" stopColor="#10b981" stopOpacity="0.22" />
        <stop offset="70%" stopColor="#042f2e" stopOpacity="0.05" />
        <stop offset="100%" stopColor="#022c22" stopOpacity="0" />
      </radialGradient>
    </defs>
  );

  // Background frame shared by all illustrations
  const renderBackdrop = (gradientId: string, color1: string, color2: string, color3: string) => (
    <>
      {renderDefs(gradientId, color1, color2, color3)}
      <rect width="800" height="450" fill={`url(#${gradientId})`} />
      <rect width="800" height="450" fill="url(#islamic-grid)" />
      <rect width="800" height="450" fill="url(#stage-spotlight)" />

      {/* Architectural Inner Framing Border */}
      <rect
        x="16"
        y="16"
        width="768"
        height="418"
        rx="16"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="1.2"
        strokeOpacity="0.3"
      />
      <rect
        x="24"
        y="24"
        width="752"
        height="402"
        rx="12"
        fill="none"
        stroke="#10b981"
        strokeWidth="0.8"
        strokeOpacity="0.2"
      />

      {/* Corner Arabesque Accents */}
      <path d="M24 50 Q24 24 50 24" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeOpacity="0.6" />
      <path d="M776 50 Q776 24 750 24" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeOpacity="0.6" />
      <path d="M24 400 Q24 426 50 426" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeOpacity="0.6" />
      <path d="M776 400 Q776 426 750 426" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeOpacity="0.6" />
    </>
  );

  // Integrated Top Title Banner Inside Vector Graphic
  const renderHeader = (
    sectorTag: string,
    mainTitle: string,
    subTitle: string,
    accentColor: string = '#f59e0b'
  ) => (
    <g transform="translate(400, 52)">
      {/* Sector Badge */}
      <rect
        x="-110"
        y="-20"
        width="220"
        height="24"
        rx="12"
        fill="#022c22"
        fillOpacity="0.85"
        stroke={accentColor}
        strokeWidth="1.2"
      />
      <text
        x="0"
        y="-4"
        textAnchor="middle"
        fill={accentColor}
        fontSize="11"
        fontWeight="800"
        letterSpacing="2.5"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        {sectorTag.toUpperCase()}
      </text>

      {/* Primary Headline in Vector */}
      <text
        x="0"
        y="26"
        textAnchor="middle"
        fill="#ffffff"
        fontSize="20"
        fontWeight="900"
        letterSpacing="1.2"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        {mainTitle}
      </text>

      {/* Supporting Heading */}
      <text
        x="0"
        y="46"
        textAnchor="middle"
        fill="#6ee7b7"
        fontSize="12.5"
        fontWeight="600"
        letterSpacing="0.8"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        {subTitle}
      </text>

      {/* Subtle Divider line with diamond */}
      <line x1="-120" y1="58" x2="120" y2="58" stroke="#10b981" strokeWidth="0.8" strokeOpacity="0.4" />
      <polygon points="0,54 4,58 0,62 -4,58" fill={accentColor} />
    </g>
  );

  // ------------------------------------------------------------------------
  // INDIVIDUAL VECTOR ART SCENES (STRICTLY OBJECTS / ARCHITECTURE ONLY)
  // ------------------------------------------------------------------------

  // h-1: Ophthalmic Surgical Microscope & Laser Precision Optics
  const renderH1 = () => (
    <svg viewBox="0 0 800 450" className={className} xmlns="http://www.w3.org/2000/svg">
      {renderBackdrop('bg-h1', '#022c22', '#064e3b', '#031e17')}
      {renderHeader('Ophthalmic Healthcare', 'SURGICAL MICROSCOPE & LASER SUITE', 'Precision Cataract Surgery & Intraocular Lens Implantation')}

      {/* Central Vector Art: Ophthalmic Microscope Suite */}
      <g transform="translate(400, 248)">
        {/* Overhead Articulated Arm */}
        <path d="M-180 -80 L-100 -120 L40 -120 L110 -60" fill="none" stroke="url(#silver-metal)" strokeWidth="18" strokeLinecap="round" />
        <circle cx="-100" cy="-120" r="16" fill="url(#gold-metal)" stroke="#451a03" strokeWidth="2" />
        <circle cx="40" cy="-120" r="14" fill="url(#gold-metal)" stroke="#451a03" strokeWidth="2" />

        {/* Optical Microscope Main Body */}
        <rect x="-70" y="-60" width="140" height="90" rx="14" fill="url(#silver-metal)" stroke="#334155" strokeWidth="3" />
        <rect x="-56" y="-48" width="112" height="30" rx="6" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1.5" />
        <text x="0" y="-28" textAnchor="middle" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">PRECISION OPTICS 40X</text>

        {/* Dual Binocular Eyepieces */}
        <g transform="translate(-30, -85) rotate(-20)">
          <rect x="-12" y="-30" width="24" height="40" rx="5" fill="url(#silver-metal)" stroke="#1e293b" strokeWidth="2" />
          <ellipse cx="0" cy="-30" rx="14" ry="7" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
        </g>
        <g transform="translate(30, -85) rotate(20)">
          <rect x="-12" y="-30" width="24" height="40" rx="5" fill="url(#silver-metal)" stroke="#1e293b" strokeWidth="2" />
          <ellipse cx="0" cy="-30" rx="14" ry="7" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
        </g>

        {/* Objective Lens Turret */}
        <path d="M-40 30 L40 30 L25 70 L-25 70 Z" fill="url(#gold-metal)" stroke="#78350f" strokeWidth="2" />
        <circle cx="0" cy="70" r="22" fill="#0369a1" stroke="#38bdf8" strokeWidth="3" />
        <circle cx="0" cy="70" r="14" fill="#38bdf8" fillOpacity="0.4" />

        {/* Precision Laser Optical Beam & Concentric Targeting Rings */}
        <line x1="0" y1="92" x2="0" y2="135" stroke="#f59e0b" strokeWidth="3" strokeDasharray="5,3" />
        <circle cx="0" cy="135" r="45" fill="none" stroke="#10b981" strokeWidth="1.8" strokeOpacity="0.5" strokeDasharray="6,4" />
        <circle cx="0" cy="135" r="28" fill="none" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.8" />
        <circle cx="0" cy="135" r="8" fill="#f59e0b" />
        <line x1="-55" y1="135" x2="55" y2="135" stroke="#10b981" strokeWidth="1.2" strokeOpacity="0.6" />
        <line x1="0" y1="80" x2="0" y2="175" stroke="#10b981" strokeWidth="1.2" strokeOpacity="0.6" />

        {/* Intraocular Lens Schematic (Side Floating Vector) */}
        <g transform="translate(190, 30)">
          <circle cx="0" cy="0" r="36" fill="#0f172a" stroke="url(#gold-metal)" strokeWidth="2.5" />
          <circle cx="0" cy="0" r="22" fill="#0284c7" fillOpacity="0.3" stroke="#38bdf8" strokeWidth="1.8" />
          {/* Haptic Wings of IOL */}
          <path d="M-22 0 C-45 -25, -60 -10, -50 15" fill="none" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
          <path d="M22 0 C45 25, 60 10, 50 -15" fill="none" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
          <text x="0" y="52" textAnchor="middle" fill="#fef08a" fontSize="10.5" fontWeight="bold">IOL IMPLANT</text>
        </g>
      </g>
    </svg>
  );

  // h-2: Optical Slit-Lamp Biomicroscope & Vision Diagnostic Equipment
  const renderH2 = () => (
    <svg viewBox="0 0 800 450" className={className} xmlns="http://www.w3.org/2000/svg">
      {renderBackdrop('bg-h2', '#031b26', '#083344', '#022129')}
      {renderHeader('Eye Diagnostic Clinic', 'SLIT-LAMP BIOMICROSCOPE WORKSTATION', 'Comprehensive Vision Screening & Ophthalmic Examination', '#38bdf8')}

      <g transform="translate(400, 245)">
        {/* Optical Workstation Base Plate */}
        <rect x="-180" y="110" width="360" height="24" rx="8" fill="url(#silver-metal)" stroke="#334155" strokeWidth="2" />
        <rect x="-120" y="90" width="240" height="20" rx="4" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1.5" />

        {/* Central Vertical Slit Illumination Tower */}
        <rect x="-24" y="-80" width="48" height="170" rx="8" fill="url(#silver-metal)" stroke="#1e293b" strokeWidth="2" />
        <rect x="-16" y="-60" width="32" height="60" rx="4" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
        {/* Slit Aperture Beam */}
        <line x1="0" y1="-50" x2="0" y2="-10" stroke="#ffffff" strokeWidth="4" />
        <polygon points="-8,-40 8,-40 0,60" fill="#38bdf8" fillOpacity="0.25" />

        {/* Precision Micrometer Joystick Control */}
        <path d="M0 90 L0 50" stroke="url(#gold-metal)" strokeWidth="10" strokeLinecap="round" />
        <circle cx="0" cy="45" r="14" fill="url(#gold-metal)" stroke="#451a03" strokeWidth="2" />

        {/* Chin & Forehead Rest Frame */}
        <path d="M-130 90 L-130 -60 Q-130 -90 -90 -90 L-90 90" fill="none" stroke="url(#silver-metal)" strokeWidth="10" strokeLinecap="round" />
        <rect x="-145" y="-95" width="40" height="14" rx="4" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
        <rect x="-140" y="30" width="30" height="14" rx="4" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />

        {/* Acuity Diagnostic Symbol Chart (Floating Vector) */}
        <g transform="translate(160, -20)">
          <rect x="-55" y="-55" width="110" height="135" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
          <text x="0" y="-30" textAnchor="middle" fill="#ffffff" fontSize="24" fontWeight="900">E</text>
          <text x="-20" y="-6" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="900">F</text>
          <text x="20" y="-6" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="900">P</text>
          <text x="-25" y="14" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">T</text>
          <text x="0" y="14" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">O</text>
          <text x="25" y="14" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold">Z</text>
          <line x1="-40" y1="28" x2="40" y2="28" stroke="#10b981" strokeWidth="3" />
          <line x1="-40" y1="36" x2="40" y2="36" stroke="#ef4444" strokeWidth="3" />
          <text x="0" y="60" textAnchor="middle" fill="#38bdf8" fontSize="9.5" fontWeight="bold">VISION CHART</text>
        </g>
      </g>
    </svg>
  );

  // h-3: Prescription Optical Eyewear Frames & Lens Scale
  const renderH3 = () => (
    <svg viewBox="0 0 800 450" className={className} xmlns="http://www.w3.org/2000/svg">
      {renderBackdrop('bg-h3', '#022c22', '#0f766e', '#042f2e')}
      {renderHeader('Optical Correction', 'PRESCRIPTION SPECTACLES & LENSES', 'Refractive Error Correction & Medical Eyeglasses Distribution')}

      <g transform="translate(400, 245)">
        {/* Optical Display Pedestal */}
        <ellipse cx="0" cy="115" rx="200" ry="24" fill="#022c22" stroke="url(#gold-metal)" strokeWidth="2" />

        {/* Large Eyeglasses Vector (Pure object) */}
        {/* Left Rim */}
        <circle cx="-90" cy="0" r="62" fill="#064e3b" fillOpacity="0.7" stroke="url(#gold-metal)" strokeWidth="7" />
        <circle cx="-90" cy="0" r="54" fill="none" stroke="#38bdf8" strokeWidth="2" strokeOpacity="0.7" />
        {/* Left Lens Glare Arc */}
        <path d="M-125 -30 A 50 50 0 0 1 -75 -45" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.85" />

        {/* Right Rim */}
        <circle cx="90" cy="0" r="62" fill="#064e3b" fillOpacity="0.7" stroke="url(#gold-metal)" strokeWidth="7" />
        <circle cx="90" cy="0" r="54" fill="none" stroke="#38bdf8" strokeWidth="2" strokeOpacity="0.7" />
        {/* Right Lens Glare Arc */}
        <path d="M55 -30 A 50 50 0 0 1 105 -45" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.85" />

        {/* Bridge Piece */}
        <path d="M-28 -5 Q0 -25 28 -5" fill="none" stroke="url(#gold-metal)" strokeWidth="7" strokeLinecap="round" />

        {/* Temple Arms Extending Out */}
        <path d="M-152 0 Q-210 -25 -240 -8" fill="none" stroke="url(#gold-metal)" strokeWidth="6" strokeLinecap="round" />
        <path d="M152 0 Q210 -25 240 -8" fill="none" stroke="url(#gold-metal)" strokeWidth="6" strokeLinecap="round" />

        {/* Eyeglass Case Below */}
        <rect x="-110" y="65" width="220" height="34" rx="14" fill="#042f2e" stroke="#10b981" strokeWidth="2" />
        <text x="0" y="87" textAnchor="middle" fill="#fef08a" fontSize="11" fontWeight="bold" letterSpacing="1">PROTECTIVE HARD CASE</text>
      </g>
    </svg>
  );

  // h-4: Mobile Health Camp Kit & Medical Instruments
  const renderH4 = () => (
    <svg viewBox="0 0 800 450" className={className} xmlns="http://www.w3.org/2000/svg">
      {renderBackdrop('bg-h4', '#042f2e', '#0d9488', '#022c22')}
      {renderHeader('Community Medicine', 'MOBILE MEDICAL CLINIC APPARATUS', 'Equipped Health Camps & Diagnostic Outreach Stations')}

      <g transform="translate(400, 240)">
        {/* Heavy Duty Medical Case */}
        <rect x="-160" y="-40" width="320" height="150" rx="18" fill="url(#silver-metal)" stroke="#0f172a" strokeWidth="3" />
        <rect x="-140" y="-20" width="280" height="110" rx="8" fill="#042f2e" stroke="#10b981" strokeWidth="2" />
        
        {/* Handle */}
        <path d="M-50 -40 L-50 -70 Q-50 -85 0 -85 Q50 -85 50 -70 L50 -40" fill="none" stroke="url(#gold-metal)" strokeWidth="12" strokeLinecap="round" />

        {/* Prominent Emergency Medical Cross Emblem */}
        <g transform="translate(0, 35)">
          <circle cx="0" cy="0" r="38" fill="#ffffff" stroke="#e11d48" strokeWidth="3" />
          <path d="M-10 -24 H10 V-10 H24 V10 H10 V24 H-10 V10 H-24 V-10 H-10 Z" fill="#e11d48" />
        </g>

        {/* Stethoscope Vector draped across */}
        <g transform="translate(0, -10)">
          {/* Tubing */}
          <path d="M-190 20 C-180 -90, -90 -100, -70 -70 C-50 -40, -40 20, 80 50 C160 70, 190 10, 180 -60" fill="none" stroke="#0284c7" strokeWidth="7" strokeLinecap="round" />
          {/* Binaural earpieces */}
          <path d="M-80 -80 L-95 -120 M-60 -75 L-45 -115" stroke="url(#silver-metal)" strokeWidth="5" strokeLinecap="round" />
          {/* Chestpiece diaphragm */}
          <circle cx="180" cy="-60" r="22" fill="url(#silver-metal)" stroke="#334155" strokeWidth="3" />
          <circle cx="180" cy="-60" r="14" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
        </g>
      </g>
    </svg>
  );

  // h-5: Surgical Instruments & Minor Procedure Suite
  const renderH5 = () => (
    <svg viewBox="0 0 800 450" className={className} xmlns="http://www.w3.org/2000/svg">
      {renderBackdrop('bg-h5', '#022c22', '#14532d', '#052e16')}
      {renderHeader('Pediatric Health', 'CLINICAL SURGICAL SUITE', 'Sterile Instruments & Minor Surgical Procedures')}

      <g transform="translate(400, 245)">
        {/* Stainless Steel Surgical Tray */}
        <rect x="-210" y="-45" width="420" height="160" rx="22" fill="url(#silver-metal)" stroke="#334155" strokeWidth="4" />
        <rect x="-190" y="-30" width="380" height="130" rx="14" fill="#0f172a" stroke="#64748b" strokeWidth="2" />

        {/* Instrument 1: Surgical Forceps */}
        <g transform="translate(-110, 35) rotate(15)">
          <path d="M-10 -70 L-6 50 L6 50 L10 -70 Z" fill="url(#silver-metal)" stroke="#1e293b" strokeWidth="1.5" />
          <line x1="-6" y1="-30" x2="6" y2="-30" stroke="#64748b" strokeWidth="1" />
          <line x1="-6" y1="-20" x2="6" y2="-20" stroke="#64748b" strokeWidth="1" />
          <line x1="-6" y1="-10" x2="6" y2="-10" stroke="#64748b" strokeWidth="1" />
        </g>

        {/* Instrument 2: Scalpel / Precision Instrument Handle */}
        <g transform="translate(0, 35)">
          <rect x="-8" y="-65" width="16" height="110" rx="3" fill="url(#silver-metal)" stroke="#334155" strokeWidth="1.5" />
          {/* Precision Blade */}
          <path d="M-8 -65 Q-8 -105 8 -85 L8 -65 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="0" y1="-40" x2="0" y2="30" stroke="#64748b" strokeWidth="1" />
        </g>

        {/* Instrument 3: Surgical Scissors */}
        <g transform="translate(110, 35) rotate(-15)">
          {/* Handle Rings */}
          <circle cx="-16" cy="45" r="14" fill="none" stroke="url(#gold-metal)" strokeWidth="4" />
          <circle cx="16" cy="45" r="14" fill="none" stroke="url(#gold-metal)" strokeWidth="4" />
          {/* Blades crossed at pivot pin */}
          <line x1="-12" y1="35" x2="10" y2="-70" stroke="url(#silver-metal)" strokeWidth="4" strokeLinecap="round" />
          <line x1="12" y1="35" x2="-10" y2="-70" stroke="url(#silver-metal)" strokeWidth="4" strokeLinecap="round" />
          <circle cx="0" cy="-10" r="4" fill="url(#gold-metal)" />
        </g>

        {/* Sterile Antiseptic Bowl */}
        <g transform="translate(195, -70)">
          <ellipse cx="0" cy="20" rx="35" ry="12" fill="url(#silver-metal)" stroke="#334155" strokeWidth="2" />
          <path d="M-35 20 Q-35 55 0 55 Q35 55 35 20 Z" fill="url(#silver-metal)" stroke="#334155" strokeWidth="2" />
          <ellipse cx="0" cy="24" rx="28" ry="7" fill="#0284c7" fillOpacity="0.8" />
        </g>
      </g>
    </svg>
  );

  // w-1: Grand Islamic Masjid Architecture
  const renderW1 = () => (
    <svg viewBox="0 0 800 450" className={className} xmlns="http://www.w3.org/2000/svg">
      {renderBackdrop('bg-w1', '#022c22', '#064e3b', '#021812')}
      {renderHeader('Islamic Architecture', 'COMMUNITY MASJID CONSTRUCTION', 'Sacred Places of Worship, Prayer & Assembly')}

      <g transform="translate(400, 260)">
        {/* Base Foundation Platform */}
        <rect x="-240" y="90" width="480" height="24" rx="4" fill="#0f172a" stroke="url(#gold-metal)" strokeWidth="2" />
        <rect x="-220" y="70" width="440" height="20" rx="2" fill="#042f2e" stroke="#10b981" strokeWidth="1.5" />

        {/* Main Mosque Facade Body */}
        <rect x="-140" y="-40" width="280" height="110" rx="4" fill="url(#silver-metal)" stroke="#1e293b" strokeWidth="2" />

        {/* Central Entrance Horseshoe Archway */}
        <path d="M-45 70 L-45 0 C-45 -35 45 -35 45 0 L45 70 Z" fill="#022c22" stroke="url(#gold-metal)" strokeWidth="4" />
        {/* Inner Mihrab Arch */}
        <path d="M-28 70 L-28 15 C-28 -15 28 -15 28 15 L28 70 Z" fill="#064e3b" stroke="#34d399" strokeWidth="2" />
        {/* Islamic Brass Chandelier Lamp in Portal */}
        <line x1="0" y1="5" x2="0" y2="25" stroke="#f59e0b" strokeWidth="2" />
        <circle cx="0" cy="28" r="6" fill="#fef08a" />

        {/* Side Arched Windows */}
        <path d="M-115 45 L-115 0 C-115 -20 -75 -20 -75 0 L-75 45 Z" fill="#022c22" stroke="url(#gold-metal)" strokeWidth="2" />
        <path d="M75 45 L75 0 C75 -20 115 -20 115 0 L115 45 Z" fill="#022c22" stroke="url(#gold-metal)" strokeWidth="2" />

        {/* Central Grand Vaulted Dome */}
        <path d="M-90 -40 C-90 -130, 90 -130, 90 -40 Z" fill="url(#gold-metal)" stroke="#78350f" strokeWidth="3" />
        {/* Crescent Finial on Dome */}
        <line x1="0" y1="-130" x2="0" y2="-155" stroke="url(#gold-metal)" strokeWidth="4" />
        <path d="M-2 -170 A 14 14 0 1 0 12 -156 A 10 10 0 1 1 -2 -170 Z" fill="url(#gold-foil)" stroke="#78350f" strokeWidth="1" />

        {/* Left Slender Minaret */}
        <rect x="-190" y="-120" width="36" height="190" fill="url(#silver-metal)" stroke="#334155" strokeWidth="2" />
        <rect x="-198" y="-125" width="52" height="12" rx="3" fill="url(#gold-metal)" />
        <path d="M-190 -125 L-172 -170 L-154 -125 Z" fill="url(#gold-metal)" />
        <line x1="-172" y1="-170" x2="-172" y2="-185" stroke="url(#gold-metal)" strokeWidth="3" />
        <circle cx="-172" cy="-188" r="4" fill="url(#gold-foil)" />

        {/* Right Slender Minaret */}
        <rect x="154" y="-120" width="36" height="190" fill="url(#silver-metal)" stroke="#334155" strokeWidth="2" />
        <rect x="146" y="-125" width="52" height="12" rx="3" fill="url(#gold-metal)" />
        <path d="M154 -125 L172 -170 L190 -125 Z" fill="url(#gold-metal)" />
        <line x1="172" y1="-170" x2="172" y2="-185" stroke="url(#gold-metal)" strokeWidth="3" />
        <circle cx="172" cy="-188" r="4" fill="url(#gold-foil)" />
      </g>
    </svg>
  );

  // w-2: Household Drinking Water Well with Pulley and Bucket
  const renderW2 = () => (
    <svg viewBox="0 0 800 450" className={className} xmlns="http://www.w3.org/2000/svg">
      {renderBackdrop('bg-w2', '#042f2e', '#0e7490', '#031b26')}
      {renderHeader('Potable Water Provision', 'HOUSEHOLD DRINKING WELL', 'Clean Freshwater for Rural Families', '#38bdf8')}

      <g transform="translate(400, 245)">
        {/* Raised Concrete Apron Ground */}
        <ellipse cx="0" cy="110" rx="220" ry="25" fill="#0f172a" stroke="#0284c7" strokeWidth="2" />

        {/* Circular Masonry Well Body */}
        <path d="M-120 40 C-120 80, 120 80, 120 40 L110 110 C110 140, -110 140, -110 110 Z" fill="url(#silver-metal)" stroke="#1e293b" strokeWidth="3" />
        {/* Stone Masonry Pattern Lines */}
        <ellipse cx="0" cy="40" rx="120" ry="24" fill="#0369a1" stroke="url(#gold-metal)" strokeWidth="4" />
        <ellipse cx="0" cy="40" rx="100" ry="18" fill="#082f49" />

        {/* Water Surface Glint inside Well */}
        <ellipse cx="0" cy="45" rx="80" ry="12" fill="#38bdf8" fillOpacity="0.4" />

        {/* Timber Canopy Frame Support Posts */}
        <rect x="-95" y="-120" width="16" height="150" fill="#78350f" stroke="#451a03" strokeWidth="2" />
        <rect x="79" y="-120" width="16" height="150" fill="#78350f" stroke="#451a03" strokeWidth="2" />
        <rect x="-115" y="-125" width="230" height="16" rx="4" fill="#b45309" stroke="#451a03" strokeWidth="2" />

        {/* Iron Pulley Wheel and Axle */}
        <circle cx="0" cy="-90" r="22" fill="url(#silver-metal)" stroke="#0f172a" strokeWidth="3" />
        <circle cx="0" cy="-90" r="6" fill="url(#gold-metal)" />
        <line x1="0" y1="-120" x2="0" y2="-90" stroke="#0f172a" strokeWidth="4" />

        {/* Rope with Suspended Stainless Steel Bucket */}
        <line x1="-12" y1="-90" x2="-12" y2="-20" stroke="#fbbf24" strokeWidth="4" strokeDasharray="3,2" />
        <g transform="translate(-12, 5)">
          <path d="M-22 0 L22 0 L16 35 L-16 35 Z" fill="url(#silver-metal)" stroke="#334155" strokeWidth="2" />
          <path d="M-24 0 Q0 -25 24 0" fill="none" stroke="#64748b" strokeWidth="3" />
          {/* Spilling clean water droplets */}
          <circle cx="3" cy="48" r="4" fill="#38bdf8" />
          <circle cx="8" cy="60" r="3" fill="#38bdf8" />
        </g>
      </g>
    </svg>
  );

  // w-3: Heavy-Duty Deep Aquifer Tube-Well System
  const renderW3 = () => (
    <svg viewBox="0 0 800 450" className={className} xmlns="http://www.w3.org/2000/svg">
      {renderBackdrop('bg-w3', '#031b26', '#155e75', '#022c22')}
      {renderHeader('Aquifer Extraction', 'DEEP TUBE WELL INFRASTRUCTURE', 'High-Capacity Deep Groundwater Pumping', '#38bdf8')}

      <g transform="translate(400, 245)">
        {/* Concrete Foundation Slab */}
        <rect x="-200" y="100" width="400" height="30" rx="6" fill="#0f172a" stroke="#0284c7" strokeWidth="2" />

        {/* Vertical Heavy-Duty Stainless Casing Pipe */}
        <rect x="-35" y="-60" width="70" height="160" fill="url(#silver-metal)" stroke="#334155" strokeWidth="3" />
        {/* Flanged Pipe Joint Rings */}
        <rect x="-45" y="10" width="90" height="14" rx="3" fill="url(#gold-metal)" stroke="#451a03" strokeWidth="1.5" />
        <rect x="-45" y="65" width="90" height="14" rx="3" fill="url(#gold-metal)" stroke="#451a03" strokeWidth="1.5" />

        {/* Industrial Electric / Mechanical Well Head Housing */}
        <rect x="-65" y="-130" width="130" height="70" rx="10" fill="#0284c7" stroke="#38bdf8" strokeWidth="3" />
        <ellipse cx="0" cy="-130" rx="65" ry="18" fill="url(#silver-metal)" stroke="#0f172a" strokeWidth="2" />

        {/* High-Pressure Industrial Flow Valve Wheel */}
        <circle cx="85" cy="15" r="26" fill="none" stroke="#ef4444" strokeWidth="6" />
        <line x1="85" y1="-11" x2="85" y2="41" stroke="#ef4444" strokeWidth="4" />
        <line x1="59" y1="15" x2="111" y2="15" stroke="#ef4444" strokeWidth="4" />

        {/* Horizontal Outflow Discharge Spout with Flowing Water */}
        <path d="M-35 -10 L-130 -10 L-130 50" fill="none" stroke="url(#silver-metal)" strokeWidth="22" strokeLinecap="square" />
        {/* High Velocity Water Stream Pouring Out */}
        <path d="M-130 50 L-130 110" stroke="#38bdf8" strokeWidth="18" strokeLinecap="round" strokeOpacity="0.9" />
        <circle cx="-130" cy="115" r="30" fill="none" stroke="#38bdf8" strokeWidth="3" strokeDasharray="6,4" />

        {/* Precision Pressure Gauge Dial */}
        <g transform="translate(60, -90)">
          <circle cx="0" cy="0" r="24" fill="#ffffff" stroke="#0f172a" strokeWidth="3" />
          <circle cx="0" cy="0" r="20" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3,2" />
          <line x1="0" y1="0" x2="10" y2="-10" stroke="#e11d48" strokeWidth="2.5" />
          <circle cx="0" cy="0" r="3" fill="#0f172a" />
          <text x="0" y="14" textAnchor="middle" fill="#0f172a" fontSize="7" fontWeight="bold">BAR</text>
        </g>
      </g>
    </svg>
  );

  // w-4: Village Borehole Well & Community Hand Pump
  const renderW4 = () => (
    <svg viewBox="0 0 800 450" className={className} xmlns="http://www.w3.org/2000/svg">
      {renderBackdrop('bg-w4', '#022c22', '#047857', '#064e3b')}
      {renderHeader('Village Water Supply', 'COMMUNITY BOREHOLE HAND PUMP', 'Accessible Freshwater Infrastructure for Entire Villages')}

      <g transform="translate(400, 245)">
        {/* Raised Circular Reinforced Concrete Platform & Trough */}
        <ellipse cx="0" cy="115" rx="210" ry="24" fill="#0f172a" stroke="#10b981" strokeWidth="2.5" />
        <ellipse cx="0" cy="105" rx="180" ry="18" fill="url(#silver-metal)" stroke="#334155" strokeWidth="2" />

        {/* Hand Pump Cast Iron Body Stand */}
        <path d="M-28 105 L-22 -40 L22 -40 L28 105 Z" fill="#047857" stroke="#022c22" strokeWidth="3" />
        <rect x="-35" y="-55" width="70" height="20" rx="4" fill="url(#silver-metal)" stroke="#1e293b" strokeWidth="2" />

        {/* Upper Cylinder Head */}
        <rect x="-26" y="-115" width="52" height="60" rx="8" fill="#047857" stroke="#022c22" strokeWidth="3" />
        <ellipse cx="0" cy="-115" rx="26" ry="8" fill="url(#gold-metal)" stroke="#78350f" strokeWidth="1.5" />

        {/* Extended Hand Pump Lever Handle */}
        <g transform="translate(20, -90)">
          <path d="M0 0 L150 -40" stroke="url(#silver-metal)" strokeWidth="12" strokeLinecap="round" />
          <circle cx="150" cy="-40" r="14" fill="url(#gold-metal)" stroke="#451a03" strokeWidth="2" />
        </g>

        {/* Discharge Spout & Pure Flowing Water */}
        <g transform="translate(-26, -30)">
          <path d="M0 0 L-60 0 L-60 25" fill="none" stroke="url(#silver-metal)" strokeWidth="16" strokeLinecap="square" />
          <line x1="-60" y1="25" x2="-60" y2="105" stroke="#38bdf8" strokeWidth="14" strokeLinecap="round" />
          <circle cx="-60" cy="105" r="22" fill="#38bdf8" fillOpacity="0.4" />
        </g>
      </g>
    </svg>
  );

  // w-5: Domestic Drinking Water Connections & Multi-Tap Stand
  const renderW5 = () => (
    <svg viewBox="0 0 800 450" className={className} xmlns="http://www.w3.org/2000/svg">
      {renderBackdrop('bg-w5', '#031b26', '#0284c7', '#083344')}
      {renderHeader('Potable Piped Supply', 'DOMESTIC WATER CONNECTION SYSTEM', 'Multi-Tap Clean Drinking Water Distribution', '#38bdf8')}

      <g transform="translate(400, 240)">
        {/* Drain Basin Platform */}
        <rect x="-220" y="90" width="440" height="35" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
        <ellipse cx="0" cy="90" rx="200" ry="14" fill="#075985" />

        {/* Main Central Stainless Manifold Pipe */}
        <rect x="-180" y="0" width="360" height="24" rx="6" fill="url(#silver-metal)" stroke="#1e293b" strokeWidth="2" />
        {/* Vertical Supply Riser */}
        <rect x="-14" y="0" width="28" height="90" fill="url(#silver-metal)" stroke="#1e293b" strokeWidth="2" />

        {/* 4 Dispensing Taps */}
        {[-120, -40, 40, 120].map((posX, idx) => (
          <g key={idx} transform={`translate(${posX}, 0)`}>
            {/* Faucet Neck */}
            <path d="M0 0 L0 -25 L20 -25 L20 -10" fill="none" stroke="url(#gold-metal)" strokeWidth="7" strokeLinecap="round" />
            <circle cx="10" cy="-30" r="6" fill="#e11d48" />
            {/* Flowing Water Streams */}
            <line x1="20" y1="-8" x2="20" y2="85" stroke="#38bdf8" strokeWidth="5" strokeLinecap="round" />
            <circle cx="20" cy="85" r="10" fill="#38bdf8" fillOpacity="0.4" />
          </g>
        ))}

        {/* Water Containers resting on Basin */}
        <rect x="-135" y="45" width="30" height="42" rx="4" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
        <rect x="105" y="45" width="30" height="42" rx="4" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
      </g>
    </svg>
  );

  // w-6: Islamic Community Complexes
  const renderW6 = () => (
    <svg viewBox="0 0 800 450" className={className} xmlns="http://www.w3.org/2000/svg">
      {renderBackdrop('bg-w6', '#022c22', '#064e3b', '#031e17')}
      {renderHeader('Community Infrastructure', 'ISLAMIC COMMUNITY COMPLEX', 'Multipurpose Education, Guidance & Civic Facilities')}

      <g transform="translate(400, 255)">
        {/* Ground Platform */}
        <rect x="-240" y="90" width="480" height="24" rx="4" fill="#0f172a" stroke="url(#gold-metal)" strokeWidth="2" />

        {/* Main Center Building */}
        <rect x="-120" y="-30" width="240" height="120" rx="4" fill="url(#silver-metal)" stroke="#334155" strokeWidth="2" />
        {/* Left Wing (Education & Hall) */}
        <rect x="-210" y="10" width="90" height="80" rx="4" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
        {/* Right Wing (Library & Clinic) */}
        <rect x="120" y="10" width="90" height="80" rx="4" fill="#064e3b" stroke="#10b981" strokeWidth="2" />

        {/* Central Grand Archway */}
        <path d="M-40 90 L-40 20 C-40 -15 40 -15 40 20 L40 90 Z" fill="#022c22" stroke="url(#gold-metal)" strokeWidth="3" />
        
        {/* Window Rows on Wings */}
        {[-180, -150].map((x) => (
          <path key={x} d={`M${x} 60 L${x} 35 C${x} 20 ${x+18} 20 ${x+18} 35 L${x+18} 60 Z`} fill="#fef08a" fillOpacity="0.8" />
        ))}
        {[140, 170].map((x) => (
          <path key={x} d={`M${x} 60 L${x} 35 C${x} 20 ${x+18} 20 ${x+18} 35 L${x+18} 60 Z`} fill="#fef08a" fillOpacity="0.8" />
        ))}

        {/* Central Dome & Crescent */}
        <path d="M-80 -30 C-80 -115, 80 -115, 80 -30 Z" fill="url(#gold-metal)" stroke="#78350f" strokeWidth="3" />
        <line x1="0" y1="-115" x2="0" y2="-138" stroke="url(#gold-metal)" strokeWidth="3" />
        <circle cx="0" cy="-142" r="5" fill="url(#gold-foil)" />
      </g>
    </svg>
  );

  // e-1: Student School Bags, Stationery & Learning Supplies
  const renderE1 = () => (
    <svg viewBox="0 0 800 450" className={className} xmlns="http://www.w3.org/2000/svg">
      {renderBackdrop('bg-e1', '#042f2e', '#0f766e', '#022c22')}
      {renderHeader('Student Educational Support', 'SCHOOL BAGS & STATIONERY SETS', 'Comprehensive Academic Kits for Students')}

      <g transform="translate(400, 245)">
        {/* Study Desk Platform */}
        <rect x="-220" y="105" width="440" height="25" rx="6" fill="#78350f" stroke="#451a03" strokeWidth="2" />

        {/* Large School Satchel Backpack */}
        <g transform="translate(-40, 0)">
          <rect x="-85" y="-80" width="170" height="180" rx="30" fill="#0284c7" stroke="#0f172a" strokeWidth="3" />
          {/* Top Carry Handle */}
          <path d="M-30 -80 C-30 -115, 30 -115, 30 -80" fill="none" stroke="#0369a1" strokeWidth="8" strokeLinecap="round" />
          {/* Front Pocket */}
          <rect x="-65" y="0" width="130" height="80" rx="14" fill="#0369a1" stroke="#38bdf8" strokeWidth="2" />
          {/* Buckles and Zippers */}
          <rect x="-40" y="-10" width="14" height="24" rx="3" fill="url(#gold-metal)" />
          <rect x="26" y="-10" width="14" height="24" rx="3" fill="url(#gold-metal)" />
        </g>

        {/* Spiral Notebook with Grid Pages */}
        <g transform="translate(100, 45) rotate(12)">
          <rect x="-45" y="-55" width="90" height="110" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
          {/* Spiral Rings */}
          {[-45, -30, -15, 0, 15, 30, 45].map((y) => (
            <circle key={y} cx="-45" cy={y} r="4" fill="#64748b" />
          ))}
          <line x1="-30" y1="-30" x2="30" y2="-30" stroke="#0284c7" strokeWidth="2" />
          <line x1="-30" y1="-10" x2="30" y2="-10" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="-30" y1="10" x2="30" y2="10" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="-30" y1="30" x2="30" y2="30" stroke="#94a3b8" strokeWidth="1.5" />
        </g>

        {/* Geometry Triangle Ruler & Drafting Pencil */}
        <g transform="translate(145, -20) rotate(-25)">
          <polygon points="0,0 80,0 80,-60" fill="none" stroke="#f59e0b" strokeWidth="3" />
          <polygon points="15,-10 65,-10 65,-45" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
        </g>
      </g>
    </svg>
  );

  // e-2: Academic Knowledge Lecture Auditorium & Podium
  const renderE2 = () => (
    <svg viewBox="0 0 800 450" className={className} xmlns="http://www.w3.org/2000/svg">
      {renderBackdrop('bg-e2', '#022c22', '#064e3b', '#031b26')}
      {renderHeader('Knowledge Dissemination', 'ACADEMIC LECTURE AUDITORIUM', 'Educational Classes, Public Lessons & Seminars')}

      <g transform="translate(400, 245)">
        {/* Tiered Auditorium Desks Outline */}
        <path d="M-240 115 L240 115 L210 50 L-210 50 Z" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.4" />
        
        {/* Presentation Screen Displaying Books & Open Scroll */}
        <rect x="-140" y="-120" width="280" height="130" rx="10" fill="#064e3b" stroke="url(#gold-metal)" strokeWidth="2" />
        <text x="0" y="-85" textAnchor="middle" fill="#fef08a" fontSize="13" fontWeight="bold" letterSpacing="1">ACADEMIC KNOWLEDGE</text>
        <text x="0" y="-55" textAnchor="middle" fill="#ffffff" fontSize="22" fontWeight="bold" fontFamily="Amiri, serif">العلم نور</text>
        <line x1="-80" y1="-35" x2="80" y2="-35" stroke="#10b981" strokeWidth="2" />

        {/* Polished Lecturer Podium with Microphone */}
        <g transform="translate(0, 40)">
          <rect x="-40" y="-30" width="80" height="85" rx="6" fill="#78350f" stroke="#451a03" strokeWidth="2" />
          <rect x="-48" y="-38" width="96" height="14" rx="4" fill="url(#gold-metal)" />
          {/* Gooseneck Microphone */}
          <path d="M-20 -38 Q-20 -70 5 -70 L15 -70" fill="none" stroke="url(#silver-metal)" strokeWidth="4" strokeLinecap="round" />
          <circle cx="18" cy="-70" r="5" fill="#0f172a" />
        </g>
      </g>
    </svg>
  );

  // e-3: Full University Scholarship Mortarboard & Honor Diploma
  const renderE3 = () => (
    <svg viewBox="0 0 800 450" className={className} xmlns="http://www.w3.org/2000/svg">
      {renderBackdrop('bg-e3', '#022c22', '#047857', '#0f172a')}
      {renderHeader('Higher Education', 'UNIVERSITY DEGREE SCHOLARSHIP', 'Full Tuition Grants & Academic Graduation Awards')}

      <g transform="translate(400, 240)">
        {/* Stack of Academic Reference Hardcover Books */}
        <g transform="translate(-40, 70)">
          <rect x="-120" y="0" width="240" height="25" rx="4" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="1.5" />
          <rect x="-110" y="-22" width="220" height="22" rx="4" fill="#047857" stroke="#34d399" strokeWidth="1.5" />
          <rect x="-100" y="-42" width="200" height="20" rx="4" fill="#b45309" stroke="#fcd34d" strokeWidth="1.5" />
        </g>

        {/* Graduation Mortarboard Cap */}
        <g transform="translate(0, -35)">
          {/* Diamond Cap Top Plate */}
          <polygon points="0,-60 140,-20 0,20 -140,-20" fill="#0f172a" stroke="url(#gold-metal)" strokeWidth="3.5" />
          {/* Cap Skull Base */}
          <path d="M-55 -10 C-55 35 55 35 55 -10 Z" fill="#1e293b" stroke="#0f172a" strokeWidth="2" />
          {/* Golden Button & Silk Tassel */}
          <circle cx="0" cy="-20" r="8" fill="url(#gold-foil)" />
          <path d="M0 -20 Q70 -15 80 40" fill="none" stroke="url(#gold-foil)" strokeWidth="4" strokeLinecap="round" />
          <rect x="74" y="40" width="12" height="24" rx="2" fill="url(#gold-foil)" />
        </g>

        {/* Rolled Honor Diploma Scroll with Red Wax Seal */}
        <g transform="translate(130, 20) rotate(-35)">
          <rect x="-15" y="-50" width="30" height="100" rx="6" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
          <rect x="-17" y="-5" width="34" height="12" rx="2" fill="#e11d48" />
          <circle cx="0" cy="1" r="10" fill="#be123c" stroke="#fecdd3" strokeWidth="1" />
        </g>
      </g>
    </svg>
  );

  // e-4: Equipped Classical Islamic Library Bookshelves
  const renderE4 = () => (
    <svg viewBox="0 0 800 450" className={className} xmlns="http://www.w3.org/2000/svg">
      {renderBackdrop('bg-e4', '#022c22', '#0f766e', '#031b26')}
      {renderHeader('Scholarly Research', 'INSTITUTIONAL ISLAMIC LIBRARY', 'Classical Reference Volumes & Scholarly Manuscript Archives')}

      <g transform="translate(400, 240)">
        {/* Ornate Mahogany Bookshelf Unit */}
        <rect x="-190" y="-120" width="380" height="230" rx="8" fill="#451a03" stroke="url(#gold-metal)" strokeWidth="3" />
        {/* Horizontal Shelves */}
        <rect x="-180" y="-45" width="360" height="14" fill="#78350f" stroke="#b45309" strokeWidth="1" />
        <rect x="-180" y="30" width="360" height="14" fill="#78350f" stroke="#b45309" strokeWidth="1" />

        {/* Top Shelf Books */}
        {[-160, -125, -95, -60, -25, 10, 45, 80, 115, 145].map((x, i) => (
          <rect
            key={i}
            x={x}
            y="-115"
            width="26"
            height="70"
            rx="3"
            fill={['#064e3b', '#1e3a8a', '#78350f', '#831843', '#065f46'][i % 5]}
            stroke="url(#gold-metal)"
            strokeWidth="1.2"
          />
        ))}

        {/* Middle Shelf Books */}
        {[-160, -125, -95, -60, -25, 10, 45, 80, 115, 145].map((x, i) => (
          <rect
            key={i}
            x={x}
            y="-40"
            width="26"
            height="70"
            rx="3"
            fill={['#831843', '#064e3b', '#1e3a8a', '#065f46', '#78350f'][i % 5]}
            stroke="url(#gold-metal)"
            strokeWidth="1.2"
          />
        ))}

        {/* Classical Green Reading Desk Lamp */}
        <g transform="translate(0, 75)">
          <rect x="-25" y="25" width="50" height="8" rx="2" fill="url(#gold-metal)" />
          <path d="M0 25 L0 -10" stroke="url(#gold-metal)" strokeWidth="6" strokeLinecap="round" />
          <ellipse cx="0" cy="-10" rx="36" ry="14" fill="#047857" stroke="#10b981" strokeWidth="2" />
        </g>
      </g>
    </svg>
  );

  // e-5: Professional Mass Media & Broadcasting Studio
  const renderE5 = () => (
    <svg viewBox="0 0 800 450" className={className} xmlns="http://www.w3.org/2000/svg">
      {renderBackdrop('bg-e5', '#031b26', '#0f766e', '#022c22')}
      {renderHeader('Media Outreach', 'RADIO & TV BROADCAST STUDIO', 'Educational Mass Broadcasts & Studio Sound Production', '#38bdf8')}

      <g transform="translate(400, 240)">
        {/* Illuminated "ON AIR" Vintage Sign */}
        <g transform="translate(0, -90)">
          <rect x="-70" y="-18" width="140" height="36" rx="6" fill="#0f172a" stroke="#e11d48" strokeWidth="2.5" />
          <circle cx="-50" cy="0" r="5" fill="#e11d48" />
          <text x="5" y="6" textAnchor="middle" fill="#ef4444" fontSize="15" fontWeight="900" letterSpacing="3">ON AIR</text>
        </g>

        {/* Studio Large Diaphragm Condenser Microphone */}
        <g transform="translate(0, 15)">
          {/* Mesh Capsule */}
          <rect x="-30" y="-55" width="60" height="80" rx="25" fill="url(#silver-metal)" stroke="#334155" strokeWidth="3" />
          {/* Acoustic Grille Lines */}
          <line x1="-22" y1="-25" x2="22" y2="-25" stroke="#64748b" strokeWidth="2" />
          <line x1="-22" y1="-10" x2="22" y2="-10" stroke="#64748b" strokeWidth="2" />
          <line x1="-22" y1="5" x2="22" y2="5" stroke="#64748b" strokeWidth="2" />
          {/* Shock Mount Ring */}
          <circle cx="0" cy="-15" r="48" fill="none" stroke="url(#gold-metal)" strokeWidth="3" />
          {/* Heavy Base Stand */}
          <rect x="-6" y="25" width="12" height="60" fill="url(#silver-metal)" />
          <ellipse cx="0" cy="85" rx="55" ry="14" fill="url(#silver-metal)" stroke="#0f172a" strokeWidth="2" />
        </g>

        {/* Stereo Sound Equalizer Waves */}
        {[-140, -110, -80, 80, 110, 140].map((x, i) => (
          <rect
            key={i}
            x={x}
            y={20 - (i % 3) * 25}
            width="14"
            height={50 + (i % 3) * 25}
            rx="4"
            fill="#38bdf8"
            fillOpacity="0.8"
          />
        ))}
      </g>
    </svg>
  );

  // e-6: Open Holy Quran on Carved Wooden Rehal Stand & Tasbih Beads
  const renderE6 = () => (
    <svg viewBox="0 0 800 450" className={className} xmlns="http://www.w3.org/2000/svg">
      {renderBackdrop('bg-e6', '#022c22', '#064e3b', '#021a14')}
      {renderHeader('Islamic Da\'wah & Guidance', 'HOLY QURAN & DA\'WAH OUTREACH', 'Spiritual Guidance, Islamic Guidance & Mentorship')}

      <g transform="translate(400, 245)">
        {/* Carved Wooden Rehal (Folding Book Stand) */}
        <g transform="translate(0, 45)">
          <path d="M-90 45 L0 -25 L90 45" stroke="#78350f" strokeWidth="20" strokeLinecap="round" />
          <path d="M90 45 L0 -25 L-90 45" stroke="#451a03" strokeWidth="16" strokeLinecap="round" />
          {/* Geometric Inlay Ornament on Rehal */}
          <circle cx="0" cy="-25" r="10" fill="url(#gold-metal)" />
        </g>

        {/* Open Holy Quran Book */}
        <g transform="translate(0, -15)">
          {/* Left Page Book Block */}
          <path d="M0 25 C-50 20 -110 5 -150 -25 L-150 -85 C-110 -60 -50 -45 0 -40 Z" fill="#fef3c7" stroke="url(#gold-metal)" strokeWidth="3" />
          {/* Right Page Book Block */}
          <path d="M0 25 C50 20 110 5 150 -25 L150 -85 C110 -60 50 -45 0 -40 Z" fill="#fef3c7" stroke="url(#gold-metal)" strokeWidth="3" />

          {/* Golden Calligraphy Line Representation */}
          <path d="M-130 -50 C-100 -35 -50 -25 -20 -20" fill="none" stroke="#b45309" strokeWidth="2.5" />
          <path d="M-130 -30 C-100 -15 -50 -5 -20 0" fill="none" stroke="#b45309" strokeWidth="2.5" />
          <path d="M20 -20 C50 -25 100 -35 130 -50" fill="none" stroke="#b45309" strokeWidth="2.5" />
          <path d="M20 0 C50 -5 100 -15 130 -30" fill="none" stroke="#b45309" strokeWidth="2.5" />

          {/* Silk Bookmark Ribbon */}
          <path d="M0 -40 Q15 20 -10 65" fill="none" stroke="#e11d48" strokeWidth="6" strokeLinecap="round" />
        </g>

        {/* 33-Bead Prayer Misbaha / Tasbih Beads */}
        <g transform="translate(140, 40)">
          <path d="M-30 -20 C0 30, 60 20, 40 -30" fill="none" stroke="url(#gold-metal)" strokeWidth="4" />
          {[-20, -5, 10, 25, 35].map((bx, i) => (
            <circle key={i} cx={bx} cy={i % 2 === 0 ? 10 : 18} r="6" fill="#10b981" stroke="url(#gold-metal)" strokeWidth="1.5" />
          ))}
        </g>
      </g>
    </svg>
  );

  // e-7: Orphan Welfare & Comprehensive Care Sponsorship Package
  const renderE7 = () => (
    <svg viewBox="0 0 800 450" className={className} xmlns="http://www.w3.org/2000/svg">
      {renderBackdrop('bg-e7', '#022c22', '#047857', '#031e17')}
      {renderHeader('Child Welfare', 'ORPHAN COMPREHENSIVE SPONSORSHIP', 'Living Support, Educational Welfare & Healthcare Care')}

      <g transform="translate(400, 245)">
        {/* Welfare Gift Presentation Box */}
        <g transform="translate(-40, 30)">
          <rect x="-80" y="-45" width="160" height="95" rx="8" fill="#047857" stroke="url(#gold-metal)" strokeWidth="3" />
          {/* Golden Ribbon Bands */}
          <rect x="-12" y="-45" width="24" height="95" fill="url(#gold-foil)" />
          <rect x="-80" y="-10" width="160" height="24" fill="url(#gold-foil)" />
          {/* Satin Ribbon Bow */}
          <ellipse cx="-20" cy="-55" rx="20" ry="12" fill="url(#gold-foil)" stroke="#78350f" strokeWidth="1" />
          <ellipse cx="20" cy="-55" rx="20" ry="12" fill="url(#gold-foil)" stroke="#78350f" strokeWidth="1" />
          <circle cx="0" cy="-52" r="8" fill="url(#gold-metal)" />
        </g>

        {/* Stacked Educational Storybooks Beside Gift */}
        <g transform="translate(95, 45)">
          <rect x="-40" y="-30" width="80" height="18" rx="3" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
          <rect x="-45" y="-12" width="90" height="18" rx="3" fill="#e11d48" stroke="#fecdd3" strokeWidth="1.5" />
          <rect x="-50" y="6" width="100" height="20" rx="3" fill="#b45309" stroke="#fef08a" strokeWidth="1.5" />
        </g>

        {/* Protection Care Shield Crest Overhead */}
        <g transform="translate(0, -65)">
          <path d="M0 -35 L40 -15 C40 25, 0 45, 0 45 C0 45, -40 25, -40 -15 Z" fill="#0f172a" stroke="url(#gold-metal)" strokeWidth="3" />
          <path d="M0 -22 L24 -8 C24 18, 0 32, 0 32 C0 32, -24 18, -24 -8 Z" fill="#047857" />
          {/* Golden Star Inside */}
          <polygon points="0,-12 4,-2 14,-2 6,4 9,14 0,8 -9,14 -6,4 -14,-2 -4,-2" fill="url(#gold-foil)" />
        </g>
      </g>
    </svg>
  );

  // e-8: Eid Ul-Adha Humanitarian Qurban Relief Cartons
  const renderE8 = () => (
    <svg viewBox="0 0 800 450" className={className} xmlns="http://www.w3.org/2000/svg">
      {renderBackdrop('bg-e8', '#022c22', '#14532d', '#052e16')}
      {renderHeader('Humanitarian Nutrition', 'EID UL-ADHA QURBAN RELIEF', 'Hygienic Fresh Meat Packaging & Distribution to Families')}

      <g transform="translate(400, 245)">
        {/* Heavy Duty Corrugated Humanitarian Relief Cartons */}
        <g transform="translate(-60, 20)">
          <rect x="-90" y="-45" width="180" height="100" rx="6" fill="#b45309" stroke="#451a03" strokeWidth="2.5" />
          {/* Packing Sealing Tape */}
          <rect x="-90" y="-8" width="180" height="22" fill="#d97706" fillOpacity="0.8" />
          {/* Charity Relief Stamp Badge */}
          <circle cx="0" cy="-2" r="24" fill="#064e3b" stroke="url(#gold-metal)" strokeWidth="2" />
          <text x="0" y="3" textAnchor="middle" fill="#fef08a" fontSize="10" fontWeight="900">QURBAN</text>
        </g>

        {/* Second Relief Box Stacked */}
        <g transform="translate(70, -20)">
          <rect x="-70" y="-40" width="140" height="90" rx="6" fill="#78350f" stroke="#451a03" strokeWidth="2.5" />
          <rect x="-70" y="-5" width="140" height="20" fill="#d97706" fillOpacity="0.8" />
          <circle cx="0" cy="5" r="18" fill="#064e3b" stroke="url(#gold-metal)" strokeWidth="1.5" />
          <text x="0" y="9" textAnchor="middle" fill="#fef08a" fontSize="8" fontWeight="bold">AMYS AID</text>
        </g>
      </g>
    </svg>
  );

  // e-9: Artisan Livelihood Tailoring Sewing Machine
  const renderE9 = () => (
    <svg viewBox="0 0 800 450" className={className} xmlns="http://www.w3.org/2000/svg">
      {renderBackdrop('bg-e9', '#022c22', '#0f766e', '#031b26')}
      {renderHeader('Self-Reliance Tools', 'TAILORING SEWING MACHINE', 'Vocational Equipment for Household Income Generation')}

      <g transform="translate(400, 245)">
        {/* Timber Workstation Table */}
        <rect x="-220" y="90" width="440" height="26" rx="4" fill="#78350f" stroke="#451a03" strokeWidth="2" />

        {/* Heavy Cast Iron Sewing Machine Body */}
        {/* Base Bed Plate */}
        <rect x="-150" y="60" width="300" height="30" rx="6" fill="#0f172a" stroke="url(#gold-metal)" strokeWidth="2" />
        
        {/* Upright Pillar */}
        <path d="M70 60 L70 -50 C70 -80, -90 -80, -90 -40 L-90 45" fill="none" stroke="#0f172a" strokeWidth="36" strokeLinecap="square" />
        <path d="M70 60 L70 -50 C70 -80, -90 -80, -90 -40 L-90 45" fill="none" stroke="url(#gold-metal)" strokeWidth="2" />

        {/* Hand Wheel / Balance Flywheel */}
        <g transform="translate(100, -20)">
          <ellipse cx="0" cy="0" rx="14" ry="40" fill="url(#silver-metal)" stroke="#334155" strokeWidth="3" />
          <ellipse cx="0" cy="0" rx="6" ry="18" fill="url(#gold-metal)" />
        </g>

        {/* Needle Bar & Presser Foot */}
        <g transform="translate(-90, 30)">
          <rect x="-3" y="-20" width="6" height="35" fill="url(#silver-metal)" />
          <path d="M-8 15 L8 15 L12 18" stroke="url(#silver-metal)" strokeWidth="3" fill="none" />
        </g>

        {/* Thread Spool on Spindle */}
        <g transform="translate(40, -90)">
          <line x1="0" y1="15" x2="0" y2="-15" stroke="url(#silver-metal)" strokeWidth="4" />
          <rect x="-10" y="-12" width="20" height="22" rx="3" fill="#e11d48" stroke="#be123c" strokeWidth="1.5" />
        </g>
      </g>
    </svg>
  );

  // e-10: Ramadan Premium Dates & Traditional Brass Lantern
  const renderE10 = () => (
    <svg viewBox="0 0 800 450" className={className} xmlns="http://www.w3.org/2000/svg">
      {renderBackdrop('bg-e10', '#022c22', '#78350f', '#064e3b')}
      {renderHeader('Sunnah Nutrition', 'BULK PREMIUM DATES DISTRIBUTION', 'Ramadan Date Fruit Packages for Fasting Families')}

      <g transform="translate(400, 245)">
        {/* Table / Mat Platform */}
        <ellipse cx="0" cy="110" rx="210" ry="24" fill="#0f172a" stroke="url(#gold-metal)" strokeWidth="2" />

        {/* Woven Wooden Crate of Golden Dates */}
        <g transform="translate(-40, 35)">
          <rect x="-110" y="-25" width="220" height="75" rx="6" fill="#78350f" stroke="#451a03" strokeWidth="2.5" />
          {/* Crate Slats */}
          <line x1="-110" y1="0" x2="110" y2="0" stroke="#451a03" strokeWidth="2" />
          <line x1="-110" y1="25" x2="110" y2="25" stroke="#451a03" strokeWidth="2" />

          {/* Mounded Pile of Oval Dates Fruit */}
          {[-70, -45, -20, 5, 30, 55, 80].map((dx, i) => (
            <ellipse key={i} cx={dx} cy="-35" rx="14" ry="9" fill="#451a03" stroke="#b45309" strokeWidth="1.5" />
          ))}
          {[-55, -30, -5, 20, 45, 70].map((dx, i) => (
            <ellipse key={i} cx={dx} cy="-48" rx="14" ry="9" fill="#78350f" stroke="#d97706" strokeWidth="1.5" />
          ))}
          {[-40, -15, 10, 35].map((dx, i) => (
            <ellipse key={i} cx={dx} cy="-60" rx="14" ry="9" fill="#b45309" stroke="#f59e0b" strokeWidth="1.5" />
          ))}
        </g>

        {/* Ornate Ramadan Brass Fanoos Lantern */}
        <g transform="translate(130, -15)">
          {/* Top Hanging Ring & Cap */}
          <circle cx="0" cy="-75" r="10" fill="none" stroke="url(#gold-metal)" strokeWidth="3" />
          <polygon points="-24,-50 24,-50 0,-70" fill="url(#gold-metal)" />
          {/* Glass Lantern Body */}
          <polygon points="-24,-50 24,-50 18,30 -18,30" fill="#fef08a" fillOpacity="0.85" stroke="url(#gold-metal)" strokeWidth="2" />
          {/* Internal Glowing Candle Flame */}
          <ellipse cx="0" cy="5" rx="7" ry="14" fill="#f97316" />
          <ellipse cx="0" cy="7" rx="4" ry="8" fill="#fef08a" />
          {/* Base */}
          <rect x="-26" y="30" width="52" height="14" rx="3" fill="url(#gold-metal)" />
        </g>
      </g>
    </svg>
  );

  // e-11: Festive Eid Clothing Sets & Traditional Apparel
  const renderE11 = () => (
    <svg viewBox="0 0 800 450" className={className} xmlns="http://www.w3.org/2000/svg">
      {renderBackdrop('bg-e11', '#022c22', '#064e3b', '#0f172a')}
      {renderHeader('Eid Joy & Dignity', 'FESTIVE EID ATTIRE PACKAGES', 'New Festive Celebration Garments for Children')}

      <g transform="translate(400, 245)">
        {/* Stack of Folded Festive Garments */}
        <g transform="translate(0, 40)">
          {/* Bottom Folded Garment */}
          <rect x="-130" y="20" width="260" height="30" rx="8" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="2" />
          {/* Middle Folded Garment */}
          <rect x="-120" y="-8" width="240" height="28" rx="8" fill="#047857" stroke="#34d399" strokeWidth="2" />
          {/* Top Folded Festive Kurta/Thobe */}
          <rect x="-110" y="-36" width="220" height="28" rx="8" fill="#ffffff" stroke="url(#gold-metal)" strokeWidth="2.5" />

          {/* Embroidered Collar Detailing on Top Garment */}
          <path d="M-30 -36 L0 -15 L30 -36" fill="none" stroke="url(#gold-foil)" strokeWidth="3" />
          <circle cx="0" cy="-24" r="3" fill="url(#gold-foil)" />
          <circle cx="0" cy="-16" r="3" fill="url(#gold-foil)" />
        </g>

        {/* Decorative Golden Ribbon Bow tied around package */}
        <g transform="translate(0, -25)">
          <ellipse cx="-25" cy="-25" rx="22" ry="14" fill="url(#gold-foil)" stroke="#78350f" strokeWidth="1" />
          <ellipse cx="25" cy="-25" rx="22" ry="14" fill="url(#gold-foil)" stroke="#78350f" strokeWidth="1" />
          <circle cx="0" cy="-22" r="8" fill="url(#gold-metal)" />
        </g>

        {/* Traditional Crystal Perfume / Attar Bottle */}
        <g transform="translate(150, 0)">
          <rect x="-15" y="-10" width="30" height="40" rx="6" fill="#fef08a" fillOpacity="0.7" stroke="url(#gold-metal)" strokeWidth="2" />
          <circle cx="0" cy="-18" r="8" fill="url(#gold-metal)" />
        </g>
      </g>
    </svg>
  );

  // e-12: Transparent Zakat Ledger, Document Scroll & Minted Coins
  const renderE12 = () => (
    <svg viewBox="0 0 800 450" className={className} xmlns="http://www.w3.org/2000/svg">
      {renderBackdrop('bg-e12', '#022c22', '#047857', '#031b26')}
      {renderHeader('Shariah Governance', 'DIRECT ZAKAT WELFARE PROGRAM', 'Direct Charitable Aid & Audited Beneficiary Ledger')}

      <g transform="translate(400, 245)">
        {/* Large Bound Financial Ledger Book */}
        <g transform="translate(-50, 20)">
          <rect x="-110" y="-60" width="220" height="125" rx="8" fill="#042f2e" stroke="url(#gold-metal)" strokeWidth="3" />
          <rect x="-95" y="-45" width="190" height="95" rx="4" fill="#ffffff" />
          {/* Ledger Table Rows */}
          <line x1="-80" y1="-25" x2="80" y2="-25" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="-80" y1="-5" x2="80" y2="-5" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="-80" y1="15" x2="80" y2="15" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="-80" y1="35" x2="80" y2="35" stroke="#cbd5e1" strokeWidth="2" />
          {/* Gold Embossed Shariah Audit Seal */}
          <circle cx="60" cy="15" r="18" fill="url(#gold-foil)" stroke="#78350f" strokeWidth="1.5" />
        </g>

        {/* Stacks of Minted Golden Coins */}
        <g transform="translate(110, 45)">
          {[0, 10, 20, 30, 40].map((cy) => (
            <ellipse key={cy} cx="0" cy={-cy} rx="30" ry="10" fill="url(#gold-metal)" stroke="#78350f" strokeWidth="1.5" />
          ))}
        </g>

        {/* Classical Balance Scales of Justice */}
        <g transform="translate(80, -65)">
          <line x1="0" y1="0" x2="0" y2="60" stroke="url(#gold-metal)" strokeWidth="4" />
          <line x1="-40" y1="15" x2="40" y2="15" stroke="url(#gold-metal)" strokeWidth="3" />
          <path d="M-40 15 L-55 45 L-25 45 Z" fill="none" stroke="url(#gold-metal)" strokeWidth="1.5" />
          <path d="M40 15 L25 45 L55 45 Z" fill="none" stroke="url(#gold-metal)" strokeWidth="1.5" />
        </g>
      </g>
    </svg>
  );

  // e-13: Grand Ramadan Iftar Banquet & Glowing Lanterns
  const renderE13 = () => (
    <svg viewBox="0 0 800 450" className={className} xmlns="http://www.w3.org/2000/svg">
      {renderBackdrop('bg-e13', '#022c22', '#064e3b', '#031e17')}
      {renderHeader('Ramadan Hospitality', 'COMMUNAL IFTAR BANQUET', 'Feeding Fasting Devotees & Travelers at Masjids Islandwide')}

      <g transform="translate(400, 245)">
        {/* Long Banquet Table with Crisp Green Tablecloth */}
        <ellipse cx="0" cy="110" rx="230" ry="25" fill="#0f172a" stroke="url(#gold-metal)" strokeWidth="2" />
        <path d="M-200 45 C-200 85, 200 85, 200 45 L180 110 C180 145, -180 145, -180 110 Z" fill="#064e3b" stroke="#0f766e" strokeWidth="2" />
        <ellipse cx="0" cy="45" rx="200" ry="20" fill="#047857" stroke="url(#gold-metal)" strokeWidth="2.5" />

        {/* Tiered Banquet Fruit & Refreshment Platters */}
        <g transform="translate(0, 20)">
          <ellipse cx="0" cy="0" rx="60" ry="14" fill="url(#silver-metal)" stroke="#334155" strokeWidth="2" />
          <ellipse cx="0" cy="-25" rx="42" ry="10" fill="url(#silver-metal)" stroke="#334155" strokeWidth="2" />
          {/* Dates & Fruits on Platter */}
          <circle cx="-15" cy="-28" r="7" fill="#b45309" />
          <circle cx="0" cy="-30" r="8" fill="#e11d48" />
          <circle cx="15" cy="-28" r="7" fill="#f59e0b" />
        </g>

        {/* Elegant Brass Water Carafes / Pitchers */}
        <g transform="translate(-100, 0)">
          <ellipse cx="0" cy="25" rx="22" ry="8" fill="url(#gold-metal)" stroke="#78350f" strokeWidth="1.5" />
          <path d="M-18 25 Q-25 -10 0 -25 Q25 -10 18 25 Z" fill="url(#gold-metal)" stroke="#78350f" strokeWidth="1.5" />
          {/* Spout & Handle */}
          <path d="M0 -25 L15 -35" stroke="url(#gold-metal)" strokeWidth="4" strokeLinecap="round" />
          <path d="M-18 0 C-35 0 -35 20 -18 20" fill="none" stroke="url(#gold-metal)" strokeWidth="4" />
        </g>

        {/* Glowing Brass Ramadan Lantern (Center Above Table) */}
        <g transform="translate(100, -25)">
          <polygon points="-18,-35 18,-35 12,20 -12,20" fill="#fef08a" fillOpacity="0.9" stroke="url(#gold-metal)" strokeWidth="2" />
          <ellipse cx="0" cy="0" rx="5" ry="10" fill="#f97316" />
          <rect x="-20" y="20" width="40" height="10" rx="2" fill="url(#gold-metal)" />
        </g>

        {/* Crescent Moon & Stars in Night Sky */}
        <g transform="translate(-150, -85)">
          <path d="M0 -30 A 24 24 0 1 0 24 -6 A 18 18 0 1 1 0 -30 Z" fill="url(#gold-foil)" />
          <polygon points="18,-24 20,-18 26,-18 21,-14 23,-8 18,-11 13,-8 15,-14 10,-18 16,-18" fill="#fef08a" />
        </g>
      </g>
    </svg>
  );

  // Dispatch table
  switch (id) {
    case 'h-1':
      return renderH1();
    case 'h-2':
      return renderH2();
    case 'h-3':
      return renderH3();
    case 'h-4':
      return renderH4();
    case 'h-5':
      return renderH5();
    case 'w-1':
      return renderW1();
    case 'w-2':
      return renderW2();
    case 'w-3':
      return renderW3();
    case 'w-4':
      return renderW4();
    case 'w-5':
      return renderW5();
    case 'w-6':
      return renderW6();
    case 'e-1':
      return renderE1();
    case 'e-2':
      return renderE2();
    case 'e-3':
      return renderE3();
    case 'e-4':
      return renderE4();
    case 'e-5':
      return renderE5();
    case 'e-6':
      return renderE6();
    case 'e-7':
      return renderE7();
    case 'e-8':
      return renderE8();
    case 'e-9':
      return renderE9();
    case 'e-10':
      return renderE10();
    case 'e-11':
      return renderE11();
    case 'e-12':
      return renderE12();
    case 'e-13':
      return renderE13();
    default:
      return renderW1();
  }
};
