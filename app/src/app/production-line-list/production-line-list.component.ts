import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-production-line-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './production-line-list.component.html',
  styleUrls: ['./production-line-list.component.scss'],
})
export class ProductionLineListComponent {
  user = inject(AuthService).user;
  isLoggedIn = computed(() => !!this.user()?.id);
}
