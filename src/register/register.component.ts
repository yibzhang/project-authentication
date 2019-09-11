import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

import { forbiddenNameValidator,confirmPasswordValidator } from './../validator/custom.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private loading: boolean;

  registerFormGroup = this.registerFormBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email, forbiddenNameValidator(/fuck/i)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required])
  }, {
    validator: confirmPasswordValidator('password', 'confirmPassword'),
  });

  constructor(private registerFormBuilder: FormBuilder) { }

  ngOnInit(){
    this.loading = false;
  }

  register(){
    this.loading = true;
    console.log(this.registerFormGroup.value)
  }
}