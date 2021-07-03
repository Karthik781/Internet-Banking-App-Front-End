import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';



@NgModule({
  declarations: [
    ListCustomerComponent,
    ViewCustomerComponent,
    EditCustomerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListCustomerComponent,
    ViewCustomerComponent,
    EditCustomerComponent
  ]
})
export class CustomerModule { }
