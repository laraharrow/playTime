function logNumbers() {
  console.log(1); 
  setTimeout(function(){console.log(2)}, 1000); 
  setTimeout(function(){console.log(3)}, 0); 
  console.log(4);
}
 
logNumbers();

// the return value of this code would be => 1, 4, 3, 2
// the reason for that is because of the browser "event loop" 
// when the js interpreter in reading the code above the 
// console.logs statements are ran right away but the code
// inside of the setTimeout are put into the event loop queu
// and it has to wait for the interpreter to run the whole code
// ran everything that runs automatically, like the console.logs
// and then check the event loop queu and run the code there in order.