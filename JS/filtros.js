// =====================================
// SELECCION DE BOTONES DEL CATALOGO
// =====================================

const btnTodos = document.querySelector("#btnTodos");
const btnNinos = document.querySelector("#btnNinos");
const btnNinas = document.querySelector("#btnNinas");
const btnAccesorios = document.querySelector("#btnAccesorios");

// BOTON DE INICIO QUE LLEVA AL CATALOGO

const btnCatalogo = document.querySelector("#btnCatalogo");


// =====================================
// FILTRO TODOS
// MUESTRA TODOS LOS PRODUCTOS
// =====================================

btnTodos.addEventListener("click", function() {

    mostrarProductos("todos");

});


// =====================================
// FILTRO NIÑOS
// MUESTRA SOLO PRODUCTOS DE NIÑOS
// =====================================

btnNinos.addEventListener("click", function() {

    mostrarProductos("ninos");

});


// =====================================
// FILTRO NIÑAS
// MUESTRA SOLO PRODUCTOS DE NIÑAS
// =====================================

btnNinas.addEventListener("click", function() {

    mostrarProductos("ninas");

});


// =====================================
// FILTRO ACCESORIOS
// MUESTRA SOLO ACCESORIOS
// =====================================

btnAccesorios.addEventListener("click", function() {

    mostrarProductos("accesorios");

});


// =====================================
// BOTON VER CATALOGO
// DESPLAZA LA PAGINA HASTA EL CATALOGO
// =====================================

btnCatalogo.addEventListener("click", function() {

    document.querySelector("#catalogo").scrollIntoView();

});


// =====================================
// AL CARGAR LA PAGINA SE MUESTRAN
// TODOS LOS PRODUCTOS
// =====================================

mostrarProductos("todos");