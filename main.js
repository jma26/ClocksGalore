var secondHand;
var hourHand;
var minuteHand;

function setPacific() {
    secondHand = document.querySelectorAll(".second-hand")[0];
    hourHand = document.querySelectorAll(".hour-hand")[0];
    minuteHand = document.querySelectorAll(".min-hand")[0];

    var pacific = moment();
    var pac_seconds = pacific.second();
    var pac_hour = pacific.hour();
    var pac_minutes = pacific.minute();

    var pac_secondsDegrees = ((pac_seconds/60) * 360) + 90;
    var pac_hourDegrees = ((pac_hour/12) * 360) + 90;
    var pac_minuteDegrees = ((pac_minutes/60) * 360) + 90;

    secondHand.style.transform = `rotate(${pac_secondsDegrees}deg)`;
    hourHand.style.transform = `rotate(${pac_hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${pac_minuteDegrees}deg)`;
}

function setEastern() {
    secondHand = document.querySelectorAll(".second-hand")[1];
    hourHand = document.querySelectorAll(".hour-hand")[1];
    minuteHand = document.querySelectorAll(".min-hand")[1];

    var eastern = moment();
    var east_seconds = eastern.second();
    var east_hour = eastern.hour() + 3;
    var east_minutes = eastern.minute();

    var east_secondsDegrees = ((east_seconds/60) * 360) + 90;
    var east_hourDegrees = ((east_hour/12) * 360) + 90;
    var east_minuteDegrees = ((east_minutes/60) * 360) + 90;

    secondHand.style.transform = `rotate(${east_secondsDegrees}deg)`;
    hourHand.style.transform = `rotate(${east_hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${east_minuteDegrees}deg)`;
}


  setInterval(function() {
      setPacific();
      setEastern();
  }, 1000);