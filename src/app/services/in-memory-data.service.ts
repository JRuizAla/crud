import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import cochesData from 'src/app/mocks/coches.json'

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let coches = JSON.stringify(cochesData);
    return coches
  }
}