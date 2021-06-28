import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class OrdersService {

  
  private baseURL= 'http://localhost:8080/api/orders';

  constructor( private http: HttpClient) { }

  insertOrder(order: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`, order);
  }

  updateOrder(id:number, order: Object): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, order);
  }

  getOrderList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  deleteOrder(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }
  getOrderById(id: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`);
  }
  
}