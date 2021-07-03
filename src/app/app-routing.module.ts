import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ViewCustomerComponent } from './customer/view-customer/view-customer.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'authenticate', component: LoginComponent },
  { path: 'view-customer', component: ViewCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
