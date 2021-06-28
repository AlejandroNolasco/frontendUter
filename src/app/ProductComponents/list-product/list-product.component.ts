import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Products } from '../../models/product';
import{Router} from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  name: string='';
  products: Products[]=[];

  constructor(private router: Router, private productrService: ProductService) { }

  ngOnInit(): void {
    this.loadDataProducts();
  }

  loadDataProducts(){
    this.productrService.getProductsList()
    .subscribe(products=>this.products=products);
  }

  deleteProducts(product: Products){
    this.productrService.deleteProducts(product.id)
    .subscribe(data=>{this.loadDataProducts();})
  }

  updateProducts(product: Products){
    this.router.navigate(['products/update', product.id]);
  }
  searchProductByUsername(){
    if(this.name.length!=0){
      this.productrService.getProductsByName(this.name)
      .subscribe(products=>this.products=products);
    }
    else
      this.loadDataProducts();
  }
}
