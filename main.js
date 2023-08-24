const miBoton = document.querySelector('#miBoton');
const rectangulo = document.querySelector('#rectangulo');
const itemXMR = document.querySelector('#item-xmr');

miBoton.addEventListener('click', () => {
    mostrarRectanguloYItemXMR();
});

function mostrarRectanguloYItemXMR() {
    rectangulo.style.display = 'block'; // Muestra el rectángulo
    itemXMR.style.display = 'block'; // Muestra el item XMR
}
