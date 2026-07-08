export type Gender = 'male' | 'female';

export type Mode = 'single' | 'couple';

export interface Theme {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  gradient: string;
  gradientSoft: string;
  ring: string;
  text: string;
  textBg: string;
  textBgSoft: string;
  hoverBorder: string;
  hoverBg: string;
  shadow: string;
  blobA: string;
  blobB: string;
  blobC: string;
  pageBg: string;
}

export const themes: Record<Gender, Theme> = {
  female: {
    primary: 'text-rose-500',
    primaryLight: 'text-rose-400',
    primaryDark: 'text-rose-700',
    gradient: 'from-rose-400 to-rose-600',
    gradientSoft: 'from-rose-50 via-sand-50 to-white',
    ring: 'ring-rose-300',
    text: 'text-rose-500',
    textBg: 'bg-rose-500',
    textBgSoft: 'bg-rose-100',
    hoverBorder: 'hover:border-rose-300',
    hoverBg: 'hover:bg-rose-50/60',
    shadow: 'shadow-rose-200',
    blobA: 'bg-rose-200/40',
    blobB: 'bg-amber-200/30',
    blobC: 'bg-rose-100/50',
    pageBg: 'from-rose-50 via-sand-50 to-white',
  },
  male: {
    primary: 'text-ocean-600',
    primaryLight: 'text-ocean-500',
    primaryDark: 'text-ocean-800',
    gradient: 'from-ocean-400 to-ocean-600',
    gradientSoft: 'from-ocean-50 via-sand-50 to-white',
    ring: 'ring-ocean-300',
    text: 'text-ocean-600',
    textBg: 'bg-ocean-600',
    textBgSoft: 'bg-ocean-100',
    hoverBorder: 'hover:border-ocean-300',
    hoverBg: 'hover:bg-ocean-50/60',
    shadow: 'shadow-ocean-200',
    blobA: 'bg-ocean-200/40',
    blobB: 'bg-sky-200/30',
    blobC: 'bg-ocean-100/50',
    pageBg: 'from-ocean-50 via-sand-50 to-white',
  },
};

export const genderLabels: Record<Gender, string> = {
  male: 'Homem',
  female: 'Mulher',
};

export const genderEmoji: Record<Gender, string> = {
  male: '👨',
  female: '👩',
};
