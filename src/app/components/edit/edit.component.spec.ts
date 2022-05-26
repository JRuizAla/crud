import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CrudService } from 'src/app/services/crud.service';

import { EditComponent } from './edit.component';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
      ],
      declarations: [EditComponent],
      providers: [CrudService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
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

  it('should save form data', () => {
    component.car = { id: 0, marca:'', modelo:'', anio: 0, color:''};
    component.marcasForm = 'Dacia';
    component.modelo.setValue('Sandero');
    component.anio.setValue(2012);
    component.colorForm = 'Blanco';
    component.saveForm();
    expect(component.car.marca).toEqual(component.marcasForm);
    expect(component.car.modelo).toEqual(component.modelo.value);
    expect(component.car.anio).toEqual(component.anio.value);
    expect(component.car.color).toEqual(component.colorForm);
  });

  it('should update form data', () => {
    component.car = { id: 1, marca:'Dacia', modelo:'Sandero', anio: 2012, color:'Blanco'};
    component.marcasForm = '';
    component.modelo.setValue('');
    component.anio.setValue(0);
    component.colorForm = '';
    component.updateForm();
    expect(component.marcasForm).toEqual(component.car.marca);
    expect(component.modelo.value).toEqual(component.car.modelo);
    expect(component.anio.value).toEqual(component.car.anio);
    expect(component.colorForm).toEqual(component.car.color);
  });

  it('should get marcas', () => {
    let spy = jest.spyOn(component, 'getMarcas');
    component.getMarcas();
    expect(spy).toBeCalled;
    expect(component.marcas.length).toBeGreaterThan(0);
  });
});
