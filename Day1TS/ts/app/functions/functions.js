"use strict";
function hello(n, r) {
    return "Adhish";
}
var res = hello(2, "3");
console.log(res);
var car;
car = {
    model: 1,
    seats: 4,
};
function myCar(car) {
}
var obj1 = {
    name: "swift",
    type: "VXI",
    engine: "1000cc"
};
myCar(obj1);
function fruits(arg1, arg2) {
    var arg3 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        arg3[_i - 2] = arguments[_i];
    }
    console.log(arg1); //mango
    arg3.forEach(function (i) {
        console.log(i); //papaya orange
    });
}
fruits('mango', 'apple', 'papaya', 'orange');
//# sourceMappingURL=functions.js.map