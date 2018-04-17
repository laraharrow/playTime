
<!-- 
We're building a web game where everybody wins and we are all friends forever.

It's simple—you click on one of three boxes to see what nice thing you've won. You always win something nice. Because we love you.

Here's what we have so far. Something's going wrong though. Can you tell what it is?
 -->

<button id="btn-0">Button 1!</button>
<button id="btn-1">Button 2!</button>
<button id="btn-2">Button 3!</button>

<script type="text/javascript">
  var prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
    for (var btnNum = 0; btnNum < prizes.length; btnNum++) {
      // for each of our buttons, when the user clicks it...
      document.getElementById('btn-' + btnNum).onclick = function() {
        // tell her what she's won!
        alert(prizes[btnNum]);
      };
    }
</script>

<!-- 
  solution:

  -->
  <button id="btn-0">Button 1!</button>
  <button id="btn-1">Button 2!</button>
  <button id="btn-2">Button 3!</button>

  <script type="text/javascript">
    var prizes = ['A unicorn!', 'A Hug!', 'Fresh Laundry!'];
    // for each button clicked there will be a prize from the array
    for (var btnN = 0, btnN < prizes.length; btnN++) {
      // 
      document.getElementById('btn-' + btnN).onclick = function(frozenBtn) {
        return function() {
          alert(prizes[frozenBtn]);
        }
      }(btnN);
    }
  </script>
<!-- 
The problem is that the loop will run imidiately when the interpreter parses the code, so by the time the user clicks on one of the buttons the loop has finished and the value of it is 3 therefor undefined. To be able to go around the loop and use the right freeze the loop in each iteration and call an inner function inside the loop. So on the code above if the anonymous function takes an argument (the index in the loop iteration) and returns another anonymous function that calls the alert on the array with the index passed as argument, and after the function descripion the same function is called passing the index at the moment the code will work.

NOTES:
1. primitives X objects => in JS primitive values are passed as values and object are passed as references.
Meaning, when a primitive value from the global scope is passed and changed inside a function since its passed as value the global scode value doest change. But if the value passed is an object, lets say an array and we add one more element to it, the array that is passed will change and so will its reference on the global scope.

2. Closure => is the capacity of a function to have access to elements outside of its scope, even though prizes on the example above is out of scope for our anonymous function, the function can still reference it because of closure. you can think of it as layers, the JS interpreter will look for the value acossiated with the variable inside its scope not finding it it will go to the scope layer around it and so on and so forth until it hits the global scope if at that point it diest find anything it will return undefined but not before it ram through all the scopes possible.
 -->
