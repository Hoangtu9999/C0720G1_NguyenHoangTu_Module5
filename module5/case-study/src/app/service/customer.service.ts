import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ICustomer} from '../model/ICustomer';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http: HttpClient
  ) { }

  private baseURL = 'http://localhost:3000/customers';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getAll(): Observable<ICustomer[]> {
      return this.http.get<ICustomer[]>(this.baseURL).pipe();
  }

  findById(id): Observable<ICustomer> {
    return this.http.get<ICustomer>(this.baseURL + '/' + id).pipe();
  }

  save(customer): Observable<ICustomer> {
      return this.http.post<ICustomer>(this.baseURL , JSON.stringify(customer), this.httpOptions)
  }
}
