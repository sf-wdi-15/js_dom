// 1.) When someone clicks the `#colorDiv` change its background color to `blue`.
var clickMe = document.getElementById("colorDiv");
clickMe.onclick = function(event){clickMe.style.backgroundColor = "blue";};

// 2.) When someone clicks the `#toggleMe` toggle the background color between `white` and `red`.
var toggleMe = document.querySelector("#toggleMe");
var toggleCounter = 1;

toggleMe.onclick =  function() {
  if (toggleCounter % 2 === 0){
    toggleMe.style.backgroundColor = "red";
  } else {
    toggleMe.style.backgroundColor = "white";
  }
  toggleCounter += 1;
};


// 3.) When somone clicks the `#countMe` div display the number of times it has been clicked.
var countMe = document.querySelector("#countMe");
var clickCounter = 0;
countMe.onclick = function(event) {
  clickCounter += 1;
  countMe.innerHTML = "click me " + clickCounter;
};

// 4.) Attach a `click` listener to `#greetingDiv` and grab the `#nameField` from the `input` tag. Use the `#nameField`to display `Hello, ` with the entered name.

var greetingDiv = document.querySelector("#greetingDiv");
var nameField = document.querySelector("#nameField");

greetingDiv.onclick = function(event){
  nameField.value = "Hello, " + nameField.value;
};
