const listaCarrito = document.querySelector("#lista-carrito");
const totalCarrito = document.querySelector("#total");

let carrito = [];

function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {

    listaCarrito.innerHTML = "";

    let total = 0;

    carrito.forEach((producto) => {

        const item = document.createElement("li");

        item.textContent =
            `${producto.nombre} - $${producto.precio}`;

        listaCarrito.appendChild(item);

        total += producto.precio;
    });

    totalCarrito.textContent = total;
}