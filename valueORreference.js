/*

When a value is stored in js there are 2 ways to pass it to be stored:
the values can be stored by value, used for intergers and strings

*/

var foo = 'hello';
var bar = foo;

foo = 'booo';

// in this case the variables are assigned to the same values, eventhou we changed the value of foo, bar still refers to the word 'hello'


var list1 = [1, 2, 3, 4, 5];
var list2 = list1;
 
list2.push(9);
list1.push(6, 7, 8);
 
console.log('list1 & list2 associated to the same value: ', list1, list2);

// list2 is a different name for the same variable reference so changing list1 or list2 
// doesn't matter because js interpreter saves the changes in the same array.
// in all the example above the variables are associated to the same value in space, 
// like if there were arrows from the variables to the same value. 


// now how to copy the value of an array but store it in a different space in memory?

var list3 = [1, 2, 3, 4, 5];
var list4 = list3.slice();
var list5 = list3.concat([]);

list3.push(6, 7, 8);
list4.pop();
list5.push(100);
 
console.log('list3 & list4 have same value stored in differen spaces in memory: ', list3, list4, list5);

// to copy an array but have it refer to a different space in memory but with the same value, there are 2 simple ways of doing it:
// using concat and passing an empty array as argument or using slice with no argument. A third option would be setting list4 to an 
// empty array and using a for loop to copy every element in to the list4 array, but this is more code and less clean.
