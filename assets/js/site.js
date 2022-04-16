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

    /* Contact Form */
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
            complete: function() {

                $('#contact-form input, #contact-form textarea').val('');
                $('.send-button').removeClass('processing').find('span').text('Send');


                showAlert('Message sent successfully');

            }
        });

    });

    function showAlert(message) {

        $('#contact-form .alert').remove();

        $('#contact-form').append(`
            <div class="alert success" style="display: none">
                <svg width="16" height="16" viewBox="0 0 78.369 78.369" fill="currentColor">
                    <path d="M78.049,19.015L29.458,67.606c-0.428,0.428-1.121,0.428-1.548,0L0.32,40.015c-0.427-0.426-0.427-1.119,0-1.547l6.704-6.704 c0.428-0.427,1.121-0.427,1.548,0l20.113,20.112l41.113-41.113c0.429-0.427,1.12-0.427,1.548,0l6.703,6.704 C78.477,17.894,78.477,18.586,78.049,19.015z" fill="inherit" />
                </svg>
                ${message}
            </div>
        `);

        $('#contact-form .alert').fadeIn();

        setTimeout(function () {
            $('#contact-form .alert').fadeOut();
        }, 2000);

    }

});