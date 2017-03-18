

x = 110;



var obj = {
    x : 20,
    f: function () {

        var foo = function () {
            console.log(this); // 注意这里的 this 不是 obj， 是全局对象 Global
            console.log(this.x);
        };

        foo();
        // foo() 的前面什么对象都没有，则说明是 Global 对象调用的，this 指向 Global
        // 更改 Global 的 x 可以查看效果
    }
};

var obj2 = {
    x : 30
};

obj.f(); // 110

// obj.f.call(obj2); // 不会更改 foo() 的调用结果

