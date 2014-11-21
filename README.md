# DOM
## Practicing With Events


### Exercises

```

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Practice</title>
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

```

1.) When someone clicks the `#colorDiv` change its background color to `blue`.

```
var colorDiv = document.getElementById("colorDiv");

colorDiv.onclick = function () {
	colorDiv.style.backgroundColor = "blue";
};

```

2.) When someone clicks the `#toggleMe` toggle the background color between `white` and `red`.

css

```css
.redDiv {
	background-color: red;
}
```

```

var toggleMe = document.getElementById("toggleMe");

toggleMe.onclick = function () {
	toggleMe.classList.toggle(".redDiv");
};

```

3.) When somone clicks the `#countMe` div display the number of times it has been clicked.

```

var countMe = document.getElementById("countMe");
var clickCount = 0;
counteMe.onclick = function () {
    clickCount += 1;
	countMe.innerHTML = clickCount;
};

```


4.) Attach a `click` listener to `#greetingDiv` and grab the `#nameField` from the `input` tag. Use the `#nameField`to display `Hello, ` with the entered name.

```

var greetingDiv = document.getElementById("greetingDiv");
var nameField = document.getElementById("nameField");

greetingDiv.onclick = function () {
    var name = nameField.value;
	greetingDiv.innerHTML = "Hello, " + name;
};

```
