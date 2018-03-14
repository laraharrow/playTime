// two different object(|| array) are never equals, but two different variables
// that refer to the same object will be equal

// object literal syntax -easy and simple

const myBoat = {
  length: 24,
  maxSpeed: 45,
  passengers: 14,
  getLength: function() {
    return this.length;
  }
};

// new keyword & Object constructor

const student = new Object();
 
student.grade = 12;
student.gradePointAverage = 3.7;
student.classes = ["English", "Algebra", "Chemistry"];
student.getClasses = function() {
  return this.classes;
};

// constructor function - great way to make multiple similar object

function Car(color, brand, year) {
  this.color = color;
  this.brand = brand;
  this.year = year;
}
 
Car.prototype.getColor = function() {
  return this.color;
};
 
const carlysCar = new Car('blue', 'ferarri', 2015);
const jimsCar = new Car('red', 'tesla', 2014);
 
console.log(carlysCar.getColor());
console.log(jimsCar.getColor());

// Obj properties:

const a = {};
const b = { name: 'b' };
const c = { name: 'c' };

  // console.log('Obj properties: ', a[b]); // 200
  // => if we were to add a console.log here the value of a[b] would be 200
  // after we call a[c] we update the value since js transform object b and c
  // into  string like: '[object Object]' 
a[b] = 200;
// a['[object Object]'] = 200
a[c] = 400;
// a['[object Object]'] = 400
console.log('Obj properties: ', a[b]);
// console.log(a['[object Object]']);


// when you add a key value pair to an object there are a few ways of doing it
// a[b] is passing a reference to whatever element is associated to the variable b
// is this case an object itself the way js interpreters that is by making that obj
// into a string since every key in an obj must be a string so the obj b becomes
// '[object Object]' and the value of that would be 200 but then after that we are doing
// the same with object c and since '[object Object]' is already define as a key in a
// we just update the value of it to 400.
// if instead of a[b] we used a['b'] we would have created a key 'b' in our object a
// with the value of 200/



// what would be logged out for this expression?
const user1 = {
  name: 'Jordan',
  age: 28,
};
 
const user2 = {
  name: 'Jordan',
  age: 28,
};
 
//console.log(user1 == user2); // => false
console.log('OBJ: ', user1 === user2); // => false

// Because in js we avaluate object by reference instead of doing it by value.
// so eventhou the objects look the same they are stored in different
// space in memory.

// if you want to compare to objets:
console.log('OBJ: ', JSON.stringify(user1) === JSON.stringify(user2));
// because this JSON method transform the object into a JSON
// object and then transform it in a string, and they are
// avaluated by value.


// since arrays are objects the same would apply for it:
console.log('ARRAY: ', [] === []); // => false
console.log('ARRAY: ', JSON.stringify([]) === JSON.stringify([]));


// How does the array constructor function works?
var arr0 = new Array(); // this is the same as: var arr0 = []
var arr1 = new Array('50');
var arr2 = new Array(50);
var arr3 = new Array(1, 2, "three", 4, "five");
var arr4 = new Array([1, 2, 3, 4, 5]);
 
console.log('arr0: ', arr0); // []
console.log('arr1: ', arr1); // ['50']
console.log('arr2: ', arr2); // [<50 empty items>] => passing one arg that is a number 0 or > 
// new Array takes the arg as the length of the array:
console.log('arr2: ', arr2.length); // 50 (and all the elements are empty, not undefined)
console.log('arr3: ', arr3); // [1, 2, "three", 4, "five"]
console.log('arr4: ', arr4); // [[1, 2, 3, 4, 5]]


// indexOf:

const myArray = [5];
const anoherArray = myArray;

console.log('ex1: ', [10, 20, 30, 40, 50].indexOf(30)); // 2 (array indexOf method)
console.log('ex2: ', [{ name: 'Pam' }, { name: 'Kent' }].indexOf({ name: 'Kent' })); // -1
console.log('ex3: ', 'hello world'.indexOf('o')); // 4 (string indexOf method)
console.log('ex4: ', [[1], [2], [3], [4]].indexOf([2])); // -1
console.log('ex5: ', [[1], [2], [3], myArray].indexOf(myArray)); // 3 (because now the both
// the elemnt in the array and the one passed on indexOf are references of the same place in memory)
console.log('ex5: ', [[1], [2], [3], myArray].indexOf(anoherArray)); // 3 ( the same reason the variables
// used here are all refering to the same array stored in memory.

// in ex 2 and 4, for the same reason as mentioned before indexOf won't be able to avaluate
// the values that are stored as reference (object and array)




// SIDE NOTE:
console.log(typeof null); // => object
console.log(typeof undefined); // => undefined
console.log(typeof {}); // => object
console.log(typeof []); // => object

// in js arrays and null return as object if using the method typeof. There are a few ways to collect the correct answer:

console.log(Array.isArray([])); // returns true is the argument is an array
console.log([] instanceof Array); // will also return true if element passed is an array.
var foo = null;
console.log(foo === null); // strict equal will return true if the variable passed is null


