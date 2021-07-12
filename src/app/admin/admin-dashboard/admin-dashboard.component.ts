import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  loadCustomer: boolean = true;
  loadAccount: boolean = false;
  loadTransaction: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  loadTransactionList(){
    this.loadTransaction = !this.loadTransaction;
    this.loadCustomer = !this.loadCustomer;
  }

  loadCustomersList(){
    this.loadTransaction = !this.loadTransaction;
    this.loadCustomer = !this.loadCustomer;
  }

}
