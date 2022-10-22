import { Injectable } from '@angular/core';
// import * as jwt_decode from 'jwt-decode';
// import { UserClaimType } from '../../shared/enum/user-claim-type.enum';
// import { ActivatedRoute, Router } from '@angular/router';
// import { apiNames } from 'src/app/shared/constants/api-names';
// import { ApiHelperService } from './api-helper.service';
// import { StorageManager } from 'src/app/core/utilities/storage-manager';
// import { SystemMenu } from 'src/app/shared/model/system-menu/system-menu.vm';
// import { AppsEnum } from '../../shared/enum/apps-enum';
// import { AccountEnum } from '../../shared/enum/account-code-enum';
// import { AccountDto } from '../../shared/dto/account/account.dto';
// import { LocaleService } from 'angular-l10n';
// import { LocatorService } from './locator.service';
// import { Environment } from './environment-service';

const ADMIN_USER_STORAGE = 'admin_user';
const ADMIN_MENUS_STORAGE = 'admin_menus';
const ADMIN_ACCOUNT_STORAGE = 'admin_account';
const ADMIN_PERMISSIONS = 'admin_permissions';

const ACCOUNT_ADMIN_USER_STORAGE = 'account_admin_user';
const ACCOUNT_ADMIN_MENUS_STORAGE = 'account_admin_menus';
const ACCOUNT_ADMIN_ACCOUNT_STORAGE = 'account_admin_account';
const ACCOUNT_ADMIN_PERMISSIONS = 'account_admin_permissions';

const CLIENT_USER_STORAGE = 'client_user';
const CLIENT_MENUS_STORAGE = 'client_menus';
const CLIENT_ACCOUNT_STORAGE = 'client_account';
const CLIENT_PERMISSIONS = 'client_permissions';

const ONEPASS_ADMIN_USER_STORAGE = 'onepass_admin_user';
const ONEPASS_ADMIN_MENUS_STORAGE = 'onepass_admin_menus';
const ONEPASS_ADMIN_ACCOUNT_STORAGE = 'onepass_admin_account';
const ONEPASS_ADMIN_PERMISSIONS = 'onepass_admin_permissions';

const SELF_SERVICE_ADMIN_USER_STORAGE = 'self_service_admin_user';
const SELF_SERVICE_ADMIN_MENUS_STORAGE = 'self_service_admin_menus';
const SELF_SERVICE_ADMIN_ACCOUNT_STORAGE = 'self_service_admin_account';
const SELF_SERVICE_ADMIN_PERMISSIONS = 'self_service_admin_permissions';

@Injectable()
export class AuthenticationService {
  // locale: LocaleService;
  // constructor(private route: ActivatedRoute,
  //     private router: Router,
  //     private apiHelper: ApiHelperService,
  //     private environment: Environment) {
  //     this.locale = LocatorService.injector.get(LocaleService);
  // }
  // setUser(user, accountCode?: string) {
  //     const userToken = { token: user.token };
  //     const menus = { menus: user.menus }
  //     const permissions = { uiPermissions: user.uiPermissions }
  //     const account = { account: user.account }
  //     let userKey: string;
  //     let menuKey: string;
  //     let permisionsKey: string;
  //     let accountKey: string;
  //     if (!accountCode) {
  //         userKey = this.getUserStorageKey().toLowerCase();
  //         menuKey = this.getMenuStorageKey().toLowerCase();
  //         permisionsKey = this.getPermisionsStorageKey().toLowerCase();
  //         accountKey = this.getAccountStorageKey().toLowerCase();
  //     } else {
  //         userKey = `${accountCode}_${ACCOUNT_ADMIN_USER_STORAGE}`.toLowerCase();
  //         menuKey = `${accountCode}_${ACCOUNT_ADMIN_MENUS_STORAGE}`.toLowerCase();
  //         permisionsKey = `${accountCode}_${ACCOUNT_ADMIN_PERMISSIONS}`.toLowerCase();
  //         accountKey = `${accountCode}_${ACCOUNT_ADMIN_ACCOUNT_STORAGE}`.toLowerCase();
  //     }
  //     StorageManager.set(accountKey, account);
  //     StorageManager.set(userKey, userToken);
  //     StorageManager.set(menuKey, menus);
  //     StorageManager.set(permisionsKey, permissions);
  // }
  // removeUser() {
  //     const userKey = this.getUserStorageKey();
  //     const menuKey = this.getMenuStorageKey();
  //     const permisionsKey = this.getPermisionsStorageKey();
  //     const accountKey = this.getAccountStorageKey();
  //     StorageManager.remove(accountKey);
  //     StorageManager.remove(userKey);
  //     StorageManager.remove(menuKey);
  //     StorageManager.remove(permisionsKey);
  // }
  // removeAllUsers() {
  //     StorageManager.removeAll();
  // }
  // isAuthunticated(): boolean {
  //     let isAuthunticated = false;
  //     const token = this.getToken();
  //     if (token) {
  //         isAuthunticated = true;
  //     }
  //     return isAuthunticated;
  // }
  // hasRole(roles: string | string[]): boolean {
  //     if (!roles || roles.length == 0) {
  //         return true;
  //     }
  //     let hasRole = false;
  //     const rolesList: string[] = typeof (roles) == "string" ? [roles] : roles;
  //     const currentRoles: any[] = this.getClaim(UserClaimType.Role);
  //     if (currentRoles) {
  //         for (const role of currentRoles) {
  //             if (rolesList.some(r => r.toUpperCase() == role.toUpperCase())) {
  //                 hasRole = true;
  //                 break;
  //             }
  //         }
  //     }
  //     return hasRole;
  // }
  // hasPermision(permisions: string | string[]) {
  //     if (!permisions || permisions.length == 0) {
  //         return true;
  //     }
  //     let hasPermision = false;
  //     const permisionsList: string[] = typeof (permisions) == "string" ? [permisions] : permisions;
  //     const currentPerisions: any[] = this.getPermissions();
  //     if (currentPerisions) {
  //         if (currentPerisions["uiPermissions"]) {
  //             for (const permision of currentPerisions["uiPermissions"]) {
  //                 if (permisionsList.some(p => p.toUpperCase() == permision.toUpperCase())) {
  //                     hasPermision = true;
  //                     break;
  //                 }
  //             }
  //         }
  //     }
  //     return hasPermision;
  // }
  // getAccount(): AccountDto {
  //     const accountKey = this.getAccountStorageKey();
  //     const account = StorageManager.get(accountKey);
  //     return account.account;
  // }
  // setAccount(account: AccountDto) {
  //     const accountKey = this.getAccountStorageKey();
  //     StorageManager.set(accountKey, { account: account });
  // }
  // getMenus(): SystemMenu[] {
  //     const menuKey = this.getMenuStorageKey();
  //     const menus = StorageManager.get(menuKey);
  //     return menus?.menus;
  // }
  // getPermissions() {
  //     const permisionsKey = this.getPermisionsStorageKey();
  //     const permissions = StorageManager.get(permisionsKey);
  //     return permissions;
  // }
  // getUserId() {
  //     const userId = this.getClaim(UserClaimType.UserId)
  //     return userId;
  // }
  // getAppId() {
  //     const appId = this.getClaim(UserClaimType.AppId)
  //     return appId;
  // }
  // isSuperAdmin() {
  //     const appId = this.getClaim(UserClaimType.AppId);
  //     const accountId = this.getClaim(UserClaimType.AccountId);
  //     return appId == AppsEnum.Security && accountId == AccountEnum.Security;
  // }
  // getAccountId() {
  //     const accountId = this.getClaim(UserClaimType.AccountId)
  //     return accountId;
  // }
  // getGroupId() {
  //     const groupId = this.getClaim(UserClaimType.GroupId)
  //     return groupId;
  // }
  // getClaim(claim: string, token?: string): any {
  //     let data;
  //     try {
  //         const currentToken = token ? token : this.getToken();
  //         if (currentToken) {
  //             const decoded = jwt_decode(currentToken);
  //             if (decoded) {
  //                 data = decoded[claim];
  //             }
  //         }
  //     }
  //     catch (ex) {
  //         // invalid token
  //     }
  //     return data;
  // }
  // getToken() {
  //     const storageKey = this.getUserStorageKey();
  //     const currentUser = StorageManager.get(storageKey);
  //     const token = currentUser ? currentUser.token : null;
  //     return token;
  // }
  // setToken(token: string) {
  //     const storageKey = this.getUserStorageKey();
  //     StorageManager.set(storageKey, { token: token });
  // }
  // logout(site?: string) {
  //     const apiUrl = this.environment.serviceUrl + apiNames.identity;
  //     this.apiHelper.post(apiUrl + '/token/logout', undefined, { showSpinner: true }).subscribe();
  //     this.removeAllUsers();
  // }
  // private getUserStorageKey() {
  //     let storageKey;
  //     let accountCode = this.getAccountCode();
  //     if (this.isAccountAdminUrl()) {
  //         storageKey = (accountCode == undefined) ? ACCOUNT_ADMIN_USER_STORAGE : `${accountCode}_${ACCOUNT_ADMIN_USER_STORAGE}`;
  //     }
  //     else if (this.isSelfSeviceUrl()) {
  //         storageKey = (accountCode == undefined) ? SELF_SERVICE_ADMIN_USER_STORAGE : `${accountCode}_${SELF_SERVICE_ADMIN_USER_STORAGE}`;
  //     }
  //     else if (this.isOnePassAdminUrl()) {
  //         storageKey = (accountCode == undefined) ? ONEPASS_ADMIN_USER_STORAGE : `${accountCode}_${ONEPASS_ADMIN_USER_STORAGE}`;
  //     }
  //     else if (this.isAdminUrl()) {
  //         storageKey = (accountCode == undefined) ? ADMIN_USER_STORAGE : `${accountCode}_${ADMIN_USER_STORAGE}`;
  //     }
  //     else {
  //         storageKey = (accountCode == undefined) ? CLIENT_USER_STORAGE : `${accountCode}_${CLIENT_USER_STORAGE}`;
  //     }
  //     return storageKey;
  // }
  // private getAccountStorageKey() {
  //     let storageKey;
  //     let accountCode = this.getAccountCode();
  //     if (this.isAccountAdminUrl()) {
  //         storageKey = (accountCode == undefined) ? ACCOUNT_ADMIN_ACCOUNT_STORAGE : `${accountCode}_${ACCOUNT_ADMIN_ACCOUNT_STORAGE}`;
  //     }
  //     else if (this.isSelfSeviceUrl()) {
  //         storageKey = (accountCode == undefined) ? SELF_SERVICE_ADMIN_ACCOUNT_STORAGE : `${accountCode}_${SELF_SERVICE_ADMIN_ACCOUNT_STORAGE}`;
  //     }
  //     else if (this.isOnePassAdminUrl()) {
  //         storageKey = (accountCode == undefined) ? ONEPASS_ADMIN_ACCOUNT_STORAGE : `${accountCode}_${ONEPASS_ADMIN_ACCOUNT_STORAGE}`;
  //     }
  //     else if (this.isAdminUrl()) {
  //         storageKey = (accountCode == undefined) ? ADMIN_ACCOUNT_STORAGE : `${accountCode}_${ADMIN_ACCOUNT_STORAGE}`;
  //     }
  //     else {
  //         storageKey = (accountCode == undefined) ? CLIENT_ACCOUNT_STORAGE : `${accountCode}_${CLIENT_ACCOUNT_STORAGE}`;
  //     }
  //     return storageKey;
  // }
  // private getMenuStorageKey() {
  //     let storageKey;
  //     let accountCode = this.getAccountCode();
  //     if (this.isAccountAdminUrl()) {
  //         storageKey = (accountCode == undefined) ? ACCOUNT_ADMIN_MENUS_STORAGE : `${accountCode}_${ACCOUNT_ADMIN_MENUS_STORAGE}`;
  //     }
  //     else if (this.isSelfSeviceUrl()) {
  //         storageKey = (accountCode == undefined) ? SELF_SERVICE_ADMIN_MENUS_STORAGE : `${accountCode}_${SELF_SERVICE_ADMIN_MENUS_STORAGE}`;
  //     }
  //     else if (this.isOnePassAdminUrl()) {
  //         storageKey = (accountCode == undefined) ? ONEPASS_ADMIN_MENUS_STORAGE : `${accountCode}_${ONEPASS_ADMIN_MENUS_STORAGE}`;
  //     }
  //     else if (this.isAdminUrl()) {
  //         storageKey = (accountCode == undefined) ? ADMIN_MENUS_STORAGE : `${accountCode}_${ADMIN_MENUS_STORAGE}`;
  //     }
  //     else {
  //         storageKey = (accountCode == undefined) ? CLIENT_MENUS_STORAGE : `${accountCode}_${CLIENT_MENUS_STORAGE}`;
  //     }
  //     return storageKey;
  // }
  // private getPermisionsStorageKey() {
  //     let storageKey;
  //     let accountCode = this.getAccountCode();
  //     if (this.isAccountAdminUrl()) {
  //         storageKey = (accountCode == undefined) ? ACCOUNT_ADMIN_PERMISSIONS : `${accountCode}_${ACCOUNT_ADMIN_PERMISSIONS}`;
  //     }
  //     else if (this.isSelfSeviceUrl()) {
  //         storageKey = (accountCode == undefined) ? SELF_SERVICE_ADMIN_PERMISSIONS : `${accountCode}_${SELF_SERVICE_ADMIN_PERMISSIONS}`;
  //     }
  //     else if (this.isOnePassAdminUrl()) {
  //         storageKey = (accountCode == undefined) ? ONEPASS_ADMIN_PERMISSIONS : `${accountCode}_${ONEPASS_ADMIN_PERMISSIONS}`;
  //     }
  //     else if (this.isAdminUrl()) {
  //         storageKey = (accountCode == undefined) ? ADMIN_PERMISSIONS : `${accountCode}_${ADMIN_PERMISSIONS}`;
  //     }
  //     else {
  //         storageKey = (accountCode == undefined) ? CLIENT_PERMISSIONS : `${accountCode}_${CLIENT_PERMISSIONS}`;
  //     }
  //     return storageKey;
  // }
  // private isAdminUrl() {
  //     return this.router.url.toLowerCase().indexOf('/admin') > -1;
  // }
  // private isAccountAdminUrl() {
  //     let accountCode: string;
  //     accountCode = this.getAccountCode();
  //     return location.href.toLowerCase().indexOf(`${accountCode}/admin`) > -1;
  // }
  // private isSelfSeviceUrl() {
  //     let accountCode: string;
  //     accountCode = this.getAccountCode();
  //     return location.href.toLowerCase().indexOf(`${accountCode}/self-service`) > -1;
  // }
  // private isOnePassAdminUrl() {
  //     return location.href.toLowerCase().indexOf(`admin`) > -1;
  // }
  // accountName() {
  //     var name: string;
  //     name = this.getClaim(UserClaimType.AccountName + '_' + this.locale.getCurrentLanguage());
  //     return name;
  // }
  // appName() {
  //     var name: string = this.getClaim(UserClaimType.AppName)
  //     return name;
  // }
  // isLoggedinBefore() {
  //     var name: string = this.getClaim(UserClaimType.IsLoggedinBefore)
  //     return name;
  // }
  // getAccountCode(): string {
  //     let url = location.href.toLowerCase().split(this.environment.systemUrl.toLowerCase());
  //     if (url[1] != undefined) {
  //         let arr = url[1].split('/');
  //         if (arr[0] && arr[0] != 'admin') {
  //             return arr[0].toLowerCase();
  //         }
  //     }
  //     return undefined;
  // }
  // getUserImage(): string {
  //     return this.getClaim(UserClaimType.UserImage);
  // }

  getAccountCode(): string {
    let url = location.href
      .toLowerCase()
      .split(/*this.environment.systemUrl.toLowerCase()*/ '');
    if (url[1] != undefined) {
      let arr = url[1].split('/');
      if (arr[0] && arr[0] != 'admin') {
        return arr[0].toLowerCase();
      }
    }
    return undefined;
  }

  hasPermision(permisions: string | string[]) {
    if (!permisions || permisions.length == 0) {
      return true;
    }
  }

  removeUser() {}
}
