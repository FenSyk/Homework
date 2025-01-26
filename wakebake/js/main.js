(function () {
    document.addEventListener('click', function (e) {
        // Обработка бургер-меню
        const burgerIcon = e.target.closest('.burger-icon');
        const burgerNavLink = e.target.closest('.nav__link');

        if (burgerIcon || burgerNavLink) {
            console.log('Clicked element (burger):', e.target);

            if (document.documentElement.clientWidth > 900) return;

            if (!document.body.classList.contains('body--opened-menu')) {
                document.body.classList.add('body--opened-menu');
                console.log('Menu opened');
            } else {
                document.body.classList.remove('body--opened-menu');
                console.log('Menu closed');
            }
            return; // Прекращаем выполнение, чтобы не мешать модальному окну
        }

        // Обработка модального окна
        const modalButton = e.target.closest('.about__img-button');
        const modalCloseButton = e.target.closest('.modal__cancel');
        const modal = document.querySelector('.modal');

        if (modalButton) {
            console.log('Modal button clicked');
            // Открываем модальное окно
            document.body.classList.add('body--opened-modal');
            modal.style.opacity = '1';
            modal.style.visibility = 'visible';
            return; // Прекращаем выполнение, чтобы не мешать бургер-меню
        }

        if (modalCloseButton || e.target === modal) {
            console.log('Modal close button clicked or clicked outside modal');
            // Закрываем модальное окно
            document.body.classList.remove('body--opened-modal');
            modal.style.opacity = '0';
            modal.style.visibility = 'hidden';
        }
    });
})();
