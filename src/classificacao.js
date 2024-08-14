// Dados reais dos países das Olimpíadas de 2024
const paises = [
    { pais: "Estados Unidos", ouro: 40, prata: 44, bronze: 42 },
    { pais: "China", ouro: 40, prata: 27, bronze: 24 },
    { pais: "Japão", ouro: 20, prata: 12, bronze: 13 },
    { pais: "Austrália", ouro: 18, prata: 19, bronze: 16 },
    { pais: "França", ouro: 16, prata: 26, bronze: 22 },
    { pais: "Países Baixos", ouro: 15, prata: 7, bronze: 12 },
    { pais: "Grã-Bretanha", ouro: 14, prata: 22, bronze: 29 },
    { pais: "Coréia do Sul", ouro: 13, prata: 9, bronze: 10 },
    { pais: "Itália", ouro: 12, prata: 13, bronze: 15 },
    { pais: "Alemanha", ouro: 12, prata: 13, bronze: 8 },
    { pais: "Nova Zelândia", ouro: 10, prata: 7, bronze: 3 },
    { pais: "Canadá", ouro: 9, prata: 7, bronze: 11 },
    { pais: "Uzbequistão", ouro: 8, prata: 2, bronze: 3 },
    { pais: "Hungria", ouro: 6, prata: 7, bronze: 6 },
    { pais: "Espanha", ouro: 5, prata: 4, bronze: 9 },
    { pais: "Suécia", ouro: 4, prata: 4, bronze: 3 },
    { pais: "Quênia", ouro: 4, prata: 2, bronze: 5 },
    { pais: "Noruega", ouro: 4, prata: 1, bronze: 3 },
    { pais: "Irlanda", ouro: 4, prata: 0, bronze: 3 },
    { pais: "Brasil", ouro: 3, prata: 7, bronze: 10 },
    { pais: "Irã", ouro: 3, prata: 6, bronze: 3 },
    { pais: "Ucrânia", ouro: 3, prata: 5, bronze: 4 },
    { pais: "Romênia", ouro: 3, prata: 4, bronze: 2 },
    { pais: "Geórgia", ouro: 3, prata: 3, bronze: 1 },
    { pais: "Bélgica", ouro: 3, prata: 1, bronze: 6 },
    { pais: "Bulgária", ouro: 3, prata: 1, bronze: 3 },
    { pais: "Sérvia", ouro: 3, prata: 1, bronze: 1 },
    { pais: "Tchéquia", ouro: 3, prata: 0, bronze: 2 },
    { pais: "Dinamarca", ouro: 2, prata: 2, bronze: 5 },
    { pais: "Azerbaijão", ouro: 2, prata: 2, bronze: 3 },
    { pais: "Croácia", ouro: 2, prata: 2, bronze: 3 },
    { pais: "Cuba", ouro: 2, prata: 1, bronze: 6 },
    { pais: "Bahrein", ouro: 2, prata: 1, bronze: 1 },
    { pais: "Eslovênia", ouro: 2, prata: 1, bronze: 0 },
    { pais: "Taipé Chinês", ouro: 2, prata: 0, bronze: 5 },
    { pais: "Áustria", ouro: 2, prata: 0, bronze: 3 },
    { pais: "Hong Kong", ouro: 2, prata: 0, bronze: 2 },
    { pais: "Filipinas", ouro: 2, prata: 0, bronze: 2 },
    { pais: "Argélia", ouro: 2, prata: 0, bronze: 1 },
    { pais: "Indonésia", ouro: 2, prata: 0, bronze: 1 },
    { pais: "Israel", ouro: 1, prata: 5, bronze: 1 },
    { pais: "Polônia", ouro: 1, prata: 4, bronze: 5 },
    { pais: "Cazaquistão", ouro: 1, prata: 3, bronze: 3 },
    { pais: "Jamaica", ouro: 1, prata: 3, bronze: 2 },
    { pais: "África do Sul", ouro: 1, prata: 3, bronze: 2 },
    { pais: "Tainândia", ouro: 1, prata: 3, bronze: 2 },
    { pais: "Etiópia", ouro: 1, prata: 3, bronze: 0 },
    { pais: "Suíça", ouro: 1, prata: 2, bronze: 5 },
    { pais: "Equador", ouro: 1, prata: 2, bronze: 2 },
    { pais: "Portugal", ouro: 1, prata: 2, bronze: 1 },
    { pais: "Grécia", ouro: 1, prata: 1, bronze: 6 },
    { pais: "Argentina", ouro: 1, prata: 1, bronze: 1 },
    { pais: "Egito", ouro: 1, prata: 1, bronze: 1 },
    { pais: "Tunísia", ouro: 1, prata: 1, bronze: 1 },
    { pais: "Botsuana", ouro: 1, prata: 1, bronze: 0 },
    { pais: "Chile", ouro: 1, prata: 1, bronze: 0 },
    { pais: "Santa Lúcia", ouro: 1, prata: 1, bronze: 0 },
    { pais: "Uganda", ouro: 1, prata: 1, bronze: 0 },
    { pais: "República Dominicana", ouro: 1, prata: 0, bronze: 2 },
    { pais: "Guatemala", ouro: 1, prata: 0, bronze: 1 },
    { pais: "Marrocos", ouro: 1, prata: 0, bronze: 1 },
    { pais: "Dominica", ouro: 1, prata: 0, bronze: 0 },
    { pais: "Paquistão", ouro: 1, prata: 0, bronze: 0 },
    { pais: "Turquia", ouro: 0, prata: 3, bronze: 5 },
    { pais: "México", ouro: 0, prata: 3, bronze: 2 },
    { pais: "Armênia", ouro: 0, prata: 3, bronze: 1 },
    { pais: "Colômbia", ouro: 0, prata: 3, bronze: 1 },
    { pais: "Quirguistão", ouro: 0, prata: 2, bronze: 4 },
    { pais: "Coreia do Norte", ouro: 0, prata: 2, bronze: 4 },
    { pais: "Lituânia", ouro: 0, prata: 2, bronze: 2 },
    { pais: "Índia", ouro: 0, prata: 1, bronze: 5 },
    { pais: "República da Maldávia", ouro: 0, prata: 1, bronze: 3 },
    { pais: "Kosovo", ouro: 0, prata: 1, bronze: 1 },
    { pais: "Chipre", ouro: 0, prata: 1, bronze: 0 },
    { pais: "Fiji", ouro: 0, prata: 1, bronze: 0 },
    { pais: "Jordânia", ouro: 0, prata: 1, bronze: 0 },
    { pais: "Mongólia", ouro: 0, prata: 1, bronze: 0 },
    { pais: "Panamá", ouro: 0, prata: 1, bronze: 0 },
    { pais: "Tajiquistão", ouro: 0, prata: 0, bronze: 3 },
    { pais: "Albânia", ouro: 0, prata: 0, bronze: 2 },
    { pais: "Granada", ouro: 0, prata: 0, bronze: 2 },
    { pais: "Malásia", ouro: 0, prata: 0, bronze: 2 },
    { pais: "Porto Rico", ouro: 0, prata: 0, bronze: 2 },
    { pais: "Costa do Marfim", ouro: 0, prata: 0, bronze: 1 },
    { pais: "Cabo Verde", ouro: 0, prata: 0, bronze: 1 },
    { pais: "Equipe Olímpica de Refugiados", ouro: 0, prata: 0, bronze: 1 },
    { pais: "Peru", ouro: 0, prata: 0, bronze: 1 },
    { pais: "Catar", ouro: 0, prata: 0, bronze: 1 },
    { pais: "Singapura", ouro: 0, prata: 0, bronze: 1 },
    { pais: "Eslováquia", ouro: 0, prata: 0, bronze: 1 },
    { pais: "Zâmbia", ouro: 0, prata: 0, bronze: 1 },
];

// Função para calcular a pontuação total de um país
function calcularPontuacao(pais) {
    return pais.ouro * 9 + pais.prata * 3 + pais.bronze;
}

// Calcula a pontuação de cada país e adiciona ao objeto
paises.forEach(pais => {
    pais.pontuacao = calcularPontuacao(pais);
});

// Ordena os países por pontuação, do maior para o menor
paises.sort((a, b) => b.pontuacao - a.pontuacao);

// Variáveis para armazenar o índice atual e a pontuação anterior
let indiceAtual;
let pontuacaoAnterior;

const tabelaClassificacao = document.getElementById('tabela-classificacao');

paises.forEach((pais, i) => {
    // Se a pontuação for diferente da anterior, atualiza o índice
    if (pais.pontuacao !== pontuacaoAnterior) {
        indiceAtual = i + 1;
    }

    // Cria uma nova linha na tabela
    const row = document.createElement('tr');

    // Cria e insere as células na linha
    row.innerHTML = `
        <td class="center">${indiceAtual}</td>
        <td>${pais.pais}</td>
        <td class="center">${pais.ouro}</td>
        <td class="center">${pais.prata}</td>
        <td class="center">${pais.bronze}</td>
        <td class="center">${pais.pontuacao}</td>
    `;

    // Adiciona a linha à tabela
    tabelaClassificacao.appendChild(row);

    // Atualiza a pontuação anterior para a próxima iteração
    pontuacaoAnterior = pais.pontuacao;
});