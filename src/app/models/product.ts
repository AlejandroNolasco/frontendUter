import { Category } from "./category";
import { Seller } from "./seller";

export class Products{
    id: number;
    name: string;
    description: string;
    price: number;
    seller:Seller;
    category: Category;
    
    constructor(){
        this.id = 0;
        this.name = "";
        this.description="";
        this.price = 0;
        this.seller=new Seller();
        this.category=new Category();
    }
}
