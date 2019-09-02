import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { ProductComponent } from './../product/product.component';
// Interceptors
import { httpInterceptorProvider } from './../_interceptor';

const routes : Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'userDetail', component: UserDetailComponent},
  { path: 'product', component: ProductComponent}
]

@NgModule({
  imports:      [ BrowserModule,
                  NgbModule,
                  HttpClientModule,
                  RouterModule.forRoot(routes, {enableTracing: true}),
                  FormsModule, 
                  ReactiveFormsModule],
  providers:    [ httpInterceptorProvider],

  declarations: [ AppComponent, 
                  LoginComponent,
                  RegisterComponent,
                  UserDetailComponent,
                  ProductComponent],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
