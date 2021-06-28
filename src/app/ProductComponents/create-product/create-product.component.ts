import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer'; 
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Products } from 'src/app/models/product';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: Products = new Products();

  constructor( private route: ActivatedRoute,
    private router : Router,
    private productService: ProductService) { }   

  ngOnInit(): void {
  }

  insertProducts(){
    this.productService.insertProducts(this.product)
      .subscribe(datos=>console.log(datos), error=>console.log(error));
      this.product = new Products();
      this.router.navigate(['listproduct']);
  }

}
