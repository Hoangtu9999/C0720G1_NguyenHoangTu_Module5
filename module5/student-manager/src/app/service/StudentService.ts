import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {IStudent} from '../model/IStudent';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class StudentService {


  constructor(
    private http: HttpClient
  ) {
  }

  private baseURL = 'http://localhost:3000/studentList';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getAll(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this.baseURL).pipe();
  }

  create(students): Observable<IStudent> {
    return this.http.post<IStudent>(this.baseURL, JSON.stringify(students), this.httpOptions);
  }

  getById(id): Observable<IStudent> {
      return this.http.get<IStudent>(this.baseURL + '/' + id)
      .pipe(catchError(this.errorHandler));
  }

  update(id, student): Observable<IStudent> {
    return this.http.put<IStudent>(this.baseURL + '/' + id, JSON.stringify(student), this.httpOptions)
      .pipe(catchError(this.errorHandler)
      );
  }
  delete(id) {
    return this.http.delete<IStudent>(this.baseURL + '/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


}
