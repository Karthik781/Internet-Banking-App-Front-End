import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddAccountComponent } from './add-account/add-account.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { ListAccountComponent } from './list-account/list-account.component';
import { ViewAccountComponent } from './view-account/view-account.component';
import { NomineeModule } from '../nominee/nominee.module';
import { Router, RouterModule } from '@angular/router';
import { AccountDataService } from '../shared/AccountDataService';
import { BeneficiaryModule } from '../beneficiary/beneficiary.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    AddAccountComponent,
    EditAccountComponent,
    ListAccountComponent,
    ViewAccountComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    RouterModule,
    NomineeModule,
    BeneficiaryModule
  ],
  exports: [
    AddAccountComponent,
    EditAccountComponent,
    ListAccountComponent,
    ViewAccountComponent
  ],
  providers: [
    AccountDataService
  ]
})
export class AccountModule { }
