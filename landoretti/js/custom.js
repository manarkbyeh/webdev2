$(function() {

    var winH = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navbarH = $('.navbar').innerHeight();

    // Change Header Height

    $('.carousel, .main-item').height(winH - (navbarH + upperH));

    $(window).resize(function() {
        $('.carousel, .main-item').height(winH - (navbarH + upperH));
    });




    // Upper Bar Nav

    $('.upper-bar .login-btn').click(function() {

        $(this).parent().addClass('hidden');
        $(this).parent().next().removeClass('hidden');

    });

    $('.upper-bar .login-form .enter').click(function() {

        $(this).parent().addClass('hidden');
        $('.upper-bar .logged').removeClass('hidden');

    });



})