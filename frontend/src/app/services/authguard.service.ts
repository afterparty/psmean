import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuardService implements CanActivate {

	constructor(private auth: AuthenticationService, private router: Router) { }

	canActivate() {
		console.log('checking login status');
		if (!this.auth.isLoggedIn()) {
			this.router.navigateByUrl('/login');
			return false;
		}
		return true;
	}
}
