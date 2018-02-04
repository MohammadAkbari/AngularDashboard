import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { isPlatformServer, isPlatformBrowser } from '@angular/common';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Credential } from './credential.model';

@Injectable()
export class UserManager {

    tokenKey = "auth_token";

    constructor(private http: Http,
                @Inject("BASE_URL") private baseUrl: string,
                @Inject(PLATFORM_ID) private platformId: Object) {

      if (isPlatformBrowser(this.platformId)) {
        this.loggedIn = !!localStorage.getItem(this.tokenKey);
      }
    }

    private loggedIn = false;

    login(username: string, password: string): Observable<boolean>{

        return this.http.post(this.baseUrl + "api/auth/login",
        {
            username: username,
            password: password
        })
        .map(response => {

            var credential = response.json() as Credential;

            localStorage.setItem(this.tokenKey, credential.token);

            this.loggedIn = true;

            return true;
          })
          .catch(error => {
              console.log(error);
              return Observable.throw(error.json().error || "Server error");
          });
    }

    isLoggedIn() {
      return this.loggedIn;
    }
}