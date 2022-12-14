import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';
const USER_NAME = "username";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, token);
  }

  public saveUsername(username: string): void {
    window.sessionStorage.removeItem(USER_NAME);
    window.sessionStorage.setItem(USER_NAME, username);
  }

  public getToken(): string {
    const token = window.sessionStorage.getItem(USER_KEY);
    if (token) {
      return token;
    }

    return "";
  }

  public getUsername(): string {
    const token = window.sessionStorage.getItem(USER_NAME);
    if (token) {
      return token;
    }

    return "";
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }

    return false;
  }
}