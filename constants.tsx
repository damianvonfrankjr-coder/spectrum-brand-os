import { ColorDefinition, TypeRule, VoiceRule, TimelineEvent, ProductLevel } from './types';
import React from 'react';
import { Factory, Users, Map, Handshake, Award, TrendingUp } from 'lucide-react';

export const BRAND_IMAGERY = {
  hero: "https://44667010.fs1.hubspotusercontent-na1.net/hubfs/44667010/Spectrum%20Killian%20at%20Work%20Image.jpeg",
  ceramist: "https://44667010.fs1.hubspotusercontent-na1.net/hubfs/44667010/Spectrum%20Killian%20Ceramist%20Station.png",
  printer: "https://44667010.fs1.hubspotusercontent-na1.net/hubfs/44667010/3D%20dental%20resin%20printer.jpeg",
  milling: "https://44667010.fs1.hubspotusercontent-na1.net/hubfs/44667010/wet-milling%20process.jpg",
  tray: "https://44667010.fs1.hubspotusercontent-na1.net/hubfs/44667010/Versamill%20Tray%20Holder.jpg"
};

export const ABOUT_US_STATEMENT = "Spectrum Killian is a leading medical products manufacturer focused on the dental industry. We serve top dental organizations nationwide from two world class, scaled manufacturing facilities. We are experts at tailoring solutions for our customers through dedicated production and white label branding.";

export const BRAND_STATS = [
  { label: 'Mfg. Sites', value: '2', icon: Factory },
  { label: 'FTEs', value: '300+', icon: Users },
  { label: 'Active States', value: '48', icon: Map },
  { label: 'Active Customers', value: '8,000+', icon: Handshake },
  { label: 'Strategic Partnerships', value: '16', icon: Award },
  { label: 'Capacity Expansion', value: '5X', icon: TrendingUp }
];

export const BRAND_TIMELINE: TimelineEvent[] = [
  { year: '1965', event: 'One of the founding dental labs', description: 'Established as the oldest founding dental lab in Southern California (A&M Dental Laboratories).' },
  { year: '1983', event: 'Killian brothers form ceramics', description: 'Killian Dental Ceramics is formed by the Killian brothers.' },
  { year: '1999', event: 'Digital Pioneering', description: 'Spectrum is founded and pioneers the introduction of CAD in dental workflows.' },
  { year: '2018 - 2020', event: 'Formation of Spectrum Killian', description: 'Chromium Dental acquires 3 labs and forms Spectrum Killian.' },
  { year: '2021', event: 'Strategic Fortification', description: 'Several more labs are added to team, fortifying the product offering.' },
  { year: '2022', event: 'Market Consolidation', description: '7 dental labs are acquired and combined in Los Angeles.' },
  { year: '2022', event: 'Orange County Facility', description: 'Spectrum Killian opens its state-of-the-art new facility in Orange County.' },
  { year: '2023', event: 'Open Implants Integration', description: 'Open Implants is acquired, and integration begins into Orange County.' },
  { year: '2024', event: 'FDA Center Launch', description: 'Open Implants launches its FDA registered milling center.' }
];

export const PRODUCT_EXPERTISE = [
  { label: 'Crown & Bridge', percentage: 37, image: 'https://44667010.fs1.hubspotusercontent-na1.net/hubfs/44667010/Crown-abutment.jpeg' },
  { label: 'Implant', percentage: 20, image: 'https://44667010.fs1.hubspotusercontent-na1.net/hubfs/44667010/Implants.jpeg' },
  { label: 'Removable', percentage: 20, image: 'https://44667010.fs1.hubspotusercontent-na1.net/hubfs/44667010/Denture.jpg' },
  { label: 'All-on-X ("AOX")', percentage: 15, image: 'https://44667010.fs1.hubspotusercontent-na1.net/hubfs/44667010/AOX.jpg' },
  { label: 'Other Products', percentage: 8, image: 'https://44667010.fs1.hubspotusercontent-na1.net/hubfs/44667010/Other%20Components.png' }
];

export const PRODUCT_LEVELS: ProductLevel[] = [
  { 
    name: 'da Vinci', 
    tagline: 'High-End Esthetics', 
    image: 'https://44667010.fs1.hubspotusercontent-na1.net/hubfs/44667010/da%20Vinci%20Logo.png',
    description: 'Nationally recognized brand with a 45 year-tenure, exclusively focused on highly personalized, high-end esthetic smile restorations.' 
  },
  { 
    name: 'Spectrum Signature', 
    tagline: 'Customized Precision', 
    image: 'https://44667010.fs1.hubspotusercontent-na1.net/hubfs/44667010/Signature%20Logo.png',
    description: 'Highly customized restorations with a balanced blend of esthetics with tight tolerance around form, fit, and function.' 
  },
  { 
    name: 'Essentials', 
    tagline: 'High Volume Efficiency', 
    image: 'https://44667010.fs1.hubspotusercontent-na1.net/hubfs/44667010/Essentials%20Logo.png',
    description: 'High volume focused line; lean, fast and scalable, fabricated in the U.S. with higher than market average focus on function and fit.' 
  }
];

export const SpectrumLogo = ({ className, color = "color" }: { className?: string, color?: "color" | "black" | "white" }) => {
  const fill1 = color === "color" ? "#4ABEEE" : color === "black" ? "#000000" : "#FFFFFF";
  const fill2 = color === "color" ? "#1882C7" : color === "black" ? "#000000" : "#FFFFFF";
  
  return (
    <svg viewBox="0 0 100 115" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill={fill1} opacity={color === "color" ? "0.1" : "0"} />
      <path d="M50 0L93.3013 25V45C93.3013 45 70 20 50 35C30 50 6.69873 25 6.69873 25V75L50 100L93.3013 75V55C93.3013 55 70 80 50 65C30 50 6.69873 75 6.69873 75V25L50 0Z" fill={color === "white" ? "transparent" : "white"} />
      <path d="M6.7 25L50 0L93.3 25V40C80 25 65 35 50 45C35 55 20 45 6.7 35V25Z" fill={fill1} />
      <path d="M93.3 75L50 100L6.7 75V60C20 75 35 65 50 55C65 45 80 55 93.3 65V75Z" fill={fill2} />
    </svg>
  );
};

export const BRAND_COLORS: ColorDefinition[] = [
  {
    name: 'Spectrum Blue',
    hex: '#052030',
    rgb: '5, 32, 48',
    cmyk: '90, 33, 0, 81',
    usage: 'Primary Backgrounds, Text',
    textColor: 'text-white'
  },
  {
    name: 'Killian Blue',
    hex: '#1882C7',
    rgb: '24, 130, 199',
    cmyk: '88, 35, 0, 22',
    usage: 'Primary Brand Color, Action Items',
    textColor: 'text-white'
  },
  {
    name: 'Dental Blue',
    hex: '#4ABEEE',
    rgb: '74, 190, 238',
    cmyk: '69, 20, 0, 7',
    usage: 'Highlights, Gradients, Accents',
    textColor: 'text-slate-900'
  },
  {
    name: 'Alliance Blue',
    hex: '#C3E8FA',
    rgb: '195, 232, 250',
    cmyk: '22, 7, 0, 2',
    usage: 'Subtle Backgrounds, UI Elements',
    textColor: 'text-slate-900'
  },
  {
    name: 'Lab Red',
    hex: '#ff6b6b',
    rgb: '255, 107, 107',
    cmyk: '0, 58, 58, 0',
    usage: 'Premium Accents, Awards, Special Status',
    textColor: 'text-white',
    gradientStops: ['#cc5656', '#ff6b6b', '#ff8f8f']
  },
  {
    name: 'Solutions Silver',
    hex: '#A9AFB2',
    rgb: '169, 175, 178',
    cmyk: '10, 6, 0, 24',
    usage: 'Structure, Neutral Elements',
    textColor: 'text-slate-900',
    gradientStops: ['#71797E', '#A9AFB2', '#E5E4E2']
  }
];

export const TYPE_HIERARCHY: TypeRule[] = [
  {
    role: 'Display / Logo',
    element: 'H1',
    fontFamily: 'Montserrat',
    weight: 'SemiBold (600)',
    size: '48px+',
    tracking: '-0.02em',
    lineHeight: '1.1',
    usage: 'Main brand name and hero section titles. Captures attention.'
  },
  {
    role: 'Section Heading',
    element: 'H2',
    fontFamily: 'Montserrat',
    weight: 'Bold (700)',
    size: '32px',
    tracking: '-0.01em',
    lineHeight: '1.2',
    usage: 'Page titles and major section dividers. Modern and authoritative.'
  },
  {
    role: 'Subheading',
    element: 'H3',
    fontFamily: 'Lora',
    weight: 'Medium (500)',
    size: '20px',
    tracking: '0em',
    lineHeight: '1.4',
    usage: 'Card titles and technical labels. Elegant and readable.'
  },
  {
    role: 'Body Copy',
    element: 'P',
    fontFamily: 'Lora',
    weight: 'Regular (400)',
    size: '16px',
    tracking: '0em',
    lineHeight: '1.6',
    usage: 'Standard paragraph text. Timeless and legible.'
  }
];

export const VOICE_GUIDELINES: VoiceRule[] = [
  {
    category: 'Tone',
    do: 'Innovative, Precision-focused, Authoritative.',
    dont: 'Playful, Whimsical, Uncertainty.',
    explanation: 'We are experts. Our language should reflect the geometric precision of our logo.'
  },
  {
    category: 'Clarity',
    do: 'Use active voice. "We engineer solutions."',
    dont: 'Use passive voice. "Solutions are engineered by us."',
    explanation: 'Passive voice weakens our technical authority.'
  },
  {
    category: 'Complexity',
    do: 'Simplify the complex. Make high-tech accessible.',
    dont: 'Overwhelm with jargon without context.',
    explanation: 'True intelligence is the ability to explain complex systems simply.'
  }
];