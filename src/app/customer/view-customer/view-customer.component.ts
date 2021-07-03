import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  customer!: Customer; 

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService,
              private customerService: CustomerService) { 


              }

  ngOnInit(): void {
    console.log(typeof this.route.snapshot.paramMap.get('id'));

   let customerId: number = parseInt(this.route.snapshot.paramMap.get('id')!);
   this.customerService.getCustomerById(customerId)
    .subscribe((data) => {
      console.log(data);
      this.customer = data;
    })
  }

}
