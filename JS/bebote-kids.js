const productos = [
    {
        nombre: "Conjunto Casual",
        precio: 28000,
        categoria: "ninos",
        imagen: "img/conjunto.jpg"
    },
    {
        nombre: "Vestido Darlon",
        precio: 25000,
        categoria: "ninas",
        imagen: "img/vestido.jpg"
    },
    {
        nombre: "Accesorios Infantiles",
        precio: 12000,
        categoria: "accesorios",
        imagen: "img/accesorio.jpg"
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const listaCarrito = document.querySelector("#lista-carrito");
const totalCarrito = document.querySelector("#total");

let carrito = [];

function mostrarProductos(categoria) {
    contenedorProductos.innerHTML = "";

    productos.forEach((producto, index) => {
        if (categoria === "todos" || producto.categoria === categoria) {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p class="precio">$${producto.precio}</p>
                <button class="btn-agregar" data-index="${index}">
                    Agregar al carrito
                </button>
            `;

            contenedorProductos.appendChild(card);
        }
    });

    agregarEventosCarrito();
}

function agregarEventosCarrito() {
    const botones = document.querySelectorAll(".btn-agregar");

    botones.forEach((boton) => {
        boton.addEventListener("click", () => {
            const index = boton.dataset.index;
            agregarAlCarrito(productos[index]);
        });
    });
}

function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    listaCarrito.innerHTML = "";

    let total = 0;

    carrito.forEach((producto) => {
        const item = document.createElement("li");
        item.textContent = `${producto.nombre} - $${producto.precio}`;
        listaCarrito.appendChild(item);

        total += producto.precio;
    });

    totalCarrito.textContent = total;
}


