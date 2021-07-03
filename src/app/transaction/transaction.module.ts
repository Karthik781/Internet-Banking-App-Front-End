import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { EditTransactionComponent } from './edit-transaction/edit-transaction.component';
import { ListTransactionComponent } from './list-transaction/list-transaction.component';
import { ViewTransactionComponent } from './view-transaction/view-transaction.component';



@NgModule({
  declarations: [
    AddTransactionComponent,
    EditTransactionComponent,
    ListTransactionComponent,
    ViewTransactionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddTransactionComponent,
    EditTransactionComponent,
    ListTransactionComponent
  ]
})
export class TransactionModule { }
