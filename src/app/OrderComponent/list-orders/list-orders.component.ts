import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/order.service';
import { Orders } from '../../models/orders';
import{Router} from '@angular/router';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {

  orders: Orders[]=[];

  constructor(private router: Router, private orderService: OrdersService) { }

  ngOnInit(): void {
    this.loadDataOrders();
  }

  loadDataOrders(){
    this.orderService.getOrderList()
    .subscribe(orders=>this.orders=orders);
  }

  deleteOrders(order: Orders){
    this.orderService.deleteOrder(order.id)
    .subscribe(data=>{this.loadDataOrders();})
  }

  updateOrders(order: Orders){
    this.router.navigate(['orders/update', order.id]);
  }
  
}