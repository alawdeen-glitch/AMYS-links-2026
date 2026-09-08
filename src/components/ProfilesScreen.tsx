import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  CheckCircle, 
  Award, 
  BookOpen, 
  ExternalLink,
  Sparkles,
  X
} from 'lucide-react';
import { HeaderNav } from './HeaderNav';

interface ProfilesScreenProps {
  onBack: () => void;
}

export const ProfilesScreen: React.FC<ProfilesScreenProps> = ({ onBack }) => {
  const [activePreview, setActivePreview] = useState<'english' | 'arabic' | null>(null);

  return (
    <div className="w-full flex flex-col min-h-screen pb-8">
      <HeaderNav title="AMYS Profile" onBack={onBack} />

      <main className="px-4 pt-2 flex flex-col gap-4">
        <div className="text-center px-2">
          <p className="text-xs text-emerald-200/80">
            Download our official organizational profile detailing 28+ years of dedicated humanitarian missions.
          </p>
        </div>

        {/* 1. English Profile Card */}
        <div className="w-full rounded-3xl glass-panel p-5 border border-emerald-500/25 shadow-xl relative overflow-hidden group">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-900/60 border border-emerald-400/30 flex items-center justify-center text-amber-400 shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                <FileText className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-800/40 text-emerald-300 font-semibold border border-emerald-600/30">
                  English Edition
                </span>
                <h2 className="text-base font-bold text-white mt-1 leading-snug">
                  AMYS Profile (English)
                </h2>
                <p className="text-xs text-emerald-200/80 mt-0.5">
                  Comprehensive organizational profile & history
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-emerald-950/50 p-3 my-3 border border-emerald-800/30 text-xs text-emerald-100/90 space-y-1.5">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Full governance structure, board & legal audit</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Project statistics across all 9 provinces in Sri Lanka</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Official partnership guidelines & international accreditation</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 pt-1">
            {/* Direct Download Button */}
            <a
              id="download-profile-english"
              href="/docs/AMYS English Profile - 2025.pdf"
              download="AMYS Profile (English).pdf"
              className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 active:scale-95 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download English PDF</span>
            </a>

            {/* Quick Preview Button */}
            <button
              id="preview-profile-english"
              onClick={() => setActivePreview('english')}
              className="py-3 px-3.5 rounded-2xl bg-emerald-900/50 hover:bg-emerald-800/60 active:scale-95 text-emerald-200 hover:text-white border border-emerald-500/30 text-xs font-semibold flex items-center gap-1.5 transition-all"
              title="Quick Summary"
            >
              <Eye className="w-4 h-4" />
              <span>Preview</span>
            </button>
          </div>
        </div>

        {/* 2. Arabic Profile Card */}
        <div className="w-full rounded-3xl glass-gold-hero p-5 border border-amber-500/35 shadow-2xl relative overflow-hidden group">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                <Award className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="text-right w-full">
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-bold border border-amber-400/30">
                  النسخة الرسمية المعتمدة
                </span>
                <h2 className="font-amiri text-lg font-bold text-amber-300 mt-1 glow-gold-text">
                  الملف التعريفي للجمعية (عربي)
                </h2>
                <p className="font-amiri text-xs text-amber-100/90 mt-0.5">
                  ملف تعريفي شامل ومفصل عن أعمال وإنجازات الجمعية
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-emerald-950/70 p-3 my-3 border border-amber-500/25 text-right space-y-1.5 font-amiri text-xs text-amber-100/90">
            <div className="flex items-center justify-end gap-2">
              <span>سجل تاريخي لإنجازات الجمعية الممتدة منذ عام 1997م</span>
              <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            </div>
            <div className="flex items-center justify-end gap-2">
              <span>بيانات موثقة حول مخيمات العيون، حفر الآبار، وبناء المساجد</span>
              <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            </div>
            <div className="flex items-center justify-end gap-2">
              <span>خطط ومشاريع الرعاية الاجتماعية وكفالة الأيتام</span>
              <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            </div>
          </div>

          <div className="flex items-center gap-2.5 pt-1">
            {/* Direct Download Button */}
            <a
              id="download-profile-arabic"
              href="/docs/AMYS Arabic Profile - 2025.pdf"
              download="AMYS Profile (Arabic).pdf"
              className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-400 active:scale-95 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span className="font-amiri font-bold text-sm">تحميل الملف التعريفي (PDF)</span>
            </a>

            {/* Quick Preview Button */}
            <button
              id="preview-profile-arabic"
              onClick={() => setActivePreview('arabic')}
              className="py-3 px-3.5 rounded-2xl bg-emerald-950/60 hover:bg-emerald-900/70 active:scale-95 text-amber-300 hover:text-white border border-amber-400/30 text-xs font-semibold flex items-center gap-1.5 transition-all"
              title="عرض الملخص"
            >
              <Eye className="w-4 h-4" />
              <span>معاينة</span>
            </button>
          </div>
        </div>

        {/* Profile Highlights Summary */}
        <div className="p-4 rounded-3xl glass-panel border border-emerald-500/20 text-xs text-emerald-200/90 space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Document Verification</span>
          </div>
          <p className="leading-relaxed text-[11px] sm:text-xs">
            Both official profile editions are certified by the Board of Trustees of AMYS. For physical print copies or tailored institutional proposals, contact the General Secretariat at <span className="text-white font-semibold">amyslanka@gmail.com</span>.
          </p>
        </div>
      </main>

      {/* Preview Modal */}
      {activePreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-sm rounded-3xl glass-panel border border-amber-400/40 p-5 shadow-2xl relative">
            <button
              onClick={() => setActivePreview(null)}
              className="absolute top-4 right-4 p-1.5 rounded-xl bg-emerald-950/60 text-emerald-300 hover:text-white border border-emerald-500/30"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-5 h-5 text-amber-400" />
              <h3 className="font-bold text-white text-sm">
                {activePreview === 'english' ? 'AMYS Profile Overview' : 'ملخص الملف التعريفي'}
              </h3>
            </div>

            <div className="space-y-2.5 text-xs text-emerald-100/90 py-2">
              <p className="leading-relaxed">
                {activePreview === 'english'
                  ? 'The Association of Muslim Youth of Sailan (AMYS) has been pioneering sustainable health, education, water infrastructure, and orphan relief across Sri Lanka since 1997.'
                  : 'تعتبر جمعية شباب مسلمي سيلان من المنظمات الرائدة في العمل الخيري والتنموي في سريلانكا منذ عام 1997م، حيث تركز على مشاريع مكافحة العمى، الإغاثة، الآبار، ورعاية الأيتام.'}
              </p>
              
              <div className="p-3 rounded-xl bg-emerald-950/70 border border-emerald-700/30 text-[11px] space-y-1 text-emerald-200">
                <p>• <strong>Registration:</strong> NGO L-38904</p>
                <p>• <strong>Scope:</strong> Island-wide across 25 administrative districts</p>
                <p>• <strong>Audit:</strong> Annually verified by certified chartered accountants</p>
              </div>
            </div>

            <div className="pt-3 border-t border-emerald-800/40 flex gap-2">
              <a
                href={activePreview === 'english' ? '/docs/AMYS English Profile - 2025.pdf' : '/docs/AMYS Arabic Profile - 2025.pdf'}
                download
                className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Full PDF Document</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
