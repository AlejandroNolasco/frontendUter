import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-find-customer',
  templateUrl: './find-customer.component.html',
  styleUrls: ['./find-customer.component.css']
})
export class FindCustomerComponent implements OnInit {

  id: number = 0;
  customer: Customer = new Customer();
  name: string = '';
  lastName: string= '';
  firstName2: string = '';
  lastName2: string= '';
  customers: Customer[]=[];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  


  searchCustomerByName(){
    this.customerService.getCustomerByName(this.name)
    .subscribe(customers =>this.customers=customers);
  }

}
