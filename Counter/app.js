let count = 0;

const value = document.querySelector('.count');

const buttons = document.querySelectorAll(".btn");
console.log(buttons);

buttons.forEach(btn =>{
  btn.addEventListener('click',(e)=>{
    const style = e.currentTarget.classList;
    if (style.contains('increase')) {
      count ++;
      // value.innerText = count;
    } else if (style.contains('decrease')) {
      count --;
      // value.innerText = count;
    } else {
      count = 0;
      // value.textContent = count;
    }
    value.textContent = count;
    if (count > 0) {
      console.log("hi");
      value.style.color = "green";
    }
    else{
            value.style.color = "red";

    }

  });
});