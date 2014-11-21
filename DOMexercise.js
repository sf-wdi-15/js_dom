//1
var clickMe = document.getElementById('colorDiv');
    clickMe.addEventListener('click', function () {
      clickMe.style.backgroundColor = "blue";
    }, false);

//2
var changeColors = document.getElementById('toggleMe');

var white = true;
changeColors.onclick = function (event) {
  if (white) {
    toggleMe.style.backgroundColor = "white";
  } else {
    toggleMe.style.backgroundColor = "red";
  } 
  white = !white;
};

//3
var counter = document.getElementById('countMe');
    counter.addEventListener('click', function(event) {
  var click = 0;
  event.target.innerHTML = "Click Count: " + event.detail;
}, false);

//4
document.getElementById("greetingDiv").onclick= function(event) {
  var name = document.getElementById("nameField").value;
    this.innerHTML = "Hello " + name;
  };