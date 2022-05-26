import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { CrudService } from 'src/app/services/crud.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

import { CrudComponent } from './crud.component';

describe('CrudComponent', () => {
  let component: CrudComponent;
  let fixture: ComponentFixture<CrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule, HttpClientModule],
      declarations: [ CrudComponent ],
      providers: [ CrudService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudComponent);
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

  it('should route to edit with car id', () =>{
    let router = TestBed.get(Router);
    let spy = jest.spyOn( router, 'navigate');
    let testCar = {id: 1, marca: 'Ferrari', modelo: 'Testarossa', anio: 1984, color: 'Rojo'};
    component.editCar(testCar);
    expect(router.navigate).toHaveBeenCalledWith(['edit',testCar.id ]);
  });

  it('should delete one car', () => {
    let testCar = {id: 1, marca: 'Ferrari', modelo: 'Testarossa', anio: 1984, color: 'Rojo'};
    component.coches = [testCar];
    let size : number = component.coches.length;
    component.deleteCar(testCar);
    expect(component.coches.length).toEqual(size-1);
  });
});
