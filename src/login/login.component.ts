import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from './../_service/user.service';
import { AuthenticationService } from './../_service/authentication.service';
import { LogService } from './../_service/log.service';
import { User } from '../_model/User';

import { first } from 'rxjs/operators';
import { ValidatorPrintErrorComponent } from './../validator/validator-print-error.component';
import { ErrorComponent } from './../error/error.component';
import { forbiddenNameValidator } from './../validator/custom.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginFormGroup = this.loginFormBuilder.group({
      email   : new FormControl('', [Validators.required, Validators.email, forbiddenNameValidator(/fuck/i)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });

  constructor(private loginFormBuilder: FormBuilder,
              private router: Router,
              private userService: UserService,
              private logService: LogService,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  // TODO: display server return error and jump to userDetail page with user id as url param.
  onSubmit(){
    return this.authenticationService.login(this.loginFormGroup.value)
    .pipe(first())
    .subscribe(
      res => console.log(res),
      err => {
        //console.log(err);
        this.logService.clearErrors();
        this.logService.addErrors(err.error);
      }
    );
  }

}