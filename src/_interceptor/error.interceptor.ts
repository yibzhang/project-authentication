import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from './../_service/authentication.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
  constructor(private authenticationService: AuthenticationService){};

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    return next.handle(request).pipe(
      // pipe response, to catchError
      catchError(
        err => {
          if(err.status == 401){
            this.authenticationService.logout();                
            location.reload(true);
          }
        return throwError(err.error.message || err.statusText);
        }
      )

    );
  }
}
