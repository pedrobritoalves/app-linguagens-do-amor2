import type { LoveLanguageKey } from './loveLanguages';

export interface QuizOption {
  text: string;
  language: LoveLanguageKey;
}

export interface QuizQuestion {
  prompt: string;
  options: QuizOption[];
}

export type QuestionSet = QuizQuestion[];

// Instruções rotativas exibidas acima de cada par de afirmações.
// O usuário nunca vê a que linguagem cada opção corresponde — essa
// correlação é feita internamente pelo app a partir de `option.language`.
//
// IMPORTANTE: as 30 afirmações e seus mapeamentos de linguagem (por par)
// foram transcritos par a par, letra a letra, diretamente do questionário
// original em PDF (fonte: @lisanapontes), conferido visualmente contra o
// PDF renderizado como imagem — não editados/"corrigidos" por semântica.
// Alguns pares têm mapeamento propositalmente não-óbvio (ex.: uma frase
// sobre "presentes" rotulada como acts_of_service, ou "toque" rotulada
// como gifts) — isso é assim no gabarito oficial do PDF, não é um erro de
// transcrição. Não "conserte" esses mapeamentos para bater com palavras-
// chave sem antes conferir contra o PDF original.
const prompts = [
  'Qual dessas frases combina mais com você?',
  'Escolha a afirmação que mais representa o que você sente:',
  'Entre as duas opções, qual é mais verdadeira para você?',
  'Qual desses desejos é mais forte para você?',
  'Se você tivesse que escolher só uma, qual seria?',
  'Qual frase soa mais como você?',
];

function buildQuestions(pairs: [LoveLanguageKey, string, LoveLanguageKey, string][]): QuestionSet {
  return pairs.map(([langA, textA, langB, textB], i) => ({
    prompt: prompts[i % prompts.length],
    options: [
      { text: textA, language: langA },
      { text: textB, language: langB },
    ],
  }));
}

// ─────────────────────────────────────────────
// Questionário MASCULINO — 30 pares de afirmações
// ─────────────────────────────────────────────
export const questionsMale: QuestionSet = buildQuestions([
  ['affirmation', 'Gostaria que minha esposa me enviasse emails ou mensagens de texto e WhatsApp apaixonadas.', 'physical_touch', 'Gostaria que minha esposa me abraçasse mais.'],
  ['quality_time', 'Gostaria de passar mais tempo sozinho com minha esposa.', 'acts_of_service', 'Gostaria de fazer serviços de casa com minha esposa.'],
  ['gifts', 'Receber presentes especiais de minha esposa é algo que me deixa muito feliz.', 'quality_time', 'Uma das coisas que mais gosto é de viajar com minha esposa.'],
  ['acts_of_service', 'Gostaria que minha esposa fizesse as compras ou abastecesse o carro.', 'physical_touch', 'Gostaria que minha esposa me tocasse mais.'],
  ['physical_touch', 'Eu amaria que minha esposa me abraçasse em público.', 'gifts', 'Receber um presente surpresa da minha esposa, de vez em quando, me deixaria feliz.'],
  ['quality_time', 'Gosto de sair com minha esposa, mesmo que seja uma ida à farmácia.', 'physical_touch', 'Gosto de andar de mãos dadas.'],
  ['gifts', 'Valorizo os presentes que minha esposa me dá.', 'affirmation', 'Amaria ouvir minha esposa falar que me ama, mais vezes.'],
  ['physical_touch', 'Gostaria que minha esposa se sentasse perto de mim com mais frequência.', 'affirmation', 'Adoraria ouvir, com mais frequência, minha esposa me elogiar, por exemplo, dizer: "Você está bonito".'],
  ['quality_time', 'Seria maravilhoso passar mais tempo com minha esposa.', 'gifts', 'Seja o que for, qualquer presente que recebo de minha esposa é muito importante para mim.'],
  ['affirmation', '"Tenho tanto orgulho de você" seria uma frase perfeita para ouvir de minha esposa.', 'acts_of_service', 'Me sinto amado quando minha esposa prepara uma deliciosa refeição.'],
  ['quality_time', 'Não importa o que seja, adoro fazer qualquer coisa com minha esposa.', 'affirmation', 'Gostaria de ouvir mais palavras de apoio de minha esposa.'],
  ['acts_of_service', 'Até mesmo as coisas mais simples e pequenas, feitas por minha esposa, significam muito para mim.', 'physical_touch', 'Eu acho que eu e minha esposa precisamos nos abraçar mais.'],
  ['affirmation', 'Eu amaria que minha esposa me elogiasse mais.', 'gifts', 'Receber presentes de minha esposa, os quais eu amo, são bastante significativos.'],
  ['quality_time', 'Eu adoraria passar mais tempo junto com minha esposa.', 'physical_touch', 'Eu amo receber cafuné e carinho nas costas. Adoraria que minha esposa fizesse isso com mais frequência.'],
  ['affirmation', 'Às vezes eu acho que minha esposa não valoriza o que faço por ela. Queria ter mais reconhecimento.', 'acts_of_service', 'Gostaria de receber ajuda de minha esposa com as tarefas domésticas.'],
  ['physical_touch', 'Se tem uma coisa que amo, é beijar minha esposa. Nunca me canso.', 'quality_time', 'Adoraria que minha esposa demonstrasse mais interesse pelo que eu gosto de fazer.'],
  ['acts_of_service', 'Seria maravilhoso ter minha esposa trabalhando comigo em algum projeto.', 'gifts', 'Acho que minha esposa não recebe meus presentes com muita animação.'],
  ['affirmation', 'Fico em êxtase quando sou elogiado por minha esposa.', 'quality_time', 'Eu ficaria mais feliz se minha esposa não criticasse tanto as minhas ideias.'],
  ['physical_touch', 'Sempre que minha esposa está por perto eu a toco. Não consigo resistir.', 'acts_of_service', 'Seria maravilhoso, de vez em quando, ter a ajuda de minha esposa em algumas tarefas.'],
  ['acts_of_service', 'Seria um sonho minha esposa notar que estou sobrecarregado e oferecer ajuda.', 'gifts', 'Acho que falta a minha esposa mais disposição para pensar em presentes para me dar.'],
  ['quality_time', 'Eu amaria que minha esposa me desse total atenção enquanto conversamos.', 'acts_of_service', 'Um ato de serviço que valorizo é manter a casa limpa.'],
  ['gifts', 'Eu fico muito ansioso pensando no que minha esposa irá me dar de presente de aniversário.', 'affirmation', 'Apesar de saber que minha esposa me ama, gostaria de ouvi-la dizer isso com mais frequência.'],
  ['gifts', 'Eu ficaria em êxtase se, ao voltar de uma viagem, minha esposa me trouxesse um presente.', 'acts_of_service', 'Gostaria de receber ajuda de minha esposa com as tarefas domésticas que eu não aprecio.'],
  ['quality_time', 'Eu fico chateado quando minha esposa me interrompe.', 'gifts', 'Uma das coisas que jamais me canso é de receber presentes de minha esposa, seja o que for.'],
  ['acts_of_service', 'Seria maravilhoso ter a ajuda de minha esposa quando eu estivesse cansado.', 'quality_time', 'Gostaria que minha esposa tivesse a mesma animação que eu tenho para sair.'],
  ['physical_touch', 'Amo a intimidade física que tenho com minha esposa.', 'gifts', 'Eu fico muito feliz quando minha esposa traz coisas que ela sabe que vou gostar.'],
  ['affirmation', 'Seria muito bom se minha esposa me incentivasse mais.', 'quality_time', 'Um programa que amo é assistir filmes com minha esposa.'],
  ['acts_of_service', 'Eu me sinto muito querido quando recebo presentes de minha esposa.', 'gifts', 'Eu não consigo ficar longe de minha esposa.'],
  ['acts_of_service', 'Eu amaria que minha esposa me desse total atenção enquanto conversamos.', 'affirmation', 'Eu ficaria muito feliz se minha esposa falasse com mais frequência: "Eu gosto de você".'],
  ['physical_touch', 'Depois de ficar longe de minha esposa por algum tempo, eu amo abraçá-la.', 'affirmation', 'Desejo ouvir minha esposa dizer que acredita em mim.'],
]);

// ─────────────────────────────────────────────
// Questionário FEMININO — 30 pares de afirmações
// ─────────────────────────────────────────────
export const questionsFemale: QuestionSet = buildQuestions([
  ['affirmation', 'Gostaria que meu marido me enviasse emails ou mensagens de texto e WhatsApp apaixonados.', 'physical_touch', 'Gostaria que meu marido me abraçasse mais.'],
  ['quality_time', 'Gostaria de ficar mais tempo sozinha com meu marido.', 'acts_of_service', 'Gostaria que meu marido fizesse algum dos serviços de casa, sem que eu precisasse pedir.'],
  ['gifts', 'Ficaria muito feliz ao receber presentes inesperados do meu marido, tipo: "comprei porque tive vontade".', 'quality_time', 'Uma das coisas que mais gosto é de viajar com meu marido.'],
  ['acts_of_service', 'Gostaria que meu marido lavasse as roupas. Eu iria amar.', 'physical_touch', 'Gostaria que meu marido me tocasse mais.'],
  ['physical_touch', 'Eu amaria que meu marido me abraçasse mais vezes.', 'gifts', 'Receber um presente surpresa do meu marido me deixaria feliz.'],
  ['quality_time', 'Gostaria que meu marido também gostasse de sair junto, como eu gosto.', 'physical_touch', 'Gosto de andar de mãos dadas.'],
  ['gifts', 'Me sinto querida quando meu marido me dá presentes.', 'affirmation', 'Amaria ouvir meu marido falar que me ama, mais vezes.'],
  ['physical_touch', 'Gostaria que meu marido se sentasse perto de mim com mais frequência.', 'affirmation', 'Adoraria ouvir, com mais frequência, meu marido me elogiar, por exemplo, dizer: "Você está bonita".'],
  ['quality_time', 'Seria maravilhoso passar mais tempo com meu marido. Isso me deixa feliz.', 'gifts', 'Seja o que for, qualquer presente que recebo de meu marido é muito importante para mim.'],
  ['affirmation', '"Tenho tanto orgulho de você" seria uma frase perfeita para ouvir de meu marido.', 'acts_of_service', 'Me sinto amada quando meu marido me ajuda com a limpeza, sem que eu peça.'],
  ['quality_time', 'Não importa o que seja, adoro fazer qualquer coisa com meu marido.', 'affirmation', 'Gostaria de ouvir mais palavras de apoio de meu marido.'],
  ['acts_of_service', 'Amaria se meu marido fizesse coisas mais gentis e amáveis por mim.', 'physical_touch', 'Eu acho que eu e meu marido precisamos nos abraçar mais.'],
  ['affirmation', 'Eu amaria que meu marido me elogiasse mais.', 'gifts', 'Receber presentes de meu marido, os quais eu amo, são bastante significativos.'],
  ['quality_time', 'Eu adoraria passar mais tempo junto com meu marido. Só de estar perto dele já me sinto mais feliz.', 'physical_touch', 'Adoraria que meu marido me fizesse uma massagem.'],
  ['affirmation', 'Queria ter mais reconhecimento de meu marido. Amaria receber elogios.', 'acts_of_service', 'Gostaria de receber ajuda de meu marido com as tarefas domésticas.'],
  ['physical_touch', 'Se tem uma coisa que nunca me canso é de beijar meu marido. Eu amo.', 'quality_time', 'Eu amaria se meu marido demonstrasse interesse por coisas que eu considero importantes.'],
  ['acts_of_service', 'Seria maravilhoso ter meu marido me ajudando em algum projeto.', 'gifts', 'Cada presente que recebo de meu marido é motivo de felicidade.'],
  ['affirmation', 'Eu sinto falta dos elogios de meu marido quando consigo atingir algum objetivo.', 'quality_time', 'Eu ficaria mais feliz se meu marido me criticasse menos, me ouvisse mais e respeitasse minhas ideias.'],
  ['physical_touch', 'Sempre que meu marido está por perto eu o toco. Não consigo resistir.', 'acts_of_service', 'Seria maravilhoso se meu marido se oferecesse para ajudar em algumas tarefas.'],
  ['acts_of_service', 'Seria um sonho meu marido notar que estou sobrecarregada e oferecer ajuda com as coisas de casa.', 'gifts', 'Eu me sentiria amada se os presentes de meu marido demonstrassem atenção comigo.'],
  ['quality_time', 'Eu amaria que meu marido me desse total atenção enquanto conversamos.', 'acts_of_service', 'Eu amaria se meu marido me ajudasse a limpar a casa.'],
  ['gifts', 'Eu fico muito ansiosa pensando no que meu marido irá me dar de presente de aniversário.', 'affirmation', 'Quero ouvir meu marido dizer o quanto sou importante para ele.'],
  ['gifts', 'Eu ficaria em êxtase se meu marido me desse presentes com mais frequência.', 'acts_of_service', 'Gostaria de receber ajuda de meu marido sem precisar pedir.'],
  ['quality_time', 'Eu fico chateada quando meu marido me interrompe.', 'gifts', 'Uma das coisas que jamais me canso é de receber presentes de meu marido, seja o que for.'],
  ['acts_of_service', 'Seria maravilhoso se meu marido oferecesse ajuda quando eu estivesse cansada.', 'quality_time', 'Amo ir a qualquer lugar com meu marido.'],
  ['physical_touch', 'Sinto falta de dar e receber carinho com mais frequência.', 'gifts', 'Eu fico muito feliz quando meu marido me surpreende com um presente.'],
  ['affirmation', 'Seria muito bom se meu marido me incentivasse mais. Eu amo os incentivos dele.', 'quality_time', 'Um programa que amo é assistir filmes com meu marido.'],
  ['acts_of_service', 'Eu me sinto muito querida quando recebo presentes de meu marido, fora de datas especiais.', 'gifts', 'Eu amaria se meu marido me tocasse mais.'],
  ['acts_of_service', 'Ter a ajuda do meu marido sempre que preciso é significativo demais.', 'affirmation', 'Eu ficaria muito feliz se meu marido falasse com mais frequência: "Eu gosto de você".'],
  ['physical_touch', 'Eu amo abraçar meu marido quando ele chega em casa.', 'affirmation', 'Desejo ouvir de meu marido que ele sente minha falta quando eu saio.'],
]);
