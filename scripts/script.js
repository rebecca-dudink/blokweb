// JavaScript Document

var menu = document.querySelector('.menu');
var openButton = document.querySelector('.open');
var closeButton = document.querySelector('.close');

openButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);

function toggleMenu() {
menu.classList.toggle('menu-open');
}

var menu2 = document.querySelector('.filter-menu');
var openButton2 = document.querySelector('.filteren-sorteren');
var closeButton2 = document.querySelector('.close');

console.log(menu2)

openButton2.addEventListener('click', toggleMenu2);
closeButton2.addEventListener('click', toggleMenu2);

function toggleMenu2() {
    menu2.classList.toggle('menu-open');
console.log('wajow')
}