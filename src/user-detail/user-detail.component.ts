import { Component, OnInit } from '@angular/core';
import { User } from './../model/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userDetail : User;

  constructor() {
    this.userDetail = new User();
    this.userDetail.email    = 'N/A';
    this.userDetail.password = 'N/A';
  }

  ngOnInit() {
  }

}