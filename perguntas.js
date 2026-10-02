const perguntas = [
    // 0 - PERGUNTA PRINCIPAL
    {
        enunciado: "Você acordou em uma praia isolada após o seu barco afundar. O sol está se pondo, o vento está ficando muito frio e uma tempestade forte vai cair em poucas horas. Você está apenas com as roupas do corpo. Você precisa de um abrigo urgente para passar a noite. O que você faz?",

        alternativas: [
            {
                texto: "Entrar em uma caverna de pedra profunda que você avistou na encosta do morro.",
                proxima: 1
            },
            {
                texto: "Montar uma cabana firme usando galhos e folhas grandes embaixo de uma árvore caída na beira da mata.",
                proxima: 2
            }
        ]
    },

    // 1 - PRÓXIMA SITUAÇÃO - CAMINHO A
    {
        enunciado: "A caverna te protege totalmente do vento frio. Está muito escuro lá dentro, mas você se acomoda no fundo de pedra. Quando a tempestade começa lá fora, você ouve estalos estranhos vindos do teto e das paredes da caverna.",

        alternativas: [
            {
                texto: "CONTINUAR",
                proxima: 3
            }
        ]
    },

    // 2 - PRÓXIMA SITUAÇÃO - CAMINHO B
    {
        enunciado: "Sua cabana de folhas aguenta bem as primeiras rajadas de vento. A chuva cai pesada, mas as folhas grossas cobrem você. Porém, o chão de terra começa a inundar e você percebe que a árvore caída está deslizando devagar.",

        alternativas: [
            {
                texto: "CONTINUAR",
                proxima: 4
            }
        ]
    },

    // 3 - FINAL 1 - CAMINHO A
    {
        enunciado: "A tempestade infiltra muita água nas rachaduras externas do morro. A pressão da água causa um desmoronamento interno repentino. O teto da caverna desaba completamente sobre você antes que você possa reagir no escuro. Fim de Jogo.",

        alternativas: [
            {
                texto: "FINALIZAR",
                final: "FINAL 1 - CAMINHO A"
            }
        ]
    },

    // 4 - FINAL 2 - CAMINHO B
    {
        enunciado: "Percebendo o perigo da árvore, você sai rastejando da cabana no meio da noite e se protege em um espaço aberto e plano. Você passa frio na chuva, mas sobrevive. Ao amanhecer, a tempestade passa e você consegue sinalizar para um helicóptero de resgate.",

        alternativas: [
            {
                texto: "FINALIZAR",
                final: "FINAL 2 - CAMINHO B"
            }
        ]
    }
];
