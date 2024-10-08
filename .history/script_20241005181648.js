const seconds = document.querySelector(".seconds .number"),
      minutes = document.querySelector(".minutes .number"),
      hours = document.querySelector(".hours .number"),
      days = document.querySelector(".days .number");


let secValue = 11,
    minValue = 60,
    hourValue = 2,
    dayValue = 9;


  const timeFunction = setInterval( () => {
    secValue--;
    if(secValue == 0){
      minValue--;
      secValue = 60;
    }
    console.log(secValue);
    seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
    seconds.textContent = minValue < 10 ? `0${minValue}` : minValue;
     
  }, 1000);