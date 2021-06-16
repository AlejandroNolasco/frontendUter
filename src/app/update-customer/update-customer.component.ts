import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  id: number = 0;
  customer: Customer= new Customer();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private customerService : CustomerService ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.customerService.getCustomerById(this.id)
    .subscribe(datos=>{
      console.log(datos)
      this.customer = datos;
    }, error=>console.log(error));
  }

  updateCustomer(){
    this.customerService.updateCustomer(this.id, this.customer)
    .subscribe(datos =>{
      console.log(datos)
      this.router.navigate(['listar']);
    }, error=>console.log(error));
    this.customer = new Customer();
  }

}
