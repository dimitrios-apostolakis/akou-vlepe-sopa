import React from 'react';
import { BookOpen, Download, ArrowRight, Activity, ShieldAlert, Sparkles } from 'lucide-react';
import { BOOK_META } from '../data/bookData';

interface HeroProps {
  onOpenPdf: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPdf }) => {
  return (
    <section className="relative min-h-[90vh] pt-24 pb-16 flex items-center justify-center overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-red-600/10 rounded-full blur-[130px]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293712_1px,transparent_1px),linear-gradient(to_bottom,#1f293712_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Hospital ECG Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/30 text-amber-300 text-xs font-mono shadow-[0_0_15px_rgba(234,179,8,0.15)] animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <Activity className="w-3.5 h-3.5" />
              <span>ΔΩΜΑΤΙΟ 312 • ΜΕΤΑΙΧΜΙΟ ΣΥΝΕΙΔΗΣΗΣ</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">196 ΣΕΛΙΔΕΣ</span>
            </div>

            {/* Main Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-serif font-bold tracking-tight text-white">
                «Άκου… <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Βλέπε…
                </span>{' '}
                Σώπα»
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Ένα συναρπαστικό ψυχολογικό θρίλερ και υπαρξιακό δράμα για την ενοχή, 
                τη σιωπή που συντρίβει και τη λυτρωτική δύναμη της άνευ όρων αγάπης.
              </p>
            </div>

            {/* Tagline Box */}
            <div className="p-4 sm:p-5 rounded-xl glass-card border-l-4 border-amber-500 max-w-2xl mx-auto lg:mx-0 text-left">
              <p className="text-sm sm:text-base font-serif italic text-amber-100/90 leading-relaxed">
                {BOOK_META.mainTagline}
              </p>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap gap-4 justify-center lg:justify-start">
              <button
                onClick={onOpenPdf}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold shadow-[0_0_25px_rgba(234,179,8,0.35)] hover:shadow-[0_0_35px_rgba(234,179,8,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <BookOpen className="w-4 h-4" />
                <span>Διαβάστε το Βιβλίο (PDF)</span>
              </button>

              <a
                href="#chapters"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700 hover:border-slate-600 transition-all"
              >
                <span>Τα 3 Κεφάλαια</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/book.pdf"
                download="akou-vlepe-sopa.pdf"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-slate-900/50 hover:bg-slate-800/50 border border-slate-800 hover:border-slate-700 transition-all"
                title="Άμεση λήψη του πλήρους βιβλίου"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span className="hidden sm:inline">Λήψη PDF</span>
              </a>
            </div>

            {/* Feature bullets */}
            <div className="pt-4 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/60">
                <div className="flex items-center gap-1.5 text-xs text-amber-400 font-mono">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>3 Μέρη</span>
                </div>
                <div className="text-xs text-slate-300 mt-1">Άκου • Βλέπε • Σώπα</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/60">
                <div className="flex items-center gap-1.5 text-xs text-amber-400 font-mono">
                  <Activity className="w-3.5 h-3.5" />
                  <span>196 Σελίδες</span>
                </div>
                <div className="text-xs text-slate-300 mt-1">Πλήρες κείμενο</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/60">
                <div className="flex items-center gap-1.5 text-xs text-amber-400 font-mono">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Αθήνα & Πειραιάς</span>
                </div>
                <div className="text-xs text-slate-300 mt-1">Αυθεντική ατμόσφαιρα</div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Book Presentation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              {/* Glow aura behind cover */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-600/30 via-red-500/20 to-blue-600/30 rounded-2xl blur-2xl group-hover:blur-3xl opacity-70 group-hover:opacity-100 transition-all duration-700" />

              {/* Book Container with perspective */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-2xl bg-slate-950 transition-all duration-500 group-hover:scale-[1.02] group-hover:border-amber-400/80">
                <img
                  src={BOOK_META.coverImage}
                  alt="Εξώφυλλο του βιβλίου Άκου Βλέπε Σώπα"
                  className="w-full h-auto object-cover"
                />

                {/* Cover Overlay Info Pill */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-5 text-center space-y-2">
                  <span className="inline-block text-[11px] font-mono uppercase tracking-widest text-amber-300 bg-amber-500/20 px-2.5 py-1 rounded-full border border-amber-500/30">
                    Επίσημο Εξώφυλλο • 2026
                  </span>
                  <p className="text-xs text-slate-400 font-light">
                    Περιλαμβάνει το πλήρες χειρόγραφο σε ηλεκτρονική μορφή
                  </p>
                  <button
                    onClick={onOpenPdf}
                    className="w-full py-2 px-3 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-500/40 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Άνοιγμα σε Πλήρη Οθόνη</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
