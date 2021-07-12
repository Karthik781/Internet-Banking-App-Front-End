import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Transaction } from 'src/app/transaction/transaction';
import { TransactionDataService } from '../transaction-data-service';

@Component({
  selector: 'app-sucess',
  templateUrl: './sucess.component.html',
  styleUrls: ['./sucess.component.css']
})
export class SucessComponent implements OnInit {

  transaction!: Transaction;
  constructor(private transactionDataService: TransactionDataService,
              private _location: Location) { }

  ngOnInit(): void {
    this.transaction = this.transactionDataService.transaction;
    
  }
  loadPrevious(){
      this._location.back();
  }

}
