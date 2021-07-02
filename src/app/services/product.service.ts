import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class ProductService{

    private baseURL= 'http://localhost:8080/api/products';

    constructor(private http: HttpClient){}

    insertProducts(product: Object): Observable<Object>{
        return this.http.post(`${this.baseURL}`,product)
    }
    updateProducts(id:number, product: Object): Observable<Object>{
        return this.http.put(`${this.baseURL}/${id}`, product);
      }
    
    getProductsList(): Observable<any>{
        return this.http.get(`${this.baseURL}`);
    }
    getProductsByName(name:string): Observable<any>{
        return this.http.get(`${this.baseURL}/${name}`);
    }
    getProductsById(id:number): Observable<any>{
        return this.http.get(`${this.baseURL}/${id}`);
    }
    deleteProducts(id: number): Observable<any>{
        return this.http.delete(`${this.baseURL}/${id}`);
    }
}