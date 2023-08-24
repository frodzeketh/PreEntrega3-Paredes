const miBoton = document.querySelector('#miBoton');
const rectangulo = document.querySelector('#rectangulo');
const itemXMR = document.querySelector('#item-xmr');

miBoton.addEventListener('click', () => {
    mostrarRectanguloYItemXMR();
    agregarAlCarrito();
});

function mostrarRectanguloYItemXMR() {
    rectangulo.style.display = 'block'; // Muestra el rectángulo
    itemXMR.style.display = 'block'; // Muestra el item XMR

    // Puedes agregar cualquier otra lógica aquí cuando se muestra el artículo XMR
}

function agregarAlCarrito() {
    const item = {
        nombre: 'Monero (XMR)',
        precio: 220
    };

    // Obtén el carrito actual del localStorage
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Agrega el nuevo item al carrito
    carrito.push(item);

    // Guarda el carrito actualizado en el localStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));
}
