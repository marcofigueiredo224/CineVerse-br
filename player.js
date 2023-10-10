// Função para abrir a modal
function abrirModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }
  
  // Função para fechar a modal
  function fecharModal() {
    var modal = document.getElementById("myModal");
    
  
    modal.style.display = "none";
  }
  
  // Adicione essa função ao seu código HTML para abrir a modal ao clicar na imagem
  function abrirModalComVideo() {
    abrirModal();
  }

  function exibirVideo(linguagem) {
    var videoContainer = document.getElementById("videoContainer");
    var videoUrl = "https://hugh.cdn.rumble.cloud/video/s8/2/s/X/D/x/sXDxl.aaa.mp4?u=0&b=0";

    // Crie um elemento de vídeo
    var video = document.createElement("video");
    video.src = videoUrl;
    video.id = "videoPlayer";
    video.controls = true;

    // Adicione o vídeo ao contêiner
    videoContainer.innerHTML = "";
    videoContainer.appendChild(video);

    // Oculte os botões "Dublado" e "Legendado"
    var botaoDublado = document.querySelector(".linguagem_player[value='Dublado']");
    var botaoLegendado = document.querySelector(".linguagem_player[value='Legendado']");
    botaoDublado.style.display = "none";
    botaoLegendado.style.display = "none";

    // Exiba o modal do vídeo em tela cheia
    var videoModal = document.getElementById("videoModal");
    videoModal.style.display = "block";

    // Ajuste o estilo do modal para ocupar toda a tela
    videoModal.classList.remove("modal-fullscreen");

    // Exiba o modal do vídeo em tela cheia
    var videoModal = document.getElementById("videoModal");
    videoModal.style.display = "block";

    // Inicie o vídeo em tela cheia
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    }
}

function fecharModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}



  