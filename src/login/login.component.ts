import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

import { UserService } from './../_service/user.service';
import { User } from '../_model/User';

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
              private userService: UserService ) { }

  ngOnInit() {
  }

  onSubmit(){
    //console.log(this.loginFormGroup.value);
    return this.userService.userLogin(this.loginFormGroup.value).subscribe(
      res => console.log(res),
      err => console.log(err),
    );
  }

}