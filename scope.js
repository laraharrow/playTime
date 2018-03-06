var myCar = {
  color: "Blue",
  logColor: function() {
    var self = this;
    console.log("In logColor - this.color: " + this.color);
    console.log("In logColor - self.color: " + self.color);
    (function() {
      console.log("In IIFE - this.color: " + this.color);
      console.log("In IIFE - self.color: " + self.color);
    })();
  },
};
 
myCar.logColor();

/*  
This is what you should expecte as response from the code above:

    In logColor - this.color: Blue
    In logColor - self.color: Blue
    In IIFE - this.color: undefined
    In IIFE - self.color: Blue

The reason for that is that inside of logColor the this keyword is 
associated to the class myCar there for this.color is the color key
inside the class. and self is a variable inside logColor that that refers
to what this is associated to in the logColor scope. now when we get into
the inner IIFE function, because of closure self would refer to this on
from the scope of logColor, but this in this context is undefined because 
the interpreter will look for this.color on the global scope.

*/

