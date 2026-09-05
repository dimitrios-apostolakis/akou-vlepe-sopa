import React, { useState } from 'react';
import { EVIDENCE_BOARD, EvidenceItem } from '../data/bookData';
import { Search, Activity, Flame, Mail, Gauge, Smartphone, Heart, AlertCircle, Info } from 'lucide-react';

export const InvestigationBoard: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<EvidenceItem>(EVIDENCE_BOARD[0]);

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Activity': return <Activity className="w-5 h-5 text-amber-400" />;
      case 'Flame': return <Flame className="w-5 h-5 text-red-400" />;
      case 'Mail': return <Mail className="w-5 h-5 text-yellow-400" />;
      case 'Gauge': return <Gauge className="w-5 h-5 text-orange-400" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-cyan-400" />;
      case 'Heart': return <Heart className="w-5 h-5 text-rose-400" />;
      default: return <Search className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="investigation" className="py-24 bg-[#070b14] relative overflow-hidden">
      {/* Background red thread motif */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="#ef4444" strokeWidth="1" strokeDasharray="6,6" />
          <line x1="80%" y1="15%" x2="20%" y2="85%" stroke="#ef4444" strokeWidth="1" strokeDasharray="6,6" />
          <line x1="30%" y1="50%" x2="70%" y2="50%" stroke="#eab308" strokeWidth="1" strokeDasharray="4,4" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-mono text-red-400 uppercase tracking-wider">
            <Search className="w-3.5 h-3.5" />
            <span>Ο Πίνακας των Στοιχείων</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Η Έρευνα της Ιόλης & του Αλέξη
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light">
            Πώς ενώθηκαν τα κομμάτια ενός παζλ που κάποιοι θέλησαν να θάψουν για πάντα στη σιωπή.
            Επιλέξτε ένα πειστήριο για να εξετάσετε τη σημασία του.
          </p>
        </div>

        {/* Evidence Grid & Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Evidence Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {EVIDENCE_BOARD.map((item) => {
              const isSelected = item.id === selectedItem.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`cursor-pointer p-5 rounded-2xl transition-all border text-left relative overflow-hidden ${
                    isSelected
                      ? 'bg-slate-900 border-amber-500/80 shadow-[0_0_25px_rgba(234,179,8,0.2)] translate-y-[-2px]'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70'
                  }`}
                >
                  {/* Category Pill */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      {item.timestamp}
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 shrink-0">
                      {renderIcon(item.iconName)}
                    </div>
                    <div className="space-y-1 min-w-0">
                      <h4 className="text-sm font-serif font-bold text-slate-100 truncate">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-2 font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Inspector Dossier Column */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-8 border border-slate-800 space-y-6 sticky top-24">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider pb-2 border-b border-slate-800">
              <Info className="w-4 h-4" />
              <span>Φάκελος Πειστηρίου • {selectedItem.category}</span>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-500">{selectedItem.timestamp}</span>
              <h3 className="text-2xl font-serif font-bold text-white">
                {selectedItem.title}
              </h3>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Περιγραφή</div>
              <p className="text-sm text-slate-300 leading-relaxed font-light p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                {selectedItem.description}
              </p>
            </div>

            {/* Crucial Significance */}
            <div className="space-y-2">
              <div className="text-xs font-mono text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Καθοριστική Σημασία για την Υπόθεση</span>
              </div>
              <p className="text-sm text-amber-100 leading-relaxed font-light p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
                {selectedItem.significance}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
