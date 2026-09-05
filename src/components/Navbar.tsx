import React, { useState } from 'react';
import { BookOpen, Menu, X, Download } from 'lucide-react';
import { AudioAmbience } from './AudioAmbience';

interface NavbarProps {
  onOpenPdf: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPdf }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#overview", label: "Σύνοψη" },
    { href: "#chapters", label: "Τα 3 Κεφάλαια" },
    { href: "#characters", label: "Χαρακτήρες" },
    { href: "#investigation", label: "Στοιχεία Υπόθεσης" },
    { href: "#reader", label: "Αποσπάσματα" },
    { href: "#debate", label: "Το Δίλημμα" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-700/30 border border-amber-500/40 flex items-center justify-center text-amber-300 font-serif font-bold text-lg group-hover:border-amber-400 transition-all shadow-[0_0_15px_rgba(234,179,8,0.2)]">
            Α
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-base tracking-wide text-slate-100 group-hover:text-amber-200 transition-colors">
              Άκου… Βλέπε… Σώπα
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-mono">
              Το Βιβλίο
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-amber-300 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Area */}
        <div className="hidden sm:flex items-center gap-3">
          <AudioAmbience />
          <button
            onClick={onOpenPdf}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:border-amber-500/60 transition-all"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Ανάγνωση PDF</span>
          </button>
          <a
            href="/book.pdf"
            download="akou-vlepe-sopa.pdf"
            className="inline-flex items-center justify-center p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
            title="Λήψη αρχείου PDF (196 σελίδες)"
          >
            <Download className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <AudioAmbience />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-700"
            aria-label="Μενού"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800 px-4 pt-3 pb-5 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-800 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPdf();
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold bg-amber-500 text-slate-950 hover:bg-amber-400 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>Ανάγνωση Βιβλίου</span>
            </button>
            <a
              href="/book.pdf"
              download="akou-vlepe-sopa.pdf"
              className="p-2 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 flex items-center justify-center"
            >
              <Download className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
