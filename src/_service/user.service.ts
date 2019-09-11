import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
// http
import { HttpClient, HttpHeaders } from '@angular/common/http';
// rxjs
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
// Model
import { User } from './../_model/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) { }

  // crud
  create(user: User): Observable<any>{
    const url = `${environment.apiUrl}/users/create`
    return this.http.post<User>(url, User, httpOptions);
  }

  // Read all users information: for testing
  read(): Observable<User[]>{
    const url = `${environment.apiUrl}/users`;
    return this.http.get<User[]>(url, httpOptions).pipe();
  } 
  update(){}
  delete(){}
}