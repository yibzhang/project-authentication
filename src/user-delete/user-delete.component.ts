import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { LogService } from './../_service/log.service';
import { UserService } from './../_service/user.service';
import { AuthenticationService } from './../_service/authentication.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {
  private loading: boolean = false;
  private email: string = 'N/A';

  constructor(
    private userService: UserService,
    private logService: LogService,
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.loading = false;
    this.email = this.authenticationService.currentUserValue.email;
  }

  deleteUser(){
    this.loading = true;    
    this.userService.delete(this.email).subscribe(
      res => {
        this.loading = false;
        this.logService.clearErrors();
        this.logService.clearLogs();
        this.logService.addLogs(res.body.message);
        this.authenticationService.logout();
        this.router.navigate([res.url]);
        //console.log(res.body.message);
      },
      err => {
        this.loading = false;
        this.logService.clearErrors();
        this.logService.clearLogs();
        this.logService.addErrors(err.error);
        //console.log(err);
      },
    );
  }
}