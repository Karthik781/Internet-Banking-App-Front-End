import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import {DatePipe} from '@angular/common';

import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CustomerModule } from './customer/customer.module';
import { UsersModule } from './users/users.module';
import { AccountModule } from './account/account.module';
import { MatIconModule } from "@angular/material/icon";

import { HomeViewComponent } from './home/home-view/home-view.component';
import { HeaderComponent } from './header/header.component';
import { NomineeModule } from './nominee/nominee.module';
import { AccountDataService } from './shared/AccountDataService';
import { BeneficiaryModule } from './beneficiary/beneficiary.module';
import { TransactionModule } from './transaction/transaction.module';
import { UserDataService } from './shared/user-data-service';
import { SucessComponent } from './shared/sucess/sucess.component';
import { TransactionDataService } from './shared/transaction-data-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    HeaderComponent,
    SucessComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    UsersModule,
    AuthModule,
    CustomerModule,
    AdminModule,
    AccountModule,
    NomineeModule,
    AccountModule,
    TransactionModule
  ],
  providers: [
    DatePipe,
    AccountDataService,
    UserDataService,
    TransactionDataService
  ],
  exports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule,
    UsersModule,
    AuthModule,
    AdminModule,
    CustomerModule,
    AccountModule,
    NomineeModule,
    AccountModule,
    BeneficiaryModule,
    TransactionModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
