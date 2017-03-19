

/*
 ref : https://github.com/lxj/javascript.patterns/blob/master/chapter2.markdown
 分散的 var 带来的问题， 推荐写法，var 都放到函数顶部
 */

name = 'global';




var func1 = function () {
    console.log(name);
};

func1();


var func2 = function () {
    console.log(name);

    var name = 'local';
    console.log(name);
};

func2();


/*
 global
 undefined
 local
 */