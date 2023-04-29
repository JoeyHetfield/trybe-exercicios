import Cliente from "./Clientes";
import ItemPedido from "./ItensPedidos";
import Pedido from "./Pedidos";

const cliente1 = new Cliente("João");
const cliente2 = new Cliente("Maria");

const item1 = new ItemPedido("Batata frita", 10);
const item2 = new ItemPedido("Açaí", 15);

const pedido1 = new Pedido(cliente1, [item1, item2], "dinheiro", 0.1);
const pedido2 = new Pedido(cliente2, [item2], "cartão", 0.3);

console.log(pedido1);
console.log(pedido2);