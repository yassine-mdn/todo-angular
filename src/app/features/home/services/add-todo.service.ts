import {Injectable} from '@angular/core';
import PocketBase from "pocketbase";
import {Todo} from "../../../core/models/todo.type";

@Injectable({
  providedIn: 'root'
})
export class AddTodoService {

  pb = new PocketBase('http://127.0.0.1:8090');

  constructor() {
  }

  addTodo$(item:string): Promise<Todo> {
    return this.pb.collection('Todo').create({
      "item": item,
      "creator_id": this.pb.authStore?.model!['id'],
      "is_completed": false,
      "is_important": false
    })
  }

}
