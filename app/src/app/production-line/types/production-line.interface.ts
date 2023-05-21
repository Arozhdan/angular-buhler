export enum ProductionLineStatus {
  LINE_RUNNING = 'running',
  LINE_WARNING = 'warning',
  LINE_ALARM = 'alarm',
}

export interface ProductionLine {
  id: string;
  name: string;
}

export interface Machine {
  id: string;
  name: string;
  icon: string;
  status: ProductionLineStatus;
  line: string;
}
