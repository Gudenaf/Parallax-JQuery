$(window).scroll(function () {
    let parallaxScroll = $(window).scrollTop();

    $('.parallax__img1, .parallax__img2').css({
        width: (100 - parallaxScroll/15) + "%",
        height: (100 - parallaxScroll/15) + "%"
    });

    $('.parallax__img1').css({
        right: (1 + parallaxScroll/10) + "%"
    });

    $('.parallax__img2').css({
        left: (1 + parallaxScroll/10) + "%"
    });

    $('.main__title').css({
        top: (100 - parallaxScroll/10) + "%",
    });
});