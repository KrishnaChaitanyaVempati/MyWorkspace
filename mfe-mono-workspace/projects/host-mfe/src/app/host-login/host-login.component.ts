import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared-service/auth.service';
import { HttpApiService } from '../shared-service/http-api.service';
import { JWTTokenService } from '../shared-service/jwttoken.service';
import { environment } from 'projects/mfe5-webcomponent/src/environments/environment';

@Component({
  selector: 'app-host-login',
  templateUrl: './host-login.component.html',
  styleUrls: ['./host-login.component.scss']
})
export class HostLoginComponent implements OnInit {

  jwtToken: any;
  signUpMsg: string;
  passwordFieldType: string = 'password';
  isLoading = false;

  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder, private apiService: HttpApiService, private jwtService: JWTTokenService) { }

  loginForm: FormGroup;

  ngOnInit(): void {
    console.log('loading login form');
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  onLoginSubmit(): void {

    if (environment.production) {
      if (this.loginForm.valid) {

        const { username, password } = this.loginForm.value;
        console.log('Username:', username);
        //console.log('Password:', password);

        const data = {
          userName: username,
          password: password,
        };

        // added for loading bar
        this.isLoading = true;
        this.apiService.loginApi(data).subscribe({
          next: (response) => {
            this.isLoading = false;
            console.log('Success:', response);
            this.jwtToken = response;

            localStorage.setItem('user_name', username);
            localStorage.setItem('JWT_Token', this.jwtToken);
            this.jwtService.setToken(this.jwtToken);

            if (this.authService.login(username, password)) {
              this.router.navigate(['/homePage']);
            } else {
              alert('Invalid credentials');
            }

          },
          error: (error) => {
            this.isLoading = false;
            console.error('Error:', error);
            alert('Unauthorized: Invalid credentials');
          },
        });
      }
    } else {
      if (this.loginForm.valid) {

        const { username, password } = this.loginForm.value;
        console.log('Username:', username);
        localStorage.setItem('user_name', username);

        if (this.authService.login(username, password)) {
          this.router.navigate(['/homePage']);
        } else {
          alert('Invalid credentials');
        }

      }
    }

  }
}
