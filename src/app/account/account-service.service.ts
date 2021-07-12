import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  baseUrl = "http://localhost:8081/account"

  constructor(private http: HttpClient,
    private authService: AuthService) { }

    getHttpOptions() {
      let httpOptions = {};
      let userData: any = '';
      userData = this.authService.retrieveUserDetails();
      console.log("user jwt:" + userData);
      if (userData != null) {
        let token = JSON.parse(userData).jwt;
        console.log("token:" + token);
        httpOptions = {
          headers: new HttpHeaders({
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + token
          })
        }
      }
      return httpOptions;
    }

  addAccount(account : Account): Observable<any>{
    let ops =this.getHttpOptions();
    console.log(ops);
    return this.http.post<Account>(this.baseUrl + "/savingsaccount" , account, this.getHttpOptions());
  }

  addTermAccount(account: Account):Observable<Account>{
    return this.http.post<Account>(this.baseUrl + "/termaccount", account, this.getHttpOptions());
  }

  getAccountById(accountId: number): Observable<Account>{
    return this.http.get<Account>(this.baseUrl + "/get/" + accountId, this.getHttpOptions());
  }

  depositMoney(accountId: number, amount: number): Observable<Account>{
    return this.http.put<Account>(this.baseUrl + "/deposit/" + accountId + "/" + amount, null, this.getHttpOptions());
  }
  withdrawMoney(withdraw: any):Observable<Account>{
    return this.http.put<Account>(this.baseUrl + "/withdraw", withdraw, this.getHttpOptions());
  }

  transferWithInBank(transfer: any): Observable<Account>{
    return this.http.put<Account>(this.baseUrl + "/transfer", transfer, this.getHttpOptions());
  }

}
