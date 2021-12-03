// JavaScript Document

var menu = document.querySelector('.menu');
var openButton = document.querySelector('.open');
var closeButton = document.querySelector('.close');

openButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('menu-open');
}