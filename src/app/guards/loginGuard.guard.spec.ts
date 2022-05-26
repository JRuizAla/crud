import { TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { loginGuard } from './loginGuard';

import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

describe('YourGuardGuard', () => {
  let guard: loginGuard;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(loginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should not route',() =>{
    let testLogin = guard.canActivate;
    expect(testLogin).toBeFalsy;
  })

  it('should route',() =>{
    localStorage.setItem('loggedUser', 'test');
    let testLogin = guard.canActivate;
    expect(testLogin).toBeTruthy;
  })
});
