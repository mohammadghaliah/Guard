import { Injectable } from '@angular/core';
import { Router, Route, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanLoad } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
// import { AuthenticationService } from '../services/authentication.service';
// import { NotifyService } from '../services/notify.service';

@Injectable()
export class SelfServiceGuard implements CanLoad {
    accountCode: string;
    constructor(private router: Router, /*private notifyService: NotifyService*/,
        private authenticationService: AuthenticationService) {
        this.accountCode = this.authenticationService.getAccountCode();
    }

    canLoad(route: Route): boolean {
        return this.checkPermisions(route.data.permissions);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.checkPermisions(route.data.permissions);
    }

    private checkPermisions(permissions: string | string[]): boolean {
        if (!this.authenticationService.hasPermision(permissions)) {
            // this.notifyService.showError("general.error", "Unauthorized");
            this.authenticationService.removeUser();
            this.router.navigate([`${this.accountCode}/self-service`]);
            return false;
        }
        return true;
    }
}