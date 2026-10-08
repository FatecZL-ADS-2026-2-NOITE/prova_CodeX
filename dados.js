//   id          número   identificador único do livro
//   titulo      texto
//   autor       texto
//   area        texto    "Programação" | "Banco de Dados" | "Redes" | "Gestão" | "Segurança"
//   ano         número   ano da edição
//   exemplares  número   quantos exemplares estão livres na estante (0 = emprestado)
//   disponivel  boolean  true se exemplares > 0
//   descricao   texto    resumo curto do livro

const LIVROS = [
  {
    id: 1,
    titulo:
      "Entendendo Algoritmos – 2ª Edição: Um guia ilustrado para programadores e outros curiosos",
    autor: "Aditya Y. Bhargava",
    area: "Programação",
    ano: 2026,
    exemplares: 3,
    disponivel: true,
    descricao:
      "Os algoritmos mais utilizados já foram descobertos, testados e comprovados. O livro Entendendo Algoritmos, Segunda Edição torna o aprendizado deles algo extremamente simples. Com explicações didáticas, mais de 400 ilustrações divertidas e exemplos relevantes, esta é a maneira perfeita de dominar o poder dos algoritmos — sem exigir conhecimentos avançados de matemática!",
  },
  {
    id: 2,
    titulo:
      "Use a Cabeça Java – 3ª Edição: guia do aprendiz para programação no mundo real",
    autor: "Kathy Sierra, Bert Bates, Trisha Gee",
    area: "Programação",
    ano: 2024,
    exemplares: 1,
    disponivel: true,
    descricao:
      "O “Use a Cabeça Java” é uma experiência completa de aprendizado em Java e programação orientada a objetos. Com este livro, você aprenderá a linguagem Java de um jeito único, que ultrapassa os manuais de instruções, ajudando-o a se tornar um programador excelente. Por meio de quebra-cabeças, mistérios e entrevistas reveladoras com famosos objetos Java, você ficará por dentro dos fundamentos Java e tópicos avançados, incluindo lambdas, streams, generics, threads, redes e a temida interface gráfica (GUI) para desktop. Caso já tenha experiência com outra linguagem de programação, o Use a Cabeça Java o conquistará com abordagens mais modernas de programação ― o Java atual, mais elegante, rápido, fácil de ler, de escrever e de manter.",
  },
  {
    id: 3,
    titulo:
      "Fundamentos da qualidade de dados: guia prático para criar pipelines de dados confiáveis",
    autor: " Barr Moses, Lior Gavish, Molly Vorwerck",
    area: "Banco de Dados",
    ano: 2024,
    exemplares: 2,
    disponivel: true,
    descricao:
      "Os dashboards de seus produtos parecem esquisitos? Os relatórios trimestrais estão desatualizados? O conjunto de dados que você está usando está comprometido ou simplesmente errado? Caso tenha respondido sim a essas perguntas, este livro é para você. Geralmente, problemas desse tipo são tratados de forma improvisada e reativa, por mais que afetem quase todas as equipes. Atualmente, muitas equipes de engenharia de dados enfrentam o problema de “pipelines bons, dados ruins”. Se os dados que está processando forem ruins, não importa o nível de avanço de sua infraestrutura de dados.",
  },
  {
    id: 4,
    titulo: "Introdução à Linguagem SQL",
    autor: " Thomas Nield",
    area: "Banco de Dados",
    ano: 2016,
    exemplares: 0,
    disponivel: false,
    descricao:
      "Atualmente as empresas estão coletando dados a taxas exponenciais e mesmo assim poucas pessoas sabem como acessá-los de maneira relevante. Se você trabalha em uma empresa ou é profissional de TI, este curto livro lhe ensinará como obter e transformar dados com o SQL de maneira significativa. Você dominará rapidamente os aspectos básicos do SQL e aprenderá como criar seus próprios bancos de dados.",
  },
  {
    id: 5,
    titulo: "Linux Guia Prático – 4ª Edição: Comandos Essenciais",
    autor: "Daniel J. Barrett",
    area: "Sistemas Operacionais",
    ano: 2024,
    exemplares: 2,
    disponivel: true,
    descricao:
      "Se você usa o Linux em seu trabalho diário, Linux Guia Prático será o material de consulta profissional perfeito. Essa edição comemorativa de 20 anos, totalmente atualizada, explica mais de 200 comandos do Linux, incluindo novos comandos para manipulação de arquivos, gerenciamento de pacotes, controle de versões, conversões de formato de arquivo e muito mais.",
  },
  {
    id: 6,
    titulo: "Certificação LPI-1: 101-102",
    autor: "Luciano Antonio Siqueira",
    area: "Sistemas Operacionais",
    ano: 2019,
    exemplares: 0,
    disponivel: false,
    descricao:
      "A presente edição reflete a nova versão 5.0 dos objetivos definidos pelo Linux Professional Institute para o exame de Certificação LPI nível 1, efetivos a partir de 2019. Assim como em atualizações anteriores, o foco é reduzir a ênfase em tecnologias que estão ficando defasadas e dar mais atenção àquelas que vêm sendo adotadas por padrão na maioria das distribuições Linux",
  },
  {
    id: 7,
    titulo: "Engenharia de IA: Construindo aplicações com modelos de fundação",
    autor: "Chip Huyen",
    area: "Inteligência Artificial",
    ano: 2026,
    exemplares: 1,
    disponivel: true,
    descricao:
      "Os modelos de fundação permitiram o surgimento de vários casos de uso novos de IA, ao mesmo tempo que reduziram as barreiras de entrada para a construção de produtos de IA. Isso transformou a IA de uma disciplina esotérica em uma poderosa ferramenta de desenvolvimento acessível a qualquer pessoa, inclusive àquelas sem experiência prévia em IA.",
  },
  {
    id: 8,
    titulo:
      "Construindo Aplicações com Agentes de IA: Projeto e Implementação de Sistemas Multiagentes",
    autor: " Michael Albada",
    area: "Inteligência Artificial",
    ano: 2026,
    exemplares: 4,
    disponivel: true,
    descricao:
      "A IA generativa revolucionou a forma como as organizações lidam com problemas, acelerando a jornada do conceito ao protótipo e à solução. À medida que os modelos se tornam cada vez mais capazes, testemunhamos o surgimento de um novo padrão de projeto: agentes autônomos de IA. Ao combinar ferramentas, conhecimento, memória e aprendizado com modelos de fundação avançados, agora podemos sequenciar múltiplas inferências de modelos para resolver problemas ambíguos e difíceis. De agentes de codificação a agentes de pesquisa, passando por agentes analíticos e muito mais, já vimos agentes acelerarem o trabalho de equipes e organizações. Embora esses agentes aumentem a eficiência, eles frequentemente exigem planejamento, rascunhos e revisões extensivos para concluir tarefas complexas, e implantá-los continua sendo um desafio para muitas organizações, especialmente com o rápido desenvolvimento da tecnologia e da pesquisa.",
  },
  {
    id: 9,
    titulo: "Introdução ao Pentest",
    autor: "Daniel Moreno",
    area: "Segurança",
    ano: 2019,
    exemplares: 1,
    disponivel: true,
    descricao:
      "Introdução ao Pentest irá capacitar o leitor a entender e a realizar o pentest – uma auditoria minuciosa sobre falhas e vulnerabilidades em computadores e redes – e, assim, buscar a melhor forma de solucionar os problemas encontrados.",
  },
  {
    id: 10,
    titulo:
      "Análise de Tráfego em Redes TCP/IP: Utilize Tcpdump na Análise de Tráfegos em Qualquer Sistema Operacional",
    autor: " João Eriberto Mota Filho",
    area: "Segurança",
    ano: 2013,
    exemplares: 0,
    disponivel: false,
    descricao:
      "Este livro utiliza o tcpdump, exaustivamente, para demonstrar a teoria com base em capturas de tráfego e, consequentemente, ensinar sua análise. Todo o trabalho está dividido em uma introdução e cinco partes, a saber: conceitos básicos; protocolos básicos em redes TCP/IP e sua análise; conhecimentos específicos em redes TCP/IP e sua análise; tráfegos diversos e sistemas específicos; apêndices.",
  },
];
