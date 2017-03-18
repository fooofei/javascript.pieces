

var assert = require('assert');

x = 5;



var a =  {
    func : function () {

        // 这里的 this 指的是 a 对象，因为都是 a 调用
        // 只有 a.func.call 会改变 this
        console.log(this.x);
    }
};

var b = function () {
    return this;
}


// 尝试改变 a 对象属性中的 this
// b() 把全局中的 this 返回了 , 跟在全局中使用 this 不一样

assert(b() !== this);
a.func.call(b()); // 5


a.func(); //undefined
a.func.call(this); //undefined
