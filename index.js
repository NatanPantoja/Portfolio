// MENU CELULAR
function onToggleMenu(icon) {
    icon.name = icon.name === 'menu' ? 'close' : 'menu';
    const navLinks = document.querySelector('.nav-links');

    // Adicione ou remova classes para animar o menu
    navLinks.classList.toggle('opacity-100');
    navLinks.classList.toggle('translate-y-0');
    navLinks.classList.toggle('opacity-0');
    navLinks.classList.toggle('translate-y-[-100%]');
}