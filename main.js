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

function setMountain() {
    secondHand = document.querySelectorAll(".second-hand")[2];
    hourHand = document.querySelectorAll(".hour-hand")[2];
    minuteHand = document.querySelectorAll(".min-hand")[2];

    var mountain = moment();
    var mountain_seconds = mountain.second();
    var mountain_hour = mountain.hour() + 1;
    var mountain_minutes = mountain.minute();

    var mountain_secondsDegrees = ((mountain_seconds/60) * 360) + 90;
    var mountain_hourDegrees = ((mountain_hour/12) * 360) + 90;
    var mountain_minuteDegrees = ((mountain_minutes/60) * 360) + 90;

    secondHand.style.transform = `rotate(${mountain_secondsDegrees}deg)`;
    hourHand.style.transform = `rotate(${mountain_hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${mountain_minuteDegrees}deg)`;
}

function setCentral() {
    secondHand = document.querySelectorAll(".second-hand")[3];
    hourHand = document.querySelectorAll(".hour-hand")[3];
    minuteHand = document.querySelectorAll(".min-hand")[3];

    var central = moment();
    var central_seconds = central.second();
    var central_hour = central.hour() + 2;
    var central_minutes = central.minute();

    var central_secondsDegrees = ((central_seconds/60) * 360) + 90;
    var central_hourDegrees = ((central_hour/12) * 360) + 90;
    var central_minuteDegrees = ((central_minutes/60) * 360) + 90;

    secondHand.style.transform = `rotate(${central_secondsDegrees}deg)`;
    hourHand.style.transform = `rotate(${central_hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${central_minuteDegrees}deg)`;
}

function setHawaii() {
    secondHand = document.querySelectorAll(".second-hand")[4];
    hourHand = document.querySelectorAll(".hour-hand")[4];
    minuteHand = document.querySelectorAll(".min-hand")[4];

    var hawaii = moment();
    var hawaii_seconds = hawaii.second();
    var hawaii_hour = hawaii.hour() - 3;
    var hawaii_minutes = hawaii.minute();

    var hawaii_secondsDegrees = ((hawaii_seconds/60) * 360) + 90;
    var hawaii_hourDegrees = ((hawaii_hour/12) * 360) + 90;
    var hawaii_minuteDegrees = ((hawaii_minutes/60) * 360) + 90;

    secondHand.style.transform = `rotate(${hawaii_secondsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hawaii_hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${hawaii_minuteDegrees}deg)`;
}


  setInterval(function() {
      setPacific();
      setEastern();
      setMountain();
      setCentral();
      setHawaii();
  }, 1000);