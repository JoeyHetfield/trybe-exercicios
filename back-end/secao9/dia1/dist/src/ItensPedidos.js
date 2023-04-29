"use strict";
// O item do pedido deve conter o nome do pedido (ex. “Batatas fritas”; “Açaí”) e o preço;
Object.defineProperty(exports, "__esModule", { value: true });
class ItemPedido {
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }
    get getName() {
        return this._name;
    }
    set setName(newValue) {
        this._name = newValue;
    }
    get getPrice() {
        return this._price;
    }
    set setPrice(newValue) {
        this._price = newValue;
    }
}
exports.default = ItemPedido;
