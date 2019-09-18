import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// Routers
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from './../_guard/logged-in.guard';
import { NotLoggedInGuard } from './../_guard/not-logged-in.guard';
// Forms
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './../login/login.component';
import { FindPasswordComponent } from './../find-password/find-password.component';
import { ChangePasswordComponent } from './../change-password/change-password.component';
import { RegisterComponent } from './../register/register.component';
import { UserDetailComponent } from './../user-detail/user-detail.component';
import { UserDeleteComponent } from './../user-delete/user-delete.component';
import { ValidatorPrintErrorComponent } from './../validator/validator-print-error.component';
import { ErrorComponent } from './../error/error.component';
import { MessageComponent } from './../message/message.component';
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';

import { ProductComponent } from './../product/product.component';
import { ProductCardComponent } from './../product-card/product-card.component';

// Interceptors
import { httpInterceptorProvider } from './../_interceptor';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [NotLoggedInGuard]},
  { path: 'login', component: LoginComponent, canActivate: [NotLoggedInGuard]},
  { path: 'findpassword', component: FindPasswordComponent, canActivate: [NotLoggedInGuard]},
  { path: 'changepassword', component: ChangePasswordComponent, canActivate: [LoggedInGuard]},
  { path: 'register', component: RegisterComponent, canActivate: [NotLoggedInGuard]},
  { path: 'userDetail', component: UserDetailComponent, canActivate: [LoggedInGuard]},
  { path: 'userDelete', component: UserDeleteComponent, canActivate: [LoggedInGuard]},
  { path: 'product', component: ProductComponent},
  { path: 'productCard', component: ProductCardComponent},
  { path: '**', component: PageNotFoundComponent},
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
                  NotLoggedInGuard,
                  LoggedInGuard,
                  httpInterceptorProvider 
                ],

  declarations: [ 
                  AppComponent, 
                  LoginComponent,
                  FindPasswordComponent,
                  ChangePasswordComponent,
                  RegisterComponent,
                  UserDetailComponent,
                  UserDeleteComponent,
                  ProductComponent,
                  ProductCardComponent,
                  ValidatorPrintErrorComponent,
                  ErrorComponent,
                  MessageComponent,
                  PageNotFoundComponent
                ],

  bootstrap:    [ 
                  AppComponent 
                ]
})

export class AppModule { }
