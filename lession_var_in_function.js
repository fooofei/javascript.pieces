


function test() {
    x = 4;
    console.log('test ->'+x);
}


var b = function () {
    console.log(this.x);
}

test(); // insert x to global

console.log(x); // get global x

b(); // get global x


