import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CrudService } from 'src/app/services/crud.service';

import { AddComponent } from './add.component';
import { Router } from '@angular/router';


describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ ReactiveFormsModule, RouterTestingModule, FormsModule, HttpClientModule],
      declarations: [ AddComponent ],
      providers:[ CrudService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close session', () => {
    let spy = jest.spyOn(component, 'closeSesion');
    component.closeSesion();
    expect(spy).toBeCalled;
  });

  it('should get cars', () => {
    let spy = jest.spyOn(component, 'getCars');
    component.getCars();
    expect(spy).toBeCalled;
  });

  it('should get marcas', () => {
    let spy = jest.spyOn(component, 'getMarcas');
    component.getMarcas();
    expect(spy).toBeCalled;
  });

  it('should add cars', () => {
    let router = TestBed.get(Router);
    let spy = jest.spyOn( router, 'navigate');
    let testCar = {id: 1, marca: 'rrari', modelo: 'Testarossa', anio: 1984, color: 'Rojo'};
    let size = component.cars.length;
    component.addCar(testCar);
    expect(component.cars.length).toEqual(size+1);
    expect(router.navigate).toHaveBeenCalledWith(['/crud']);
  })

  it('should return car', () => {
    let spy = jest.spyOn(component, 'getCarForm');
    let testCar = component.getCarForm();
    expect(spy).not.toBeNull;
  })
});
