import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {QrCounterServiceService} from './services/qr-counter-service.service';

@Injectable({
  providedIn: 'root'
})
export class StationguardGuard implements CanActivate {
  constructor(private qrCounter: QrCounterServiceService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (route.url[1].path === '1' && !this.qrCounter.isLandingPageViewed()) {
      this.router.navigate(['/landing']);
      return false;
    }
    return Number(route.url[1].path) <= this.qrCounter.lastCounter;
  }
}
