import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class RolService {

  private baseURL= 'http://localhost:8080/api/rol';

  constructor( private http: HttpClient) { }

  insertRol(rol: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`, rol);
  }

  updateRol(id:number, rol: Object): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, rol);
  }

  getRolList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  deleteRol(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getRolById(id: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`);
  }
  
}
