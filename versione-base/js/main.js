"use strict";

const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

const items = document.querySelector(".items");
const prevImg = document.querySelector(".prev");
const nextImg = document.querySelector(".next");
let contatore = 0;

//CREATION OF ELEMENT
const div = document.createElement("div");
div.classList.add("item", "active");
div.innerHTML = `<img src="">`;
items.append(div);

const image = document.querySelector(".item img");

image.src = images[contatore].image;

prevImg.addEventListener("click", () => {
  if (contatore === 0) contatore = 5;
  contatore--;
  image.src = images[contatore].image;
});

nextImg.addEventListener("click", () => {
  contatore++;
  if (contatore > 4) contatore = 0;
  image.src = images[contatore].image;
});
