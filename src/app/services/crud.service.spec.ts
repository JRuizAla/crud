import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HttpClientModule } from '@angular/common/http';

import { CrudService } from './crud.service';
import { Car } from '../model/coche.model';

describe('CrudService', () => {
  let service: CrudService;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get cars', () => {
    const testCars: Car[] = [
      {id: 1, marca: 'Ferrari', modelo: 'Testarossa', anio: 1984, color: 'Rojo'},
      {id: 2, marca: 'Lamborghini', modelo: 'Diablo', anio: 1990, color: 'Amarillo'},
      {id: 3, marca: 'Renault', modelo: 'Clio', anio: 2006, color: 'Gris'}
    ];

    service.getCars().subscribe((res) => {expect(res).toEqual(testCars)});

    const req = httpTestingController.expectOne(service.SERVER_URL);
    expect(req.request.method).toEqual('GET');

    req.flush(testCars);
  });

  it('should get one car', () => {
    const testCar: Car = 
      {id: 1, marca: 'Ferrari', modelo: 'Testarossa', anio: 1984, color: 'Rojo'};

    service.getCar(1).subscribe((res) => {expect(res).toEqual(testCar)});

    const req = httpTestingController.expectOne(`${service.SERVER_URL}/${testCar.id}`);
    expect(req.request.method).toEqual('GET');

    req.flush(testCar);
  });

  it('should add one car', () => {
    const testCar: Car = 
      {id: 1, marca: 'Ferrari', modelo: 'Testarossa', anio: 1984, color: 'Rojo'};

    service.addCarHttp(testCar).subscribe((res) => {expect(res).toEqual(testCar)});

    const req = httpTestingController.expectOne(`${service.SERVER_URL}`);
    expect(req.request.method).toEqual('POST');

    req.flush(testCar);
  });
  
  it('should edit one car', () => {
    const testCar: Car = 
      {id: 1, marca: 'Ferrari', modelo: 'Testarossa', anio: 1984, color: 'Rojo'};

    service.editCar(testCar).subscribe((res) => {expect(res).toEqual(testCar)});

    const req = httpTestingController.expectOne(`${service.SERVER_URL}/${testCar.id}`);
    expect(req.request.method).toEqual('PUT');

    req.flush(testCar);
  });

  it('should delete one car', () => {
    const testCar: Car = 
      {id: 1, marca: 'Ferrari', modelo: 'Testarossa', anio: 1984, color: 'Rojo'};

    service.deleteCar(testCar.id).subscribe((res) => {expect(res).toEqual(testCar)});

    const req = httpTestingController.expectOne(`${service.SERVER_URL}/${testCar.id}`);
    expect(req.request.method).toEqual('DELETE');

    req.flush(testCar.id);
  });

  it('Should get marcas',() => {
    let spy = jest.spyOn(service, 'getMarcas').mockImplementation(() => [
      { id: 1, marca: 'Volvo' },
      { id: 2, marca:'Citroen' },
    ]);
  const marcas = service.getMarcas();
  expect(spy).toBeCalled();
  })
});
