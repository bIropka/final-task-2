$(window).ready(function() {

    $('.catalog-category-name').click(function() {
        $(this).parent().siblings().removeClass('active');
        $(this).parent().toggleClass('active');
    });

    $('.burger').click(function() {
        $(this).toggleClass('fa-bars fa-close');
        $('.mobile-nav').toggleClass('active');
    });

    $('#sign-up').click(function() {
        $('.modal').fadeIn().css('display', 'flex');
    });

    $('.modal').click(function(event) {

        var item = $(event.target);

        if (!item.closest($('.form-sign')).length) $('.modal').fadeOut();
        if (item.hasClass('close-modal')) $('.modal').fadeOut();

    });

    if($(window).width() <= 1170) {
        $('nav').appendTo('.mobile-nav');
        $('.catalog').appendTo('.mobile-nav');
        $('.header-controls a:not([class])').prependTo('.mobile-nav');
    } else {
        $('.catalog').insertAfter('.header-content');
        $('nav').prependTo('.header-links');
        $('.mobile-nav a').prependTo('.header-controls');
    }

    $(window).resize(function() {

        if($(window).width() <= 1170) {
            $('nav').appendTo('.mobile-nav');
            $('.catalog').appendTo('.mobile-nav');
            $('.header-controls a:not([class])').prependTo('.mobile-nav');
        } else {
            $('.catalog').insertAfter('.header-content');
            $('nav').prependTo('.header-links');
            $('.mobile-nav a').prependTo('.header-controls');
        }

    });

});