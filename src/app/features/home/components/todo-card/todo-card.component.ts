import {Component, Input} from '@angular/core';
import {NgIconComponent, provideIcons} from "@ng-icons/core";
import {heroCheckCircle, heroEllipsisHorizontal, heroStar} from "@ng-icons/heroicons/outline";
import {Todo} from "../../../../core/models/todo.type";
import {heroCheckCircleSolid, heroStarSolid} from "@ng-icons/heroicons/solid";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [NgIconComponent, NgClass],
  viewProviders: [
    provideIcons({heroCheckCircle, heroStar, heroEllipsisHorizontal, heroCheckCircleSolid, heroStarSolid})
  ],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.css'
})
export class TodoCardComponent {

  @Input({required: true}) todo !: Todo

}
