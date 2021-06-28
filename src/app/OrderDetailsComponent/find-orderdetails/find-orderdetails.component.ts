import { Component, OnInit } from '@angular/core';
import { OrderDetails } from 'src/app/models/order.details';
import { Customer } from '../../models/customer';
import { OrderDetailsService } from '../../services/orderDetails.service';

@Component({
  selector: 'app-find-orderdetails',
  templateUrl: './find-orderdetails.component.html',
  styleUrls: ['./find-orderdetails.component.css']
})
export class FindOrderDetailsComponent implements OnInit {

  id: number = 0;
  orderdetail: OrderDetails = new OrderDetails();
  
  discount: number = 0;
  orderdetails: OrderDetails[]=[];

  constructor(private orderDetailService: OrderDetailsService) { }

  ngOnInit(): void {
  }

  


  searchOrderDetailsByDiscount(){
    this.orderDetailService.getOrderDetailsByDiscount(this.discount)
    .subscribe(orderdetails =>this.orderdetails=orderdetails);
  }

}
