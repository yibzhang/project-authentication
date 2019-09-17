import { Component, OnInit } from '@angular/core';
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
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.loading = false;
    this.email = this.authenticationService.currentUserValue.email;
  }

  deleteUser(){
    //console.log('delete User');
    this.userService.delete(this.email).subscribe(
      res => {console.log(res);},
      err => {console.log(err);},
    );
  }
}