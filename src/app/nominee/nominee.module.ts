import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNomineeComponent } from './add-nominee/add-nominee.component';
import { EditNomineeComponent } from './edit-nominee/edit-nominee.component';
import { ListNomineeComponent } from './list-nominee/list-nominee.component';
import { ViewNomineeComponent } from './view-nominee/view-nominee.component';



@NgModule({
  declarations: [
    AddNomineeComponent,
    EditNomineeComponent,
    ListNomineeComponent,
    ViewNomineeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddNomineeComponent,
    EditNomineeComponent,
    ListNomineeComponent
  ]
})
export class NomineeModule { }
