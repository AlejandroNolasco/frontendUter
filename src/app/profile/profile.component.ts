import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service'
import { Customer } from '../models/customer';
import {ActivatedRoute, Router} from '@angular/router';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: number = 0;
 

  currentUser: any;
  progress_bar: boolean = false;
  customer: Customer = {
    username:'',
    name: '',
    email: '',
    phone: '',
    gender: '',
    id: 0,
    password:''
  };
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

