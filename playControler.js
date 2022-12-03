var x = document.getElementById("bipPlayer");

i = 0;
function playBip() {
  x.play();
  setTimeout(playBip, 100000 + (((i++) % 2) * 50000));
}

playBip();
