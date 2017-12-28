$(function() {

    var winH = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navbarH = $('.navbar').innerHeight();

    // Change Header Height

    $('.carousel, .main-item').height(winH - (navbarH));

    $(window).resize(function() {
        $('.carousel, .main-item').height(winH - (navbarH));
    });

    // Slider Add Background-image

    $('#main-slider .item img').each(function() {
        var imgSrc = $(this).attr('src');
        $(this).parent().css({ 'background-image': 'url(' + imgSrc + ')' });
        $(this).remove();
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

    // Overzicht Filter

    $('.filter .ad-options i').click(function() {

        $('.filter .list').slideToggle(200);
        $(this).toggleClass('rotate');

    });



})