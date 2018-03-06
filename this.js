/*
what does the "this" keyworkd refers to?
	The ** this ** keyword refers to whatever object it is directlu inside of.
*/

// here when we are using the keyword "this" we are refering to the object that
// it is in, so the objet house. 
// this.price = house.price = 100000
var house = {
  price: 100000,
  squareFeet: 2000,
  owner: 'Taylor',
  getPricePerSquareFoot: function() {
    return this.price / this.squareFeet;
  }
};
 
console.log(house.price);
console.log(house.getPricePerSquareFoot());