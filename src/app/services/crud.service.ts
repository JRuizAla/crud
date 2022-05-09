import { Injectable } from '@angular/core';
import { Coche } from '../model/coche.model';
import cochesData from '../mocks/coches.json';
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
