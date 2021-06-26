import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FlashMessageService } from '../services/flash/flash.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate, CanActivateChild {

  constructor(
    private readonly router: Router,
    private readonly flash: FlashMessageService
  ){}

  protected authorize(
    activatedRoute: ActivatedRouteSnapshot,
    activatedState: RouterStateSnapshot): boolean {

    const credentials = sessionStorage.getItem('credentials');
    
    console.log(activatedState.url);
    if(!credentials) {
      //Jika Credential tdk ada maka akan redirect ke page login
      this.flash.set(activatedState.url)
      // sessionStorage.setItem('redirectBackUrl', activatedState.url)
      this.router.navigateByUrl('/login');
    }
    
    return true
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
    return this.authorize(route, state);
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
    return this.authorize(route, state);;
  }
  
}
