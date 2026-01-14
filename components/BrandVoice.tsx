import React from 'react';
import { VOICE_GUIDELINES, BRAND_IMAGERY, PRODUCT_LEVELS } from '../constants';
import { Check, X, ShieldCheck, Sparkles, Zap, Target, Layers, Cpu, Share2, Cog } from 'lucide-react';

export const BrandVoice: React.FC = () => {
  return (
    <div className="space-y-20 animate-fade-in font-sans">
      <header className="relative p-8 md:p-12 rounded-[2rem] bg-brand-dark overflow-hidden min-h-[300px] md:min-h-[350px] flex items-center shadow-xl">
        <img 
          src={BRAND_IMAGERY.ceramist} 
          alt="Ceramist" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
        <div className="relative z-10 max-w-3xl">
          <span className="text-brand-cyan font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Strategic Positioning</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-6">Voice & Strategy</h2>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-normal">
            Spectrum Killian is your <span className="text-white font-bold italic underline decoration-brand-cyan underline-offset-4">Strategic Partner</span>. Our voice communicates world-class engineering, custom solutions, and collaborative success.
          </p>
        </div>
      </header>

      {/* Differentiated Value Prop Section */}
      <section className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h3 className="text-[10px] font-black tracking-[0.4em] text-brand-deep uppercase mb-4">Spectrum Killian is a Partner</h3>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 mb-6">Differentiated Value Prop</h2>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed italic">"Spectrum Killian is more than a dental lab offering dental restorations. We are your PARTNER; custom engineering solutions to meet your goals."</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { 
              title: 'CAPTURE', 
              icon: <Target className="text-brand-cyan" size={32} />, 
              desc: 'Understand Customer Challenges & Create Original Solutions' 
            },
            { 
              title: 'TAILOR', 
              icon: <Layers className="text-brand-deep" size={32} />, 
              desc: 'Tailor Solutions using World-Class Lean and Process Driven Manufacturing' 
            },
            { 
              title: 'SOLVE', 
              icon: <Cpu className="text-slate-800" size={32} />, 
              desc: 'Solve Challenges with Innovative Technology Stack, Driving Scale and Efficiencies' 
            }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center group bg-slate-50 p-8 rounded-3xl border border-white transition-all hover:bg-white hover:shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="text-xl font-black tracking-widest text-slate-900 mb-3">{item.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
           <div className="p-6 md:p-8 bg-brand-cyan/5 rounded-3xl border border-brand-cyan/20 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
              <div className="p-4 bg-brand-cyan rounded-2xl text-white shrink-0">
                <Share2 size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Vertical Integration</h4>
                <p className="text-sm text-slate-600">Unlocks competitive advantages through controlled end-to-end workflows.</p>
              </div>
           </div>
           <div className="p-6 md:p-8 bg-slate-900/5 rounded-3xl border border-slate-900/10 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
              <div className="p-4 bg-slate-800 rounded-2xl text-white shrink-0">
                <Cog size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Manufacturing Focused Team</h4>
                <p className="text-sm text-slate-600">Thoughtful Org. Design ensures specialists are aligned with manufacturing excellence.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Product Levels Section with Logos */}
      <section>
        <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
           <div>
            <h3 className="text-2xl md:text-3xl font-bold font-serif text-slate-900">Spectrum Killian Product Levels:</h3>
            <p className="text-slate-500 font-normal">Tiered restorative solutions engineered for every clinical requirement.</p>
           </div>
           <div className="h-px bg-slate-100 flex-1 ml-10 hidden md:block" />
        </header>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
           {PRODUCT_LEVELS.map((level, i) => (
             <div key={i} className="flex flex-col bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all overflow-hidden group">
                <div className="h-40 p-8 bg-slate-50/50 flex items-center justify-center border-b border-slate-100">
                   <img src={level.image} alt={level.name} className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-deep mb-3 block">{level.tagline}</span>
                  <h4 className="text-2xl font-bold font-serif text-slate-900 mb-4">{level.name}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">{level.description}</p>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Voice Guidelines Grid */}
      <section className="grid gap-8">
        <h3 className="text-2xl font-bold font-serif text-slate-900 border-b border-slate-200 pb-4">Communication Standards</h3>
        {VOICE_GUIDELINES.map((guide, idx) => (
          <div key={idx} className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-500">
             <div className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-deep">
                    {idx === 0 ? <Zap size={24} /> : idx === 1 ? <ShieldCheck size={24} /> : <Sparkles size={24} />}
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-slate-900">{guide.category}</h4>
                </div>
                
                <p className="text-slate-500 mb-8 italic text-base md:text-lg max-w-2xl font-serif">"{guide.explanation}"</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 rounded-xl p-6 border-l-4 border-emerald-500">
                    <div className="flex items-center gap-2 mb-3 text-emerald-600 font-bold uppercase text-[10px] tracking-widest">
                      <Check size={16} />
                      <span>Prescribed</span>
                    </div>
                    <p className="text-slate-800 text-base md:text-lg font-medium">"{guide.do}"</p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-6 border-l-4 border-rose-500">
                    <div className="flex items-center gap-2 mb-3 text-rose-600 font-bold uppercase text-[10px] tracking-widest">
                      <X size={16} />
                      <span>Contraindicated</span>
                    </div>
                    <p className="text-slate-800 text-base md:text-lg font-medium opacity-60">"{guide.dont}"</p>
                  </div>
                </div>
             </div>
          </div>
        ))}
      </section>
    </div>
  );
};