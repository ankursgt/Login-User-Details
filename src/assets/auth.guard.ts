import { Injectable } from '@angular/core';
import { Router, CanActivate ,ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { AuthenticateService } from '../app/authenticate.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticateService
    ) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean{
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }
}