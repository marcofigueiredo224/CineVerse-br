function assistirVideo() {
    // URL do vídeo que você deseja assistir
    const videoUrl = "https://hugh.cdn.rumble.cloud/video/s8/2/s/X/D/x/sXDxl.aaa.mp4?u=0&b=0";
    
    // Redireciona o usuário para a página de visualização de vídeo
    window.location.href = `reprodutor.html?videoUrl=${encodeURIComponent(videoUrl)}`;
}






