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
 
// uncoment line bellow to see the result: 
// myCar.logColor();

/*  
This is what you should expecte as response from the code above:

    In logColor - this.color: Blue
    In logColor - self.color: Blue
    In IIFE - this.color: undefined
    In IIFE - self.color: Blue

The reason for that is that inside of logColor the 'this' keyword is 
associated to the class (object) 'myCar' therefor 'this.color' is the color key
inside the class and 'self' is a variable inside logColor  that refers
to what 'this' is associated to in the logColor scope. Now when we get into
the inner IIFE function, because of closure 'self' would refer to 'this'
from the scope of logColor, but 'this' in this context is undefined because 
the interpreter will look for this.color on the IIFE scope not fins enything
and then look on the global scope and also not find anything.

*/


  




