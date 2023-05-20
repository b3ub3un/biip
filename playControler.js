var bipSound = document.getElementById("bipPlayer");
var tempsRestant = document.getElementById("timer");

tempsRestant.innerHTML = 10; // set the base time here in seconds

function diminuerTemps() {
  if (tempsRestant.innerHTML == 0) { // if tempsRestant == 0 then play the sound and reset the timer
    bipSound.play();
    tempsRestant.innerHTML = 10; // reset the timer here in seconds
  } else { // else just decrease the timer
    tempsRestant.innerHTML = tempsRestant.innerHTML - 1;
  }
  setTimeout(diminuerTemps, 1000); // call the function every second
}

diminuerTemps();