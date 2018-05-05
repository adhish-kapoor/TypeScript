"use strict";
var Person = /** @class */ (function () {
    function Person(name) {
        this.Name = name;
    }
    return Person;
}());
var person1 = new Person("Adhish");
console.log(person1);
//classes
var shoppingCart = /** @class */ (function () {
    function shoppingCart() {
        this.items = [];
    }
    shoppingCart.prototype.buy = function (item) {
        this.items.push(item);
    };
    return shoppingCart;
}());
var mobile = new shoppingCart();
mobile.buy('iphone');
console.log(mobile.items); //iphone
var tv = new shoppingCart();
console.log(tv.items); //[]
function todoList() {
}
//prototype
todoList.prototype = {
    items: []
};
var todo1 = new todoList();
todo1.items.push("homework");
var todo2 = new todoList();
console.log(todo2.items); //homework
//# sourceMappingURL=class.js.map