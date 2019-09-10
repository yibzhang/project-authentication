import { Component } from '@angular/core';
import { AuthenticationService } from './../_service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css']
})
export class AppComponent  {
  public isCollapsed = true;

  constructor(private authenticationService: AuthenticationService,
              private router: Router
  ){};
  
}
