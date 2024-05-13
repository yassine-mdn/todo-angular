import {Component, OnInit} from '@angular/core';
import {LogoComponent} from "../../../../shared/components/logo/logo.component";
import {AddTodoFormComponent} from "../../components/add-todo-form/add-todo-form.component";
import {TodoCardComponent} from "../../components/todo-card/todo-card.component";
import {Todo} from "../../../../core/models/todo.type";
import {GetTodoService} from "../../services/get-todo.service";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    LogoComponent,
    AddTodoFormComponent,
    TodoCardComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {

  todos !: Todo[]
  importantTodos !: Todo[]

  constructor(private getTodoService: GetTodoService) {
  }

  ngOnInit() {
    this.getTodoService.getTasks$().then(res => this.todos = res)
    this.getTodoService.getImportantTasks$().then(res => this.importantTodos = res)
  }

}
