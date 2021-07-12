import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { Account } from 'src/app/account/account';

import { Beneficiary } from '../beneficiary';
import { BeneficiaryServiceService } from '../beneficiary-service.service';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css']
})
export class AddBeneficiaryComponent implements OnInit {
  accountForm:any;
  beneficiary: any;
  accId!:number;
  constructor(private fb: FormBuilder,
               private router: Router,
               private route: ActivatedRoute,
               private _location: Location,
               private beneficiaryService:BeneficiaryServiceService) { 
              
                this.accountForm = this.fb.group({
                  accountId: [0],
                              });           
                  this.beneficiary = this.fb.group({
                    beneficiaryId:[0],
                    beneficiaryName: [''],
                    beneficiaryAccountNumber: [''],
                    ifsc: [''],
                    accountType: [''],
                    isActive:[0],
                    account: {
                      accountId: 0
                    }
                  })

  }

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParamMap.get('id'));
     this.accId = parseInt(this.route.snapshot.queryParamMap.get('id')!);
   
  }

  addBeneficiary(){
    this.beneficiary.value.account.accountId = this.accId;
    console.log(this.beneficiary.value);
    this.beneficiaryService.addBeneficiary(this.beneficiary.value)
      .subscribe((data)=>{
        console.log(data);
        this._location.back();
      })
  }

}
