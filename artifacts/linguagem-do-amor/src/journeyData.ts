export interface DevotionalDay {
  day: number;
  theme: string;
  verse: string;
  verseRef: string;
  reflection: string;
  prayer: string;
}

export interface LanguageChallenge {
  affirmation: string;
  quality_time: string;
  gifts: string;
  acts_of_service: string;
  physical_touch: string;
}

export type ChallengeMap = Record<number, LanguageChallenge>;

// ─────────────────────────────────────────────
// 40 Devocionais originais — inspirados em princípios bíblicos
// ─────────────────────────────────────────────
export const devotionals: DevotionalDay[] = [
  {
    day: 1,
    theme: 'O chamado ao amor',
    verse: 'Acima de tudo, porém, revistam-se do amor, que é o elo perfeito.',
    verseRef: 'Colossenses 3:14',
    reflection:
      'O amor não é apenas um sentimento — é um chamado. Deus nos convida a vestir o amor como uma vestimenta, algo que escolhemos colocar todos os dias. Antes de qualquer gesto, antes de qualquer palavra, o amor precisa ser a decisão que veste o coração.',
    prayer:
      'Pai, ajuda-me a escolher o amor hoje. Que eu não espere senti-lo para então agir, mas que a minha ação desperte o próprio sentimento. Revista-me do teu amor para que eu possa amparar quem está ao meu lado.',
  },
  {
    day: 2,
    theme: 'Amar é uma decisão',
    verse: 'Amem o Senhor, o seu Deus de todo o coração e de toda a alma, e de todo o seu entendimento.',
    verseRef: 'Mateus 22:37',
    reflection:
      'Amar começa com uma escolha, não com uma emoção. O maior mandamento não diz "sinta amor", mas "ame" — um verbo de ação. Decidir amar quando é fácil é natural; decidir amar quando é difícil é transformador.',
    prayer:
      'Senhor, ensina-me a amar por decisão, não apenas por impulso. Que o meu amor não dependa das circunstâncias, mas da firmeza do meu compromisso contigo e com quem me confiaste.',
  },
  {
    day: 3,
    theme: 'O poder das palavras',
    verse: 'A morte e a vida estão no poder da língua.',
    verseRef: 'Provérbios 18:21',
    reflection:
      'Cada palavra que pronunciamos carrega sementes — de vida ou de morte. Um elogio sincero pode restaurar um dia inteiro; uma crítica áspera pode ferir por semanas. Hoje, escolha ser alguém que planta vida com cada frase.',
    prayer:
      'Senhor, que as minhas palavras sejam como água fresca para quem ouve. Livra-me da crítica destrutiva e ensina-me a usar a língua para abençoar, encorajar e construir.',
  },
  {
    day: 4,
    theme: 'Presença que cura',
    verse: 'Onde dois ou três estiverem reunidos em meu nome, ali estou eu no meio deles.',
    verseRef: 'Mateus 18:20',
    reflection:
      'A presença não é sobre estar fisicamente próximo — é sobre estar integralmente presente. Quando você abandona as distrações e oferece atenção plena, você cria um espaço sagrado onde o outro se sente visto e valorizado.',
    prayer:
      'Pai, ajuda-me a estar presente de corpo e alma. Que eu largue as distrações e ofereça a quem amo a dádiva mais rara: minha atenção integral.',
  },
  {
    day: 5,
    theme: 'O valor do pequeno',
    verse: 'Quem é fiel no pouco também é fiel no muito.',
    verseRef: 'Lucas 16:10',
    reflection:
      'Os grandes gestos são lembrados, mas são os pequenos que constroem a confiança. Um bilhete, um café trazido, uma pergunta sincera — a fidelidade nos detalhes revela um coração que se importa.',
    prayer:
      'Senhor, que eu não despreze as pequenas oportunidades de amar. Ensina-me a ver nos detalhes o lugar onde o amor se faz visível.',
  },
  {
    day: 6,
    theme: 'Servir sem aplausos',
    verse: 'Nada façam por ambição egoísta ou vaidade, mas em humildade considerem os outros superiores a si mesmos.',
    verseRef: 'Filipenses 2:3',
    reflection:
      'O amor verdadeiro não busca reconhecimento. Quando você serve sem esperar aplausos, imita a Cristo, que lavou os pés dos discípulos sem precisar de platéia. O serviço silencioso é o mais puro.',
    prayer:
      'Pai, liberta-me da necessidade de ser visto. Que eu sirva com alegria, sabendo que o teu olhar é o único aplauso que preciso.',
  },
  {
    day: 7,
    theme: 'O toque que comunica',
    verse: 'Ele, porém, tomou-a pela mão e disse: "Levante-se!".',
    verseRef: 'Marcos 5:41',
    reflection:
      'Jesus usou o toque como linguagem de restauração. Um abraço, uma mão estendida, um carinho no ombro — o contato físico comunica aquilo que as palavras às vezes não conseguem: "você não está sozinho".',
    prayer:
      'Senhor, que as minhas mãos sejam instrumentos de acolhimento. Ensina-me a usar o toque com sabedoria e delicadeza para transmitir segurança e afeto.',
  },
  {
    day: 8,
    theme: 'Perdoar para amar',
    verse: 'Antes, sejam bondosos e compassivos uns com os outros, perdoando-se mutuamente, como Deus os perdoou em Cristo.',
    verseRef: 'Efésios 4:32',
    reflection:
      'Não é possível amar profundamente sem perdoar profundamente. O perdão não esquece — escolhe não cobrar. É a decisão de libertar o outro da dívida para que o amor volte a circular sem barreiras.',
    prayer:
      'Pai, dá-me a coragem de perdoar como fui perdoado. Que eu não deixe mágoas acumuladas endurecerem o meu coração para quem amo.',
  },
  {
    day: 9,
    theme: 'A paciência do amor',
    verse: 'O amor é paciente, o amor é bondoso.',
    verseRef: '1 Coríntios 13:4',
    reflection:
      'A paciência não é esperar passivamente — é suportar com esperança. O amor paciente dá tempo ao outro de crescer, de errar, de se recompor. Não cobra o fruto antes da estação.',
    prayer:
      'Senhor, cultiva em mim a paciência do amor. Que eu não desista do outro nos dias difíceis, mas espere com fé o que a tua graça ainda fará.',
  },
  {
    day: 10,
    theme: 'Ouvir com o coração',
    verse: 'Todo homem seja pronto para ouvir, tardio para falar.',
    verseRef: 'Tiago 1:19',
    reflection:
      'Ouvir é um ato de amor. Quando você para tudo para escutar de verdade, sem interromper, sem formular a resposta enquanto o outro fala, você diz: "o que você tem a dizer importa para mim".',
    prayer:
      'Pai, ensina-me a arte de ouvir. Que eu não seja apenas um ouvido, mas um coração disposto a acolher o que o outro precisa compartilhar.',
  },
  {
    day: 11,
    theme: 'Presentes que dizem "lembrei de você"',
    verse: 'Cada um dê conforme decidiu no coração, não com tristeza ou por obrigação.',
    verseRef: '2 Coríntios 9:7',
    reflection:
      'Um presente não é sobre o valor — é sobre o pensamento. Quando você escolhe algo que lembra uma conversa, um gosto, um momento, você comunica: "você esteve na minha mente hoje". Esse é o presente que toca o coração.',
    prayer:
      'Senhor, desperta em mim a atenção aos detalhes. Que eu perceba o que faria o outro feliz e tenha a iniciativa de surpreender com gestos que mostram cuidado.',
  },
  {
    day: 12,
    theme: 'A força da gentileza',
    verse: 'A resposta branda desvia o furor.',
    verseRef: 'Provérbios 15:1',
    reflection:
      'A gentileza não é fraqueza — é força sob controle. Escolher a palavra branda quando tudo pede o grito é um ato de domínio próprio que protege a relação da destruição.',
    prayer:
      'Pai, nos momentos de tensão, que a minha resposta seja branda. Domina as minhas emoções para que eu não fira com palavras que não poderei recolher.',
  },
  {
    day: 13,
    theme: 'Alegria no dar',
    verse: 'Há mais felicidade em dar do que em receber.',
    verseRef: 'Atos 20:35',
    reflection:
      'A alegria de dar nasce de um coração grato. Quando você reconhece que tudo o que tem é dom, ofertar de volta — seja tempo, palavras, gestos — deixa de ser obrigação e vira alegria.',
    prayer:
      'Senhor, enche o meu coração de gratidão. Que eu descubra a alegria de dar, sabendo que cada gesto de amor é uma semente plantada em solo fértil.',
  },
  {
    day: 14,
    theme: 'O sacrifício que ama',
    verse: 'Nisto conhecemos o amor: Cristo deu a sua vida por nós. E nós devemos dar nossas vidas por nossos irmãos.',
    verseRef: '1 João 3:16',
    reflection:
      'Amar custa. O amor verdadeiro abre mão de algo — do tempo, do conforto, da razão — em favor do outro. O sacrifício não é perda; é investimento em algo que transcende.',
    prayer:
      'Pai, ensina-me a amar de forma sacrificial. Que eu não calcule o custo, mas confie que cada renúncia por amor é semente de vida eterna.',
  },
  {
    day: 15,
    theme: 'Honra e respeito',
    verse: 'Honrem a todos; amem os irmãos; temam a Deus; honrem o rei.',
    verseRef: '1 Pedro 2:17',
    reflection:
      'Honra é tratar o outro como valioso, independentemente do que faz. Quando você honra, não está reconhecendo merecimento — está declarando valor. O respeito é o chão sobre o qual o amor caminha.',
    prayer:
      'Senhor, que eu honre quem está ao meu lado não pelo que faz, mas pelo que é. Ensina-me a tratar cada pessoa com a dignidade que vem de ti.',
  },
  {
    day: 16,
    theme: 'Proteger a confiança',
    verse: 'O amor protege sempre.',
    verseRef: '1 Coríntios 13:7',
    reflection:
      'A confiança é construída em anos e pode ser destruída em segundos. Proteger a intimidade do outro, não expor fraquezas, não revelar segredos — é um ato de amor que cria um espaço seguro para a vulnerabilidade.',
    prayer:
      'Pai, faze-me um guardião da confiança. Que eu nunca use o que sei sobre o outro como arma, mas como ponte para um amor mais profundo.',
  },
  {
    day: 17,
    theme: 'A humildade de pedir desculpas',
    verse: 'Confessem os seus pecados uns aos outros e orem uns pelos outros para serem curados.',
    verseRef: 'Tiago 5:16',
    reflection:
      'Pedir desculpas não é derrota — é coragem. Reconhecer o erro diante de quem você feriu é o primeiro passo da restauração. A humildade de admitir abre a porta que o orgulho mantém trancada.',
    prayer:
      'Senhor, dá-me a humildade de reconhecer os meus erros. Que eu não espere o outro ceder primeiro, mas tenha a iniciativa de buscar a reconciliação.',
  },
  {
    day: 18,
    theme: 'Esperar com fé',
    verse: 'O amor tudo sofre, tudo crê, tudo espera, tudo suporta.',
    verseRef: '1 Coríntios 13:7',
    reflection:
      'Esperar não é passividade — é fé ativa. O amor que espera confia que o tempo de Deus é perfeito, mesmo quando não vê mudanças imediatas. É a esperança que não desiste do outro.',
    prayer:
      'Pai, ensina-me a esperar com fé. Que eu não desista de quem amo, mas confie que a tua obra no coração dele ainda não terminou.',
  },
  {
    day: 19,
    theme: 'A intimidade que edifica',
    verse: 'Portanto, encorajem-se e edifiquem-se uns aos outros.',
    verseRef: '1 Tessalonicenses 5:11',
    reflection:
      'A intimidade verdadeira não é apenas proximidade — é construção. Cada conversa, cada gesto, cada momento compartilhado pode ser uma pedra na construção de algo que dure. O amor edifica.',
    prayer:
      'Senhor, que cada interação com quem amo seja uma oportunidade de edificar. Que eu construa com palavras de encorajamento e gestos de cuidado.',
  },
  {
    day: 20,
    theme: 'O meio do caminho',
    verse: 'Não nos cansemos de fazer o bem, pois no tempo próprio colheremos.',
    verseRef: 'Gálatas 6:9',
    reflection:
      'No meio da jornada, o entusiasmo inicial pode esfriar. É aqui que muitos desistem. Mas o amor que persevera é o que colhe frutos duradouros. Não desista — a colheita está próxima.',
    prayer:
      'Pai, renova as minhas forças no meio do caminho. Que eu não desista de amar quando o entusiasmo cede lugar à rotina, mas encontre na constância a minha força.',
  },
  {
    day: 21,
    theme: 'A gratidão que transforma',
    verse: 'Em tudo deem graças, pois esta é a vontade de Deus.',
    verseRef: '1 Tessalonicenses 5:18',
    reflection:
      'A gratidão transforma o comum em extraordinário. Quando você passa a notar e agradecer o que o outro faz — o café da manhã, a roupa lavada, o sorriso — você descobre que o amor sempre esteve nos detalhes.',
    prayer:
      'Senhor, abre os meus olhos para as bênçãos diárias. Que a gratidão seja a lente através da qual eu vejo quem amo e tudo o que recebo deles.',
  },
  {
    day: 22,
    theme: 'Falar a mesma língua',
    verse: 'Esforcem-se para conservar a unidade do Espírito pelo vínculo da paz.',
    verseRef: 'Efésios 4:3',
    reflection:
      'Amar é aprender a língua do outro. Nem sempre o seu jeito de amar é o que o outro reconhece. O esforço de falar a linguagem que ele entende — mesmo quando não é a sua — é um ato de amor que constrói pontes.',
    prayer:
      'Pai, ensina-me a falar a linguagem de quem amo, mesmo quando não é a minha. Que eu não imponha o meu jeito, mas aprenda o do outro.',
  },
  {
    day: 23,
    theme: 'A coragem de ser vulnerável',
    verse: 'Criai em mim um coração puro, ó Deus, e renovai dentro de mim um espírito firme.',
    verseRef: 'Salmos 51:10',
    reflection:
      'A vulnerabilidade não é fraqueza — é coragem. Quando você se abre sobre seus medos, suas lutas, suas inseguranças, você convida o outro a entrar em um espaço de intimidade verdadeira.',
    prayer:
      'Senhor, dá-me a coragem de ser vulnerável. Que eu não esconda o meu coração por trás de muros de autossuficiência, mas permita que o amor entre.',
  },
  {
    day: 24,
    theme: 'O poder do encorajamento',
    verse: 'A palavra agradável é favo de mel, é doce para a alma e saúde para o corpo.',
    verseRef: 'Provérbios 16:24',
    reflection:
      'Uma palavra de encorajamento pode ser o vento que falta nas velas de alguém. Não subestime o poder de dizer "você consegue", "estou aqui", "acredito em você". O encorajamento é amor em forma de palavras.',
    prayer:
      'Pai, faze-me um portador de encorajamento. Que as minhas palavras sejam como mel — doces para a alma e curativas para o corpo de quem as recebe.',
  },
  {
    day: 25,
    theme: 'O silêncio que ama',
    verse: 'Há tempo de calar e tempo de falar.',
    verseRef: 'Eclesiastes 3:7',
    reflection:
      'Há momentos em que o amor se expressa no silêncio. Não na indiferença, mas na presença sem palavras. Um abraço sem explicação, uma companhia sem conversa — às vezes, o silêncio é a forma mais eloquente de dizer "estou aqui".',
    prayer:
      'Senhor, ensina-me a saber quando calar. Que o meu silêncio não seja ausência, mas presença cheia de significado.',
  },
  {
    day: 26,
    theme: 'Reconciliar-se primeiro',
    verse: 'Se você estiver oferecendo sua oferta no altar e ali se lembrar de que seu irmão tem algo contra você, deixe sua oferta ali, reconcilie-se e depois volte.',
    verseRef: 'Mateus 5:23-24',
    reflection:
      'A reconciliação é prioridade. Jesus coloca o relacionamento restaurado acima do culto. Não adie o pedido de desculpas, não deixe a mágoa fermentar. Vá primeiro, reconcilie-se — depois, o coração estará livre para amar.',
    prayer:
      'Pai, dá-me a iniciativa de buscar a reconciliação. Que eu não espere o outro dar o primeiro passo, mas tenha a coragem de estender a mão primeiro.',
  },
  {
    day: 27,
    theme: 'A generosidade do coração',
    verse: 'Dêem e lhes será dado. Uma boa medida, calcada, sacudida e transbordante.',
    verseRef: 'Lucas 6:38',
    reflection:
      'A generosidade não se mede pelo tamanho do que se dá, mas pela disposição do coração. Quem ama dá sem calcular — do seu tempo, do seu afeto, do seu melhor. E descobre que, quanto mais dá, mais recebe.',
    prayer:
      'Senhor, ensina-me a dar com generosidade. Que o meu coração não seja mesquinho, mas transbordante de amor para quem precisa receber.',
  },
  {
    day: 28,
    theme: 'O amor que cobre',
    verse: 'Acima de tudo, amem-se uns aos outros profundamente, porque o amor cobre uma multidão de pecados.',
    verseRef: '1 Pedro 4:8',
    reflection:
      'Cobrir não é esconder — é proteger. O amor profundo escolhe não expor a falha do outro, não reabrir feridas já curadas, não contar a história do erro para quem não precisa ouvir. É a discrição que preserva a dignidade.',
    prayer:
      'Pai, ensina-me a cobrir com amor. Que eu não seja um divulgador de falhas, mas um guardião da dignidade de quem amo.',
  },
  {
    day: 29,
    theme: 'A perseverança na oração',
    verse: 'Orai sem cessar.',
    verseRef: '1 Tessalonicenses 5:17',
    reflection:
      'Orar por quem você ama é um dos atos mais poderosos de amor. Quando você leva o nome do outro diante de Deus, você está intercedendo — colocando entre o Céu e a Terra aquilo que talvez só a graça possa resolver.',
    prayer:
      'Senhor, ensina-me a orar com perseverança por quem amo. Que eu não desista de clamar, confiando que a tua obra no coração dele é maior do que eu posso ver.',
  },
  {
    day: 30,
    theme: 'O amor que se alegra com a verdade',
    verse: 'O amor não se alegra com a injustiça, mas se alegra com a verdade.',
    verseRef: '1 Coríntios 13:6',
    reflection:
      'Amar é comprometer-se com a verdade — mesmo quando dói. A verdade dita com amor constrói; a mentira que protege destrói. O amor não compactua com o falso, mas cria um espaço seguro para que a verdade seja acolhida.',
    prayer:
      'Pai, que o meu amor seja verdadeiro. Ensina-me a falar a verdade com ternura e a acolher a verdade com humildade.',
  },
  {
    day: 31,
    theme: 'Renovar as forças',
    verse: 'Os que esperam no Senhor renovam as suas forças.',
    verseRef: 'Isaías 40:31',
    reflection:
      'Amar exige energia — e essa energia vem de uma Fonte que não se esgota. Quando você se aproxima de Deus, suas forças se renovam para amar de novo, para perdoar de novo, para começar de novo.',
    prayer:
      'Senhor, renova as minhas forças em ti. Que eu não tente amar com as minhas próprias reservas, mas receba de ti a energia que não se esgota.',
  },
  {
    day: 32,
    theme: 'O exemplo de Cristo',
    verse: 'Amem-se uns aos outros como eu os amei.',
    verseRef: 'João 13:34',
    reflection:
      'O padrão do amor não é o que sentimos — é o que Cristo fez. Ele amou quando foi rejeitado, serviu quando era Senhor, perdoou quando foi traído. Esse é o modelo: não amar porque é fácil, mas amar porque é o jeito dele.',
    prayer:
      'Pai, que o amor de Cristo seja o meu padrão. Que eu não me contente com o amor que é fácil, mas busque o amor que custa, que serve, que permanece.',
  },
  {
    day: 33,
    theme: 'A sabedoria do tempo',
    verse: 'Tudo tem o seu tempo determinado.',
    verseRef: 'Eclesiastes 3:1',
    reflection:
      'O amor respeita o tempo. Não força, não apressa, não cobra o fruto antes da estação. Cada relacionamento tem o seu ritmo — e a sabedoria está em discernir quando plantar, quando regar e quando colher.',
    prayer:
      'Senhor, dá-me a sabedoria do tempo. Que eu não apresse o crescimento do outro, mas confie que o teu tempo é perfeito para cada etapa.',
  },
  {
    day: 34,
    theme: 'Alegria na presença',
    verse: 'O meu propósito é que o coração de vocês seja encorajado.',
    verseRef: 'Colossenses 2:2',
    reflection:
      'A presença amorosa gera coragem. Quando você está ali — de forma integral, sem reservas — o outro se sente encorajado a ser quem é, a sonhar, a tentar. Sua presença é um porto seguro.',
    prayer:
      'Pai, faze da minha presença um porto. Que quem estiver comigo se sinta encorajado, seguro e amado, não pelo que eu digo, mas pelo que eu sou.',
  },
  {
    day: 35,
    theme: 'O legado do amor',
    verse: 'O amor nunca acaba.',
    verseRef: '1 Coríntios 13:8',
    reflection:
      'O que você constrói com amor permanece. Profecias passarão, conhecimentos cessarão, mas o amor — esse é eterno. Cada gesto de amor é um tijolo em algo que o tempo não destrói.',
    prayer:
      'Senhor, que eu invista naquilo que permanece. Que o meu amor não seja efêmero, mas construa um legado que sobreviva ao tempo.',
  },
  {
    day: 36,
    theme: 'A coragem de recomeçar',
    verse: 'Eis que faço novas todas as coisas.',
    verseRef: 'Apocalipse 21:5',
    reflection:
      'Todo relacionamento tem dias que precisam de recomeço. A boa notícia é que Deus é especialista em recomeços. O amor que se arrepender, se levantar e tentar de novo é o que mais reflete o coração do Pai.',
    prayer:
      'Pai, quando eu cair, dá-me a coragem de recomeçar. Que eu não desista do amor, mas confie que em ti todas as coisas se fazem novas.',
  },
  {
    day: 37,
    theme: 'O amor que serve em segredo',
    verse: 'Quando você der esmola, que a sua mão esquerda não saiba o que a direita faz.',
    verseRef: 'Mateus 6:3',
    reflection:
      'O amor mais puro é o que não precisa ser visto. Servir em segredo — sem anunciar, sem buscar reconhecimento — liberta o amor da armadilha da vaidade. O Pai, que vê em secreto, recompensa.',
    prayer:
      'Senhor, liberta-me da necessidade de ser reconhecido. Que eu sirva em silêncio, sabendo que o teu olhar é suficiente.',
  },
  {
    day: 38,
    theme: 'A paz que une',
    verse: 'Esforcem-se por viver em paz com todos.',
    verseRef: 'Hebreus 12:14',
    reflection:
      'A paz não é ausência de conflito — é a decisão de buscar a reconciliação. Quando você escolhe a paz, você cria um ambiente onde o amor pode crescer. A perseguição da paz é, em si, um ato de amor.',
    prayer:
      'Pai, faze-me um pacificador. Que eu não seja fonte de conflito, mas um canal da tua paz em cada relacionamento.',
  },
  {
    day: 39,
    theme: 'O amor que permanece',
    verse: 'O amor permanece para sempre.',
    verseRef: '1 Coríntios 13:13',
    reflection:
      'Tudo passa — a fé se tornará vista, a esperança se cumprirá. Mas o amor permanece. É a única coisa que carregamos para a eternidade. Hoje, escolha investir naquilo que não terá fim.',
    prayer:
      'Senhor, que eu invida o meu coração naquilo que permanece. Que o amor seja o meu tesouro, a minha herança, o meu legado.',
  },
  {
    day: 40,
    theme: 'O amor completo',
    verse: 'Nisto está aperfeiçoado o amor em nós.',
    verseRef: '1 João 4:17',
    reflection:
      'Chegamos ao fim de quarenta dias — mas o amor não termina. Ele se aperfeiçoa na prática, na constância, na decisão diária de recomeçar. O amor completo não é o que não falha, mas o que sempre se levanta.',
    prayer:
      'Pai, agradeço-te por estes quarenta dias. Que o que foi plantado aqui não se perca, mas cresça e dê frutos que permaneçam. Que o amor seja, para sempre, a minha língua materna.',
  },
];

// ─────────────────────────────────────────────
// Desafios práticos por linguagem — 40 dias
// Cada dia tem um desafio único para cada uma das 5 linguagens
// ─────────────────────────────────────────────
export const challenges: ChallengeMap = {
  1: {
    affirmation: 'Hoje, diga três qualidades específicas que você admira em quem ama. Não use adjetivos genéricos — seja concreto: "admiro como você acolhe as pessoas".',
    quality_time: 'Reserve 15 minutos hoje para estar com quem ama sem celular. Apenas converse, sem agenda, sem pressa.',
    gifts: 'Deixe um pequeno bilhete em um lugar que só será encontrado mais tarde — na gaveta, no espelho, dentro de um livro.',
    acts_of_service: 'Assuma hoje uma tarefa que normalmente não é sua. Não diga nada — apenas faça e observe a reação.',
    physical_touch: 'Dê um abraço longo hoje — de pelo menos 10 segundos — sem dizer nada. Deixe o abraço falar.',
  },
  2: {
    affirmation: 'Mande uma mensagem de manhã com algo que você valoriza no outro. Não espere resposta — apenas abençoe.',
    quality_time: 'Convide para um passeio de 10 minutos. Sem destino, sem celular — apenas andar e conversar.',
    gifts: 'Traga hoje algo simples que lembre um momento feliz de vocês: uma música, um doce, uma foto.',
    acts_of_service: 'Pergunte "como posso ajudar hoje?" e faça o que for pedido sem reclamar.',
    physical_touch: 'Segure a mão do outro por 30 segundos hoje enquanto conversam. Perceba o que isso comunica.',
  },
  3: {
    affirmation: 'Escreva um bilhete à mão com uma frase de encorajamento e deixe onde será encontrado.',
    quality_time: 'Proponha uma conversa sem TV, sem celular, por 20 minutos. Apenas vocês dois.',
    gifts: 'Compre ou prepare algo que o outro mencionou querer há tempos. Mesmo que simples.',
    acts_of_service: 'Antecipe-se: faça algo que você sabe que o outro precisará fazer hoje, antes que ele peça.',
    physical_touch: 'Faça um carinho no ombro ou no braço enquanto passa — um toque breve que diz "estou aqui".',
  },
  4: {
    affirmation: 'Elogie publicamente hoje — na frente de outras pessoas, diga algo que valoriza no outro.',
    quality_time: 'Crie um pequeno ritual hoje: um café juntos, uma conversa de fim de dia. Repita nos próximos dias.',
    gifts: 'Surpreenda com uma flor, um doce ou algo que lembre uma data especial de vocês.',
    acts_of_service: 'Cumpra hoje algo que você prometeu e ainda não havia feito. A coerência comunica amor.',
    physical_touch: 'Ao se encontrarem, seja o primeiro a estender os braços para um abraço de chegada.',
  },
  5: {
    affirmation: 'Diga "obrigado por..." e complete com três coisas específicas que o outro fez recentemente.',
    quality_time: 'Desligue todas as notificações por uma hora enquanto estão juntos. Dê atenção total.',
    gifts: 'Escolha algo que você tem e que o outro admira — e dê de presente. Generosidade gera conexão.',
    acts_of_service: 'Faça algo que o outro detesta fazer — e faça com alegria, sem comentar o esforço.',
    physical_touch: 'Deite a cabeça no ombro do outro durante um filme ou conversa. Proximidade sem palavras.',
  },
  6: {
    affirmation: 'Mande uma mensagem durante o dia com algo que você admira no caráter do outro — não na aparência.',
    quality_time: 'Proponha um passeio a um lugar que vocês nunca foram juntos. A novidade fortalece a conexão.',
    gifts: 'Compre algo que o outro precisa — não quer — e dê sem cerimônia. O cuidado prático é presente.',
    acts_of_service: 'Levante-se primeiro amanhã e prepare algo que facilite a manhã do outro.',
    physical_touch: 'Dê um beijo na testa hoje — um gesto de ternura que diz "eu cuido de você".',
  },
  7: {
    affirmation: 'Reconheça em voz alta algo que o outro fez bem esta semana, mesmo que pequeno.',
    quality_time: 'Reserve a noite para conversar — sem telas, sem pressa. Pergunte: "como está o seu coração?"',
    gifts: 'Traga uma lembrança de um lugar que é significativo para vocês. O símbolo importa mais que o valor.',
    acts_of_service: 'Organize algo que está bagunçado e que incomoda o outro — sem dizer que fez.',
    physical_touch: 'Abrace por trás, de surpresa, enquanto o outro faz algo rotineiro. Quebre a distância.',
  },
  8: {
    affirmation: 'Diga "você é importante para mim" — sem motivo especial, apenas porque é verdade.',
    quality_time: 'Faça uma refeição juntos sem celular na mesa. A presença é o prato principal.',
    gifts: 'Escreva uma lista de 5 coisas que você ama no outro e entregue como presente.',
    acts_of_service: 'Lave a louça ou arrume a casa hoje sem ser pedido. O silêncio do serviço é eloquente.',
    physical_touch: 'Sente-se próximo no sofá, ombro a ombro. A proximidade física sem palavras comunica acolhimento.',
  },
  9: {
    affirmation: 'Elogie uma mudança recente no outro — um corte de cabelo, uma atitude, uma iniciativa.',
    quality_time: 'Caminhem juntos por 15 minutos. O movimento do corpo abre o coração para conversar.',
    gifts: 'Traga o lanche favorito do outro sem avisar. A surpresa amplifica o gesto.',
    acts_of_service: 'Pergunte "o que está pesando para você hoje?" e ajude a resolver.',
    physical_touch: 'Dê um abraço de despedida que dure mais que o habitual. Não solte primeiro.',
  },
  10: {
    affirmation: 'Mande uma mensagem dizendo "pensei em você agora" — e conte o que fez lembrar.',
    quality_time: 'Proponha um jogo, um quebra-cabeça ou uma atividade que vocês possam fazer juntos.',
    gifts: 'Compre um livro, uma música ou um filme que combine com o outro. O pensamento é o presente.',
    acts_of_service: 'Assuma uma tarefa que o outro vinha adiando. Faça e libere-o desse peso.',
    physical_touch: 'Faça cafuné por 5 minutos enquanto conversam. O toque rítmico acalma e conecta.',
  },
  11: {
    affirmation: 'Diga "eu te amo" de uma forma que você nunca usou antes — em outro idioma, por escrito, em voz baixa.',
    quality_time: 'Vá a um café ou parque e sentem-se sem celular. Apenas observem e conversem.',
    gifts: 'Traga algo que você guardou — uma foto, uma lembrança — e diga por que é significativo.',
    acts_of_service: 'Prepare algo para o outro que ele normalmente faz sozinho — um café, uma refeição.',
    physical_touch: 'Estende a mão para ajudar a levantar e segure por um segundo a mais que o necessário.',
  },
  12: {
    affirmation: 'Reconheça um sacrifício que o outro fez por você recentemente. Diga "eu vi o que você fez".',
    quality_time: 'Reserve 30 minutos para ouvir — sem dar conselhos, sem interromper. Apenas acolher.',
    gifts: 'Faça você mesmo um presente — um desenho, um cartaz, algo à mão. O esforço é o valor.',
    acts_of_service: 'Ajude em algo que o outro está aprendendo a fazer. Ensine com paciência.',
    physical_touch: 'Dê um abraço apertado quando o outro menos esperar — no meio do dia, sem motivo.',
  },
  13: {
    affirmation: 'Mande um áudio hoje com uma palavra de encorajamento. A voz carrega emoção que o texto não alcança.',
    quality_time: 'Proponha um pôr do sol juntos. Apenas sentar e assistir — sem comentar, apenas estar.',
    gifts: 'Traga um doce ou fruta favorita do outro. O gesto simples de "lembrei do que você gosta".',
    acts_of_service: 'Levante-se de madrugada para cobrir o outro com um cobertor se estiver frio.',
    physical_touch: 'Deite a cabeça no colo do outro e peça um carinho. Vulnerabilidade é amor.',
  },
  14: {
    affirmation: 'Diga "estou orgulhoso de você" — e diga por quê. Seja específico.',
    quality_time: 'Proponha uma conversa sobre sonhos — o que vocês querem construir juntos.',
    gifts: 'Dê algo que você usa e que o outro sempre pediu emprestado. "Agora é seu".',
    acts_of_service: 'Faça algo que custa o seu tempo — não o seu dinheiro. O tempo é o presente mais caro.',
    physical_touch: 'Abrace de frente, olhe nos olhos por 3 segundos antes de soltar. A presença é o abraço.',
  },
  15: {
    affirmation: 'Elogie uma qualidade que o outro não reconhece em si mesmo. Mostre o que você vê.',
    quality_time: 'Façam uma refeição cozinhando juntos. A cooperação é tempo de qualidade em ação.',
    gifts: 'Compre algo que o outro disse que precisa — não que quer. A atenção é o presente.',
    acts_of_service: 'Antecipe uma necessidade: se o outro está cansado, prepare o ambiente para descansar.',
    physical_touch: 'Dê um beijo na bochecha de surpresa — no meio de uma conversa comum.',
  },
  16: {
    affirmation: 'Escreva uma carta curta — 3 frases — dizendo o que o outro significa para você.',
    quality_time: 'Reserve a primeira hora do dia para estar juntos, antes de qualquer compromisso.',
    gifts: 'Traga algo que lembre um lugar que vocês querem ir juntos. "Pensei em nosso futuro".',
    acts_of_service: 'Organize um espaço que o outro usa — a mesa, a gaveta, o carro. Sem aviso.',
    physical_touch: 'Segure o rosto do outro com as duas mãos e diga "você é importante".',
  },
  17: {
    affirmation: 'Diga "me perdoe" por algo específico que você fez — mesmo que pequeno. A humildade é amor.',
    quality_time: 'Proponha uma caminhada sem destino. O caminho é a conversa, não o lugar.',
    gifts: 'Compre algo que o outro sempre hesita em comprar para si. "Você merece".',
    acts_of_service: 'Faça algo que o outro pediu há semanas e que você vinha adiando. Hoje é o dia.',
    physical_touch: 'Abrace por trás enquanto o outro cozinha ou trabalha. A surpresa do afeto.',
  },
  18: {
    affirmation: 'Reconheça em voz alta algo que o outro faz bem e que passa despercebido no dia a dia.',
    quality_time: 'Desligue a TV e proponha uma conversa sobre algo que vocês nunca conversaram.',
    gifts: 'Traga uma planta, uma flor ou uma semente. O crescimento é um símbolo de cuidado.',
    acts_of_service: 'Lave a roupa do outro sem avisar. O cuidado silencioso com o cotidiano.',
    physical_touch: 'Dorme mais perto hoje. A proximidade no sono é uma forma de confiança.',
  },
  19: {
    affirmation: 'Mande uma mensagem às 6h dizendo "hoje vai ser um bom dia — e eu estou com você".',
    quality_time: 'Reserve 20 minutos para ouvir uma música juntos — sem falar, apenas sentir.',
    gifts: 'Escolha uma música que lembre o outro e mande com a frase "lembrei de você".',
    acts_of_service: 'Prepare o café da manhã do outro amanhã. O cuidado matinal é um presente.',
    physical_touch: 'Dê um abraço de urso — apertado, demorado, com um sorriso. O abraço que abraça a alma.',
  },
  20: {
    affirmation: 'Diga "você me faz melhor" — e explique como. Seja específico e sincero.',
    quality_time: 'Proponha um piquenique ou uma refeição em um lugar diferente. O novo cria memória.',
    gifts: 'Dê algo que você mesmo usou e que tem significado — um livro, um objeto. "Quero que seja seu".',
    acts_of_service: 'Faça algo que você sabe que o outro odeia fazer — e diga "eu cuidei disso".',
    physical_touch: 'Sente-se no colo do outro ou puxe-o para o seu. Quebre a distância física.',
  },
  21: {
    affirmation: 'Diga "obrigado" por algo que o outro faz todos os dias e que nunca foi reconhecido.',
    quality_time: 'Reserve a noite para conversar sobre o que vocês são gratos um no outro.',
    gifts: 'Compre algo que o outro sempre hesita em comprar para si. "Você merece".',
    acts_of_service: 'Faça uma tarefa que o outro vinha adiando por medo ou cansaço. Encare por ele.',
    physical_touch: 'Abrace e não solte até o outro soltar. Deixe o abraço durar o tempo que precisar.',
  },
  22: {
    affirmation: 'Elogie uma decisão recente do outro. Mostre que você confia no discernimento dele.',
    quality_time: 'Proponha uma conversa sobre o que vocês aprenderam juntos nestes dias.',
    gifts: 'Traga algo que lembre uma conversa recente — um docinho, um objeto, uma imagem.',
    acts_of_service: 'Ajude o outro a organizar algo que está bagunçado — com paciência, sem julgar.',
    physical_touch: 'Dê um abraço lateral enquanto caminham juntos. O toque que acompanha.',
  },
  23: {
    affirmation: 'Compartilhe com o outro algo que você admira nele que você nunca disse.',
    quality_time: 'Reserve 30 minutos para contar uma história sua que o outro não conhece.',
    gifts: 'Faça um pequeno álbum ou coleção de fotos que marcaram a jornada de vocês.',
    acts_of_service: 'Assuma hoje uma tarefa que normalmente gera atrito. Faça com alegria.',
    physical_touch: 'Deite a mão sobre a do outro enquanto conversam. O contato que diz "estou aqui".',
  },
  24: {
    affirmation: 'Diga "você consegue" — e adicione algo específico que você acredita no outro.',
    quality_time: 'Proponha uma atividade nova que nenhum dos dois nunca fez. Aprender juntos é conexão.',
    gifts: 'Compre algo que o outro precisa para um projeto ou sonho. Invista no que ele ama.',
    acts_of_service: 'Antecipe-se: faça algo que você sabe que o outro terá de fazer ao chegar em casa.',
    physical_touch: 'Abrace o outro por pelo menos 20 segundos hoje. O abraço longo acalma o sistema nervoso.',
  },
  25: {
    affirmation: 'Reconheça algo que o outro mudou recentemente — um hábito, uma atitude, um esforço.',
    quality_time: 'Reserve a manhã para um café juntos, sem pressa, sem celular. Apenas presença.',
    gifts: 'Dê algo que você fez — um bolo, um artesanato, um desenho. O esforço é o presente.',
    acts_of_service: 'Organize algo que o outro sempre quer fazer mas não tem tempo — e diga "eu cuidei".',
    physical_touch: 'Faça um cafuné demorado enquanto o outro descansa. O toque que cuida.',
  },
  26: {
    affirmation: 'Mande uma mensagem com uma palavra que descreve o outro para você. Apenas uma palavra.',
    quality_time: 'Proponha uma conversa sobre o que vocês sonham para os próximos 5 anos.',
    gifts: 'Compre algo que o outro mencionou querer há meses. A memória do cuidado é amor.',
    acts_of_service: 'Faça algo que você normalmente não faz — e que surpreenderá o outro.',
    physical_touch: 'Dê um abraço de despedida que dure mais que o habitual. Não solte primeiro.',
  },
  27: {
    affirmation: 'Diga "você é a pessoa mais [adjetivo] que eu conheço" — e complete com algo verdadeiro.',
    quality_time: 'Reserve a noite para um jantar a sós, sem celular, sem TV. Apenas vocês dois.',
    gifts: 'Traga algo que lembre um lugar que vocês foram felizes juntos. A memória é tesouro.',
    acts_of_service: 'Assuma uma tarefa que o outro vinha fazendo sozinho há meses. Liberte-o.',
    physical_touch: 'Segure as mãos do outro e olhe nos olhos por 10 segundos. Sem falar.',
  },
  28: {
    affirmation: 'Elogie algo que o outro fez por outra pessoa. Mostre que você admira o caráter dele.',
    quality_time: 'Proponha um passeio a um lugar que vocês foram felizes no passado. Revivam.',
    gifts: 'Dê algo que você guardou desde a infância — e que tem significado para você.',
    acts_of_service: 'Faça algo que o outro sempre quis que você fizesse — e nunca pediu.',
    physical_touch: 'Abrace o outro por trás, de surpresa, enquanto ele trabalha ou cozinha.',
  },
  29: {
    affirmation: 'Mande uma mensagem às 23h dizendo "durma bem — eu te amo". O fim do dia é sagrado.',
    quality_time: 'Reserve 15 minutos para orar juntos. A presença espiritual é a maior conexão.',
    gifts: 'Compre algo que o outro precisa para descansar melhor — uma almofada, um chá.',
    acts_of_service: 'Prepare o ambiente para o outro dormir bem — arrume a cama, apague as luzes.',
    physical_touch: 'Dê um beijo de boa noite que não seja automático. Que seja intencional.',
  },
  30: {
    affirmation: 'Diga "nestes 30 dias, eu aprendi..." e complete com algo que você mudou por amor.',
    quality_time: 'Proponha uma conversa sobre o que mudou em vocês nestes 30 dias.',
    gifts: 'Dê algo que marca este momento — um símbolo, um objeto, uma lembrança da jornada.',
    acts_of_service: 'Faça algo que você vinha prometendo há 30 dias. Hoje é o dia de cumprir.',
    physical_touch: 'Abrace o outro e diga "obrigado por estar aqui". O abraço que agradece.',
  },
  31: {
    affirmation: 'Elogie uma força do outro que você descobriu nestas últimas semanas.',
    quality_time: 'Reserve a tarde para um passeio sem destino. O caminho é o presente.',
    gifts: 'Compre algo que o outro sempre quis ganhar mas nunca pediu. Adivinhe o desejo.',
    acts_of_service: 'Antecipe-se: faça algo que o outro precisará amanhã. Prepare hoje.',
    physical_touch: 'Dê um abraço de boa manhã que dure mais que o habitual. Comece o dia no afeto.',
  },
  32: {
    affirmation: 'Diga "você me ensinou..." e complete com algo que você aprendeu com o outro.',
    quality_time: 'Proponha uma conversa sobre o que vocês aprenderam juntos nestes dias.',
    gifts: 'Traga algo que lembre um momento de aprendizado de vocês. O crescimento é tesouro.',
    acts_of_service: 'Ajude o outro a fazer algo que ele está aprendendo. Ensine com paciência.',
    physical_touch: 'Sente-se próximo e coloque a cabeça no ombro do outro. A presença que descansa.',
  },
  33: {
    affirmation: 'Reconheça algo que o outro faz que você antes não valorizava. "Eu não dizia, mas..."',
    quality_time: 'Reserve 20 minutos para ouvir o outro falar sobre algo que ele ama.',
    gifts: 'Compre algo relacionado a um hobby do outro. Mostre que você valoriza o que ele ama.',
    acts_of_service: 'Faça algo que facilita a vida do outro — sem que ele precise pedir.',
    physical_touch: 'Dê um abraço longo quando o outro chegar em casa. O abraço de chegada é sagrado.',
  },
  34: {
    affirmation: 'Diga "você é a minha pessoa favorita" — e diga por quê.',
    quality_time: 'Proponha uma noite sem telas. Apenas vocês, uma conversa e talvez uma música.',
    gifts: 'Dê algo que você escolheu pensando no outro — não no que você gostaria de ganhar.',
    acts_of_service: 'Assuma uma tarefa que o outro odeia. "Eu odeio isso por você" é amor.',
    physical_touch: 'Deite a mão sobre a do outro enquanto assistem algo. O toque que acompanha.',
  },
  35: {
    affirmation: 'Escreva uma frase que você quer que o outro lembre para sempre. Entregue por escrito.',
    quality_time: 'Reserve a manhã inteira para estar juntos. Sem compromissos, sem pressa.',
    gifts: 'Dê algo que você quer que dure — um objeto, um livro, uma peça. O legado do amor.',
    acts_of_service: 'Faça algo que você quer que seja lembrado — um gesto que marca, não apenas resolve.',
    physical_touch: 'Abrace o outro por 30 segundos. Em silêncio. Sem pressa. Apenas o abraço.',
  },
  36: {
    affirmation: 'Diga "se eu pudesse recomeçar, eu escolheria você de novo". E diga por quê.',
    quality_time: 'Proponha uma conversa sobre o que vocês recomeçariam se pudessem.',
    gifts: 'Dê algo que marca um recomeço — uma planta, uma semente, um símbolo de renovação.',
    acts_of_service: 'Refaça algo que você fez mal no passado. "Desta vez, eu quero fazer bem".',
    physical_touch: 'Abrace o outro como se fosse a primeira vez. Com surpresa, com intenção.',
  },
  37: {
    affirmation: 'Elogie algo que o outro faz em segredo — que ninguém vê, mas você sim.',
    quality_time: 'Reserve 15 minutos para contar algo que você nunca contou ao outro.',
    gifts: 'Deixe um presente em um lugar que só será encontrado dias depois. O amor que espera.',
    acts_of_service: 'Faça algo em segredo que o outro descobrirá só depois. O serviço silencioso.',
    physical_touch: 'Deixe um carinho enquanto o outro dorme. O toque que cuida sem acordar.',
  },
  38: {
    affirmation: 'Diga "a paz que eu sinto com você..." e complete. A paz é um presente que merece ser nomeado.',
    quality_time: 'Reserve a noite para um momento de silêncio juntos. A paz que não precisa palavras.',
    gifts: 'Dê algo que traz paz — um chá, um livro, uma música suave. O presente que acalma.',
    acts_of_service: 'Resolva algo que estava gerando atrito. A paz é o presente mais caro.',
    physical_touch: 'Abrace o outro em silêncio. Sem palavras, sem explicação. Apenas o abraço.',
  },
  39: {
    affirmation: 'Diga "o que eu mais amo em você é..." e complete com algo que não muda com o tempo.',
    quality_time: 'Reserve a noite para relembrar os 39 dias. O que ficou? O que mudou?',
    gifts: 'Dê algo que representa o que vocês construíram. Um símbolo da jornada.',
    acts_of_service: 'Faça algo que você quer que seja o último gesto desta jornada — e o primeiro da próxima.',
    physical_touch: 'Abrace o outro e diga "eu te amo" no ouvido. O sussurro que permanece.',
  },
  40: {
    affirmation: 'Escreva uma carta dizendo o que estes 40 dias significaram. Leia em voz alta.',
    quality_time: 'Reserve o dia para celebrar. Um passeio, uma refeição, uma conversa sobre o futuro.',
    gifts: 'Dê algo que marca a conclusão — um certificado, um símbolo, uma aliança, um objeto.',
    acts_of_service: 'Faça algo que diz "eu me comprometo a continuar". O amor não termina no dia 40.',
    physical_touch: 'Abrace o outro por 40 segundos. Um abraço por cada dia. O abraço que selou a jornada.',
  },
};
