import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
// Routers
import { RouterModule, Routes } from '@angular/router';
// Forms
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './../login/login.component';
import { RegisterComponent } from './../register/register.component';
import { UserDetailComponent } from './../user-detail/user-detail.component';

const routes : Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'userDetail', component: UserDetailComponent}
]

@NgModule({
  imports:      [ BrowserModule,
                  NgbModule,
                  RouterModule.forRoot(routes, {enableTracing: true}),
                  FormsModule, 
                  ReactiveFormsModule],

  declarations: [ AppComponent, 
                  LoginComponent,
                  RegisterComponent,
                  UserDetailComponent],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
