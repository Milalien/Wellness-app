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
  todoUrl: string = "xx";


  constructor(private Http: HttpClient, public userService: UserService) {

  }
  deleteTodo(name: String) {
    this.todos.splice(this.todos.findIndex(t => t.name === name), 1)
  }

  postTodo(todo: Todoitem) {
    this.todos.push(todo);

  }

  GetTodo() {
    return this.todos;
  }

  GetTodos(): Observable<Todoitem[]> {
    const toDos = of(this.todos)
    return toDos
  }

  getTodo1() {
    return this.Http.get<Todoitem>(this.todoUrl);
  }

  postData(todo: Todoitem): Observable<Todoitem> {
    return this.Http.post<Todoitem>(this.todoUrl, todo).pipe();
  }

}
