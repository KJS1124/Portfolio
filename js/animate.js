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


};



$(document).ready(function() {

    $(window).(function() {
        console.log('asdf')
        $('nav ul li a').first().addClass('active');
    }, 2000);

    $('nav ul li a').click(function() {
        $('.active').removeClass();
        $(this).addClass('active');
    });

});