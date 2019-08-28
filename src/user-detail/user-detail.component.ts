import { Component, OnInit } from '@angular/core';
// servie
import { UserService } from './../service/user.service';
// model
import { User } from './../model/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userDetail: User;
  users: User[];

  constructor(private userService: UserService) {
    this.userDetail = new User();
    this.userDetail.email    = 'N/A';
    this.userDetail.password = 'N/A';
  }

  ngOnInit() {
  }

  getAllUsers(){
    this.userService.read().subscribe(
      (users: User[]) => {this.users = users}
    );
  } 

}