

function myfunc(arg0,arg1) {
    console.log(this + ' is ' + arg0 + arg1);

    for(var i in arguments){
        console.log(i + ' ' + arguments[i]);
    }
}


myfunc.call('1','2','3','4'); // this === '1'

/*
 1 is 23
 0 2
 1 3
 2 4
 */