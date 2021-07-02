import { Component, OnInit } from '@angular/core';
import { Reviews } from '../../models/review';
import { ReviewsService } from '../../services/review.service';

@Component({
  selector: 'app-find-reviews',
  templateUrl: './find-reviews.component.html',
  styleUrls: ['./find-reviews.component.css']
})
export class FindReviewsComponent implements OnInit {

  id: number = 0;
  review: Reviews = new Reviews();
  stars: number = 0;
  reviews: Reviews[]=[];

  constructor(private reviewsService: ReviewsService) { }

  ngOnInit(): void {
  }

  searchReviewsByStars(){
    this.reviewsService.getReviewsByStars(this.stars)
    .subscribe(reviews =>this.reviews=reviews);
  }

}
