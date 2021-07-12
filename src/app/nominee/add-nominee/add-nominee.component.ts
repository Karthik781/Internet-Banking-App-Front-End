import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-add-nominee',
  templateUrl: './add-nominee.component.html',
  styleUrls: ['./add-nominee.component.css']
})
export class AddNomineeComponent implements OnInit {

  @Input() nominee!: FormGroup;

  constructor() { 
    this.nominee = new FormGroup({
      nomineeId: new FormControl(),
      nomineeName : new FormControl(),
      govtId: new FormControl(),
      govtIdType : new FormControl(),
      phoneNo: new FormControl(),
      relation : new FormControl()
    })
  }

  ngOnInit(): void {
  }

  

  addNominee(){
    console.log(this.nominee.value)
  }
}
