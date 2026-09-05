import React, { useState } from 'react';
import { CHAPTERS, Chapter } from '../data/bookData';
import { Bookmark, Sparkles, ChevronRight, BookOpen } from 'lucide-react';

interface ChaptersSectionProps {
  onOpenPdf: () => void;
}

export const ChaptersSection: React.FC<ChaptersSectionProps> = ({ onOpenPdf }) => {
  const [activeChapterId, setActiveChapterId] = useState<string>(CHAPTERS[0].id);

  const activeChapter: Chapter = CHAPTERS.find((c) => c.id === activeChapterId) || CHAPTERS[0];

  return (
    <section id="chapters" className="py-24 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300 uppercase tracking-wider">
            <Bookmark className="w-3.5 h-3.5" />
            <span>Η Τριλογία της Αφήγησης</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Τα 3 Κεφάλαια της Μεταμόρφωσης
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light">
            Η αρχαία παροιμία αποδομείται σε τρεις διακριτές φάσεις: από την ασφυκτική σιωπή των προσδοκιών, 
            στο ξέσπασμα της ορατής αλήθειας και τελικά στην εξιλέωση.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 max-w-xl w-full">
            {CHAPTERS.map((chap) => {
              const isActive = chap.id === activeChapterId;
              return (
                <button
                  key={chap.id}
                  onClick={() => setActiveChapterId(chap.id)}
                  className={`flex-1 py-3 px-3 sm:px-6 rounded-xl font-serif font-bold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow-[0_0_20px_rgba(234,179,8,0.3)]'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <span>{chap.title}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isActive ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                    {chap.number}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Chapter Showcase Card */}
        <div className="glass-panel rounded-3xl overflow-hidden border border-slate-800 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Artwork Column */}
            <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-[540px] overflow-hidden">
              <img
                src={activeChapter.image}
                alt={activeChapter.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-950" />
              
              {/* Badge overlay */}
              <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/30 text-amber-300 text-xs font-mono">
                <span>{activeChapter.greekTitle}</span>
                <span>•</span>
                <span>{activeChapter.pages}</span>
              </div>

              {/* Quote overlay on image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10">
                <p className="text-xs sm:text-sm font-serif italic text-amber-100 leading-relaxed">
                  {activeChapter.keyQuote}
                </p>
              </div>
            </div>

            {/* Details Column */}
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase tracking-widest text-amber-400">
                    {activeChapter.greekTitle}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                    {activeChapter.title}
                  </h3>
                  <p className="text-base text-slate-300 font-light italic">
                    {activeChapter.subtitle}
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  {activeChapter.summary}
                </p>

                {/* Thematic Tags */}
                <div className="space-y-2">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Κεντρικά Θέματα</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeChapter.themes.map((theme, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights list */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Κομβικές Σκηνές
                  </div>
                  <div className="space-y-2.5">
                    {activeChapter.highlights.map((h, i) => (
                      <div key={i} className="p-3 rounded-lg bg-slate-900/50 border border-slate-800/80 space-y-1">
                        <div className="text-xs font-semibold text-amber-300 flex items-center gap-1.5">
                          <ChevronRight className="w-3 h-3 text-amber-400" />
                          <span>{h.title}</span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed font-light pl-4.5">
                          {h.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <a
                  href="#reader"
                  className="text-xs sm:text-sm font-medium text-amber-400 hover:text-amber-300 inline-flex items-center gap-1.5 group"
                >
                  <span>Ανάγνωση χαρακτηριστικού αποσπάσματος</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  onClick={onOpenPdf}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Πλήρες Κείμενο</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
