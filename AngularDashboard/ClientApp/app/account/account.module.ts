import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: "",
                component: AppComponent,
                children: [
                    { path: "", redirectTo: 'login', pathMatch: 'full' },
                    { path: "login", component: LoginComponent, data: { title: "Login" } },
                    { path: "**", redirectTo: "login" }
                ]
            }
        ])
    ]
})
export class AccountModule {
}