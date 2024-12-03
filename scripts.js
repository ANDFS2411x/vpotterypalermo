document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function enviarDM() { 
    const mensaje = "Hola, este es un mensaje automático."; 
    const usuario = "vpotterypalermo"; 
    const url = `https://www.instagram.com/direct/new/?username=${usuario}&message=${encodeURIComponent(mensaje)}`; 
    window.open(url, '_blank'); 
}