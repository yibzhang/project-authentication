import { Component, OnInit } from '@angular/core';
// servie
import { AuthenticationService } from './../_service/authentication.service';
// model
import { User } from './../_model/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userDetail: User;

  constructor(private authenticationService: AuthenticationService) {
    this.userDetail = new User();
    this.userDetail.email    = 'N/A';
    this.userDetail.password = 'N/A';
  }

  ngOnInit() {
    this.userDetail = this.authenticationService.currentUserValue;
  }
}