$('.nav-button').on('click', function () {
    $('.animated-icon').toggleClass('open');
    $('.navigation-collapse').toggleClass('open');
});

$(document).on('click', 'a[href^="#"]',function(){
    var objeto = $($(this).attr('href'));
    if(objeto.length > 0)
        $('html,body').animate({scrollTop: objeto.offset().top},'slow');
});

$(document).on('click', '.alert-button',function(){
    $(".alert-container").fadeOut(500);
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});
