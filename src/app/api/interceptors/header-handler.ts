import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class SetHeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authReq = req.clone({
      setHeaders: {
        accept: 'application/json',
        'x-rapidapi-key': environment.apiKey,
        'x-rapidapi-host': environment.apiHost
      }
    });

    return next.handle(authReq);
  }
}
