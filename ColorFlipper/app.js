/* eslint-disable no-undef */
const colors = ["red", "blue", "green", "purple", "yellow", "pink","orange","violet"];

const button = document.querySelector(".btn");
console.log(button);

const text = document.querySelector(".color");

button.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  text.textContent = colors[randomNumber];
});

const getRandomNumber = () => {
  const number = Math.floor(Math.random() * colors.length);
  return number;
};
