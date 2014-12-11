var click =
document.getElementById('colorDiv');

click.addEventListener('click',
function () { colorDiv.style.backgroundColor = "blue"; });

var toggle = document.getElementById('toggleMe');

var white = true;
toggle.onclick = function (event) {
  if (white) {
    toggle.style.backgroundColor = "white";
  } else {
    toggle.style.backgroundColor = "red";
  }
  white = !white;
};

var clickCount = 0;
document.getElementById("countMe").onclick= function(event){
clickCount +=1;
document.getElementById("countMe").innerHTML = "click: " + clickCount;
};

var greeting = document.getElementById('greetingDiv').onclick= function(event) {
click.addEventListener('click', function(event){
  
  
});