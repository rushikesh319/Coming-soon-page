const seconds = document.querySelector(".seconds .number"),
      minutes = document.querySelector(".minutes .number"),
      hours = document.querySelector(".hours .number"),
      days = document.querySelector(".days .number");


let setValue = 60,
    minValue = 60,
    hourValue = 2,
    dayValue = 9;


  const timeFunction = setInterval( () => {
    setValue--;
    if(setValue == 0){
      minValue--;
      setValue = 60;
    }
    console.log(setValue);
    console.textContent = setValue;
    console.textContent = setValue;
  }, 1000);