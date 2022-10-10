// classes for menu
const hamburgerButton = document.querySelector('.header__hamburger');
const menu = document.querySelector('.menu');
const search = document.querySelector('.header__icon');
const locationBtn = document.querySelector('.header__icon-location');
const secondBar = document.querySelector('.header__bar_second');
const thirdBar = document.querySelector('.header__bar_third');

// classes for popup
const popupIcon = document.querySelector('.span');
const popup = document.querySelector('.advantages__popup');

// classes for auto carousel
const firstSlide = document.querySelector('.opinion__wrapper_first');
const secondSlide = document.querySelector('.opinion__wrapper_second');
const thirdSlide = document.querySelector('.opinion__wrapper_third');
const firstBullet = document.querySelector('.opinion__bullet_first');
const secondBullet = document.querySelector('.opinion__bullet_second');
const thirdBullet = document.querySelector('.opinion__bullet_third');

// open menu
hamburgerButton.addEventListener('click', function() {
    menu.classList.toggle('opened');
    search.classList.toggle('closed');
    locationBtn.classList.toggle('closed');
    secondBar.classList.toggle('closed');
    thirdBar.classList.toggle('closed');
});

// popup
popupIcon.addEventListener('click', function() {
    popup.classList.toggle('popup-show');
});

// auto carousel, show second slide
setTimeout(function() {
    firstSlide.classList.add('hide');
    firstBullet.classList.add('empty');
    secondSlide.classList.add('show');
    secondBullet.classList.add('filled');
}, 10000);

// auto carousel, show second slide
setTimeout(function() {
    secondSlide.classList.remove('show');
    secondSlide.classList.add('hide');
    secondBullet.classList.remove('filled');
    secondBullet.classList.add('empty');
    thirdSlide.classList.add('show');
    thirdBullet.classList.add('filled');
}, 20000);