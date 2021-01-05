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
      return this.http.get<ICustomer[]>(this.baseURL);
  }

  findById(id): Observable<ICustomer> {
    return this.http.get<ICustomer>(this.baseURL + '/' + id).pipe();
  }

  save(customer): Observable<ICustomer> {
      return this.http.post<ICustomer>(this.baseURL , JSON.stringify(customer), this.httpOptions)
  }

  update(id,customer) {
    return this.http.put<ICustomer>(this.baseURL + '/' + id, JSON.stringify(customer), this.httpOptions)
      .pipe();
  }
  delete(id) {
    return this.http.delete<ICustomer>(this.baseURL + '/' + id, this.httpOptions)
      .pipe();
  }

  //search by name
  // searchByName(name): Observable<ICustomer[]>{
  //     return this.http.get<ICustomer[]>(this.baseURL + '?name_like=' + name, this.httpOptions);
  // }
  searchAll(keyword): Observable<ICustomer[]>{
    return this.http.get<ICustomer[]>(this.baseURL + '?q=' + keyword, this.httpOptions);
  }
}
