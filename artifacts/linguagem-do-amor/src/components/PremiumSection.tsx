import { useState } from 'react';
import {
  Sparkles,
  Crown,
  BookOpen,
  Heart,
  FileText,
  Check,
  Lock,
  ArrowRight,
  Calendar,
  Award,
  PenLine,
} from 'lucide-react';
import type { LoveLanguageKey } from '../loveLanguages';
import { loveLanguages } from '../loveLanguages';

export type PlanType = 'premium' | 'premium_plus';

interface Props {
  primaryLanguage: LoveLanguageKey;
  coupleMode: boolean;
  onUnlock: (plan: PlanType) => void;
}

export default function PremiumSection({ primaryLanguage, coupleMode, onUnlock }: Props) {
  const [selectedPlan, setSelectedPlan] = useState<PlanType | null>(null);

  const lang = loveLanguages[primaryLanguage];

  const premiumFeatures = [
    { icon: FileText, text: 'Relatório detalhado' },
    { icon: Heart, text: 'Compatibilidade do casal' },
    { icon: Sparkles, text: 'PDF elegante' },
    { icon: BookOpen, text: 'Sugestões práticas' },
  ];

  const premiumPlusFeatures = [
    { icon: Calendar, text: 'Jornada de 40 dias' },
    { icon: BookOpen, text: 'Devocional diário' },
    { icon: PenLine, text: 'Diário pessoal' },
    { icon: Award, text: 'Certificado de conclusão' },
    { icon: Sparkles, text: `Desafios personalizados para ${lang.short}` },
    { icon: Heart, text: 'Acesso vitalício' },
  ];

  const handleConfirm = () => {
    if (selectedPlan) onUnlock(selectedPlan);
  };

  return (
    <div className="animate-fade-in-up mt-10">
      {/* Cabeçalho da seção */}
      <div className="mb-6 text-center">
        <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 shadow-lg shadow-amber-200">
          <Crown className="h-7 w-7 text-white" />
        </div>
        <h2 className="mb-2 text-2xl font-semibold text-sand-900 sm:text-3xl">
          Continue sua jornada
        </h2>
        <p className="mx-auto max-w-lg text-sm leading-relaxed text-sand-600 sm:text-base">
          Agora que você descobriu como {coupleMode ? 'seu cônjuge' : 'você'} se sente amado
          {coupleMode ? '' : ' e como seu cônjuge se sente amado'}, você pode iniciar uma jornada
          exclusiva de 40 dias para aprender a amar de forma prática e bíblica.
        </p>
      </div>

      {/* Cards de planos */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* PREMIUM */}
        <div
          className={`relative overflow-hidden rounded-3xl border-2 bg-white p-6 shadow-sm transition-all duration-300 ${
            selectedPlan === 'premium'
              ? 'border-amber-400 ring-2 ring-amber-200 shadow-lg scale-[1.01]'
              : 'border-sand-200 hover:border-amber-300 hover:shadow-md'
          }`}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 text-white shadow-md">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-sand-900">Premium</h3>
              <p className="text-xs text-sand-500">Pagamento único</p>
            </div>
          </div>

          <ul className="mb-5 space-y-2.5">
            {premiumFeatures.map((f, i) => (
              <li key={i} className="flex items-center gap-2.5 text-sm text-sand-700">
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-sky-100">
                  <Check className="h-3 w-3 text-sky-600" strokeWidth={3} />
                </span>
                <f.icon className="h-4 w-4 text-sky-500" />
                {f.text}
              </li>
            ))}
          </ul>

          <button
            onClick={() => setSelectedPlan('premium')}
            className={`w-full rounded-full py-3 text-sm font-semibold transition-all ${
              selectedPlan === 'premium'
                ? 'bg-gradient-to-r from-sky-500 to-sky-600 text-white shadow-md'
                : 'border-2 border-sand-200 text-sand-700 hover:border-sky-300 hover:bg-sky-50'
            }`}
          >
            {selectedPlan === 'premium' ? 'Selecionado' : 'Quero o Premium'}
          </button>
        </div>

        {/* PREMIUM PLUS */}
        <div
          className={`relative overflow-hidden rounded-3xl border-2 bg-white p-6 shadow-sm transition-all duration-300 ${
            selectedPlan === 'premium_plus'
              ? 'border-amber-400 ring-2 ring-amber-200 shadow-lg scale-[1.01]'
              : 'border-sand-200 hover:border-amber-300 hover:shadow-md'
          }`}
        >
          {/* Badge de destaque */}
          <span className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
            Recomendado
          </span>

          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-md">
              <Crown className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-sand-900">Premium Plus</h3>
              <p className="text-xs text-sand-500">Pagamento único</p>
            </div>
          </div>

          <ul className="mb-5 space-y-2.5">
            {premiumPlusFeatures.map((f, i) => (
              <li key={i} className="flex items-center gap-2.5 text-sm text-sand-700">
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-100">
                  <Check className="h-3 w-3 text-amber-600" strokeWidth={3} />
                </span>
                <f.icon className="h-4 w-4 text-amber-500" />
                {f.text}
              </li>
            ))}
          </ul>

          <button
            onClick={() => setSelectedPlan('premium_plus')}
            className={`w-full rounded-full py-3 text-sm font-semibold transition-all ${
              selectedPlan === 'premium_plus'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md'
                : 'border-2 border-sand-200 text-sand-700 hover:border-amber-300 hover:bg-amber-50'
            }`}
          >
            {selectedPlan === 'premium_plus' ? 'Selecionado' : 'Quero o Premium Plus'}
          </button>
        </div>
      </div>

      {/* Botão de confirmação */}
      <div className="mt-5 text-center">
        <button
          onClick={handleConfirm}
          disabled={!selectedPlan}
          className={`group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 ${
            selectedPlan
              ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-200 hover:scale-[1.03] active:scale-95'
              : 'cursor-not-allowed bg-sand-200 text-sand-400'
          }`}
        >
          <Lock className="h-4 w-4" />
          {selectedPlan ? 'Desbloquear agora' : 'Escolha um plano acima'}
          {selectedPlan && (
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          )}
        </button>
        <p className="mt-2 text-xs text-sand-400">
          Pagamento único · Acesso vitalício · Sem assinatura
        </p>
      </div>
    </div>
  );
}
