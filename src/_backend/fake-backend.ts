import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError, of} from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

let users = [{id:1 , email: "test1@test.com", password: "12345678"}];
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
          return next.handle(request);
      }
    }

    function authenticate(){
      const {email, password} = body;
      const user = users.find(x => x.email === email && x.password === password);
      return user? okResponse(200, {id: user.id, email: user.email, token: 'fake-jwt-token'}) : errorResponse;      
    }

    function okResponse(res_number: number, res_body?){
      return of(new HttpResponse({status: res_number, body: res_body}));
    }

    function errorResponse(err_message: string){
      return throwError(err_message);
    }

  }
}