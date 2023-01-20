import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!window.localStorage['token']) {
        if (route.url[0].path === 'register') {
          this.router.navigate(['register']);
          return false;
        } else {
          return true;
        }
      } else {
        if (route.url[0].path === '') {
          this.router.navigate(['']);
          return false;
        } else {
          return true;
        }
      }
  }

}
