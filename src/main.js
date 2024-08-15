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
        <td class="pais">
            <img src="${pais.url}" alt="${pais.pais}"> ${pais.pais}
        </td>
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