import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from './../_service/authentication.service';
import { User } from './../_model/user';

@Injectable()
export class JwtInterceptor implements HttpInterceptor{
  constructor(private authenticationService: AuthenticationService){};

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    console.log('Jwt Request');
    console.log(request);

    let currentUser = this.authenticationService.currentUserValue;

    if(currentUser && currentUser.token){
      request = request.clone({
        setHeaders: {Authorization: `Bearer ${currentUser.token}`}
      });
    }
    return next.handle(request);
  }
}