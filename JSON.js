/* 

Describe what JSON format is:
	JSON = JavaScript Object Notation
	is a light-weight format for transferring data, used to faster and easly transfer data 
	between programs or form an API, it is mainly used because its easy for humans to understand
	and its easy for computers to parse and generate.

*/
// in the correct format of JSON you have to have your strings with " "
// that applies for strings, arrays or objects wiht strings elements
// and every key on the JSON object.
const myJsonObj = {
  "myString": "some string'",
  "myNumber": 1234, // => any interger: decimal, positive, negative
  "myNull": null, // not a string
  "myBoolean": false, // || true
  // myUndefined: undefined,
  "myArray": [1, 2, "foo"],
  // myFunction: function() {console.log('foo bar')},
  "myObject": {a: "bar", b: 1, c: 2, d: 3, }
};

// undefined is not allowed in JSON data because its pointless, if you never delcarer a key 
// in your JSON object and you try looking it up js will return undefined anywasys
console.log(myJsonObj.myUndefined); // => undefined

// functions are also not alolwed as JSON data because JSON is only a data description language
// its not a program language, its purpose is only to pass data.
