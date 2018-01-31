import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { ProductsComponent } from './components/products/products.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { CreateTopicComponent } from "./components/employees/createemployee.component";

import { ProductRepository } from "./model/product.repository";
import { EmployeeRepository } from "./model/employee.repository";
import { AddressRepository } from "./model/address.repository";


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        ProductsComponent,
        EmployeesComponent,
        CreateTopicComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        NgbModule.forRoot(),
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'products', component: ProductsComponent },
            { path: 'employees', component: EmployeesComponent },
            { path: 'employees/create', component: CreateTopicComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [ProductRepository, EmployeeRepository, AddressRepository]
})
export class AppModuleShared {
}
