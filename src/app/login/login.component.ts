import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: [ './login.css' ]
})

export class LoginComponent implements OnInit { 
  
  user: any = {};

  constructor(
    private router: Router,
    private loginService: LoginService) { }  

  ngOnInit(): void { }

  login(): void {
    console.log(this.user.username);
    console.log(this.user.password);
    this.loginService.login(this.user.username, this.user.password).then(data => {console.log(data);
    } );
  }

}
