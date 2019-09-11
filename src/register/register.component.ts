import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

import { User } from './../_model/user';
import { UserService } from './../_service/user.service';

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

  constructor(private registerFormBuilder: FormBuilder,
              private userService: UserService) { }

  ngOnInit(){
    this.loading = false;
  }

  register(){
    var user: User = {
      email: this.registerFormGroup.value.email,
      password: this.registerFormGroup.value.password
    };
    this.loading = true;
    this.userService.create(user).subscribe(
      res => {console.log(res)},
      err => {console.log(err)}
    );
  }
}