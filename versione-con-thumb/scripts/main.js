'use strict';

//starting array
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const activeElement = document.querySelector('.item');
const nextImg = document.querySelector('.next');
const prevImg = document.querySelector('.prev');
const thumbs = document.querySelector('.thumbs');
let counter = 0;
let check = false;


//creating thumbs elements
images.forEach((element) => {
    const thumb = document.createElement('div');
    thumb.classList.add('thumb');
    thumb.innerHTML = `<img src="${element.image}">`;
    thumbs.append(thumb);
})


thumbs.addEventListener('click', (e) => {
    const thumbSelected = e.target.parentElement;
    const imgSelected = e.target.attributes.src.value
    // thumbSelected.classList.add("active");
    thumbnailImgChoice(thumbSelected, imgSelected);
})

prevImg.addEventListener('click', (e) => {
    if (check === false) {
        //checking for first click
        addCaruselContent(0);
        check = true;
    } else {
        infiniteCycle(e.target.className);
        addCaruselContent(counter);
    }
})

nextImg.addEventListener('click', (e) => {
    //checking for first click
    if (check === false) {
        addCaruselContent(0);
        check = true;
    } else {
        infiniteCycle(e.target.className);
        addCaruselContent(counter);
    }
})

function infiniteCycle(info) {
    switch (info) {
        case 'next':
            if (counter < 5) counter++;
            if (counter === 5) counter = 0;
            break;
        case 'prev':
            if (counter === 0) counter = 5;
            if (counter > 0) counter--;
            break;
    }
}

function addCaruselContent(number) {
    activeElement.classList.add('active');
    //CREATING IMG ELEMENT
    activeElement.innerHTML = `<img src="${images[counter].image}">`;

    //CREATING TITLE ELEMENT
    const title = document.createElement('h1');
    colorCheck(title, number);
    title.innerText = images[number].title;
    activeElement.append(title);

    //CREATING TEXT ELEMENT
    const description = document.createElement('p');
    colorCheck(description, number);

    description.innerText = images[number].text;
    activeElement.append(description);
}

function colorCheck(info, number) {
    if (number === 1 || number === 2 || number === 4) {
        info.classList.remove('white');
        info.classList.add('black');
    }
    if (number === 0 || number === 3) {
        info.classList.remove('black');
        info.classList.add('white');
    }
}


function thumbnailImgChoice(thumbSelected, imgSelected) {
    switch (imgSelected) {
        case 'img/01.webp':
            counter = 0;
            addCaruselContent(counter);
            thumbSelected.classList.add("active");
            break;
        case 'img/02.webp':
            thumbSelected.classList.add("active");
            counter = 1;
            addCaruselContent(counter);
            break;
        case 'img/03.webp':
            counter = 2;
            addCaruselContent(counter);
            thumbSelected.classList.add("active");
            break;
        case 'img/04.webp':
            counter = 3;
            addCaruselContent(counter);
            thumbSelected.classList.add("active");
            break;
        case 'img/05.webp':
            counter = 4;
            addCaruselContent(counter);
            thumbSelected.classList.add("active");
            break;
    }
}