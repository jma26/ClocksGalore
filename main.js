
function setDate() {
    const secondHand = document.querySelector(".second-hand");
    const hourHand = document.querySelector(".hour-hand");
    const minuteHand = document.querySelector(".min-hand");
    const now = new Date();
    const seconds = now.getSeconds();
    const hour = now.getHours();
    const minutes = now.getMinutes();

    const secondsDegrees = ((seconds/60) * 360 + 90);
    const hourDegrees = ((hour/12) * 360 + 90);
    const minuteDegrees = ((minutes/60) * 360 + 90);

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    console.log(`${hour}:${minutes}:${seconds}`);
  }

  setInterval(setDate, 1000);