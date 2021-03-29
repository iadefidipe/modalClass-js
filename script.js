'use strict';

const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// this code selects all the show-modal classes in an arraty, if it was just document.querySelector it wil on sellect the first of type

const btnShowModal = document.querySelectorAll('.show-modal');

// creating a function to remove the hidden class, just to make our code more dry
const openModal = function (){ 
        modal.classList.remove('hidden');
        overLay.classList.remove('hidden');

}

const closeModal = function (){ 
        modal.classList.add('hidden');
        overLay.classList.add('hidden');

}



for (let i =0; i<btnShowModal.length; i++)
    btnShowModal[i].addEventListener('click', openModal);

overLay.addEventListener('click', closeModal);
btnCloseModal.addEventListener('click', closeModal);



document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && ! modal.classList.contains('hidden')){
        closeModal();
    }
}) 



 

