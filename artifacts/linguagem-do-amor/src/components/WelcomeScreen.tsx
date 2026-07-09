import { useState } from 'react';
import { Heart, Sparkles, ChevronDown, User, Users, ArrowRight } from 'lucide-react';
import { loveLanguageOrder, loveLanguages, type LoveLanguageKey } from '../loveLanguages';
import ContributeButton from './ContributeButton';
import { type Gender, type Mode, themes } from '../theme';

interface Props {
  onStart: (mode: Mode, gender: Gender) => void;
}

export default function WelcomeScreen({ onStart }: Props) {
  const [openLang, setOpenLang] = useState<LoveLanguageKey | null>(null);
  const [selectedMode, setSelectedMode] = useState<{ mode: Mode; gender: Gender } | null>(null);

  const modes: {
    mode: Mode;
    gender: Gender;
    icon: typeof User;
    label: string;
    desc: string;
    themeGradient: string;
    themeRing: string;
  }[] = [
    {
      mode: 'single',
      gender: 'female',
      icon: User,
      label: 'Mulher',
      desc: 'Questionário feminino',
      themeGradient: themes.female.gradient,
      themeRing: themes.female.ring,
    },
    {
      mode: 'single',
      gender: 'male',
      icon: User,
      label: 'Homem',
      desc: 'Questionário masculino',
      themeGradient: themes.male.gradient,
      themeRing: themes.male.ring,
    },
    {
      mode: 'couple',
      gender: 'female',
      icon: Users,
      label: 'Casal',
      desc: 'Resultado dos dois',
      themeGradient: 'from-rose-400 to-ocean-500',
      themeRing: 'ring-sand-300',
    },
  ];

  const handleStart = () => {
    if (selectedMode) {
      onStart(selectedMode.mode, selectedMode.gender);
    }
  };

  return (
    <div className="animate-fade-in-up mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 py-12 text-center">
      <div className="relative mb-6 inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-rose-400 to-rose-600 shadow-lg shadow-rose-200">
        <Heart className="h-10 w-10 text-white" strokeWidth={2.2} fill="white" />
        <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md">
          <Sparkles className="h-4 w-4 text-amber-500" fill="currentColor" />
        </span>
      </div>

      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">
        Autoconhecimento afetivo
      </p>

      <h1 className="mb-5 text-4xl font-semibold leading-tight text-sand-900 sm:text-5xl">
        Descubra sua
        <br />
        <span className="bg-gradient-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">
          Linguagem do Amor
        </span>
      </h1>

      <p className="mb-8 max-w-xl text-base leading-relaxed text-sand-700 sm:text-lg">
        Todos expressamos e recebemos amor de formas diferentes. Em poucos minutos, você vai
        descobrir qual é a sua linguagem predominante — e como usá-la para transformar seus
        relacionamentos.
      </p>

      {/* Seleção de modo */}
      <div className="mb-8 w-full max-w-md">
        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-sand-500">
          Como você quer fazer o teste?
        </p>
        <div className="grid grid-cols-1 gap-3">
          {modes.map((m) => {
            const isSelected =
              selectedMode?.mode === m.mode && selectedMode?.gender === m.gender;
            const Icon = m.icon;
            return (
              <button
                key={m.label}
                onClick={() =>
                  setSelectedMode({ mode: m.mode, gender: m.gender })
                }
                className={`flex items-center gap-4 rounded-2xl border-2 bg-white p-4 text-left transition-all duration-300 ${
                  isSelected
                    ? `border-transparent ring-2 ${m.themeRing} shadow-lg scale-[1.01]`
                    : 'border-sand-200 hover:border-sand-300 hover:shadow-md'
                }`}
              >
                <span
                  className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${m.themeGradient} text-white shadow-md`}
                >
                  <Icon className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <span className="flex-1">
                  <span className="block text-lg font-semibold text-sand-900">{m.label}</span>
                  <span className="block text-sm text-sand-600">{m.desc}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Botão começar */}
      <button
        onClick={handleStart}
        disabled={!selectedMode}
        className={`group inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-base font-semibold text-white shadow-xl transition-all duration-300 ${
          selectedMode
            ? `bg-gradient-to-r ${
                selectedMode.gender === 'male' ? themes.male.gradient : themes.female.gradient
              } hover:scale-[1.03] active:scale-100 ${
                selectedMode.gender === 'male' ? 'shadow-ocean-200' : 'shadow-rose-200'
              }`
            : 'cursor-not-allowed bg-sand-300 shadow-none'
        }`}
      >
        Começar teste
        <ArrowRight
          className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={2.4}
        />
      </button>

      <p className="mt-5 text-xs text-sand-500">Leva poucos minutos para descobrir sua linguagem</p>

      {/* As 5 linguagens — teasers expansíveis */}
      <div className="mt-10 w-full max-w-md rounded-3xl border border-sand-200 bg-white/70 p-5 backdrop-blur-sm">
        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-sand-500">
          As 5 linguagens · toque para conhecer
        </p>
        <div className="grid grid-cols-1 gap-2.5">
          {loveLanguageOrder.map((key) => {
            const lang = loveLanguages[key];
            const isOpen = openLang === key;
            return (
              <div
                key={key}
                className={`overflow-hidden rounded-2xl border-2 bg-sand-50 transition-all duration-300 ${
                  isOpen ? `border-transparent ring-2 ${lang.ring}` : 'border-transparent hover:bg-sand-100'
                }`}
              >
                <button
                  onClick={() => setOpenLang(isOpen ? null : key)}
                  className="flex w-full items-center gap-3 px-4 py-2.5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg" aria-hidden>
                    {lang.emoji}
                  </span>
                  <span className="flex-1 text-sm font-medium text-sand-800">{lang.name}</span>
                  <ChevronDown
                    className={`h-4 w-4 flex-shrink-0 text-sand-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-3.5 pt-0 text-left text-sm italic leading-relaxed text-sand-600">
                      {lang.teaser}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8">
        <ContributeButton variant="inline" />
      </div>
    </div>
  );
}
