//JS_DOM Lab 

// 1) When someone clicks the #colorDiv change its background color to blue.
        
var makeBlue = document.getElementById("colorDiv");
makeBlue.onclick = function(event){
        element.style.backgroundColor = "blue";
      };


 // 2) When someone clicks the #toggleMe toggle the background color between white and red.

var toggle = document.getElementById("toggleMe");

var whiteBackground = true;
toggle.onclick = function (event) {

	if (whiteBackground)  {

		toggleMe.style.backgroundColor = "red";
	}

	else  {

		toggleMe.style.backgroundColor = "white"
	}

};


//3.) When somone clicks the #countMe div display the number of times it has been clicked.

var clickCount = document.getElementById("countMe");
var count = 0
  clickCount.onclick = function(event) {

  	clickCount += 1;
  	clickCount.innerHTML = "You've clicked:" + clickCount + "times."
  };

//4.) Attach a click listener to #greetingDiv and grab the #nameField from the input tag. Use the #nameFieldto display Hello, with the entered name.

var greetPerson = document.getElementById("greetingDiv").onclick= function(event) {
	var nameText = document.getElementById("nameText").value;
	   this.innerHTML = "Hello" + nameText;

};




