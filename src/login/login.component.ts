import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from './../_service/user.service';
import { AuthenticationService } from './../_service/authentication.service';
import { User } from '../_model/User';

import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginFormGroup = this.loginFormBuilder.group({
      email   : [''],
      password: ['']
    });
  
  constructor(private loginFormBuilder: FormBuilder,
              private router: Router,
              private userService: UserService,
              private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  onSubmit(){
    return this.authenticationService.login(this.loginFormGroup.value)
    .pipe(first())
    .subscribe(
      res => {
        this.router.navigate(['/userDetail']);
      },
      err => console.log(err),
    );
  }

}