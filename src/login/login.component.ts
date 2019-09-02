import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

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
  
  /*loginFormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });*/
  
  constructor(private loginFormBuilder : FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.loginFormGroup.value);
  }

}