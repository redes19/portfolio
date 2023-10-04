var speed = 200;
var h1 = document.querySelector("h1");

function typeEffect(e, speed) {
  var text = e.textContent;
  e.innerHTML = "";

  var i = 0;
  var timer = setInterval(function () {
    if (i < text.length) {
      e.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
  
}

// type affect to header
typeEffect(h1, speed);
