import { Component, OnInit } from "@angular/core";
import { Seller } from "src/app/models/seller";
import { SellerService } from "src/app/services/seller.service";

@Component({
  selector: 'app-find-seller',
  templateUrl: './find-seller.component.html',
  //styleUrls: ['./find-seller.component.css']
})
export class FindSellerComponent implements OnInit {

  seller: Seller = new Seller();
  name: string = '';
  sellers: Seller[]=[];

  constructor(private sellerService: SellerService){}

  ngOnInit(): void{

  }

  searchSellerByName(){
      this.sellerService.getSellerByName(this.name).subscribe(sellers =>this.sellers=sellers);
  }
}