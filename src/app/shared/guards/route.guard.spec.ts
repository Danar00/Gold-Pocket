import { LoginComponent } from './../../login/components/login.component';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FlashMessageService } from '../services/flash/flash.service';

import { RouteGuard } from './route.guard';

describe('RouteGuard', () => {
  let guard: RouteGuard;
  let router: Router
  let flashService: FlashMessageService
  let activatedRouteSnapshot: ActivatedRouteSnapshot
  let routerStateSnapshot: RouterStateSnapshot
  let routeMock: any = { snapshot: {} };
  let routeStateMock: any = { snapshot: {}, url: '/' };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        { path: 'login', component: LoginComponent },
      ])],
      providers: [RouteGuard]
    });
    guard = TestBed.inject(RouteGuard);
    router = TestBed.inject(Router);
    flashService = TestBed.inject(FlashMessageService)
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should have method canActivate', () => {
    expect(guard.canActivate(routeMock, routeStateMock)).toBeTruthy();
  });

  it('should have method canActivateChild', () => {
    expect(guard.canActivateChild(routeMock, routeStateMock)).toBeTruthy();
  });

});
