function loader() {
    window.sr = ScrollReveal();
    sr.reveal('.logo', {
        duration: 2000,
        origin: "left"
    });

    sr.reveal('nav ul li', {
        duration: 2000,
        origin: 'right'
    });

    sr.reveal('.card-title', {

        distance: '40px',
        duration: 2000,
        origin: "bottom",
        viewFactor: 1
    });

    sr.reveal('.card-desc', {

        distance: '40px',
        duration: 2000,
        origin: "bottom",
        viewFactor: 0.5
    });

    $("header").css('opacity', '1');

};

$(document).ready(function () {
    $(this).scrollTop(0);
    setTimeout(() => {
        $('nav ul li a').first().addClass('active');
    }, 2000);


});

$(document).ready(function () {

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var header = $("#header").offset().top - 75;
        var education = $("#education").offset().top - 75;
        var achivement = $("#achivements").offset().top - 75;
        var projects = $("#projects").offset().top - 75;
        var contact = $("#contact_me").offset().top - 75;
        if (scroll < education) {
            $('.active').removeClass();
            $('nav ul li:nth-child(1) a').addClass('active');
        } else if (scroll >= education && scroll < achivement) {
            $('.active').removeClass();
            $('nav ul li:nth-child(2) a').addClass('active');
        } else if (scroll >= achivement && scroll < projects) {
            $('.active').removeClass();
            $('nav ul li:nth-child(3) a').addClass('active');
        } else if (scroll >= projects && scroll < contact) {
            $('.active').removeClass();
            $('nav ul li:nth-child(4) a').addClass('active');
        } else if (scroll >= contact) {
            $('.active').removeClass();
            $('nav ul li:nth-child(5) a').addClass('active');
        }
    });
    $('nav ul li a').click(function () {
        $('.active').removeClass();
        $(this).addClass('active');
    });

    $('#logo a').click(function () {
        $('.active').removeClass();
        $('nav ul li a').first().addClass('active');
    });

    $('#return-to-top').click(function () {
        $('.active').removeClass();
        $('nav ul li a').first().addClass('active');
    });

});