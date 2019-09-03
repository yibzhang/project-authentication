import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './../_model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {  
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  currentUserTag = 'ecommerce-current-user';

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem(this.currentUserTag)));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(user: User){
    return this.http
  }

  logout(){}
}