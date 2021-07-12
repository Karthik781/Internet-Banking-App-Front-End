import { Component, Input, OnInit, OnChanges, } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Beneficiary } from 'src/app/beneficiary/beneficiary';
import { Nominee } from 'src/app/nominee/nominee';
import { AccountDataService } from 'src/app/shared/AccountDataService';
import { Account } from '../account';
import { AccountServiceService } from '../account-service.service';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})
export class ViewAccountComponent implements OnInit {

  @Input() account!: Account;

  beneficiaries: Beneficiary[] = [];
  nominees: Nominee[] = [];

  accountData!: Account;

  depositForm!: FormGroup;
  withdrawForm!: FormGroup;
  transactionStatus: number =0;

  constructor( public accountDataService: AccountDataService,
               private router: Router,
               private route: ActivatedRoute,
               private accountService :AccountServiceService)  {
             
                }
    

  ngOnInit(): void {
    this.transactionStatus = 0;
    this.depositForm = new FormGroup({            
      accountId: new FormControl(),
      amount: new FormControl(0),
    });
    this.withdrawForm = new FormGroup({            
      accountId: new FormControl(),
      amount: new FormControl(),
      username: new FormControl(""),
      password: new FormControl(""),
    });

    console.log(parseInt(this.route.snapshot.paramMap.get('id')!))
    let accountId = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.accountService.getAccountById(accountId)
    .subscribe((data)=> {
      console.log(data);
      this.accountData =data;
      this.accountDataService.accountData = data;
      this.beneficiaries = data.beneficiaries;
      this.nominees = data.nominees;
    },(error)=>{
      console.log(error.message)
    })
  }


  deposit(){
    this.depositForm.patchValue({
      accountId: this.accountData.accountId
    })
    console.log(this.depositForm.value)
    let accountId = this.accountData.accountId;
    let amount = this.depositForm.value.amount;
    console.log(this.transactionStatus);
    this.accountService.depositMoney(accountId, amount)
      .subscribe((data) => {
        console.log(data)
        this.accountData = data;
        this.transactionStatus =1;
        console.log(this.transactionStatus);
        // this.ngOnInit();
        // console.log(this.transactionStatus);

      })
  }

  withdraw(){
    this.withdrawForm.patchValue({
      accountId: this.accountData.accountId,
      amount: parseInt(this.withdrawForm.value.amount)
    })
    console.log(this.withdrawForm.value);

    this.accountService.withdrawMoney(this.withdrawForm.value)
      .subscribe((data) => {
        console.log(data)
        this.accountData = data;
        this.transactionStatus =1;
      })

  }

}
