import { Customer } from "./customer";
import { Seller } from "./seller";

export class Reviews{
    id: number;
    stars: number;
    description: string;
    seller: Seller;
    customer: Customer;

    constructor() {
        this.id=0;
        this.stars=0;
        this.description="";
        this.seller=new Seller();
        this.customer=new Customer();
    }

}