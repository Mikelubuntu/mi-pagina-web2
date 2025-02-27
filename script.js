document.addEventListener("DOMContentLoaded", function () {
    // Obtener todos los enlaces de navegación
    const links = document.querySelectorAll(".nav-link");

    // Agregar evento de clic a cada enlace
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace

            // Obtener el ID de la sección desde el atributo href
            const seccionId = this.getAttribute("href").substring(1);

            // Llamar a la función para mostrar la sección correspondiente
            mostrarSeccion(seccionId);
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
    document.querySelector(".menu-toggle").addEventListener("click", function () {
        document.querySelector("nav ul").classList.toggle("active");
    });
});
