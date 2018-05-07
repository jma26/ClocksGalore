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

    var pac_secondsDegrees = ((pac_seconds/60) * 360 + 90);
    var pac_hourDegrees = ((pac_hour/12) * 360 + 90);
    var pac_minuteDegrees = ((pac_minutes/60) * 360 + 90);

    secondHand.style.transform = `rotate(${pac_secondsDegrees}deg)`;
    hourHand.style.transform = `rotate(${pac_hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${pac_minuteDegrees}deg)`;
}


  setInterval(function() {
      setPacific();
  }, 1000);