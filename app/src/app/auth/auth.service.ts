import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  BehaviorSubject,
  Observable,
  catchError,
  map,
  of,
  tap,
  throwError,
} from 'rxjs';
import { User } from './types/user.interface';

export enum AuthKey {
  USER = 'user',
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  private userSubject$ = new BehaviorSubject<User | undefined>(undefined);
  user = toSignal(this.userSubject$.asObservable() ?? of(undefined));

  localLogin() {
    const user = localStorage.getItem(AuthKey.USER);
    this.userSubject$.next(user ? JSON.parse(user) : undefined);
  }

  login() {
    return this.http
      .get<User>('http://localhost:3004/users/1')
      .pipe(
        tap((user) => {
          if (!user) throw new Error('User not found');
          this.userSubject$.next(user);
          localStorage.setItem(AuthKey.USER, JSON.stringify(user));
        }),
        catchError(this.handleError)
      )
      .subscribe();
  }

  logout() {
    this.userSubject$.next(undefined);
    localStorage.removeItem(AuthKey.USER);
  }

  private handleError(error: HttpErrorResponse) {
    console.log('Error', error);
    return throwError(() => 'Error');
  }
}
