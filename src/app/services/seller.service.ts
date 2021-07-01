import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SellerService {

  
  private baseURL= 'http://localhost:8080/api/sellers';

  constructor( private http: HttpClient) { }

  insertSeller(seller: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`, seller);
  }

  updateSeller(id:number, seller: Object): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, seller);
  }

  getSellerList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  deleteSeller(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }
  getSellerById(id: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`);
  }
  getSellerByUsername(username: string) : Observable<any>{
    return this.http.get(`${this.baseURL}/searchByUsername/${username}`);
  }
 
  getSellerByName(name: string): Observable<any>{
    return this.http.get(`${this.baseURL}/searchByName/${name}`);
  }

  getSellerByEmail(email: string): Observable<any> {
    return this.http.get(`${this.baseURL}/searchByEmail/${email}`);
  }
}
