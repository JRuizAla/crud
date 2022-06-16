import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

@Injectable({
  providedIn: 'root'
})
export class loginGuard /*implements CanActivate*/ {
  constructor( private router: Router) {
  }
  /*canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(localStorage.getItem('loggedUser') === null){return this.router.navigate(['']).then(() => false);}
    return true;
  }*/
  
}
