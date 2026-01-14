import React, { useState, useEffect, useRef } from 'react';
import { Sidebar } from './components/Sidebar';
import { VisualDNA } from './components/VisualDNA';
import { Typography } from './components/Typography';
import { LogoGuidelines } from './components/LogoGuidelines';
import { BrandVoice } from './components/BrandVoice';
import { Section } from './types';
import { Menu } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('dna');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const sectionRefs = {
    dna: useRef<HTMLDivElement>(null),
    typography: useRef<HTMLDivElement>(null),
    logos: useRef<HTMLDivElement>(null),
    voice: useRef<HTMLDivElement>(null),
  };

  const logoUrl = "https://44667010.fs1.hubspotusercontent-na1.net/hubfs/44667010/SK%20Wordmark%20Logo%20(Primary).png";

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as Section);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (section: Section) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: 'smooth' });
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-cyan/20 selection:text-brand-deep overflow-x-hidden">
      <Sidebar 
        activeSection={activeSection} 
        onNavigate={scrollToSection} 
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* Removed w-full to prevent overflow with ml-72 */}
      <main className="min-w-0 transition-all duration-300 md:ml-72 relative">
        <header className="md:hidden p-4 bg-white border-b border-slate-200 sticky top-0 z-20 flex justify-between items-center shadow-sm">
           <img src={logoUrl} alt="Spectrum Killian" className="h-8 w-auto object-contain" />
           <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-slate-600">
             <Menu size={24} />
           </button>
        </header>

        <div className="p-6 md:p-12 max-w-7xl mx-auto space-y-16 md:space-y-32">
          <div id="dna" ref={sectionRefs.dna} className="scroll-mt-24 animate-fade-in-up">
            <VisualDNA />
          </div>
          <div id="typography" ref={sectionRefs.typography} className="scroll-mt-24 animate-fade-in-up">
            <Typography />
          </div>
          <div id="logos" ref={sectionRefs.logos} className="scroll-mt-24 animate-fade-in-up">
            <LogoGuidelines />
          </div>
          <div id="voice" ref={sectionRefs.voice} className="scroll-mt-24 animate-fade-in-up">
            <BrandVoice />
          </div>
        </div>
      </main>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>
    </div>
  );
}