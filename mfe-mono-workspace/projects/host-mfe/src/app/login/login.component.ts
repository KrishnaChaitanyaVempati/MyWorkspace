import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared-service/auth.service';
import { HttpClient } from '@angular/common/http';
import { HttpApiService } from '../shared-service/http-api.service';
import { JWTTokenService } from '../shared-service/jwttoken.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signupForm: FormGroup;
  loginForm: FormGroup;
  isLoggedIn: boolean = true;
  isSignUp: boolean;
  unsavedChanges: boolean = true;
  jwtToken: any;
  signUpMsg: string;

  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder, private apiService: HttpApiService, private jwtService: JWTTokenService) {
    console.log('login component')
  }
  ngOnInit(): void {

    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    if (!this.isLoggedIn) {
      console.log('loading signup form');

    } else {
      console.log('loading login form');

    }

  }

  onLogin() { this.isLoggedIn = true; this.isSignUp = false; }

  onSignUp() {
    this.isSignUp = true;
    this.isLoggedIn = false;
  }

  get f() {
    return this.loginForm.controls;
  }

  onLoginSubmit(): void {

    if (this.loginForm.valid) {

      const { username, password } = this.loginForm.value;
      console.log('Username:', username);
      //console.log('Password:', password);

      const data = {
        userName: username,
        password: password,
      };

      this.apiService.loginApi(data).subscribe({
        next: (response) => {
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
          console.error('Error:', error);
        },
      });


    }
  }

  onSignUpSubmit() {
    if (this.signupForm.valid) {
      // console.log('Form Submitted!', this.signupForm.value);
      console.log('Username:', this.signupForm.get('username').value);
      console.log('email:', this.signupForm.get('email').value);
      this.unsavedChanges = false;

      const data = {
        userName: this.signupForm.get('username').value,
        emailId: this.signupForm.get('email').value,
        password: this.signupForm.get('password').value
      };

      this.apiService.registerApi(data).subscribe({
        next: (response) => {
          console.log('Success:', response);
          this.signUpMsg = response.userName + " - user details saved successfully"
          localStorage.setItem('user_name', data.userName);
          // alert('Details saved successfully');
          alert(this.signUpMsg);

          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.error('Error:', error);
        },
      });
      console.log('email:', this.signupForm.get('email').value);
    }
  }

  hasUnsavedChanges() {
    console.log('unsaved changes!', this.unsavedChanges);
    return this.unsavedChanges;
  }

  onClickBack() {
    console.log('clicked back, redirecting to login page');
    this.router.navigate(['/login']);
  }
}
