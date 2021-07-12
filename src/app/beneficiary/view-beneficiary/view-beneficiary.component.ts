import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Beneficiary } from '../beneficiary';
import { BeneficiaryServiceService } from '../beneficiary-service.service';

@Component({
  selector: 'app-view-beneficiary',
  templateUrl: './view-beneficiary.component.html',
  styleUrls: ['./view-beneficiary.component.css']
})
export class ViewBeneficiaryComponent implements OnInit {

  beneficiary!: Beneficiary;

  constructor(private beneficiaryService: BeneficiaryServiceService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    let beneficiaryId: number = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.beneficiaryService.getBeneficiary(beneficiaryId)
      .subscribe((data)=> {
        console.log(data)
        this.beneficiary = data;
      })
  }

}
