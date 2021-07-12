import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Transaction } from '../transaction/transaction';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  
  baseUrl = "http://localhost:8081"

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

    getAllTransactions():Observable<Transaction[]>{
      return this.http.get<Transaction[]>(this.baseUrl + "/transaction/all", this.getHttpOptions());
    }

}
