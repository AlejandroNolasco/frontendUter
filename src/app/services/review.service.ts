import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class ReviewsService{

    private baseURL= 'http://localhost:8080/api/reviews';

    constructor(private http: HttpClient){}

    insertReviews(review: Object): Observable<Object>{
        return this.http.post(`${this.baseURL}`,review)
    }
    updateReviews(id:number, review: Object): Observable<Object>{
        return this.http.put(`${this.baseURL}/${id}`, review);
      }
    
    getReviewsList(): Observable<any>{
        return this.http.get(`${this.baseURL}`);
    }
    getReviewsById(id:number): Observable<any>{
        return this.http.get(`${this.baseURL}/${id}`);
    }
    deleteReviews(id: number): Observable<any>{
        return this.http.delete(`${this.baseURL}/${id}`);
    }
}