$(document).ready(function (){

    if (CSS && 'paintWorklet' in CSS) {
        CSS.paintWorklet.addModule('https://unpkg.com/smooth-corners')
    }

    $(window).scroll(function (){

        const scrollTop = $(window).scrollTop();

        /* Header */
        if (scrollTop >= ($('.header').height() / 2)) {
            $('.header').addClass('active');
        } else {
            $('.header').removeClass('active');
        }

        let current = '';

        $('.section').each(function (){

            const sectionTop = $(this).offset().top;
            const sectionHeight = $(this).height();

            if (scrollTop >= sectionTop - (sectionHeight / 2)) {
                current = $(this).attr("id");
            }

        });

        $('.nav-link').removeClass('active');
        $(`.nav-link[href="#${current}"]`).addClass('active');

        if (window.history.replaceState) {
            let url = window.location.href.split('#').reverse().pop() + '#' + current;
            window.history.replaceState({}, null, url);
        }

    });

    $(window).scroll();

});