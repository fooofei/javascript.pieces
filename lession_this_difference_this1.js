
/*
 一个知识点：
 在全局作用域下，使用 var 定义的变量不可以 delete，没有 var 定义的变量可以 delete。
    也就说明隐含全局变量严格来说不是真正的变量，而是全局对象的属性，因为属性可以通过 delete 删除，
    而变量不可以。
 */

/*


var x = 3;

function test() {
    console.log('test().x ->'+this.x);
}

test(); // test().x ->undefined

 */

/*

x = 3;

function test() {

    console.log('test().x ->'+this.x);
}

test(); //test().x ->3r

 */

/*

function test() {
    x = 3;
    console.log(x);
}

test(); // 3
console.log(x); // 3

*/

if(1){
    x = 3;
    function test() {
      console.log("if ->test() ->this.x :"+this.x);
    }
    test();
    console.log(x);
}