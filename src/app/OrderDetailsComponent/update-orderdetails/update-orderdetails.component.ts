import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from '../../services/orderDetails.service';
import {ActivatedRoute, Router} from '@angular/router';
import { OrderDetails } from '../../models/order.details';

@Component({
  selector: 'app-update-orderdetails',
  templateUrl: './update-orderdetails.component.html',
  styleUrls: ['./update-orderdetails.component.css']
})
export class UpdateOrderDetailsComponent implements OnInit {

  id: number = 0;
  orderdetail: OrderDetails= new OrderDetails();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private orderdetailsService : OrderDetailsService ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.orderdetailsService.getOrderDetailsById(this.id)
    .subscribe(datos=>{
      console.log(datos)
      this.orderdetail = datos;
    }, error=>console.log(error));
  }

  updateOrderDetails(){
    this.orderdetailsService.updateOrderDetails(this.id, this.orderdetail)
    .subscribe(datos =>{
      console.log(datos)
      this.router.navigate(['listar']);
    }, error=>console.log(error));
    this.orderdetail = new OrderDetails();
  }

}
