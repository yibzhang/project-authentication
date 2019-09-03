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
  create(){}
  // Read all users information: for testing
  read(): Observable<User[]>{
    const url = `${environment.apiUrl}/users`;
    return this.http.get<User[]>(url).pipe();
  } 
  update(){}
  delete(){}

  // Login
  userLogin(user: User): Observable<User>{
    console.log(user);
    const url = `${environment.apiUrl}/users/authenticate`;
    return this.http.post<User>(url, user, httpOptions).pipe();
  }
}