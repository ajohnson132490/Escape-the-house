var message = "";
var name = "";

function update() {
  settimeout(startAnimation, 2000);
  document.getElementByID("storyBox").innerHTML = message;
}

function startAnimation() {
  document.getElementByID("storyBox").style.animation-play-state = "running";
}

function endAnimation() {
  document.getElementByID("storyBox").style.animation-play-state = "paused";
}
