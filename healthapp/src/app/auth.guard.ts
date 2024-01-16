import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { map, take, tap } from 'rxjs';



export const authGuard: CanActivateFn = (next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) => {

  const router: Router = inject(Router);
  const loggedUser: any = inject(AuthService).getLoggedInUser().pipe(take(1), map(authState => Boolean(authState)), tap(auth => !auth ? router.navigate(['login']) : true));


  return loggedUser;

};