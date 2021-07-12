import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Beneficiary } from './beneficiary';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryServiceService {

  baseUrl = "http://localhost:8081/beneficiary"

  constructor(private http: HttpClient,
    private authService: AuthService) {
     
     }

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

    addBeneficiary(beneficiary: Beneficiary): Observable<Beneficiary>{
      return this.http.post<Beneficiary>(this.baseUrl + "/create", beneficiary, this.getHttpOptions());
    }

    getBeneficiary(beneficiaryId: number): Observable<Beneficiary>{
      return this.http.get<Beneficiary>(this.baseUrl + "/get/" + beneficiaryId, this.getHttpOptions());
    }

    removeBeneficiary(beneficiaryId: number): Observable<Beneficiary[]>{
      return this.http.put<Beneficiary[]>(this.baseUrl + "/delete/" + beneficiaryId, null, this.getHttpOptions());
    }

    editbeneficiary(beneficiary: Beneficiary): Observable<Beneficiary>{
      return this.http.put<Beneficiary>(this.baseUrl + "/update", beneficiary, this.getHttpOptions())
    }

    getBeneficiaryByAccountId(accountId: number): Observable<Beneficiary[]>{
      return this.http.get<Beneficiary[]>(this.baseUrl + "/account/" + accountId, this.getHttpOptions());
    }
    
}
