const miBoton = document.querySelector('#miBoton');
const rectangulo = document.querySelector('#rectangulo');
const itemXMR = document.querySelector('#item-xmr');

miBoton.addEventListener('click', () => {
    preguntarCantidad();
});

function preguntarCantidad() {
    const cantidad = parseFloat(prompt('¿Cuántos XMR desea comprar?'));
    
    if (!isNaN(cantidad) && cantidad > 0) {
        const precioXMR = 143.26;
        const total = (cantidad * precioXMR).toFixed(2);

        mostrarRectanguloYItemXMR();
        mostrarMensajeCompraExitosa(cantidad, total);
        agregarAlCarrito();
    }
}

function mostrarRectanguloYItemXMR() {
    rectangulo.style.display = 'block'; 
    itemXMR.style.display = 'block'; 

    
}

function mostrarMensajeCompraExitosa(cantidad, total) {
    const mensaje = `¡Exitoso! Compraste ${cantidad} XMR. Equivalente: $${total}`;
    alert(mensaje); 
}

function agregarAlCarrito() {
    const item = {
        nombre: 'Monero (XMR)',
        precio: 220
    };

    
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    
    carrito.push(item);

    
    localStorage.setItem('carrito', JSON.stringify(carrito));
}
