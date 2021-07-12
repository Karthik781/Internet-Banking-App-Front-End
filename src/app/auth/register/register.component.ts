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

 

  userType: string = UserType.CUSTOMER;

  customerForm: FormGroup;
  adminForm: FormGroup;
  regType: number = 0;
  emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  phoneNumber = /^[6-9][0-9]{9}$/;

  constructor(private loginService: LoginService,
              private router: Router,
              private route: ActivatedRoute,) { 
             

    this.customerForm = new FormGroup({
      userId: new FormControl('',),
      username: new FormControl('', [Validators.required,
      Validators.minLength(4),]),
      password: new FormControl('', [Validators.required,
      Validators.minLength(4),]),
      type: new FormControl(this.userType),
      customerName: new FormControl('', [Validators.required,
      Validators.minLength(4),]),
      phoneNo: new FormControl('', [Validators.required, 
      Validators.pattern(this.phoneNumber)]),
      emailId: new FormControl('', [Validators.required, 
      Validators.pattern(this.emailPattern)]),
      age: new FormControl('',[Validators.required,
      Validators.min(18)]),
      gender: new FormControl('',[Validators.required]),
    });
    this.adminForm = new FormGroup({
      userId: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      type: new FormControl(UserType.ADMIN),
      adminName: new FormControl(),
      adminContact: new FormControl(),
      adminEmailId: new FormControl(),
    });

  }

  ngOnInit(): void {
  }

  registerAdmin(){
    console.log(this.adminForm.value)

    this.loginService.registerAdmin(this.adminForm.value)
      .subscribe((data)=> {
        console.log(data)
        this.router.navigate(['authenticate'])
      })
  }

  registerCustomer(){
    console.log(this.customerForm);

    this.loginService.registerCustomer(this.customerForm.value)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['authenticate'])
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

  openAdminForm(){
    this.regType = 1;
  }

}
