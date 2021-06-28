import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../services/review.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Reviews } from '../../models/review';

@Component({
  selector: 'app-update-review',
  templateUrl: './update-reviews.component.html',
  styleUrls: ['./update-reviews.component.css']
})
export class UpdateReviewsComponent implements OnInit {

  id: number = 0;
  review: Reviews= new Reviews();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private reviewService : ReviewsService ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.reviewService.getReviewsById(this.id)
    .subscribe(datos=>{
      console.log(datos)
      this.review = datos;
    }, error=>console.log(error));
  }

  updateReviews(){
    this.reviewService.updateReviews(this.id, this.review)
    .subscribe(datos =>{
      console.log(datos)
      this.router.navigate(['listar']);
    }, error=>console.log(error));
    this.review = new Reviews();
  }

}