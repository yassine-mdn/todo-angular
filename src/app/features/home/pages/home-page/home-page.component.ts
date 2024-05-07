import { Component } from '@angular/core';
import {LogoComponent} from "../../../../shared/components/logo/logo.component";
import {AddTodoFormComponent} from "../../components/add-todo-form/add-todo-form.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    LogoComponent,
    AddTodoFormComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
