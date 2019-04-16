var offheight = 100;

$('.nav-button').on('click', function () {
    $('.animated-icon').toggleClass('open');
    $('.navigation-collapse').toggleClass('open');
});

// smooth scroll js
$(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    var sticky = $('.navigation');
    if (scrolling >= 100) {
        $(sticky).addClass("nav-bg");
    } else {
        $(sticky).removeClass("nav-bg");
    }
    if (scrolling >= 50) {
        $('.backtotop').fadeIn(500);
    } else {
        $('.backtotop').fadeOut(500);
    }

    calculateNavActive();
});


var calculateNavActive = function(e){
  var scroll = $(window).scrollTop();

  $('.nav-link.active').removeClass('active');

  var lastId;
  $('[data-section-name]').each(function(_, chapter) {
      var id = chapter.id;

      if($(chapter).offset().top-offheight < scroll) {
         lastId = id;
      }
  });
     $('.nav-link[href=\'#' + lastId + '\']').addClass('active');
}

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
    calculateNavActive();
});
