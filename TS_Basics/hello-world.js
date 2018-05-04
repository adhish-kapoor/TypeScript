var fn = function () { return 'response'; }; //typescript syntax using arrow operator
var a = 10;
var b;
b = true;
//tuple
var t = [1, 'hi']; //different data types
//implicit type in functions
function greet1() {
    return "Good";
}
var greeting; //type any
greeting = greet1();
greeting = 45; //type any
console.log(greeting); // 45
