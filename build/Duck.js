"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Duck = void 0;
var Birds_1 = require("./Birds");
var Duck = /** @class */ (function (_super) {
    __extends(Duck, _super);
    function Duck(color, canFly, name, lifeTime, size, weight) {
        var _this = _super.call(this, canFly, name, lifeTime, size, weight) || this;
        _this.color = color;
        return _this;
    }
    Duck.prototype.fly = function () {
        console.log("".concat(this.name, " starts to fly!"));
    };
    Duck.prototype.swim = function () {
        console.log("".concat(this.name, " starts to swim!"));
    };
    Duck.prototype.walk = function () {
        console.log("".concat(this.name, " starts  tto walk!"));
    };
    return Duck;
}(Birds_1.Bird));
exports.Duck = Duck;
