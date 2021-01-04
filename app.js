var cursor = document.querySelector('.cursor');
var titleHover = document.querySelector('#title-hover');
var title = document.querySelector('#title');
var menuPage = document.querySelector('#menu-page');
var projects = document.querySelector('#projects-button');
var contact = document.querySelector('#contact-button');
var projectsHover = document.querySelector('#projects-button-hover');
var contactHover = document.querySelector('#contact-button-hover');
var facebookButton = document.querySelector('#facebook-button');
var instagramButton = document.querySelector('#instagram-button');
var titleCover = document.querySelector('#title-cover');
var mypicture = document.querySelector('#my-picture');
var subtitle = document.querySelector('#sub-title');

var cursorRadius;

function initialize() {
    customizeCursor(50);

    if ($('.scroll').length > 0) {
        document.querySelector('body').style.overflowY = 'visible'
        document.querySelector('footer').style.position = 'fixed'
    } else {
        document.querySelector('body').style.overflowY = 'hidden'
        document.querySelector('footer').style.position = 'absolute'
    }
}

$(document).ready(function() {
    // Animate loader off screen
    $(".se-pre-con").delay(250).fadeOut("slow");;

    initialize();
});

document.addEventListener('mousemove', e => {
    $('.cursor').animate({top: (e.pageY - cursorRadius) + "px", left: (e.pageX - cursorRadius) + "px"}, 0);

    if ($('#title-hover').length > 0) {
        titleHover.style.clipPath = "circle(75px at " + (e.pageX - (document.documentElement.clientWidth * 0.15)) + "px " + (e.pageY - (document.documentElement.clientHeight * 0.25)) + "px)"
    }
    if ($('#projects-button-hover').length > 0) {
        projectsHover.style.clipPath = "circle(50px at " + (e.pageX - ((document.documentElement.clientWidth * 0.01) + (document.documentElement.clientWidth - (document.documentElement.clientWidth * 0.15)))) + "px " + (e.pageY - (document.documentElement.clientHeight * 0.25)) + "px)"
    }
    if ($('#contact-button-hover').length > 0) {
        contactHover.style.clipPath = "circle(50px at " + (e.pageX - ((document.documentElement.clientWidth * 0.01) + (document.documentElement.clientWidth - (document.documentElement.clientWidth * 0.15)))) + "px " + (e.pageY - (document.documentElement.clientHeight * 0.40)) + "px)"
    }
})


document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

function customizeCursor(radius, color) {
    cursorRadius = radius;
    cursor.style.width = (radius * 2) + "px";
    cursor.style.height = (radius * 2) + "px";
    cursor.style.background = color;
}


function homeButtonEnter() {
    customizeCursor(75, 'white');
}

function homeButtonLeave() {
    customizeCursor(50, null);
}

function burgerMenuClick(burgerBack) {
    if (burgerBack.classList.contains("change") === false){
        $('.menu-page, #menu-back').animate({right: 1}, 200);
        document.querySelector('body').style.position = "fixed";
        scroll(0, 0);
        burgerBack.classList.toggle("change");
    } else {
        $('.menu-page, #menu-back').animate({right: "-15vw"}, 200);
        document.querySelector('body').style.position = null;
        burgerBack.classList.toggle("change");
    }
}

function burgerMenuEnter() {
    customizeCursor(75, 'white');
}

function burgerMenuLeave() {
    customizeCursor(50, null);
}

function menuPageEnter() {
    customizeCursor(25, null);
}

function menuPageLeave() {
    customizeCursor(50, null);
}

function projectsHoverEnter() {
    projects.style.color = "white";
    projects.style.webkitTextStroke = null;
    projects.style.webkitTextStrokeWidth = "thin";
    customizeCursor(50, "white");
}

function projectsHoverLeave() {
    projects.style.color = "rgb(27, 27, 27)";
    projects.style.webkitTextStroke = "1px white";
    projects.style.webkitTextStrokeWidth = "thin";
    customizeCursor(25, null);
}

function contactHoverEnter() {
    contact.style.color = "white";
    contact.style.webkitTextStroke = null;
    contact.style.webkitTextStrokeWidth = "thin";
    customizeCursor(50, "white");
}

function contactHoverLeave() {
    contact.style.color = "rgb(27, 27, 27)";
    contact.style.webkitTextStroke = "1px white";
    contact.style.webkitTextStrokeWidth = "thin";
    customizeCursor(25, null);
}

function pictureFadeIn(picture) {
    $(picture).css('opacity', 0).animate({opacity: 1, top: "15vh"}, {queue: false, duration: 500});
}

function pictureFadeOut(picture) {
    $(picture).show().css('opacity', 1).animate({opacity: 0, top: "35vh"}, {queue: false, duration: 500});
}

function titleHoverEnter() {
    title.style.color = "white";
    title.style.webkitTextStroke = null;
    title.style.webkitTextStrokeWidth = "thin";
    pictureFadeIn(mypicture);
    customizeCursor(75, "white");
}

function titleHoverLeave() {
    title.style.color = "rgb(27, 27, 27)";
    title.style.webkitTextStroke = "1px white";
    title.style.webkitTextStrokeWidth = "thin";
    pictureFadeOut(mypicture);
    customizeCursor(50, null);
}