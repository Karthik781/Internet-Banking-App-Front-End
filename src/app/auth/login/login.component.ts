import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
              private authService: AuthService) { 

                this.loginForm = new FormGroup({            
                  username: new FormControl(),
                  password: new FormControl(),
                  type: new FormControl('ADMIN'),
                });

              }

  ngOnInit(): void {
  }

  logIn(){
    console.log(this.loginForm.value);

    this.loginService.login(this.loginForm.value)
      .subscribe((data) => {
        console.log(data);
        this.authService.storeUserDetails(JSON.stringify(data));

        console.log( this.authService.retrieveUserDetails());

        this.router.navigate(['view-customer', {id: data.user.userId}])
      },
      (error) => {
          console.log(error);
        })

  }
}
