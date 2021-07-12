import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminTransactionListComponent } from './admin-transaction-list/admin-transaction-list.component';
import { AdminCustomersListComponent } from './admin-customers-list/admin-customers-list.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminTransactionListComponent,
    AdminCustomersListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AdminDashboardComponent
  ]
})
export class AdminModule { }
