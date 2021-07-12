import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/auth/login.service';
import { UserType } from 'src/app/shared/user-type';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  userType: string = UserType.CUSTOMER;

  customerForm: FormGroup;
  adminForm: FormGroup;
  regType: number = 0;

  constructor(private loginService: LoginService,
              private router: Router,
              private route: ActivatedRoute,
              private customerService: CustomerService) { 

                this.customerForm = new FormGroup({
                  userId: new FormControl(),
                  username: new FormControl(),
                  password: new FormControl(),
                  type: new FormControl(this.userType),
                  customerName: new FormControl(),
                  phoneNo: new FormControl(),
                  emailId: new FormControl(),
                  age: new FormControl(),
                  gender: new FormControl(),
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
    let customerId: number = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.customerService.getCustomerById(customerId)
      .subscribe((data) => {
        console.log(data)
        this.customerForm.patchValue(data)
      })
  }


  registerCustomer(){
    console.log(this.customerForm);

    this.customerService.editCustomer(this.customerForm.value)
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
}
