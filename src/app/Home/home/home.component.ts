import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router : Router) { }

  ngOnInit(): void {
  }
  
  goCustomer(){
    this.router.navigateByUrl('customers/create')
  }

  goSeller(){
    this.router.navigateByUrl('sellers/create')
  }

}
