import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/models/orders';
import { OrdersService } from '../../services/order.service';

@Component({
  selector: 'app-find-reviews',
  templateUrl: './find-orders.component.html',
  styleUrls: ['./find-orders.component.css']
})
export class FindOrdersComponent implements OnInit {

  id: number = 0;
  order: Orders = new Orders();
  orders: Orders[]=[];

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
  }

  searchReviewsById(){
    this.orderService.getOrderById(this.id)
    .subscribe(orders =>this.orders=orders);
  }

}
