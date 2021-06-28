import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';
import{Router} from '@angular/router';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  username: string='';
  customers: Customer[]=[];

  constructor(private router: Router, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.loadDataCustomers();
  }

  loadDataCustomers(){
    this.customerService.getCustomerList()
    .subscribe(customers=>this.customers=customers);
  }

  deleteCustomer(customer: Customer){
    this.customerService.deleteCustomer(customer.id)
    .subscribe(data=>{this.loadDataCustomers();})
  }

  updateCustomer(customer: Customer){
    this.router.navigate(['customers/update', customer.id]);
  }
  searchCustomerByUsername(){
    if(this.username.length!=0){
      this.customerService.getCustomerByUsername(this.username)
      .subscribe(customers=>this.customers=customers);
    }
    else
      this.loadDataCustomers();
  }
}

