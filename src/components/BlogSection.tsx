import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost } from '../data/blogData';
import { BlogModal } from './BlogModal';
import { Feather, Clock, ArrowRight, BookOpen, Quote } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 bg-[#050914] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300 uppercase tracking-wider">
            <Feather className="w-3.5 h-3.5" />
            <span>Δοκίμια & Αναλύσεις Βιβλίου</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Κοιτάζοντας «Κάτω από το Καπό»
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            Τρία θεματικά δοκίμια που ανατέμνουν τα κρυμμένα νοήματα του μυθιστορήματος από κάθε οπτική γωνία: 
            την κοινωνιολογική συνενοχή, την ψυχολογία της χειραγώγησης και την υπαρξιακή αναζήτηση συγχώρεσης.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="glass-panel rounded-3xl overflow-hidden border border-slate-800 flex flex-col justify-between group hover:border-amber-500/40 transition-all duration-300 hover:translate-y-[-4px] shadow-xl"
            >
              <div>
                {/* Cover Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30">
                      {post.category}
                    </span>
                  </div>

                  {/* Read Time */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-[11px] font-mono text-slate-300 bg-slate-950/80 px-2.5 py-0.5 rounded-md backdrop-blur-sm">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-200 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 font-light line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>

                  {/* Quote Snippet */}
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-amber-400">
                      <Quote className="w-3 h-3" />
                      <span>Κομβική Σκέψη</span>
                    </div>
                    <p className="text-xs font-serif italic text-amber-100/90 line-clamp-2">
                      {post.leadQuote}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 sm:p-7 pt-0">
                <button
                  onClick={() => setActivePost(post)}
                  className="w-full py-3 px-4 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-amber-500 text-slate-300 hover:text-slate-950 border border-slate-800 hover:border-amber-400 transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-400 group-hover/btn:text-slate-950 transition-colors" />
                  <span>Ανάγνωση Δοκιμίου</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </article>
          ))}
        </div>

      </div>

      {/* Full Modal Reader */}
      <BlogModal
        post={activePost}
        onClose={() => setActivePost(null)}
      />
    </section>
  );
};
