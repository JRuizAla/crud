import { TestBed } from '@angular/core/testing';

import { InMemoryDataService } from './in-memory-data.service';

import { Car } from 'src/app/model/coche.model';
import { Observable } from 'rxjs';

describe('InMemoryDataService', () => {
  let service: InMemoryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create database', () => {
    let testCars = service.createDb();
    expect(testCars.cars.length).toBeGreaterThan(0);
  });
});
