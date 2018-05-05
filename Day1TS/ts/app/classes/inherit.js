"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var box = /** @class */ (function () {
    function box(item) {
        this.candies = [];
        this.candies.push(item);
    }
    return box;
}());
var smallbox = /** @class */ (function (_super) {
    __extends(smallbox, _super);
    function smallbox(candies) {
        return _super.call(this, candies) || this;
    }
    return smallbox;
}(box));
//# sourceMappingURL=inherit.js.map