import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticateService {

    constructor(private route: Router) {
    }

    login(username: string, password: string){
      if(username=="test" && password=="test"){
        localStorage.setItem('currentUser', "test");
        return true;
      }
      else
      return false;
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.route.navigate(['/']);
    }
}