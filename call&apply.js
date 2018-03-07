const car1 = {
  brand: 'Porsche',
  getCarDescription: function(cost, year, color) {
    console.log(`This car is a ${this.brand}. The price is $${cost}. The year is ${year}. The color is ${color}.\n`);
  },
};
 
const car2 = {
  brand: 'Lamborghini',
};
 
const car3 = {
  brand: 'Ford',
};

// ****
const car4 = {
	brand: 'Kia',
}
 
car1.getCarDescription(80000, 2010, 'blue');
car1.getCarDescription.call(car2, 200000, 2013, 'yellow');
car1.getCarDescription.apply(car3, [35000, 2014, 'black']);
car1.getCarDescription.call(car4, ...[10000, 2012, 'green'])


/*

Methods call() & apply()

1- How do they function?
	They make it possible for methods of one class object to be used with other objects.

2- What arguments do they take?
	The first argument is always the value associated to the 'this' keyworks followed by 
	the arguments needed in the mathod passed in the same order.

3- How are they different?
	The difference here is that call() passes the arguments separated by commas and 
	apply() passes the arguments as elements of an array.

*/

// ****
// the other thing to notice is that using ES6 you can completely ignore the use of apply()
// since you can use the spread operator ... the example of car4!
