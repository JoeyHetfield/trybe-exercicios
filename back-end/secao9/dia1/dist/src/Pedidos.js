"use strict";
// O pedido deve conter o cliente, os itens consumidos, a forma de pagamento (ex: “cartão”, “dinheiro”) 
// e o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), o pedido pode ou não possuir desconto.
Object.defineProperty(exports, "__esModule", { value: true });
class Pedido {
    constructor(cliente, itens, formaPagamento, desconto) {
        this._cliente = cliente;
        this._itens = itens;
        this._formaPagamento = formaPagamento;
        this._desconto = desconto;
    }
    get getCliente() {
        return this._cliente;
    }
    set setCliente(newValue) {
        this._cliente = newValue;
    }
    get getItens() {
        return this._itens;
    }
    set setItens(newValue) {
        this._itens = newValue;
    }
    get getFormaPagamento() {
        return this._formaPagamento;
    }
    set setFormaPagamento(newValue) {
        if (newValue !== "cartão" && newValue !== "dinheiro") {
            throw new Error("Forma de pagamento inválida");
        }
        this._formaPagamento = newValue;
    }
    get getDesconto() {
        return this._desconto;
    }
    set setDesconto(newValue) {
        this._desconto = newValue;
    }
}
exports.default = Pedido;
