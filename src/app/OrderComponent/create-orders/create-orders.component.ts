import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer'; 
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from '../../services/order.service';
import { Orders } from 'src/app/models/orders';

@Component({
  selector: 'app-create-orders',
  templateUrl: './create-orders.component.html',
  styleUrls: ['./create-orders.component.css']
})
export class CreateOrdersComponent implements OnInit {

  order: Orders = new Orders();

  constructor( private route: ActivatedRoute,
    private router : Router,
    private orderService: OrdersService) { }
    //private rolService: RolService) { }
    

  ngOnInit(): void {
  }

  insertOrder(){
    this.orderService.insertOrder(this.order)
      .subscribe(datos=>console.log(datos), error=>console.log(error));
      this.order = new Orders();
      this.router.navigate(['listorder']);
  }

  /*listRol() {
    this.rolService.getRolList().subscribe(
      data => {
        console.log('Rol' + JSON.stringify(data));
        this.rolList = data;
      }
    )
  }*/

}
