import React, { useState } from 'react';
import { BRAND_COLORS, BRAND_IMAGERY, BRAND_STATS, BRAND_TIMELINE, ABOUT_US_STATEMENT, PRODUCT_EXPERTISE } from '../constants';
import { ChevronRight, ChevronLeft, Calendar, Copy, CheckCircle2 } from 'lucide-react';

export const VisualDNA: React.FC = () => {
  const [activeTimelineIdx, setActiveTimelineIdx] = useState(0);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const primaryLogoUrl = "https://44667010.fs1.hubspotusercontent-na1.net/hubfs/44667010/SK%20%20Wordmark%20Logo%20(White).png";

  return (
    <div className="space-y-20 font-sans">
      {/* Hero Header Section */}
      <section className="relative min-h-[450px] md:h-[550px] rounded-3xl overflow-hidden flex items-center shadow-2xl">
        <img src={BRAND_IMAGERY.hero} alt="Spectrum Killian at Work" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-transparent" />
        <div className="relative z-10 px-6 md:px-12 py-12 md:py-0 max-w-4xl">
          <div className="flex flex-col gap-4 mb-6">
            <img 
              src={primaryLogoUrl} 
              alt="Spectrum Killian Primary Logo" 
              className="h-10 md:h-14 w-auto object-contain self-start opacity-90 drop-shadow-2xl brightness-110" 
            />
            <span className="text-brand-cyan font-bold uppercase tracking-[0.4em] text-[10px] block">Brand Operating System</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-6">Visual DNA</h2>
          <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-normal mb-8 max-w-2xl">{ABOUT_US_STATEMENT}</p>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 border-t border-white/10 pt-8">
            {BRAND_STATS.map((stat, i) => (
              <div key={i} className="flex flex-col items-start">
                <div className="flex items-center gap-2 text-brand-cyan mb-1">
                  <stat.icon size={18} />
                  <span className="text-xl md:text-2xl font-serif font-bold">{stat.value}</span>
                </div>
                <div className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col lg:flex-row h-full lg:h-[500px]">
        <div className="w-full lg:w-80 bg-slate-900 border-r border-slate-800 flex flex-col">
          <div className="p-8 border-b border-slate-800">
            <h2 className="text-2xl font-bold font-serif text-white">Company Timeline</h2>
            <p className="text-slate-500 text-xs mt-2 uppercase tracking-widest font-bold">Select an Era</p>
          </div>
          <div className="flex-1 overflow-y-auto lg:overflow-y-auto max-h-60 lg:max-h-full custom-scrollbar">
            {BRAND_TIMELINE.map((item, i) => (
              <button key={i} onClick={() => setActiveTimelineIdx(i)} className={`w-full text-left px-8 py-5 transition-all duration-300 flex items-center justify-between group ${activeTimelineIdx === i ? 'bg-brand-deep text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
                <div>
                  <span className={`text-[10px] font-mono block mb-1 uppercase tracking-tighter ${activeTimelineIdx === i ? 'text-brand-cyan' : 'text-slate-500'}`}>{item.year}</span>
                  <span className="font-bold text-sm leading-tight block">{item.event}</span>
                </div>
                <ChevronRight size={16} className={`transition-transform ${activeTimelineIdx === i ? 'translate-x-1' : 'opacity-0 group-hover:opacity-100'}`} />
              </button>
            ))}
          </div>
        </div>
        <div className="flex-1 relative bg-slate-50 p-8 md:p-12 lg:p-16 flex flex-col justify-center overflow-hidden min-h-[400px]">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none"><Calendar size={300} /></div>
          <div key={activeTimelineIdx} className="relative z-10 animate-fade-in-right">
            <div className="inline-flex items-center gap-4 mb-8">
              <span className="text-4xl md:text-6xl lg:text-7xl font-serif font-black text-brand-deep/10">{BRAND_TIMELINE[activeTimelineIdx].year}</span>
              <div className="h-px w-12 bg-brand-cyan" />
            </div>
            <div className="max-w-2xl space-y-6">
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold font-serif text-slate-900 leading-tight">{BRAND_TIMELINE[activeTimelineIdx].event}</h3>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-normal border-l-4 border-brand-cyan pl-6">{BRAND_TIMELINE[activeTimelineIdx].description}</p>
            </div>
            <div className="mt-12 flex gap-4">
              <button onClick={() => setActiveTimelineIdx(Math.max(0, activeTimelineIdx - 1))} disabled={activeTimelineIdx === 0} className="p-3 rounded-full border border-slate-200 text-slate-400 hover:text-brand-deep hover:border-brand-deep transition-all disabled:opacity-30 disabled:pointer-events-none"><ChevronLeft size={24} /></button>
              <button onClick={() => setActiveTimelineIdx(Math.min(BRAND_TIMELINE.length - 1, activeTimelineIdx + 1))} disabled={activeTimelineIdx === BRAND_TIMELINE.length - 1} className="p-3 rounded-full border border-slate-200 text-slate-400 hover:text-brand-deep hover:border-brand-deep transition-all disabled:opacity-30 disabled:pointer-events-none"><ChevronRight size={24} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Expertise */}
      <section className="bg-slate-900 p-8 md:p-12 rounded-[2.5rem] text-white shadow-2xl overflow-hidden relative">
        <div className="relative z-10">
          <header className="mb-12 md:mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Broad Product Expertise</h2>
              <p className="text-slate-400 max-w-xl font-normal">A snapshot of our manufacturing distribution across clinical categories.</p>
            </div>
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-cyan">Expertise Matrix v2.0</div>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {PRODUCT_EXPERTISE.map((product, i) => (
              <div key={i} className="group">
                <div className="relative aspect-square mb-6 rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center p-4 transition-all duration-500 group-hover:border-brand-cyan/50">
                   <img src={product.image} alt={product.label} className="w-full h-full object-contain mix-blend-lighten opacity-80 group-hover:opacity-100 transition-opacity" />
                   <div className="absolute bottom-4 right-4 bg-brand-cyan text-slate-900 px-3 py-1 rounded-full font-black text-xs shadow-lg">{product.percentage}%</div>
                </div>
                <h4 className="text-lg font-bold font-serif mb-2">{product.label}</h4>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-cyan transition-all duration-1000" style={{ width: `${product.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      </section>

      {/* Material Palette Section */}
      <section>
        <div className="flex justify-between items-end mb-10 border-b border-slate-200 pb-6">
          <div>
            <h2 className="text-3xl font-bold font-serif text-slate-900">The Material Palette</h2>
            <p className="text-slate-500 mt-2 font-normal">Click any card to copy the hex value.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BRAND_COLORS.map((color) => {
            const backgroundStyle = color.gradientStops 
              ? { background: `linear-gradient(135deg, ${color.gradientStops[0]}, ${color.gradientStops[1]}, ${color.gradientStops[2]})` }
              : { backgroundColor: color.hex };

            return (
              <div key={color.name} onClick={() => copyToClipboard(color.hex)} className="group flex flex-col gap-4 cursor-pointer relative">
                <div className="relative h-56 rounded-2xl overflow-hidden shadow-lg transition-all hover:shadow-2xl duration-500" style={backgroundStyle}>
                  <div className="absolute inset-0 z-10">
                     <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/30 to-transparent opacity-80" />
                  </div>
                  <div className="absolute inset-0 border border-white/20 rounded-2xl z-20" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-30 bg-black/10 backdrop-blur-[4px]">
                    <div className="text-center">
                      <Copy className={color.textColor} size={24} />
                      <span className={`text-xs font-bold block mt-2 ${color.textColor}`}>Copy Hex</span>
                    </div>
                  </div>
                  {copiedHex === color.hex && (
                    <div className="absolute inset-0 flex items-center justify-center bg-brand-dark/80 backdrop-blur-sm z-40 transition-all">
                      <div className="text-center text-white">
                        <CheckCircle2 className="mx-auto mb-2 text-brand-cyan" size={32} />
                        <span className="text-sm font-bold tracking-widest uppercase">Copied!</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="px-1 font-sans">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-semibold text-lg text-slate-900">{color.name}</h3>
                    <span className="font-mono text-[10px] text-slate-400 bg-slate-100 px-2 py-1 rounded">{color.hex}</span>
                  </div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-4 font-bold">{color.usage}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      
      <style>{`
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-right {
          animation: fade-in-right 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};