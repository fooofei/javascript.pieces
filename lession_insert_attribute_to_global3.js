



var obj = {
    insert_global_attribute: function () {
        x = 11;

        console.log('obj.insert_global_attribute.x = '+this.x);
    }
};


var print_global_attribute = function () {
    console.log(this.x);
};

obj.insert_global_attribute(); // obj.insert_global_attribute.x = undefined

print_global_attribute(); // 11
