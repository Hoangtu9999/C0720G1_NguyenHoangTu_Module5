import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICustomer} from '../model/ICustomer';
import {ICustomerType} from '../model/ICustomerType';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {

  private baseURL = ' http://localhost:3000/customerType';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<ICustomerType[]> {
    return this.http.get<ICustomerType[]>(this.baseURL).pipe();
  }
}
