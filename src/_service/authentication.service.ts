import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './../_model/user';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {  
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  //currentUserTag = 'ecommerce-current-user';

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem(environment.currentUserTag)));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(){
    return this.currentUserSubject.value;
  }

  login(user: User): Observable<any>{
    const url = `${environment.apiUrl}/users/authenticate`;
    return this.http.post<any>(url, user,
      { headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'my-auth-token'}),
        observe: 'response'}
    ).pipe(
      map(res => {
        if(res.body.user && res.body.user.token){
          localStorage.removeItem(environment.currentUserTag);
          localStorage.setItem(environment.currentUserTag, JSON.stringify(res.body.user));
          this.currentUserSubject.next(res.body.user);
        }
        return res;
      }),
    );
  }

  logout(){
    localStorage.removeItem(environment.currentUserTag);
    this.currentUserSubject.next(null);
  }
}