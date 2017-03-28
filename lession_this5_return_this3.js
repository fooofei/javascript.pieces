
assert = require('assert');


var get_global_this = function () {
    return this;
};



function usesThis(name) {
    this.myName = name;

    function returnMe() {
                        // 按照规定这里的 returnMe() 是构造函数的写法，
                        //  new 对象出来时，this 指向 new 出来的对象
                        //  直接使用时，this 指向 Global
        return this;        //scope is lost because of the inner function
    }

    return {
        returnMe : returnMe  // 这里是一个新的对象的写法，因此 returnMe() 中的 this 指向这个对象
                            // 由此构成了递归
    }
}

function usesThat(name) {
    var that = this;
    this.myName = name;

    function returnMe() {
        return that;            //scope is baked in with 'that' to the "class"
    }

    return {
        returnMe : returnMe
    }
}

var usesthis = new usesThis('John');
var usesthat = new usesThat('Dave');



console.log(usesthis); // { returnMe: [Function: returnMe] }
console.log(usesthis.returnMe()); // { returnMe: [Function: returnMe] }


console.log(usesthat); // { returnMe: [Function: returnMe] }
console.log(usesthat.returnMe()); // usesThat { myName: 'Dave' }

assert(usesthis.returnMe() !== get_global_this());
