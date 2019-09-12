import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from './../_model/user';
import { UserService } from './../_service/user.service';
import { LogService } from './../_service/log.service';

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
              private userService: UserService,
              private logService: LogService,
              private router: Router) { }

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
      res => {
        this.loading = false;
        if(res.status == 200){
          if(res.url)
            this.router.navigate(res.url);
          else
            this.router.navigate(['login']);
        }
      },
      err => {
        this.loading = false;
        this.logService.clearErrors();
        this.logService.addErrors(err.error);
      },
    );
  }
}