import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AccountServiceService } from '../account-service.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  accountForm!: FormGroup;
  customerId: number = 0;
  nomineeForm: any;

  // accTypeValue : number = 0;

  constructor( private router: Router,
              private route: ActivatedRoute,
              private datePipe: DatePipe,
              private fb: FormBuilder,
              private accountService: AccountServiceService) { 
              }

  ngOnInit(): void {
    this.customerId = parseInt(this.route.snapshot.paramMap.get('customerId')!);
    console.log(this.customerId)
    let date = new Date();

    this.accountForm = this.fb.group({
      accountId: [0],
      interestRate:[0],
      balance:[0, [Validators.required]],
      dateOfJoining:[this.datePipe.transform(date,"yyyy-MM-dd")],
      customer: [0],
      isActive:[0],
      accountType: [0],
      minBalance: [0],
      fine: [0],
      amount: [0],
      months:[0],
      penaltyAmount: [0],
      nominees: this.fb.array([this.createNominee()])
    });

   
  }

  createNominee(){
    return this.nomineeForm = this.fb.group({
                            nomineeId: [0],
                            nomineeName :[''],
                            govtId: [''],
                            govtIdType : [''],
                            phoneNo: [''],    
                            relation : ['']
                          })
  }

  addNext() {
    (this.accountForm.controls['nominees'] as FormArray).push(this.createNominee())
  }

  createAccount(){
    this.accountForm.value.customer = this.customerId;
    console.log(this.accountForm.controls.nominees.value);
    console.log(this.accountForm.value);
    if(this.accountForm.value.accountType === "1"){
      this.accountForm.value.interestRate = 2.1;
      this.accountForm.value.minBalance = 1000;
        this.accountService.addAccount(this.accountForm.value)
         .subscribe((data)=> {
        console.log(data);
        this.router.navigate(['view-account', data.accountId])
      })
    }else if(this.accountForm.value.accountType === "2"){
      console.log("term")
      this.accountForm.value.interestRate = 6.1;
      this.accountService.addTermAccount(this.accountForm.value)
        .subscribe((data)=> {
          console.log(data)
          this.router.navigate(['view-account', data.accountId])
        })
    }
  }

}



         // this.accountForm = new FormGroup({
                //   accountId: new FormControl(),
                //   interestRate: new FormControl(),
                //   balance: new FormControl(),
                //   dateOfJoining: new FormControl(this.datePipe.transform(date,"yyyy-MM-dd")),
                //   customer: new FormControl(),
                //   isActive: new FormControl(),
                //   accountType: new FormControl(),
                //   minBalance: new FormControl(),
                //   fine: new FormControl(0),
                //   nominee: new FormGroup({
                //     nomineeId: new FormControl(0),
                //     nomineeName : new FormControl(""),
                //     govtId: new FormControl(""),
                //     govtIdType : new FormControl(""),
                //     phoneNo: new FormControl(""),
                //     relation : new FormControl("")
                //   })
                // });