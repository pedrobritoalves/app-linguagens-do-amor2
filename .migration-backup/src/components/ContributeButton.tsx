import { useState } from 'react';
import { HeartHandshake, Copy, Check } from 'lucide-react';

// Chave PIX (copia e cola) fornecida pelo autor do projeto.
const PIX_CODE =
  '00020126660014br.gov.bcb.pix0111056621834810229Obrigado por sua contribuicao5204000053039865802BR5925PEDRO HENRIQUE BARBOSA BR6006GOIANA62580520SAN2026070800094535750300017br.gov.bcb.brcode01051.0.063040FFF';

interface Props {
  variant?: 'inline' | 'block';
}

export default function ContributeButton({ variant = 'block' }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PIX_CODE);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  if (variant === 'inline') {
    return (
      <div className="flex flex-col items-center gap-1.5">
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-2 rounded-full border-2 border-amber-300 bg-amber-50 px-5 py-2.5 text-sm font-semibold text-amber-700 transition-all hover:border-amber-400 hover:bg-amber-100 active:scale-95"
        >
          {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <HeartHandshake className="h-4 w-4" />}
          {copied ? 'Chave PIX copiada!' : 'Contribua'}
        </button>
        <p className="text-xs text-sand-500">Apoie este projeto · cole no app do seu banco</p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-rose-50 p-5 text-center shadow-sm sm:p-6">
      <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-white shadow-md shadow-amber-100">
        <HeartHandshake className="h-6 w-6" />
      </div>
      <h3 className="mb-1 text-lg font-semibold text-sand-900">Gostou do teste?</h3>
      <p className="mb-4 text-sm leading-relaxed text-sand-600">
        Se este teste te ajudou, considere contribuir para manter o projeto vivo. Copie a chave PIX
        e cole no app do seu banco.
      </p>
      <button
        onClick={handleCopy}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-100 transition-all hover:scale-[1.03] active:scale-95"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        {copied ? 'Chave PIX copiada!' : 'Contribua via PIX'}
      </button>
      <p className="mt-3 text-xs text-sand-500">
        PEDRO HENRIQUE BARBOSA · qualquer valor é bem-vindo
      </p>
    </div>
  );
}
