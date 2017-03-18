
var x = 10;

var obj = {
    x : 20,
    f: function () {
        console.log(this.x);

    }
};

var obj2 = {
    x : 30
};


// 谁调用 f() ，函数里的 this 就指向谁，现在指向 obj， obj.x === 20
obj.f(); // 20


// 通过 call/apply 改变 f() 函数中的 this 指向
obj.f.call(obj2); // 30

