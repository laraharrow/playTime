/*

I want to learn some big words so people think I'm smart.

I opened up a dictionary to a page in the middle and started flipping through, looking for words I didn't know. I put each word I didn't know at increasing indices in a huge array I created in memory. When I reached the end of the dictionary, I started from the beginning and did the same thing until I reached the page I started at.

Now I have an array of words that are mostly alphabetical, except they start somewhere in the middle of the alphabet, reach the end, and then start from the beginning of the alphabet. In other words, this is an alphabetically ordered array that has been "rotated." For example:

  var words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote',  // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
];

Write a function for finding the index of the "rotation point," which is where I started working from the beginning of the dictionary. This array is huge (there are lots of words I don't know) so we want to be efficient here.

*/

const findRotationPoint = function(words) {
  const firstWord = words[0];
  let greaterIdx = words.length - 1;
  let lessIdx = 0;

  while (lessIdx < greaterIdx) {
    // divede the array in the middle, to find the new middles as you start dividing not based on the middle of the array but based on the half you are working on just add the number of elements from before the lesserIdx to make sure you account for all element in the array to find new position.

    let potentialRotation = Math.floor(lessIdx + (greaterIdx - lessIdx) / 2);
    if (words[potentialRotation] >= firstWord) {
      // if the element at middle is greater then the firs element check elements to the right of it.
      lessIdx = potentialRotation;
    } else {
      greaterIdx = potentialRotation;
    }
    // if the greater and less elements meet you found your point of rotation.
    if (lessIdx + 1 === greaterIdx) {
      // get out of the loop
      break;
    }
  }
  // and return the index of position where rotation hapened
  return greaterIdx;
};

const foo = ['a', 'b', 'c'];

console.log(findRotationPoint(foo));

