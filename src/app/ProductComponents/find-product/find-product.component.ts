import { Component, OnInit } from '@angular/core';
import { Products } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-find-product',
  templateUrl: './find-product.component.html',
  styleUrls: ['./find-product.component.css']
})
export class FindProductComponent implements OnInit {


  product: Products = new Products();
  name: string = '';
  products: Products[]=[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  


  searchProductByName(){
    this.productService.getProductsByName(this.name)
    .subscribe(product =>this.product=product);
  }

}
