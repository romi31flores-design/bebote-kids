// SELECCIONAMOS LOS ELEMENTOS DEL HTML
// querySelector busca elementos del documento HTML.

const listaCarrito = document.querySelector("#lista-carrito");
const totalCarrito = document.querySelector("#total");

// ARRAY DEL CARRITO
// Acá se guardan los productos que el usuario agrega.

let carrito = [];

// FUNCIÓN PARA AGREGAR PRODUCTOS AL CARRITO

function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
}

// FUNCIÓN PARA ACTUALIZAR EL CARRITO EN PANTALLA

function actualizarCarrito() {
    listaCarrito.innerHTML = "";

    let total = 0;

    carrito.forEach(function(producto) {
        const item = document.createElement("li");

        item.textContent = producto.nombre + " - $" + producto.precio;

        listaCarrito.appendChild(item);

        total = total + producto.precio;
    });

    totalCarrito.textContent = total;
}