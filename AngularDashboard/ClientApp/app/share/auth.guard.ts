import { Injectable } from '@angular/core';
import { Router, Route, CanActivate, CanLoad } from '@angular/router';
import { UserManager } from './user.manager';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private user: UserManager, private router: Router) { }

    canActivate() {

        if (!this.user.isLoggedIn()) {
            this.router.navigate(["/account"]);
            return false;
        }

        return true;
    }
}

@Injectable()
export class AuthGuard2 implements CanLoad {

    constructor(private user: UserManager, private router: Router) { }

    canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {

        if (!this.user.isLoggedIn()) {
            this.router.navigate(["/account"]);
            return false;
        }

        return true;
    }
}