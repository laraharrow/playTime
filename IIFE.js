/*
what is an IIFE?
Immediately Invoked Function Expression, its a function that is executed right 
after it is created.
the sintax of it is that you wrap the function you want to be an IIFE in parentese
and right after the closing paramneters you call the function with respective arguments
*/

// this is just a function
function duble(n) {
	return n * 2;
}

// now this is an IIFE
(function duble(n) {
	return n * 2;
})(10);
// and the return value would be 20

// another example:
// this function creates 5 buttons and each button is called "Button " + the value of i
// that changes for each itaration of the loop, then when you click on the button
// its expected that the program would show an alert with the number printer in the 
// button name.
function createButtons() {
   for (var i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;
     button.onclick = function() {
          alert('This is button ' + i);
     }
     body.appendChild(button);
   }
}
 
createButtons();
// well this doesn't happen because by the time the buttons are clicked the loop has
// already ran and i is equal to 6.
// there are a few ways to solve this problem:

// the IIFE way:
function createButtons() {
   for (var i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;
     (function(num) {
       button.onclick = function() {
          alert('This is button ' + num);
       }
     })(i);
     body.appendChild(button);
   }
}
createButtons();
// is this case we created a different scope to access the value of i and because of 
// closure the inner scope has access to every iteration of the loop and the values
// of i are stored. so when you click the button the value stored under num is the value
// of i when the button was named.

// still using the same idea but changing the code a bit for clarity 
function createButtons() {
   for (var i = 1; i <= 5; i++) {
			var body = document.getElementsByTagName("BODY")[0];
			var button = document.createElement("BUTTON");
			button.innerHTML = 'Button ' + i;
			addClickFunctionality(button, i);
			body.appendChild(button);
   }
}
createButtons();

function addClickFunctionality(button, num) {
	button.onclick = function() {
	  alert('This is button ' + num);
	}
}

// creating an outter function that is called in the scope of the createButtons giver
// the js interpreter the same closure abilities.

// LET => using let you can create a new scope for each time the loop runs, since let 
// can't create 2 variables with the same name in the same scope, using let in a for loop
// you are automatically creating different scopes that can be store and used when onClick
// event happens. So the only transition necessary here is inside the for loop
// change var to let

function createButtons() {
   for (let i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;
     button.onclick = function() {
          alert('This is button ' + i);
     }
     body.appendChild(button);
   }
}
 
createButtons();  
