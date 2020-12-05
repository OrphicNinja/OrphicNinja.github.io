$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
        if ($('.bar').css("background-color") == "rgb(223, 30, 123)"){
            $(".bar").css("background-color", "black")
        }  else {
            $(".bar").css("background-color", "rgb(223, 30, 123)")
        }
        if ($('.logo').css("opacity") == "1"){
            $(".logo").css("opacity", "0")
        }  else {
            $(".logo").css("opacity", "1")
        }
    });

    $('.top-nav, .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('a[href*="#"]').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        },2000);
    });

    $('#up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        },2000);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });
});

var mybirthday = new Date('Oct 29 2001')

function _calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

document.getElementById('age').innerHTML = _calculateAge(mybirthday);

