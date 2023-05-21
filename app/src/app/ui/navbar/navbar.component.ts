import {
  Component,
  OnDestroy,
  OnInit,
  WritableSignal,
  computed,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { formatDateTime } from 'src/app/shared/helpers/dates';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  user = inject(AuthService).user;

  interval?: ReturnType<typeof setInterval>;
  liveTime: WritableSignal<Date> = signal(new Date());

  formatedTime = computed(() => {
    const liveTime = this.liveTime();
    return formatDateTime(liveTime);
  });

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.liveTime.set(new Date());
    }, 1000);
  }
  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
