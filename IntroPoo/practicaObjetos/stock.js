"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stock = exports.Item = void 0;
var Item = /** @class */ (function () {
    function Item(name, price) {
        this.name = name;
        this.price = price;
    }
    Item.prototype.getName = function () {
        return this.name;
    };
    Item.prototype.getPrice = function () {
        return this.price;
    };
    Item.prototype.setPrice = function (newPrice) {
        this.price = newPrice;
    };
    return Item;
}());
exports.Item = Item;
var Stock = /** @class */ (function () {
    function Stock(items) {
        this.items = [];
        this.items = items;
    }
    Stock.prototype.getItems = function () {
        return this.items;
    };
    return Stock;
}());
exports.Stock = Stock;
