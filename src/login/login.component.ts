import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

import { User } from '../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginFormGroup : FormGroup;

  constructor(private loginFormBuilder : FormBuilder) { }

  ngOnInit() {
    this.loginFormGroup = this.loginFormBuilder.group({
      email    : ['', Validators.required],
      password : ['', Validators.required]
    });
  }

  onSubmit(){
    //console.warn(this.userForm.value);
  }

}