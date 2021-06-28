import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/order.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Orders } from '../../models/orders';

@Component({
  selector: 'app-update-review',
  templateUrl: './update-orders.component.html',
  styleUrls: ['./update-orders.component.css']
})
export class UpdateOrdersComponent implements OnInit {

  id: number = 0;
  order: Orders= new Orders();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private orderService : OrdersService ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.orderService.getOrderById(this.id)
    .subscribe(datos=>{
      console.log(datos)
      this.order = datos;
    }, error=>console.log(error));
  }

  updateOrders(){
    this.orderService.updateOrder(this.id, this.order)
    .subscribe(datos =>{
      console.log(datos)
      this.router.navigate(['listar']);
    }, error=>console.log(error));
    this.order = new Orders();
  }

}