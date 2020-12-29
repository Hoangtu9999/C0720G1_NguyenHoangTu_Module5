import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {IStudent} from '../model/IStudent';


@Injectable({
  providedIn : "root"
})

export class StudentService {


  constructor(
    private http: HttpClient
  ) {}

  private  baseURL = 'http://localhost:3000/studentList';

  getAll(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this.baseURL).pipe();
  }
}
