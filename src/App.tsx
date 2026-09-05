import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BookOverview } from './components/BookOverview';
import { ChaptersSection } from './components/ChaptersSection';
import { CharactersSection } from './components/CharactersSection';
import { InvestigationBoard } from './components/InvestigationBoard';
import { BlogSection } from './components/BlogSection';
import { ReaderSection } from './components/ReaderSection';
import { DebateSection } from './components/DebateSection';
import { Footer } from './components/Footer';
import { PdfModal } from './components/PdfModal';

export function App() {
  const [isPdfOpen, setIsPdfOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col selection:bg-amber-500/30 selection:text-amber-200">
      <Navbar onOpenPdf={() => setIsPdfOpen(true)} />
      
      <main className="flex-1">
        <Hero onOpenPdf={() => setIsPdfOpen(true)} />
        <BookOverview />
        <ChaptersSection onOpenPdf={() => setIsPdfOpen(true)} />
        <CharactersSection />
        <InvestigationBoard />
        <BlogSection />
        <ReaderSection onOpenPdf={() => setIsPdfOpen(true)} />
        <DebateSection />
      </main>

      <Footer onOpenPdf={() => setIsPdfOpen(true)} />

      <PdfModal
        isOpen={isPdfOpen}
        onClose={() => setIsPdfOpen(false)}
      />
    </div>
  );
}

export default App;
