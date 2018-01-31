import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './components/app/app.component';
import { FileUploaderComponent } from "./components/fileupload/fileuploader.component"
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { ProductsComponent } from './components/products/products.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { CreateEmployeeComponent } from "./components/employees/createemployee.component";


import { ProductRepository } from "./model/product.repository";
import { EmployeeRepository } from "./model/employee.repository";
import { AddressRepository } from "./model/address.repository";


@NgModule({
    declarations: [
        AppComponent,
        FileUploaderComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        ProductsComponent,
        EmployeesComponent,
        CreateEmployeeComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        BrowserModule,
        NgbModule.forRoot(),
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent, data: { title: "Home" } },
            { path: 'counter', component: CounterComponent, data: { title: 'Counter' } },
            { path: 'fetch-data', component: FetchDataComponent, data: { title: 'Fetch Data' } },
            { path: 'products', component: ProductsComponent, data: { title: 'Products' } },
            { path: 'employees', component: EmployeesComponent, data: { title: 'Employees' } },
            { path: 'employees/create', component: CreateEmployeeComponent, data: { title: 'Create Employee' } },
            { path: '**', redirectTo: 'home'  }
        ])
    ],
    providers: [ProductRepository, EmployeeRepository, AddressRepository]
})
export class AppModuleShared {
}