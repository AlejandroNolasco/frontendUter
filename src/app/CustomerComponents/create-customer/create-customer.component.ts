import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer'; 
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { RolService } from '../../services/rol.service';
@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customer: Customer = new Customer();

  constructor( private route: ActivatedRoute,
    private router : Router,
    private customerService: CustomerService) { }
    //private rolService: RolService) { }
    

  ngOnInit(): void {
  }

  insertCustomer(){
    this.customerService.insertCustomer(this.customer)
      .subscribe(datos=>console.log(datos), error=>console.log(error));
      this.customer = new Customer();
      this.router.navigate(['listcustomer']);
  }

  /*listRol() {
    this.rolService.getRolList().subscribe(
      data => {
        console.log('Rol' + JSON.stringify(data));
        this.rolList = data;
      }
    )
  }*/

}
