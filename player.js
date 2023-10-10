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
    var modal = document.getElementById("myModal");
    modal.style.display = "none"; // Fecha a modal

    var videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.classList.remove("hidden"); // Remove a classe hidden para mostrar o vídeo

    // Verifique se a função de tela cheia está disponível no navegador
    if (videoPlayer.requestFullscreen) {
        videoPlayer.requestFullscreen();
    } else if (videoPlayer.mozRequestFullScreen) {
        videoPlayer.mozRequestFullScreen();
    } else if (videoPlayer.webkitRequestFullscreen) {
        videoPlayer.webkitRequestFullscreen();
    } else if (videoPlayer.msRequestFullscreen) {
        videoPlayer.msRequestFullscreen();
    }
}


  