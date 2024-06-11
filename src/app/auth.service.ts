import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userRole: string = 'guest';

  get userRole(): string {
    return this._userRole;
  }

  login(role: string) {
    this._userRole = role;
  }

  logout() {
    this._userRole = 'guest';
  }
}
