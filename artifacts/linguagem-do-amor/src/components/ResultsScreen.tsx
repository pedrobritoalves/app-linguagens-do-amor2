import { useMemo, useState } from 'react';
import {
  Heart,
  Home,
  Copy,
  Check,
  Share2,
  Sparkles,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Clock,
  Gift,
  HandHelping,
  HandHeart,
  type LucideIcon,
} from 'lucide-react';
import { loveLanguages, loveLanguageOrder, genderContent, type LoveLanguageKey, type Gender } from '../loveLanguages';
import { themes } from '../theme';
import ContributeButton from './ContributeButton';
import PremiumSection, { type PlanType } from './PremiumSection';

interface Props {
  scores: Record<LoveLanguageKey, number>;
  totalQuestions: number;
  gender: Gender;
  onHome: () => void;
  onUnlockPremium: (plan: PlanType, primaryLanguage: LoveLanguageKey) => void;
}

const iconMap: Record<string, LucideIcon> = {
  MessageCircle,
  Clock,
  Gift,
  HandHelping,
  HandHeart,
};

export default function ResultsScreen({ scores, totalQuestions, gender, onHome, onUnlockPremium }: Props) {
  const [copied, setCopied] = useState(false);
  const [openLang, setOpenLang] = useState<LoveLanguageKey | null>(null);

  const theme = themes[gender];
  const content = genderContent[gender];

  const ranked = useMemo(() => {
    return loveLanguageOrder
      .map((key) => ({ key, score: scores[key] ?? 0 }))
      .sort((a, b) => b.score - a.score);
  }, [scores]);

  const topScore = ranked[0].score;
  const primary = ranked.filter((r) => r.score === topScore).map((r) => r.key);
  const isTie = primary.length > 1;

  const secondaryScore = ranked.find((r) => r.score < topScore)?.score ?? 0;
  const secondary = ranked.filter((r) => r.score === secondaryScore && secondaryScore > 0).map((r) => r.key);

  const getDesc = (key: LoveLanguageKey) => content[key].description;
  const getInRel = (key: LoveLanguageKey) => content[key].inRelationship;
  const getForPartner = (key: LoveLanguageKey) => content[key].forPartner;

  const shareText = useMemo(() => {
    const lines: string[] = [];
    lines.push('💖 Descubra sua Linguagem do Amor');
    lines.push('');
    if (isTie) {
      lines.push(`Minhas linguagens predominantes (empate):`);
      primary.forEach((k) => lines.push(`   • ${loveLanguages[k].name}`));
    } else {
      lines.push(`Minha linguagem do amor: ${loveLanguages[primary[0]].name} ${loveLanguages[primary[0]].emoji}`);
      if (secondary.length > 0) {
        lines.push(`Segunda mais forte: ${loveLanguages[secondary[0]].name}`);
      }
    }
    lines.push('');
    lines.push('Pontuação:');
    ranked.forEach((r) => {
      lines.push(`   ${loveLanguages[r.key].emoji} ${loveLanguages[r.key].short}: ${r.score}/${totalQuestions}`);
    });

    const topKeys = isTie ? primary : [primary[0], ...secondary].slice(0, 2);
    lines.push('');
    lines.push('──── Dicas práticas ────');
    topKeys.forEach((k) => {
      const lang = loveLanguages[k];
      lines.push('');
      lines.push(`${lang.emoji} ${lang.name}:`);
      lines.push('  Como praticar:');
      content[k].inRelationship.forEach((tip) => lines.push(`    • ${tip}`));
      lines.push('  Com seu par:');
      content[k].forPartner.forEach((tip) => lines.push(`    • ${tip}`));
    });

    lines.push('');
    lines.push('Faça você também! 💕');
    return lines.join('\n');
  }, [primary, secondary, isTie, ranked, totalQuestions, content]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const maxScore = totalQuestions;

  return (
    <div className="mx-auto max-w-2xl px-5 py-10 sm:px-6">
      {/* Cabeçalho */}
      <div className="animate-fade-in-up mb-8 text-center">
        <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${theme.gradient} shadow-lg ${theme.shadow}`}>
          <Sparkles className="h-7 w-7 text-white" fill="white" />
        </div>
        <p className={`mb-2 text-sm font-semibold uppercase tracking-[0.2em] ${theme.primary}`}>
          Seu resultado
        </p>
        <h1 className="text-3xl font-semibold leading-tight text-sand-900 sm:text-4xl">
          {isTie ? 'Você tem linguagens em destaque!' : 'Sua linguagem do amor é…'}
        </h1>
      </div>

      {/* Contribua — topo */}
      <div className="animate-fade-in-up mb-6">
        <ContributeButton />
      </div>

      {/* Card principal */}
      {isTie ? (
        <div className="animate-pop mb-6 overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-sand-200">
          <div className={`bg-gradient-to-br ${theme.gradient} px-6 py-7 text-center text-white`}>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-white/80">
              Linguagens predominantes
            </p>
            <div className="space-y-2">
              {primary.map((k) => (
                <div key={k} className="flex items-center justify-center gap-2.5">
                  <span className="text-3xl" aria-hidden>
                    {loveLanguages[k].emoji}
                  </span>
                  <span className="text-2xl font-semibold sm:text-3xl">{loveLanguages[k].name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="px-6 py-5">
            <p className="text-center text-sm leading-relaxed text-sand-700">
              Houve um empate! Isso significa que você se sente amado de mais de uma forma. Pode
              que ambas toquem seu coração com a mesma força — e isso é uma vantagem: você tem
              várias formas de dar e receber afeto.
            </p>
          </div>
        </div>
      ) : (
        <div className="animate-pop mb-6 overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-sand-200">
          <div
            className={`bg-gradient-to-br ${loveLanguages[primary[0]].gradient} px-6 py-8 text-center text-white`}
          >
            <span className="mb-2 block text-5xl" aria-hidden>
              {loveLanguages[primary[0]].emoji}
            </span>
            <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-white/80">
              Sua linguagem principal
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">{loveLanguages[primary[0]].name}</h2>
          </div>
          <div className="px-6 py-5">
            <p className="text-center text-base leading-relaxed text-sand-700">
              {getDesc(primary[0])}
            </p>
          </div>
        </div>
      )}

      {/* Card segunda linguagem */}
      {!isTie && secondary.length > 0 && (
        <div className="animate-fade-in-up mb-6 flex items-center gap-4 rounded-2xl border border-sand-200 bg-white/70 px-5 py-4">
          <span className="text-3xl" aria-hidden>
            {loveLanguages[secondary[0]].emoji}
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-sand-500">
              Segunda mais forte
            </p>
            <p className="text-lg font-semibold text-sand-800">{loveLanguages[secondary[0]].name}</p>
          </div>
        </div>
      )}

      {/* Pontuação detalhada */}
      <div className="animate-fade-in-up mb-6 rounded-3xl border border-sand-200 bg-white p-5 shadow-sm sm:p-6">
        <h3 className="mb-4 text-lg font-semibold text-sand-900">Sua pontuação completa</h3>
        <div className="space-y-3.5">
          {ranked.map((r) => {
            const lang = loveLanguages[r.key];
            const pct = maxScore > 0 ? (r.score / maxScore) * 100 : 0;
            return (
              <div key={r.key}>
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-sm font-medium text-sand-800">
                    <span aria-hidden>{lang.emoji}</span>
                    {lang.name}
                  </span>
                  <span className="text-sm font-bold text-sand-600">
                    {r.score}/{maxScore}
                  </span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-sand-100">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${lang.gradient} transition-all duration-700 ease-out`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Explicação prática + dicas (acordeão por linguagem) */}
      <div className="animate-fade-in-up mb-6 space-y-3">
        <h3 className="mb-1 text-lg font-semibold text-sand-900">
          Entenda e aplique no seu relacionamento
        </h3>
        <p className="mb-3 text-sm leading-relaxed text-sand-600">
          {isTie
            ? 'Como você tem mais de uma linguagem em destaque, vale a pena explorar cada uma delas:'
            : 'Toque para ver dicas práticas de como viver e cuidar dessa linguagem:'}
        </p>
        {ranked.slice(0, isTie ? primary.length : 2).map((r, idx) => {
          const lang = loveLanguages[r.key];
          const Icon = iconMap[lang.icon] ?? Heart;
          const isOpen = openLang === r.key;
          return (
            <div
              key={r.key}
              className="overflow-hidden rounded-2xl border border-sand-200 bg-white"
            >
              <button
                onClick={() => setOpenLang(isOpen ? null : r.key)}
                className="flex w-full items-center gap-3 px-5 py-4 text-left transition-colors hover:bg-sand-50"
              >
                <span
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${lang.gradient} text-white`}
                >
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </span>
                <span className="flex-1">
                  <span className="block text-base font-semibold text-sand-900">{lang.name}</span>
                  {idx === 0 && !isTie && (
                    <span className={`text-xs font-bold uppercase tracking-wider ${theme.primary}`}>
                      Principal
                    </span>
                  )}
                  {isTie && (
                    <span className={`text-xs font-bold uppercase tracking-wider ${theme.primary}`}>
                      Em destaque
                    </span>
                  )}
                </span>
                {isOpen ? (
                  <ChevronUp className="h-5 w-5 text-sand-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-sand-400" />
                )}
              </button>
              {isOpen && (
                <div className="animate-fade-in px-5 pb-5">
                  <p className="mb-4 text-sm leading-relaxed text-sand-700">{getDesc(r.key)}</p>
                  <div className="mb-4">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-sand-500">
                      Como praticar no relacionamento
                    </p>
                    <ul className="space-y-1.5">
                      {getInRel(r.key).map((tip, i) => (
                        <li key={i} className="flex gap-2 text-sm text-sand-700">
                          <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r ${lang.gradient}`} />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-sand-500">
                      Dicas para com seu par
                    </p>
                    <ul className="space-y-1.5">
                      {getForPartner(r.key).map((tip, i) => (
                        <li key={i} className="flex gap-2 text-sm text-sand-700">
                          <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r ${lang.gradient}`} />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Seção Premium */}
      <PremiumSection
        primaryLanguage={primary[0]}
        coupleMode={false}
        onUnlock={(plan) => onUnlockPremium(plan, primary[0])}
      />

      {/* Botões de ação */}
      <div className="animate-fade-in-up mb-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <button
          onClick={onHome}
          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-sand-300 bg-white px-5 py-3.5 text-sm font-semibold text-sand-800 transition-all hover:border-rose-300 hover:bg-rose-50 active:scale-95"
        >
          <Home className="h-4 w-4" />
          Página inicial
        </button>
        <button
          onClick={handleCopy}
          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-sand-300 bg-white px-5 py-3.5 text-sm font-semibold text-sand-800 transition-all hover:border-rose-300 hover:bg-rose-50 active:scale-95"
        >
          {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
          {copied ? 'Copiado!' : 'Copiar resultado'}
        </button>
        <button
          onClick={handleWhatsApp}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-100 transition-all hover:scale-[1.03] active:scale-95"
        >
          <Share2 className="h-4 w-4" />
          Compartilhar no WhatsApp
        </button>
      </div>

      {/* Contribua — rodapé */}
      <div className="animate-fade-in-up mt-8 mb-4">
        <ContributeButton />
      </div>

      <p className="text-center text-xs text-sand-500">
        Teste para fins de autoconhecimento
      </p>
    </div>
  );
}
