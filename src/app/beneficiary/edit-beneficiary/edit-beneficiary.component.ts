import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { BeneficiaryServiceService } from '../beneficiary-service.service';

@Component({
  selector: 'app-edit-beneficiary',
  templateUrl: './edit-beneficiary.component.html',
  styleUrls: ['./edit-beneficiary.component.css']
})
export class EditBeneficiaryComponent implements OnInit {

  accountForm:any;
  beneficiary: any;
  
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
    console.log(this.route.snapshot.paramMap.get('id'));
    let beneficiaryId: number = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.beneficiaryService.getBeneficiary(beneficiaryId)
      .subscribe((data) => {
        this.beneficiary.setValue(data);
      })
  }

  editBeneficiary(){
   
    console.log(this.beneficiary.value);
   this.beneficiaryService.editbeneficiary(this.beneficiary.value)
    .subscribe((data) => {
      console.log(data);
      this._location.back();
    })
  }

}
