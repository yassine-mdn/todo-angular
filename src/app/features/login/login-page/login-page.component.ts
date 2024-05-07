import { Component } from '@angular/core';
import {PasswordFieldComponent} from "../../../shared/components/password-field/password-field.component";
import {InputFieldComponent} from "../../../shared/components/input-field/input-field.component";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    PasswordFieldComponent,
    InputFieldComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
