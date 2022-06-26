$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        arrows: false,
        slidesToShow: 1,
        // arrows: false,
        // dots: true
        // autoplay: true,
        autoplaySpeed: 2000

    });

    //Modal

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');

    });
    $('.catalog-item__btn').on('click', function () {
        $('.overlay, #order').fadeIn('slow')
    });
});