const btnTodos = document.querySelector("#btnTodos");
const btnNinos = document.querySelector("#btnNinos");
const btnNinas = document.querySelector("#btnNinas");
const btnAccesorios = document.querySelector("#btnAccesorios");
const btnCatalogo = document.querySelector("#btnCatalogo");

btnTodos.addEventListener("click", function() {
    mostrarProductos("todos");
});

btnNinos.addEventListener("click", function() {
    mostrarProductos("ninos");
});

btnNinas.addEventListener("click", function() {
    mostrarProductos("ninas");
});

btnAccesorios.addEventListener("click", function() {
    mostrarProductos("accesorios");
});

btnCatalogo.addEventListener("click", function() {
    document.querySelector("#catalogo").scrollIntoView();
});

mostrarProductos("todos");