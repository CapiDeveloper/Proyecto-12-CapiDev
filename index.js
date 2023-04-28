const btnMenu = document.getElementById('btn--menu');
const navegacion = document.getElementById('navegacion');

btnMenu.addEventListener('click',()=>{
    const nombreImagen = btnMenu.src.split('/')[4];
    if (nombreImagen === 'abrir-menu.svg') {
        btnMenu.src = './imagenes/cerrar-menu.svg';
    }else{
        btnMenu.src = './imagenes/abrir-menu.svg';
    }
    navegacion.classList.toggle('navegacion--dinamica');
});

// Barra progresiva
const barraProgresiva = document.querySelector('.bar');

const updateBar = ()=>{
    let scrollAvanza = (window.scrollY /(document.body.scrollHeight -  window.innerHeight)) * 100;
    barraProgresiva.style.width = scrollAvanza+'%';
}
window.addEventListener('scroll',()=>{
    updateBar();
})

// efecto confeti
const btnConfeti =  document.querySelector('#btn--confeti');
const btnDosConfeti = document.querySelector('#bnt--dos-confetti');

btnConfeti.addEventListener('click',()=>{
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
});
btnDosConfeti.addEventListener('click',()=>{
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
});