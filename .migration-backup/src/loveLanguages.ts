export type LoveLanguageKey =
  | 'affirmation'
  | 'quality_time'
  | 'gifts'
  | 'acts_of_service'
  | 'physical_touch';

export type Gender = 'male' | 'female';

export interface LoveLanguage {
  key: LoveLanguageKey;
  name: string;
  short: string;
  icon: string;
  emoji: string;
  gradient: string;
  accent: string;
  ring: string;
  teaser: string;
  description: string;
  traits: string[];
  inRelationship: string[];
  forPartner: string[];
}

export interface GenderContent {
  description: string;
  traits: string[];
  inRelationship: string[];
  forPartner: string[];
}

export const loveLanguages: Record<LoveLanguageKey, LoveLanguage> = {
  affirmation: {
    key: 'affirmation',
    name: 'Palavras de Afirmação',
    short: 'Afirmação',
    icon: 'MessageCircle',
    emoji: '💬',
    gradient: 'from-rose-400 to-rose-600',
    accent: 'text-rose-600',
    ring: 'ring-rose-300',
    teaser:
      'Elogios sinceros e palavras de afeto aquecem quem tem essa linguagem. Será que é a sua?',
    description:
      'Para você, o amor se expressa por meio de palavras sinceras: elogios, incentivo, agradecimento e frases de afeto. Ouvir “eu te amo”, “você é incrível” ou “obrigado por isso” aquece seu coração mais do que qualquer outra coisa.',
    traits: [
      'Valoriza elogios sinceros e específicos',
      'Aprecia mensagens, bilhetes e cartas',
      'Encorajamento verbal o fazem se sentir amado',
    ],
    inRelationship: [
      'Diga “eu te amo” com frequência e de forma espontânea',
      'Elogie detalhes específicos (“adorei como você cuidou disso”)',
      'Deixe bilhetinhos ou mande mensagens carinhosas durante o dia',
    ],
    forPartner: [
      'Se seu parceiro também é de afirmação, retribua os elogios',
      'Evite críticas duras — palavras ferem profundamente esta linguagem',
      'Compartilhe gratidão em voz alta, mesmo por coisas pequenas',
    ],
  },
  quality_time: {
    key: 'quality_time',
    name: 'Tempo de Qualidade',
    short: 'Tempo',
    icon: 'Clock',
    emoji: '⏳',
    gradient: 'from-sky-400 to-sky-600',
    accent: 'text-sky-600',
    ring: 'ring-sky-300',
    teaser:
      'Atenção plena, sem celular nem pressa. Para alguns, é o maior dos presentes.',
    description:
      'Para você, atenção plena é amor. Receber a companhia de quem você ama sem celular, distrações ou pressa — conversar de verdade, olhar nos olhos, compartilhar momentos — é o que faz você se sentir especial.',
    traits: [
      'Valoriza conversas profundas e presenciais',
      'Prefere companhia a presentes materiais',
      'Se sente amado quando recebe atenção total',
    ],
    inRelationship: [
      'Reserve momentos sem celular, só de vocês dois',
      'Crie pequenos rituais: café da manhã juntos, passeios sem pressa',
      'Pratique escuta ativa: mostre interesse genuíno pelo dia do outro',
    ],
    forPartner: [
      'Não confunda tempo juntos com tempo de qualidade — atenção plena é tudo',
      'Planeje encontros sem agenda, só para se conectar',
      'Evite ficar no celular quando estiverem conversando',
    ],
  },
  gifts: {
    key: 'gifts',
    name: 'Presentes',
    short: 'Presentes',
    icon: 'Gift',
    emoji: '🎁',
    gradient: 'from-amber-400 to-amber-600',
    accent: 'text-amber-600',
    ring: 'ring-amber-300',
    teaser:
      'Não é sobre valor, é sobre o gesto de pensar no outro — um símbolo que diz "lembrei de você".',
    description:
      'Para você, um presente é um símbolo tangível de "eu pensei em você". Não se trata de valor financeiro, mas do gesto, da lembrança, do cuidado de escolher algo que tenha significado.',
    traits: [
      'Guarda e valoriza muito os presentes recebidos',
      'Lembra de datas e gosta de surpreender',
      'Pequenas lembranças significam muito',
    ],
    inRelationship: [
      'Traga lembrancinhas: uma flor, um doce, algo que lembre um momento',
      'Comemore datas importantes com gestos simbólicos',
      'Mostre que pensou no outro ao escolher algo significativo',
    ],
    forPartner: [
      'Não precisa ser caro — o que importa é o pensamento por trás',
      'Guarde bilhetes e pequenos gestos: para esta linguagem, são tesouros',
      'Surpreender fora de datas comemorativas agrada ainda mais',
    ],
  },
  acts_of_service: {
    key: 'acts_of_service',
    name: 'Atos de Serviço',
    short: 'Serviço',
    icon: 'HandHelping',
    emoji: '🤝',
    gradient: 'from-emerald-400 to-emerald-600',
    accent: 'text-emerald-600',
    ring: 'ring-emerald-300',
    teaser:
      'Ações valem mais que mil palavras. Ajudar no prático é a forma mais forte de dizer "me importo".',
    description:
      'Para você, ações falam mais que palavras. Ver quem você ama se dispor a ajudar, facilitar seu dia, assumir uma tarefa ou aliviar sua carga é a forma mais forte de dizer "eu me importo com você".',
    traits: [
      'Valoriza quando se antecipam às suas necessidades',
      'Gestos práticos significam mais que promessas',
      '"Fazer junto" é um jeito de demonstrar carinho',
    ],
    inRelationship: [
      'Ajude em tarefas do dia a dia sem esperar pedir',
      'Antecipe-se: faça algo útil quando notar cansaço',
      'Cumpra o que prometer — coerência importa muito',
    ],
    forPartner: [
      'Pequenas tarefas (lavar a louça, fazer um café) têm peso enorme',
      'Não use os atos como moeda de troca — que perdem o sentido',
      'Pergunte "como posso ajudar hoje?" e realmente faça',
    ],
  },
  physical_touch: {
    key: 'physical_touch',
    name: 'Toque Físico',
    short: 'Toque',
    icon: 'HandHeart',
    emoji: '🤗',
    gradient: 'from-violet-400 to-violet-600',
    accent: 'text-violet-600',
    ring: 'ring-violet-300',
    teaser:
      'Abraços, mãos dadas e carinhos. O toque físico comunica afeto de forma direta e poderosa.',
    description:
      'Para você, o contato físico é uma linguagem poderosa de afeto: abraços, mãos dadas, carinhos, um toque no ombro. A proximidade física transmite segurança, conexão e amor de forma direta.',
    traits: [
      'Aprecia abraços, carinho e contato físico',
      'Toques sutis transmitem segurança e conexão',
      'Afasta-se do contato quando está chateado',
    ],
    inRelationship: [
      'Abrace, segure as mãos, faça carinho com frequência',
      'Crie momentos de proximidade física no dia a dia',
      'Toques leves (no ombro, no braço) já comunicam cuidado',
    ],
    forPartner: [
      'Respeite o momento: nunca force contato em brigas',
      'Em dias difíceis, um abraço silencioso vale mais que palavras',
      'Conheça os limites e preferências do outro quanto ao toque',
    ],
  },
};

export const loveLanguageOrder: LoveLanguageKey[] = [
  'affirmation',
  'quality_time',
  'gifts',
  'acts_of_service',
  'physical_touch',
];

// ─────────────────────────────────────────────
// Conteúdo específico por gênero
// ─────────────────────────────────────────────
export const genderContent: Record<Gender, Record<LoveLanguageKey, GenderContent>> = {
  male: {
    affirmation: {
      description:
        'Para você, o amor se expressa por meio de palavras sinceras: elogios, incentivo, agradecimento e frases de afeto. Ouvir "eu te amo", "você é incrível" ou "estou orgulhoso de você" aquece seu coração e te dá segurança emocional.',
      traits: [
        'Valoriza elogios sinceros e específicos sobre o que faz',
        'Aprecia mensagens e bilhetes, mesmo curtos',
        'Palavras de incentivo te motivam mais que gestos',
      ],
      inRelationship: [
        'Diga "eu te amo" com frequência e de forma espontânea',
        'Reconheça em palavras o esforço dele, não só o resultado',
        'Deixe mensagens carinhosas durante o dia, mesmo breves',
      ],
      forPartner: [
        'Evite críticas ásperas — palavras duras afetam muito esta linguagem',
        'Elogie publicamente: valoriza ser reconhecido diante dos outros',
        'Use palavras de gratidão por coisas que normalmente passam batidas',
      ],
    },
    quality_time: {
      description:
        'Para você, atenção plena é amor. Receber a companhia de quem você ama sem celular, distrações ou pressa — conversar de verdade, olhar nos olhos, compartilhar momentos — é o que faz você se sentir especial.',
      traits: [
        'Valoriza conversas profundas e presenciais',
        'Prefere companhia ativa a presentes materiais',
        'Se sente amado quando recebe atenção total, sem divisões',
      ],
      inRelationship: [
        'Reserve momentos sem celular, só de vocês dois',
        'Crie rituais: um passeio, um café, uma conversa de fim de dia',
        'Pratique escuta ativa: mostre interesse genuíno pelo dia dele',
      ],
      forPartner: [
        'Não confunda estar junto com tempo de qualidade — presença é tudo',
        'Planeje atividades em que vocês interagem, não só assistem',
        'Evite distrações quando ele estiver falando algo importante',
      ],
    },
    gifts: {
      description:
        'Para você, um presente é um símbolo tangível de "eu pensei em você". Não se trata de valor financeiro, mas do gesto, da lembrança, do cuidado de escolher algo que tenha significado e mostre que você esteve na cabeça dele.',
      traits: [
        'Guarda e valoriza muito os presentes recebidos',
        'Lembra de datas e gosta de surpreender',
        'Pequenas lembranças do dia a dia significam muito',
      ],
      inRelationship: [
        'Traga lembrancinhas: um doce favorito, algo que lembre um momento',
        'Comemore datas com gestos simbólicos, não precisa ser caro',
        'Mostre que pensou nele ao escolher algo significativo',
      ],
      forPartner: [
        'Não menospreze datas comemorativas — para ele, são marcos',
        'Guarde pequenos gestos e bilhetes: para esta linguagem, são tesouros',
        'Surpreender fora de datas comemorativas agrada ainda mais',
      ],
    },
    acts_of_service: {
      description:
        'Para você, ações falam mais que palavras. Ver quem você ama se dispor a ajudar, facilitar seu dia, assumir uma tarefa ou aliviar sua carga é a forma mais forte de dizer "eu me importo com você". Promessas vazias não te convencem.',
      traits: [
        'Valoriza quando se antecipam às suas necessidades',
        'Gestos práticos significam mais que promessas',
        'Coerência entre dizer e fazer é fundamental',
      ],
      inRelationship: [
        'Ajude em tarefas do dia a dia sem esperar pedir',
        'Antecipe-se: faça algo útil quando notar cansaço ou pressão',
        'Cumpra o que prometer — quebrar promessas fere muito',
      ],
      forPartner: [
        'Pequenas tarefas têm peso enorme: fazer um café, lavar a louça',
        'Não use os atos como moeda de troca — perdem o sentido',
        'Pergunte "como posso ajudar hoje?" e realmente faça',
      ],
    },
    physical_touch: {
      description:
        'Para você, o contato físico é uma linguagem poderosa de afeto: abraços, mãos dadas, carinhos, um toque no ombro. A proximidade física transmite segurança, conexão e amor de forma direta e inconfundível.',
      traits: [
        'Aprecia abraços, carinho e contato físico',
        'Toques sutis transmitem segurança e conexão',
        'Afasta-se do contato quando está chateado',
      ],
      inRelationship: [
        'Abrace, segure as mãos, faça carinho com frequência',
        'Crie momentos de proximidade física no dia a dia',
        'Toques leves (no ombro, no braço) já comunicam cuidado',
      ],
      forPartner: [
        'Respeite o momento: nunca force contato em brigas',
        'Em dias difíceis, um abraço silencioso vale mais que palavras',
        'Conheça os limites e preferências dele quanto ao toque',
      ],
    },
  },
  female: {
    affirmation: {
      description:
        'Para você, o amor se expressa por meio de palavras sinceras: elogios, incentivo, agradecimento e frases de afeto. Ouvir "eu te amo", "você é incrível" ou "estou orgulhosa de você" aquece seu coração e te dá segurança emocional.',
      traits: [
        'Valoriza elogios sinceros e específicos',
        'Aprecia mensagens, bilhetes e cartas escritas à mão',
        'Palavras de encorajamento a fazem se sentir amada',
      ],
      inRelationship: [
        'Diga "eu te amo" com frequência e de forma espontânea',
        'Elogie detalhes específicos ("adorei como você cuidou disso")',
        'Deixe bilhetinhos ou mande mensagens carinhosas durante o dia',
      ],
      forPartner: [
        'Evite críticas duras — palavras ferem profundamente esta linguagem',
        'Compartilhe gratidão em voz alta, mesmo por coisas pequenas',
        'Reconheça em palavras o esforço dela, não só o resultado',
      ],
    },
    quality_time: {
      description:
        'Para você, atenção plena é amor. Receber a companhia de quem você ama sem celular, distrações ou pressa — conversar de verdade, olhar nos olhos, compartilhar momentos — é o que faz você se sentir especial e valorizada.',
      traits: [
        'Valoriza conversas profundas e presenciais',
        'Prefere companhia a presentes materiais',
        'Se sente amada quando recebe atenção total',
      ],
      inRelationship: [
        'Reserve momentos sem celular, só de vocês dois',
        'Crie pequenos rituais: café da manhã juntos, passeios sem pressa',
        'Pratique escuta ativa: mostre interesse genuíno pelo dia dela',
      ],
      forPartner: [
        'Não confunda tempo juntos com tempo de qualidade — atenção plena é tudo',
        'Planeje encontros sem agenda, só para se conectar',
        'Evite ficar no celular quando estiverem conversando',
      ],
    },
    gifts: {
      description:
        'Para você, um presente é um símbolo tangível de "eu pensei em você". Não se trata de valor financeiro, mas do gesto, da lembrança, do cuidado de escolher algo que tenha significado e mostre que você esteve na cabeça dela.',
      traits: [
        'Guarda e valoriza muito os presentes recebidos',
        'Lembra de datas e gosta de surpreender',
        'Pequenas lembranças significam muito',
      ],
      inRelationship: [
        'Traga lembrancinhas: uma flor, um doce, algo que lembre um momento',
        'Comemore datas importantes com gestos simbólicos',
        'Mostre que pensou nela ao escolher algo significativo',
      ],
      forPartner: [
        'Não precisa ser caro — o que importa é o pensamento por trás',
        'Guarde bilhetes e pequenos gestos: para esta linguagem, são tesouros',
        'Surpreender fora de datas comemorativas agrada ainda mais',
      ],
    },
    acts_of_service: {
      description:
        'Para você, ações falam mais que palavras. Ver quem você ama se dispor a ajudar, facilitar seu dia, assumir uma tarefa ou aliviar sua carga é a forma mais forte de dizer "eu me importo com você". Promessas vazias não te convencem.',
      traits: [
        'Valoriza quando se antecipam às suas necessidades',
        'Gestos práticos significam mais que promessas',
        '"Fazer junto" é um jeito de demonstrar carinho',
      ],
      inRelationship: [
        'Ajude em tarefas do dia a dia sem esperar pedir',
        'Antecipe-se: faça algo útil quando notar cansaço',
        'Cumpra o que prometer — coerência importa muito',
      ],
      forPartner: [
        'Pequenas tarefas (lavar a louça, fazer um café) têm peso enorme',
        'Não use os atos como moeda de troca — que perdem o sentido',
        'Pergunte "como posso ajudar hoje?" e realmente faça',
      ],
    },
    physical_touch: {
      description:
        'Para você, o contato físico é uma linguagem poderosa de afeto: abraços, mãos dadas, carinhos, um toque no ombro. A proximidade física transmite segurança, conexão e amor de forma direta e inconfundível.',
      traits: [
        'Aprecia abraços, carinho e contato físico',
        'Toques sutis transmitem segurança e conexão',
        'Afasta-se do contato quando está chateada',
      ],
      inRelationship: [
        'Abrace, segure as mãos, faça carinho com frequência',
        'Crie momentos de proximidade física no dia a dia',
        'Toques leves (no ombro, no braço) já comunicam cuidado',
      ],
      forPartner: [
        'Respeite o momento: nunca force contato em brigas',
        'Em dias difíceis, um abraço silencioso vale mais que palavras',
        'Conheça os limites e preferências dela quanto ao toque',
      ],
    },
  },
};

// ─────────────────────────────────────────────
// Dicas para o casal — como um enxerga o outro
// ─────────────────────────────────────────────
export const coupleInsights: Record<LoveLanguageKey, string[]> = {
  affirmation: [
    'Quando um elogia o outro em palavras, ambos se sentem vistos e valorizados',
    'Evitem críticas na frente de terceiros — para esta linguagem, dói dobrado',
    'Criem o hábito de dizer "obrigado" por pequenas coisas, em voz alta',
  ],
  quality_time: [
    'Reservem tempo sem celular: a presença plena é o maior presente um para o outro',
    'Conversas profundas fortalecem a intimidade — não troquem por programas passivos',
    'Um passeio sem destino, só para conversar, pode ser mais significativo que um jantar caro',
  ],
  gifts: [
    'O valor não importa — o que importa é o pensamento por trás de cada presente',
    'Lembrem-se das datas importantes um do outro: esquecer fere profundamente',
    'Pequenas surpresas fora de datas comemorativas demonstram que pensam um no outro',
  ],
  acts_of_service: [
    'Antecipem-se às necessidades um do outro: agir antes de pedir é amor em ação',
    'Nunca usem atos como moeda de troca — perdem o sentido e viram cobrança',
    'Cumpram o que prometem: para esta linguagem, promessa quebrada é decepção profunda',
  ],
  physical_touch: [
    'Abraços, mãos dadas e carinhos fortalecem a conexão no dia a dia',
    'Em dias difíceis, um abraço silencioso comunica mais que mil palavras',
    'Respeitem o momento: nunca force o contato físico durante uma briga',
  ],
};
