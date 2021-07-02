import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from '../../services/orderDetails.service';
import { OrderDetails } from '../../models/order.details';
import{Router} from '@angular/router';

@Component({
  selector: 'app-list-orderdetails',
  templateUrl: './list-orderdetails.component.html',
  styleUrls: ['./list-orderdetails.component.css']
})
export class ListOrderDetailsComponent implements OnInit {

  username: string='';
  orderdetails: OrderDetails[]=[];

  constructor(private router: Router, private orderdetailService: OrderDetailsService) { }

  ngOnInit(): void {
    this.loadDataOrderDetails();
  }

  loadDataOrderDetails(){
    this.orderdetailService.getOrderDetails()
    .subscribe(orderdetails=>this.orderdetails=orderdetails);
  }

  deleteOrderDetails(orderdetail: OrderDetails){
    this.orderdetailService.deleteOrderDetails(orderdetail.id)
    .subscribe(data=>{this.loadDataOrderDetails();})
  }

  updateOrderDetails(orderdetail: OrderDetails){
    this.router.navigate(['orderdetails/update', orderdetail.id]);
  }

}

