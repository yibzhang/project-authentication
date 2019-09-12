import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './../_service/authentication.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class NotLoggedInGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ){};

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.authenticationService.loggedInStatus){
      this.router.navigate(['/userDetail']);
      return false;      
    }    
    
    return true;
  }
}