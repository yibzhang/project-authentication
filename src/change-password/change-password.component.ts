import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../_service/authentication.service'
import { LogService } from './../'

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  private email: string = 'N/A';

  constructor(private authenticationService: AuthenticationService) {
    this.email = this.authenticationService.currentUserValue.email;
  }

  ngOnInit() {
  }

}