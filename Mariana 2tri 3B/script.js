const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você descobre que existe um aplicativo ultra secreto que pode traduzir todas as falas dos animais. Qual animal você escolheria para conversar primeiro?",
        alternativas: [
            {
                texto: "Cachorro",
                afirmacao: "Que bom que não é de rua!"
            },
            {
                texto: "Gato",
                afirmacao: "Hmmm, que gatinha!"
            }
        ]
    },
    {
        enunciado: "O que você pergunta para ele(a)",
        alternativas: [
            {
                texto: "É legal ter sua vida?",
                afirmacao: "Queria trocar de vida com ele?"
            },
            {
                texto: "Como você consegue não fazer nada o dia inteiro, e só dormir?",
                afirmacao: "Você faz alguma coisa?"
            }
        ]
    },
    {
        enunciado: "Você saiu andar, e achou um de rua, bem magrinho, oque perguntaria?",
        alternativas: [
            {
                texto: "Você quer ajuda, ou algo para comer?",
                afirmacao: "Ahhhh, que lindo, você ajudaria."
            },
            {
                texto: "Gostaria de vir morar comigo?",
                afirmacao: "Legal sua atitude, mais da um vermifugo antes."
            }
        ]
    },
    {
        enunciado: "Oque você não sabia, é que essa descoberta iria te tranformar no animal que você escolheu, e você tinha duas alternativas de caracteristicas e personalidade para escolher?",
        alternativas: [
            {
                texto: "Um cachorro caramelo, patrimonio do Brasil, muito amoroso, mais mora na favela da rocinha",
                afirmacao: "O caramelo é um patrimonio."
            },
            {
                texto: "Um gato, precisa se protejer do cachorros, e de vez enquando ganha petisco mais sempre caça rato.",
                afirmacao: "Cuidado com os cachorros em gatinha!"
            }
        ]
    },
    {
        enunciado: "Apareceu uma outra pessoa com a tecnologia que te deixou assim, mais se você contar para ela, você nunca voltaria ao normal, mais se não contar, ela se torna um animal e você volta a ser que era, contaria?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Tem muita empatia com os outros!"
            },
            {
                texto: "Não",
                afirmacao: "Pensou em si mesmo, mais deixou sua ex virar uma gatinha!"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();