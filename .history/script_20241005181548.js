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
    console.log(setValue);
    seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
    minutes.textContent = minValue;
  }, 1000);