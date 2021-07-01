import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class OrderDetailsService {

  
  private baseURL= 'http://localhost:8080/api/orderdetails';

  constructor( private http: HttpClient) { }

  insertOrderDetails(orderDetails: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`, orderDetails);
  }

  updateOrderDetails(id:number, orderDetails: Object): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, orderDetails);
  }

  getOrderDetails(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  deleteOrderDetails(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }
  getOrderDetailsByDiscount(discount: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/searchByDiscount/${discount}`);
  }
  getOrderDetailsById(id: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`);
  }
  
}