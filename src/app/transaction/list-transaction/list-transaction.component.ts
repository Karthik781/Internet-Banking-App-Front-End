import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from '../transaction';
import { TransactionServiceService } from '../transaction-service.service';

@Component({
  selector: 'app-list-transaction',
  templateUrl: './list-transaction.component.html',
  styleUrls: ['./list-transaction.component.css']
})
export class ListTransactionComponent implements OnInit {

  transactionsList: Transaction[] = []
  errMsg:string = ''

  constructor(private router: Router,
              private route: ActivatedRoute,
              private transactionService: TransactionServiceService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'));
    let accountId: number = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.transactionService.getTransactionsByAccountId(accountId)
      .subscribe((data) => {
        this.transactionsList = data
        this.errMsg=''
      },(error)=>{

      })
  }

}
