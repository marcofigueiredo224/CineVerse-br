document.addEventListener('DOMContentLoaded', function () {
    const resultadosContainer = document.getElementById('resultados-container');
    const urlParams = new URLSearchParams(window.location.search);
    const termoPesquisa = urlParams.get('pesquisa');

    if (termoPesquisa) {
        const imagens = document.querySelectorAll('img');

        for (const imagem of imagens) {
            const alt = imagem.getAttribute('alt').toLowerCase();
            if (alt.includes(termoPesquisa)) {
                imagem.style.display = 'block';
            } else {
                imagem.style.display = 'none';
            }
        }
    }
});


