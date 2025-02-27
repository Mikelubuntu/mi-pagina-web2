document.addEventListener("DOMContentLoaded", function () {
    // Obtener todos los enlaces de navegación
    const links = document.querySelectorAll(".nav-link");
    const menu = document.querySelector("nav ul");
    const menuToggle = document.querySelector(".menu-toggle");

    // Agregar evento de clic a cada enlace
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace

            // Obtener el ID de la sección desde el atributo href
            const seccionId = this.getAttribute("href").substring(1);

            // Llamar a la función para mostrar la sección correspondiente
            mostrarSeccion(seccionId);

            // Si el menú está desplegado en móvil, lo cerramos
            if (menu.classList.contains("active")) {
                menu.classList.remove("active");
            }
        });
    });

    // Función para mostrar la sección seleccionada y ocultar las demás
    function mostrarSeccion(seccionId) {
        const secciones = document.querySelectorAll(".seccion");

        secciones.forEach(seccion => {
            if (seccion.id === seccionId) {
                seccion.style.display = "block"; // Mostrar la sección activa
            } else {
                seccion.style.display = "none"; // Ocultar las demás
            }
        });
    }

    // Menú hamburguesa para móviles
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});
