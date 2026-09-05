import React, { useState, useEffect } from 'react';
import { PHILOSOPHICAL_DILEMMA } from '../data/bookData';
import { MessageSquare, ThumbsUp, ThumbsDown, Send, CheckCircle2 } from 'lucide-react';

interface Comment {
  id: string;
  author: string;
  stance: 'agree' | 'disagree';
  content: string;
  time: string;
}

const INITIAL_COMMENTS: Comment[] = [
  {
    id: 'c-1',
    author: 'Ελένη Κ.',
    stance: 'agree',
    content: 'Αν αγαπάς μόνο το φως κάποιου, τότε αγαπάς την εικόνα του, όχι την ουσία του. Ο Ορφέας συγχωρώντας τη Φαίδρα δεν δικαιολογεί το κακό, αλλά σώζει την ανθρωπιά και των δύο.',
    time: 'Πριν από 2 ώρες'
  },
  {
    id: 'c-2',
    author: 'Μάρκος Δ.',
    stance: 'disagree',
    content: 'Η συγχώρεση είναι απαραίτητη, αλλά υπάρχουν σκοτάδια που συμπαρασύρουν και καταστρέφουν. Το να μένεις δίπλα σε κάποιον που επέλεξε την εκδίκηση απαιτεί τεράστια ψυχική υγεία και συχνά καταλήγει σε συνεξάρτηση.',
    time: 'Πριν από 5 ώρες'
  },
  {
    id: 'c-3',
    author: 'Νικόλας Π.',
    stance: 'agree',
    content: 'Η φράση του Ορφέα «μη διανοηθείς να πιστεύεις πως είσαι μόνο όσα έκανες στις χειρότερες στιγμές σου» είναι ο μόνος ορισμός αγάπης που αντέχει στο χρόνο.',
    time: 'Πριν από 1 ημέρα'
  }
];

export const DebateSection: React.FC = () => {
  const [userVote, setUserVote] = useState<'agree' | 'disagree' | null>(null);
  const [agreeVotes, setAgreeVotes] = useState<number>(142);
  const [disagreeVotes, setDisagreeVotes] = useState<number>(27);
  const [comments, setComments] = useState<Comment[]>(INITIAL_COMMENTS);
  
  // Form states
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [formStance, setFormStance] = useState<'agree' | 'disagree'>('agree');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const savedVote = localStorage.getItem('akou_user_vote');
    if (savedVote === 'agree' || savedVote === 'disagree') {
      setUserVote(savedVote);
    }
    const savedComments = localStorage.getItem('akou_comments');
    if (savedComments) {
      try {
        setComments(JSON.parse(savedComments));
      } catch {
        // use initial
      }
    }
  }, []);

  const handleVote = (choice: 'agree' | 'disagree') => {
    if (userVote === choice) return;
    
    if (choice === 'agree') {
      setAgreeVotes((prev) => prev + 1);
      if (userVote === 'disagree') setDisagreeVotes((prev) => Math.max(0, prev - 1));
    } else {
      setDisagreeVotes((prev) => prev + 1);
      if (userVote === 'agree') setAgreeVotes((prev) => Math.max(0, prev - 1));
    }

    setUserVote(choice);
    localStorage.setItem('akou_user_vote', choice);
  };

  const totalVotes = agreeVotes + disagreeVotes;
  const agreePercentage = Math.round((agreeVotes / totalVotes) * 100) || 0;
  const disagreePercentage = 100 - agreePercentage;

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !content.trim()) return;

    const newComment: Comment = {
      id: 'c-' + Date.now(),
      author: author.trim(),
      stance: formStance,
      content: content.trim(),
      time: 'Μόλις τώρα'
    };

    const updated = [newComment, ...comments];
    setComments(updated);
    localStorage.setItem('akou_comments', JSON.stringify(updated));

    setAuthor('');
    setContent('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="debate" className="py-24 relative overflow-hidden bg-[#040813]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300 uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Το Τελικό Ερώτημα του Συγγραφέα</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            «Άραγε Συμφωνείτε;»
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light">
            Στην τελευταία σελίδα του βιβλίου, ο συγγραφέας απευθύνει μια ανοιχτή πρόκληση στον αναγνώστη.
          </p>
        </div>

        {/* The Challenge Banner */}
        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-amber-500/40 text-center space-y-6 mb-12 shadow-[0_0_40px_rgba(234,179,8,0.1)]">
          <blockquote className="text-lg sm:text-2xl font-serif italic text-amber-100 leading-relaxed max-w-3xl mx-auto">
            {PHILOSOPHICAL_DILEMMA.quote}
          </blockquote>
          <div className="inline-block font-mono text-xs uppercase tracking-widest text-amber-400 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30">
            {PHILOSOPHICAL_DILEMMA.challenge}
          </div>
        </div>

        {/* Voting Mechanism */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* Agree Card */}
          <div
            onClick={() => handleVote('agree')}
            className={`cursor-pointer p-6 sm:p-8 rounded-2xl border transition-all text-left space-y-4 relative ${
              userVote === 'agree'
                ? 'bg-amber-500/20 border-amber-500 shadow-[0_0_25px_rgba(234,179,8,0.25)]'
                : 'bg-slate-900/60 border-slate-800 hover:border-amber-500/50 hover:bg-slate-900/90'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  <ThumbsUp className="w-5 h-5" />
                </div>
                <span className="font-serif font-bold text-lg text-white">Συμφωνώ</span>
              </div>
              <span className="font-mono text-xl font-bold text-amber-400">{agreePercentage}%</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Η αγάπη είναι λυτρωτική αποδοχή. Δεν ζητά αψεγάδιαστους ανθρώπους, αλλά στέκεται δίπλα στο σκοτάδι και προσφέρει ελπίδα και χέρι βοήθειας.
            </p>
            {userVote === 'agree' && (
              <div className="text-[11px] font-mono text-amber-400 flex items-center gap-1 pt-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Η ψήφος σας καταχωρήθηκε</span>
              </div>
            )}
          </div>

          {/* Disagree Card */}
          <div
            onClick={() => handleVote('disagree')}
            className={`cursor-pointer p-6 sm:p-8 rounded-2xl border transition-all text-left space-y-4 relative ${
              userVote === 'disagree'
                ? 'bg-rose-500/20 border-rose-500 shadow-[0_0_25px_rgba(244,63,94,0.25)]'
                : 'bg-slate-900/60 border-slate-800 hover:border-rose-500/50 hover:bg-slate-900/90'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30">
                  <ThumbsDown className="w-5 h-5" />
                </div>
                <span className="font-serif font-bold text-lg text-white">Διαφωνώ / Αντίκρουση</span>
              </div>
              <span className="font-mono text-xl font-bold text-rose-400">{disagreePercentage}%</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Υπάρχουν όρια στην αυτοπροστασία. Ορισμένα σκοτάδια είναι τοξικά και καταστροφικά, και η παραμονή σε αυτά κινδυνεύει να γίνει αυτοθυσία.
            </p>
            {userVote === 'disagree' && (
              <div className="text-[11px] font-mono text-rose-400 flex items-center gap-1 pt-2">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Η ψήφος σας καταχωρήθηκε</span>
              </div>
            )}
          </div>

        </div>

        {/* Live Vote Bar */}
        <div className="glass-panel p-4 rounded-xl mb-16 space-y-2 border border-slate-800">
          <div className="flex justify-between text-xs font-mono text-slate-400">
            <span>Συμφωνώ: {agreeVotes} ψήφοι ({agreePercentage}%)</span>
            <span>Διαφωνώ: {disagreeVotes} ψήφοι ({disagreePercentage}%)</span>
          </div>
          <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden flex">
            <div
              style={{ width: `${agreePercentage}%` }}
              className="bg-amber-500 transition-all duration-500"
            />
            <div
              style={{ width: `${disagreePercentage}%` }}
              className="bg-rose-500 transition-all duration-500"
            />
          </div>
        </div>

        {/* Reader Comments & Submission Form */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 space-y-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h3 className="font-serif font-bold text-xl text-white">
              Σκέψεις & Επιχειρήματα Αναγνωστών
            </h3>
            <span className="text-xs font-mono text-slate-400">
              {comments.length} Τοποθετήσεις
            </span>
          </div>

          {/* Submission Form */}
          <form onSubmit={handleCommentSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Το όνομά σας ή ψευδώνυμο"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
                className="col-span-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
              <select
                value={formStance}
                onChange={(e) => setFormStance(e.target.value as 'agree' | 'disagree')}
                className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-slate-100 focus:outline-none focus:border-amber-500 font-mono"
              >
                <option value="agree">Συμφωνώ (+)</option>
                <option value="disagree">Διαφωνώ (-)</option>
              </select>
            </div>

            <textarea
              placeholder="Γράψτε το επιχείρημά σας ή την αντίκρουσή σας στη φράση του βιβλίου..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              rows={3}
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500 resize-none"
            />

            <div className="flex justify-between items-center pt-1">
              {submitted ? (
                <span className="text-xs text-emerald-400 flex items-center gap-1 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Η τοποθέτησή σας αναρτήθηκε επιτυχώς!</span>
                </span>
              ) : <div />}

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Δημοσίευση Τοποθέτησης</span>
              </button>
            </div>
          </form>

          {/* Comments List */}
          <div className="space-y-4 pt-4">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-2"
              >
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-200">{comment.author}</span>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase ${
                        comment.stance === 'agree'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                      }`}
                    >
                      {comment.stance === 'agree' ? 'Συμφωνεί' : 'Αντικρούει'}
                    </span>
                  </div>
                  <span className="text-slate-500 font-mono text-[11px]">{comment.time}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {comment.content}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
