import { DecimalPipe } from "@angular/common";
import { Orders } from "./orders";
//import { Product } from "./product.model";

export class OrderDetails {
    id: number;
    orders: Orders;
    //products: Product;
    unitPrice: number;
    quantity: number;
    discount: number;

    constructor(){
        this.id = 0;
        this.orders = new Orders();
        //this.products = new th;
        this.unitPrice = 0;
        this.quantity = 0;
        this.discount = 0;
    }
}