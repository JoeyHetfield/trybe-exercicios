"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Clientes_1 = __importDefault(require("./Clientes"));
const ItensPedidos_1 = __importDefault(require("./ItensPedidos"));
const Pedidos_1 = __importDefault(require("./Pedidos"));
const cliente1 = new Clientes_1.default("João");
const cliente2 = new Clientes_1.default("Maria");
const item1 = new ItensPedidos_1.default("Batata frita", 10);
const item2 = new ItensPedidos_1.default("Açaí", 15);
const pedido1 = new Pedidos_1.default(cliente1, [item1, item2], "dinheiro", 0.1);
const pedido2 = new Pedidos_1.default(cliente2, [item2], "cartão", 0.3);
console.log(pedido1);
console.log(pedido2);
