import {Component} from '@angular/core';
import {NgIconComponent, provideIcons} from "@ng-icons/core";
import {heroCheckBadgeSolid} from "@ng-icons/heroicons/solid";

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [
    provideIcons({heroCheckBadgeSolid})
  ],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent {

}
