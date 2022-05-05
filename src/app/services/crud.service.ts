import { Injectable } from '@angular/core';
import { coche } from '../model/coche.model';
import cochesData from '../mocks/coches.json';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor() { }
  
  getCoches(): coche[] {
    return cochesData;
  }

}
