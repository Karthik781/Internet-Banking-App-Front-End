import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewUserComponent } from './view-user/view-user.component';



@NgModule({
  declarations: [
    AddUserComponent,
    EditUserComponent,
    ViewUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    AddUserComponent,
    EditUserComponent
  ]
})
export class UsersModule { }
