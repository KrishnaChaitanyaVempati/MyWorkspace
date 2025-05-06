import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpApiService } from '../shared-service/http-api.service';

@Component({
  selector: 'app-host-signup',
  templateUrl: './host-signup.component.html',
  styleUrls: ['./host-signup.component.scss']
})
export class HostSignupComponent implements OnInit {

  signupForm: FormGroup;
  unsavedChanges: boolean = true;
  signUpMsg: string;
  passwordFieldType: string = 'password';
  isLoading = false;

  constructor(private fb: FormBuilder, private router: Router, private apiService: HttpApiService) {

  }

  ngOnInit(): void {
    console.log('loading signup form');
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6),
      // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+])[A-Za-z\\d!@#$%^&*()_+]'), 
      passwordStrengthValidator()]]
    });
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

      // added for loading bar
      this.isLoading = true;
      this.apiService.registerApi(data).subscribe({
        next: (response) => {
          this.isLoading = false;
          console.log('Success:', response);
          this.signUpMsg = response.userName + " - user details saved successfully"
          localStorage.setItem('user_name', data.userName);
          // alert('Details saved successfully');
          alert(this.signUpMsg);

          this.router.navigate(['homeLogin/login']);
        },
        error: (error) => {
          this.isLoading = false;
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
    this.router.navigate(['homeLogin/login']);
  }

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

}
function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ({ [key: string]: any } | null) => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const hasLowerCase = /[a-z]+/.test(value);
    const hasUpperCase = /[A-Z]+/.test(value);
    const hasNumeric = /[0-9]+/.test(value);
    const hasSpecialChar = /[!@#$%^&*()_+]/.test(value);
    const passwordValid = hasLowerCase && hasUpperCase && hasNumeric && hasSpecialChar;
    return !passwordValid ? { passwordStrength: true } : null;
  };
}

