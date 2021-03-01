new Swiper('.services-slider', {

    navigation: {
        nextEl: '.services-slider__arrow-next',
        prevEl: '.services-slider__arrow-prev',
    },
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    breakpoints: {
        800: {
            centeredSlides: false,
            slidesPerView: 2,
        },
        1300: {
            centeredSlides: true,
            slidesPerView: 3,
        },
    },
});

new Swiper('.company-slider', {
    navigation: {
        nextEl: '.company-slider__arrow-next',
        prevEl: '.company-slider__arrow-prev',
    },
    slidesPerView: 2,
    loop: true,
    breakpoints: {
        555: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 4,
        },
    },



});

$(function () {
    $('.header__toggle').click(function () {
        $('.header-menu').toggleClass('header-menu--active')
        $('body').toggleClass('lock')
        $(this).toggleClass('header__toggle--active')
    })
    $(window).on('load', function () {
        if ($('body').width() <= 555) {
            $('.header-menu').prepend($('.header__slogan'))
            $('.header-menu').append($('.header-contacts'))
        }
        if ($('body').width() <= 640) {
            $('.calculation__body').append($('.calculation__btn'))
        }
        if ($('body').width() <= 820) {

        }
    })
    $(window).resize(function () {
        if ($('body').width() <= 555) {
            $('.header-menu').prepend($('.header__slogan'))
            $('.header-menu').append($('.header-contacts'))
        }
        else{
            $('.header__column:first-child').append($('.header__slogan'))
            $('.header__content').prepend($('.header-contacts'))
        }
        if ($('body').width() <= 640) {
            $('.calculation__body').append($('.calculation__btn'))
        }
        else{
            $('.calculation__row').prepend($('.calculation__btn'))
        }
    })
    $('.header-menu__link').mouseenter(function () {
        $(this).addClass('header-menu__link--active')
    })
    $('.header-menu__link').mouseout(function () {
        $(this).removeClass('header-menu__link--active')
    })
    $('.footer-menu__link').mouseenter(function () {
        $(this).addClass('footer-menu__link--active')
    })
    $('.footer-menu__link').mouseout(function () {
        $(this).removeClass('footer-menu__link--active')
    })
})