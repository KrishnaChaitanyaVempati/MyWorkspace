import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = localStorage.getItem('JWT_Token');
    console.log('intercepting router url' + this.router.url);
    if (!(this.router.url.includes('login') || !this.router.url.includes('signup') || !this.router.url.includes('homeLogin'))) {
      if (token) {
        console.log('intercepting router url token' + token);
        const authReq = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
        return next.handle(authReq);
      }
    }
    return next.handle(request);

  }
}
