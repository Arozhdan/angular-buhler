import { Component, Input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Machine } from 'src/app/production-line/types/production-line.interface';

@Component({
  selector: 'app-machine-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './machine-card.component.html',
  styleUrls: ['./machine-card.component.scss'],
})
export class MachineCardComponent {
  @Input({ required: true }) machine!: Machine;
  @Input() variant: 'default' | 'compact' = 'default';

  statusIcon = computed(() => {
    switch (this.machine.status) {
      case 'running':
        return 'restart_alt';
      case 'warning':
        return 'warning';
      case 'alarm':
        return 'error';
      default:
        return 'help';
    }
  });
}
