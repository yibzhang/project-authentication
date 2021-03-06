import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from './../_model/user';
import { AuthenticationService } from './../_service/authentication.service';
import { LogService } from './../_service/log.service';
import { UserService } from './../_service/user.service';


import { forbiddenNameValidator,confirmPasswordValidator } from './../validator/custom.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  private loading: boolean = false;
  private email: string = 'N/A';
  private changePasswordFormGroup = this.formBuilder.group({
    oldPassword: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  }, {
    validator: confirmPasswordValidator('password', 'confirmPassword'), 
  });

  constructor(private rotuer: Router,
              private authenticationService: AuthenticationService,
              private logService: LogService,
              private userService: UserService,
              private formBuilder: FormBuilder) {
    this.email = this.authenticationService.currentUserValue.email;
  }

  ngOnInit() {
    this.loading = false;
  }

  changePassword(){
    this.loading = true;
    let user: User = {
      email: this.email,
      oldPassword: this.changePasswordFormGroup.controls['oldPassword'].value,
      password: this.changePasswordFormGroup.controls['password'].value,
    };

    this.userService.update(user).subscribe(
      res => {
        this.loading = false;
        this.logService.clearErrors();
        this.logService.clearLogs();
        this.logService.addLogs(res.body.message);
        // Password changed successfully, jump to userDetail page
        this.rotuer.navigate([res.url]);
        //console.log(res);
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