import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {

 
  baseUrl = "http://localhost:8081/transaction"

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

    addTransaction(transaction: any): Observable<Transaction>{
      return this.http.post<Transaction>(this.baseUrl + "/create", transaction, this.getHttpOptions());
    }

    getTransactionsByAccountId(accountId: number): Observable<Transaction[]>{
      return this.http.get<Transaction[]>(this.baseUrl + "/account/" + accountId, this.getHttpOptions())
    }

}
