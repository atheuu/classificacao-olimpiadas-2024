// Função para calcular a pontuação total de um país
function calcularPontuacao(equipe) {
    return equipe.ouro * 9 + equipe.prata * 3 + equipe.bronze;
}

// Calcula a pontuação de cada país e adiciona ao objeto
equipes.forEach(equipe => {
    equipe.pontuacao = calcularPontuacao(equipe);
});

// Calcula o total de medalhas de cada país e adiciona ao objeto
equipes.forEach(equipe => {
    equipe.total = equipe.ouro + equipe.prata + equipe.bronze;
});

// Ordena os países por pontuação, do maior para o menor
equipes.sort((a, b) => b.pontuacao - a.pontuacao);

// Variáveis para armazenar o índice atual e a pontuação anterior
let indiceAtual;
let pontuacaoAnterior;

const tabelaClassificacao = document.getElementById('tabela-classificacao');

equipes.forEach((equipe, i) => {
    // Se a pontuação for diferente da anterior, atualiza o índice
    if (equipe.pontuacao !== pontuacaoAnterior) {
        indiceAtual = i + 1;
    }

    // Cria uma nova linha na tabela
    const row = document.createElement('tr');

    // Cria e insere as células na linha
    row.innerHTML = `
        <td class="center">${indiceAtual}</td>
        <td class="equipe">
            <img src="${equipe.url}" alt="${equipe.equipe}">
            <span class="nome-completo">${equipe.equipe}</span>
            <span class="abreviacao">${equipe.abreviacao}</span>
        </td>
        <td class="center">${equipe.ouro}</td>
        <td class="center">${equipe.prata}</td>
        <td class="center">${equipe.bronze}</td>
        <td class="center">${equipe.total}</td>
        <td class="center">${equipe.pontuacao}</td>
    `;

    // Adiciona a linha à tabela
    tabelaClassificacao.appendChild(row);

    // Atualiza a pontuação anterior para a próxima iteração
    pontuacaoAnterior = equipe.pontuacao;
});