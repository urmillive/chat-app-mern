import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';

  private authSubject = new BehaviorSubject<boolean>(this.isAuthenticated());

  authStatus$ = this.authSubject.asObservable();

  constructor() {}

  login(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    this.authSubject.next(true);
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.authSubject.next(false);
  }

  isAuthenticated(): boolean {
    return true;
    return localStorage.getItem(this.TOKEN_KEY) !== null;
  }
}
