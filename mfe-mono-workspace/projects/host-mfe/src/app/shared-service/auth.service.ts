import { Injectable } from '@angular/core';
import { JWTTokenService } from './jwttoken.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private jwtService: JWTTokenService) { }

  private isAuthenticated = false;

  login(username: string, password: string): boolean {

    // if (username === 'chaitanya' && password === 'chaitanya@123') {
    //   this.isAuthenticated = true;
    //   return true;
    // }
    if (this.jwtService.getUser()) {
      if (!this.jwtService.isTokenExpired()) {

        this.isAuthenticated = true;
        return true;
      } else {
        // Should Redirect Sign-In Page
        return false;
      }
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('JWT_Token');
    console.log('logged out');
  }

  isLoggedIn(): boolean {
    console.log('checking auth');
    return this.isAuthenticated;
  }

}
