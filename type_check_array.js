

/*
 Ref : https://github.com/TooBug/javascript.patterns/blob/master/chapter3.markdown
 */

var ar = [1,2];


// not
console.log(typeof ar); // object


// >= ECMAScript5 use
console.log(Array.isArray(ar)); // true

// a seems like Array object
var ar_fake = {
    length:1,
    '0':1,
    slice:function () {

    }
};
console.log(Array.isArray(ar_fake)); // false


// < ECMAScript5 use
if (typeof Array.isArray === "undefined") {
    Array.isArray = function (arg) {
        return Object.prototype.toString.call(arg) === "[object Array]";
    };
}

// test
//console.log(Object.prototype.toString.call(ar)); // [object Array]
