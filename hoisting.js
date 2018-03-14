/*
What is hoisting?
hoisting is the process where variable and functions are hoisted to the top of the scope
that they are in, if we are using var the scopes are globar and function but if we use 
let or const there is another scope to be consider the block scope it would be some 
block of code separated by { } so for loops, if statement, etc...


Hoisting helps understd that js has a 2 times process to read and implement the code
first this that happends is that the code gets compailed.
At that point every variable and function get hoisted to the top of the code where it
is declared, variables will be set to undefine.
*/

// VARIABLE HOISTING

console.log('1 ', color);
var color = 'green';
console.log('2 ', color);

// when we run this code we will see
// => 1 undefined
// => 2 green

// this happends because js compile the code before it parses it, on the first run 
// when the code is been compiled this is what the code should look like:
var color;
console.log('1 ', color);
color = 'green';
console.log('2 ', color);


// FUNCTION HOISTING

// now the thing to remember here is that if you have a function expression your 
// function is declared as the value of a variable therefor the code would follow
// the same rules as the variable hoisting

console.log('1 ', getProduct(2, 4));
var getProduct = function(x, y) {
	return x * y;
}
console.log('2 ', getProduct(2, 4));

// when the code is been parsed the first call to console.log would return an error
// becase after compailing the code above would look like this:

var getProduct;
console.log('1 ', getProduct(2, 4));
getProduct = function(x, y) {
	return x * y;
}
console.log('2 ', getProduct(2, 4));
// so when the console.log on line 43 runs getProduct was declared but it doesnt 
// have a value. so js will return an error that getProduct is not a function

//Now if we use a function declaration:

console.log('1 ', getProduct(2, 4));
function getProduct(x, y) {
	return x * y;
}
console.log('2 ', getProduct(2, 4));

// this code after compaliting would be:
function getProduct(x, y) {
	return x * y;
}
console.log('1, ', getProduct(2, 4));
console.log('2, ', getProduct(2, 4));

// and the return value would be:
// => 1, 8
// => 2, 8


// NOTE1:

var globalVar = 'global';
 
(function() {
  
  var name = 'Jen';
  
  var getAge = function() {
    return '30';
  };
  
  function getState() {
    return 'Delaware'; 
  }
  
})();

// in the code above is important to notice that when hoisting happens the variables
// and functions are hoisted to the top of its scope not the the top of the page.
// so the code above after compiling would look somethign like this:

var globalVar;
globalVar = 'global';
 
(function() {
  var name;
  var getAge;
  function getState() {
    return 'Delaware'; 
  }

  name = 'Jen';
  
  getAge = function() {
    return '30';
  };
    
})();

// NOTE2:

// NOTE1 is true if we are using the "var", but if instead we use "let" or "const"
// things change a little bit, because let and const have another scope that its
// taking in consideration:
// the block scope => for loop | if/else statement | while loop | ...

function getTotal() {
  console.log(multiplier);
  console.log(total);
  
  let total = 0;
  
  for(var i = 0; i < 10; i++) {
    
    let valueToAdd = i;
    var multiplier = 2;
    total += valueToAdd * multiplier;
  }
  
  return total;
}
 
getTotal();
 
// in this case the hoisting would happen like so:

function getTotal() {
  let total;
  var multiplier;

  console.log(multiplier);
  console.log(total);
  
  total = 0;
  
  for(var i = 0; i < 10; i++) {
    let valueToAdd;
    valueToAdd = i;
    multiplier = 2;
    total += valueToAdd * multiplier;
  }
  
  return total;
}
 
getTotal();

// A main difference here is that even thou let and const are hoisted
// to the top of their scope they are not initialized until their actual declaration
// meaning that they are not acceceble until they are actually declared.
// so when the interpreter reads the console.logs on line 142 and 143:

// console.log(multiplier); => undefined (this was declared with var)
// console.log(total); => Error (this was declared with let)


var x = 10;
 
function y() {
    x = 100;
    return;
    function x() {}
}
 
y();
 
console.log(x); // => 10

// hoisting is why the x = 10 on the console.log
// on a first glass you would expect that x gat resign to 100
// when the function y is called since x inside of y doest have
// a var or let to define it locally makig x a reference to a 
// global variable ans since the function x happens after the return
// value it i ignored since nothing happends after a return value of a function.

// BUT because of hoisting somehting different happens, remember that
// variable and functions get hoisted to the top of its scopes
// so when js compailer is runnig it hoists the function x to the top of
// the scope of the function y and therefor x becames a inner variable of 
// function y.

// the code would look like this after hoisting:
var x = 10;
 
function y() {
    function x() {}
    x = 100;
    return;
    // function x() {}
}
 
y();
 
console.log(x); 













