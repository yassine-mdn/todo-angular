import {Component, OnInit} from '@angular/core';
import {PasswordFieldComponent} from "../../../../shared/components/password-field/password-field.component";
import {InputFieldComponent} from "../../../../shared/components/input-field/input-field.component";
import {LogoComponent} from "../../../../shared/components/logo/logo.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../../../core/services/auth.service";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    PasswordFieldComponent,
    InputFieldComponent,
    LogoComponent,
    ReactiveFormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit{

  loginForm = new FormGroup({
    email: new FormControl('',Validators.email),
    password: new FormControl('')
  })

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  submitLoginForm = () => {
    if (this.loginForm.value.email && this.loginForm.value.password)
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
  }
}
