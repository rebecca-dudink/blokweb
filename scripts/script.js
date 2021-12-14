// JavaScript Document

/* alle var die gebruikt worden*/
var menu = document.querySelector('.menu');
var openButton = document.querySelector('.open'); /* hoofd menu open*/
var closeButton = document.querySelector('.close'); /* hoofd menu dicht*/
var witHartje = document.querySelector('.witHartje') /* standaard witte hartje*/
var roodHartje = document.querySelector('.roodHartje') /* rode hartje*/
var menu2 = document.querySelector('.filter-menu'); /* menu filteren en sorteren op decoratie pagina*/
var openButton2 = document.querySelector('.filteren-sorteren'); /* button open filteren en sorteren op decoratie pagina*/
var closeButton2 = document.querySelector('.filterClose'); /* button sluiten filteren en sorteren op decoratie pagina*/


openButton.addEventListener('click', toggleMenu); /* hoofd menu open menu*/
closeButton.addEventListener('click', toggleMenu); /* hoofd menu dicht*/
witHartje.addEventListener('click', favoriet); /* wit hartje favoriet*/
roodHartje.addEventListener('click', favoriet); /* rood hartje favoriet*/
openButton2.addEventListener('click', toggleMenu2); /* filteren en sorteren menu open */
closeButton2.addEventListener('click', toggleMenu2); /* filteren en sorteren menu sluiten*/

function favoriet() {
    /* hier geef je aan wat de  hartjes gaan doen als je erop klikt */
    witHartje.classList.toggle('hidden'); /* klik op wit hartje dan gaat deze op hidden staan*/
    roodHartje.classList.toggle('hidden'); /* klik op rood hartje dan gaat deze op hidden staan*/
}


function toggleMenu() {
    /* hier zeg je wat het hoofd menu gaat doen als je erop klikt*/
    menu.classList.toggle('menu-open');
}

function toggleMenu2() {
    /* hier zeg je wat het filteren en sorteren menu gaat doen als je erop klikt*/
    menu2.classList.toggle('menu-open');
    console.log('test')
}

console.log(menu2)