import React, { useState, useMemo } from 'react';
import { BRAND_IMAGERY } from '../constants';
import { Download, Image as ImageIcon, Filter, Check } from 'lucide-react';

interface AssetData {
  title: string;
  filename: string;
  type: 'Wordmark' | 'Stacked' | 'Icon';
  color: 'Color' | 'Black' | 'White';
  usage: 'Primary' | 'Secondary' | 'Reverse' | 'Utility' | 'Monochrome';
  description: string;
}

const LOGO_ASSETS: AssetData[] = [
  // Wordmarks
  { title: "Wordmark Primary", filename: "https://44667010.fs1.hubspotusercontent-na1.net/hubfs/44667010/SK%20Wordmark%20Logo%20(Primary).png", type: "Wordmark", color: "Color", usage: "Primary", description: "Master horizontal mark for default web navigation." },
  { title: "Wordmark Secondary", filename: "https://44667010.fs1.hubspotusercontent-na1.net/hubfs/44667010/SK%20%20Wordmark%20Logo%20(Secondary).png", type: "Wordmark", color: "Color", usage: "Secondary", description: "Alternative colorway for secondary site sections." },
  { title: "Wordmark White", filename: "https://44667010.fs1.hubspotusercontent-na1.net/hubfs/44667010/SK%20%20Wordmark%20Logo%20(White).png", type: "Wordmark", color: "White", usage: "Reverse", description: "High-visibility white wordmark for dark backgrounds." },
  { title: "Wordmark Mono White", filename: "https://44667010.fs1.hubspotusercontent-na1.net/hubfs/44667010/SK%20%20Wordmark%20Logo%20Single%20Color%20(All%20White).png", type: "Wordmark", color: "White", usage: "Utility", description: "Pure white version for reverse printing." },
  { title: "Wordmark Mono Black", filename: "https://44667010.fs1.hubspotusercontent-na1.net/hubfs/44667010/SK%20%20Wordmark%20Logo%20Single%20Color%20(All%20Black).png", type: "Wordmark", color: "Black", usage: "Utility", description: "Standard black for technical documentation." },
  
  // Stacked
  { title: "Stacked Primary", filename: "https://44667010.fs1.hubspotusercontent-na1.net/hubfs/44667010/SK%20Stacked%20Logo%20(Primary).png", type: "Stacked", color: "Color", usage: "Primary", description: "Most balanced presentation of the brand." },
  { title: "Stacked Secondary", filename: "https://44667010.fs1.hubspotusercontent-na1.net/hubfs/44667010/SK%20Stacked%20Logo%20(Secondary).png", type: "Stacked", color: "Color", usage: "Secondary", description: "Used for alternative background textures." },
  { title: "Stacked White", filename: "https://44667010.fs1.hubspotusercontent-na1.net/hubfs/44667010/SK%20White%20Stacked%20Logo%20(Multicolor).png", type: "Stacked", color: "White", usage: "Reverse", description: "Full color icon with white wordmark." },
  { title: "Stacked Mono Black", filename: "https://44667010.fs1.hubspotusercontent-na1.net/hubfs/44667010/SK%20Logo%20Single%20Color%20(All%20Black).png", type: "Stacked", color: "Black", usage: "Monochrome", description: "Simplified mark for laser etching." },
  { title: "Stacked All-White", filename: "https://44667010.fs1.hubspotusercontent-na1.net/hubfs/44667010/SK%20Stacked%20Logo%20Single%20Color%20(All%20White).png", type: "Stacked", color: "White", usage: "Utility", description: "Pure white stacked version for reverse monochrome printing." },
  
  // Icons
  { title: "Icon Primary", filename: "https://44667010.fs1.hubspotusercontent-na1.net/hubfs/44667010/SK%20Icon%20Logo%20(Primary).png", type: "Icon", color: "Color", usage: "Primary", description: "Core hexagonal wave symbol." },
  { title: "Icon White", filename: "https://44667010.fs1.hubspotusercontent-na1.net/hubfs/44667010/SK%20Icon%20Logo%20(White).png", type: "Icon", color: "White", usage: "Reverse", description: "Subtle white symbol for minimalist dark bg." },
  { title: "Icon Black", filename: "https://44667010.fs1.hubspotusercontent-na1.net/hubfs/44667010/SK%20%20Icon%20Logo%20(Black).png", type: "Icon", color: "Black", usage: "Utility", description: "High-contrast black for schematic use." }
];

const AssetSlot: React.FC<AssetData> = ({ title, filename, description, usage, color }) => {
  const isDark = color === 'White';
  return (
    <div className={`group p-6 rounded-2xl border flex flex-col gap-5 transition-all duration-500 hover:shadow-2xl font-sans relative overflow-hidden ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
      <div className="flex justify-between items-start relative z-10">
        <div>
          <h4 className={`font-bold text-lg leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</h4>
          <span className={`text-[9px] font-mono mt-1 px-1.5 py-0.5 rounded inline-block ${isDark ? 'bg-slate-800 text-slate-500' : 'bg-slate-100 text-slate-400'}`}>.png asset</span>
        </div>
        <span className={`px-2 py-0.5 text-[9px] font-black rounded-full uppercase tracking-tighter ${
          usage === 'Primary' ? 'bg-brand-cyan/20 text-brand-cyan' : 
          usage === 'Secondary' ? 'bg-brand-deep/20 text-brand-deep' :
          isDark ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
        }`}>{usage}</span>
      </div>
      <div className={`w-full aspect-video relative ${isDark ? 'bg-slate-800' : 'bg-slate-50'} border border-dashed ${isDark ? 'border-slate-700' : 'border-slate-200'} rounded-xl flex flex-col items-center justify-center overflow-hidden z-10`}>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(${isDark ? 'white' : 'black'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? 'white' : 'black'} 1px, transparent 1px)`, backgroundSize: '20px 20px' }} />
        <img src={filename} alt={title} className="w-full h-full object-contain p-8 z-10 relative transition-transform duration-500 group-hover:scale-110" />
      </div>
      <div className="mt-auto pt-2 border-t border-slate-100/10 flex justify-between items-center relative z-10">
        <p className="text-[11px] leading-snug max-w-[80%] font-medium text-slate-500">{description}</p>
        <a href={filename} download target="_blank" rel="noopener noreferrer" className={`p-2 rounded-full transition-all ${isDark ? 'bg-white/5 hover:bg-white/10 text-white' : 'bg-slate-50 hover:bg-slate-100 text-slate-400'}`}>
          <Download size={14} />
        </a>
      </div>
    </div>
  );
};

export const LogoGuidelines: React.FC = () => {
  const [typeFilter, setTypeFilter] = useState<'All' | 'Wordmark' | 'Stacked' | 'Icon'>('All');
  const [colorFilter, setColorFilter] = useState<'All' | 'Color' | 'Black' | 'White'>('All');

  const filteredAssets = useMemo(() => {
    return LOGO_ASSETS.filter(asset => {
      const typeMatch = typeFilter === 'All' || asset.type === typeFilter;
      const colorMatch = colorFilter === 'All' || asset.color === colorFilter;
      return typeMatch && colorMatch;
    });
  }, [typeFilter, colorFilter]);

  return (
    <div className="space-y-12 font-sans overflow-x-hidden">
      <div className="relative p-8 md:p-12 rounded-[2rem] bg-slate-900 overflow-hidden shadow-2xl">
         <img src={BRAND_IMAGERY.milling} className="absolute inset-0 w-full h-full object-cover opacity-20" alt="Context" />
         <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
         <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-white mb-4">Logo Inventory</h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal italic">Every variation of the mark is engineered for specific container and environmental constraints.</p>
         </div>
      </div>

      {/* Filter Bar */}
      <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between">
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
          <div className="flex items-center gap-3">
            <Filter className="text-slate-400" size={18} />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 md:hidden">Filter Type</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {['All', 'Wordmark', 'Stacked', 'Icon'].map((t) => (
              <button key={t} onClick={() => setTypeFilter(t as any)} className={`px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold transition-all ${typeFilter === t ? 'bg-brand-deep text-white shadow-md' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}>{t}</button>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {['All', 'Color', 'Black', 'White'].map((c) => (
            <button key={c} onClick={() => setColorFilter(c as any)} className={`px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold transition-all flex items-center gap-2 ${colorFilter === c ? 'bg-brand-cyan text-brand-dark shadow-md' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}>
              {colorFilter === c && <Check size={12} />}
              {c}
            </button>
          ))}
        </div>
      </section>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredAssets.map((asset, idx) => (
          <div key={idx} className="animate-fade-in-up" style={{ animationDelay: `${idx * 50}ms` }}>
            <AssetSlot {...asset} />
          </div>
        ))}
        {filteredAssets.length === 0 && (
          <div className="col-span-full py-32 text-center bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
            <ImageIcon className="mx-auto text-slate-300 mb-4" size={48} />
            <p className="text-slate-400 font-medium">No assets match your current filter selection.</p>
            <button onClick={() => { setTypeFilter('All'); setColorFilter('All'); }} className="mt-4 text-brand-deep font-bold underline">Reset Filters</button>
          </div>
        )}
      </div>
    </div>
  );
};