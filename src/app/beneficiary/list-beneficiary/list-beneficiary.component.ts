import { Component, Input, OnInit } from '@angular/core';
import { AccountDataService } from 'src/app/shared/AccountDataService';
import { Beneficiary } from '../beneficiary';
import { BeneficiaryServiceService } from '../beneficiary-service.service';

@Component({
  selector: 'app-list-beneficiary',
  templateUrl: './list-beneficiary.component.html',
  styleUrls: ['./list-beneficiary.component.css']
})
export class ListBeneficiaryComponent implements OnInit {

  @Input() beneficiaryList: Beneficiary[] = [];

  errMsg:string = '';

  constructor(private beneficiaryService: BeneficiaryServiceService,
              private accountSerice: AccountDataService) { }

  ngOnInit(): void {
    console.log(this.accountSerice.accountData.accountId);
    let accountId = this.accountSerice.accountData.accountId;
    this.beneficiaryService.getBeneficiaryByAccountId(accountId)
      .subscribe((data) =>{
        this.beneficiaryList = data;
        this.errMsg=''
      },(error)=>{
        this.errMsg = error.error.msg;
        console.log(error.error.msg)
      })
    
  }

  remove(beneficiaryId: number){
    this.beneficiaryService.removeBeneficiary(beneficiaryId)
      .subscribe((data) => {
        console.log(data)
        this.ngOnInit();
      } )
  }

  view(beneficiaryId: number){
    this.beneficiaryService.getBeneficiary(beneficiaryId)
      .subscribe((data) => {
        console.log(data)
      })
  }

}
