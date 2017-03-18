


var insert_global_attribute = function () {

    x = 11;
};



var print_global_attribute = function () {
    console.log(this.x);
};


insert_global_attribute();

print_global_attribute(); // 11