export interface ColorDefinition {
  name: string;
  hex: string;
  rgb: string;
  cmyk: string;
  usage: string;
  textColor: 'text-white' | 'text-slate-900';
  gradientStops?: string[]; // Optional specific gradient stops
}

export interface TypeRule {
  role: string;
  element: string;
  fontFamily: string;
  weight: string;
  size: string;
  tracking: string;
  lineHeight: string;
  usage: string;
}

export interface VoiceRule {
  category: string;
  do: string;
  dont: string;
  explanation: string;
}

export interface TimelineEvent {
  year: string;
  event: string;
  description: string;
}

export interface ProductLevel {
  name: string;
  tagline: string;
  description: string;
  image: string;
}

export type Section = 'dna' | 'typography' | 'logos' | 'voice';