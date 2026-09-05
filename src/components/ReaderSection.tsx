import React, { useState } from 'react';
import { EXCERPTS, Excerpt } from '../data/bookData';
import { BookOpen, Type, Sparkles, Download } from 'lucide-react';

interface ReaderSectionProps {
  onOpenPdf: () => void;
}

export const ReaderSection: React.FC<ReaderSectionProps> = ({ onOpenPdf }) => {
  const [activeExcerptId, setActiveExcerptId] = useState<string>(EXCERPTS[0].id);
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');
  const [useSerif, setUseSerif] = useState<boolean>(true);

  const activeExcerpt: Excerpt = EXCERPTS.find((e) => e.id === activeExcerptId) || EXCERPTS[0];

  const fontSizeClasses = {
    sm: 'text-sm sm:text-base leading-relaxed',
    base: 'text-base sm:text-lg leading-relaxed',
    lg: 'text-lg sm:text-xl leading-loose',
  };

  return (
    <section id="reader" className="py-24 bg-slate-950 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300 uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Αναγνωστήριο Αποσπασμάτων</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Διαβάστε Χαρακτηριστικές Σελίδες
          </h2>
          <p className="text-slate-400 text-base font-light">
            Επιλεγμένα αποσπάσματα από το πρωτότυπο κείμενο του βιβλίου.
          </p>
        </div>

        {/* Excerpt Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {EXCERPTS.map((exc) => {
            const isActive = exc.id === activeExcerptId;
            return (
              <button
                key={exc.id}
                onClick={() => setActiveExcerptId(exc.id)}
                className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-serif transition-all border ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-[0_0_15px_rgba(234,179,8,0.25)]'
                    : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                {exc.title}
              </button>
            );
          })}
        </div>

        {/* Reading Canvas Container */}
        <div className="glass-panel rounded-3xl p-6 sm:p-12 border border-slate-800 shadow-2xl relative">
          
          {/* Reader Top Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-800/80 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <span className="text-amber-400 font-semibold">{activeExcerpt.section}</span>
            </div>

            {/* Typography Controls */}
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-slate-900 rounded-lg p-1 border border-slate-800">
                <button
                  onClick={() => setUseSerif(!useSerif)}
                  className={`px-2.5 py-1 rounded text-xs transition-colors flex items-center gap-1 ${
                    useSerif ? 'bg-amber-500/20 text-amber-300 font-serif' : 'text-slate-400 font-sans'
                  }`}
                  title="Εναλλαγή γραμματοσειράς"
                >
                  <Type className="w-3 h-3" />
                  <span>{useSerif ? 'Playfair' : 'Inter'}</span>
                </button>
              </div>

              <div className="flex items-center bg-slate-900 rounded-lg p-1 border border-slate-800 gap-1">
                <button
                  onClick={() => setFontSize('sm')}
                  className={`px-2 py-0.5 rounded text-xs ${fontSize === 'sm' ? 'bg-amber-500/20 text-amber-300' : 'text-slate-400'}`}
                >
                  A-
                </button>
                <button
                  onClick={() => setFontSize('base')}
                  className={`px-2 py-0.5 rounded text-xs ${fontSize === 'base' ? 'bg-amber-500/20 text-amber-300' : 'text-slate-400'}`}
                >
                  A
                </button>
                <button
                  onClick={() => setFontSize('lg')}
                  className={`px-2 py-0.5 rounded text-xs ${fontSize === 'lg' ? 'bg-amber-500/20 text-amber-300' : 'text-slate-400'}`}
                >
                  A+
                </button>
              </div>
            </div>
          </div>

          {/* Lead Quote */}
          <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20">
            <p className="text-sm sm:text-base font-serif italic text-amber-200 text-center">
              {activeExcerpt.lead}
            </p>
          </div>

          {/* Text Content */}
          <div className={`space-y-6 text-slate-200 font-light ${useSerif ? 'font-serif' : 'font-sans'} ${fontSizeClasses[fontSize]}`}>
            {activeExcerpt.content.map((paragraph, idx) => (
              <p key={idx} className="indent-6 sm:indent-8">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Editorial Reflection */}
          <div className="mt-10 pt-6 border-t border-slate-800/80 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-400 font-sans italic leading-relaxed">
              <strong className="text-slate-300 not-italic">Σημείωμα Ανάγνωσης: </strong>
              {activeExcerpt.reflection}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap gap-4 justify-between items-center">
            <div className="text-xs font-mono text-slate-500">
              Πηγή: «Άκου… Βλέπε… Σώπα» • 196 Σελίδες
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenPdf}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Διαβάστε το Πλήρες Βιβλίο</span>
              </button>
              <a
                href="/book.pdf"
                download="akou-vlepe-sopa.pdf"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Λήψη PDF</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
