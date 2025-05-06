import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanActivateChildFn, CanActivateFn, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { HostSignupComponent } from '../host-signup/host-signup.component';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate, CanActivateChild, CanDeactivate<HostSignupComponent> {

  constructor(private authService: AuthService, private router: Router) { }
  
  canDeactivate(component: HostSignupComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('unsaved changes!', component.hasUnsavedChanges());
    if (component.hasUnsavedChanges()) {
      return window.confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;
  }

  // canDeactivate(component: LoginComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   console.log('unsaved changes!', component.hasUnsavedChanges());
  //   if (component.hasUnsavedChanges()) {
  //     return window.confirm('You have unsaved changes. Do you really want to leave?');
  //   }
  //   return true;
  // }
  canActivateChild(): boolean {
    return this.checkAuth();
  }

  canActivate(): boolean {
    return this.checkAuth();
  }

  checkAuth() {
    if (this.authService.isLoggedIn()) {
      console.log('logged in');
      return true;
    } else {
      this.router.navigate(['/homeLogin']);
      // this.router.navigate(['/homeLogin/login']);
      console.log('redirecting to login page');
      return false;
    }
  }

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

}
