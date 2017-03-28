
var a = new String('hello');

a.smile = true;

console.log(typeof a.smile); // boolean

console.log(typeof  String.smile);


var b = 'world';
b.smile = true;

console.log(typeof  b.smile); // undefined