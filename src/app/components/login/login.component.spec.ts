import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/model/user.model';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule, ReactiveFormsModule, NgbModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log in', ()=> {
    let x: any;
    let testUser: User = { id:1, username:'jesus', password:'jesus'}
    component.loginUsername.setValue('jesus');
    component.loginPassword.setValue('jesus');
    component.users[0] = testUser;
    let router = TestBed.get(Router);
    let spy = jest.spyOn( router, 'navigate');
    component.inicioSesion(x)
    expect(component.loggedUser).toEqual(testUser);
    expect(router.navigate).toHaveBeenCalledWith(['/crud']);
    console.log(component.loggedUser);
  });

  it('should not log in', ()=> {
    let x: any;
    let testUser: User = { id:1, username:'jesus', password:'jesus'}
    component.loginUsername.setValue('jesus');
    component.loginPassword.setValue('pepe');
    component.users[0] = testUser;
    component.inicioSesion(x)
    expect(component.loggedUser).toBeUndefined;
    console.log(component.loggedUser);
  });
});