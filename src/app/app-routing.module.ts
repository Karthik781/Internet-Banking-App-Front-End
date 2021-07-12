import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAccountComponent } from './account/add-account/add-account.component';
import { ViewAccountComponent } from './account/view-account/view-account.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { AddBeneficiaryComponent } from './beneficiary/add-beneficiary/add-beneficiary.component';
import { EditBeneficiaryComponent } from './beneficiary/edit-beneficiary/edit-beneficiary.component';
import { ViewBeneficiaryComponent } from './beneficiary/view-beneficiary/view-beneficiary.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { ViewCustomerComponent } from './customer/view-customer/view-customer.component';
import { HomeViewComponent } from './home/home-view/home-view.component';
import { SucessComponent } from './shared/sucess/sucess.component';
import { AddTransactionComponent } from './transaction/add-transaction/add-transaction.component';
import { ListTransactionComponent } from './transaction/list-transaction/list-transaction.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'authenticate', component: LoginComponent },
  { path: 'view-customer', component: ViewCustomerComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent},
  { path: '', component: HomeViewComponent },
  { path: 'add-account/:customerId', component:AddAccountComponent },
  { path: 'view-account/:id', component: ViewAccountComponent },
  { path: 'add-beneficiary', component: AddBeneficiaryComponent},
  { path: 'view-transactions/:id', component: ListTransactionComponent},
  { path: 'view-beneficiary/:id', component: ViewBeneficiaryComponent},
  { path: 'edit-beneficiary/:id', component: EditBeneficiaryComponent},
  { path: 'transaction/:id', component: AddTransactionComponent},
  { path: 'logout', component: LogoutComponent },
  { path: 'edit-customer/:id', component: EditCustomerComponent},
  { path: 'success', component:SucessComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    paramsInheritanceStrategy: 'always'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
