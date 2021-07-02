import { Component, OnInit } from "@angular/core";
import {SellerService} from '../../services/seller.service'
import { ActivatedRoute, Router } from "@angular/router";3
import { Seller } from "src/app/models/seller";


@Component({
    selector: 'app-update-seller',
    templateUrl: './update-seller.component.html',
    //styleUrls: ['./update-seller.component.css']
})
export class UpdateSellerComponent implements OnInit {
    id: number = 0;
    seller: Seller = new Seller();

    constructor(private route: ActivatedRoute , private router: Router, private sellerService: SellerService){}


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.sellerService.getSellerById(this.id)
    .subscribe(datos=>{
      console.log(datos)
      this.seller = datos;
    }, error=>console.log(error));
  }

  updateSeller(){
    this.sellerService.updateSeller(this.id, this.seller)
    .subscribe(datos =>{
      console.log(datos)
      this.router.navigate(['sellers/list']);
    }, error=>console.log(error));
    this.seller = new Seller();
  }

}