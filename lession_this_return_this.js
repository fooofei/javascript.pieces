

var assert = require('assert');

function usesThis(name) {
    this.name = name;

    function returnMe() {
        return this;
    }
    return {mamade:returnMe};
}


var a = new usesThis('Bob');
// a 就是个对象，不能 call, a() 就报错

console.log(usesThis('a').mamade().mamade().mamade().mamade().mamade()); //{ mamade: [Function: returnMe] }
/*
这里产生了递归 usesThis() 返回的是一个 Object，属性有 mamade，对应一个 Function, 调用之后返回 this， this 指向调用者
 usesThis() , 就是这个 Object， 这样就回来了
 */

console.log(typeof usesThis('a').mamade); //function
console.log(typeof usesThis('a').mamade()); // object



console.log(a.mamade().mamade().mamade().mamade().mamade()); //{ mamade: [Function: returnMe] }

console.log(a instanceof Object); // true
console.log(a instanceof Function); // false
console.log(Function instanceof Object); // true