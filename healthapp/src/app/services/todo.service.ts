import { Injectable } from '@angular/core';
import { Todoitem } from '../Models/todoitem';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  toDos: Todoitem[] = [];
  toDo: Todoitem;
  newTodo: Todoitem;
  name: string = "";


  constructor() {
    this.toDo = new Todoitem(this.name);
    this.toDos.push(this.toDo);
    this.newTodo = new Todoitem("");
  }

  CreateTodo(todo: Todoitem) {
    this.toDos.push(todo);
  }

  GetTodo(Name: string): Todoitem {
    return this.toDos.find(x => x.name == Name)
  }

  GetTodos(): Observable<Todoitem[]> {
    const toDos = of(this.toDos)
    return toDos
  }

}
