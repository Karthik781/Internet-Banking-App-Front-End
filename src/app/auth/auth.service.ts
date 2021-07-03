import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  storeUserDetails(userData: string){
    sessionStorage.setItem('userData', userData);
  }

  retrieveUserDetails(){
    return sessionStorage.getItem('userData');
  }

  removeUserDetails(){
    sessionStorage.removeItem('userData');
  }
}
