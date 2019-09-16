import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { LogService } from './../_service/log.service';
import { UserService } from './../_service/user.service';

@Component({
  selector: 'app-find-password',
  templateUrl: './find-password.component.html',
  styleUrls: ['./find-password.component.css']
})
export class FindPasswordComponent implements OnInit {
  private loading: boolean;

  findPasswordFormGroup = this.findPasswordFormBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private findPasswordFormBuilder: FormBuilder,
              private userService: UserService,
              private logService: LogService) { }

  ngOnInit() {
    this.loading = false;
  }

  onSubmit(){
    this.loading = true;
    var email = this.findPasswordFormGroup.controls['email'].value;

    this.userService.read(email).subscribe(
      res => {
        this.loading = false;
        this.logService.clearErrors();
        this.logService.clearLogs();
        this.logService.addLogs(res.body.message);
      },
      err => {
        this.loading = false;
        this.logService.clearErrors();
        this.logService.addErrors(err.error);
      },
    );
  }
}