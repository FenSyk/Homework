// Получаем элементы
// Получаем элементы
const btnOpen = document.querySelector('.btn-open');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal__close-btn');

// Функция для открытия модального окна
btnOpen.addEventListener('click', () => {
    modal.classList.add('active');
});

// Функция для закрытия модального окна
function closeModal() {
    modal.classList.remove('active');
}

// Закрытие модалки по кнопке
modalCloseBtn.addEventListener('click', closeModal);

// Закрытие модалки по клику на подложку
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
