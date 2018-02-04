import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { LoginComponent } from './components/login/login.component';
import { UserManager } from './../share/user.manager';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        BrowserModule,
        RouterModule.forChild([
            {
                path: "account",
                component: AppComponent,
                children: [
                    { path: "", redirectTo: 'login', pathMatch: 'full' },
                    { path: "login", component: LoginComponent, data: { title: "Login" } },
                    { path: "**", redirectTo: "login" }
                ]
            }
        ])
    ],
    providers: [UserManager]
})
export class AccountModule {
}