const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const hexButton = document.querySelector(".hex-btn");
const hexText = document.querySelector(".hex-color");

hexButton.addEventListener("click", function () {
  const number = getRandomNum();
  document.body.style.backgroundColor = number;
  hexText.textContent = number;
});

const getRandomNum = () => {
  let string = "#";
  for (let i = 0; i < 6; i++) {
    const ranHex = Math.floor(Math.random() * hex.length);
    string = string + hex[ranHex];
  }
  return string;
};
