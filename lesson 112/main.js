const btnOpen = document.querySelector('.btn-open');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal__close-btn');

btnOpen.addEventListener('click', () => {
    modal.classList.add('active');
});

function closeModal() {
    modal.classList.remove('active');
}

modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
