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

// ─────────────────────────────────────────────
// Questionário MASCULINO
// ─────────────────────────────────────────────
export const questionsMale: QuestionSet = [
  {
    prompt: 'O que mais te faz sentir amado por alguém?',
    options: [
      { text: 'Quando me diz palavras gentis e elogios sinceros', language: 'affirmation' },
      { text: 'Quando me dá toda a atenção, sem celular ou distrações', language: 'quality_time' },
      { text: 'Quando me traz uma lembrancinha que pensou em mim', language: 'gifts' },
      { text: 'Quando me ajuda com uma tarefa que estava pesada', language: 'acts_of_service' },
      { text: 'Quando me abraça com carinho', language: 'physical_touch' },
    ],
  },
  {
    prompt: 'Você teve um dia difícil no trabalho. O que mais te ajudaria?',
    options: [
      { text: 'Ouvir "você é forte, vai dar certo"', language: 'affirmation' },
      { text: 'Conversar com alguém por um bom tempo, com presença total', language: 'quality_time' },
      { text: 'Ganhar um docinho ou uma pequena surpresa', language: 'gifts' },
      { text: 'Alguém assumir uma tarefa sua para aliviar sua carga', language: 'acts_of_service' },
      { text: 'Receber um abraço longo e acolhedor', language: 'physical_touch' },
    ],
  },
  {
    prompt: 'Qual gesto te conquista rapidamente?',
    options: [
      { text: 'Uma mensagem carinhosa logo de manhã', language: 'affirmation' },
      { text: 'Convite para um passeio só de vocês dois', language: 'quality_time' },
      { text: 'Aparecer com uma flor ou presente inesperado', language: 'gifts' },
      { text: 'Chegar e já ajudar a arrumar algo em casa', language: 'acts_of_service' },
      { text: 'Segurar sua mão enquanto conversam', language: 'physical_touch' },
    ],
  },
  {
    prompt: 'Em um aniversário de namoro, o que seria mais especial?',
    options: [
      { text: 'Uma carta escrita à mão com tudo o que sente', language: 'affirmation' },
      { text: 'Um dia inteiro reservado só para estar com você', language: 'quality_time' },
      { text: 'Um presente significativo, mesmo que simples', language: 'gifts' },
      { text: 'Adiantar tudo para você não se preocupar com nada', language: 'acts_of_service' },
      { text: 'Um abraço apertado e muitos carinhos', language: 'physical_touch' },
    ],
  },
  {
    prompt: 'Quando você sente falta de alguém, o que mais faz falta?',
    options: [
      { text: 'Das palavras de afeto que costuma te dizer', language: 'affirmation' },
      { text: 'Da companhia e das conversas', language: 'quality_time' },
      { text: 'Das pequenas lembranças que te dava', language: 'gifts' },
      { text: 'Da ajuda prática que costumava te dar', language: 'acts_of_service' },
      { text: 'Do contato físico, dos abraços', language: 'physical_touch' },
    ],
  },
  {
    prompt: 'Qual dessas atitudes te faz sentir que se importam com você?',
    options: [
      { text: 'Elogiar algo que você fez, sem você pedir', language: 'affirmation' },
      { text: 'Parar tudo para te ouvir com atenção', language: 'quality_time' },
      { text: 'Lembrar de uma data importante para você', language: 'gifts' },
      { text: 'Fazer algo por você antes mesmo de você pedir', language: 'acts_of_service' },
      { text: 'Tocar seu braço ou ombro com carinho', language: 'physical_touch' },
    ],
  },
  {
    prompt: 'Você está gripado, em casa. O que mais te tocaria?',
    options: [
      { text: 'Mensagens verificando como você está', language: 'affirmation' },
      { text: 'Alguém ficar com você, fazendo companhia', language: 'quality_time' },
      { text: 'Receber um chá ou remédio que pensou em trazer', language: 'gifts' },
      { text: 'Alguém fazer comida e cuidar da casa por você', language: 'acts_of_service' },
      { text: 'Deitar ao seu lado e fazer cafuné', language: 'physical_touch' },
    ],
  },
  {
    prompt: 'O que mais te chateia em uma relação?',
    options: [
      { text: 'Falta de elogios e palavras gentis', language: 'affirmation' },
      { text: 'Quando estão juntos mas a atenção está em outro lugar', language: 'quality_time' },
      { text: 'Esquecer datas ou não se importar com pequenos gestos', language: 'gifts' },
      { text: 'Prometer ajudar e não cumprir', language: 'acts_of_service' },
      { text: 'Pouco contato físico e distância no toque', language: 'physical_touch' },
    ],
  },
  {
    prompt: 'Qual seria um encontro ideal para você?',
    options: [
      { text: 'Onde o outro declare o que sente por você', language: 'affirmation' },
      { text: 'Um passeio sem pressa, conversando de tudo', language: 'quality_time' },
      { text: 'Surpresa com uma lembrança inesperada no meio', language: 'gifts' },
      { text: 'Um jantar que o outro preparou especialmente', language: 'acts_of_service' },
      { text: 'Ficar abraçadinho no sofá ou caminhando de mãos dadas', language: 'physical_touch' },
    ],
  },
  {
    prompt: 'O que te faz perceber que alguém te ama de verdade?',
    options: [
      { text: 'O jeito que fala de você para os outros', language: 'affirmation' },
      { text: 'O tempo de qualidade que dedica a você', language: 'quality_time' },
      { text: 'As lembranças que escolhe com cuidado', language: 'gifts' },
      { text: 'As coisas que faz por você sem pedir', language: 'acts_of_service' },
      { text: 'A forma carinhosa como te toca', language: 'physical_touch' },
    ],
  },
  {
    prompt: 'Você realizou algo importante. O que mais te alegraria?',
    options: [
      { text: 'Ouvir "estou tão orgulhoso de você"', language: 'affirmation' },
      { text: 'Uma celebração só de vocês, com presença total', language: 'quality_time' },
      { text: 'Um presente para marcar a conquista', language: 'gifts' },
      { text: 'Alguém cuidar dos afazeres para você descansar', language: 'acts_of_service' },
      { text: 'Um abraço de parabéns bem apertado', language: 'physical_touch' },
    ],
  },
  {
    prompt: 'Qual é a melhor forma de "pedir desculpas" para você?',
    options: [
      { text: 'Dizer claramente "me perdoe, eu te amo"', language: 'affirmation' },
      { text: 'Sentar para conversar com você com presença total', language: 'quality_time' },
      { text: 'Traz uma pequena lembrança de reconciliação', language: 'gifts' },
      { text: 'Assume uma tarefa que estava sobrando para você', language: 'acts_of_service' },
      { text: 'Te abraça e busca proximidade física', language: 'physical_touch' },
    ],
  },
  {
    prompt: 'O que te faz sentir mais próximo de alguém?',
    options: [
      { text: 'Quando abrem o coração em palavras', language: 'affirmation' },
      { text: 'Passar tempo juntos sem pressa', language: 'quality_time' },
      { text: 'Trocar presentes significativos', language: 'gifts' },
      { text: 'Fazer coisas juntos, lado a lado', language: 'acts_of_service' },
      { text: 'Carinho físico e proximidade no toque', language: 'physical_touch' },
    ],
  },
  {
    prompt: 'Num domingo preguiçoso, o que te faria feliz?',
    options: [
      { text: 'Mensagem doce logo ao acordar', language: 'affirmation' },
      { text: 'Café da manhã juntos, sem celular, conversando', language: 'quality_time' },
      { text: 'Surpresa com um pãozinho ou doce especial', language: 'gifts' },
      { text: 'Alguém arrumar tudo enquanto você descansa', language: 'acts_of_service' },
      { text: 'Ficar deitado juntinho, abraçado', language: 'physical_touch' },
    ],
  },
  {
    prompt: 'Qual destes você valoriza mais em quem ama?',
    options: [
      { text: 'Saber elogiar e agradecer com palavras', language: 'affirmation' },
      { text: 'Estar presente de corpo e alma', language: 'quality_time' },
      { text: 'Ser atento a detalhes e lembranças', language: 'gifts' },
      { text: 'Ser prestativo e fazer mais do que promete', language: 'acts_of_service' },
      { text: 'Ser afetuoso no contato físico', language: 'physical_touch' },
    ],
  },
];

// ─────────────────────────────────────────────
// Questionário FEMININO
// ─────────────────────────────────────────────
export const questionsFemale: QuestionSet = [
  {
    prompt: 'O que mais te faz sentir amada por alguém?',
    options: [
      { text: 'Quando me diz palavras gentis e elogios sinceros', language: 'affirmation' },
      { text: 'Quando me dá toda a atenção, sem celular ou distrações', language: 'quality_time' },
      { text: 'Quando me traz uma lembrancinha que pensou em mim', language: 'gifts' },
      { text: 'Quando me ajuda com uma tarefa que estava pesada', language: 'acts_of_service' },
      { text: 'Quando me abraça com carinho', language: 'physical_touch' },
    ],
  },
  {
    prompt: 'Você teve um dia cansativo. O que mais te ajudaria?',
    options: [
      { text: 'Ouvir "você é incrível, vai dar tudo certo"', language: 'affirmation' },
      { text: 'Conversar com alguém por um bom tempo, com presença total', language: 'quality_time' },
      { text: 'Ganhar um docinho ou uma pequena surpresa', language: 'gifts' },
      { text: 'Alguém assumir uma tarefa sua para aliviar sua carga', language: 'acts_of_service' },
      { text: 'Receber um abraço longo e acolhedor', language: 'physical_touch' },
    ],
  },
  {
    prompt: 'Qual gesto te conquista rapidamente?',
    options: [
      { text: 'Uma mensagem carinhosa logo de manhã', language: 'affirmation' },
      { text: 'Convite para um passeio só de vocês dois', language: 'quality_time' },
      { text: 'Aparecer com uma flor ou presente inesperado', language: 'gifts' },
      { text: 'Chegar e já ajudar a arrumar algo em casa', language: 'acts_of_service' },
      { text: 'Segurar sua mão enquanto conversam', language: 'physical_touch' },
    ],
  },
  {
    prompt: 'Em um aniversário de namoro, o que seria mais especial?',
    options: [
      { text: 'Uma carta escrita à mão com tudo o que sente', language: 'affirmation' },
      { text: 'Um dia inteiro reservado só para estar com você', language: 'quality_time' },
      { text: 'Um presente significativo, mesmo que simples', language: 'gifts' },
      { text: 'Adiantar tudo para você não se preocupar com nada', language: 'acts_of_service' },
      { text: 'Um abraço apertado e muitos carinhos', language: 'physical_touch' },
    ],
  },
  {
    prompt: 'Quando você sente falta de alguém, o que mais faz falta?',
    options: [
      { text: 'Das palavras de afeto que costuma te dizer', language: 'affirmation' },
      { text: 'Da companhia e das conversas', language: 'quality_time' },
      { text: 'Das pequenas lembranças que te dava', language: 'gifts' },
      { text: 'Da ajuda prática que costumava te dar', language: 'acts_of_service' },
      { text: 'Do contato físico, dos abraços', language: 'physical_touch' },
    ],
  },
  {
    prompt: 'Qual dessas atitudes te faz sentir que se importam com você?',
    options: [
      { text: 'Elogiar algo que você fez, sem você pedir', language: 'affirmation' },
      { text: 'Parar tudo para te ouvir com atenção', language: 'quality_time' },
      { text: 'Lembrar de uma data importante para você', language: 'gifts' },
      { text: 'Fazer algo por você antes mesmo de você pedir', language: 'acts_of_service' },
      { text: 'Tocar seu braço ou ombro com carinho', language: 'physical_touch' },
    ],
  },
  {
    prompt: 'Você está gripada, em casa. O que mais te tocaria?',
    options: [
      { text: 'Mensagens verificando como você está', language: 'affirmation' },
      { text: 'Alguém ficar com você, fazendo companhia', language: 'quality_time' },
      { text: 'Receber um chá ou remédio que pensou em trazer', language: 'gifts' },
      { text: 'Alguém fazer comida e cuidar da casa por você', language: 'acts_of_service' },
      { text: 'Deitar ao seu lado e fazer cafuné', language: 'physical_touch' },
    ],
  },
  {
    prompt: 'O que mais te chateia em uma relação?',
    options: [
      { text: 'Falta de elogios e palavras gentis', language: 'affirmation' },
      { text: 'Quando estão juntos mas a atenção está em outro lugar', language: 'quality_time' },
      { text: 'Esquecer datas ou não se importar com pequenos gestos', language: 'gifts' },
      { text: 'Prometer ajudar e não cumprir', language: 'acts_of_service' },
      { text: 'Pouco contato físico e distância no toque', language: 'physical_touch' },
    ],
  },
  {
    prompt: 'Qual seria um encontro ideal para você?',
    options: [
      { text: 'Onde o outro declare o que sente por você', language: 'affirmation' },
      { text: 'Um passeio sem pressa, conversando de tudo', language: 'quality_time' },
      { text: 'Surpresa com uma lembrança inesperada no meio', language: 'gifts' },
      { text: 'Um jantar que o outro preparou especialmente', language: 'acts_of_service' },
      { text: 'Ficar abraçadinho no sofá ou caminhando de mãos dadas', language: 'physical_touch' },
    ],
  },
  {
    prompt: 'O que te faz perceber que alguém te ama de verdade?',
    options: [
      { text: 'O jeito que fala de você para os outros', language: 'affirmation' },
      { text: 'O tempo de qualidade que dedica a você', language: 'quality_time' },
      { text: 'As lembranças que escolhe com cuidado', language: 'gifts' },
      { text: 'As coisas que faz por você sem pedir', language: 'acts_of_service' },
      { text: 'A forma carinhosa como te toca', language: 'physical_touch' },
    ],
  },
  {
    prompt: 'Você realizou algo importante. O que mais te alegraria?',
    options: [
      { text: 'Ouvir "estou tão orgulhosa de você"', language: 'affirmation' },
      { text: 'Uma celebração só de vocês, com presença total', language: 'quality_time' },
      { text: 'Um presente para marcar a conquista', language: 'gifts' },
      { text: 'Alguém cuidar dos afazeres para você descansar', language: 'acts_of_service' },
      { text: 'Um abraço de parabéns bem apertado', language: 'physical_touch' },
    ],
  },
  {
    prompt: 'Qual é a melhor forma de "pedir desculpas" para você?',
    options: [
      { text: 'Dizer claramente "me perdoe, eu te amo"', language: 'affirmation' },
      { text: 'Sentar para conversar com você com presença total', language: 'quality_time' },
      { text: 'Traz uma pequena lembrança de reconciliação', language: 'gifts' },
      { text: 'Assume uma tarefa que estava sobrando para você', language: 'acts_of_service' },
      { text: 'Te abraça e busca proximidade física', language: 'physical_touch' },
    ],
  },
  {
    prompt: 'O que te faz sentir mais próxima de alguém?',
    options: [
      { text: 'Quando abrem o coração em palavras', language: 'affirmation' },
      { text: 'Passar tempo juntos sem pressa', language: 'quality_time' },
      { text: 'Trocar presentes significativos', language: 'gifts' },
      { text: 'Fazer coisas juntos, lado a lado', language: 'acts_of_service' },
      { text: 'Carinho físico e proximidade no toque', language: 'physical_touch' },
    ],
  },
  {
    prompt: 'Num domingo preguiçoso, o que te faria feliz?',
    options: [
      { text: 'Mensagem doce logo ao acordar', language: 'affirmation' },
      { text: 'Café da manhã juntos, sem celular, conversando', language: 'quality_time' },
      { text: 'Surpresa com um pãozinho ou doce especial', language: 'gifts' },
      { text: 'Alguém arrumar tudo enquanto você descansa', language: 'acts_of_service' },
      { text: 'Ficar deitada juntinha, abraçada', language: 'physical_touch' },
    ],
  },
  {
    prompt: 'Qual destes você valoriza mais em quem ama?',
    options: [
      { text: 'Saber elogiar e agradecer com palavras', language: 'affirmation' },
      { text: 'Estar presente de corpo e alma', language: 'quality_time' },
      { text: 'Ser atenta a detalhes e lembranças', language: 'gifts' },
      { text: 'Ser prestativa e fazer mais do que promete', language: 'acts_of_service' },
      { text: 'Ser afetuosa no contato físico', language: 'physical_touch' },
    ],
  },
];
