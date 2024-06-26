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
  private todoUrl: 'api/Todoitems';


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

  // HTTP methods (don't work yet) :

  getTodo(id: number): Observable<Todoitem> {
    const url = `${this.todoUrl}/${id}`;
    return this.Http.get<Todoitem>(url);

  }
  getTodos1(): Observable<Todoitem[]> {
    return this.Http.get<Todoitem[]>(this.todoUrl);
  }

  postTodo1(todo: Todoitem): Observable<Todoitem> {
    return this.Http.post<Todoitem>(this.todoUrl, todo);
  }

}
