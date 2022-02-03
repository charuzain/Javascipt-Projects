let count = 0;

const value = document.querySelector('.count');

const buttons = document.querySelectorAll(".btn");
console.log(buttons);

buttons.forEach(btn =>{
  btn.addEventListener('click',(e)=>{
    const style = e.currentTarget.classList;
    if (style.contains('increase')) {
      count ++;
      value.innerText = count;
    }
  });
});