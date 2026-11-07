/**
 * ============================================================================
 * PKABOT — FICHEIRO CENTRAL DE CONFIGURAÇÃO COMERCIAL (config.js)
 * ============================================================================
 * Altere os valores abaixo para atualizar textos comerciais, preços, links de
 * vídeo, contactos de suporte, redes sociais e perguntas frequentes (FAQ)
 * sem precisar de editar o código HTML estrutural.
 */

window.PKABOT_CONFIG = {
  // 1. Identificação do Produto (NUNCA usar outro nome comercial além de PKABOT)
  brand: {
    name: "PKABOT",
    gameName: "Poke Alliance Online",
    tagline: "Automação de Alta Precisão para Poke Alliance Online",
    version: "1.0.0",
    platform: "Windows 10 / 11 (64-bit)"
  },

  // 2. Textos Comerciais da Hero Section
  hero: {
    badge: "SOFTWARE DE AUTOMAÇÃO PARA POKE ALLIANCE ONLINE",
    title: "Leve sua experiência em Poke Alliance Online a outro nível.",
    subtitle:
      "Conheça o PKABOT, uma ferramenta de automação desenvolvida para otimizar sua experiência de jogo, com controlo, eficiência e praticidade.",
    primaryCtaText: "Conhecer funcionalidades",
    secondaryCtaText: "Ver planos",
    // Quando tiver uma captura de ecrã real da interface, coloque o caminho relativo aqui
    // Exemplo: "assets/images/pkabot-interface.png"
    screenshotUrl: "",
    screenshotAlt: "Interface oficial do software PKABOT para Windows"
  },

  // 3. Demonstração em Vídeo (YouTube)
  demo: {
    title: "Veja o PKABOT em Ação",
    subtitle:
      "Acompanhe na prática como o PKABOT executa rotas, gerencia combates e opera em segundo plano no Poke Alliance Online.",
    // Insira apenas o ID do vídeo do YouTube (ex: "dQw4w9WgXcQ") ou a URL completa do YouTube
    // Enquanto estiver vazio (""), o site exibirá um espaço visual reservado elegante.
    youtubeVideoIdOrUrl: "",
    placeholderTitle: "Vídeo Demonstrativo Oficial em Breve",
    placeholderDescription:
      "Espaço reservado para incorporação das gravações oficiais do PKABOT em funcionamento no Poke Alliance Online."
  },

  // 4. Configuração de Planos e Assinatura (Preparado para futura integração PIX)
  pricing: {
    sectionTitle: "Plano de Assinatura",
    sectionSubtitle:
      "Acesso completo a todas as ferramentas de automação, navegação, combate e segurança do PKABOT.",
    planName: "Licença PKABOT — 30 Dias",
    planBadge: "ACESSO COMPLETO",
    // [CONTEÚDO PROVISÓRIO — DEFINIR PREÇO COMERCIAL ANTES DO LANÇAMENTO]
    currency: "R$",
    priceValue: "A definir",
    pricePeriod: "/ 30 dias",
    priceNote:
      "Valor comercial configurável em js/config.js • Pagamento único sem renovação automática forçada",
    validityHighlight:
      "A licença terá validade de 30 dias a partir da primeira ativação.",
    ctaButtonText: "Comprar agora",
    // Integração futura com Checkout PIX (manter false até que o gateway real esteja ativo)
    pixCheckoutEnabled: false,
    pixCheckoutUrl: "",
    featuresIncluded: [
      "Validade de 30 dias contados a partir da primeira ativação",
      "Navegação automática por rotas de até 20 marcas no minimapa",
      "Cliques e comandos enviados diretamente para a janela do jogo",
      "Automação completa de combate, cura (Player/Pokémon) e Revives",
      "Deteção visual de corpos mortos e uso automático de Pokébolas",
      "Calibrador visual interativo de áreas e painel de Debug em tempo real",
      "Licença criptográfica vinculada ao dispositivo (HWID)",
      "Suporte técnico e atualizações durante o período ativo"
    ]
  },

  // 5. Processo "Como Funciona"
  howItWorks: {
    validityBanner:
      "A licença terá validade de 30 dias a partir da primeira ativação.",
    steps: [
      {
        stepNumber: "01",
        title: "Escolha o seu plano",
        description:
          "Selecione a assinatura de 30 dias do PKABOT na secção de planos."
      },
      {
        stepNumber: "02",
        title: "Efetue o pagamento",
        description:
          "Realize o pagamento de forma rápida através do checkout PIX quando disponível."
      },
      {
        stepNumber: "03",
        title: "Receba a licença por email",
        description:
          "O código de licença e as instruções de acesso são enviados para o seu email."
      },
      {
        stepNumber: "04",
        title: "Instale o PKABOT",
        description:
          "Execute o instalador oficial no Windows sem precisar de instalar Python ou dependências."
      },
      {
        stepNumber: "05",
        title: "Introduza a licença e ative o programa",
        description:
          "Informe o seu email e a chave recebida na janela de ativação do PKABOT."
      },
      {
        stepNumber: "06",
        title: "Comece a utilizar",
        description:
          "Calibre as regiões do jogo uma única vez, escolha a sua rota e inicie a automação."
      }
    ]
  },

  // 6. Funcionalidades Comprovadas do PKABOT (Baseadas exclusivamente no software real)
  features: [
    {
      id: "background-input",
      badge: "Segundo Plano",
      title: "Comandos Diretos na Janela sem Roubar o Mouse",
      description:
        "O PKABOT envia cliques no minimapa, movimentos de cursor e atalhos de teclado diretamente para a janela do Poke Alliance Online via mensagens nativas do Windows, sem mover nem bloquear o seu cursor físico."
    },
    {
      id: "minimap-navigation",
      badge: "Rotas & Minimapa",
      title: "Navegação por Marcas com Pré-Busca Inteligente",
      description:
        "Monte rotas personalizadas com até 20 símbolos do minimapa, reordene a sequência arrastando com o rato (Drag-and-Drop) e salve múltiplas listas. Durante a espera pelos monstros, o PKABOT já pré-localiza a próxima marca para avançar sem atrasos."
    },
    {
      id: "smart-combat",
      badge: "Combate Automatizado",
      title: "Gestão de Batalha, Combo e Agrupamento",
      description:
        "Monitoriza a lista Battle em tempo real, aguarda o agrupamento configurável de monstros, interrompe o deslocamento caso o limite seja atingido em rota e executa sequências de Combo, Target, Defesa, Safe Combo e PokeStop."
    },
    {
      id: "healing-revive",
      badge: "Sobrevivência & Segurança",
      title: "Cura Independente, Controlo de Revives e Auto Logout",
      description:
        "Leitura separada das barras de vida do Player e do Pokémon aliado para acionamento automático de cura e medicina. Inclui leitura ótica do contador de Revives e proteção de Auto Logout (Ctrl+Q) ao atingir o limite mínimo."
    },
    {
      id: "corpse-capture",
      badge: "Captura Automática",
      title: "Deteção de Corpos Mortos e Uso de Pokébolas",
      description:
        "Gestor integrado para capturar e cadastrar recortes de sprites de corpos mortos diretamente da janela do jogo. Ao término de cada combate, localiza os corpos na área de visão e aciona o atalho de Pokébola automaticamente."
    },
    {
      id: "visual-calibration",
      badge: "Calibração & Telemetria",
      title: "Assistente Visual de Regiões e Debug ao Vivo",
      description:
        "Ferramenta interativa de arrastar e soltar para calibrar Minimapa, Lista Battle, Player HP, Poké HP e Visão em segundos, acompanhada de janela de Debug em tempo real com visualização das deteções e registo de ações."
    }
  ],

  // 7. Perguntas Frequentes (FAQ) — Editáveis
  // Nota: Respostas dependentes de políticas comerciais finais estão sinalizadas como [CONTEÚDO PROVISÓRIO]
  faq: [
    {
      question: "O que é o PKABOT?",
      answer:
        "O PKABOT é um software desktop de automação para Windows, projetado para executar rotas por marcas no minimapa, gerenciar combates, realizar curas automáticas, controlar revives e auxiliar na captura dentro do jogo Poke Alliance Online.",
      provisional: false
    },
    {
      question: "Para qual jogo o PKABOT foi desenvolvido?",
      answer:
        "O PKABOT foi desenvolvido especificamente para o jogo Poke Alliance Online.",
      provisional: false
    },
    {
      question: "Como funciona a licença?",
      answer:
        "O acesso ao PKABOT funciona mediante uma chave de licença criptográfica individual vinculada ao seu email e ao identificador de hardware (HWID) do computador. A licença é validada na abertura e periodicamente durante a execução do programa.",
      provisional: false
    },
    {
      question: "Quando começa a validade da licença?",
      answer:
        "A licença tem validade de 30 dias corridos contados a partir do momento da primeira ativação no software.",
      provisional: false
    },
    {
      question: "Como recebo o meu código?",
      answer:
        "[CONTEÚDO PROVISÓRIO — REVISAR POLÍTICA DE ENTREGA] Após a confirmação do pagamento, a sua chave de licença e as instruções de download do instalador são enviadas para o endereço de email informado no momento da compra.",
      provisional: true
    },
    {
      question: "Em quantos computadores posso utilizar?",
      answer:
        "Cada licença padrão é vinculada a 1 (um) computador através do código HWID gerado pelo próprio PKABOT. [CONTEÚDO PROVISÓRIO: Políticas de troca ou redefinição de HWID em caso de formatação devem ser definidas pela equipa comercial].",
      provisional: true
    },
    {
      question: "Como recebo suporte?",
      answer:
        "[CONTEÚDO PROVISÓRIO — CONFIGURAR CANAIS OFICIAIS] O atendimento técnico e comercial é realizado através do email oficial de suporte e da nossa comunidade no Discord, disponíveis no rodapé deste site.",
      provisional: true
    },
    {
      question: "O PKABOT funciona em Windows?",
      answer:
        "Sim. O PKABOT possui instalador nativo para Windows 10 e Windows 11 (64 bits) e é distribuído como executável independente — você não precisa de instalar Python nem bibliotecas adicionais no seu computador.",
      provisional: false
    },
    {
      question: "Como faço para instalar?",
      answer:
        "Basta baixar o instalador oficial recebido após a aquisição, executar o assistente do Windows (sem necessidade de privilégios de Administrador), abrir o PKABOT pelo atalho criado e ativar a sua licença.",
      provisional: false
    }
  ],

  // 8. Contactos, Suporte e Redes Sociais (Configuráveis)
  contact: {
    // [CONTEÚDO PROVISÓRIO — ALTERAR PARA OS DADOS OFICIAIS ANTES DA PUBLICAÇÃO]
    supportEmail: "suporte@pkabot.com",
    socials: {
      discord: "#",
      youtube: "#",
      instagram: "#",
      telegram: "#"
    }
  },

  // 9. Aviso Legal Obrigatório do Rodapé
  legal: {
    disclaimer:
      "PKABOT é um software independente desenvolvido para Poke Alliance Online. Não é um produto oficial nem possui afiliação com os desenvolvedores ou responsáveis pelo jogo.",
    copyrightYear: "2026"
  }
};
