import { TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { loginGuard } from './loginGuard';

import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

describe('YourGuardGuard', () => {
  let guard: loginGuard;
  const dummyRoute = {} as ActivatedRouteSnapshot;

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


  //dummyRoute es una variable vacia del tipo ActivatedRouterSnapshot a la cual canActivate no accede por lo que puede ser vacia
  //fakeRouterState se utiliza para pasarle las distintas URLs que se quieran probar y que tengan el tipado necesario
  it('should not route',() =>{
    let testLogin = guard.canActivate(dummyRoute, fakeRouterState('/crud'));
    expect(testLogin).toBeFalsy;
  })

  it('should route',() =>{
    localStorage.setItem('loggedUser', 'test');
    let testLogin = guard.canActivate(dummyRoute, fakeRouterState('/crud') );
    expect(testLogin).toBeTruthy;
  })
});

function fakeRouterState(url: string): RouterStateSnapshot {
  return {
    url,
  } as RouterStateSnapshot;
}