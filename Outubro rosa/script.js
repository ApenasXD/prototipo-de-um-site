function verificarRespostas() {
    // Seleciona todas as opções marcadas
    const respostas = document.querySelectorAll('input[type="radio"]:checked');
    let contagemSim = 0;

    // Contar quantas respostas "Sim" foram selecionadas
    respostas.forEach((resposta) => {
        if (resposta.value === 'sim') {
            contagemSim++;
        }
    });

    // Seleciona o elemento para exibir o resultado
    const resultadoDiv = document.getElementById('resultado');

    // Verifica se 3 ou mais respostas foram "Sim"
    if (contagemSim >= 3) {
        resultadoDiv.textContent = 'Você deve procurar um médico para uma avaliação mais detalhada.';
    } else {
        resultadoDiv.textContent = 'Parece que está tudo bem, mas não deixe de fazer exames regularmente!';
    }
}
