import { Injectable } from '@angular/core';
import PocketBase from "pocketbase";
import {Todo} from "../../../core/models/todo.type";

@Injectable({
  providedIn: 'root'
})
export class GetTodoService {

  pb = new PocketBase('http://127.0.0.1:8090');

  constructor() {
    this.pb.autoCancellation(false)
  }

  getTasks$ () : Promise<Todo[]> {
    return this.pb.collection('Todo').getFullList({
      filter: 'is_important = false',
      sort: '-created',
    })
  }

  getImportantTasks$ () : Promise<Todo[]> {
    return this.pb.collection('Todo').getFullList({
      filter: 'is_important = true',
      sort: '-created',
    })
  }
}
