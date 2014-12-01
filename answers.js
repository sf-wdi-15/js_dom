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

// or Dels Solution

      // in CSS
      .redDiv {
          background-color: red;
      }

      // in script
      var toggleMe = document.getElementById("toggleMe");

      toggleMe.onclick = function () {
          toggleMe.classList.toggle(".redDiv");
      }


// 3.) When somone clicks the `#countMe` div display the number of times it has been clicked.
var countMe = document.querySelector("#countMe");
var clickCounter = 0;
countMe.onclick = function(event) {
  clickCounter += 1;
  countMe.innerHTML = "click me " + clickCounter;
};

    // or Del's solution
    var countMe = document.getElementById("countMe");
    var clickCount = 0;
    counteMe.onclick = function () {
        clickCount += 1;
        countMe.innerHTML = clickCount;
    };

// 4.) Attach a `click` listener to `#greetingDiv` and grab the `#nameField` from the `input` tag. Use the `#nameField`to display `Hello, ` with the entered name.

var greetingDiv = document.querySelector("#greetingDiv");
var nameField = document.querySelector("#nameField");

greetingDiv.onclick = function(event){
  nameField.value = "Hello, " + nameField.value;
};

// or Del's

    var greetingDiv = document.getElementById("greetingDiv");
    var nameField = document.getElementById("nameField");

    greetingDiv.onclick = function () {
        var name = nameField.value;
       su greetingDiv.innerHTML = "Hello, " + name;
    };