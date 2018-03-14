var string1 = 'Tampa';
var string2 = string1;
string1 = 'Venice';
 
console.log(string2); // 'Tampa'
 
 
////////////////////////////////
 
 
var person1 = {
  name: 'Alex',
  age: 30
};
 
var person2 = person1;
 
person2.name = 'Kyle';
 
console.log(person1); // 'Kyle'

// since strings are stored by values when you change the value of string1, string2 is still associated 
// to the value that was stored with
// but for objects that are stored by reference once we change anything on that reference the 2 variables
// that direct to the position in memory will be changed.


// there are some array methods that can be used in arrays:
	// only use methods that are 'read-only': filter, forEach, map, some, every...
	// never use methosd that 'manipulates' the array: push, pop, splice, shift, reverse...
	
const data1 = 'Jordan Smith';
 
const data2 = [].filter.call(data1, function(elem, index) {
  return index > 6;
});

// [].filter === Array.prototype.filter
 
console.log(data2); // => [ 'S', 'm', 'i', 't', 'h' ]
// the code under var data2: filter creates an array of elements that returns true from
// from the function passed as its argument
// in this example we want to store in the array every element whos index are > 6
// also we are using call to have the this refer to the data1 string, that way elem
// will refer to each letter in the string and if the letter has an index > 6 it will 
// be added to the returned array


