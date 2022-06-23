$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        arrows: false,
        slidesToShow: 1,
        // arrows: false,
        // dots: true
        autoplay: true,
        autoplaySpeed: 2000

    });

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay').fadeOut('slow')
    });
});