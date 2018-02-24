import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthGuard2 } from "./share/auth.guard";
import { UserManager } from './share/user.manager';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        BrowserModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', canLoad: [AuthGuard2], loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'account', loadChildren: './account/account.module#AccountModule' },
            { path: '**', redirectTo: 'home'  }
        ])
    ],
    providers: [UserManager, AuthGuard2]
})
export class AppModuleShared {

}