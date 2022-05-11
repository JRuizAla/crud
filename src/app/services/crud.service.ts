import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor( private router: Router) { }

  closeSesion():void{
    localStorage.clear();
    this.router.navigate(['']);
  }
}
