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

    $('#contact-form').submit(function (e) {

        e.preventDefault();

        $('.send-button').addClass('processing').find('span').text('Sending');

        $.ajax({
            method: 'post',
            url: 'https://script.google.com/macros/s/AKfycbwIjuvNYJ59F9ZVnY2cLS1V9EC89Geuh6sxCAbsTPbP5oFhbfXcYn6nCx4819QBTabN/exec',
            data: {
                to: 'bilalbentoumi@gmail.com',
                subject: 'bilalbentoumi.me | New message',
                content: function() {
                    return $('#message').val();
                }
            },
            success: function (data) {
                $('#contact-form input, #contact-form textarea').val('');
                $('.send-button').removeClass('processing').find('span').text('Send');
            },
            error: function (error) {
                console.log(error)
            }
        });

    });

});