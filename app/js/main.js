const toggler = document.querySelector('.toggler');
const menu = document.querySelector('.menu');
const cardsHistory = document.querySelector('.cards-history');
const modalRegistry = document.querySelector('.modal-registry');
const btnSearchCards = document.querySelectorAll('.search-card');
const modalRegistryCancel = document.querySelector('#modal-registry-cancel');


toggler.addEventListener('change', function () {
    if (toggler.checked) {
        menu.classList.add('menu--active');
    }
    else {
        menu.classList.remove('menu--active');
    }
});


btnSearchCards.forEach(el => {
    el.addEventListener('click', function () {
        modalRegistry.classList.add('modal-registry--active')
    });
});

modalRegistryCancel.addEventListener('click', function () {
    modalRegistry.classList.remove('modal-registry--active');
});




