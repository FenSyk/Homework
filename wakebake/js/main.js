(function () {

    document.addEventListener('click', burgerinit)

    function burgerinit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        console.log('Clicked element:', e.target);

        if (!burgerIcon && !burgerNavLink) return

        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
            console.log('Menu opened');
        } else {
            document.body.classList.remove('body--opened-menu')
            console.log('Menu closed');
        }
    }

})()
