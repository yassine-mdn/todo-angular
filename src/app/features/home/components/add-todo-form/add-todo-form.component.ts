import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIconComponent, provideIcons} from "@ng-icons/core";
import {heroPlus} from "@ng-icons/heroicons/outline";
import {AddTodoService} from "../../services/add-todo.service";

@Component({
  selector: 'app-add-todo-form',
  standalone: true,
  imports: [
    FormsModule,
    NgIconComponent,
    ReactiveFormsModule
  ],
  viewProviders: [provideIcons({heroPlus})],
  templateUrl: './add-todo-form.component.html',
  styleUrl: './add-todo-form.component.css'
})
export class AddTodoFormComponent implements OnInit {

  addTodoForm = new FormGroup({
    item: new FormControl('')
  })

  constructor(private addTodoService: AddTodoService) {
  }

  ngOnInit() {
  }

  addToDo() {
    if (!this.addTodoForm.value.item)
      return;
    this.addTodoService.addTodo$(this.addTodoForm.value.item).then(() => {
      this.addTodoForm.reset()
    })
  }
}
