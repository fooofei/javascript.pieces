
assert = require('assert');

var person = {
    name: "Brendan Eich",
    hello: function(thing) {
        console.log(this.name + " says hello " + thing);
    }
}

var bind = function(func, thisValue) {
    return function() {
        return func.apply(thisValue, arguments);
        // same as
        //return func.call(thisValue, ...arguments);
    }
}


if(0) {
    person.hello('aaa'); //Brendan Eich says hello aaa

    person.hello.call('Bob','aaa'); //undefined says hello aaa

    person.hello.call({
        name: 'Bob'
    },'aaa');     // Bob says hello aaa
}

else if(1) {

    // bind 永久绑定 this 的值
    var bindHello = bind(person.hello, person);
    //var bindHello2 = person.hello.bind(person);


    bindHello('world'); //Brendan Eich says hello world
    bindHello.call('Bob','world'); // Brendan Eich says hello world
    bindHello.call({
        name:'BOb'
    }, 'world'); // Brendan Eich says hello world
}