import React from 'react';
import { ShieldAlert, HeartHandshake, Eye, Skull, MapPin, Compass } from 'lucide-react';
import { BOOK_META } from '../data/bookData';

export const BookOverview: React.FC = () => {
  const pillars = [
    {
      icon: Eye,
      title: "Η Εξωσωματική Ματιά",
      desc: "Ο Ορφέας στο κώμα δεν είναι απλός θεατής: η συνείδησή του αιωρείται στο δωμάτιο 312, κατασκοπεύοντας τις επισκέψεις, τα δάκρυα και τις ομολογίες των ενόχων.",
      color: "from-blue-500/20 to-cyan-500/10",
      border: "border-cyan-500/30",
      iconColor: "text-cyan-400"
    },
    {
      icon: Skull,
      title: "Το Προπατορικό Αμάρτημα",
      desc: "Ένα τροχαίο σε νυχτερινές κόντρες στην παραλιακή. Ένας 23χρονος νέος που αφήνεται να ξεψυχήσει στην άσφαλτο επειδή οι άλλοι οδηγοί φοβήθηκαν τις συνέπειες.",
      color: "from-red-500/20 to-orange-500/10",
      border: "border-red-500/30",
      iconColor: "text-red-400"
    },
    {
      icon: ShieldAlert,
      title: "Ο Μηχανισμός της Νέμεσης",
      desc: "Μαύροι φάκελοι, κομμένα φρένα, αναπαραστάσεις τρόμου και ο «Γνωστός-Άγνωστος Αποστολέας» που τιμωρεί έναν προς έναν όσους επέλεξαν τη σιωπή.",
      color: "from-amber-500/20 to-yellow-500/10",
      border: "border-amber-500/30",
      iconColor: "text-amber-400"
    },
    {
      icon: HeartHandshake,
      title: "Η Λύτρωση της Συγχώρεσης",
      desc: "Όταν η Φαίδρα γνωρίζει τον Ορφέα για να τον παγιδεύσει, ο έρωτας ανατρέπει τα πάντα. Η αγάπη δεν απαιτεί τελειότητα, αλλά αγκαλιάζει τα σκοτάδια.",
      color: "from-emerald-500/20 to-teal-500/10",
      border: "border-emerald-500/30",
      iconColor: "text-emerald-400"
    }
  ];

  return (
    <section id="overview" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-amber-400 uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Η Υπόθεση του Βιβλίου</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Όταν η σιωπή γίνεται συνυπαιτιότητα και η αγάπη κάθαρση
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-light">
            Μια ανατομία της ενοχής μέσα από τη σύγχρονη Αθήνα. 
            Από τα αποστειρωμένα πλακάκια του Γενικού Νοσοκομείου Πειραιά μέχρι τη βρεγμένη άσφαλτο της παραλιακής και τα σκαλιά ενός ναού.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main synopsis text box */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-8 sm:p-10 space-y-6 border border-slate-800 flex flex-col justify-between">
            <div className="space-y-4 text-slate-300 leading-relaxed font-light text-base sm:text-lg">
              <p>
                Το μυθιστόρημα <strong className="text-amber-300 font-semibold font-serif">«Άκου… Βλέπε… Σώπα»</strong> ξεκινά με μια μοναδική λογοτεχνική συνθήκη: τον κεντρικό ήρωα, τον Ορφέα, να παρακολουθεί το ίδιο του το κωματώδες σώμα στο Δωμάτιο 312. 
                Κάθε ήχος του μόνιτορ μετρά τα δευτερόλεπτα μιας ζωής που κρέμεται από μια κλωστή.
              </p>
              <p>
                Πίσω από το ατύχημα κρύβεται ένα κουβάρι μυστικών που ξεκινά χρόνια πριν, σε έναν παράνομο αγώνα ταχύτητας όπου ένας εικοσιτριάχρονος, ο Μάνος, εγκαταλείφθηκε αβοήθητος να πεθάνει. Όσοι ήταν εκεί επέλεξαν το ρητό: <em className="text-slate-100 font-serif">«Άκου, βλέπε και σώπα»</em>, για να προστατεύσουν το μέλλον τους.
              </p>
              <p>
                Όμως, ο πόνος της απώλειας μετατράπηκε σε έναν αμείλικτο μηχανισμό εκδίκησης. Ένας μυστηριώδης αποστολέας αρχίζει να εξοντώνει τους ενόχους έναν προς έναν. Μέχρι τη στιγμή που η Φαίδρα, η αδελφή του θύματος, θα βρεθεί αντιμέτωπη με τον Ορφέα. Αντί για έναν ψυχρό δολοφόνο, ανακαλύπτει μια τσακισμένη καρδιά, και ένας σπάνιος, ανατρεπτικός έρωτας γεννιέται στα συντρίμμια.
              </p>
            </div>

            {/* Geographical anchor */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Πειραιάς (Δωμάτιο 312) • Παραλιακή (44ο χλμ) • Αθήνα</span>
              </div>
              <div className="text-amber-400/80">
                196 Σελίδες • 3 Κεντρικά Μέρη • Επίλογος
              </div>
            </div>
          </div>

          {/* Side quote card */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-8 sm:p-10 flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-amber-950/20 via-slate-900 to-slate-950">
            <div className="text-6xl font-serif text-amber-500/20 absolute -top-4 -left-2 select-none">“</div>
            <div className="relative space-y-6">
              <blockquote className="font-serif italic text-lg sm:text-xl text-amber-100 leading-relaxed">
                «Και ίσως τελικά αυτό να είναι η αγάπη. Όχι να βρίσκεις κάποιον αψεγάδιαστο, αλλά κάποιον που, αφού δει όλα τα σκοτάδια σου, εξακολουθεί να σου πιάνει το χέρι και να σου ψιθυρίζει: “Γύρνα πίσω… δεν τελείωσε ακόμη”.»
              </blockquote>
              <div className="pt-4 border-t border-amber-500/20">
                <div className="text-sm font-semibold text-white">Απόσπασμα από τον Επίλογο</div>
                <div className="text-xs text-amber-400/80 font-mono">Σελίδα 194 • Το Υπαρξιακό Συμπέρασμα</div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className={`glass-panel rounded-xl p-6 border ${p.border} space-y-4 hover:translate-y-[-4px] transition-all duration-300`}
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${p.color} flex items-center justify-center border border-white/5`}>
                  <Icon className={`w-5 h-5 ${p.iconColor}`} />
                </div>
                <h3 className="text-lg font-serif font-bold text-white">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed font-light">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
