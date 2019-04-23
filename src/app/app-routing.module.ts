import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { CompanyserviceComponent } from './companyservice/companyservice.component';
import { NavComponent } from './layout/nav/nav.component';
import {RegisterComponent} from './login/register/register.component';
import {LoginComponent } from './login/login/login.component'
 
const routes: Routes = [
{path:'',component:HomeComponent,pathMatch:'full'},
{path:'companies',component:CompanyComponent},
{path:'services',component:CompanyserviceComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
export const route = [HomeComponent,CompanyComponent,CompanyserviceComponent, NavComponent,RegisterComponent];
//export const loginRoutes = [RegisterComponent, LoginComponent]