

var assert = require('assert');

var obj = {
    name: 'Bob',
    mamade : function () {
        return this;
    }
};


console.log(obj); // { name: 'Bob', mamade: [Function: mamade] }
console.log(obj.mamade); // [Function: mamade]
console.log(obj.mamade()); // { name: 'Bob', mamade: [Function: mamade] }
console.log(obj.mamade() === obj); // true

// 通过以上学习，我们能理解下面的运行结果
console.log(obj.mamade().name); // Bob