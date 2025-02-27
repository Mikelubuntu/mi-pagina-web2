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
                setTimeout(() => {
                    menu.classList.remove("active");
                }, 200); // Espera 200ms para cerrar suavemente
            }
        });
    });

    // Función para mostrar la sección seleccionada y ocultar las demás
    function mostrarSeccion(seccionId) {
        const secciones = document.querySelectorAll(".seccion");

        secciones.forEach(seccion => {
            seccion.style.display = seccion.id === seccionId ? "block" : "none";
        });
    }

    // Menú hamburguesa para móviles (verifica que `menuToggle` exista)
    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            menu.classList.toggle("active");
        });
    }
});

