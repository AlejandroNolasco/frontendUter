import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { OrderDetailsService } from '../../services/orderDetails.service';

import { OrderDetails } from 'src/app/models/order.details';
@Component({
  selector: 'app-create-orderdetails',
  templateUrl: './create-orderdetails.component.html',
  //styleUrls: ['./create-orderdetails.component.css']
})
export class CreateOrderDetailsComponent implements OnInit {

  orderdetail: OrderDetails = new OrderDetails();

  constructor( private route: ActivatedRoute,
    private router : Router,
    private orderdetailService: OrderDetailsService) { }
    

  ngOnInit(): void {
  }

  insertOrderDetails(){
    this.orderdetailService.insertOrderDetails(this.orderdetail)
      .subscribe(datos=>console.log(datos), error=>console.log(error));
      this.orderdetail = new OrderDetails();
      this.router.navigate(['listorderdetail']);
  }

}
