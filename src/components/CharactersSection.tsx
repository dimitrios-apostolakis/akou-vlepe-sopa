import React, { useState } from 'react';
import { CHARACTERS, Character } from '../data/bookData';
import { Users, Quote, Brain, Heart, Crosshair } from 'lucide-react';

export const CharactersSection: React.FC = () => {
  const [selectedCharId, setSelectedCharId] = useState<string>(CHARACTERS[0].id);

  const activeChar: Character = CHARACTERS.find((c) => c.id === selectedCharId) || CHARACTERS[0];

  return (
    <section id="characters" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-amber-400 uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>Ψυχογραφικά Προφίλ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Οι Ήρωες στον Λαβύρινθο της Ενοχής
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light">
            Πολυδιάστατοι χαρακτήρες, μακριά από σχηματικά κλισέ. Άνθρωποι που έσφαλαν, 
            φοβήθηκαν, καταπιέστηκαν και αναζητούν την εξιλέωση.
          </p>
        </div>

        {/* Character Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {CHARACTERS.map((char) => {
            const isSelected = char.id === selectedCharId;
            return (
              <button
                key={char.id}
                onClick={() => setSelectedCharId(char.id)}
                className={`p-4 rounded-xl text-left transition-all border ${
                  isSelected
                    ? 'bg-amber-500/15 border-amber-500 text-white shadow-[0_0_20px_rgba(234,179,8,0.2)]'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <div className="font-serif font-bold text-base truncate">
                  {char.name}
                </div>
                <div className="text-[11px] text-slate-400 truncate mt-1">
                  {char.role}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Character Card */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-slate-800 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Summary & Quote */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                  {activeChar.archetype}
                </span>
                <h3 className="text-3xl font-serif font-bold text-white pt-2">
                  {activeChar.name}
                </h3>
                <p className="text-sm font-light text-slate-300">
                  {activeChar.role}
                </p>
              </div>

              {/* Iconic Quote */}
              <div className="p-5 rounded-xl bg-slate-950/80 border-l-4 border-amber-500 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-mono text-amber-400">
                  <Quote className="w-3.5 h-3.5" />
                  <span>Φωνή & Ατάκα</span>
                </div>
                <p className="text-sm font-serif italic text-amber-100 leading-relaxed">
                  {activeChar.quote}
                </p>
              </div>

              {/* Story Fate */}
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Crosshair className="w-3.5 h-3.5 text-amber-400" />
                  <span>Η Εξέλιξη στην Πλοκή</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {activeChar.fate}
                </p>
              </div>
            </div>

            {/* Right: Psychological Deep Dive */}
            <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-slate-800/80 lg:pl-8">
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                  <Heart className="w-4 h-4 text-rose-400" />
                  <span>Βιογραφικό & Ρόλος στην Ιστορία</span>
                </div>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                  {activeChar.description}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                  <Brain className="w-4 h-4 text-cyan-400" />
                  <span>Ψυχολογική Ανάλυση & Εσωτερική Σύγκρουση</span>
                </div>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light p-4 rounded-xl bg-slate-950/40 border border-slate-800/60">
                  {activeChar.psychology}
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
