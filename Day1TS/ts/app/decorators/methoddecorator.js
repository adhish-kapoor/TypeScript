"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function writable(value) {
    return function (target, name, descriptor) {
        descriptor.writable = value;
    };
}
var fruitshop = /** @class */ (function () {
    function fruitshop(name) {
        this.name = name;
        this.price = 20;
    }
    fruitshop.prototype.buy = function () {
        this.price = 30;
    };
    __decorate([
        writable(false),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], fruitshop.prototype, "buy", null);
    return fruitshop;
}());
var fruit = new fruitshop('apple');
fruit.buy = function () {
    fruit.price = 50;
};
fruit.buy();
console.log(fruit.price);
//# sourceMappingURL=methoddecorator.js.map