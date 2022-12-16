'use strict';


const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const url = "https://dog.ceo/api/breeds/image/random";

async function fetchHandler() {
	try {
		const response = await fetch(url);
		const data = await response.json();
		image.src = data.message;
	} catch (error) {
		console.log(error);
	}
}

button.addEventListener("click", () => {
	let isLoaded = image.complete;

	if (isLoaded) {
		fetchHandler();
	}
});













const next = document.querySelector('.carousel__btn--next'),
	back = document.querySelector('.carousel__btn--back'),
	carousel = document.querySelector('.carousel__cards');
let angle = 0;

next.addEventListener('click', () => {
	angle -= 45;
	carousel.style.transform = `translateZ(-25rem) rotateY(${angle}deg)`;
});

back.addEventListener('click', () => {
	angle += 45;
	carousel.style.transform = `translateZ(-25rem) rotateY(${angle}deg)`;
});