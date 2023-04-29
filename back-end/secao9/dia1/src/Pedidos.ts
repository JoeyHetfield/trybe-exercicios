// O pedido deve conter o cliente, os itens consumidos, a forma de pagamento (ex: “cartão”, “dinheiro”) 
// e o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), o pedido pode ou não possuir desconto.

import Cliente from "./Clientes";
import ItemPedido from "./ItensPedidos";

class Pedido {
  private _cliente : Cliente;
  private _itens : ItemPedido[];
  private _formaPagamento : string;
  private _desconto? : number;

  constructor(cliente: Cliente, itens: ItemPedido[], formaPagamento: string, desconto: number) {
    this._cliente = cliente;
    this._itens = itens;
    this._formaPagamento = formaPagamento;
    this._desconto = desconto;
  }

  get getCliente() {
    return this._cliente;
  }

  set setCliente(newValue: Cliente) {
    this._cliente = newValue;
  }

  get getItens() {
    return this._itens;
  }

  set setItens(newValue: ItemPedido[]) {
    this._itens = newValue;
  }

  get getFormaPagamento() { 
    return this._formaPagamento;
  }

  set setFormaPagamento(newValue: string) {
    if(newValue !== "cartão" && newValue !== "dinheiro") {
      throw new Error("Forma de pagamento inválida");
    }
    this._formaPagamento = newValue;
  }

  get getDesconto() {
    return this._desconto;
  }

  set setDesconto(newValue: number) {
    this._desconto = newValue;
  }
}

export default Pedido;