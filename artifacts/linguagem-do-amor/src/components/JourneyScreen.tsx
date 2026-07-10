import { useState, useEffect, useMemo } from 'react';
import {
  Calendar,
  Flame,
  Check,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  PenLine,
  Award,
  Home,
  Quote,
  Sparkles,
} from 'lucide-react';
import { devotionals, challenges, type LanguageChallenge } from '../journeyData';
import { loveLanguages, type LoveLanguageKey } from '../loveLanguages';

interface Props {
  primaryLanguage: LoveLanguageKey;
  onHome: () => void;
  onComplete: () => void;
}

interface DayState {
  completed: boolean;
  journal: string;
  completedAt?: string;
}

type JourneyState = Record<number, DayState>;

const STORAGE_KEY_PREFIX = 'linguagem-do-amor:journey:';

function loadState(lang: LoveLanguageKey): JourneyState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PREFIX + lang);
    if (raw) return JSON.parse(raw) as JourneyState;
  } catch {
    // ignore
  }
  return {};
}

function saveState(lang: LoveLanguageKey, state: JourneyState) {
  try {
    localStorage.setItem(STORAGE_KEY_PREFIX + lang, JSON.stringify(state));
  } catch {
    // ignore
  }
}

export default function JourneyScreen({ primaryLanguage, onHome, onComplete }: Props) {
  const [state, setState] = useState<JourneyState>(() => loadState(primaryLanguage));
  const [activeDay, setActiveDay] = useState<number>(() => {
    const loaded = loadState(primaryLanguage);
    const firstIncomplete = devotionals.find((d) => !loaded[d.day]?.completed);
    return firstIncomplete?.day ?? 1;
  });
  const [journalText, setJournalText] = useState('');

  const lang = loveLanguages[primaryLanguage];
  const totalDays = devotionals.length;

  // Persist state
  useEffect(() => {
    saveState(primaryLanguage, state);
  }, [state, primaryLanguage]);

  // Load journal when active day changes
  useEffect(() => {
    setJournalText(state[activeDay]?.journal ?? '');
  }, [activeDay]); // eslint-disable-line react-hooks/exhaustive-deps

  const completedCount = useMemo(
    () => Object.values(state).filter((d) => d.completed).length,
    [state],
  );

  const progress = (completedCount / totalDays) * 100;

  // Streak calculation: consecutive completed days from day 1
  const streak = useMemo(() => {
    let count = 0;
    for (let i = 1; i <= totalDays; i++) {
      if (state[i]?.completed) count++;
      else break;
    }
    return count;
  }, [state, totalDays]);

  const allCompleted = completedCount === totalDays;

  // Auto-redirect to certificate when all done
  useEffect(() => {
    if (allCompleted) {
      const timer = window.setTimeout(() => onComplete(), 1200);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, [allCompleted, onComplete]);

  const devotional = devotionals.find((d) => d.day === activeDay)!;
  const dayChallenge = challenges[activeDay];
  const challengeText = dayChallenge
    ? (dayChallenge as LanguageChallenge)[primaryLanguage]
    : '';

  const isCompleted = state[activeDay]?.completed ?? false;

  const handleToggleComplete = () => {
    setState((prev) => ({
      ...prev,
      [activeDay]: {
        completed: !prev[activeDay]?.completed,
        journal: journalText || prev[activeDay]?.journal || '',
        completedAt: !prev[activeDay]?.completed ? new Date().toISOString() : undefined,
      },
    }));
  };

  const handleJournalChange = (text: string) => {
    setJournalText(text);
    setState((prev) => ({
      ...prev,
      [activeDay]: {
        completed: prev[activeDay]?.completed ?? false,
        journal: text,
        completedAt: prev[activeDay]?.completedAt,
      },
    }));
  };

  const goToDay = (day: number) => {
    if (day < 1 || day > totalDays) return;
    setActiveDay(day);
  };

  const goToNextIncomplete = () => {
    const next = devotionals.find((d) => d.day > activeDay && !state[d.day]?.completed);
    if (next) setActiveDay(next.day);
  };

  const goToPrevIncomplete = () => {
    const prev = [...devotionals].reverse().find((d) => d.day < activeDay && !state[d.day]?.completed);
    if (prev) setActiveDay(prev.day);
  };

  return (
    <div className="mx-auto max-w-2xl px-5 py-8 sm:px-6">
      {/* Cabeçalho */}
      <div className="animate-fade-in-up mb-6">
        <div className="mb-3 flex items-center justify-between">
          <button
            onClick={onHome}
            className="inline-flex items-center gap-1.5 rounded-full border border-sand-200 bg-white px-3.5 py-2 text-xs font-semibold text-sand-600 transition-all hover:border-sand-300 hover:bg-sand-50"
          >
            <Home className="h-3.5 w-3.5" />
            Início
          </button>
          <div className="flex items-center gap-3">
            {/* Streak */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-2 text-xs font-bold text-amber-700 ring-1 ring-amber-200">
              <Flame className="h-4 w-4 text-amber-500" fill="currentColor" />
              {streak} {streak === 1 ? 'dia' : 'dias'}
            </div>
            {/* Progress */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700 ring-1 ring-emerald-200">
              <Check className="h-4 w-4" />
              {completedCount}/{totalDays}
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-2 h-3 w-full overflow-hidden rounded-full bg-sand-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-center text-xs font-medium text-sand-500">
          {Math.round(progress)}% concluído
        </p>
      </div>

      {/* Calendário */}
      <div className="animate-fade-in-up mb-6 rounded-3xl border border-sand-200 bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center gap-2">
          <Calendar className="h-4 w-4 text-sand-500" />
          <p className="text-xs font-bold uppercase tracking-wider text-sand-500">
            Calendário da jornada
          </p>
        </div>
        <div className="grid grid-cols-8 gap-1.5 sm:grid-cols-10">
          {devotionals.map((d) => {
            const done = state[d.day]?.completed;
            const isActive = d.day === activeDay;
            return (
              <button
                key={d.day}
                onClick={() => goToDay(d.day)}
                className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-md scale-110'
                    : done
                      ? 'bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200'
                      : 'bg-sand-50 text-sand-400 hover:bg-sand-100'
                }`}
                aria-label={`Dia ${d.day}${done ? ' (concluído)' : ''}`}
              >
                {done && !isActive ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : d.day}
              </button>
            );
          })}
        </div>
      </div>

      {/* Devocional do dia */}
      <div key={activeDay} className="animate-fade-in-up mb-6">
        {/* Navegação entre dias */}
        <div className="mb-4 flex items-center justify-between">
          <button
            onClick={() => goToDay(activeDay - 1)}
            disabled={activeDay === 1}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-sand-200 bg-white text-sand-600 transition-all hover:border-sand-300 hover:bg-sand-50 disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Dia {activeDay}
            </p>
            <h2 className="text-xl font-semibold text-sand-900">{devotional.theme}</h2>
          </div>
          <button
            onClick={() => goToDay(activeDay + 1)}
            disabled={activeDay === totalDays}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-sand-200 bg-white text-sand-600 transition-all hover:border-sand-300 hover:bg-sand-50 disabled:opacity-30"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Card do devocional */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-sand-200">
          {/* Versículo */}
          <div className="bg-gradient-to-br from-amber-50 to-sand-50 px-6 py-5">
            <div className="mb-2 flex items-center gap-2">
              <Quote className="h-4 w-4 text-amber-500" />
              <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Versículo do dia
              </p>
            </div>
            <p className="text-base font-medium italic leading-relaxed text-sand-800">
              "{devotional.verse}"
            </p>
            <p className="mt-1.5 text-sm font-semibold text-amber-700">
              {devotional.verseRef}
            </p>
          </div>

          {/* Reflexão */}
          <div className="px-6 py-5">
            <div className="mb-2 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-sand-500" />
              <p className="text-xs font-bold uppercase tracking-wider text-sand-500">
                Reflexão
              </p>
            </div>
            <p className="text-sm leading-relaxed text-sand-700">
              {devotional.reflection}
            </p>
          </div>

          {/* Oração */}
          <div className="border-t border-sand-100 bg-sand-50/50 px-6 py-5">
            <div className="mb-2 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-violet-500" />
              <p className="text-xs font-bold uppercase tracking-wider text-violet-600">
                Oração
              </p>
            </div>
            <p className="text-sm italic leading-relaxed text-sand-700">
              {devotional.prayer}
            </p>
          </div>

          {/* Desafio personalizado */}
          <div className={`border-t-2 border-${lang.gradient.split(' ')[0].replace('from-', '')}/20 px-6 py-5`}>
            <div className="mb-2 flex items-center gap-2">
              <span className="text-lg" aria-hidden>{lang.emoji}</span>
              <p className="text-xs font-bold uppercase tracking-wider" style={{ color: undefined }}>
                <span className={lang.accent}>Desafio prático — {lang.name}</span>
              </p>
            </div>
            <p className="text-sm leading-relaxed text-sand-700">
              {challengeText}
            </p>
          </div>
        </div>
      </div>

      {/* Diário */}
      <div className="animate-fade-in-up mb-6 rounded-3xl border border-sand-200 bg-white p-5 shadow-sm">
        <div className="mb-3 flex items-center gap-2">
          <PenLine className="h-4 w-4 text-sand-500" />
          <p className="text-xs font-bold uppercase tracking-wider text-sand-500">
            Meu diário — Dia {activeDay}
          </p>
        </div>
        <textarea
          value={journalText}
          onChange={(e) => handleJournalChange(e.target.value)}
          placeholder="Escreva aqui o que você aprendeu, sentiu ou decidiu hoje..."
          className="h-32 w-full resize-none rounded-2xl border border-sand-200 bg-sand-50/50 p-4 text-sm leading-relaxed text-sand-800 placeholder:text-sand-400 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-100"
          disabled={isCompleted}
        />
        {isCompleted && (
          <p className="mt-2 text-xs text-emerald-600">
            <Check className="mr-1 inline h-3 w-3" />
            Dia concluído em {new Date(state[activeDay].completedAt!).toLocaleDateString('pt-BR')}
          </p>
        )}
      </div>

      {/* Botão concluir */}
      <div className="mb-6 text-center">
        <button
          onClick={handleToggleComplete}
          className={`inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-all duration-300 ${
            isCompleted
              ? 'bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200'
              : 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-200 hover:scale-[1.03] active:scale-95'
          }`}
        >
          <Check className="h-5 w-5" strokeWidth={2.5} />
          {isCompleted ? 'Concluído' : 'Concluir dia'}
        </button>
        {!isCompleted && (
          <p className="mt-2 text-xs text-sand-400">
            Marque como concluído após realizar o desafio do dia
          </p>
        )}
      </div>

      {/* Navegação rápida */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={goToPrevIncomplete}
          className="inline-flex items-center gap-1.5 rounded-full border border-sand-200 bg-white px-4 py-2 text-xs font-semibold text-sand-600 transition-all hover:border-sand-300 hover:bg-sand-50"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
          Dia anterior
        </button>
        <button
          onClick={goToNextIncomplete}
          className="inline-flex items-center gap-1.5 rounded-full border border-sand-200 bg-white px-4 py-2 text-xs font-semibold text-sand-600 transition-all hover:border-sand-300 hover:bg-sand-50"
        >
          Próximo dia
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Mensagem de conclusão */}
      {allCompleted && (
        <div className="animate-pop mt-8 rounded-3xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 text-center shadow-lg">
          <Award className="mx-auto mb-3 h-12 w-12 text-amber-500" />
          <h3 className="mb-2 text-xl font-semibold text-sand-900">
            Jornada concluída!
          </h3>
          <p className="text-sm text-sand-600">
            Você completou os 40 dias. Gerando seu certificado...
          </p>
        </div>
      )}
    </div>
  );
}
