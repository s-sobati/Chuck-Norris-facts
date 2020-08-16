import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../store';


@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private store: Store<fromRoot.State>) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // handle errors globally
    return next.handle(req).pipe(
      tap(x => x, error => {
        if (error.status === 403 || error.status === 401) {
          // TODO: depends on scenario we could redirect users to login page, etc.
        }
        if (error.status === 500) {
          // TODO: dispatch an action to navigate user to the proper page
        }
        console.error(`Error performing request, status code = ${error.status}`);
      })
    );
  }
}
