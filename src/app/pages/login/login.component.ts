import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  form: FormGroup;
  formRecovery: FormGroup;
  passwordRecoveryVisible: boolean = false;
  passwordVisible: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
    this.formRecovery = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]]
    });
  }

  get c() { return this.form.controls; }

  forgotPassword() {
    this.passwordRecoveryVisible = true;
  }

  hideRecovery() {
    this.passwordRecoveryVisible = false;
  }

  login() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    this.router.navigate(['/dashboard']);
  }

  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
  }
}
