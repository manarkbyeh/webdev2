$(function() {

    var winH = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navbarH = $('.navbar').innerHeight();

    // Change Header Height

    $('.carousel, .item').height(winH - (navbarH + upperH));

    $(window).resize(function() {
        $('.carousel, .item').height(winH - (navbarH + upperH));
    });
});