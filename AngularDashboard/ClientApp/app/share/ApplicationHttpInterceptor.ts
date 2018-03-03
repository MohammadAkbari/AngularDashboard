import { HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse, HttpHandler, HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserManager } from './user.manager';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

@Injectable()
export class MyHttpLogInterceptor implements HttpInterceptor {

    constructor(private router: Router, private user: UserManager) { }

    private handleAuthError(err: HttpErrorResponse): Observable<any> {

        if (err.status === 401 || err.status === 403) {

            this.user.reset();
            this.router.navigate(["/account"]);
            return Observable.of(err.message);
        }
        return Observable.throw(err);
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.user.getToken()}`
            }
        });

        return next
            .handle(request)
            .do((ev: HttpEvent<any>) => {
                console.log('HttpEvent', ev);
            })
            .catch(response => this.handleAuthError(response))
            .catch(response => {
                console.log("HERE");
                return Observable.throw(response);
            });
    }
}