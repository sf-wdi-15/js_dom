<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Practice</title>
  <script>
  window.onload = function() {
  var div = document.getElementById("colorDiv");
  div.onclick = function() {
  this.style.backgroundColor = "blue";
  };

  var multiToggle = document.getElementById("toggleMe");
  multiToggle.onclick = function() {
  if(multiToggle.style.backgroundColor == "white"){
    multiToggle.style.backgroundColor = "red";
  } else {
    multiToggle.style.backgroundColor = "white";
  }
    
};
var counter = document.getElementById("countMe");
var clicks = 0;
counter.onclick = function(event) {
     (clicks += 1);

document.getElementById("countMe").innerHTML = "counter = " + clicks;
};

document.getElementById("greetingDiv").addEventListener("click", function(){
 var output = document.getElementById("nameField").value;

    document.getElementById("nameField").value = ("Hello " + output);

});

 };
  </script>
</head>
<body>

    <div id="colorDiv">
        Click Me
    </div>

    <div id="toggleMe">
        Toggle Me
    </div>

    <div id="countMe">
    </div>

    <div>
        <input type="text" id="nameField">
    </div>

    <div id="greetingDiv">
        Hello, world
    </div>
</body>
</html>