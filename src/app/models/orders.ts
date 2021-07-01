import { Customer } from "./customer";
import { Seller } from "./seller";

export class Orders {
    id: number;
    seller: Seller;
    customer: Customer;
    orderDate: Date;

    constructor(){
        this.id = 0;
        this.seller = new Seller();
        this.customer = new Customer();
        //corregir por si esta mal
        this.orderDate = new Date();
    }
}
