import { Injectable, inject } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PersistanceServiceService {
  authService = inject(AuthService);
  auth() {
    this.authService.localLogin();
  }
}
