import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    const token = username + ":" + password;
    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        "X-Requested-With": "XMLHttpRequest",
        Authorization: 'Basic ' + btoa(token)
      }
    });

    return next.handle(request).pipe(catchError(err => {
      if (err instanceof HttpErrorResponse) {
        switch (err.status) {
          case 401:
            alert("Wrong username or password");
            break;
          case 404:
            alert("Message not found!");
            break;
          case 409:
            alert("This message belongs to another user. You are not authorized to update/delete it.");
            break;
          default:
            break;
        }
        return new Observable<HttpEvent<any>>();
      }
    }));
  }
}