"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sold = exports.ItemSold = void 0;
var stock_1 = require("./stock");
var ItemSold = /** @class */ (function (_super) {
    __extends(ItemSold, _super);
    function ItemSold(name, price, id) {
        var _this = _super.call(this, name, price) || this;
        _this.idVenta = id;
        return _this;
    }
    ItemSold.prototype.getIdVenta = function () {
        return this.idVenta;
    };
    ItemSold.prototype.getItemSold = function () {
        return this.name;
    };
    return ItemSold;
}(stock_1.Item));
exports.ItemSold = ItemSold;
var Sold = /** @class */ (function () {
    function Sold(itemsSold) {
        this.itemsSold = itemsSold;
    }
    Sold.prototype.GetSold = function () {
        return this.itemsSold;
    };
    return Sold;
}());
exports.Sold = Sold;
