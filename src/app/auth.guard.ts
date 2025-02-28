import { CanActivateFn, Router } from '@angular/router';
import { UtilsService } from './utils.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const utils = inject(UtilsService);
  const router = inject(Router);

  if(!utils.isUserLoggedIn.value){
    router.navigate(['/home']);
  }
  return utils.isUserLoggedIn.value;
};
