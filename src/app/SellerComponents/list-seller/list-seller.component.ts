import { Component, OnInit } from '@angular/core';
import { SellerService } from '../../services/seller.service';
import { Seller } from '../../models/seller';
import{Router} from '@angular/router';

@Component({
  selector: 'app-list-seller',
  templateUrl: './list-seller.component.html',
  //styleUrls: ['./list-seller.component.css']
})
export class ListSellerComponent implements OnInit {

  username: string='';
  sellers: Seller[]=[];

  constructor(private router: Router, private sellerService: SellerService) { }

  ngOnInit(): void {
    this.loadDataSellers();
  }

  loadDataSellers(){
    this.sellerService.getSellerList()
    .subscribe(sellers=>this.sellers=sellers);
  }

  deleteSeller(seller: Seller){
    this.sellerService.deleteSeller(seller.id)
    .subscribe(data=>{this.loadDataSellers();})
  }

  updateSeller(seller: Seller){
    this.router.navigate(['sellers/update', seller.id]);
  }
  searchSellerByUsername(){
    if(this.username.length!=0){
      this.sellerService.getSellerByUsername(this.username)
      .subscribe(sellers=>this.sellers=sellers);
    }
    else
      this.loadDataSellers();
  }
}