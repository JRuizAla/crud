import { Injectable } from '@angular/core';
import { Coche } from '../model/coche.model';
import cochesData from '../mocks/coches.json';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor() { }
  
  getCoches(): Coche[] {
    return cochesData;
  }

}
