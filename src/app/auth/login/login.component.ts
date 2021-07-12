import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDataService } from 'src/app/shared/user-data-service';
import { UserType } from 'src/app/shared/user-type';
import { AuthService } from '../auth.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  addUserData = {
    username: '',
    password: ''
  }

  loginForm: FormGroup;

  constructor(private loginService: LoginService,
              private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService,
              private userDataService: UserDataService) { 

                this.loginForm = new FormGroup({            
                  username: new FormControl('', [Validators.required]),
                  password: new FormControl('', [Validators.required]),
                  type: new FormControl(),
                });

              }

  ngOnInit(): void {
  }

  logIn(){
    console.log(this.loginForm.value);

    this.loginService.login(this.loginForm.value)
      .subscribe((data) => {
        console.log(data);
        this.userDataService.userInfo = data;
        this.authService.storeUserDetails(JSON.stringify(data));

        console.log( this.authService.retrieveUserDetails());
        if(data.user.type === UserType.CUSTOMER){
          this.router.navigate(['view-customer', {id: data.user.userId}])
        }else if(data.user.type === UserType.ADMIN){
          this.router.navigate(['admin-dashboard'])
        }

      },
      (error) => {
          console.log(error);
        })

  }
}
