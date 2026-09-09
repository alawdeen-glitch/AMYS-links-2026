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

          <div className="grid grid-cols-2 gap-2.5 pt-1">
            {/* View (Preview without downloading) */}
            <button
              id="view-profile-english"
              onClick={() => setActivePreview('english')}
              className="py-2.5 px-3 rounded-2xl bg-emerald-900/60 hover:bg-emerald-800/80 active:scale-95 text-emerald-200 hover:text-white border border-emerald-500/40 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
              title="View document without downloading"
            >
              <Eye className="w-4 h-4 text-emerald-400" />
              <span>View</span>
            </button>

            {/* Direct Download */}
            <a
              id="download-profile-english"
              href="/docs/AMYS English Profile - 2025.pdf"
              download="AMYS Profile (English).pdf"
              className="py-2.5 px-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 active:scale-95 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
              title="Download file"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download</span>
            </a>
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

          <div className="grid grid-cols-2 gap-2.5 pt-1">
            {/* View (Preview without downloading) */}
            <button
              id="view-profile-arabic"
              onClick={() => setActivePreview('arabic')}
              className="py-2.5 px-3 rounded-2xl bg-emerald-950/70 hover:bg-emerald-900/80 active:scale-95 text-amber-300 hover:text-white border border-amber-400/30 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
              title="معاينة الملف دون تحميل"
            >
              <Eye className="w-4 h-4 text-amber-400" />
              <span>معاينة (View)</span>
            </button>

            {/* Direct Download */}
            <a
              id="download-profile-arabic"
              href="/docs/AMYS Arabic Profile - 2025.pdf"
              download="AMYS Profile (Arabic).pdf"
              className="py-2.5 px-3 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-400 active:scale-95 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 transition-all cursor-pointer"
              title="تحميل الملف"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span className="font-amiri font-bold text-sm">تحميل (Download)</span>
            </a>
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

      {/* In-App Document Preview Modal (Previews without downloading) */}
      {activePreview && (
        <div 
          id="modal-profile-preview"
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4"
          onClick={() => setActivePreview(null)}
        >
          <div 
            className="w-full max-w-2xl max-h-[92vh] rounded-3xl glass-panel border border-amber-400/40 bg-slate-950/95 flex flex-col shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-3.5 sm:p-4 border-b border-emerald-800/40 flex items-start justify-between gap-3 bg-emerald-950/70">
              <div className="flex items-start gap-2.5 flex-1 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0 mt-0.5 shadow-sm">
                  <FileText className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-bold border border-amber-400/30">
                      {activePreview === 'english' ? 'English' : 'عربي'}
                    </span>
                    <span className="text-[10px] text-emerald-300 bg-emerald-900/50 px-2 py-0.5 rounded-full border border-emerald-700/40">
                      Official Profile
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white mt-1 leading-snug">
                    {activePreview === 'english' ? 'AMYS Profile (English)' : 'الملف التعريفي للجمعية (عربي)'}
                  </h3>
                  <p className="text-xs text-emerald-200/80 mt-0.5">
                    {activePreview === 'english' ? 'Association of Muslim Youth of Sailan' : 'جمعية شباب مسلمي سيلان'}
                  </p>
                </div>
              </div>

              <button
                id="btn-close-profile-preview"
                onClick={() => setActivePreview(null)}
                className="p-1.5 rounded-xl bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 hover:text-white border border-emerald-500/30 transition-all shrink-0 cursor-pointer"
                aria-label="Close Preview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Embedded PDF Preview Window */}
            <div className="p-3 sm:p-4 flex-1 flex flex-col min-h-0 bg-slate-900/60">
              <div className="relative w-full h-[52vh] sm:h-[58vh] rounded-2xl overflow-hidden border border-emerald-500/25 bg-white shadow-inner flex flex-col">
                <iframe
                  src={`/docs/${encodeURIComponent(activePreview === 'english' ? 'AMYS English Profile - 2025.pdf' : 'AMYS Arabic Profile - 2025.pdf')}#toolbar=0`}
                  title={activePreview === 'english' ? 'AMYS English Profile' : 'AMYS Arabic Profile'}
                  className="w-full h-full border-none"
                />
              </div>
              <p className="text-[11px] text-emerald-200/70 text-center mt-2">
                Document preview without downloading.
              </p>
            </div>

            {/* Modal Actions Footer */}
            <div className="p-3.5 sm:p-4 border-t border-emerald-800/40 bg-emerald-950/70 flex items-center justify-between gap-2 flex-wrap">
              <a
                id="btn-profile-preview-new-tab"
                href={`/docs/${encodeURIComponent(activePreview === 'english' ? 'AMYS English Profile - 2025.pdf' : 'AMYS Arabic Profile - 2025.pdf')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 rounded-xl bg-emerald-900/70 hover:bg-emerald-800 active:scale-95 text-emerald-200 hover:text-white text-xs font-semibold flex items-center gap-1.5 border border-emerald-600/30 transition-all cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open in Tab</span>
              </a>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActivePreview(null)}
                  className="py-2 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all cursor-pointer"
                >
                  Close
                </button>

                <a
                  id="btn-profile-modal-download"
                  href={`/docs/${encodeURIComponent(activePreview === 'english' ? 'AMYS English Profile - 2025.pdf' : 'AMYS Arabic Profile - 2025.pdf')}`}
                  download={activePreview === 'english' ? 'AMYS Profile (English).pdf' : 'AMYS Profile (Arabic).pdf'}
                  className="py-2 px-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 active:scale-95 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-amber-500/20 transition-all cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
