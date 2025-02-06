(function () {
    let scrollY = 0;

    document.addEventListener('click', function (e) {
        const burgerIcon = e.target.closest('.burger-icon');
        const burgerNavLink = e.target.closest('.nav__link');

        if (burgerIcon || burgerNavLink) {
            if (document.documentElement.clientWidth > 900) return;

            document.body.classList.toggle('body--opened-menu');
            return;
        }

        const modalButton = e.target.closest('.about__img-button');
        const modalCloseButton = e.target.closest('.modal__cancel');
        const modal = document.querySelector('.modal');

        if (modalButton) {
            scrollY = window.scrollY;
            document.body.classList.add('body--opened-modal');
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            modal.style.opacity = '1';
            modal.style.visibility = 'visible';
            return;
        }

        if (modalCloseButton || e.target === modal) {
            document.body.classList.remove('body--opened-modal');
            document.body.style.position = '';
            window.scrollTo(0, scrollY);
            modal.style.opacity = '0';
            modal.style.visibility = 'hidden';
        }
    });

    // Табы
    const tabControls = document.querySelector('.tab-conrols');
    tabControls.addEventListener('click', toggleTab);

    function toggleTab(e) {
        const tabControl = e.target.closest('.tab-conrols__link');
        if (!tabControl) return;
        e.preventDefault();

        if (tabControl.classList.contains('tab-conrols__link--active')) return;

        const tabContentID = tabControl.getAttribute('href');
        const tabContent = document.querySelector(tabContentID);
        const activeControl = document.querySelector('.tab-conrols__link--active');
        const activeContent = document.querySelector('.tab-content--show');

        if (activeControl) {
            activeControl.classList.remove('tab-conrols__link--active');
        }
        if (activeContent) {
            activeContent.classList.remove('tab-content--show');
        }

        tabControl.classList.add('tab-conrols__link--active');
        tabContent.classList.add('tab-content--show');
    }
    //Аккордион 
    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

        });

    });

})();
