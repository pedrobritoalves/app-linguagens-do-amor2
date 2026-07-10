import { useMemo } from 'react';
import { Award, Home, Download, Heart } from 'lucide-react';
import { loveLanguages, type LoveLanguageKey } from '../loveLanguages';

interface Props {
  primaryLanguage: LoveLanguageKey;
  onHome: () => void;
}

export default function CertificateScreen({ primaryLanguage, onHome }: Props) {
  const lang = loveLanguages[primaryLanguage];

  const today = useMemo(
    () => new Date().toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
    [],
  );

  const certId = useMemo(() => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789';
    let id = '';
    for (let i = 0; i < 8; i++) {
      id += chars[Math.floor(Math.random() * chars.length)];
    }
    return id;
  }, []);

  const handleDownload = () => {
    const content = [
      'CERTIFICADO DE CONCLUSÃO',
      '',
      'Jornada de 40 Dias — Linguagens do Amor',
      '',
      `Linguagem predominante: ${lang.name}`,
      '',
      `Concluído em: ${today}`,
      `ID: ${certId}`,
      '',
      'Parabéns por completar esta jornada de amor prático e bíblico.',
      'Que o amor cultivado nestes 40 dias continue a crescer e dar frutos.',
      '',
      '— Descubra sua Linguagem do Amor —',
    ].join('\n');

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `certificado-jornada-${certId}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mx-auto max-w-2xl px-5 py-10 sm:px-6">
      {/* Certificado */}
      <div className="animate-pop mb-8 overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-amber-200">
        {/* Borda decorativa */}
        <div className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-6 py-3 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white">
            Certificado de Conclusão
          </p>
        </div>

        {/* Corpo do certificado */}
        <div className="relative px-6 py-10 sm:px-10 sm:py-14">
          {/* Decoração de fundo */}
          <div
            aria-hidden
            className="pointer-events-none absolute right-6 top-6 h-24 w-24 rounded-full bg-amber-50"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-6 left-6 h-20 w-20 rounded-full bg-rose-50"
          />

          <div className="relative z-10 text-center">
            {/* Medalha */}
            <div className="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg shadow-amber-200">
              <Award className="h-10 w-10 text-white" fill="white" />
            </div>

            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-amber-600">
              Certificamos que
            </p>

            <h1 className="mb-4 text-3xl font-semibold text-sand-900 sm:text-4xl">
              Você concluiu a jornada
            </h1>

            <p className="mx-auto mb-6 max-w-md text-base leading-relaxed text-sand-700">
              Completou com dedicação a jornada de 40 dias de amor prático e bíblico,
              cultivando a linguagem{' '}
              <strong className={lang.accent}>{lang.name}</strong> {lang.emoji}{' '}
              como expressão de cuidado e afeto.
            </p>

            {/* Divisor */}
            <div className="mx-auto mb-6 flex items-center justify-center gap-2">
              <span className="h-px w-12 bg-amber-300" />
              <Heart className="h-4 w-4 text-amber-400" fill="currentColor" />
              <span className="h-px w-12 bg-amber-300" />
            </div>

            <p className="mb-1 text-sm text-sand-600">Concluído em</p>
            <p className="mb-5 text-lg font-semibold text-sand-900">{today}</p>

            <p className="text-xs text-sand-400">ID: {certId}</p>
          </div>
        </div>

        {/* Rodapé do certificado */}
        <div className="bg-gradient-to-r from-amber-50 to-sand-50 px-6 py-4 text-center">
          <p className="text-xs italic text-sand-500">
            "O amor nunca acaba." — 1 Coríntios 13:8
          </p>
        </div>
      </div>

      {/* Botões */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <button
          onClick={handleDownload}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-200 transition-all hover:scale-[1.03] active:scale-95"
        >
          <Download className="h-4 w-4" />
          Baixar certificado
        </button>
        <button
          onClick={onHome}
          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-sand-300 bg-white px-6 py-3.5 text-sm font-semibold text-sand-800 transition-all hover:border-rose-300 hover:bg-rose-50 active:scale-95"
        >
          <Home className="h-4 w-4" />
          Página inicial
        </button>
      </div>

      <p className="mt-6 text-center text-sm leading-relaxed text-sand-600">
        Que o amor cultivado nestes 40 dias não se encerre aqui — que ele continue a crescer,
        a se aprofundar e a transformar cada gesto do seu relacionamento.
      </p>
    </div>
  );
}
