import React, { useState } from 'react';
import { TYPE_HIERARCHY, BRAND_IMAGERY, BRAND_COLORS } from '../constants';
import { ColorDefinition } from '../types';

export const Typography: React.FC = () => {
  const [headingBoxColor, setHeadingBoxColor] = useState<ColorDefinition>(BRAND_COLORS[0]); // Default to Spectrum Blue
  const [infoBoxColor, setInfoBoxColor] = useState<ColorDefinition>(BRAND_COLORS[3]); // Default to Alliance Blue

  const getBackgroundStyle = (color: ColorDefinition) => {
    return color.gradientStops 
      ? { background: `linear-gradient(135deg, ${color.gradientStops[0]}, ${color.gradientStops[1]}, ${color.gradientStops[2]})` }
      : { backgroundColor: color.hex };
  };

  /**
   * Curated color logic for the Heading Hierarchy card
   */
  const getHeadingCardStyles = (activeColor: ColorDefinition) => {
    const isSpectrum = activeColor.hex === BRAND_COLORS[0].hex;
    const isKillian = activeColor.hex === BRAND_COLORS[1].hex;
    const isDental = activeColor.hex === BRAND_COLORS[2].hex;
    const isAlliance = activeColor.hex === BRAND_COLORS[3].hex;
    const isRed = activeColor.hex === BRAND_COLORS[4].hex;
    const isSilver = activeColor.hex === BRAND_COLORS[5].hex;

    // Standard fallback logic
    let headingLabelStyle = { color: BRAND_COLORS[2].hex }; 
    let montserratLabelStyle = { color: BRAND_COLORS[3].hex };
    let titleStyle = { color: '#ffffff' };
    let subtitleStyle = { color: BRAND_COLORS[0].hex };

    if (isSpectrum) {
      headingLabelStyle = { color: BRAND_COLORS[1].hex }; // Killian
      montserratLabelStyle = { color: BRAND_COLORS[3].hex }; // Alliance
      titleStyle = { color: '#ffffff' }; // White
      subtitleStyle = { color: BRAND_COLORS[2].hex }; // Dental
    } else if (isKillian) {
      headingLabelStyle = { color: BRAND_COLORS[3].hex }; // Alliance
      montserratLabelStyle = { color: BRAND_COLORS[0].hex }; // Spectrum
      titleStyle = { color: '#ffffff' }; // White
      subtitleStyle = { color: BRAND_COLORS[0].hex }; // Spectrum
    } else if (isDental) {
      headingLabelStyle = { color: BRAND_COLORS[1].hex }; // Killian
      montserratLabelStyle = { color: BRAND_COLORS[0].hex }; // Spectrum
      titleStyle = { color: '#ffffff' }; // White
      subtitleStyle = { color: BRAND_COLORS[0].hex }; // Spectrum
    } else if (isAlliance) {
      headingLabelStyle = { color: BRAND_COLORS[1].hex }; // Killian
      montserratLabelStyle = { color: BRAND_COLORS[0].hex }; // Spectrum
      titleStyle = { color: BRAND_COLORS[0].hex }; // Spectrum
      subtitleStyle = { color: BRAND_COLORS[1].hex }; // Killian
    } else if (isRed) {
      headingLabelStyle = { color: BRAND_COLORS[0].hex }; // Spectrum
      montserratLabelStyle = { color: '#E5E4E2' }; // Metallic Silver
      titleStyle = { color: '#ffffff' }; // White
      subtitleStyle = { color: BRAND_COLORS[0].hex }; // Spectrum
    } else if (isSilver) {
      headingLabelStyle = { color: BRAND_COLORS[0].hex }; // Spectrum
      montserratLabelStyle = { color: BRAND_COLORS[0].hex }; // Spectrum
      titleStyle = { color: '#ffffff' }; // White
      subtitleStyle = { color: BRAND_COLORS[0].hex }; // Spectrum
    }

    return { headingLabelStyle, montserratLabelStyle, titleStyle, subtitleStyle };
  };

  /**
   * Curated color logic for the Informational Hierarchy card (Match Box 1 logic)
   */
  const getInfoCardStyles = (activeColor: ColorDefinition) => {
    const isSpectrum = activeColor.hex === BRAND_COLORS[0].hex;
    const isKillian = activeColor.hex === BRAND_COLORS[1].hex;
    const isDental = activeColor.hex === BRAND_COLORS[2].hex;
    const isAlliance = activeColor.hex === BRAND_COLORS[3].hex;
    const isRed = activeColor.hex === BRAND_COLORS[4].hex;
    const isSilver = activeColor.hex === BRAND_COLORS[5].hex;

    let infoLabelStyle = { color: BRAND_COLORS[2].hex }; 
    let loraLabelStyle = { color: BRAND_COLORS[3].hex };
    let text1Style = { color: '#ffffff' };
    let text2Style = { color: BRAND_COLORS[0].hex };
    let text3Style = { color: 'rgba(255,255,255,0.7)' };

    if (isSpectrum) {
      infoLabelStyle = { color: BRAND_COLORS[1].hex };
      loraLabelStyle = { color: BRAND_COLORS[3].hex };
      text1Style = { color: '#ffffff' };
      text2Style = { color: BRAND_COLORS[2].hex };
      text3Style = { color: 'rgba(255,255,255,0.7)' };
    } else if (isKillian) {
      infoLabelStyle = { color: BRAND_COLORS[3].hex };
      loraLabelStyle = { color: BRAND_COLORS[0].hex };
      text1Style = { color: '#ffffff' };
      text2Style = { color: BRAND_COLORS[0].hex };
      text3Style = { color: 'rgba(255,255,255,0.7)' };
    } else if (isDental) {
      infoLabelStyle = { color: BRAND_COLORS[1].hex };
      loraLabelStyle = { color: BRAND_COLORS[0].hex };
      text1Style = { color: '#ffffff' };
      text2Style = { color: BRAND_COLORS[0].hex };
      text3Style = { color: 'rgba(255,255,255,0.7)' };
    } else if (isAlliance) {
      infoLabelStyle = { color: BRAND_COLORS[1].hex };
      loraLabelStyle = { color: BRAND_COLORS[0].hex };
      text1Style = { color: BRAND_COLORS[0].hex };
      text2Style = { color: BRAND_COLORS[1].hex };
      text3Style = { color: 'rgba(5, 32, 48, 0.7)' };
    } else if (isRed) {
      infoLabelStyle = { color: BRAND_COLORS[0].hex };
      loraLabelStyle = { color: '#E5E4E2' };
      text1Style = { color: '#ffffff' };
      text2Style = { color: BRAND_COLORS[0].hex };
      text3Style = { color: 'rgba(255,255,255,0.7)' };
    } else if (isSilver) {
      infoLabelStyle = { color: BRAND_COLORS[0].hex };
      loraLabelStyle = { color: BRAND_COLORS[0].hex };
      text1Style = { color: '#ffffff' };
      text2Style = { color: BRAND_COLORS[0].hex };
      text3Style = { color: 'rgba(255,255,255,0.7)' };
    }

    return { infoLabelStyle, loraLabelStyle, text1Style, text2Style, text3Style };
  };

  const hStyles = getHeadingCardStyles(headingBoxColor);
  const iStyles = getInfoCardStyles(infoBoxColor);

  return (
    <div className="space-y-16 font-sans">
       <div>
        <h2 className="text-3xl md:text-4xl font-bold font-sans text-slate-900 mb-4">Typography</h2>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed font-normal">
          Our fonts are engineered for contrast. We use <span className="font-bold font-sans text-brand-dark underline decoration-brand-cyan underline-offset-4">Montserrat</span> for dominant headings and <span className="font-bold font-serif text-brand-deep">Lora</span> for body copy.
        </p>
      </div>

      <section className="grid md:grid-cols-2 gap-8">
        {/* Card 1: Heading Hierarchy */}
        <div 
          className="relative group rounded-3xl overflow-hidden shadow-2xl p-8 md:p-10 flex flex-col justify-center min-h-[400px] md:min-h-[450px] transition-all duration-700"
          style={getBackgroundStyle(headingBoxColor)}
        >
           <img src={BRAND_IMAGERY.hero} className="absolute inset-0 w-full h-full object-cover opacity-10 transition-transform duration-700 group-hover:scale-110 pointer-events-none" alt="Background" />
           <div className={`absolute inset-0 ${headingBoxColor.textColor === 'text-white' ? 'bg-black/10' : 'bg-white/10'}`} />
           
           <div className="relative z-10 space-y-6">
             <span className="text-[10px] uppercase tracking-[0.4em] font-black block transition-colors duration-500" style={hStyles.headingLabelStyle}>Heading Hierarchy</span>
             <h3 className="text-sm font-mono mb-6 block border-b pb-2 transition-colors duration-500" style={{ ...hStyles.montserratLabelStyle, borderColor: 'currentColor' }}>Montserrat</h3>
             <div className="space-y-2">
               <p className="font-sans font-semibold text-4xl sm:text-5xl lg:text-6xl leading-tight transition-colors duration-500" style={hStyles.titleStyle}>Engineering Excellence</p>
               <p className="font-sans font-bold text-xl sm:text-2xl lg:text-3xl transition-colors duration-500" style={hStyles.subtitleStyle}>Restorative Artistry</p>
             </div>
             
             {/* Swatches */}
             <div className="pt-8 md:pt-10 flex flex-wrap gap-2">
               {BRAND_COLORS.map((c, i) => (
                 <button
                   key={i}
                   onClick={() => setHeadingBoxColor(c)}
                   className={`w-8 h-8 md:w-10 md:h-10 rounded-xl shadow-lg border-2 transition-all hover:scale-110 active:scale-95 ${headingBoxColor.hex === c.hex ? 'border-white scale-110 ring-2 ring-brand-cyan' : 'border-white/20'}`}
                   style={c.gradientStops ? { background: `linear-gradient(135deg, ${c.gradientStops[0]}, ${c.gradientStops[1]})` } : { backgroundColor: c.hex }}
                   title={c.name}
                 />
               ))}
             </div>
           </div>
        </div>

        {/* Card 2: Informational Hierarchy */}
        <div 
          className="relative group rounded-3xl shadow-xl border p-8 md:p-10 flex flex-col justify-center min-h-[400px] md:min-h-[450px] transition-all duration-700 overflow-hidden"
          style={{ ...getBackgroundStyle(infoBoxColor), borderColor: infoBoxColor.hex + '33' }}
        >
           <img src={BRAND_IMAGERY.ceramist} className="absolute inset-0 w-full h-full object-cover opacity-5 transition-transform duration-1000 group-hover:scale-105 pointer-events-none" alt="Context" />
           
           <div className="space-y-6 relative z-10">
             <span className="text-[10px] uppercase tracking-[0.4em] font-black block transition-colors duration-500" style={iStyles.infoLabelStyle}>Informational Hierarchy</span>
             <h3 className="text-sm font-mono mb-6 block border-b pb-2 transition-colors duration-500" style={{ ...iStyles.loraLabelStyle, borderColor: 'currentColor' }}>Lora</h3>
             <div className="space-y-4">
               <p className="font-light text-xl md:text-2xl transition-colors duration-500" style={iStyles.text1Style}>Clean, Modern, Functional.</p>
               <p className="font-bold text-2xl md:text-3xl uppercase tracking-widest transition-colors duration-500" style={iStyles.text2Style}>Precision Data Lab</p>
               <p className="mt-6 leading-relaxed text-sm md:text-base font-serif italic transition-colors duration-500" style={iStyles.text3Style}>
                 Lora is our workhorse. It ensures that technical details are easily digestible across all touchpoints.
               </p>
             </div>
             
             {/* Swatches */}
             <div className="pt-8 md:pt-10 flex flex-wrap gap-2">
               {BRAND_COLORS.map((c, i) => (
                 <button
                   key={i}
                   onClick={() => setInfoBoxColor(c)}
                   className={`w-8 h-8 md:w-10 md:h-10 rounded-xl shadow-lg border-2 transition-all hover:scale-110 active:scale-95 ${infoBoxColor.hex === c.hex ? 'border-white scale-110 ring-2 ring-brand-cyan' : 'border-white/20'}`}
                   style={c.gradientStops ? { background: `linear-gradient(135deg, ${c.gradientStops[0]}, ${c.gradientStops[1]})` } : { backgroundColor: c.hex }}
                   title={c.name}
                 />
               ))}
             </div>
           </div>
        </div>
      </section>

      <section className="bg-white p-6 md:p-10 rounded-3xl border border-slate-100 shadow-sm">
        <h3 className="text-2xl font-bold font-serif text-slate-900 mb-8 flex items-center gap-3">
          Hierarchy & Usage
          <div className="h-[1px] flex-1 bg-slate-100" />
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-slate-100">
                <th className="py-4 pr-4 text-[10px] font-black uppercase tracking-widest text-slate-400 w-1/4">Style Label</th>
                <th className="py-4 pr-4 text-[10px] font-black uppercase tracking-widest text-slate-400 w-1/4">Technical Spec</th>
                <th className="py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Application</th>
              </tr>
            </thead>
            <tbody>
              {TYPE_HIERARCHY.map((rule, idx) => (
                <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                  <td className="py-8 pr-4 align-top">
                    <div className={`text-xl md:text-2xl mb-1 text-slate-900 font-bold ${rule.fontFamily === 'Lora' ? 'font-serif' : 'font-sans'}`}>{rule.element}</div>
                    <div className="text-[10px] font-black text-brand-deep uppercase tracking-widest">{rule.role}</div>
                  </td>
                  <td className="py-8 pr-4 align-top font-mono text-xs text-slate-500 space-y-1.5">
                    <div className="flex justify-between border-b border-slate-100 pb-1"><span>Weight</span> <span className="text-slate-900 font-bold">{rule.weight.split(' ')[0]}</span></div>
                    <div className="flex justify-between border-b border-slate-100 pb-1"><span>Size</span> <span className="text-slate-900 font-bold">{rule.size}</span></div>
                    <div className="flex justify-between border-b border-slate-100 pb-1"><span>Leading</span> <span className="text-slate-900 font-bold">{rule.lineHeight}</span></div>
                  </td>
                  <td className="py-8 align-top text-slate-600 leading-relaxed text-sm font-normal">{rule.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};