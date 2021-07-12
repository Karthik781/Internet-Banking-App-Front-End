import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/account/account';
import { AccountServiceService } from 'src/app/account/account-service.service';
import { Beneficiary } from 'src/app/beneficiary/beneficiary';
import { AccountDataService } from 'src/app/shared/AccountDataService';
import { TransactionDataService } from 'src/app/shared/transaction-data-service';
import { TransactionServiceService } from '../transaction-service.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {
  
  accountData!: Account;
  transactionForm:FormGroup;
  transBenForm!: FormGroup;
  beneficiaryForm!:FormGroup;
  benefeciaryList:Beneficiary [] = []
  transactionType:number=0;
  errMsg:string=''

  constructor(public accountDataService: AccountDataService,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private accountService :AccountServiceService,
              private transactionSerive : TransactionServiceService,
              private tansactionDataSerice: TransactionDataService) { 

    this.beneficiaryForm = this.fb.group({
       beneficiaryId: [0]
    })
          
    this.transBenForm = this.fb.group({
      amount: [0],
      username: [""],
      password: [""],
      beneficiary: this.beneficiaryForm,
      account: this.fb.group({
        accountId: [0]
      })
    })

  
    this.transactionForm = new FormGroup({            
      accountId: new FormControl(),
      receiverAccountId: new FormControl(),
      amount: new FormControl(),
      username: new FormControl(""),
      password: new FormControl(""),
    });
  }

  ngOnInit(): void {

    console.log(parseInt(this.route.snapshot.paramMap.get('id')!))
    let accountId = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.accountService.getAccountById(accountId)
    .subscribe((data)=> {
      console.log(data);
      this.accountData =data;
      this.benefeciaryList = data.beneficiaries;
    })
    this.transactionType = 0;
  }

  sendToAccount(){
    this.transactionForm.patchValue({
      accountId: this.accountData.accountId,
      amount: parseInt(this.transactionForm.value.amount),
      receiverAccountId: parseInt(this.transactionForm.value.receiverAccountId)
    })
    console.log(this.transactionForm.value)
    this.accountService.transferWithInBank(this.transactionForm.value)
      .subscribe((data)=> {
        console.log(data)
        this.tansactionDataSerice.transaction = data.transactions[0];
        this.errMsg=''
        this.router.navigate(['success'])
      },(error) =>{
        this.errMsg = error.error.msg;
      })
  }

  sendToBeneficiary(){
    this.beneficiaryForm.patchValue({
      beneficiaryId: parseInt(this.beneficiaryForm.value.beneficiaryId)
    })
    this.transBenForm.patchValue({
      account: { ...this.accountData },
      amount: parseInt(this.transBenForm.value.amount),
    })
    console.log(this.transBenForm.value)
    this.transactionSerive.addTransaction(this.transBenForm.value)
      .subscribe((data) => {
        console.log(data)
        this.tansactionDataSerice.transaction = data;
        this.errMsg=''
        this.router.navigate(['success'])
      })
  }

  toggleTransactionType(){
    (this.transactionType===0)?this.transactionType=1:this.transactionType=0;
  }

}
