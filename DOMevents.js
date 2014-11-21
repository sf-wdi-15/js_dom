var el = document.getElementById("colorDiv");

el.onclick = function(event) {
  el.style.backgroundColor = "blue";
}; 

var el2 = document.getElementById("toggleMe");
/**
el2.onclick = function(event) {
  {
  if(el2.style.backgroundColor === "red"){
    el2.style.backgroundColor = "white";
  }
  else {el2.style.backgroundColor = "red";}
};
**/

var red = true;
el2.onclick = function(event) {
  if(red) {
    el2.style.backgroundColor = "white";
  } else {
    el2.style.backgroundColor = "red";
  }
  red = !red;
};

var el3 = document.getElementById("countMe");
  var clicks = 0;

el3.onclick = function(event){
  clicks +=1;
 document.getElementById("countMe").innerHTML = "Count Me Clicks " + clicks;
};

var el4 = document.getElementById("greetingDiv");
var text = document.getElementById("nameField");

el4.addEventListener ("click",function(event){
    el4.innerHTML = "Hello " + text.value;
});