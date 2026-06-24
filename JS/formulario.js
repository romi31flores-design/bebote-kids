// =====================================
// SELECCION DEL FORMULARIO
// =====================================

const formulario = document.querySelector("#formulario");

const mensajeError = document.querySelector("#mensaje-error");


// =====================================
// EVENTO SUBMIT DEL FORMULARIO EL USUARIO INTENTA ENVIAR UN FORMULARIO 
// =====================================

formulario.addEventListener("submit", function(evento) {

    // EVITA RECARGAR LA PAGINA

    evento.preventDefault();

    // OBTIENE LOS VALORES INGRESADOS

    const nombre = document.querySelector("#nombre").value;

    const email = document.querySelector("#email").value;

    const mensaje = document.querySelector("#mensaje").value;


    // VALIDACION DE CAMPOS VACIOS

    if (
        nombre === "" ||
        email === "" ||
        mensaje === ""
    ) {

        mensajeError.textContent =
        "Complete todos los campos";

    }

    else {

        mensajeError.textContent =
        "Formulario enviado correctamente";

    }

});