// O item do pedido deve conter o nome do pedido (ex. “Batatas fritas”; “Açaí”) e o preço;


class ItemPedido {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  get getName() {
    return this._name;
  }

  set setName(newValue: string) {
    this._name = newValue;
  }

  get getPrice() {
    return this._price;
  }

  set setPrice(newValue: number) {
    this._price = newValue;
  }

}

export default ItemPedido;