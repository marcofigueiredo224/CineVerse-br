// TEMPORADA 1 EP 01
function abrirIframe() {
    
    document.querySelector('.temporadas').style.display = "none";
    document.getElementById('play_temp1ep01').style.display = "block";
}


function fecharIframe() {
    
    document.querySelector('.temporadas').style.display = "block"; 
    document.getElementById('play_temp1ep01').style.display = "none";
    location.reload();
}




// TEMPORADA 1 EP 02
function abrirtemp2ep02() {
  
    document.querySelector('.temporadas').style.display = "none";
    document.getElementById('play_temp1ep02').style.display = "block";
}

function fechartemp2ep02() {
    
    document.querySelector('.temporadas').style.display = "block";
    document.getElementById('play_temp1ep02').style.display = "none";
    location.reload();
}