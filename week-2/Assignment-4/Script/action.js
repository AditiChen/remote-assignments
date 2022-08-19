// change the welcome message
const welcomeMessage = document.getElementsByClassName('welcomeMessage');

welcomeMessage[0].addEventListener('click', () => {
    welcomeMessage[0].innerHTML = '<h1>Have a Good Time!</h1>';
});



// show and close menu
const menuIcon = document.getElementById('menu');
const aside = document.getElementsByClassName('asideItems')
const closeAside = document.getElementById('closeIcon');

menuIcon.addEventListener('click', () => {
    aside[0].style.display = 'block';
}); 
closeAside.addEventListener('click', () => {
    aside[0].style.display = 'none';
});

// add content box
const addContentButton = document.getElementsByClassName('addContentButton');
const addContent = document.getElementsByClassName('allContent2');

addContentButton[0].addEventListener('click', () => {
    addContent[0].style.display = 'flex';
}); 