import { Component, Signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { User } from '../types/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor() {}
  private auth = inject(AuthService);
  private router = inject(Router);
  user: Signal<User | undefined> = this.auth.user;
  handleClick() {
    this.user()?.name ? this.auth.logout() : this.auth.login();
    this.router.navigate(['/']);
  }
}
