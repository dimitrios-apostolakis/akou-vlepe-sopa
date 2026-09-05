import React, { useEffect } from 'react';
import { X, Download, ExternalLink, BookOpen, AlertCircle } from 'lucide-react';
import { BOOK_META } from '../data/bookData';

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PdfModal: React.FC<PdfModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-6xl h-[92vh] bg-slate-900 border border-slate-700 rounded-2xl flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-sm sm:text-base text-white truncate">
                «{BOOK_META.title}» — Πλήρες Βιβλίο
              </h3>
              <p className="text-[11px] text-slate-400 font-mono">
                196 Σελίδες • Μορφή PDF • 1.5 MB
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href="/book.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              title="Άνοιγμα σε νέα καρτέλα"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Νέα Καρτέλα</span>
            </a>
            <a
              href="/book.pdf"
              download="akou-vlepe-sopa.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors"
              title="Λήψη του αρχείου"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Λήψη</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1"
              aria-label="Κλείσιμο"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Informational Sub-header */}
        <div className="px-4 py-2 bg-amber-500/10 border-b border-amber-500/20 flex items-center justify-between text-xs text-amber-300 font-mono">
          <div className="flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Κεφάλαια: Εισαγωγή (σελ. 1) | Α: Άκου (σελ. 8) | Β: Βλέπε (σελ. 55) | Γ: Σώπα (σελ. 179) | Επίλογος (σελ. 189)</span>
          </div>
        </div>

        {/* Embedded PDF Viewer Iframe */}
        <div className="flex-1 w-full bg-slate-950 relative">
          <iframe
            src="/book.pdf#toolbar=1&navpanes=1"
            title="Προβολέας Βιβλίου PDF"
            className="w-full h-full border-0"
          />
        </div>

      </div>
    </div>
  );
};
