import { Rol } from "./rol";

export class Customer {
    id: number;
    name: string;
    username: string;
    gender: string;
    password: string;
    phone: string;
    email: string;
    rol: Rol;

    constructor(){
        this.id = 0;
        this.name = "";
        this.username ="";
        this.gender = "";
        this.password = "";
        this.phone = "";
        this.email = "";
        this.rol = new Rol();
    }
}
