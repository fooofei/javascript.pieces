

x = 110;



var obj = {
    x : 20,
    f: function () {

        var foo = function () {
            console.log(this);
            console.log(this.x);
        };

        var tempObj={x:'x_in_tempObj'};
        tempObj.myFoo = foo;
        tempObj.myFoo(); // 调用 foo 时，因为 foo . 前面的对象是 tempObj，
                         // this.x 取的是 tempObj 的 x
    }
};

var obj2 = {
    x : 30
};

obj.f(); // x_in_tempObj

obj.f.call(obj2); // x_in_tempObj // 不会更改 foo() 的调用结果

