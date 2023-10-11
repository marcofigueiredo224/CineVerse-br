document.addEventListener("DOMContentLoaded", function () {
    const campoPesquisa = document.getElementById("campo_pesquisa");
    const resultItems = document.querySelectorAll(".result-item");
    const resultadosContainer = document.getElementById("resultados-container");
    const tituloResultados = document.createElement("h2");

    campoPesquisa.addEventListener("input", function () {
        const termoPesquisa = campoPesquisa.value.toLowerCase();

        // Limpar o conteúdo de resultados
        resultadosContainer.innerHTML = '';

        if (termoPesquisa === "") {
            // Se o campo de pesquisa estiver vazio, mostrar todos os elementos novamente
            resultItems.forEach(function (imagem) {
                imagem.style.display = "block";
            });
            // Ocultar o título "Resultados"
            tituloResultados.style.display = "none";
        } else {
            resultItems.forEach(function (imagem) {
                const altImagem = imagem.alt.toLowerCase();
                if (altImagem.includes(termoPesquisa)) {
                    const imagemClone = imagem.cloneNode(true);
                    resultadosContainer.appendChild(imagemClone);
                } else {
                    imagem.style.display = "none";
                }
            });

            // Exibir o título "Resultados" somente quando houver resultados da pesquisa
            if (resultadosContainer.childElementCount > 0) {
                tituloResultados.innerText = "Resultados";
                resultadosContainer.insertBefore(tituloResultados, resultadosContainer.firstChild);
                tituloResultados.style.fontSize = "32px";
                tituloResultados.style.padding = "10px";
                tituloResultados.style.fontWeight = "bold";
                tituloResultados.style.display = "block";
            } else {
                tituloResultados.style.display = "none";
            }
        }
    });
});
