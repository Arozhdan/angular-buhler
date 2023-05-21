import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { Machine } from './types/production-line.interface';
import { toSignal } from '@angular/core/rxjs-interop';

enum loadingStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  ERROR = 'error',
}

@Injectable({
  providedIn: 'root',
})
export class ProductionLineService {
  private machinesSubject = new BehaviorSubject<Machine[]>([]);
  private machines = toSignal(this.machinesSubject);

  status = signal(loadingStatus.IDLE);

  private http = inject(HttpClient);

  findMachinesByProductionLine(lineId: string) {
    this.status.set(loadingStatus.LOADING);
    this.http
      .get<Machine[]>(`http://localhost:3004/machines?q=${lineId}`)
      .pipe(
        tap((machines: Machine[]) =>
          setTimeout(() => {
            this.machinesSubject.next(machines);
            this.status.set(loadingStatus.IDLE);
          }, 1000)
        ),
        catchError(this.handleError.bind(this))
      )
      .subscribe();
    return this.machines;
  }

  private handleError(error: HttpErrorResponse) {
    this.machinesSubject.next([]);
    this.status.set(loadingStatus.ERROR);
    return throwError(() => 'Error');
  }
}
