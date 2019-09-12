import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
// http
import { HttpClient, HttpHeaders } from '@angular/common/http';
// rxjs
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
// Model
import { map } from 'rxjs/operators';
import { User } from './../_model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) { }

  // crud
  create(user: User): Observable<any>{
    const url = `${environment.apiUrl}/users/create`
    return this.http.post<any>(url, user,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'my-auth-token' }),
        observe: 'response'
      }
    ).pipe(
      // register successfully
    );
  }

  read(email: string): Observable<any>{
    const url = `${environment.apiUrl}/users/read?email=${email}`;
    return this.http.get<any>(url,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'my-auth-token' }),
        observe: 'response'
      }
    ).pipe(
      // Get users successfully
    );
  }

  update(){}
  delete(){}
}