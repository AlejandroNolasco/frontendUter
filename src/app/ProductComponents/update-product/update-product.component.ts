import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Products } from '../../models/product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductsComponent implements OnInit {

  id: number = 0;
  product: Products= new Products();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService : ProductService ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductsById(this.id)
    .subscribe(datos=>{
      console.log(datos)
      this.product = datos;
    }, error=>console.log(error));
  }

  updateProducts(){
    this.productService.updateProducts(this.id, this.product)
    .subscribe(datos =>{
      console.log(datos)
      this.router.navigate(['products/list']);
    }, error=>console.log(error));
    this.product = new Products();
  }

}
