import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {QrCounterServiceService} from './services/qr-counter-service.service';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StationguardGuard implements CanActivate {
  constructor(private qrCounter: QrCounterServiceService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (route.url[0].path === 'landing'){
      return true;
    }
    if (environment.haveToVisitLandingPage && !this.qrCounter.isLandingPageViewed()) {
      this.router.navigate(['/landing']);
      return false;
    }
    return Number(route.url[1].path) <= this.qrCounter.lastCounter;
  }
}
