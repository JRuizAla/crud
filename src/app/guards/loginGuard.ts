import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
@Injectable({
  providedIn: 'root'
})
export class loginGuard implements CanActivate {
  constructor( private router: Router, private loginService: LoginService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(this.loginService.successfulLogin=false){return this.router.navigate(['']).then(() => false);}
    return true;
  }
  
}
