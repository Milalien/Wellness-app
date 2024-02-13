import { Injectable } from '@angular/core';
import { Todoitem } from '../Models/todoitem';
import { Observable, of } from 'rxjs';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todoitem[] = [];

  constructor(private Http: HttpClient, public userService: UserService) {

  }

  CreateTodo(todo: Todoitem) {
    this.todos.push(todo);
    console.log(todo);
  }

  GetTodo() {
    return this.todos;
  }

  GetTodos(): Observable<Todoitem[]> {
    const toDos = of(this.todos)
    return toDos
  }

}
