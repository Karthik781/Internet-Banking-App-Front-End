import { Component, Input, OnInit } from '@angular/core';
import { Nominee } from '../nominee';

@Component({
  selector: 'app-list-nominee',
  templateUrl: './list-nominee.component.html',
  styleUrls: ['./list-nominee.component.css']
})
export class ListNomineeComponent implements OnInit {

  @Input() nomineesList!: Nominee[]

  constructor() { }

  ngOnInit(): void {
    console.log(this.nomineesList)
  }

  remove(nomineeId: number){
    console.log(nomineeId);
  }

}
