import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import type { LoveLanguageKey } from '../loveLanguages';
import { loveLanguages } from '../loveLanguages';
import type { QuizQuestion } from '../questions';
import type { Theme } from '../theme';

interface Props {
  question: QuizQuestion;
  questionIndex: number;
  total: number;
  onAnswer: (language: LoveLanguageKey) => void;
  theme: Theme;
  subtitle?: string;
}

export default function QuizScreen({
  question,
  questionIndex,
  total,
  onAnswer,
  theme,
  subtitle,
}: Props) {
  const [selected, setSelected] = useState<LoveLanguageKey | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    setSelected(null);
    setTransitioning(false);
  }, [questionIndex, question.prompt]);

  const handleSelect = (language: LoveLanguageKey) => {
    if (selected) return;
    setSelected(language);
    setTransitioning(true);
    window.setTimeout(() => {
      onAnswer(language);
    }, 420);
  };

  const progress = ((questionIndex + 1) / total) * 100;

  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-5 py-8 sm:px-6">
      {/* Progresso */}
      <div className="mb-8">
        <div className="mb-2.5 flex items-center justify-between">
          <span className="text-sm font-semibold text-sand-600">
            {subtitle && <span className="mr-1.5 font-bold text-sand-800">{subtitle} · </span>}
            Pergunta {questionIndex + 1} <span className="text-sand-400">de {total}</span>
          </span>
          <span className={`text-sm font-bold ${theme.primary}`}>{Math.round(progress)}%</span>
        </div>
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-sand-100">
          <div
            className={`h-full rounded-full bg-gradient-to-r ${theme.gradient} transition-all duration-500 ease-out`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Pergunta */}
      <div key={questionIndex} className="animate-slide-in flex flex-1 flex-col">
        <h2 className="mb-7 text-2xl font-semibold leading-snug text-sand-900 sm:text-3xl">
          {question.prompt}
        </h2>

        <div className="flex flex-col gap-3">
          {question.options.map((option, i) => {
            const lang = loveLanguages[option.language];
            const isSelected = selected === option.language;
            const isDimmed = selected && !isSelected;
            return (
              <button
                key={i}
                onClick={() => handleSelect(option.language)}
                disabled={!!selected}
                className={[
                  'group relative flex items-center gap-4 rounded-2xl border-2 bg-white px-5 py-4 text-left transition-all duration-300',
                  isSelected
                    ? `border-transparent ring-2 ${lang.ring} bg-gradient-to-br ${lang.gradient} text-white shadow-lg scale-[1.01]`
                    : isDimmed
                      ? 'border-sand-200 opacity-40'
                      : `border-sand-200 ${theme.hoverBorder} ${theme.hoverBg} hover:shadow-md`,
                ].join(' ')}
              >
                <span
                  className={[
                    'flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl text-lg transition-all',
                    isSelected ? 'bg-white/25' : `bg-sand-100 group-hover:${theme.textBgSoft}`,
                  ].join(' ')}
                  aria-hidden
                >
                  {isSelected ? <Check className="h-5 w-5" strokeWidth={3} /> : lang.emoji}
                </span>
                <span
                  className={[
                    'text-base font-medium leading-snug sm:text-[17px]',
                    isSelected ? 'text-white' : 'text-sand-800',
                  ].join(' ')}
                >
                  {option.text}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <p
        className={[
          'mt-6 text-center text-sm text-sand-500 transition-opacity duration-300',
          transitioning ? 'opacity-100' : 'opacity-0',
        ].join(' ')}
      >
        Respondido! Indo para a próxima…
      </p>
    </div>
  );
}
