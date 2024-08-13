document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los elementos de menú y submenús
    const menuTitles = document.querySelectorAll('.form');
    const submenuTitles = document.querySelectorAll('.submenu-title');

    // Función para alternar la visibilidad del submenú
    function toggleSubMenu(event) {
        const submenu = event.target.nextElementSibling;
        if (submenu) {
            submenu.classList.toggle('show');
        }
    }

    // Añade el evento de clic a los títulos de menú
    menuTitles.forEach(title => {
        title.addEventListener('click', toggleSubMenu);
    });

    submenuTitles.forEach(title => {
        title.addEventListener('click', toggleSubMenu);
    });
});
