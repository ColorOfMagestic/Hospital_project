const modalRegistry = document.querySelector('.modal-registry');
const inputDate = document.querySelector('.form-info-input-date');


console.log(inputDate);
inputDate.textContent = 'hi'


// Toggler

function toggler() {
    const toggler = document.querySelector('.toggler');

    const menu = document.querySelector('.menu');

    toggler.addEventListener('change', function () {
        if (toggler.checked) {
            menu.classList.add('menu--active');
        }
        else {
            menu.classList.remove('menu--active');
        }
    });
    
} 
toggler();

// Modal registry

function SearchCards() {
    const btnSearchCards = document.querySelectorAll('.search-card');


    btnSearchCards.forEach(el => {
    el.addEventListener('click', function () {
        modalRegistry.classList.add('modal-registry--active')
    });
});
}
SearchCards();
// delete 

function delClass() {
    const btnsChooseCancel = document.querySelectorAll('.btn-choose-cancel');

    btnsChooseCancel.forEach(el=> {
        el.addEventListener('click', function () {
            modalRegistry.classList.remove('modal-registry--active');
        });
    })
};

delClass();


function valueType() {
    const cardAmbulatory = document.querySelector('.cards-ambulatory')
    const cardHistory = document.querySelector('.cards-history')
    const cardHome = document.querySelector('.cards-home')

    const sel = document.querySelector('#value_type');
    sel.value = 'history';
    sel.addEventListener('change', function () {

        function addActive(cls) {
            cls.classList.add('active');
        }
        function DeleteActive(cls1,cls2) {
            cls1.classList.remove('active');
            cls2.classList.remove('active');
        }
        
        if(sel.value ==='at_home') {
            DeleteActive(cardAmbulatory,cardHistory);
            addActive(cardHome);
        }
        else if(sel.value ==='outpatient'){
            DeleteActive(cardHome,cardHistory);
            addActive(cardAmbulatory);
        }
        else if(sel.value ==='history'){
            DeleteActive(cardHome,cardAmbulatory);
            addActive(cardHistory);
        }
    })
    
}

valueType();





