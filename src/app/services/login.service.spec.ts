import { TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { LoginService } from './login.service';

import { User } from '../model/user.model';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get users', () =>{
    let spy = jest.spyOn(service, 'getUsers').mockImplementation( () => 
      [
        {"id": 1, "username": "joel" , "password": "joel"},
        {"id": 2, "username": "yyyy" , "password": "yyyy"},
        {"id": 3, "username": "aaaa" , "password": "aaaa"},
        {"id": 4, "username": "bbbb" , "password": "bbbb"},
        {"id": 4, "username": "jesus" , "password": "1234"}
    ]
    );
    const users = service.getUsers();
    expect(spy).toBeCalled();
  });

  it('should close session',() => {
    localStorage.setItem('1','user');
    service.closeSesion();
    expect(localStorage.getItem('1')).toBeNull;
  })
});
