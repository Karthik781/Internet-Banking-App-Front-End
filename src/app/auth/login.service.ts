import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../users/user';
import { Customer } from '../customer/customer';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  register(userData: User): Observable<User>{
    return this.http.post<User>(this.baseUrl + '/register', userData);
  }
  registerCustomer(customerData: Customer): Observable<User>{
    return this.http.post<User>(this.baseUrl + '/customer/create', customerData);
  }

  login(userData: User): Observable<any>{
    return this.http.post<User>(this.baseUrl + '/authenticate', userData);
  }
}
