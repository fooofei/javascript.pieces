
assert = require('assert');


var get_global_this = function () {
    return this;
};


function usesThis(name) {
    this.myName = name;

    function returnMe() {
        return this;
    }

    return {
        returnMe : returnMe
    }
}

function usesThis1(name) {
    this.myName = name;
}

function usesThis2(name) {
    this.myName = name;

    function returnMe() {
        return this;
    }

    return {
        returnMe : new returnMe()
    }
}

function usesThis3(name) {
    this.myName = name;

    return this;
}


var usesthis = new usesThis('John');
var usesthis1 = new usesThis1('Bob');
var usesthis2 = new usesThis2('Dave');
var usesthis3 = new usesThis3('Aha');

console.log(usesthis); // { returnMe: [Function: returnMe] }
console.log(usesthis.returnMe()); // { returnMe: [Function: returnMe] }
console.log(usesthis.myName); // undefinedconsole.log(usesthis.returnMe().myName); // undefined


console.log(usesthis1); // usesThis1 { myName: 'Bob' }
console.log(usesthis1.myName); // Bob

console.log(usesthis2); // { returnMe: returnMe {} }
console.log(usesthis2.returnMe); // returnMe {}

assert(usesthis2.returnMe instanceof Object);

console.log(usesthis2.myName); // undefined
console.log(usesthis2.returnMe.myName); // undefined


console.log(usesthis3); // usesThis3 { myName: 'Aha' }
console.log(usesthis3.myName); // Aha