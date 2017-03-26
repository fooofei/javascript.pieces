


/*
 '*' 号和 yeild 缺一不可。

 无 '*' 号，yeild 关键字无法使用
 无 yeild ，用 return 代替，继续 next() 结果变化
       { value: 1, done: false } { value: 2, done: false } { value: undefined, done: true }
 ->    { value: 1, done: true } { value: undefined, done: true }

 */

function * Foo() {
    var start = 0;
    while(start<2){
        start += 1;
        yield start;
        //return start;
    }
}

var gen1 = Foo();

console.log(typeof Foo); // function
console.log(typeof gen1); // object

console.log(Foo()); // {}  使用 yeild 还是 return, 结果相同

var a ;


// 这样书写保证最后一个输出是有效的结果
while((a = gen1.next()) && (!a.done) ){
    console.log('---------------');
    console.log(gen1);
    console.log(typeof gen1);
    console.log(a);
}


/*
 ---------------
 {}
 object
 { value: 1, done: false }
 ---------------
 {}
 object
 { value: 2, done: false }
 */



