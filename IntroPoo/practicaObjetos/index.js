"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var stock_1 = require("./stock");
var stock_2 = require("./stock");
var sold_1 = require("./sold");
var sold_2 = require("./sold");
var listaItems = fs.readFileSync("items.txt", "utf-8");
var array = listaItems.split("\r\n");
var arrayItems = [];
var Kiosk = /** @class */ (function () {
    function Kiosk(stock, sold) {
        this.stock = stock;
        this.sold = sold;
    }
    Kiosk.prototype.fillArrayItems = function (array) {
        for (var i = 0; i < array.length; i++) {
            var cadena = array[i].split(",");
            var name_1 = cadena[0];
            var price = cadena[1];
            arrayItems.push(new stock_1.Item(name_1, price));
        }
        return arrayItems;
    };
    Kiosk.prototype.sell = function () {
        var elementSold = new sold_1.ItemSold(arrayItems[0].getName(), arrayItems[0].getPrice(), 1);
        var elementSold2 = new sold_1.ItemSold(arrayItems[1].getName(), arrayItems[1].getPrice(), 2);
        itemsSold.push(elementSold, elementSold2);
        arrayItems.splice(0, 2);
    };
    Kiosk.prototype.getStock = function () {
        return this.stock;
    };
    Kiosk.prototype.getSold = function () {
        return this.sold;
    };
    return Kiosk;
}());
var stock = new stock_2.Stock(arrayItems);
var itemsSold = [];
var sold = new sold_2.Sold(itemsSold);
var kiosk = new Kiosk(stock, sold);
kiosk.fillArrayItems(array);
kiosk.sell();
function convert(obj) {
    var text = [];
    for (var _i = 0, _a = Object.entries(obj); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        text.push(value);
    }
    return text.join(',');
}
function convertArrays(array) {
    var items = [];
    for (var i = 0; i < array.length; i++) {
        var item = convert(array[i]);
        items.push(item);
    }
    return items;
}
function updateTextSell() {
    var buffer = Buffer.from(convertArrays(sold.GetSold()).join('\r\n'));
    fs.writeFile('itemsSold.txt', buffer, function (err) {
        if (err)
            throw err;
        console.log('Saved!');
    });
}
updateTextSell();
