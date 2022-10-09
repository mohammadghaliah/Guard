import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}

// import { Injectable } from '@angular/core';
// import { Router, Route, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { CanLoad } from '@angular/router';
// import { AuthenticationService } from '../services/authentication.service';
// import { NotifyService } from '../services/notify.service';

// @Injectable()
// export class SelfServiceGuard implements CanLoad {
//     accountCode: string;
//     constructor(private router: Router, private notifyService: NotifyService,
//         private authenticationService: AuthenticationService) {
//         this.accountCode = this.authenticationService.getAccountCode();
//     }

//     canLoad(route: Route): boolean {
//         return this.checkPermisions(route.data.permissions);
//     }

//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//         return this.checkPermisions(route.data.permissions);
//     }

//     private checkPermisions(permissions: string | string[]): boolean {
//         if (!this.authenticationService.hasPermision(permissions)) {
//             this.notifyService.showError("general.error", "Unauthorized");
//             this.authenticationService.removeUser();
//             this.router.navigate([`${this.accountCode}/self-service`]);
//             return false;
//         }
//         return true;
//     }
// }

// hasPermision(permisions: string | string[]) {
//   if (!permisions || permisions.length == 0) {
//       return true;
//   }

//   let hasPermision = false;

//   const permisionsList: string[] = typeof (permisions) == "string" ? [permisions] : permisions;

//   const currentPerisions: any[] = this.getPermissions();
//   if (currentPerisions) {
//       if (currentPerisions["uiPermissions"]) {
//           for (const permision of currentPerisions["uiPermissions"]) {
//               if (permisionsList.some(p => p.toUpperCase() == permision.toUpperCase())) {
//                   hasPermision = true;
//                   break;
//               }
//           }
//       }
//   }
//   return hasPermision;
// }

// getPermissions() {
//   const permisionsKey = this.getPermisionsStorageKey();

//   const permissions = StorageManager.get(permisionsKey);
//   return permissions;
// }

// removeUser() {
//   const userKey = this.getUserStorageKey();
//   const menuKey = this.getMenuStorageKey();
//   const permisionsKey = this.getPermisionsStorageKey();
//   const accountKey = this.getAccountStorageKey();

//   StorageManager.remove(accountKey);
//   StorageManager.remove(userKey);
//   StorageManager.remove(menuKey);
//   StorageManager.remove(permisionsKey);
// }

// -- in route module
// canActivate: [SelfServiceGuard],
// data: { permissions: 'home.self_service_page' }
