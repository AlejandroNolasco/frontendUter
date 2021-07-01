import { DecimalPipe } from "@angular/common";
import { Orders } from "./orders";
import { Products } from "./product";
//import { Product } from "./product.model";

export class OrderDetails {
    id: number;
    orders: Orders;
    products: Products;
    unitPrice: number;
    quantity: number;
    discount: number;

    constructor(){
        this.id = 0;
        this.orders = new Orders();
        this.products = new Products();
        this.unitPrice = 0;
        this.quantity = 0;
        this.discount = 0;
    }
}