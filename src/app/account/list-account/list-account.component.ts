import { Component, Input, OnInit } from '@angular/core';
import { AccountDataService } from 'src/app/shared/AccountDataService';
import { Account } from '../account';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit {

  @Input() account!: Account;

  constructor(public accountDataService: AccountDataService) { 
    
  }

  ngOnInit(): void {
    console.log(this.account);
    this.accountDataService.accountData = this.account;
  }


}
