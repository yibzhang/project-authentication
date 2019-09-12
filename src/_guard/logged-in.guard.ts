import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './../_service/authentication.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class LoggedInGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ){};

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.authenticationService.loggedInStatus){
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}