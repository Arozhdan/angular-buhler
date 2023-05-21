import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductionLineService } from './production-line.service';

@Component({
  selector: 'app-production-line',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './production-line.component.html',
  styleUrls: ['./production-line.component.scss'],
})
export class ProductionLineComponent {
  private route = inject(ActivatedRoute);
  private productionLineService = inject(ProductionLineService);
  productionLineId = this.route.snapshot.params['id'];

  machines = this.productionLineService.findMachinesByProductionLine(
    this.productionLineId
  );
  status = this.productionLineService.status;
}
