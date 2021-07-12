import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/transaction/transaction';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-transaction-list',
  templateUrl: './admin-transaction-list.component.html',
  styleUrls: ['./admin-transaction-list.component.css']
})
export class AdminTransactionListComponent implements OnInit {

  transactionList: Transaction[] = []
  transactionSrNo: number=0;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.transactionSrNo = 0

    this.adminService.getAllTransactions()
      .subscribe((data)=> {
        console.log(data)
        this.transactionList =data;
      })

  }

}
