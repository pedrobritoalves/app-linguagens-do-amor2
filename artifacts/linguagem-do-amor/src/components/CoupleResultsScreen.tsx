import { useMemo, useState } from 'react';
import {
  Home,
  Heart,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  Share2,
} from 'lucide-react';
import {
  loveLanguages,
  loveLanguageOrder,
  genderContent,
  coupleInsights,
  type LoveLanguageKey,
  type Gender,
} from '../loveLanguages';
import { themes, genderLabels, genderEmoji } from '../theme';
import ContributeButton from './ContributeButton';
import PremiumSection, { type PlanType } from './PremiumSection';

interface PersonResult {
  scores: Record<LoveLanguageKey, number>;
  totalQuestions: number;
  gender: Gender;
}

interface Props {
  results: PersonResult[];
  onHome: () => void;
  onUnlockPremium: (plan: PlanType, primaryLanguage: LoveLanguageKey) => void;
}

const coupleColorAccent = (gender: Gender) =>
  gender === 'male' ? 'do' : 'da';

function rankScores(scores: Record<LoveLanguageKey, number>) {
  return loveLanguageOrder
    .map((key) => ({ key, score: scores[key] ?? 0 }))
    .sort((a, b) => b.score - a.score);
}

function getTopKey(scores: Record<LoveLanguageKey, number>): LoveLanguageKey {
  const ranked = rankScores(scores);
  return ranked[0].key;
}

export default function CoupleResultsScreen({ results, onHome, onUnlockPremium }: Props) {
  const [copied, setCopied] = useState(false);
  const [openInsight, setOpenInsight] = useState<LoveLanguageKey | null>(null);

  const [herResult, hisResult] = results;
  const herTop = getTopKey(herResult.scores);
  const hisTop = getTopKey(hisResult.scores);

  const sameLanguage = herTop === hisTop;

  const allTops = useMemo(() => {
    const set = new Set<LoveLanguageKey>([herTop, hisTop]);
    return Array.from(set);
  }, [herTop, hisTop]);

  const shareText = useMemo(() => {
    const lines: string[] = [];
    lines.push('💕 Nosso resultado — Linguagens do Amor');
    lines.push('');
    lines.push(`${genderEmoji.female} ${genderLabels.female}: ${loveLanguages[herTop].name} ${loveLanguages[herTop].emoji}`);
    lines.push(`${genderEmoji.male} ${genderLabels.male}: ${loveLanguages[hisTop].name} ${loveLanguages[hisTop].emoji}`);
    lines.push('');
    if (sameLanguage) {
      lines.push(`Falamos a mesma linguagem: ${loveLanguages[herTop].name}! 💫`);
    } else {
      lines.push(`Linguagens diferentes — e é isso que nos completa! 🧩`);
    }
    lines.push('');
    lines.push('Dicas para nos enxergarmos melhor:');
    allTops.forEach((k) => {
      lines.push(`  ${loveLanguages[k].emoji} ${loveLanguages[k].name}:`);
      coupleInsights[k].forEach((tip) => lines.push(`    • ${tip}`));
    });
    lines.push('');
    lines.push('Façam vocês também! 💑');
    return lines.join('\n');
  }, [herTop, hisTop, sameLanguage, allTops]);

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

  const renderPersonCard = (result: PersonResult) => {
    const theme = themes[result.gender];
    const content = genderContent[result.gender];
    const ranked = rankScores(result.scores);
    const topScore = ranked[0].score;
    const topKeys = ranked.filter((r) => r.score === topScore).map((r) => r.key);
    const isTie = topKeys.length > 1;
    const topKey = topKeys[0];
    const lang = loveLanguages[topKey];

    return (
      <div className="overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-sand-200">
        <div className={`bg-gradient-to-br ${theme.gradient} px-5 py-5 text-center text-white`}>
          <span className="mb-1 block text-3xl" aria-hidden>
            {genderEmoji[result.gender]}
          </span>
          <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
            {genderLabels[result.gender]}
          </p>
          {isTie ? (
            <div className="mt-2 space-y-1">
              {topKeys.map((k) => (
                <p key={k} className="text-xl font-semibold">
                  {loveLanguages[k].emoji} {loveLanguages[k].name}
                </p>
              ))}
            </div>
          ) : (
            <h3 className="mt-1 text-2xl font-semibold">{lang.emoji} {lang.name}</h3>
          )}
        </div>
        <div className="px-5 py-4">
          <p className="mb-3 text-sm leading-relaxed text-sand-700">
            {content[topKey].description}
          </p>
          {/* Mini score bars */}
          <div className="space-y-2">
            {ranked.map((r) => {
              const l = loveLanguages[r.key];
              const pct = result.totalQuestions > 0 ? (r.score / result.totalQuestions) * 100 : 0;
              return (
                <div key={r.key}>
                  <div className="mb-0.5 flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 font-medium text-sand-700">
                      <span aria-hidden>{l.emoji}</span>
                      {l.short}
                    </span>
                    <span className="font-bold text-sand-500">
                      {r.score}/{result.totalQuestions}
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-sand-100">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${l.gradient} transition-all duration-700`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mx-auto max-w-2xl px-5 py-10 sm:px-6">
      {/* Cabeçalho */}
      <div className="animate-fade-in-up mb-8 text-center">
        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-400 to-ocean-500 shadow-lg shadow-sand-200">
          <Heart className="h-7 w-7 text-white" fill="white" />
        </div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">
          Resultado do casal
        </p>
        <h1 className="text-3xl font-semibold leading-tight text-sand-900 sm:text-4xl">
          As linguagens de vocês
        </h1>
      </div>

      {/* Contribua — topo */}
      <div className="animate-fade-in-up mb-6">
        <ContributeButton />
      </div>

      {/* Cards lado a lado */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {renderPersonCard(herResult)}
        {renderPersonCard(hisResult)}
      </div>

      {/* Mensagem de compatibilidade */}
      <div className="animate-fade-in-up mb-6 rounded-3xl border border-sand-200 bg-gradient-to-br from-white to-sand-50 p-6 text-center shadow-sm">
        {sameLanguage ? (
          <>
            <p className="mb-2 text-4xl" aria-hidden>💫</p>
            <h3 className="mb-2 text-xl font-semibold text-sand-900">
              Vocês falam a mesma linguagem!
            </h3>
            <p className="text-sm leading-relaxed text-sand-700">
              Ambos têm <strong>{loveLanguages[herTop].name}</strong> como linguagem predominante.
              Isso significa que vocês tendem a dar e receber amor da mesma forma — uma sintonia
              natural. O desafio é lembrar que nem sempre será assim, e cultivar essa linguagem
              com intenção.
            </p>
          </>
        ) : (
          <>
            <p className="mb-2 text-4xl" aria-hidden>🧩</p>
            <h3 className="mb-2 text-xl font-semibold text-sand-900">
              Linguagens que se completam
            </h3>
            <p className="text-sm leading-relaxed text-sand-700">
              {genderLabels[herResult.gender]} é de <strong>{loveLanguages[herTop].name}</strong> e{' '}
              {genderLabels[hisResult.gender]} é de <strong>{loveLanguages[hisTop].name}</strong>.
              Vocês amam de formas diferentes — e é exatamente por isso que se complementam. O
              segredo está em aprender a falar a linguagem um do outro, mesmo quando não é a sua.
            </p>
          </>
        )}
      </div>

      {/* Dicas para o casal — acordeão */}
      <div className="animate-fade-in-up mb-6 space-y-3">
        <h3 className="text-lg font-semibold text-sand-900">
          Dicas para se enxergarem melhor
        </h3>
        <p className="mb-2 text-sm leading-relaxed text-sand-600">
          Toque em cada linguagem para ver como vocês podem se conectar através dela:
        </p>
        {allTops.map((key) => {
          const lang = loveLanguages[key];
          const isOpen = openInsight === key;
          return (
            <div
              key={key}
              className="overflow-hidden rounded-2xl border border-sand-200 bg-white"
            >
              <button
                onClick={() => setOpenInsight(isOpen ? null : key)}
                className="flex w-full items-center gap-3 px-5 py-4 text-left transition-colors hover:bg-sand-50"
              >
                <span
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${lang.gradient} text-white shadow-sm`}
                >
                  <Heart className="h-5 w-5" />
                </span>
                <span className="flex-1">
                  <span className="block text-base font-semibold text-sand-900">{lang.name}</span>
                  <span className="text-xs text-sand-500">
                    {key === herTop && key === hisTop
                      ? 'Linguagem de ambos'
                      : key === herTop
                        ? `Linguagem ${coupleColorAccent(herResult.gender)} ${genderLabels[herResult.gender].toLowerCase()}`
                        : `Linguagem ${coupleColorAccent(hisResult.gender)} ${genderLabels[hisResult.gender].toLowerCase()}`}
                  </span>
                </span>
                {isOpen ? (
                  <ChevronUp className="h-5 w-5 text-sand-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-sand-400" />
                )}
              </button>
              {isOpen && (
                <div className="animate-fade-in px-5 pb-5">
                  <ul className="space-y-2">
                    {coupleInsights[key].map((tip, i) => (
                      <li key={i} className="flex gap-2 text-sm text-sand-700">
                        <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r ${lang.gradient}`} />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Seção Premium */}
      <PremiumSection
        primaryLanguage={herTop}
        coupleMode={true}
        onUnlock={(plan) => onUnlockPremium(plan, herTop)}
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
