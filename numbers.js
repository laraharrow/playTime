console.log(900.9 === 300.3 * 3); // false
// the reason for that is that js doesn't alwasy returns
// correct values when dealing with decimals.
console.log(300.3 * 3); // => 900.90000000001
// therefor the equal expression above wouldn't be equla
// how to solve this problem?

// 1 toFixed() => accepts an arg on the number of elements after the .
// and it will return a string of the number 
console.log('toFixed: ', (300.3 * 3).toFixed(1), typeof (300.3 * 3).toFixed(1)); // but this is a string
console.log('toFixed: ', Number((300.3 * 3).toFixed(1)), typeof Number((300.3 * 3).toFixed(1))); // now its a number

//2 toPrecision => the arg is the length of the return value and it returns a string
console.log('toPrecision: ', (300.3 * 3).toPrecision(12), typeof (300.3 * 3).toPrecision(12)); // but this is a string
console.log('toPrecision: ', Number((300.3 * 3).toPrecision(12)), typeof Number((300.3 * 3).toPrecision(12))); // now its a number
// since the numbers after index 4 are zeros as an iterget it's ignored.

// 3 just do math:
console.log('math: ', ((300.3 * 10) * 3) / 10); // this way when you multiply the numbers you are not dealing with decimals.



