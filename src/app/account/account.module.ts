import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAccountComponent } from './add-account/add-account.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { ListAccountComponent } from './list-account/list-account.component';
import { ViewAccountComponent } from './view-account/view-account.component';



@NgModule({
  declarations: [
    AddAccountComponent,
    EditAccountComponent,
    ListAccountComponent,
    ViewAccountComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddAccountComponent,
    EditAccountComponent,
    ListAccountComponent
  ]
})
export class AccountModule { }
