import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../service/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class RequireAutenticationGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    if(!this.userService.isLogged()) {
      this.router.navigate([ '' ],
        {
          queryParams: {
            fromUrl: state.url
          }
        });
      return false;
    }
    return true;
  }
}
