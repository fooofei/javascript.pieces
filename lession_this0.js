


x = 110;


function Foo() {
    console.log(this.x);
}

Foo(); // 110

var a = new Foo(); // undefined
console.log(typeof a); // object
console.log(a); // Foo {}

a.x = 120;
console.log(typeof  a); // object
console.log(a); // Foo { x: 120 }

// 已经没有机会输出 x 了


// a(); // TypeError: a is not a function