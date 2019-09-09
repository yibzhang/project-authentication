import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// Routers
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './../_guard/auth.guard';
// Forms
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './../login/login.component';
import { RegisterComponent } from './../register/register.component';
import { UserDetailComponent } from './../user-detail/user-detail.component';
import { ProductComponent } from './../product/product.component';
import { ValidatorPrintErrorComponent } from './../validator/validator-print-error.component';
import { ErrorComponent } from './../error/error.component';
// Interceptors
import { httpInterceptorProvider } from './../_interceptor';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'userDetail', component: UserDetailComponent, canActivate: [AuthGuard]},
  { path: 'product', component: ProductComponent}
]

@NgModule({
  imports:      [ 
                  BrowserModule,
                  NgbModule,
                  HttpClientModule,
                  RouterModule.forRoot(routes, {enableTracing: true}),
                  FormsModule, 
                  ReactiveFormsModule
                ],
  providers:    [ 
                  AuthGuard,
                  httpInterceptorProvider 
                ],

  declarations: [ 
                  AppComponent, 
                  LoginComponent,
                  RegisterComponent,
                  UserDetailComponent,
                  ProductComponent,
                  ValidatorPrintErrorComponent,
                  ErrorComponent
                ],

  bootstrap:    [ 
                  AppComponent 
                ]
})

export class AppModule { }
