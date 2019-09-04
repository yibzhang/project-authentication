import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FakeBackendInterceptor } from './fake-backend';
import { JwtInterceptor } from './jwt.interceptor';

export const httpInterceptorProvider = [
  {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true},
];

