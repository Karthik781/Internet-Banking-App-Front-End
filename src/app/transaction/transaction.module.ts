import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { EditTransactionComponent } from './edit-transaction/edit-transaction.component';
import { ListTransactionComponent } from './list-transaction/list-transaction.component';
import { ViewTransactionComponent } from './view-transaction/view-transaction.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddTransactionComponent,
    EditTransactionComponent,
    ListTransactionComponent,
    ViewTransactionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule 
  ],
  exports: [
    AddTransactionComponent,
    EditTransactionComponent,
    ListTransactionComponent
  ]
})
export class TransactionModule { }
