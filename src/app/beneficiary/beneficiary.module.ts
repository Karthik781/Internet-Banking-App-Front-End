import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { ListBeneficiaryComponent } from './list-beneficiary/list-beneficiary.component';
import { EditBeneficiaryComponent } from './edit-beneficiary/edit-beneficiary.component';
import { ViewBeneficiaryComponent } from './view-beneficiary/view-beneficiary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AddBeneficiaryComponent,
    ListBeneficiaryComponent,
    EditBeneficiaryComponent,
    ViewBeneficiaryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports : [
    AddBeneficiaryComponent,
    ListBeneficiaryComponent,
    EditBeneficiaryComponent
  ]
})
export class BeneficiaryModule { }
