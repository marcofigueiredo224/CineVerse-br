 // Função para processar a pesquisa e redirecionar para a página de resultados
 function realizarPesquisa(termoPesquisa) {
    // Redireciona para a página de resultados com o termo de pesquisa como parâmetro na URL
    window.location.href = '/filmes.html?pesquisa=' + termoPesquisa;
}

// Campo de pesquisa no cabeçalho
const inputBox = document.getElementById("campo_pesquisa");

inputBox.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        const termoPesquisa = inputBox.value.toLowerCase().trim();
        realizarPesquisa(termoPesquisa);
    }
});

// Campo de pesquisa na versão desktop
const inputBoxDesktop = document.getElementById("campo_pesquisa_desktop");

inputBoxDesktop.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        const termoPesquisa = inputBoxDesktop.value.toLowerCase().trim();
        realizarPesquisa(termoPesquisa);
    }
});