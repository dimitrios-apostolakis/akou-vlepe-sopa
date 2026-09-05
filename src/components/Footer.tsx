import React from 'react';
import { BOOK_META } from '../data/bookData';
import { BookOpen, Download, ArrowUp, Heart } from 'lucide-react';

interface FooterProps {
  onOpenPdf: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPdf }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand and Tagline */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 font-serif font-bold text-base">
                Α
              </div>
              <span className="font-serif font-bold text-lg text-white">
                «{BOOK_META.title}»
              </span>
            </div>
            <p className="text-slate-400 font-light text-xs sm:text-sm max-w-md leading-relaxed">
              Ένα σύγχρονο ψυχολογικό θρίλερ και υπαρξιακό δράμα που εξερευνά τα όρια της σιωπής, της ενοχής και της λύτρωσης. 
              Μια ιστορία για όσους έπεσαν στα σκοτάδια τους αλλά βρήκαν τη δύναμη να κρατηθούν από ένα χέρι.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenPdf}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-amber-500/10 text-amber-300 border border-amber-500/30 hover:bg-amber-500/20"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Ανάγνωση PDF</span>
              </button>
              <a
                href="/book.pdf"
                download="akou-vlepe-sopa.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Λήψη (1.5 MB)</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-300">
              Περιήγηση
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#overview" className="hover:text-amber-300 transition-colors">Σύνοψη & Πυλώνες</a></li>
              <li><a href="#chapters" className="hover:text-amber-300 transition-colors">Τα 3 Κεφάλαια</a></li>
              <li><a href="#characters" className="hover:text-amber-300 transition-colors">Ψυχογραφικά Προφίλ</a></li>
              <li><a href="#investigation" className="hover:text-amber-300 transition-colors">Ο Πίνακας των Στοιχείων</a></li>
              <li><a href="#reader" className="hover:text-amber-300 transition-colors">Αναγνωστήριο Αποσπασμάτων</a></li>
              <li><a href="#debate" className="hover:text-amber-300 transition-colors">Το Τελικό Ερώτημα</a></li>
            </ul>
          </div>

          {/* Book Metadata */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-300">
              Στοιχεία Έκδοσης
            </div>
            <div className="space-y-1.5 text-xs text-slate-400 font-mono">
              <div>Τίτλος: Άκου… Βλέπε… Σώπα</div>
              <div>Σελίδες: 196 (Πλήρες Χειρόγραφο)</div>
              <div>Είδος: Ψυχολογικό Θρίλερ</div>
              <div>Γλώσσα: Ελληνικά</div>
              <div>Έτος: 2026</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <span>Δημιουργήθηκε με σεβασμό στο πρωτότυπο κείμενο</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500/20" />
            <span>• Όλα τα δικαιώματα διατηρούνται</span>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-amber-300 transition-colors text-slate-400"
          >
            <span>Επιστροφή στην κορυφή</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
