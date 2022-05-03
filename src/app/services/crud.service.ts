import { Injectable } from '@angular/core';
import { coche } from '../mocks/coche';
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
