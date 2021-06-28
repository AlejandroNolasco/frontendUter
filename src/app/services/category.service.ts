import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  
  private baseURL= 'http://localhost:8080/api/categories';

  constructor( private http: HttpClient) { }

  insertCategory(seller: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`, seller);
  }

  updateCategory(id:number, category: Object): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, category);
  }

  getCategoryList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  deleteCategory(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }
  getCateogoryById(id: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`);
  }
  getCategoryByUsername(username: string) : Observable<any>{
    return this.http.get(`${this.baseURL}/searchByUsername/${username}`);
  }
 
  getSellerByName(username: string): Observable<any>{
    return this.http.get(`${this.baseURL}/searchByName/${name}`);
  }

//   getSellerByEmail(email: string): Observable<any> {
//     return this.http.get(`${this.baseURL}/searchByEmail/${email}`);
//   }
}
