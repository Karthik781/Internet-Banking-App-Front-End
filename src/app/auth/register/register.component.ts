import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  ActivatedRoute, ParamMap } from '@angular/router';

import { LoginService } from '../login.service';
import { UserType } from 'src/app/shared/user-type';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  addUserData = {
    userId: 0,
    username: '',
    password: '',
    type:''
  }

  userType: string = UserType.CUSTOMER;

  registorForm: FormGroup;

  constructor(private loginService: LoginService,
              private router: Router,
              private route: ActivatedRoute,) { 

                this.registorForm = new FormGroup({
                  userId: new FormControl(),
                  username: new FormControl(),
                  password: new FormControl(),
                  customerName: new FormControl(),
                  phoneNo: new FormControl(),
                  emailId: new FormControl(),
                  age: new FormControl(),
                  gender: new FormControl(),
                });

              }

  ngOnInit(): void {
  }

  register(){
    console.log(this.registorForm.value);

    this.loginService.registerCustomer(this.registorForm.value)
      .subscribe((data) => {
        console.log(data);
      })

    // this.loginService.register(this.registorForm.value)
    //   .subscribe((data => { console.log(data);
      
    //   } ))

    // this.loginService.register(this.addUserData).subscribe((response) => {
    //   console.log(response);
    //   this.router.navigate(['authenticate']);
    // },
    // (error) => {
    //   console.log(error);
    // })

  }

}
