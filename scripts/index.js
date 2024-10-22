
const modalButtons = document.querySelectorAll('#modal__button');

const modal = document.querySelector('.modalController');

const closeModalButton = document.getElementById('closeModal');


function openModal() {
  modal.showModal(); 
}

function closeModal() {
  modal.close(); 
}


modalButtons.forEach(button => {
  button.addEventListener('click', openModal);
});

closeModalButton.addEventListener('click', closeModal);




