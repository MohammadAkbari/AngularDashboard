import { Component } from "@angular/core";
import { Router } from '@angular/router';

import { LoginModel } from "./../../model/login.model";
import { UserManager } from "./../../../share/user.manager";

@Component({
    selector: "login",
    templateUrl: "./login.component.html"
})
export class LoginComponent {

    constructor(private userManager: UserManager, private router: Router) {}

    model = new LoginModel();

    onSubmit() {

      this.userManager.login(this.model.username, this.model.password)
        .subscribe(response => {
            if (response) {
              this.router.navigate(["/dashboard"]);
            }
        });
    }
}