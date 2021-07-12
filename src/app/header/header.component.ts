import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { UserDataService } from '../shared/user-data-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userInfo: any;

  constructor(private authService: AuthService,
              private userDataService: UserDataService) { }

  ngOnInit(): void {
  // console.log(this.userDataService.userInfo);
  // this.userInfo = this.userDataService.userInfo;
  // console.log(this.userInfo);
  
  
    
  }

  getUser(): boolean{
    let userData = this.authService.retrieveUserDetails();
    this.userInfo = JSON.parse(userData!);
    let isAvailable = userData == null ? false : true;
    return isAvailable;

  }
  

}
