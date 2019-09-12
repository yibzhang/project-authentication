import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of} from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { User } from './../_model/user';

//let users = [{id:1 , email: "test@test.com", password: "00000000"}];
let users: User[] = [];
let id_counter: number = 0;

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor{

  constructor(){
    id_counter++;
    var user: User = {
      id:id_counter,
      email:'1@1.com',
      password:'12345678',
      token: 'fake-token'
    };
    users.push(user);
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const {url, method, headers, body} = request;

    return of(null)
    .pipe(mergeMap(routeHandle))
    .pipe(materialize())
    .pipe(delay(500))
    .pipe(dematerialize());
  
    function routeHandle(){
      switch(true){
        case url.endsWith('/users/authenticate') && (method == 'POST'):
          return authenticate();
        case url.endsWith('/users/create') && (method == "POST"):
          return create();
        default:
          return throwError(new HttpErrorResponse({
            status: 404,
            statusText: "Page not found"
          }));
          //return next.handle(request);
      }
    }

    // fake-backend user create
    function create(){
      const {email, password} = body;
      if(users.find(x => x.email == email)){
        return throwError(new HttpErrorResponse({
          error: 'Email has been used'
        }));
      }
      // user email does not exist in db, then add       
      id_counter++;
      var user: User = {
        id:id_counter,
        email:email,
        password:password,
        token: generate_token()
      };
      users.push(user);
      return of(new HttpResponse({
        body: {user: {id: user.id, email: user.email, token: user.token}},
        status: 200,
      }));
    }
    
    // fake-backend user authenticate
    function authenticate(){
      const {email, password} = body;
      const user = users.find(x => x.email === email);
      if(user){
        if(user.password == password) 
          return of(new HttpResponse({
            body: {user: {id: user.id, email: user.email, token: user.token}},
            status: 200,
            url: `/userDetail`
          }));

        return throwError(new HttpErrorResponse({
          error: "Incorrect password"
        }));
      }
      return throwError(new HttpErrorResponse({
        error: "User doesn't exist"
      }));
    }

    function generate_token(){
      return Math.random().toString(36).substring(7);
    }

  }
}