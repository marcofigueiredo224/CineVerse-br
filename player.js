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

  function iniciarVideoTelaCheia() {
    var videoContainer = document.getElementById("videoContainer");
    var videoUrl = "https://hugh.cdn.rumble.cloud/video/s8/2/s/X/D/x/sXDxl.aaa.mp4?u=0&b=0";

    // Crie um elemento de vídeo
    var video = document.createElement("video");
    video.src = videoUrl;

    // Adicione o vídeo ao contêiner
    videoContainer.innerHTML = "";
    videoContainer.appendChild(video);

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



  