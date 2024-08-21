import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const _Router=inject(Router)
 if(localStorage.getItem('userToken')!==null&&localStorage.getItem('role')=='SuperAdmin'){
    return true;
  }else{
    _Router.navigate(['/dashboard'])
    return false
  }
};
