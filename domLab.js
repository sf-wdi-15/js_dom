
//1.) When someone clicks the #colorDiv change its background color to blue.
var div = document.getElementById( 'colorDiv' );
div.onclick = function() {
  this.style.backgroundColor = 'blue';
  };


//2.) When someone clicks the #toggleMe toggle the background color between white and red.
var twoColors = document.getElementById("toggleMe");

var white = true;
twoColors.onclick= function () {
    if (white) {
      twoColors.style.backgroundColor = "red";
      }
    else {
        twoColors.style.backgroundColor = "white";
    }
  white = !white;
};  


//3.) When somone clicks the #countMe div display the number of times it has been clicked.
var counter = 0;
document.getElementById("countMe").onclick= function(event){
 counter +=1;
 document.getElementById("countMe").innerHTML = "click" + counter;
};

//Attach a click listener to #greetingDiv and grab the #nameField from the input tag. Use the #nameFieldto display Hello, with the entered name.
document.getElementById("greetingDiv").onclick= function(event) {
  var name = document.getElementById("nameField").value;
    this.innerHTML = "Hello " + name;
  };