import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError,retry } from 'rxjs/operators';
import { AuthenticationService } from './../_service/authentication.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
  constructor(private authenticationService: AuthenticationService){};

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    return next.handle(request).pipe(
      retry(1),
      // pipe response, to catchError
      catchError((errorResponse: HttpErrorResponse) => {
        let errorMessage = '';
        // reform error message
        if(errorResponse.error instanceof ErrorEvent){
          // client-side error
          errorMessage = `Client Error: ${errorResponse.error.message}`;
        } else {
          // server-side error
          errorMessage = `Server Error Code: ${errorResponse.status}\nMessage: ${errorResponse.message}`;
        
          // server-side error, check error status
          switch(errorResponse.status){
            case 401:{
              this.authenticationService.logout();
              location.reload(true);
            }
            default:{}
          }
        }

        // TODO : Error Message is not used any where
        return throwError(errorResponse);
      }),
    );
  }
}