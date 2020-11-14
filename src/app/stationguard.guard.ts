import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {QrCounterServiceService} from './services/qr-counter-service.service';

@Injectable({
  providedIn: 'root'
})
export class StationguardGuard implements CanActivate {
  constructor(private qrCounter: QrCounterServiceService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('ssa:' + route.url[1].path + ' ' + Number(route.url[1].path));
    return Number(route.url[1].path) <= this.qrCounter.lastCounter;
  }
}
