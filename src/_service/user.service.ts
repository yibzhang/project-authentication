import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
// http
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
  private headers: HttpHeaders = new HttpHeaders()
                                    .set('Content-Type', 'application/json')
                                    .set('Authorization', 'my-auth-token');

  constructor(private http: HttpClient) {
  }

  // crud
  create(user: User): Observable<any>{
    return this.http.post<any>(
      environment.apiUrl + '/users',
      user,
      {
        headers: this.headers,
        observe: 'response'
      },
    )
  }

  read(email: string): Observable<any>{
    return this.http.get<any>(
      environment.apiUrl + '/users',
      {
        headers: this.headers,
        observe: 'response',
        params: new HttpParams().set('email', email),
      },
    );
  }

  update(user: User){
    return this.http.put<any>(
      environment.apiUrl + '/users',
      user,
      {
        headers: this.headers,
        observe: 'response',
      },
    );
  }

  dele(email: string){
    return this.http.delete<any>(
      environment.apiUrl + '/users',
      {
        headers: this.headers,
        observe: 'response',
        params: new HttpParams().set('email', email),
      },
    );
  }
}