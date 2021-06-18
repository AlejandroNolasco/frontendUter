import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  
  private baseURL= 'http://localhost:8080/api/customers';

  constructor( private http: HttpClient) { }

  insertCustomer(customer: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`, customer);
  }

  updateCustomer(id:number, customer: Object): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, customer);
  }

  getCustomerList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  deleteCustomer(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }
  getCustomerById(id: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`);
  }
  getCustomerByUsername(username: string) : Observable<any>{
    return this.http.get(`${this.baseURL}/searchByUsername/${username}`);
  }
 
  getCustomerByName(name: string): Observable<any>{
    return this.http.get(`${this.baseURL}/searchByName/${name}`);
  }

  getCustomerByEmail(email: string): Observable<any> {
    return this.http.get(`${this.baseURL}/searchByEmail/${email}`);
  }

  /*getRolList(): Observable<any> {
    return this.http.get(`${}`)
  }*/
  
}
