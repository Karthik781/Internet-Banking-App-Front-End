import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Customer } from './customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl = "http://localhost:8081/customer"

  constructor(private http: HttpClient,
    private authService: AuthService) { }

    getHttpOptions(){
      let httpOptions = {};
      let userData: any = '';
      userData = this.authService.retrieveUserDetails();
      if(userData!=null){
        let token = JSON.parse(userData).jwt;
        console.log("token:" + token);
        httpOptions =  {
        headers: new HttpHeaders({
          'content-type': 'application/json',
          'Authorization': 'Bearer ' + token
        })
      }
      }
     return httpOptions;
    }

  getCustomerById(customerId : number): Observable<Customer>{
    let ops =this.getHttpOptions();
    console.log(ops);
    return this.http.get<Customer>(this.baseUrl + "/uid/" + customerId ,this.getHttpOptions());
  }

  getCustomerBycustomerId(customerId: number): Observable<Customer>{
    return this.http.get<Customer>(this.baseUrl + "/" + customerId, this.getHttpOptions())
  }

  editCustomer(customer: Customer): Observable<Customer>{
    return this.http.put<Customer>(this.baseUrl + "/update", customer, this.getHttpOptions())
  }

}
