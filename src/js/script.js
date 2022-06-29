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

    $('[data-modal=consultation]').on('click', function () { //звертаємось до data
        $('.overlay, #consultation').fadeIn('slow'); //покажемо клас і id
    });
    $('.modal__close').on('click', function () { //хрестик
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow') //закриє їх

    });
    // $('.catalog-item__btn').on('click', function () {//кнопки товарів
    //     $('.overlay, #order').fadeIn('slow')
    // });
    $('.catalog-item__btn').each(function (i) {
        $(this).on('click', function () { //для поточної кнопки
            $('#order .modal__subtitle').text($('.catalog-item__subtitle ').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });

    //Tabs open own tab(1-6,2-1,3-2)

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.catalog__container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    //ToggleClass
    // $('.catalog-item__link').each(function (i) { //Для кожного Докладніше і Назад
    //     $(this).on('click', function (e) { //При кліку на кожного(this)
    //         e.preventDefault(); //Відміняє стандарту поведінку браузера           
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active'); //eq(i) переключає по конкретному індексу
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     });
    // });

    // $('.catalog-item__back').each(function (i) {
    //     $(this).on('click', function (e) {

    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     });
    // });

    //DRY
    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {

                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //Validate form
    $('#consultation form').validate({
        rules: {
            name: "required",
            phone: "required"
        }
    });
    $('#order form').validate({
        rules: {
            name: "required",
            phone: "required"
        }
    });

    $('input[name=phone]').mask("8 (999) 999-99-99")
});