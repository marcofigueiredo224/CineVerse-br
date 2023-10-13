function clickPesquisar() {
    if (window.innerWidth <= 768) {
        const campoPesquisa = document.getElementById("campo_pesquisa");
        if (campoPesquisa.style.display == "block") {
            campoPesquisa.style.display = "none";
        } else {
            campoPesquisa.style.display = "block";
        }
    }
}

function clickMenu() {
    if (window.innerWidth <= 768) {
        const menu = document.getElementById("menu");
        if (menu.style.display == "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    }
}
