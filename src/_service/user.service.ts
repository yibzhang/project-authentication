import { Injectable } from '@angular/core';
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
  rootUrl = "https://my-json-server.typicode.com/yibzhang/demo";

  constructor(private http: HttpClient) { }

  // crud
  create(){}
  // Read all users information: for testing
  read(): Observable<User[]>{
    const url = `${this.rootUrl}/users`;
    return this.http.get<User[]>(url).pipe();
  } 
  update(){}
  delete(){}

  // Login
  userLogin(user: User): Observable<User>{
    console.log(user);
    const url = `${this.rootUrl}/users/authenticate`;
    return this.http.post<User>(url, user, httpOptions).pipe();
  }
}