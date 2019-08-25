import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerFormGroup : FormGroup;

  constructor(private registerFormBuilder : FormBuilder) { }

  ngOnInit() {
    this.registerFormGroup = this.registerFormBuilder.group({
      email           : ['', Validators.required],
      password        : ['', Validators.required],
      confirmpassword : ['', Validators.required]
    }); 
  }

}