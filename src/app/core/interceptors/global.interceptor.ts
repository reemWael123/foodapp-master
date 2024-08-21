import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
const baseUrl='https://upskilling-egypt.com:3006/api/v1/'
const mytoken=localStorage.getItem('userToken')

    let newRwq=request.clone({
  url:baseUrl+request.url,
  setHeaders:{
    Authorization:`${mytoken}`
  
    }
})
    return next.handle(newRwq);
  }
}
