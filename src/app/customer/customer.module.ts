import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { AccountModule } from '../account/account.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListCustomerComponent,
    ViewCustomerComponent,
    EditCustomerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AccountModule,
    ReactiveFormsModule
  ],
  exports: [
    ListCustomerComponent,
    ViewCustomerComponent,
    EditCustomerComponent
  ]
})
export class CustomerModule { }
