import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIconComponent, provideIcons} from "@ng-icons/core";
import {heroEye, heroEyeSlash} from "@ng-icons/heroicons/outline";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-password-field',
  standalone: true,
  imports: [
    NgIconComponent,
    ReactiveFormsModule,
  ],
  viewProviders: [
    provideIcons({heroEye,heroEyeSlash})
  ],
  templateUrl: './password-field.component.html',
  styleUrl: './password-field.component.css'
})
export class PasswordFieldComponent {

  @Input({required: false}) isPasswordShown = false;
  @Input() label: string = '';
  @Output() valueChange = new EventEmitter<string>();

  control: FormControl = new FormControl('', Validators.required);

  get value(): string {
    return this.control.value;
  }

  set value(val: string) {
    this.control.setValue(val);
    this.valueChange.emit(val);
  }

  changPasswordVisibility() {
    this.isPasswordShown = !this.isPasswordShown;
  }

}
