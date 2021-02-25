@@include('jquery-3.5.1.min.js')
@@include('testWebP.js')
@@include('swiper-bundle.min.js')

let subpagesSwiper = new Swiper('.subpages-slider', {
    pagination: {
        el: '.subpages-pagination',
        clickable: true,
    },
    slidesPerView: 1,
    autoHeight: false,
    spaceBetween: 7,
    slidesPerView: 'auto',
})

$(function () {
    $(window).on('load', function () {
        let windowsWidth = $(window).width()
        if (windowsWidth <= 991) {
            $('.header-menu').prepend($('.header__logo'))
            $('.header-menu__list').addClass('page-list')
            $('.header-menu__item').addClass('page-item')
            $('.header-menu__link').addClass('page-link')
            $('.home-aside__row').append($('.home-content__logout'))
            $('.subpages__row-title').append($('.subpages__count'))
        } else {
            $('.header__inner').prepend($('.header__logo'))
            $('.header-menu__list').removeClass('page-list')
            $('.header-menu__item').removeClass('page-item')
            $('.header-menu__link').removeClass('page-link')
            $('.home-content').append($('.home-content__logout'))
            $('.subpages__row-btn').append($('.subpages__count'))
        }
        if (windowsWidth <= 771) {
            for (let i = 0; i <= $('.scripts-item').length; i++) {
                let img = $('.scripts-item').eq(i).find('.scripts-item__img')
                let destination = $('.scripts-item').eq(i).find('.scripts-item__row')
                destination.append(img)
            }
        } else {
            for (let i = 0; i <= $('.scripts-item').length; i++) {
                let img = $('.scripts-item').eq(i).find('.scripts-item__img')
                let destination = $('.scripts-item').eq(i).find('.scripts-item__inner')
                destination.prepend(img)
            }
        }
    })
    $(window).resize(function () {
        let windowsWidth = $(window).width()

        if (windowsWidth <= 771) {
            for (let i = 0; i <= $('.scripts-item').length; i++) {
                let img = $('.scripts-item').eq(i).find('.scripts-item__img')
                let destination = $('.scripts-item').eq(i).find('.scripts-item__row')
                destination.append(img)
            }
        } else {
            for (let i = 0; i <= $('.scripts-item').length; i++) {
                let img = $('.scripts-item').eq(i).find('.scripts-item__img')
                let destination = $('.scripts-item').eq(i).find('.scripts-item__inner')
                destination.prepend(img)
            }
        }
        if (windowsWidth <= 991) {
            $('.header-menu').prepend($('.header__logo'))
            $('.header-menu__list').addClass('page-list')
            $('.header-menu__item').addClass('page-item')
            $('.header-menu__link').addClass('page-link')
            $('.home-aside__row').append($('.home-content__logout'))
            $('.subpages__row-title').append($('.subpages__count'))

        } else {
            $('.header__inner').prepend($('.header__logo'))
            $('.header-menu__list').removeClass('page-list')
            $('.header-menu__item').removeClass('page-item')
            $('.header-menu__link').removeClass('page-link')
            $('.home-content').append($('.home-content__logout'))
            $('.subpages__row-btn').append($('.subpages__count'))

        }

    })
    $('.header__toggle').click(function () {
        $('.header__toggle').toggleClass('header__toggle--active')
        $('.header-menu').toggleClass('header-menu--active')
        $('body').toggleClass('block')
    })
    $('.header-actions__link').mouseenter(function () {
        $(this).addClass('header-actions__link--active')
    })
    $('.header-actions__link').mouseout(function () {
        $(this).removeClass('header-actions__link--active')
    })
    $('.header-menu__link').mouseenter(function () {
        $(this).addClass('header-menu__link--active')
    })
    $('.header-menu__link').mouseout(function () {
        $(this).removeClass('header-menu__link--active')
    })
    $('.page-btn').mouseenter(function () {
        $(this).addClass('page-btn--active')
    })
    $('.page-btn').mouseout(function () {
        $(this).removeClass('page-btn--active')
    })
    $('.questions-item').click(function () {
        $('.questions-item').not($(this)).find('.questions-item__body').slideUp()
        $('.questions-item').removeClass('questions-item--active')
        $(this).addClass('questions-item--active')
        $(this).find('.questions-item__body').slideDown()
    })
    $('.page-menu__link, header-menu__link').click(function () {
        $('.page-menu__link').removeClass('page-menu__link--active')
        $(this).addClass('page-menu__link--active')
        return false
    })

    $('.page-menu__link, header-menu__link').mouseenter(function () {
        $(this).addClass('page-menu__link--hover')
    })
    $('.page-menu__link, header-menu__link').mouseout(function () {
        $(this).removeClass('page-menu__link--hover')
    })
    $('.subpages-slide-menu__link').mouseenter(function () {
        $(this).addClass('subpages-slide-menu__link--active')
    })
    $('.subpages-slide-menu__link').mouseout(function () {
        $(this).removeClass('subpages-slide-menu__link--active')
    })
    $('.home-aside__toggle').click(function () {
        $(this).toggleClass('home-aside__toggle--active')
        $('.home-aside').toggleClass('home-aside--active')
        $('.home-aside__inner').toggleClass('home-aside__inner--active')
        $('.home-menu').toggleClass('home-menu--active')
    })
    $('.scrollto a').on('click', function () {

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, {
            duration: 370,
            easing: "linear"
        });

        return false;
    });
    $('.avatar-personal').click(function () {
        let avatars = $('.avatar-personal')
        for (i = 0; i < avatars.length; i++) {
            avatars.eq(i).find('.avatar-personal__status img').attr('src', 'images/icons/icon-tick.svg')
            avatars.eq(i).find('.avatar-personal__status source').attr('srcset', 'images/icons/icon-tick.svg')

            $(this).find('.avatar-personal__status img').attr('src', 'images/icons/icon-tick-active.svg')
            $(this).find('.avatar-personal__status source').attr('srcset', 'images/icons/icon-tick-active.svg')

            $('.home-aside__avatar img').attr('src', $(this).find('.avatar-personal__img img').attr('src'))
            $('.home-aside__avatar source').attr('srcset', $(this).find('.avatar-personal__img source').attr('srcset'))
        }

    })
    $('.home-menu__link').click(function(){
        preventDefault()

        let dataValue =$(this).data('menu')
        $.ajax({
            type: 'post',
            url: "/wp-admin/admin-ajax.php", 
            data: {
            action: 'my_aj',
            'id': dataValue,
            },
            success: function(html){
            $('.home-content__inner').html(html); 
            },
        })
    })
})