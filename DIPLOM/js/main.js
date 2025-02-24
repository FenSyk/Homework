const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        665: {
            slidesPerView: 3,
        }
    },
    on: {
        init: function () {
            updatePagination(this);
        },
        slideChange: function () {
            updatePagination(this);
        }
    }
});

function updatePagination(swiperInstance) {
    const currentSlide = document.getElementById('current-slide');
    const totalSlides = document.getElementById('total-slides');

    if (!currentSlide || !totalSlides) return;

    const realIndex = swiperInstance.realIndex + 1; // +1, так как индексация с 0
    currentSlide.textContent = realIndex;

    // Корректно вычисляем общее количество слайдов
    const total = swiperInstance.slides.length - (swiperInstance.params.loop ? swiperInstance.loopedSlides * 2 : 0);
    totalSlides.textContent = total;
}


// Обновляем пагинацию при инициализации и изменении слайда
swiper.on('init', updatePagination);
swiper.on('slideChange', updatePagination);





document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.accordion-item');

    items.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        const closeBtn = item.querySelector('.close__acc');
        const openBtn = item.querySelector('.open__acc');

        header.addEventListener('click', function () {
            // Если элемент открыт, закрываем
            if (content.classList.contains('active')) {
                content.style.maxHeight = '0'; // Плавно закрываем с помощью max-height
                content.style.opacity = '0'; // Плавное исчезновение
                content.classList.remove('active');
                closeBtn.style.display = 'inline-block';
                openBtn.style.display = 'none';
            } else {
                // Если элемент закрыт, открываем
                content.style.maxHeight = content.scrollHeight + 'px'; // Устанавливаем максимальную высоту
                content.style.opacity = '1'; // Плавно показываем
                content.classList.add('active');
                closeBtn.style.display = 'none';
                openBtn.style.display = 'inline-block';

                // После анимации устанавливаем max-height: none, чтобы он адаптировался
                setTimeout(() => {
                    content.style.maxHeight = 'none';
                }, 300); // Время анимации
            }
        });
    });
});

















const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');
const body = document.body;

// Открытие/закрытие по клику на бургер
burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Закрытие по клику вне навигации
body.addEventListener('click', (event) => {
    if (!event.target.closest('.header__nav') && !event.target.closest('.burger')) {
        nav.classList.remove('active');
    }
});