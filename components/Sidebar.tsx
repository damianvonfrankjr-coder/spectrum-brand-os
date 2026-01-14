import React from 'react';
import { Palette, Type, Shield, MessageSquare, X } from 'lucide-react';
import { Section } from '../types';

interface SidebarProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
  isOpen: boolean;
  toggleSidebar: () => void;
}

const NavItem = ({ 
  id, 
  icon: Icon, 
  label, 
  isActive, 
  onClick 
}: { 
  id: Section; 
  icon: any; 
  label: string; 
  isActive: boolean; 
  onClick: () => void; 
}) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-4 px-6 py-4 transition-all duration-200 border-l-4 font-sans ${
      isActive 
        ? 'bg-brand-deep/10 border-brand-cyan text-brand-deep font-bold shadow-inner' 
        : 'border-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-800 font-normal'
    }`}
  >
    <Icon size={20} className={isActive ? "text-brand-deep" : "text-slate-400"} />
    <span>{label}</span>
  </button>
);

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onNavigate, isOpen, toggleSidebar }) => {
  const logoUrl = "https://44667010.fs1.hubspotusercontent-na1.net/hubfs/44667010/SK%20Wordmark%20Logo%20(Primary).png";

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar Container */}
      <aside className={`fixed top-0 left-0 h-screen w-72 bg-white border-r border-slate-200 z-50 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} shadow-xl md:shadow-none`}>
        <div className="p-8 border-b border-slate-100 flex justify-between items-center">
          <div className="flex items-center">
             <div className="h-10 flex items-center">
                <img 
                  src={logoUrl} 
                  alt="Spectrum Killian" 
                  className="h-10 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.nextElementSibling?.classList.remove('hidden');
                  }}
                />
             </div>
             {/* Fallback text strictly following H1 hierarchy, removed DLA tag */}
             <div className="leading-tight hidden ml-3">
                <h1 className="font-semibold font-serif text-slate-900 tracking-tight text-sm uppercase">Spectrum Killian</h1>
             </div>
          </div>
          <button onClick={toggleSidebar} className="md:hidden text-slate-600">
            <X size={24} />
          </button>
        </div>

        <nav className="mt-8">
          <NavItem 
            id="dna" 
            icon={Palette} 
            label="Visual DNA" 
            isActive={activeSection === 'dna'} 
            onClick={() => { onNavigate('dna'); toggleSidebar(); }}
          />
          <NavItem 
            id="typography" 
            icon={Type} 
            label="Typography" 
            isActive={activeSection === 'typography'} 
            onClick={() => { onNavigate('typography'); toggleSidebar(); }}
          />
          <NavItem 
            id="logos" 
            icon={Shield} 
            label="Logo Inventory" 
            isActive={activeSection === 'logos'} 
            onClick={() => { onNavigate('logos'); toggleSidebar(); }}
          />
          <NavItem 
            id="voice" 
            icon={MessageSquare} 
            label="Brand Voice" 
            isActive={activeSection === 'voice'} 
            onClick={() => { onNavigate('voice'); toggleSidebar(); }}
          />
        </nav>

        <div className="absolute bottom-8 left-0 w-full px-8 text-[10px] font-sans font-medium text-slate-400 uppercase tracking-widest">
          <p>Version 1.2</p>
          <p>© {new Date().getFullYear()} Spectrum Killian</p>
        </div>
      </aside>
    </>
  );
};