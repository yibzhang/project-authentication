import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './../_service/authentication.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService
  ){};

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let currentUser = this.authenticationService.currentUserValue;
    // if currentUser can be found in storage, then user has been logged in, return true
    if(currentUser){
      return true;
    }
    // no user found in storage, return false
    console.log(`auth guard output RouterStateSnapshot: ${state.url}`);
    return false;
  }
}