import { Component, OnInit } from '@angular/core';
import {Seller} from '../../models/seller'
import { ActivatedRoute, Router } from '@angular/router';
import { SellerService } from '../../services/seller.service';

@Component({
  selector: 'app-create-seller',
  templateUrl: './create-seller.component.html',
  styleUrls: ['./create-seller.component.css']
})
export class CreateSellerComponent implements OnInit {

  seller: Seller = new Seller();

  constructor( private route: ActivatedRoute,
    private router : Router,
    private sellerService: SellerService) { }

  ngOnInit(): void {
  }

  insertSeller(){
    this.sellerService.insertSeller(this.seller)
      .subscribe(datos=>console.log(datos), error=>console.log(error));
      this.seller = new Seller();
      this.router.navigate(['listseller']);
  }

  goSeller(){
    this.router.navigateByUrl('seller/profile')
  }

}
