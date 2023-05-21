import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { PersistanceServiceService } from './persistance-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './ui/app.component.html',
  styleUrls: ['./ui/app.component.scss'],
})
export class AppComponent implements OnInit {
  persistanceService = inject(PersistanceServiceService);

  ngOnInit(): void {
    this.persistanceService.auth();
  }
}
