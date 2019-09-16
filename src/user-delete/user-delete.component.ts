import { Component, OnInit } from '@angular/core';
import { LogService } from './../_service/log.service';
import { UserService } from './../_service/user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {
  private loading: boolean;

  constructor(
    private userService: UserService,
    private logService: LogService) { }

  ngOnInit() {
  }

  deleteUser(){
    console.log('delete User');
  }
}