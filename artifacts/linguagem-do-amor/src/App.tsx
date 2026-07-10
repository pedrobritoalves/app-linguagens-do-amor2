import { useState, useEffect, useCallback } from 'react';

import { Heart } from 'lucide-react';
import WelcomeScreen from './components/WelcomeScreen';
import QuizScreen from './components/QuizScreen';
import ResultsScreen from './components/ResultsScreen';
import CoupleResultsScreen from './components/CoupleResultsScreen';
import JourneyScreen from './components/JourneyScreen';
import CertificateScreen from './components/CertificateScreen';
import { type PlanType } from './components/PremiumSection';
import { questionsMale, questionsFemale } from './questions';
import { type LoveLanguageKey } from './loveLanguages';
import { type Gender, type Mode, themes } from './theme';

type Screen = 'welcome' | 'quiz' | 'results' | 'journey' | 'certificate';

const STORAGE_KEY = 'linguagem-do-amor:resultado';

interface SavedResult {
  scores: Record<LoveLanguageKey, number>;
  completedAt: string;
}

interface CoupleResult {
  scores: Record<LoveLanguageKey, number>;
  totalQuestions: number;
  gender: Gender;
}

function emptyScores(): Record<LoveLanguageKey, number> {
  return {
    affirmation: 0,
    quality_time: 0,
    gifts: 0,
    acts_of_service: 0,
    physical_touch: 0,
  };
}

function questionsForGender(gender: Gender) {
  return gender === 'male' ? questionsMale : questionsFemale;
}

export default function App() {
  const [screen, setScreen] = useState<Screen>('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<LoveLanguageKey, number>>(emptyScores);
  const [mode, setMode] = useState<Mode>('single');
  const [gender, setGender] = useState<Gender>('female');
  const [couplePhase, setCouplePhase] = useState<0 | 1 | 2>(0);
  const [coupleResults, setCoupleResults] = useState<CoupleResult[]>([]);
  const [journeyLanguage, setJourneyLanguage] = useState<LoveLanguageKey>('affirmation');

  const activeQuestions = questionsForGender(gender);
  const activeTheme = themes[gender];

  const startQuiz = useCallback(
    (g: Gender) => {
      setGender(g);
      setScores(emptyScores());
      setCurrentQuestion(0);
      setScreen('quiz');
    },
    [],
  );

  const handleStart = useCallback(
    (selectedMode: Mode, selectedGender: Gender) => {
      setMode(selectedMode);
      if (selectedMode === 'couple') {
        setCouplePhase(0);
        setCoupleResults([]);
        startQuiz('female');
      } else {
        startQuiz(selectedGender);
      }
    },
    [startQuiz],
  );

  const handleAnswer = useCallback(
    (language: LoveLanguageKey) => {
      setScores((prev) => ({ ...prev, [language]: prev[language] + 1 }));
      setCurrentQuestion((prev) => {
        const next = prev + 1;
        if (next >= activeQuestions.length) {
          if (mode === 'couple' && couplePhase === 0) {
            const herResult: CoupleResult = {
              scores: { ...scores, [language]: (scores[language] ?? 0) + 1 },
              totalQuestions: activeQuestions.length,
              gender: 'female',
            };
            setCoupleResults([herResult]);
            setCouplePhase(1);
            setGender('male');
            setScores(emptyScores());
            setCurrentQuestion(0);
            return 0;
          } else if (mode === 'couple' && couplePhase === 1) {
            const hisResult: CoupleResult = {
              scores: { ...scores, [language]: (scores[language] ?? 0) + 1 },
              totalQuestions: activeQuestions.length,
              gender: 'male',
            };
            setCoupleResults((prev) => [...prev, hisResult]);
            setCouplePhase(2);
            setScreen('results');
            return prev;
          } else {
            setScreen('results');
            return prev;
          }
        }
        return next;
      });
    },
    [activeQuestions.length, mode, couplePhase, scores],
  );

  useEffect(() => {
    if (screen !== 'results' || mode !== 'single') return;
    const result: SavedResult = {
      scores,
      completedAt: new Date().toISOString(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
    } catch {
      // sem persistência — não bloqueia o resultado
    }
  }, [screen, scores, mode]);

  const handleHome = useCallback(() => {
    setScreen('welcome');
    setCouplePhase(0);
    setCoupleResults([]);
    setScores(emptyScores());
    setCurrentQuestion(0);
  }, []);

  const handleUnlockPremium = useCallback(
    (_plan: PlanType, primaryLanguage: LoveLanguageKey) => {
      setJourneyLanguage(primaryLanguage);
      setScreen('journey');
    },
    [],
  );

  const handleJourneyComplete = useCallback(() => {
    setScreen('certificate');
  }, []);

  // Determinar tema de fundo da página
  const pageBg =
    screen === 'journey' || screen === 'certificate'
      ? 'from-amber-50 via-sand-50 to-white'
      : mode === 'couple'
        ? couplePhase === 1
          ? themes.male.pageBg
          : couplePhase === 0
            ? themes.female.pageBg
            : 'from-rose-50 via-sand-50 to-white'
        : activeTheme.pageBg;

  const quizSubtitle =
    mode === 'couple'
      ? couplePhase === 0
        ? 'Ela'
        : 'Ele'
      : undefined;

  return (
    <div className={`relative min-h-screen overflow-hidden bg-gradient-to-b ${pageBg}`}>
      {/* Blobs decorativos de fundo */}
      <div
        aria-hidden
        className={`pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full ${activeTheme.blobA} blur-3xl`}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute -right-20 top-1/3 h-80 w-80 rounded-full ${activeTheme.blobB} blur-3xl`}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full ${activeTheme.blobC} blur-3xl`}
      />

      <div className="relative z-10">
        {screen === 'welcome' && <WelcomeScreen onStart={handleStart} />}
        {screen === 'quiz' && (
          <QuizScreen
            question={activeQuestions[currentQuestion]}
            questionIndex={currentQuestion}
            total={activeQuestions.length}
            onAnswer={handleAnswer}
            theme={activeTheme}
            subtitle={quizSubtitle}
          />
        )}
        {screen === 'results' && mode === 'couple' && (
          <CoupleResultsScreen
            results={coupleResults}
            onHome={handleHome}
            onUnlockPremium={handleUnlockPremium}
          />
        )}
        {screen === 'results' && mode === 'single' && (
          <ResultsScreen
            scores={scores}
            totalQuestions={activeQuestions.length}
            gender={gender}
            onHome={handleHome}
            onUnlockPremium={handleUnlockPremium}
          />
        )}
        {screen === 'journey' && (
          <JourneyScreen
            primaryLanguage={journeyLanguage}
            onHome={handleHome}
            onComplete={handleJourneyComplete}
          />
        )}
        {screen === 'certificate' && (
          <CertificateScreen
            primaryLanguage={journeyLanguage}
            onHome={handleHome}
          />
        )}
      </div>

      {/* Rodapé mínimo na tela inicial/resultado */}
      {screen !== 'quiz' && screen !== 'journey' && screen !== 'certificate' && (
        <footer className="relative z-10 mx-auto max-w-2xl px-6 pb-8 text-center">
          <p className="inline-flex items-center gap-1.5 text-xs text-sand-500">
            Feito com <Heart className="h-3.5 w-3.5 text-rose-400" fill="currentColor" /> para o
            seu autoconhecimento
          </p>
        </footer>
      )}
    </div>
  );
}
