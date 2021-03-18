// La funzione toggle mi cambia il display del menù
function toggleMenu() {
    // Vado a prendere l'elemento menu (<div>etc)
    var hamburgerMenu = $('.hamburger-menu');
    // Mi cambia il display (!display)
    hamburgerMenu.toggle(200);
}

function init(){
    // Vado a prendere gli elementi che mi interessano (<i>etc)
    var hamburgerBtn = $('.fa-bars');
    var hamburgerClose = $('.fa-times');
    
    // Aggiungo il listener sul click
    // Che richiama la funzione toggle
    hamburgerBtn.click(toggleMenu);
    hamburgerClose.click(toggleMenu);
}

init();