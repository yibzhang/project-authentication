import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of} from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

let users = [{id:1 , email: "test@test.com", password: "00000000"}];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor{
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
        default:
          return throwError(new HttpErrorResponse({
            status: 404,
            statusText: "Page not found"
          }));
          //return next.handle(request);
      }
    }

    function authenticate(){
      const {email, password} = body;
      const user = users.find(x => x.email === email);
      if(user){
        if(user.password == password) 
          return of(new HttpResponse({
            body: {user: {id: user.id, email: user.email, token: 'fake-jwt-token'}},
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
   
  }
}