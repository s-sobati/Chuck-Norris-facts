import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SetHeaderInterceptor } from './header-handler';
import { ErrorHandlerInterceptor } from './error-handler';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: SetHeaderInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true },
];
