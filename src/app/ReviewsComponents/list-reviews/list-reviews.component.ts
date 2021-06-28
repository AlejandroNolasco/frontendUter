import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../services/review.service';
import { Reviews } from '../../models/review';
import{Router} from '@angular/router';

@Component({
  selector: 'app-list-review',
  templateUrl: './list-reviews.component.html',
  //styleUrls: ['./list-reviews.component.css']
})
export class ListReviewsComponent implements OnInit {

  reviews: Reviews[]=[];

  constructor(private router: Router, private reviewsService: ReviewsService) { }

  ngOnInit(): void {
    this.loadDataReviews();
  }

  loadDataReviews(){
    this.reviewsService.getReviewsList()
    .subscribe(reviews=>this.reviews=reviews);
  }

  deleteReviews(review: Reviews){
    this.reviewsService.deleteReviews(review.id)
    .subscribe(data=>{this.loadDataReviews();})
  }

  updateReviews(review: Reviews){
    this.router.navigate(['reviews/update', review.id]);
  }
  
}