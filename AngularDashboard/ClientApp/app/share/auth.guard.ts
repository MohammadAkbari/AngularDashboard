import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserManager } from './user.manager';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private user: UserManager, private router: Router) { }

    canActivate() {

        if (!this.user.isLoggedIn()) {
            this.router.navigate(["/account/login"]);
            return false;
        }

        return true;
    }
}