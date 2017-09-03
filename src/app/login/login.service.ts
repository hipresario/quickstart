import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class LoginService {

  constructor(private http: Http) { }
  
  login(username: string, password: string): Promise<String> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      console.log(username);
      console.log(password);  
      resolve('done');
    });
  }
  
}