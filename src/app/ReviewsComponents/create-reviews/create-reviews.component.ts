import { Component, OnInit } from '@angular/core';
import { Reviews } from '../../models/review'; 
import { ActivatedRoute, Router } from '@angular/router';
// import { CustomerService } from '../../services/customer.service';
// import { SellerService } from '../../services/seller.service';
import { ReviewsService } from 'src/app/services/review.service';
@Component({
  selector: 'app-create-reviews',
  templateUrl: './create-reviews.component.html',
  styleUrls: ['./create-reviews.component.css']
})
export class CreateReviewsComponent implements OnInit {

  review: Reviews = new Reviews();

  constructor( private route: ActivatedRoute,
    private router : Router,
    private reviewsService: ReviewsService) { }
    

  ngOnInit(): void {
  }

  insertReviews(){
    this.reviewsService.insertReviews(this.review)
      .subscribe(datos=>console.log(datos), error=>console.log(error));
      this.review = new Reviews();
      this.router.navigate(['reviews/list']);
  }
}
