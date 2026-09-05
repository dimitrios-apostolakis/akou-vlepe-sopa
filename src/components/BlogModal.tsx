import React, { useEffect } from 'react';
import { BlogPost } from '../data/blogData';
import { X, Clock, Calendar, Bookmark, CheckCircle2, HelpCircle, Share2, Quote } from 'lucide-react';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (post) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [post, onClose]);

  if (!post) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl h-[92vh] bg-slate-900 border border-slate-700 rounded-3xl flex flex-col shadow-2xl overflow-hidden">
        
        {/* Top Sticky Header */}
        <div className="px-6 py-4 bg-slate-950/95 border-b border-slate-800 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
              {post.category}
            </span>
            <span className="hidden sm:inline text-xs font-mono text-slate-400">
              {post.readTime}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-800 text-slate-300 hover:text-white transition-colors"
              title="Αντιγραφή συνδέσμου"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? "Αντιγράφηκε!" : "Κοινοποίηση"}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Κλείσιμο"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Article Body */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-12 py-8 space-y-10">
          
          {/* Article Header */}
          <div className="space-y-4 border-b border-slate-800 pb-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>{post.date}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>{post.readTime}</span>
              </span>
              <span>•</span>
              <span className="text-amber-300/80">{post.author}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
              {post.title}
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 font-light italic leading-relaxed">
              {post.subtitle}
            </p>
          </div>

          {/* Lead Quote Callout */}
          <div className="p-6 rounded-2xl bg-amber-500/10 border-l-4 border-amber-500 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
              <Quote className="w-4 h-4" />
              <span>Απόσπασμα Αναφοράς</span>
            </div>
            <p className="text-base sm:text-lg font-serif italic text-amber-100 leading-relaxed">
              {post.leadQuote}
            </p>
            <div className="text-xs font-mono text-amber-400/70 pt-1">
              — {post.leadQuoteAuthor}
            </div>
          </div>

          {/* Executive Summary */}
          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            <strong className="text-white font-serif">Κεντρική Θέση: </strong>
            {post.summary}
          </div>

          {/* Subsections Deep Dive */}
          <div className="space-y-10">
            {post.sections.map((sec, idx) => (
              <article key={idx} className="space-y-4">
                <div className="space-y-1">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-white">
                    {sec.heading}
                  </h2>
                  {sec.subheading && (
                    <div className="text-xs font-mono uppercase tracking-wider text-amber-400">
                      {sec.subheading}
                    </div>
                  )}
                </div>

                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light font-serif">
                  {sec.content.map((p, pIdx) => (
                    <p key={pIdx} className="indent-4 sm:indent-6">
                      {p}
                    </p>
                  ))}
                </div>

                {sec.takeaway && (
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 font-sans">
                    <Bookmark className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-amber-300 font-medium">Συμπέρασμα Ενότητας: </strong>
                      {sec.takeaway}
                    </span>
                  </div>
                )}
              </article>
            ))}
          </div>

          {/* Key Takeaways */}
          <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-sm font-serif font-bold text-white">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Βασικά Συμπεράσματα του Δοκιμίου</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-light">
              {post.keyTakeaways.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Reflection Questions */}
          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2 text-sm font-serif font-bold text-white">
              <HelpCircle className="w-4 h-4 text-cyan-400" />
              <span>Ερωτήματα για Προσωπικό Αναστοχασμό</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300 font-light italic">
              {post.reflectionQuestions.map((q, i) => (
                <li key={i} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/60">
                  {q}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};
