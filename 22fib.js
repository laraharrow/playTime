/*

Write a function fib() that takes an integer n and returns the nth Fibonacci number.

Let's say our Fibonacci series is 0-indexed and starts with 0. So:

  fib(0);  // => 0
fib(1);  // => 1
fib(2);  // => 1
fib(3);  // => 2
fib(4);  // => 3
...

*/

const fib = function(n) {
  if (n < 0) {
    throw new Error('no negative numbers of Fibonacci');
  }
  if (n === 0 || n === 1) {
    return n;
  }

  let first = 0;
  let second = 1;
  let current;

  for (let i = 1; i < n; i++) {
    current = first + second;
    first = second;
    second = current;
  }
  return current;
};

console.log(fib(4));
