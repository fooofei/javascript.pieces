

x = 11;




var print_global_attribute = function () {
    console.log(this.x);
};


print_global_attribute(); // 11