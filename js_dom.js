var div = document.getElementById("colorDiv");
div.onclick = function() {
  this.style.backgroundColor = "blue";
};
__________________________________________________

var toggle = document.getElementById("toggleMe");

var white = true;
toggle.onclick = function() {
  if (white) {
    this.style.backgroundColor = "red";
  } 
  else {
    this.style.backgroundColor = "white";
  }
  white = !white;
};

___________________________________________________


var counter = 0; 
document.getElementById("countMe").onclick = function(event) {
  counter += 1;
 document.getElementById("countMe").innerHTML = counter;
};

____________________________________________________

document.getElementById("greetingDiv").onclick= function(event) {
  var name = document.getElementById("nameField").value;
    this.innerHTML = "Hello " + name;
  };